// ============================================================
// CONFIGURABLE: Change this date to update the countdown
// ============================================================
export const ANNIVERSARY_DATE = new Date("2026-09-16T00:00:00Z");

// ============================================================
// SITE CONFIG
// ============================================================
export const SITE_CONFIG = {
  title: "Pokémon 30th Anniversary",
  subtitle: "1996 — 2026",
  description:
    "Three decades. One adventure. Millions of memories. An unofficial fan tribute to 30 years of Pokémon.",
  disclaimer:
    "This is an unofficial, fan-made anniversary experience. Not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak, or The Pokémon Company. Pokémon and all related names are trademarks of their respective owners.",
};

// ============================================================
// STATS
// ============================================================
export const STATS = [
  { value: 30, suffix: "", label: "YEARS", decimals: 0 },
  { value: 1996, suffix: "", label: "FIRST RELEASE", decimals: 0 },
  { value: 151, suffix: "", label: "ORIGINAL POKÉMON", decimals: 0 },
  { value: 1, suffix: "B+", label: "CARDS SOLD", decimals: 0 },
];

// ============================================================
// GENERATIONS
// ============================================================
export interface Generation {
  id: number;
  roman: string;
  region: string;
  year: string;
  yearNum: number;
  title: string;
  description: string;
  signaturePokemon: string;
  color: string;
  accentColor: string;
  pokemonCount: number;
}

export const GENERATIONS: Generation[] = [
  {
    id: 1,
    roman: "I",
    region: "KANTO",
    year: "1996",
    yearNum: 1996,
    title: "Pokémon Red & Green",
    description:
      "The journey begins in Japan. Pokémon Red and Green launch on Game Boy, introducing 151 Pokémon and a world that would change gaming forever.",
    signaturePokemon: "PIKACHU",
    color: "#E53935",
    accentColor: "#FF6F60",
    pokemonCount: 151,
  },
  {
    id: 2,
    roman: "II",
    region: "JOHTO",
    year: "1999",
    yearNum: 1999,
    title: "Pokémon Gold & Silver",
    description:
      "Day-night cycles, breeding, and 100 new Pokémon expand the world. A new region adjoins Kanto for a seamless dual-continent adventure.",
    signaturePokemon: "LUGIA",
    color: "#FFB300",
    accentColor: "#FFD54F",
    pokemonCount: 100,
  },
  {
    id: 3,
    roman: "III",
    region: "HOENN",
    year: "2002",
    yearNum: 2002,
    title: "Pokémon Ruby & Sapphire",
    description:
      "A tropical paradise on Game Boy Advance. Contests, secret bases, and double battles reinvent the formula. The ocean hides legendary titans.",
    signaturePokemon: "RAYQUAZA",
    color: "#C62828",
    accentColor: "#EF9A9A",
    pokemonCount: 135,
  },
  {
    id: 4,
    roman: "IV",
    region: "SINNOH",
    year: "2006",
    yearNum: 2006,
    title: "Pokémon Diamond & Pearl",
    description:
      "The Nintendo DS era begins. Physical and special split, the underground, and the Pokémon origin myth take the series to its deepest narrative yet.",
    signaturePokemon: "DIALGA",
    color: "#1565C0",
    accentColor: "#90CAF9",
    pokemonCount: 107,
  },
  {
    id: 5,
    roman: "V",
    region: "UNOVA",
    year: "2010",
    yearNum: 2010,
    title: "Pokémon Black & White",
    description:
      "A bold reset: 156 brand-new Pokémon, a fully animated overworld, and the most story-driven entry in the series to date.",
    signaturePokemon: "RESHIRAM",
    color: "#424242",
    accentColor: "#BDBDBD",
    pokemonCount: 156,
  },
  {
    id: 6,
    roman: "VI",
    region: "KALOS",
    year: "2013",
    yearNum: 2013,
    title: "Pokémon X & Y",
    description:
      "Full 3D on Nintendo 3DS. Mega Evolution, Fairy-type, and a global simultaneous launch mark Pokémon's entry into the HD era.",
    signaturePokemon: "XERNEAS",
    color: "#6A1B9A",
    accentColor: "#CE93D8",
    pokemonCount: 72,
  },
  {
    id: 7,
    roman: "VII",
    region: "ALOLA",
    year: "2016",
    yearNum: 2016,
    title: "Pokémon Sun & Moon",
    description:
      "The 20th anniversary generation replaces Gyms with Island Trials. Alolan forms reimagine classic Pokémon through a tropical lens.",
    signaturePokemon: "SOLGALEO",
    color: "#F57F17",
    accentColor: "#FFE082",
    pokemonCount: 88,
  },
  {
    id: 8,
    roman: "VIII",
    region: "GALAR",
    year: "2019",
    yearNum: 2019,
    title: "Pokémon Sword & Shield",
    description:
      "The mainline series arrives on Nintendo Switch. Dynamax raids, the Wild Area open world, and stadium spectacle define the Galar experience.",
    signaturePokemon: "ZACIAN",
    color: "#1B5E20",
    accentColor: "#A5D6A7",
    pokemonCount: 96,
  },
  {
    id: 9,
    roman: "IX",
    region: "PALDEA",
    year: "2022",
    yearNum: 2022,
    title: "Pokémon Scarlet & Violet",
    description:
      "The first fully open-world mainline Pokémon games. Three story paths, Terastallization, and Paldea's rich Spanish-inspired landscape.",
    signaturePokemon: "KORAIDON",
    color: "#B71C1C",
    accentColor: "#FF8A80",
    pokemonCount: 103,
  },
];

