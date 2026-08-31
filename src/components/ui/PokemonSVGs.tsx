"use client";

import React from "react";

interface PokemonSVGProps {
  className?: string;
  size?: number | string;
  color?: string;
  glow?: boolean;
  glowColor?: string;
}

// ─── PIKACHU SVG (Electric Mouse with Lightning Aura) ───
export function PikachuSVG({ className = "", size = 120, color = "#F0B429", glow = true, glowColor = "#F0B429" }: PokemonSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 12px ${glowColor}80)` : "none" }}
      aria-label="Pikachu"
    >
      {/* Electric Sparks */}
      <path d="M15 45 L25 35 L20 30 L32 20 L27 33 L35 30 Z" fill="#FFE082" opacity="0.8" />
      <path d="M105 45 L95 35 L100 30 L88 20 L93 33 L85 30 Z" fill="#FFE082" opacity="0.8" />
      
      {/* Ears */}
      {/* Left Ear */}
      <path d="M38 42 L18 10 L30 18 L46 45 Z" fill={color} />
      <path d="M18 10 L24 6 L30 18 L22 14 Z" fill="#111318" />
      {/* Right Ear */}
      <path d="M82 42 L102 10 L90 18 L74 45 Z" fill={color} />
      <path d="M102 10 L96 6 L90 18 L98 14 Z" fill="#111318" />

      {/* Head / Body Base */}
      <ellipse cx="60" cy="62" rx="34" ry="30" fill={color} />
      
      {/* Body Lower */}
      <path d="M34 68 C30 85 40 102 60 102 C80 102 90 85 86 68 Z" fill={color} />

      {/* Lightning Tail */}
      <path d="M82 82 L96 82 L90 70 L108 70 L98 52 L116 52 L102 34 L114 34" stroke="#F59E0B" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
      <path d="M82 82 L96 82 L90 70 L108 70 L98 52 L116 52 L102 34 L114 34" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" fill="none" />

      {/* Red Cheeks */}
      <circle cx="38" cy="68" r="7" fill="#E53935" />
      <circle cx="82" cy="68" r="7" fill="#E53935" />
      <circle cx="37" cy="66" r="2" fill="#FFA4A4" opacity="0.8" />
      <circle cx="81" cy="66" r="2" fill="#FFA4A4" opacity="0.8" />

      {/* Eyes */}
      <circle cx="46" cy="56" r="5" fill="#111318" />
      <circle cx="44" cy="54" r="2" fill="#FFFFFF" />
      <circle cx="74" cy="56" r="5" fill="#111318" />
      <circle cx="72" cy="54" r="2" fill="#FFFFFF" />

      {/* Nose */}
      <polygon points="59,62 61,62 60,64" fill="#111318" />

      {/* Mouth */}
      <path d="M54 67 Q60 72 66 67" stroke="#111318" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Forepaws */}
      <ellipse cx="50" cy="80" rx="4" ry="7" fill={color} stroke="#111318" strokeWidth="1" />
      <ellipse cx="70" cy="80" rx="4" ry="7" fill={color} stroke="#111318" strokeWidth="1" />

      {/* Feet */}
      <ellipse cx="42" cy="100" rx="7" ry="4" fill={color} stroke="#111318" strokeWidth="1" />
      <ellipse cx="78" cy="100" rx="7" ry="4" fill={color} stroke="#111318" strokeWidth="1" />
    </svg>
  );
}

// ─── CHARIZARD SVG (Flame Dragon with Flaming Tail & Wings) ───
export function CharizardSVG({ className = "", size = 120, color = "#E65100", glow = true, glowColor = "#E53935" }: PokemonSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 14px ${glowColor}90)` : "none" }}
      aria-label="Charizard"
    >
      {/* Left Wing */}
      <path d="M48 52 C25 25 10 35 6 48 C16 48 24 58 35 68 C42 64 46 58 48 52 Z" fill="#00897B" stroke="#004D40" strokeWidth="1.5" />
      <path d="M48 52 C28 20 8 30 6 48 C18 42 32 46 48 52 Z" fill="#FF8A65" opacity="0.8" />
      
      {/* Right Wing */}
      <path d="M72 52 C95 25 110 35 114 48 C104 48 96 58 85 68 C78 64 74 58 72 52 Z" fill="#00897B" stroke="#004D40" strokeWidth="1.5" />
      <path d="M72 52 C92 20 112 30 114 48 C102 42 88 46 72 52 Z" fill="#FF8A65" opacity="0.8" />

      {/* Tail with Flame */}
      <path d="M40 92 C25 96 15 88 20 74 C22 70 28 72 26 78 C24 84 32 88 42 84 Z" fill={color} />
      {/* Fire on Tail */}
      <path d="M20 72 C12 60 22 50 18 40 C28 48 30 60 22 72 Z" fill="#FFD54F" />
      <path d="M22 68 C16 58 24 52 20 45 C26 52 26 62 22 68 Z" fill="#E53935" />

      {/* Body */}
      <ellipse cx="60" cy="74" rx="22" ry="24" fill={color} />
      {/* Belly */}
      <ellipse cx="60" cy="76" rx="14" ry="18" fill="#FFF176" />

      {/* Neck & Head */}
      <path d="M54 58 L54 44 C50 42 46 36 46 30 C46 22 56 22 62 26 C68 22 78 22 78 30 C78 36 74 42 70 44 L70 58 Z" fill={color} />
      
      {/* Horns */}
      <path d="M50 28 C42 20 38 12 36 8 C42 12 48 18 52 24 Z" fill={color} />
      <path d="M74 28 C82 20 86 12 88 8 C82 12 76 18 72 24 Z" fill={color} />

      {/* Snout & Eyes */}
      <path d="M52 32 C52 26 68 26 68 32 C68 36 52 36 52 32 Z" fill={color} />
      <polygon points="50,30 54,28 54,32" fill="#00E5FF" />
      <polygon points="70,30 66,28 66,32" fill="#00E5FF" />
      <circle cx="52" cy="30" r="1" fill="#FFFFFF" />
      <circle cx="68" cy="30" r="1" fill="#FFFFFF" />

      {/* Teeth / Snarl */}
      <path d="M56 34 L58 32 L60 34 L62 32 L64 34" stroke="#FFFFFF" strokeWidth="1" fill="none" />

      {/* Legs */}
      <ellipse cx="44" cy="92" rx="10" ry="8" fill={color} />
      <ellipse cx="76" cy="92" rx="10" ry="8" fill={color} />
      {/* Claws */}
      <circle cx="38" cy="98" r="2" fill="#FFFFFF" />
      <circle cx="44" cy="100" r="2" fill="#FFFFFF" />
      <circle cx="50" cy="98" r="2" fill="#FFFFFF" />
      <circle cx="70" cy="98" r="2" fill="#FFFFFF" />
      <circle cx="76" cy="100" r="2" fill="#FFFFFF" />
      <circle cx="82" cy="98" r="2" fill="#FFFFFF" />
    </svg>
  );
}

