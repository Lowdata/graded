"use client";

import { useRef } from "react";
import { GENERATIONS } from "@/lib/constants";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GenerationCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-10 bg-[#060709] border-b border-[#222633] overflow-hidden" id="generations">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Pokeball size="xs" color="#F0B429" />
              <PixelText size="xs" className="text-gold tracking-[0.25em]">
                CHRONICLES // 9世代の軌跡
              </PixelText>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8]">
              Every region.{" "}
              <span className="golden-aura">Every era.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-[#8C9098] text-xs sm:text-sm max-w-sm hidden sm:block">
              From Game Boy to Nintendo Switch — nine generations, nine regions, one endless adventure.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-sm bg-[#101217] border border-[#222633] hover:border-[#F0B429] text-[#F5F1E8] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-sm bg-[#101217] border border-[#222633] hover:border-[#F0B429] text-[#F5F1E8] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#E53935] scrollbar-track-[#101217]"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {GENERATIONS.map((gen) => (
            <div
              key={gen.id}
              className="w-[280px] sm:w-[320px] flex-shrink-0 bg-[#101217] border-2 border-[#222633] hover:border-[#F0B429]/80 transition-all duration-300 rounded-sm p-6 flex flex-col justify-between group shadow-xl relative"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: gen.color }}
              />

              <div>
                {/* Gen Badge & Year */}
                <div className="flex items-center justify-between border-b border-[#222633] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 font-pixel text-[0.55rem] rounded-sm"
                      style={{
                        backgroundColor: `${gen.color}20`,
                        color: gen.color,
                        border: `1px solid ${gen.color}50`,
                      }}
                    >
                      GEN {gen.roman}
                    </span>
                    <span className="font-mono text-xs text-[#8C9098]">{gen.region}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#F0B429]">{gen.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#F5F1E8] mb-2">{gen.title}</h3>

                {/* Description */}
                <p className="text-[#8C9098] text-xs leading-relaxed mb-6">
                  {gen.description}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="pt-4 border-t border-[#222633] space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#8C9098]">KEYSTONE:</span>
                  <span className="font-bold" style={{ color: gen.color }}>
                    {gen.signaturePokemon}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C9098]">INTRODUCED:</span>
                  <span className="text-[#F5F1E8]">+{gen.pokemonCount} POKÉMON</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
