"use client";

import { motion, useReducedMotion } from "framer-motion";
import Pokeball from "@/components/ui/Pokeball";
import PixelText from "@/components/ui/PixelText";
import AnniversaryCountdown from "./AnniversaryCountdown";

// Floating Japanese character
function FloatingJP({ text, x, delay, duration, opacity }: {
  text: string; x: number; delay: number; duration: number; opacity: number;
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className="absolute font-jp text-cream pointer-events-none select-none"
      style={{
        left: `${x}%`,
        top: "10%",
        fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)",
        writingMode: "vertical-rl",
        opacity,
        letterSpacing: "0.2em",
      }}
      animate={prefersReduced ? {} : {
        y: ["0%", "80%"],
        opacity: [0, opacity, opacity, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.div>
  );
}

// Floating small Pokéball
function FloatingBall({ x, y, delay, duration, size }: {
  x: number; y: number; delay: number; duration: number; size: "xs" | "sm";
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={prefersReduced ? {} : {
        y: [0, -30, 0],
        rotate: [0, 360],
        opacity: [0.15, 0.3, 0.15],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Pokeball size={size} opacity={0.25} />
    </motion.div>
  );
}

// Pixel particle
function Particle({ x, y, delay }: { x: number; y: number; delay: number }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className="absolute w-1 h-1 bg-electric-yellow pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={prefersReduced ? {} : {
        opacity: [0, 1, 0],
        scale: [0.5, 1.5, 0.5],
      }}
      transition={{
        duration: 3 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const JP_CHARS = [
  { text: "ポケモン", x: 5, delay: 0, duration: 20, opacity: 0.06 },
  { text: "30周年", x: 12, delay: 5, duration: 25, opacity: 0.08 },
  { text: "冒険", x: 82, delay: 2, duration: 18, opacity: 0.06 },
  { text: "伝説", x: 88, delay: 8, duration: 22, opacity: 0.07 },
  { text: "カントー", x: 93, delay: 3, duration: 28, opacity: 0.05 },
  { text: "1996", x: 3, delay: 12, duration: 30, opacity: 0.08 },
];

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: i * 0.4,
}));

const FLOATING_BALLS = [
  { x: 8, y: 20, delay: 0, duration: 7, size: "xs" as const },
  { x: 85, y: 15, delay: 2, duration: 9, size: "sm" as const },
  { x: 75, y: 70, delay: 4, duration: 8, size: "xs" as const },
  { x: 15, y: 65, delay: 1, duration: 10, size: "xs" as const },
  { x: 92, y: 45, delay: 3, duration: 6, size: "xs" as const },
];

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 pt-28 pb-16"
      id="anniversary"
      aria-label="Hero — Pokémon 30th Anniversary"
    >
      {/* Pixel grid bg */}
      <div className="absolute inset-0 pixel-grid opacity-30 pointer-events-none" />

      {/* Giant background Pokéball */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={prefersReduced ? {} : { rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{ opacity: 0.04, width: "min(700px, 90vw)", height: "min(700px, 90vw)" }}
        >
          <Pokeball size="xl" className="w-full h-full" />
        </motion.div>
      </div>

      {/* Floating Japanese text */}
      {JP_CHARS.map((c, i) => (
        <FloatingJP key={i} {...c} />
      ))}

      {/* Floating Pokéballs */}
      {FLOATING_BALLS.map((b, i) => (
        <FloatingBall key={i} {...b} />
      ))}

      {/* Pixel particles */}
      {PARTICLES.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-pokered/60" />
          <PixelText size="xxs" className="text-pokered tracking-[0.2em]">
            POKÉMON · 30TH ANNIVERSARY · 1996 — 2026
          </PixelText>
          <div className="h-px w-8 bg-pokered/60" />
        </motion.div>

        {/* Japanese ambient */}
        <motion.div variants={itemVariants} className="font-jp text-cream/10 text-sm mb-3 tracking-[0.3em]">
          ポケットモンスター — 30周年
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants}>
          <h1 className="font-bold leading-none tracking-tight mb-2">
            <span
              className="block text-gradient-gold"
              style={{ fontSize: "clamp(5rem, 18vw, 14rem)", lineHeight: 0.9, fontWeight: 800 }}
            >
              30
            </span>
            <span
              className="block text-cream"
              style={{ fontSize: "clamp(2rem, 7vw, 5.5rem)", letterSpacing: "0.15em", fontWeight: 300 }}
            >
              YEARS OF POKÉMON
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-mist text-lg md:text-xl mt-6 leading-relaxed max-w-xl mx-auto font-light"
        >
          Three decades. One adventure. Millions of memories.
        </motion.p>

        {/* Body copy */}
        <motion.p
          variants={itemVariants}
          className="text-mist/70 text-sm md:text-base mt-4 leading-relaxed max-w-2xl mx-auto"
        >
          From the first journey through Kanto to a world that now spans games, animation, cards,
          merchandise, and generations of Trainers — Pokémon has become one of the most enduring
          cultural phenomena in gaming.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="#anniversary"
            className="inline-flex items-center gap-2 bg-pokered text-cream font-bold px-8 py-4 text-sm tracking-[0.08em] hover:bg-pokered/90 transition-all duration-200 hover:-translate-y-1 rounded-sm"
          >
            <Pokeball size="xs" color="#F5F1E8" />
            EXPLORE THE ANNIVERSARY
          </a>
          <a
            href="#timeline"
            className="inline-flex items-center gap-2 border border-card-line text-cream px-8 py-4 text-sm tracking-[0.08em] hover:border-electric-yellow/50 transition-all duration-200 hover:-translate-y-1 rounded-sm"
          >
            VIEW THE TIMELINE
          </a>
        </motion.div>

        {/* Small UI markers */}
        <motion.div variants={itemVariants} className="flex justify-center gap-8 mt-10 font-mono text-[0.6rem] text-mist/30 tracking-[0.1em]">
          <span>REF: PKM-30TH-2026</span>
          <span>|</span>
          <span>GEN I — IX</span>
          <span>|</span>
          <span>1000+ POKÉMON</span>
        </motion.div>
      </motion.div>

      {/* Countdown embedded below hero headline */}
      <motion.div
        className="relative z-10 mt-14 w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <AnniversaryCountdown />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={prefersReduced ? {} : { opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-pokered/50" />
        <PixelText size="xxs" className="text-mist/40 tracking-[0.2em]">SCROLL</PixelText>
      </motion.div>
    </section>
  );
}