// ─── BLASTOISE SVG (Shell with Hydro Cannons) ───
export function BlastoiseSVG({ className = "", size = 120, color = "#1E88E5", glow = true, glowColor = "#60A5FA" }: PokemonSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 14px ${glowColor}80)` : "none" }}
      aria-label="Blastoise"
    >
      {/* Hydro Cannons (Metal) */}
      <rect x="26" y="24" width="12" height="28" rx="3" transform="rotate(-25 32 38)" fill="#B0BEC5" stroke="#37474F" strokeWidth="2" />
      <ellipse cx="26" cy="23" rx="6" ry="3" transform="rotate(-25 26 23)" fill="#37474F" />
      <circle cx="26" cy="23" r="2" fill="#00E5FF" />

      <rect x="82" y="24" width="12" height="28" rx="3" transform="rotate(25 88 38)" fill="#B0BEC5" stroke="#37474F" strokeWidth="2" />
      <ellipse cx="94" cy="23" rx="6" ry="3" transform="rotate(25 94 23)" fill="#37474F" />
      <circle cx="94" cy="23" r="2" fill="#00E5FF" />

      {/* Shell Rim */}
      <ellipse cx="60" cy="68" rx="36" ry="32" fill="#5D4037" stroke="#ECEFF1" strokeWidth="5" />

      {/* Shell Front Plate / Body */}
      <ellipse cx="60" cy="70" rx="26" ry="24" fill="#FFE082" stroke="#8D6E63" strokeWidth="2" />
      <path d="M42 62 L78 62 M42 78 L78 78 M60 48 L60 92" stroke="#BCAAA4" strokeWidth="1.5" />

      {/* Head */}
      <ellipse cx="60" cy="46" rx="18" ry="15" fill={color} stroke="#0D47A1" strokeWidth="1.5" />
      {/* Ears */}
      <ellipse cx="44" cy="38" rx="4" ry="7" transform="rotate(-20 44 38)" fill={color} />
      <ellipse cx="76" cy="38" rx="4" ry="7" transform="rotate(20 76 38)" fill={color} />

      {/* Eyes */}
      <ellipse cx="52" cy="44" rx="3" ry="4" fill="#880E4F" />
      <circle cx="51" cy="43" r="1.2" fill="#FFFFFF" />
      <ellipse cx="68" cy="44" rx="3" ry="4" fill="#880E4F" />
      <circle cx="67" cy="43" r="1.2" fill="#FFFFFF" />

      {/* Lower Jaw */}
      <path d="M50 50 Q60 56 70 50" stroke="#0D47A1" strokeWidth="1.5" fill="none" />

      {/* Arms */}
      <ellipse cx="30" cy="68" rx="10" ry="7" transform="rotate(30 30 68)" fill={color} stroke="#0D47A1" strokeWidth="1" />
      <ellipse cx="90" cy="68" rx="10" ry="7" transform="rotate(-30 90 68)" fill={color} stroke="#0D47A1" strokeWidth="1" />

      {/* Feet */}
      <ellipse cx="42" cy="98" rx="12" ry="7" fill={color} stroke="#0D47A1" strokeWidth="1" />
      <ellipse cx="78" cy="98" rx="12" ry="7" fill={color} stroke="#0D47A1" strokeWidth="1" />
    </svg>
  );
}

// ─── VENUSAUR SVG (Forest Giant with Bloom Flower) ───
export function VenusaurSVG({ className = "", size = 120, color = "#26A69A", glow = true, glowColor = "#4DB6AC" }: PokemonSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 14px ${glowColor}80)` : "none" }}
      aria-label="Venusaur"
    >
      {/* Palm Trunk / Tree on Back */}
      <rect x="54" y="36" width="12" height="20" fill="#795548" />

      {/* Flower Petals (Pink/Magenta) */}
      <ellipse cx="60" cy="28" rx="34" ry="12" fill="#EC407A" />
      <ellipse cx="60" cy="28" rx="12" ry="26" fill="#D81B60" />
      <ellipse cx="40" cy="24" rx="16" ry="10" transform="rotate(-20 40 24)" fill="#F06292" />
      <ellipse cx="80" cy="24" rx="16" ry="10" transform="rotate(20 80 24)" fill="#F06292" />
      {/* Flower Center Pollen */}
      <circle cx="60" cy="28" r="8" fill="#FFF59D" stroke="#FBC02D" strokeWidth="1.5" />
      <circle cx="58" cy="26" r="2" fill="#F57F17" />
      <circle cx="62" cy="30" r="2" fill="#F57F17" />

      {/* Leaves underneath */}
      <path d="M22 42 C35 32 50 42 50 48 C36 50 24 48 22 42 Z" fill="#2E7D32" />
      <path d="M98 42 C85 32 70 42 70 48 C84 50 96 48 98 42 Z" fill="#2E7D32" />

      {/* Body */}
      <ellipse cx="60" cy="76" rx="38" ry="26" fill={color} stroke="#004D40" strokeWidth="2" />
      {/* Warts / Spots */}
      <circle cx="42" cy="72" r="4" fill="#00796B" opacity="0.6" />
      <circle cx="78" cy="72" r="5" fill="#00796B" opacity="0.6" />
      <circle cx="60" cy="88" r="3" fill="#00796B" opacity="0.6" />

      {/* Head */}
      <ellipse cx="60" cy="62" rx="22" ry="16" fill={color} stroke="#004D40" strokeWidth="1.5" />
      
      {/* Red Eyes */}
      <ellipse cx="48" cy="58" rx="4" ry="5" fill="#C2185B" />
      <circle cx="47" cy="56" r="1.5" fill="#FFFFFF" />
      <ellipse cx="72" cy="58" rx="4" ry="5" fill="#C2185B" />
      <circle cx="71" cy="56" r="1.5" fill="#FFFFFF" />

      {/* Fangs */}
      <polygon points="46,68 48,64 50,68" fill="#FFFFFF" />
      <polygon points="70,68 72,64 74,68" fill="#FFFFFF" />

      {/* Wide Feet */}
      <ellipse cx="32" cy="96" rx="14" ry="8" fill={color} stroke="#004D40" strokeWidth="1.5" />
      <ellipse cx="88" cy="96" rx="14" ry="8" fill={color} stroke="#004D40" strokeWidth="1.5" />
      {/* Claws */}
      <circle cx="24" cy="98" r="2" fill="#FFFFFF" />
      <circle cx="32" cy="101" r="2" fill="#FFFFFF" />
      <circle cx="40" cy="98" r="2" fill="#FFFFFF" />
      <circle cx="80" cy="98" r="2" fill="#FFFFFF" />
      <circle cx="88" cy="101" r="2" fill="#FFFFFF" />
      <circle cx="96" cy="98" r="2" fill="#FFFFFF" />
    </svg>
  );
}

