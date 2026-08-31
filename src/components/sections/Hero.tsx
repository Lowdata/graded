"use client";

import { motion } from "framer-motion";
import Pokeball from "@/components/ui/Pokeball";
import PixelText from "@/components/ui/PixelText";
import AnniversaryCountdown from "./AnniversaryCountdown";
import { Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6 lg:px-10 pt-36 pb-20 bg-pokemon-texture"
      id="anniversary"
      aria-label="Hero — Pokémon 30th Anniversary"
    >
      {/* Subtle giant rotating background Pokéball */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="opacity-[0.035] animate-pokespin"
          style={{ width: "min(650px, 85vw)", height: "min(650px, 85vw)" }}
        >
          <Pokeball size="xl" className="w-full h-full" color="#F0B429" />
        </div>
      </div>

      {/* Floating Golden Japanese Atmosphere (Fixed position in background, no overlap with text) */}
      <div className="absolute left-6 top-40 font-jp golden-aura text-xs sm:text-sm tracking-widest hidden xl:block opacity-60" style={{ writingMode: "vertical-rl" }}>
        カントーから始まる旅
      </div>
      <div className="absolute right-6 top-40 font-jp golden-aura text-xs sm:text-sm tracking-widest hidden xl:block opacity-60" style={{ writingMode: "vertical-rl" }}>
        思い出は、色あせない。
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-6 sm:w-10 bg-[#F0B429]" />
          <PixelText size="xs" className="text-gold tracking-[0.25em]">
            STEALTH MINT · SEPT 16 · 30TH ANNIVERSARY
          </PixelText>
          <div className="h-px w-6 sm:w-10 bg-[#F0B429]" />
        </motion.div>

        {/* Japanese Hero Aura Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-jp text-sm sm:text-base font-bold golden-aura-intense tracking-[0.3em] mb-4"
        >
          冒険は、まだ終わらない。
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="font-bold tracking-tight">
            <span
              className="block text-gradient-gold font-extrabold"
              style={{ fontSize: "clamp(4.5rem, 14vw, 9.5rem)", lineHeight: 0.9 }}
            >
              30
            </span>
            <span
              className="block text-[#F5F1E8] font-bold tracking-[0.08em] mt-2"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)", lineHeight: 1.1 }}
            >
              YEARS OF POKÉMON
            </span>
          </h1>
        </motion.div>

        {/* Tagline from HTML */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl font-bold text-[#F5F1E8] mb-4 tracking-wide"
        >
          Built for those who <em className="text-[#F0B429] not-italic">never</em> stopped collecting.
        </motion.h2>

        {/* Subtitle / Story Copy */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[#8C9098] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8"
        >
          4,444 pixel-faced PFPs pulled from 40 of the most recognizable lineages in the hobby, minted on-chain for the 30th anniversary. Hold your face forever, or burn three and chase 1 of 1,000 real anniversary booster packs.
        </motion.p>

        {/* CTA Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-6"
        >
          <a
            href="#mechanics"
            className="px-8 py-4 bg-[#F0B429] hover:bg-[#FFD54F] text-[#060709] font-pixel text-xs tracking-widest transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_25px_rgba(240,180,41,0.35)] flex items-center gap-2.5 rounded-sm"
          >
            <Pokeball size="xs" color="#060709" />
            ENTER MINT
          </a>

          <a
            href="#mechanics"
            className="px-8 py-4 bg-[#101217] hover:bg-[#161922] border border-[#353B4F] hover:border-[#F0B429] text-[#F5F1E8] font-mono text-xs tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 rounded-sm"
          >
            HOW IT WORKS →
          </a>
        </motion.div>

        {/* Stamp Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10"
        >
          <div className="stamp">MINT CONDITION ONLY · NM-MT 10</div>
        </motion.div>

        {/* Live Countdown Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full max-w-xl mx-auto"
        >
          <AnniversaryCountdown />
        </motion.div>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <div className="mt-16 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity">
        <PixelText size="xxs" className="text-[#8C9098] tracking-[0.2em]">
          SCROLL ARCHIVE
        </PixelText>
        <ArrowDown size={14} className="text-[#F0B429] animate-bounce" />
      </div>
    </section>
  );
}
