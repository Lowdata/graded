"use client";

import { CharizardSVG } from "@/components/ui/PokemonSVGs";
import Pokeball from "@/components/ui/Pokeball";
import PixelText from "@/components/ui/PixelText";
import { Sparkles, Award, Shield, Disc, Layers } from "lucide-react";

export default function CollectorSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-10 bg-[#08090D] border-b border-[#222633] relative overflow-hidden" id="collector">
      {/* Background Watermark strictly contained with very low opacity */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-jp text-white/[0.015] pointer-events-none select-none text-[14vw] font-black leading-none"
        style={{ writingMode: "vertical-rl" }}
      >
        永久保存
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Holographic Graded Slab Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] bg-[#101217] border-2 border-[#F0B429] p-4 rounded-sm relative shadow-[0_0_35px_rgba(240,180,41,0.15)] group">
              {/* Graded Slab Label (Top PSA/BGS Style Header) */}
              <div className="bg-[#060709] border border-[#F0B429]/40 p-3 mb-4 rounded-sm">
                <div className="flex items-center justify-between border-b border-[#222633] pb-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Pokeball size="xs" color="#F0B429" />
                    <span className="font-pixel text-[0.6rem] text-[#F0B429] tracking-wider">
                      GRADED // 30TH
                    </span>
                  </div>
                  <span className="font-mono text-[0.65rem] text-[#8C9098]">#0001 / 4444</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="font-bold text-sm text-[#F5F1E8]">CHARIZARD · 1ST ED</div>
                    <div className="font-jp text-[0.65rem] text-[#F0B429] golden-aura">リザードン 初版</div>
                  </div>
                  <div className="text-right">
                    <div className="font-pixel text-base text-[#F0B429] leading-none">10</div>
                    <div className="font-mono text-[0.55rem] text-[#8C9098] tracking-widest">GEM-MINT</div>
                  </div>
                </div>
              </div>

              {/* Card Window with SVG Character & Holographic Sheen */}
              <div className="aspect-[3/4] bg-gradient-to-b from-[#1C1113] via-[#090A0D] to-[#0D1117] border border-[#353B4F] relative rounded-sm flex flex-col items-center justify-center p-6 overflow-hidden">
                {/* Diagonal Holographic Sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#F0B429]/5 to-transparent pointer-events-none" />

                {/* SVG Character */}
                <div className="relative z-10 my-auto">
                  <CharizardSVG size={160} glow glowColor="#E53935" />
                </div>

                {/* Card Sub-stats */}
                <div className="w-full relative z-10 pt-3 border-t border-[#222633] flex justify-between items-center text-[0.65rem] font-mono text-[#8C9098]">
                  <span>HP 120 · FIRE</span>
                  <span className="text-[#F0B429] font-bold">1996 BASE LINEAGE</span>
                </div>
              </div>

              {/* Bottom Security Hologram */}
              <div className="mt-3 flex items-center justify-between text-[0.6rem] font-mono text-[#8C9098]">
                <span className="flex items-center gap-1">
                  <Shield size={12} className="text-[#F0B429]" />
                  AUTHENTICATED ON-CHAIN
                </span>
                <span className="font-pixel text-[0.5rem] text-[#F0B429]">★ 30TH</span>
              </div>
            </div>
          </div>

          {/* Right Column: Collector Story & Media Types */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Pokeball size="xs" color="#F0B429" />
              <PixelText size="xs" className="text-gold tracking-[0.25em]">
                COLLECTOR ARCHIVE // 30年の歴史
              </PixelText>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] leading-tight">
              For the ones who{" "}
              <span className="golden-aura">never stopped collecting.</span>
            </h2>

            <p className="text-[#8C9098] text-sm md:text-base leading-relaxed">
              What began with two Game Boy cartridges in 1996 grew into the highest-grossing media franchise in human history. 
              The GRADED 30th Anniversary project immortalizes the core pillars of the hobby:
            </p>

            {/* Collecting Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  icon: Disc,
                  title: "VIDEO GAMES",
                  jp: "ゲーム",
                  desc: "From Red & Green on Game Boy to Scarlet & Violet on Switch across 9 regions.",
                },
                {
                  icon: Layers,
                  title: "TRADING CARDS",
                  jp: "カードゲーム",
                  desc: "Over 52 billion cards printed worldwide since the 1996 Base Set expansion.",
                },
                {
                  icon: Award,
                  title: "FIGURES & SLABS",
                  jp: "フィギュア",
                  desc: "High-grade PSA/BGS slabs, vintage Japanese vending sheets, and scaled statues.",
                },
                {
                  icon: Sparkles,
                  title: "ANIMATION",
                  jp: "アニメ",
                  desc: "1,200+ anime episodes, 23 movies, and 25 years of Ash & Pikachu's championship.",
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-[#101217] border border-[#222633] p-4 rounded-sm hover:border-[#353B4F] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2 text-[#F0B429]">
                    <pillar.icon size={16} />
                    <span className="font-bold text-xs tracking-wider font-mono">{pillar.title}</span>
                    <span className="font-jp text-[0.65rem] opacity-60 ml-auto">{pillar.jp}</span>
                  </div>
                  <p className="text-xs text-[#8C9098] leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#collection"
                className="px-6 py-3 bg-[#F0B429] hover:bg-[#FFD54F] text-[#060709] font-pixel text-xs tracking-widest rounded-sm transition-all shadow-[0_0_20px_rgba(240,180,41,0.25)] flex items-center gap-2"
              >
                <Pokeball size="xs" color="#060709" />
                EXPLORE 4,444 COLLECTION
              </a>

              <div className="stamp">ARCHIVE STATUS: LEGENDARY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