// ─── GENGAR SVG (Shadow Fiend with Grin) ───
export function GengarSVG({ className = "", size = 120, color = "#6A1B9A", glow = true, glowColor = "#BA68C8" }: PokemonSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 16px ${glowColor}90)` : "none" }}
      aria-label="Gengar"
    >
      {/* Spikes / Horns */}
      <polygon points="34,34 30,14 44,28" fill={color} />
      <polygon points="86,34 90,14 76,28" fill={color} />
      <polygon points="46,24 50,10 56,22" fill={color} />
      <polygon points="74,24 70,10 64,22" fill={color} />
      <polygon points="56,20 60,8 64,20" fill={color} />

      {/* Main Body */}
      <ellipse cx="60" cy="64" rx="34" ry="32" fill={color} stroke="#311B92" strokeWidth="2" />

      {/* Evil Crimson Eyes */}
      <path d="M38 48 C42 42 52 44 54 50 C48 52 42 52 38 48 Z" fill="#D50000" />
      <circle cx="46" cy="48" r="2" fill="#FFFFFF" />
      <path d="M82 48 C78 42 68 44 66 50 C72 52 78 52 82 48 Z" fill="#D50000" />
      <circle cx="74" cy="48" r="2" fill="#FFFFFF" />

      {/* Wicked Grin */}
      <path d="M34 62 C40 82 80 82 86 62 C74 72 46 72 34 62 Z" fill="#E1BEE7" stroke="#4A148C" strokeWidth="2" />
      {/* Teeth Grid */}
      <line x1="44" y1="65" x2="44" y2="73" stroke="#4A148C" strokeWidth="1.5" />
      <line x1="52" y1="67" x2="52" y2="76" stroke="#4A148C" strokeWidth="1.5" />
      <line x1="60" y1="68" x2="60" y2="77" stroke="#4A148C" strokeWidth="1.5" />
      <line x1="68" y1="67" x2="68" y2="76" stroke="#4A148C" strokeWidth="1.5" />
      <line x1="76" y1="65" x2="76" y2="73" stroke="#4A148C" strokeWidth="1.5" />
      <path d="M35 68 Q60 76 85 68" stroke="#4A148C" strokeWidth="1.5" fill="none" />

      {/* Stubby Arms */}
      <ellipse cx="26" cy="68" rx="8" ry="6" transform="rotate(-20 26 68)" fill={color} />
      <ellipse cx="94" cy="68" rx="8" ry="6" transform="rotate(20 94 68)" fill={color} />

      {/* Feet */}
      <ellipse cx="44" cy="94" rx="8" ry="5" fill={color} />
      <ellipse cx="76" cy="94" rx="8" ry="5" fill={color} />
    </svg>
  );
}

// ─── MEWTWO SVG (Genetic Psychic with Energy Aura) ───
export function MewtwoSVG({ className = "", size = 120, color = "#E0E0E0", glow = true, glowColor = "#D500F9" }: PokemonSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 16px ${glowColor}90)` : "none" }}
      aria-label="Mewtwo"
    >
      {/* Psychic Aura Rings */}
      <circle cx="60" cy="60" r="48" stroke="#E040FB" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
      <circle cx="60" cy="60" r="54" stroke="#7C4DFF" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.3" />

      {/* Heavy Purple Tail */}
      <path d="M58 84 C45 92 38 106 50 114 C66 122 84 108 82 86 C80 66 98 48 104 36" stroke="#9C27B0" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M58 84 C45 92 38 106 50 114 C66 122 84 108 82 86 C80 66 98 48 104 36" stroke="#BA68C8" strokeWidth="6" strokeLinecap="round" fill="none" />

      {/* Head Tube (Genetic Conduit) */}
      <path d="M60 30 C64 24 66 36 60 44" stroke="#9C27B0" strokeWidth="4" fill="none" />

      {/* Torso */}
      <path d="M52 44 C50 62 48 76 60 84 C72 76 70 62 68 44 Z" fill={color} stroke="#BDBDBD" strokeWidth="1.5" />
      {/* Purple Lower Abdomen */}
      <ellipse cx="60" cy="78" rx="12" ry="10" fill="#9C27B0" />

      {/* Slender Head & Horns */}
      <ellipse cx="60" cy="32" rx="12" ry="15" fill={color} stroke="#BDBDBD" strokeWidth="1.5" />
      {/* Cat-like Horns */}
      <polygon points="50,24 44,14 54,20" fill={color} />
      <polygon points="70,24 76,14 66,20" fill={color} />

      {/* Piercing Purple Eyes */}
      <polygon points="53,30 57,29 57,33 53,32" fill="#7B1FA2" />
      <circle cx="55" cy="31" r="0.8" fill="#00E5FF" />
      <polygon points="67,30 63,29 63,33 67,32" fill="#7B1FA2" />
      <circle cx="65" cy="31" r="0.8" fill="#00E5FF" />

      {/* Fingertip Spheres (Psychic Nodes) */}
      <circle cx="40" cy="62" r="3" fill="#D500F9" />
      <circle cx="80" cy="62" r="3" fill="#D500F9" />

      {/* Digigrade Legs */}
      <path d="M50 82 C44 90 42 100 46 106" stroke={color} strokeWidth="6" strokeLinecap="round" />
      <path d="M70 82 C76 90 78 100 74 106" stroke={color} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

