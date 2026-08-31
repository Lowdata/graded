"use client";

import { useState, useEffect } from "react";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";

const PALETTE = [
  "#E8384F", "#F0B429", "#3AA0C9", "#7FBF6A",
  "#C78CE0", "#E08A4C", "#5EC9B0", "#E0576F",
  "#F2D98A", "#8EA6E0", "#D67AB8", "#9ECF5B"
];

const ICONS = ["⚡", "🔥", "💧", "🌿", "👻", "🔮", "⭐", "✦", "⚔️", "🛡️", "🐉", "🌙"];

export default function PokemonMosaic() {
  const [squares, setSquares] = useState<{ color: string; icon: string; burned: boolean }[]>([]);
  const [burnCount, setBurnCount] = useState(0);

  useEffect(() => {
    // 14 columns x 8 rows = 112 squares
    const total = 14 * 8;
    const generated = Array.from({ length: total }, (_, i) => ({
      color: PALETTE[i % PALETTE.length],
      icon: ICONS[i % ICONS.length],
      burned: false,
    }));
    setSquares(generated);
  }, []);

  const toggleBurn = (index: number) => {
    setSquares((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        burned: !updated[index].burned,
      };
      return updated;
    });
    setBurnCount((c) => c + 1);
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-10 bg-[#060709] border-b border-[#222633]" id="collection">
      <div className="max-w-[1000px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Pokeball size="xs" color="#F0B429" />
            <PixelText size="xs" className="text-gold tracking-[0.25em]">
              THE MOSAIC ARCHIVE
            </PixelText>
            <Pokeball size="xs" color="#F0B429" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F1E8] mb-3">
            30 years.{" "}
            <span className="golden-aura">4,444 Faces.</span>
          </h2>

          <p className="text-[#8C9098] text-sm leading-relaxed">
            Every face is generated on-chain from 40 ancestral lineages. 
            Hover any square to reveal the burn glyph — or click to execute a test burn.
          </p>
        </div>

        {/* Mosaic Bracketed Container */}
        <div className="bracketed max-w-[800px] mx-auto p-3 sm:p-4 bg-[#101217] border border-[#222633] shadow-2xl">
          <span className="bl" />
          <span className="br" />

          {/* 14-column Grid */}
          <div className="grid grid-cols-7 sm:grid-cols-14 gap-1 sm:gap-1.5 p-1 bg-[#060709] border border-[#222633]">
            {squares.map((sq, i) => (
              <div
                key={i}
                onClick={() => toggleBurn(i)}
                className={`aspect-square relative cursor-pointer transition-all duration-200 group overflow-hidden rounded-[1px] flex items-center justify-center ${
                  sq.burned ? "bg-[#060709] border border-[#E53935]" : ""
                }`}
                style={{ backgroundColor: sq.burned ? "#0A0B0E" : sq.color }}
                title={`Lineage Face #${(i + 1).toString().padStart(4, "0")}`}
              >
                {/* On Hover / Burn glyph */}
                <span
                  className={`text-xs font-bold transition-opacity duration-150 ${
                    sq.burned
                      ? "opacity-100 text-[#E53935]"
                      : "opacity-0 group-hover:opacity-100 text-[#060709] bg-[#F5F1E8]/90 absolute inset-0 flex items-center justify-center font-mono"
                  }`}
                >
                  {sq.burned ? "🔥" : sq.icon}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Caption from HTML */}
        <div className="text-center mt-6">
          <p className="font-mono text-xs sm:text-sm text-[#8C9098] tracking-wide">
            Hover a face — <b className="text-[#E53935] font-semibold">every square can burn.</b> That&apos;s the whole game.
          </p>
          {burnCount > 0 && (
            <div className="mt-2 font-mono text-[0.65rem] text-[#F0B429]">
              [ {burnCount} TEST BURNS EXECUTED IN THIS SESSION ]
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
