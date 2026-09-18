#!/usr/bin/env python3
import os
import re
import csv
import sys
import glob
import argparse
from typing import List, Dict, Tuple, Optional
from PIL import Image
from concurrent.futures import ProcessPoolExecutor

GRADED_DIR = "/Users/ayushpahuja/tests/graded/GRADED"
CHARACTERS_DIR = os.path.join(GRADED_DIR, "characters", "Characters")
OUTPUT_DIR = os.path.join(GRADED_DIR, "output")

def get_tier_folders() -> List[Tuple[str, str, str]]:
    """
    Returns a sorted list of (folder_name, tier_number, tier_name).
    e.g. ('01_Green_cards', '01', 'Green')
    """
    pattern = os.path.join(GRADED_DIR, "*_cards")
    folders = sorted(glob.glob(pattern))
    result = []
    for f in folders:
        bname = os.path.basename(f)
        m = re.match(r"^(\d+)_([A-Za-z]+)_cards$", bname)
        if m:
            prefix, tier = m.groups()
            result.append((bname, prefix, tier))
        else:
            # Fallback
            result.append((bname, "00", bname.replace("_cards", "")))
    return result

def get_character_files() -> Dict[str, str]:
    """
    Maps pokemon name to its character image filename in CHARACTERS_DIR.
    Handles special characters like Farfetch'd -> Farfetch_d.png.
    """
    files = [f for f in os.listdir(CHARACTERS_DIR) if f.endswith(".png")]
    char_map = {}
    for f in files:
        name_no_ext = os.path.splitext(f)[0]
        char_map[name_no_ext] = f
    return char_map

def find_char_file(pokemon_name: str, char_map: Dict[str, str]) -> Optional[str]:
    if pokemon_name in char_map:
        return char_map[pokemon_name]
    # Check normalized
    norm = pokemon_name.replace("'", "_")
    if norm in char_map:
        return char_map[norm]
    # Case-insensitive search
    for k, v in char_map.items():
        if k.lower() == pokemon_name.lower() or k.lower() == norm.lower():
            return v
    return None

def get_pokemon_list() -> List[Tuple[str, str]]:
    """
    Discovers all 250 pokemon by inspecting the first tier folder cards.
    Returns sorted list of (card_number, pokemon_name), e.g. [('001', 'Bulbasaur'), ...]
    """
    tier_folders = get_tier_folders()
    if not tier_folders:
        raise RuntimeError("No tier card folders found!")
    first_folder = os.path.join(GRADED_DIR, tier_folders[0][0])
    card_files = sorted([f for f in os.listdir(first_folder) if f.endswith(".png")])
    pokemon_list = []
    for f in card_files:
        m = re.match(r"^(\d+)_(.+)\.png$", f)
        if m:
            num, name = m.groups()
            pokemon_list.append((num, name))
    return pokemon_list

def composite_single_card(task: dict) -> dict:
    """
    Worker task: composites a character onto a card frame and saves to output_path.
    """
    card_path = task["card_path"]
    char_path = task["char_path"]
    output_path = task["output_path"]

    with Image.open(card_path) as card_img:
        card_img = card_img.convert("RGBA")
        with Image.open(char_path) as char_img:
            char_img = char_img.convert("RGBA")
            comp = Image.alpha_composite(card_img, char_img)
            comp.save(output_path, "PNG")

    return {
        "tokenID": task["tokenID"],
        "name": task["name"],
        "description": task["description"],
        "file_name": task["file_name"],
        "external_url": task["external_url"],
        "attributes[Tier]": task["tier"],
        "attributes[Pokemon]": task["pokemon_name"],
        "attributes[Card]": task["card_num"]
    }