// ─── EEVEE SVG (Evolution Keystone) ───
export function EeveeSVG({ className = "", size = 120, color = "#A1887F", glow = true, glowColor = "#D7CCC8" }: PokemonSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 12px ${glowColor}80)` : "none" }}
      aria-label="Eevee"
    >
      {/* Big Long Fox Ears */}
      <path d="M46 40 C34 16 18 6 12 4 C16 18 30 38 42 46 Z" fill={color} />
      <path d="M42 36 C34 20 24 12 20 10 C24 18 34 32 40 40 Z" fill="#5D4037" />

      <path d="M74 40 C86 16 102 6 108 4 C104 18 90 38 78 46 Z" fill={color} />
      <path d="M78 36 C86 20 96 12 100 10 C96 18 86 32 80 40 Z" fill="#5D4037" />

      {/* Bushy Tail with Cream Tip */}
      <path d="M84 76 C102 70 114 82 108 96 C98 108 84 98 80 88 Z" fill={color} />
      <path d="M102 74 C112 80 114 90 108 96 C102 92 100 82 102 74 Z" fill="#FFF8E1" />

      {/* Body */}
      <ellipse cx="60" cy="76" rx="20" ry="18" fill={color} />

      {/* Fluffy Cream Mane / Collar */}
      <path d="M42 60 C32 64 34 76 42 80 C50 84 70 84 78 80 C86 76 88 64 78 60 C72 58 48 58 42 60 Z" fill="#FFF8E1" stroke="#D7CCC8" strokeWidth="1.5" />
      <circle cx="50" cy="72" r="5" fill="#FFF8E1" />
      <circle cx="60" cy="74" r="6" fill="#FFF8E1" />
      <circle cx="70" cy="72" r="5" fill="#FFF8E1" />

      {/* Head */}
      <ellipse cx="60" cy="48" rx="18" ry="16" fill={color} />
      
      {/* Big Expressive Brown Eyes */}
      <ellipse cx="50" cy="46" rx="5" ry="6" fill="#4E342E" />
      <circle cx="48" cy="44" r="2" fill="#FFFFFF" />
      <ellipse cx="70" cy="46" rx="5" ry="6" fill="#4E342E" />
      <circle cx="68" cy="44" r="2" fill="#FFFFFF" />

      {/* Tiny Nose & Mouth */}
      <circle cx="60" cy="52" r="1.5" fill="#3E2723" />
      <path d="M56 55 Q60 58 64 55" stroke="#3E2723" strokeWidth="1" fill="none" />

      {/* Paws */}
      <ellipse cx="50" cy="94" rx="5" ry="6" fill={color} />
      <ellipse cx="70" cy="94" rx="5" ry="6" fill={color} />
    </svg>
  );
}

// ─── LUCARIO SVG (Aura Guardian) ───
export function LucarioSVG({ className = "", size = 120, color = "#1E88E5", glow = true, glowColor = "#42A5F5" }: PokemonSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 14px ${glowColor}80)` : "none" }}
      aria-label="Lucario"
    >
      {/* Aura Sphere in Hands */}
      <circle cx="60" cy="70" r="14" fill="#00E5FF" opacity="0.7" />
      <circle cx="60" cy="70" r="8" fill="#FFFFFF" />

      {/* Head & Jackal Ears */}
      <polygon points="46,36 34,10 52,28" fill={color} stroke="#0D47A1" strokeWidth="1" />
      <polygon points="74,36 86,10 68,28" fill={color} stroke="#0D47A1" strokeWidth="1" />
      
      {/* Aura Feelers */}
      <path d="M42 44 C28 50 24 64 26 72" stroke="#212121" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M78 44 C92 50 96 64 94 72" stroke="#212121" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Face Mask */}
      <ellipse cx="60" cy="38" rx="16" ry="12" fill="#212121" />
      <ellipse cx="60" cy="46" rx="10" ry="8" fill={color} />

      {/* Ruby Eyes */}
      <polygon points="50,38 56,36 54,40" fill="#E53935" />
      <polygon points="70,38 64,36 66,40" fill="#E53935" />

      {/* Torso with Spike */}
      <ellipse cx="60" cy="62" rx="14" ry="12" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="1.5" />
      <polygon points="58,62 60,56 62,62" fill="#ECEFF1" stroke="#37474F" strokeWidth="1" />

      {/* Legs */}
      <ellipse cx="46" cy="94" rx="10" ry="16" fill={color} stroke="#0D47A1" strokeWidth="1.5" />
      <ellipse cx="74" cy="94" rx="10" ry="16" fill={color} stroke="#0D47A1" strokeWidth="1.5" />
    </svg>
  );
}

