"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EVOLUTION_CHAINS } from "@/components/ui/PokemonSVGs";
import {
  CharizardSVG,
  BlastoiseSVG,
  VenusaurSVG,
  GengarSVG,
  PikachuSVG,
  EeveeSVG,
  MewtwoSVG,
  RayquazaSVG
} from "@/components/ui/PokemonSVGs";
import Pokeball from "@/components/ui/Pokeball";
import PixelText from "@/components/ui/PixelText";
import { Zap, Flame, Shield, ArrowRight, Sparkles } from "lucide-react";

export default function EvolutionShowcase() {
  const [selectedChainId, setSelectedChainId] = useState(EVOLUTION_CHAINS[0].id);
  const [activeStageIndex, setActiveStageIndex] = useState(2); // Default to Final Form

  const currentChain = EVOLUTION_CHAINS.find((c) => c.id === selectedChainId) || EVOLUTION_CHAINS[0];
  const currentStage = currentChain.stages[activeStageIndex];

  // Helper to render relevant SVG based on chain and stage
  const renderPokemonVisual = (chainId: string, stage: number) => {
    switch (chainId) {
      case "charizard-line":
        return <CharizardSVG size={180} glow glowColor="#E53935" />;
      case "blastoise-line":
        return <BlastoiseSVG size={180} glow glowColor="#3B82C4" />;
      case "venusaur-line":
        return <VenusaurSVG size={180} glow glowColor="#4DB6AC" />;
      case "gengar-line":
        return <GengarSVG size={180} glow glowColor="#BA68C8" />;
      case "pikachu-line":
        return <PikachuSVG size={180} glow glowColor="#F0B429" />;
      case "eevee-line":
        return <EeveeSVG size={180} glow glowColor="#F0B429" />;
      default:
        return <MewtwoSVG size={180} glow glowColor="#D500F9" />;
    }
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-10 bg-[#0A0C11] border-t border-b border-[#222633] overflow-hidden" id="evolutions">
      {/* Background Watermark */}
      <div className="absolute right-0 top-10 font-jp font-black text-white/[0.015] pointer-events-none select-none text-[12vw] leading-none" style={{ writingMode: "vertical-rl" }}>
        進化の極致
      </div>

      <div className="max-w-[1300px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Pokeball size="xs" color="#F0B429" />
            <PixelText size="xs" className="text-gold tracking-[0.25em]">
              40 LINEAGES // EVOLUTION MATRIX
            </PixelText>
            <Pokeball size="xs" color="#F0B429" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] mb-4">
            Power Up Your Lineage.{" "}
            <span className="golden-aura">進化の系譜</span>
          </h2>
          <p className="text-[#8C9098] text-sm md:text-base leading-relaxed">
            Every face minted in the 4,444 collection belongs to an ancestral lineage. 
            Evolve through battle experience or execute on-chain burns to ascend to ultimate collector tier.
          </p>
        </div>

        {/* Lineage Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {EVOLUTION_CHAINS.map((chain) => {
            const isSelected = chain.id === selectedChainId;
            return (
              <button
                key={chain.id}
                onClick={() => {
                  setSelectedChainId(chain.id);
                  setActiveStageIndex(2);
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-sm border text-xs font-mono tracking-wider transition-all duration-300 ${
                  isSelected
                    ? "bg-[#1A1D27] border-[#F0B429] text-[#FFF2C9] shadow-[0_0_20px_rgba(240,180,41,0.25)]"
                    : "bg-[#101217] border-[#222633] text-[#8C9098] hover:border-[#353B4F] hover:text-[#F5F1E8]"
                }`}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: chain.color,
                    boxShadow: isSelected ? `0 0 8px ${chain.color}` : "none",
                  }}
                />
                <span className="font-bold">{chain.name.split(" ")[0]}</span>
                <span className="font-jp text-[0.65rem] opacity-70 hidden sm:inline">{chain.jpName}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Evolution Stage Card */}
        <div className="bg-[#101217] border-2 border-[#222633] p-6 sm:p-10 rounded-sm relative shadow-2xl">
          {/* Top Stamp */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222633] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="stamp">
                STAGE {currentStage.stage} / 3
              </div>
              <span className="font-jp text-sm golden-aura font-semibold tracking-widest">
                {currentChain.jpName}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#8C9098]">
              <span className="text-[#F0B429] font-bold">ELEMENT:</span> {currentChain.type}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Stage Display (Left) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-[#090A0D] border border-[#222633] rounded-sm relative overflow-hidden group">
              {/* Radial Aura Pulse behind SVG */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-700 group-hover:opacity-40"
                style={{
                  background: `radial-gradient(circle at center, ${currentChain.color} 0%, transparent 70%)`,
                }}
              />

              {/* Power-up Sparks */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-[#F0B429]">
                <Sparkles size={14} className="animate-pulse" />
                <PixelText size="xxs" className="text-gold tracking-widest">
                  MAX AURA
                </PixelText>
              </div>

              {/* SVG Character */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedChainId}-${activeStageIndex}`}
                  initial={{ scale: 0.8, opacity: 0, filter: "brightness(2)" }}
                  animate={{ scale: 1, opacity: 1, filter: "brightness(1)" }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="py-4 relative z-10"
                >
                  {renderPokemonVisual(selectedChainId, currentStage.stage)}
                </motion.div>
              </AnimatePresence>

              {/* Japanese Name with Golden Aura */}
              <div className="mt-4 text-center">
                <div className="font-jp text-lg font-bold golden-aura-intense tracking-widest">
                  {currentStage.jpName}
                </div>
                <div className="font-mono text-xs text-[#8C9098] tracking-widest mt-1">
                  NO. {currentStage.number} // {currentStage.levelReq}
                </div>
              </div>
            </div>

            {/* Evolution Tree & Stats (Right) */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              {/* Evolution Step Selector Bar */}
              <div>
                <PixelText size="xxs" className="text-[#8C9098] tracking-[0.2em] mb-3 block">
                  SELECT EVOLUTION STAGE
                </PixelText>
                <div className="grid grid-cols-3 gap-3">
                  {currentChain.stages.map((stg, idx) => {
                    const isActive = idx === activeStageIndex;
                    return (
                      <button
                        key={stg.number}
                        onClick={() => setActiveStageIndex(idx)}
                        className={`p-3 text-left border rounded-sm transition-all duration-200 ${
                          isActive
                            ? "bg-[#181B24] border-[#F0B429] shadow-[0_0_15px_rgba(240,180,41,0.2)]"
                            : "bg-[#0B0C10] border-[#222633] hover:border-[#353B4F] opacity-70 hover:opacity-100"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <PixelText size="xxs" className={isActive ? "text-[#F0B429]" : "text-[#8C9098]"}>
                            S{stg.stage}
                          </PixelText>
                          <span className="font-mono text-[0.6rem] text-[#8C9098]">{stg.levelReq}</span>
                        </div>
                        <div className="font-bold text-xs sm:text-sm text-[#F5F1E8] truncate">
                          {stg.name}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Stage Description & Stats Box */}
              <div className="bg-[#090A0D] border border-[#222633] p-5 rounded-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#222633] pb-3">
                  <h3 className="text-xl font-bold text-[#F5F1E8] flex items-center gap-2">
                    {currentStage.name}
                    <span className="font-jp text-xs text-[#F0B429] font-normal">
                      ({currentStage.jpName})
                    </span>
                  </h3>
                  <div className="font-mono text-xs px-2.5 py-1 bg-[#1A1D27] border border-[#353B4F] text-[#FFD54F]">
                    {currentStage.stat}
                  </div>
                </div>

                <p className="text-[#B4B7C0] text-sm leading-relaxed">
                  {currentStage.desc}
                </p>

                {/* Evolution Power Meter */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between font-mono text-[0.65rem] text-[#8C9098]">
                    <span>POWER THRESHOLD</span>
                    <span className="text-[#F0B429] font-bold">
                      {activeStageIndex === 0 ? "33% · BASE FORM" : activeStageIndex === 1 ? "66% · INTERMEDIATE" : "100% · ULTIMATE FORM"}
                    </span>
                  </div>
                  <div className="h-2 bg-[#1A1D27] border border-[#222633] rounded-none overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#E53935] via-[#F0B429] to-[#FFD54F]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${(activeStageIndex + 1) * 33.33}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* Collector Tip Banner */}
              <div className="flex items-center gap-3 p-4 bg-[#141720] border border-[#222633] text-xs text-[#8C9098]">
                <Pokeball size="xs" color="#E53935" />
                <span>
                  <strong className="text-[#F5F1E8]">COLLECTOR RULE:</strong> Holding 3 un-evolved stages allows instant on-chain fusion burn into physical 30th Anniversary boosters.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
