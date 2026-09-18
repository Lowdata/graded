import os
import zipfile
import glob
import shutil

GRADED_DIR = "/Users/ayushpahuja/tests/graded/GRADED"

def main():
    zip_files = sorted(glob.glob(os.path.join(GRADED_DIR, "*.zip")))
    print(f"Found {len(zip_files)} zip files to extract.")

    for i, zpath in enumerate(zip_files, 1):
        zname = os.path.basename(zpath)
        print(f"[{i}/{len(zip_files)}] Extracting {zname}...")
        
        # Determine prefix and tier from filename: e.g. "01_Green_pokemon_cards_250.zip"
        parts = zname.split("_")
        prefix = parts[0]  # e.g. "01"
        tier = parts[1]    # e.g. "Green"
        target_dir_name = f"{prefix}_{tier}_cards"
        target_dir_path = os.path.join(GRADED_DIR, target_dir_name)

        with zipfile.ZipFile(zpath, 'r') as z:
            # Check the root folder inside the zip
            top_folders = set()
            for member in z.namelist():
                top = member.split('/')[0]
                if top:
                    top_folders.add(top)
            
            # Extract to GRADED_DIR
            z.extractall(GRADED_DIR)

        # Find the extracted folder
        for tf in top_folders:
            extracted_path = os.path.join(GRADED_DIR, tf)
            if os.path.isdir(extracted_path) and extracted_path != target_dir_path:
                if os.path.exists(target_dir_path):
                    shutil.rmtree(target_dir_path)
                os.rename(extracted_path, target_dir_path)

        # Verify extracted cards
        card_pngs = [f for f in os.listdir(target_dir_path) if f.endswith('.png')]
        if len(card_pngs) != 250:
            raise RuntimeError(f"Extraction verification failed for {zname}! Expected 250 PNGs, found {len(card_pngs)} in {target_dir_path}")

        # Delete the zip file
        os.remove(zpath)
        print(f"  -> Extracted {len(card_pngs)} cards to {target_dir_name} and deleted {zname}")

    print("\nAll zip files extracted and removed successfully!")

if __name__ == "__main__":
    main()