// ─── RAYQUAZA SVG (Sky High Ancient Dragon) ───
export function RayquazaSVG({ className = "", size = 120, color = "#2E7D32", glow = true, glowColor = "#00E676" }: PokemonSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 16px ${glowColor}90)` : "none" }}
      aria-label="Rayquaza"
    >
      {/* Dragon Coils */}
      <path d="M20 90 C10 60 40 40 60 40 C80 40 108 55 100 80 C92 105 50 110 35 95 C20 80 40 65 60 65" stroke={color} strokeWidth="12" strokeLinecap="round" fill="none" />
      
      {/* Ancient Golden Glyphs / Rings on Body */}
      <circle cx="60" cy="40" r="8" stroke="#F0B429" strokeWidth="3" fill="none" />
      <circle cx="100" cy="80" r="8" stroke="#F0B429" strokeWidth="3" fill="none" />
      <circle cx="40" cy="92" r="7" stroke="#F0B429" strokeWidth="2.5" fill="none" />

      {/* Head Fins / Crests */}
      <polygon points="56,36 34,18 48,32" fill={color} stroke="#1B5E20" strokeWidth="1" />
      <polygon points="64,36 86,18 72,32" fill={color} stroke="#1B5E20" strokeWidth="1" />
      <polygon points="52,42 30,36 46,42" fill="#E53935" />
      <polygon points="68,42 90,36 74,42" fill="#E53935" />

      {/* Head */}
      <ellipse cx="60" cy="34" rx="14" ry="10" fill={color} />
      
      {/* Yellow Eye with Black Ring */}
      <circle cx="54" cy="32" r="4" fill="#111318" />
      <circle cx="54" cy="32" r="2.5" fill="#FFEB3B" />
      <circle cx="66" cy="32" r="4" fill="#111318" />
      <circle cx="66" cy="32" r="2.5" fill="#FFEB3B" />

      {/* Jaws / Teeth */}
      <path d="M50 38 Q60 42 70 38" stroke="#E53935" strokeWidth="2" fill="none" />
    </svg>
  );
}

// ─── POKÉMON EVOLUTION DATA & COMPONENT ───
export interface EvolutionChainData {
  id: string;
  name: string;
  jpName: string;
  type: string;
  color: string;
  stages: {
    stage: number;
    name: string;
    jpName: string;
    number: string;
    levelReq: string;
    stat: string;
    desc: string;
  }[];
}

export const EVOLUTION_CHAINS: EvolutionChainData[] = [
  {
    id: "charizard-line",
    name: "CHARMANDER LINEAGE",
    jpName: "ヒトカゲの系譜",
    type: "FIRE / FLYING",
    color: "#E65100",
    stages: [
      {
        stage: 1,
        name: "CHARMANDER",
        jpName: "ヒトカゲ",
        number: "004",
        levelReq: "BASE",
        stat: "HP 39 · ATK 52",
        desc: "The flame that burns at the tip of its tail is an indication of its emotions.",
      },
      {
        stage: 2,
        name: "CHARMELEON",
        jpName: "リザード",
        number: "005",
        levelReq: "LV. 16",
        stat: "HP 58 · ATK 64",
        desc: "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
      },
      {
        stage: 3,
        name: "CHARIZARD",
        jpName: "リザードン",
        number: "006",
        levelReq: "LV. 36 (FINAL)",
        stat: "HP 78 · ATK 84 · SP.ATK 109",
        desc: "It spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
      },
    ],
  },
  {
    id: "blastoise-line",
    name: "SQUIRTLE LINEAGE",
    jpName: "ゼニガメの系譜",
    type: "WATER",
    color: "#1E88E5",
    stages: [
      {
        stage: 1,
        name: "SQUIRTLE",
        jpName: "ゼニガメ",
        number: "007",
        levelReq: "BASE",
        stat: "HP 44 · DEF 65",
        desc: "Shoots water at prey while in the water. Withdraws into its shell when in danger.",
      },
      {
        stage: 2,
        name: "WARTORTLE",
        jpName: "カメール",
        number: "008",
        levelReq: "LV. 16",
        stat: "HP 59 · DEF 80",
        desc: "When tapped, this Pokémon will pull in its head, but its furry tail will still stick out.",
      },
      {
        stage: 3,
        name: "BLASTOISE",
        jpName: "カメックス",
        number: "009",
        levelReq: "LV. 36 (FINAL)",
        stat: "HP 79 · DEF 100 · SP.DEF 105",
        desc: "A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.",
      },
    ],
  },
  {
    id: "venusaur-line",
    name: "BULBASAUR LINEAGE",
    jpName: "フシギダネの系譜",
    type: "GRASS / POISON",
    color: "#2E7D32",
    stages: [
      {
        stage: 1,
        name: "BULBASAUR",
        jpName: "フシギダネ",
        number: "001",
        levelReq: "BASE",
        stat: "HP 45 · SP.ATK 65",
        desc: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
      },
      {
        stage: 2,
        name: "IVYSAUR",
        jpName: "フシギソウ",
        number: "002",
        levelReq: "LV. 16",
        stat: "HP 60 · SP.ATK 80",
        desc: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
      },
      {
        stage: 3,
        name: "VENUSAUR",
        jpName: "フシギバナ",
        number: "003",
        levelReq: "LV. 32 (FINAL)",
        stat: "HP 80 · SP.ATK 100 · SP.DEF 100",
        desc: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
      },
    ],
  },
  {
    id: "gengar-line",
    name: "GASTLY LINEAGE",
    jpName: "ゴースの系譜",
    type: "GHOST / POISON",
    color: "#6A1B9A",
    stages: [
      {
        stage: 1,
        name: "GASTLY",
        jpName: "ゴース",
        number: "092",
        levelReq: "BASE",
        stat: "HP 30 · SP.ATK 100",
        desc: "Almost invisible, this gaseous Pokémon cloaks the target and puts it to sleep without notice.",
      },
      {
        stage: 2,
        name: "HAUNTER",
        jpName: "ゴースト",
        number: "093",
        levelReq: "LV. 25",
        stat: "HP 45 · SP.ATK 115",
        desc: "Because of its ability to slip through block walls, it is said to be from another dimension.",
      },
      {
        stage: 3,
        name: "GENGAR",
        jpName: "ゲンガー",
        number: "094",
        levelReq: "TRADE (FINAL)",
        stat: "HP 60 · SPEED 110 · SP.ATK 130",
        desc: "Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.",
      },
    ],
  },
  {
    id: "pikachu-line",
    name: "PICHU LINEAGE",
    jpName: "ピチューの系譜",
    type: "ELECTRIC",
    color: "#F0B429",
    stages: [
      {
        stage: 1,
        name: "PICHU",
        jpName: "ピチュー",
        number: "172",
        levelReq: "BABY",
        stat: "HP 20 · SPEED 60",
        desc: "It is not yet skilled at storing electricity. It may send out a jolt if amused or startled.",
      },
      {
        stage: 2,
        name: "PIKACHU",
        jpName: "ピカチュウ",
        number: "025",
        levelReq: "FRIENDSHIP",
        stat: "HP 35 · SPEED 90",
        desc: "When several of these Pokémon gather, their electricity could build and cause lightning storms.",
      },
      {
        stage: 3,
        name: "RAICHU",
        jpName: "ライチュウ",
        number: "026",
        levelReq: "THUNDER STONE",
        stat: "HP 60 · SPEED 110 · SP.ATK 90",
        desc: "Its long tail serves as a ground to protect itself from its own high-voltage power.",
      },
    ],
  },
  {
    id: "eevee-line",
    name: "EEVEE EVOLUTIONS",
    jpName: "イーブイの系譜",
    type: "MULTI-TYPE",
    color: "#A1887F",
    stages: [
      {
        stage: 1,
        name: "EEVEE",
        jpName: "イーブイ",
        number: "133",
        levelReq: "BASE",
        stat: "HP 55 · MULTI-GENE",
        desc: "An irregular genetic code allows it to evolve into eight distinct elemental forms.",
      },
      {
        stage: 2,
        name: "VAPOREON / JOLTEON",
        jpName: "シャワーズ / サンダース",
        number: "134/135",
        levelReq: "WATER / THUNDER STONE",
        stat: "HP 130 / SPEED 130",
        desc: "Water & Thunder evolutions adapt Eevee to oceanic currents or 10,000-volt electric discharges.",
      },
      {
        stage: 3,
        name: "FLAREON / UMBREON",
        jpName: "ブースター / ブラッキー",
        number: "136/197",
        levelReq: "FIRE STONE / MOONLIGHT",
        stat: "ATK 130 / DEF 110",
        desc: "3,000°F thermal flames or moonlight rings that glow when agitated in nocturnal darkness.",
      },
    ],
  },
];
