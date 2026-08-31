"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { POKEDEX_ENTRIES, TYPE_COLORS } from "@/lib/constants";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";

function TypeBadge({ type }: { type: string }) {
  const color = TYPE_COLORS[type] ?? "#8C9098";
  return (
    <span
      className="type-badge"
      style={{ background: color + "25", color, border: `1px solid ${color}50` }}
    >
      {type}
    </span>
  );
}

// Simple pixel silhouette for Pokédex (colored block art)
function PokedexSilhouette({ color }: { color: string }) {
  return (
    <div className="flex items-center justify-center w-full h-48 relative">
      {/* Scan line animation */}
      <motion.div
        className="absolute inset-x-0 h-0.5 pointer-events-none"
        style={{ background: `${color}40` }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />
      {/* Abstract Pokéball as silhouette placeholder */}
      <div className="relative">
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Pokeball size="lg" color={color} opacity={0.7} />
        </motion.div>
        {/* Glow */}
        <div
          className="absolute inset-0 blur-2xl rounded-full"
          style={{ background: color + "20" }}
        />
      </div>
    </div>
  );
}

export default function PokedexViewer() {
  const prefersReduced = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const entry = POKEDEX_ENTRIES[current];

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + POKEDEX_ENTRIES.length) % POKEDEX_ENTRIES.length);
  };

  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({
      x: d > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 px-6 bg-panel/60">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-pokered/40" />
            <PixelText size="xxs" className="text-pokered tracking-[0.2em]">INTERACTIVE POKÉDEX</PixelText>
            <div className="h-px w-8 bg-pokered/40" />
          </div>
          <h2 className="font-bold text-cream" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Pocket reference.
          </h2>
        </div>

        {/* Pokédex device */}
        <div className="border border-card-line bg-card relative overflow-hidden">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-pokered" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-pokered" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-pokered" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-pokered" />

          {/* Device header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-card-line">
            <div className="flex items-center gap-3">
              <Pokeball size="xs" color="#E53935" />
              <div>
                <PixelText size="xxs" className="text-pokered tracking-[0.15em]">POKÉDEX</PixelText>
                <div className="font-mono text-mist/40 text-[0.55rem] tracking-[0.1em] mt-0.5">
                  // {entry.number}
                </div>
              </div>
            </div>
            {/* Navigation dots */}
            <div className="flex gap-1.5">
              {POKEDEX_ENTRIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="w-2 h-2 rounded-full transition-all duration-200"
                  style={{
                    background: i === current ? "#E53935" : "var(--card-line)",
                    transform: i === current ? "scale(1.3)" : "scale(1)",
                  }}
                  aria-label={`View ${POKEDEX_ENTRIES[i].name}`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            {/* Left: Visual */}
            <div className="border-r border-card-line p-6 relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={entry.id}
                  custom={direction}
                  variants={prefersReduced ? {} : slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <PokedexSilhouette color={entry.color} />
                  {/* Name */}
                  <div className="text-center mt-4">
                    <h3 className="font-bold text-cream text-xl tracking-[0.08em]">{entry.name}</h3>
                    <div className="flex justify-center gap-2 mt-2">
                      {entry.types.map((t) => <TypeBadge key={t} type={t} />)}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Data */}
            <div className="p-6 flex flex-col justify-between">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={entry.id + "-data"}
                  custom={direction}
                  variants={prefersReduced ? {} : slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="flex flex-col gap-4 h-full"
                >
                  {/* Entry number */}
                  <div>
                    <PixelText size="xxs" className="text-mist/40 tracking-[0.1em]">POKÉDEX ENTRY</PixelText>
                    <p className="text-mist text-xs leading-relaxed mt-2">{entry.description}</p>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["NUMBER", `#${entry.number}`],
                      ["CATEGORY", entry.category],
                      ["HEIGHT", entry.height],
                      ["WEIGHT", entry.weight],
                    ].map(([label, val]) => (
                      <div key={label} className="bg-panel px-3 py-2 border border-card-line">
                        <PixelText size="xxs" className="text-mist/40 tracking-[0.08em] block mb-1">{label}</PixelText>
                        <span className="font-mono text-cream text-xs">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Load indicator */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <PixelText size="xxs" className="text-mist/30 tracking-[0.08em]">DATA LOADED</PixelText>
                      <PixelText size="xxs" className="text-electric-yellow/60 tracking-[0.08em]">100%</PixelText>
                    </div>
                    <div className="h-1 bg-card-line overflow-hidden">
                      <div className="h-full bg-electric-yellow w-full" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-card-line">
            <button
              onClick={() => go(-1)}
              className="flex items-center gap-2 text-mist hover:text-cream transition-colors text-xs font-mono tracking-[0.08em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokered"
              aria-label="Previous Pokémon"
            >
              <ChevronLeft size={14} />
              PREV
            </button>

            <PixelText size="xxs" className="text-mist/30 tracking-[0.1em]">
              {current + 1} / {POKEDEX_ENTRIES.length}
            </PixelText>

            <button
              onClick={() => go(1)}
              className="flex items-center gap-2 text-mist hover:text-cream transition-colors text-xs font-mono tracking-[0.08em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokered"
              aria-label="Next Pokémon"
            >
              NEXT
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
