"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { POKEDEX_ENTRIES, TYPE_COLORS } from "@/lib/constants";
import {
  PikachuSVG,
  CharizardSVG,
  BlastoiseSVG,
  VenusaurSVG,
  GengarSVG,
  MewtwoSVG,
  EeveeSVG,
  LucarioSVG
} from "@/components/ui/PokemonSVGs";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";
import { ChevronLeft, ChevronRight, Activity, Radio } from "lucide-react";

export default function PokedexViewer() {
  const [currentIndex, setCurrentIndex] = useState(3); // Start with Pikachu (#025)

  const currentPokemon = POKEDEX_ENTRIES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? POKEDEX_ENTRIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === POKEDEX_ENTRIES.length - 1 ? 0 : prev + 1));
  };

  const renderPokemonSVG = (id: string) => {
    switch (id) {
      case "bulbasaur":
        return <VenusaurSVG size={180} glow color="#5DBE62" glowColor="#5DBE62" />;
      case "charmander":
        return <CharizardSVG size={180} glow color="#FF6B35" glowColor="#FF6B35" />;
      case "squirtle":
        return <BlastoiseSVG size={180} glow color="#4A90D9" glowColor="#4A90D9" />;
      case "pikachu":
        return <PikachuSVG size={180} glow color="#F0B429" glowColor="#F0B429" />;
      case "gengar":
        return <GengarSVG size={180} glow color="#7B68EE" glowColor="#7B68EE" />;
      case "mewtwo":
        return <MewtwoSVG size={180} glow color="#E040FB" glowColor="#E040FB" />;
      case "eevee":
        return <EeveeSVG size={180} glow color="#C19A6B" glowColor="#C19A6B" />;
      case "lucario":
        return <LucarioSVG size={180} glow color="#3B82C4" glowColor="#3B82C4" />;
      default:
        return <PikachuSVG size={180} glow />;
    }
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-10 bg-[#080A0E] border-b border-[#222633] overflow-hidden" id="pokedex">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Pokeball size="xs" color="#E53935" />
            <PixelText size="xs" className="text-pokered tracking-[0.25em]">
              KANTO DECODEX // 図鑑端末
            </PixelText>
            <Pokeball size="xs" color="#E53935" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] mb-3">
            Pocket Reference.{" "}
            <span className="golden-aura">全国図鑑</span>
          </h2>
          <p className="text-[#8C9098] text-sm leading-relaxed">
            Direct telemetry from the original 1996 Pokédex archive with elemental resonance data.
          </p>
        </div>

        {/* Pokédex Hardware Terminal Frame */}
        <div className="bg-[#101217] border-2 border-[#E53935] rounded-sm p-4 sm:p-8 shadow-[0_0_40px_rgba(229,57,53,0.15)] relative">
          {/* Top Status Lights (Game Boy / Pokedex Style) */}
          <div className="flex items-center justify-between border-b border-[#222633] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#00E5FF] border-2 border-white animate-pulse shadow-[0_0_12px_#00E5FF]" />
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E53935]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F0B429]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
              </div>
            </div>

            <div className="font-mono text-xs text-[#8C9098] flex items-center gap-2">
              <Radio size={14} className="text-[#E53935] animate-pulse" />
              <span>DECODEX v3.0 · ENCRYPTED</span>
            </div>
          </div>

          {/* Main Grid: Screen on Left, Data on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Screen Window */}
            <div className="md:col-span-6 bg-[#040507] border-2 border-[#222633] rounded-sm p-6 relative flex flex-col items-center justify-center min-h-[300px] overflow-hidden group">
              {/* Scanlines inside screen */}
              <div className="absolute inset-0 bg-scanlines opacity-40 pointer-events-none" />

              {/* SVG Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPokemon.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 my-4"
                >
                  {renderPokemonSVG(currentPokemon.id)}
                </motion.div>
              </AnimatePresence>

              {/* Bottom Display Bar */}
              <div className="w-full relative z-10 flex justify-between items-center pt-4 border-t border-[#222633] font-mono text-xs text-[#8C9098]">
                <span className="text-[#F0B429] font-bold">NO. {currentPokemon.number}</span>
                <span className="font-jp golden-aura text-xs">{currentPokemon.category}</span>
              </div>
            </div>

            {/* Data Console */}
            <div className="md:col-span-6 space-y-6">
              {/* Name & Type Badges */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F1E8] tracking-wider">
                    {currentPokemon.name}
                  </h3>
                  <span className="font-pixel text-xs text-[#F0B429]">
                    #{currentPokemon.number}
                  </span>
                </div>

                <div className="flex gap-2">
                  {currentPokemon.types.map((type) => (
                    <span
                      key={type}
                      className="type-badge"
                      style={{
                        backgroundColor: `${TYPE_COLORS[type] || "#8C9098"}20`,
                        color: TYPE_COLORS[type] || "#8C9098",
                        border: `1px solid ${TYPE_COLORS[type] || "#8C9098"}50`,
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="bg-[#090A0D] border border-[#222633] p-4 rounded-sm">
                <PixelText size="xxs" className="text-[#8C9098] tracking-widest block mb-2">
                  DATABASE ENTRY // 図鑑解説
                </PixelText>
                <p className="text-sm text-[#B4B7C0] leading-relaxed">
                  {currentPokemon.description}
                </p>
              </div>

              {/* Vital Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="bg-[#090A0D] border border-[#222633] p-3">
                  <div className="text-[#8C9098] text-[0.65rem] mb-1">HEIGHT</div>
                  <div className="text-[#F5F1E8] font-bold">{currentPokemon.height}</div>
                </div>
                <div className="bg-[#090A0D] border border-[#222633] p-3">
                  <div className="text-[#8C9098] text-[0.65rem] mb-1">WEIGHT</div>
                  <div className="text-[#F5F1E8] font-bold">{currentPokemon.weight}</div>
                </div>
              </div>

              {/* Selector Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2.5 bg-[#141720] hover:bg-[#1A1D27] border border-[#353B4F] text-[#F5F1E8] text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={16} />
                  PREV ENTRY
                </button>

                <div className="font-mono text-xs text-[#8C9098]">
                  {currentIndex + 1} / {POKEDEX_ENTRIES.length}
                </div>

                <button
                  onClick={handleNext}
                  className="px-4 py-2.5 bg-[#141720] hover:bg-[#1A1D27] border border-[#353B4F] text-[#F5F1E8] text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
                >
                  NEXT ENTRY
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
