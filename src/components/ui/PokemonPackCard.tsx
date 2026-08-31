"use client";

import React from "react";
import Image from "next/image";

export default function PokemonPackCard() {
  return (
    <div className="w-full max-w-[240px] mx-auto flex flex-col items-center">
      {/* Pack Image Container with Gold Bracket Bezel */}
      <div className="w-full bg-[#131318] border-2 border-[#f0b429] p-3 rounded-[2px] shadow-[0_10px_35px_rgba(240,180,41,0.2)] group">
        {/* Top Header */}
        <div className="flex justify-between items-center border-b border-[#232329] pb-2 mb-2 text-[0.55rem] font-pixel text-[#f0b429]">
          <span>30TH CELEBRATION</span>
          <span>JAPAN PACK</span>
        </div>

        {/* Official pack0.jpg image container with fixed aspect ratio */}
        <div className="relative w-full aspect-[1/1.75] bg-[#0a0a0c] border border-[#232329] rounded-[2px] overflow-hidden flex items-center justify-center p-1">
          <Image
            src="/pack0.jpg"
            alt="Japanese Pokémon 30th Anniversary Celebration Booster Pack"
            fill
            className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 220px, 240px"
            priority
          />

          {/* Rarity Stamp Badge */}
          <div className="absolute top-2 right-2 stamp text-[0.48rem] bg-[#0a0a0c]/90">
            ★ 1/1,000
          </div>
        </div>

        {/* Bottom Seal Details */}
        <div className="mt-2.5 pt-2 border-t border-[#232329] flex justify-between items-center text-[0.55rem] font-mono text-[#87868f]">
          <span>6 CARDS / PACK</span>
          <span className="text-[#e8384f] font-bold">ALL-HOLO</span>
        </div>
      </div>
    </div>
  );
}