def main():
    parser = argparse.ArgumentParser(description="Graded Pokemon Card Image & Metadata Generator")
    parser.add_argument("--character", type=str, default=None, help="Specific Pokemon to generate (e.g. Bulbasaur)")
    parser.add_argument("--all", action="store_true", help="Generate cards for all 250 Pokemon")
    parser.add_argument("--output-dir", type=str, default=OUTPUT_DIR, help="Output directory for images and metadata")
    parser.add_argument("--workers", type=int, default=8, help="Number of parallel worker processes")
    args = parser.parse_args()

    os.makedirs(args.output_dir, exist_ok=True)
    tier_folders = get_tier_folders()
    char_map = get_character_files()
    pokemon_list = get_pokemon_list()

    print(f"Found {len(tier_folders)} tier card folders.")
    print(f"Found {len(char_map)} character images.")
    print(f"Found {len(pokemon_list)} Pokemon lineages in card sets.")

    # Filter target pokemon
    if args.character:
        selected_pokemon = [p for p in pokemon_list if p[1].lower() == args.character.lower()]
        if not selected_pokemon:
            # Check if name is in char_map
            found_char = find_char_file(args.character, char_map)
            if not found_char:
                print(f"Error: Character '{args.character}' not found!")
                sys.exit(1)
            # Find in pokemon_list by normalized comparison
            selected_pokemon = [p for p in pokemon_list if p[1].lower() == os.path.splitext(found_char)[0].lower()]
            if not selected_pokemon:
                print(f"Error: Card template for '{args.character}' not found!")
                sys.exit(1)
    elif args.all:
        selected_pokemon = pokemon_list
    else:
        print("No --character or --all specified. Defaulting to '--character Bulbasaur' for verification.")
        selected_pokemon = [p for p in pokemon_list if p[1].lower() == "bulbasaur"]

    print(f"Target Pokemon count: {len(selected_pokemon)}")
    print(f"Total cards to generate: {len(selected_pokemon) * len(tier_folders)}")

    tasks = []
    token_id = 1

    for card_num, poke_name in selected_pokemon:
        char_file = find_char_file(poke_name, char_map)
        if not char_file:
            print(f"Warning: Character file for {poke_name} not found! Skipping.")
            continue
        char_path = os.path.join(CHARACTERS_DIR, char_file)

        for folder_name, prefix, tier in tier_folders:
            # Look for card template in this folder
            card_filename = f"{card_num}_{poke_name}.png"
            card_path = os.path.join(GRADED_DIR, folder_name, card_filename)
            if not os.path.exists(card_path):
                # Try Farfetch'd variation if needed
                alt_name = poke_name.replace('_', "'")
                alt_card_filename = f"{card_num}_{alt_name}.png"
                alt_card_path = os.path.join(GRADED_DIR, folder_name, alt_card_filename)
                if os.path.exists(alt_card_path):
                    card_path = alt_card_path
                else:
                    print(f"Warning: Card template not found: {card_path}")
                    continue

            out_file_name = f"{token_id}.png"
            out_path = os.path.join(args.output_dir, out_file_name)

            card_title = f"{poke_name} {tier} (#{card_num})"
            desc = f"30th Anniversary Graded Card: {poke_name} (#{card_num}) in {tier} Tier."
            external_url = ""

            tasks.append({
                "tokenID": token_id,
                "name": card_title,
                "description": desc,
                "file_name": out_file_name,
                "external_url": external_url,
                "card_path": card_path,
                "char_path": char_path,
                "output_path": out_path,
                "tier": tier,
                "pokemon_name": poke_name,
                "card_num": card_num
            })
            token_id += 1

    print(f"Compositing {len(tasks)} cards using {args.workers} worker processes...")

    records = []
    with ProcessPoolExecutor(max_workers=args.workers) as executor:
        for idx, record in enumerate(executor.map(composite_single_card, tasks), 1):
            records.append(record)
            if idx % 250 == 0 or idx == len(tasks):
                print(f"  Processed {idx}/{len(tasks)} images...")

    # Sort records by tokenID to guarantee order
    records.sort(key=lambda r: r["tokenID"])

    # Write CSV
    csv_path = os.path.join(args.output_dir, "metadata.csv")
    fieldnames = [
        "tokenID",
        "name",
        "description",
        "file_name",
        "external_url",
        "attributes[Tier]",
        "attributes[Pokemon]",
        "attributes[Card]"
    ]

    with open(csv_path, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(records)

    print(f"\nSuccessfully generated {len(records)} images in: {args.output_dir}")
    print(f"Metadata CSV saved to: {csv_path}")

if __name__ == "__main__":
    main()
