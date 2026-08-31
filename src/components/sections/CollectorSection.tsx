"use client";

import { motion, useReducedMotion } from "framer-motion";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";

// Collector card visual (CSS-drawn)
function CollectorCard() {
  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      {/* Card border */}
      <div className="relative border-2 border-electric-yellow/20 bg-gradient-to-b from-card to-panel overflow-hidden"
        style={{ aspectRatio: "2.5/3.5", boxShadow: "0 30px 60px -10px rgba(246, 201, 69, 0.15)" }}
      >
        {/* Top bar */}
        <div className="h-6 w-full bg-electric-yellow/10 border-b border-electric-yellow/20 flex items-center px-3 gap-2">
          <div className="w-2 h-2 rounded-full bg-pokered/60" />
          <PixelText size="xxs" className="text-electric-yellow/60 tracking-[0.1em]">ARCHIVE · 30TH</PixelText>
        </div>

        {/* Main area */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 gap-4">
          {/* Big Pokéball */}
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Pokeball size="lg" />
            </motion.div>
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-pokered/10 blur-xl" />
          </div>

          {/* Japanese text block */}
          <div className="text-center">
            <div className="font-jp text-cream/70 text-sm tracking-[0.2em]">ポケットモンスター</div>
            <div className="font-mono text-electric-yellow text-xs tracking-[0.15em] mt-1">1996 — 2026</div>
          </div>

          {/* Horizontal separator */}
          <div className="w-full h-px bg-electric-yellow/10" />

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-2 w-full text-center">
            {[
              ["30", "YEARS"],
              ["9", "GENS"],
              ["151+", "ORIGINAL"],
              ["1B+", "CARDS"],
            ].map(([v, l]) => (
              <div key={l} className="bg-ink/50 py-2">
                <div className="font-mono text-electric-yellow text-sm font-semibold">{v}</div>
                <PixelText size="xxs" className="text-mist/50 tracking-[0.08em]">{l}</PixelText>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-8 border-t border-electric-yellow/20 bg-electric-yellow/5 flex items-center justify-between px-4">
          <PixelText size="xxs" className="text-mist/40">PKM-2026-30TH</PixelText>
          <div className="flex gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-1 h-3" style={{ background: i < 6 ? "#F6C945" : "#232329" }} />
            ))}
          </div>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-electric-yellow/60" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-electric-yellow/60" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-electric-yellow/60" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-electric-yellow/60" />
      </div>

      {/* Rarity badge */}
      <div className="absolute -top-3 -right-3 bg-pokered px-3 py-1 text-[0.5rem] font-pixel text-cream tracking-[0.1em] rotate-3">
        LEGENDARY
      </div>
    </div>
  );
}

export default function CollectorSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-28 px-6 bg-ink relative overflow-hidden">
      {/* Background text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-jp text-cream/[0.02] pointer-events-none select-none"
        style={{ fontSize: "clamp(4rem, 12vw, 10rem)", writingMode: "vertical-rl", lineHeight: 1 }}
      >
        コレクター
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Collector card */}
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <CollectorCard />
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {/* Rarity label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-pokered/40" />
              <PixelText size="xxs" className="text-pokered tracking-[0.2em]">FOR THE COLLECTORS</PixelText>
            </div>

            <h2 className="font-bold text-cream mb-6 leading-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              For the ones who never stopped collecting.
            </h2>

            <p className="text-mist leading-relaxed mb-6 text-sm md:text-base">
              What started with a Game Boy cartridge became a universe. Pokémon collecting has never
              been just about the game — it was about the ritual. Cracking a new booster pack,
              the feel of holographic card stock, organizing binders by generation.
            </p>

            <div className="space-y-4 mb-8">
              {[
                ["VIDEO GAMES", "From Red & Green to Scarlet & Violet — nine mainline generations."],
                ["TRADING CARDS", "Over a billion cards sold worldwide since 1996."],
                ["MERCHANDISE", "Figures, plush, clothing, special editions — a complete universe."],
                ["ANIMATION", "Over 1,000 episodes of the Pokémon anime spanning three decades."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 items-start py-3 border-b border-card-line">
                  <Pokeball size="xs" className="mt-0.5 flex-shrink-0" />
                  <div>
                    <PixelText size="xxs" className="text-electric-yellow/80 tracking-[0.1em] block mb-1">{title}</PixelText>
                    <p className="text-mist/70 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Archive status badge */}
            <div className="inline-flex items-center gap-3 border border-electric-yellow/20 bg-electric-yellow/5 px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-electric-yellow rounded-full animate-pulse" />
              <div>
                <PixelText size="xxs" className="text-mist/40 tracking-[0.08em]">ARCHIVE STATUS</PixelText>
                <div className="font-mono text-electric-yellow text-xs tracking-[0.1em] mt-0.5">LEGENDARY</div>
              </div>
            </div>

            <a
              href="#collection"
              className="flex items-center gap-3 text-sm font-bold text-cream border border-card-line px-6 py-3 w-fit hover:border-electric-yellow/50 transition-all duration-200 hover:-translate-y-0.5 rounded-sm"
            >
              <Pokeball size="xs" />
              EXPLORE THE COLLECTION
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
