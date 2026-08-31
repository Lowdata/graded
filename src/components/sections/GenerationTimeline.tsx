"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GENERATIONS } from "@/lib/constants";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";

function TimelineItem({ gen, index, active }: {
  gen: typeof GENERATIONS[0]; index: number; active: boolean;
}) {
  const prefersReduced = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative flex items-start gap-6 py-8"
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: isEven ? -30 : 30 }}
      animate={active ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Connector line */}
      <div
        className="absolute left-[22px] top-0 bottom-0 w-px"
        style={{ background: `linear-gradient(to bottom, transparent, ${gen.color}40, transparent)` }}
      />

      {/* Pokéball marker */}
      <div className="relative z-10 flex-shrink-0 mt-1">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center border-2"
          style={{ borderColor: gen.color, background: "var(--ink)" }}
        >
          <Pokeball size="xs" color={gen.color} />
        </div>
        {/* Pulse ring on active */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ borderColor: gen.color, borderWidth: 2 }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 pb-4 border-b border-card-line">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <PixelText size="xxs" className="text-mist/50 tracking-[0.12em] font-mono">
            {gen.year}
          </PixelText>
          <div
            className="px-2 py-0.5 text-[0.55rem] font-pixel tracking-[0.08em]"
            style={{ color: gen.color, border: `1px solid ${gen.color}30` }}
          >
            GEN {gen.roman}
          </div>
          <div className="font-mono text-[0.6rem] text-mist/40 tracking-[0.1em]">
            {gen.region}
          </div>
        </div>
        <h3 className="font-bold text-cream text-lg mb-2">{gen.title}</h3>
        <p className="text-mist text-sm leading-relaxed">{gen.description}</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-sm" style={{ background: gen.color }} />
          <PixelText size="xxs" className="text-mist/40 tracking-[0.1em]">
            +{gen.pokemonCount} POKÉMON
          </PixelText>
        </div>
      </div>
    </motion.div>
  );
}

export default function GenerationTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const prefersReduced = useReducedMotion();

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
    <section className="py-24 px-6 bg-ink" id="timeline">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-pokered/40" />
            <PixelText size="xxs" className="text-pokered tracking-[0.2em]">NO ROADMAP, JUST HISTORY</PixelText>
            <div className="h-px w-8 bg-pokered/40" />
          </div>
          <h2 className="font-bold text-cream" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Every generation left a mark.
          </h2>
          <p className="text-mist mt-3 text-sm md:text-base max-w-lg mx-auto">
            Nine generations. Nine regions. One unbroken thread of adventure.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Main vertical line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-card-line" />

          {GENERATIONS.map((gen, i) => (
            <TimelineItem key={gen.id} gen={gen} index={i} active={prefersReduced ? true : active} />
          ))}
        </div>
      </div>
    </section>
  );
}