// ============================================================
// POKÉDEX ENTRIES (factual)
// ============================================================
export interface PokedexEntry {
  id: string;
  number: string;
  name: string;
  types: string[];
  height: string;
  weight: string;
  category: string;
  description: string;
  color: string;
}

export const POKEDEX_ENTRIES: PokedexEntry[] = [
  {
    id: "bulbasaur",
    number: "001",
    name: "BULBASAUR",
    types: ["GRASS", "POISON"],
    height: "0.7 m",
    weight: "6.9 kg",
    category: "Seed Pokémon",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    color: "#78C850",
  },
  {
    id: "charmander",
    number: "004",
    name: "CHARMANDER",
    types: ["FIRE"],
    height: "0.6 m",
    weight: "8.5 kg",
    category: "Lizard Pokémon",
    description:
      "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.",
    color: "#F08030",
  },
  {
    id: "squirtle",
    number: "007",
    name: "SQUIRTLE",
    types: ["WATER"],
    height: "0.5 m",
    weight: "9.0 kg",
    category: "Tiny Turtle Pokémon",
    description:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    color: "#6890F0",
  },
  {
    id: "pikachu",
    number: "025",
    name: "PIKACHU",
    types: ["ELECTRIC"],
    height: "0.4 m",
    weight: "6.0 kg",
    category: "Mouse Pokémon",
    description:
      "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
    color: "#F8D030",
  },
  {
    id: "gengar",
    number: "094",
    name: "GENGAR",
    types: ["GHOST", "POISON"],
    height: "1.5 m",
    weight: "40.5 kg",
    category: "Shadow Pokémon",
    description:
      "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar's doing.",
    color: "#705898",
  },
  {
    id: "mewtwo",
    number: "150",
    name: "MEWTWO",
    types: ["PSYCHIC"],
    height: "2.0 m",
    weight: "122.0 kg",
    category: "Genetic Pokémon",
    description:
      "It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.",
    color: "#9B59B6",
  },
  {
    id: "eevee",
    number: "133",
    name: "EEVEE",
    types: ["NORMAL"],
    height: "0.3 m",
    weight: "6.5 kg",
    category: "Evolution Pokémon",
    description:
      "Its genetic code is irregular. It may mutate if it is exposed to radiation from element Stones.",
    color: "#C19A6B",
  },
  {
    id: "lucario",
    number: "448",
    name: "LUCARIO",
    types: ["FIGHTING", "STEEL"],
    height: "1.2 m",
    weight: "54.0 kg",
    category: "Aura Pokémon",
    description:
      "It can tell what people are thinking. Only those who are pure of heart can earn this Pokémon's trust.",
    color: "#4169E1",
  },
];

// ============================================================
// FAQ
// ============================================================
export const FAQ_ITEMS = [
  {
    q: "When did Pokémon begin?",
    a: "Pokémon Red and Green were first released in Japan on February 27, 1996, for the Game Boy. The international release of Pokémon Red and Blue followed in 1998.",
  },
  {
    q: "What does the 30th anniversary celebrate?",
    a: "The 30th anniversary marks three decades since Pokémon's original Japanese launch in 1996 — celebrating the games, animation, trading card game, and the global community that grew with it.",
  },
  {
    q: "Which Pokémon were part of the original 151?",
    a: "The original 151 Pokémon — from Bulbasaur (#001) to Mew (#151) — were introduced in Pokémon Red and Green for Game Boy in 1996. They span the Kanto region and include the three starters, Pikachu, the legendary birds, and the mythical Mew.",
  },
  {
    q: "How many generations of Pokémon are there?",
    a: "As of 2024, there are nine main generations of Pokémon, spanning from Generation I (Kanto, 1996) through Generation IX (Paldea, 2022). Each generation introduced new regions, Pokémon, and gameplay mechanics.",
  },
  {
    q: "Where can I learn more about Pokémon's history?",
    a: "The official Pokémon website at pokemon.com contains a comprehensive history of the franchise. The Bulbapedia wiki (bulbapedia.bulbagarden.net) is the most detailed fan-maintained encyclopedia of Pokémon history and lore.",
  },
];

// ============================================================
// JAPANESE ATMOSPHERE TEXT
// ============================================================
export const JP_PHRASES = [
  "ポケットモンスター",
  "30周年",
  "1996年",
  "冒険は、まだ終わらない。",
  "すべてはここから始まった。",
  "思い出は、色あせない。",
  "カントーから始まる旅",
  "伝説のポケモン",
];

// ============================================================
// TYPE COLORS
// ============================================================
export const TYPE_COLORS: Record<string, string> = {
  FIRE: "#FF6B35",
  WATER: "#4A90D9",
  GRASS: "#5DBE62",
  ELECTRIC: "#F6C945",
  PSYCHIC: "#E040FB",
  GHOST: "#7B68EE",
  POISON: "#9C59B0",
  FIGHTING: "#C0392B",
  NORMAL: "#A8A77A",
  STEEL: "#B7B7CE",
  DRAGON: "#6F35FC",
  DARK: "#5A5465",
  FAIRY: "#EE99AC",
  ICE: "#96D9D6",
  ROCK: "#B6A136",
  GROUND: "#E2BF65",
  BUG: "#A6B91A",
  FLYING: "#A98FF3",
};
