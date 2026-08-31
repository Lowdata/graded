"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GENERATIONS } from "@/lib/constants";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";

function GenCard({ gen, index, active }: {
  gen: typeof GENERATIONS[0]; index: number; active: boolean;
}) {
  const prefersReduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 cursor-pointer group"
      style={{ width: "clamp(220px, 28vw, 280px)" }}
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 32 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card */}
      <div
        className="relative border border-card-line bg-card overflow-hidden transition-all duration-300"
        style={{
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? `0 20px 40px -10px ${gen.color}40` : "none",
          borderColor: hovered ? gen.color + "80" : "var(--card-line)",
        }}
      >
        {/* Top accent */}
        <div className="h-1 w-full" style={{ background: gen.color }} />

        {/* Background silhouette */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
          style={{ opacity: hovered ? 0.08 : 0.03 }}
        >
          <Pokeball size="lg" color={gen.color} opacity={0.6} />
        </div>

        <div className="relative p-6">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <PixelText size="xxs" className="tracking-[0.15em]">
                <span style={{ color: gen.color }}>GEN {gen.roman}</span>
              </PixelText>
              <div className="font-mono text-mist/40 text-[0.6rem] tracking-[0.12em] mt-1">
                {gen.region}
              </div>
            </div>
            <div className="font-mono text-electric-yellow text-[0.65rem] tracking-[0.1em]">
              {gen.year}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-cream text-base mb-3 leading-tight">{gen.title}</h3>

          {/* Divider */}
          <div className="h-px w-full bg-card-line mb-4" />

          {/* Metadata */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <PixelText size="xxs" className="text-mist/40 tracking-[0.08em]">REGION</PixelText>
              <span className="font-mono text-[0.65rem] text-cream/70">{gen.region}</span>
            </div>
            <div className="flex justify-between items-center">
              <PixelText size="xxs" className="text-mist/40 tracking-[0.08em]">RELEASE</PixelText>
              <span className="font-mono text-[0.65rem] text-cream/70">{gen.year}</span>
            </div>
            <div className="flex justify-between items-center">
              <PixelText size="xxs" className="text-mist/40 tracking-[0.08em]">NEW POKÉMON</PixelText>
              <span className="font-mono text-[0.65rem]" style={{ color: gen.color }}>+{gen.pokemonCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <PixelText size="xxs" className="text-mist/40 tracking-[0.08em]">SIGNATURE</PixelText>
              <span className="font-mono text-[0.65rem] text-cream/70">{gen.signaturePokemon}</span>
            </div>
          </div>

          {/* Bottom Pokéball indicator */}
          <div className="mt-5 flex items-center gap-2">
            <Pokeball size="xs" color={gen.color} />
            <div className="flex-1 h-px bg-card-line" />
            <PixelText size="xxs" className="text-mist/30 tracking-[0.08em]">
              #{String(gen.id).padStart(2, "0")}
            </PixelText>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GenerationCards() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-panel/40" id="generations">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10" ref={ref}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-pokered/40" />
              <PixelText size="xxs" className="text-pokered tracking-[0.2em]">NINE GENERATIONS</PixelText>
            </div>
            <h2 className="font-bold text-cream" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Every region.{" "}
              <span className="text-gradient-gold">Every era.</span>
            </h2>
          </div>
          <p className="text-mist text-sm max-w-xs leading-relaxed">
            From Game Boy to Nintendo Switch — nine generations, nine regions, one endless adventure.
          </p>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-6"
          style={{ scrollbarWidth: "thin", scrollbarColor: "var(--pokered) var(--card)" }}
        >
          {GENERATIONS.map((gen, i) => (
            <GenCard key={gen.id} gen={gen} index={i} active={active} />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-2 mt-4">
          <PixelText size="xxs" className="text-mist/30 tracking-[0.1em]">SCROLL TO EXPLORE</PixelText>
          <div className="flex gap-1">
            {GENERATIONS.map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-mist/20" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
