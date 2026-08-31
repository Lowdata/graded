"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";

// ─── Pixel silhouettes (1 = filled, 0 = empty, 2 = highlight) ───
// Each is a 12×12 grid
const SILHOUETTES: Record<string, number[][]> = {
  PIKACHU: [
    [0,0,1,1,0,0,0,0,1,1,0,0],
    [0,1,1,1,0,0,0,0,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,2,1,1,1,1,1,1,2,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,2,2,2,2,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,0,0,1,1,0,0,0],
    [0,0,1,1,0,0,0,0,1,1,0,0],
  ],
  GENGAR: [
    [0,0,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,2,1,1,1,1,2,1,1,1],
    [1,1,1,2,1,1,1,1,2,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,2,2,2,2,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,0,1,1,1,1,1,1,0,1,1],
    [1,0,0,0,1,1,1,1,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  EEVEE: [
    [0,0,0,1,1,0,0,1,1,0,0,0],
    [0,0,1,1,1,0,0,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,2,1,1,1,1,2,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,2,2,2,2,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,0,0,1,1,0,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0],
  ],
  POKEBALL: [
    [0,0,0,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,2,2,0,1,1,1,1],
    [1,1,1,1,0,2,2,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,0,0,0],
  ],
  STAR: [
    [0,0,0,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,0,0,0,0,1,1,1,0],
    [1,1,1,0,0,0,0,0,0,1,1,1],
    [1,1,0,0,0,0,0,0,0,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,0],
  ],
};

const PATTERN_LIST = ["PIKACHU", "GENGAR", "EEVEE", "POKEBALL", "STAR", "PIKACHU", "GENGAR", "EEVEE", "POKEBALL"];
const COLS = 9;
const ROWS = PATTERN_LIST.length;

// Color palette per silhouette
const SILO_COLORS: Record<string, { fill: string; highlight: string }> = {
  PIKACHU: { fill: "#F6C945", highlight: "#fff4c2" },
  GENGAR: { fill: "#7B68EE", highlight: "#C5B8FF" },
  EEVEE: { fill: "#C19A6B", highlight: "#E8D4B0" },
    POKEBALL: { fill: "#E53935", highlight: "#F5F1E8" },
  STAR: { fill: "#3B82C4", highlight: "#93C5FD" },
};

interface TileData {
  row: number;
  col: number;
  filled: boolean;
  highlight: boolean;
  fillColor: string;
  highlightColor: string;
  delay: number;
}

export default function PokemonMosaic() {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Build tile data
  const tiles: TileData[] = [];
  PATTERN_LIST.forEach((name, row) => {
    const grid = SILHOUETTES[name];
    const colors = SILO_COLORS[name];
    for (let col = 0; col < COLS; col++) {
      // Map col to silhouette col (silhouette is 12 wide, we use center 9)
      const siloCol = Math.floor((col / COLS) * 12);
      const siloRow = Math.floor(Math.random() * 12);
      const raw = grid[Math.min(siloRow, 11)][Math.min(siloCol, 11)];
      tiles.push({
        row, col,
        filled: raw > 0,
        highlight: raw === 2,
        fillColor: colors.fill,
        highlightColor: colors.highlight,
        delay: (row * 0.08 + col * 0.04),
      });
    }
  });

  return (
    <section className="py-24 px-6 bg-panel/50" id="collection">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-pokered/40" />
            <PixelText size="xxs" className="text-pokered tracking-[0.2em]">THE COLLECTION</PixelText>
            <div className="h-px w-8 bg-pokered/40" />
          </div>
          <h2 className="font-bold text-cream leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            30 years.{" "}
            <span className="text-gradient-gold">Countless Pokémon.</span>
          </h2>
          <p className="text-mist mt-4 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            From the original 151 to a universe that continues to evolve, every generation
            added another chapter to the adventure.
          </p>
        </div>

        {/* Mosaic grid */}
        <div
          ref={ref}
          className="relative border border-card-line bg-card p-3 mx-auto"
          style={{ maxWidth: 720 }}
        >
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-electric-yellow" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-electric-yellow" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-electric-yellow" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-electric-yellow" />

          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
          >
            {tiles.map((tile, i) => (
              <motion.div
                key={i}
                className="aspect-square relative cursor-pointer"
                style={{
                  background: tile.filled
                    ? tile.highlight ? tile.highlightColor : tile.fillColor
                    : "var(--card-line)",
                  opacity: tile.filled ? 1 : 0.15,
                }}
                initial={prefersReduced ? { opacity: tile.filled ? 0.8 : 0.15 } : { opacity: 0, scale: 0.5 }}
                animate={
                  visible
                    ? {
                        opacity: tile.filled ? (hovered === i ? 1 : 0.85) : 0.15,
                        scale: hovered === i ? 1.15 : 1,
                      }
                    : {}
                }
                transition={{
                  delay: prefersReduced ? 0 : tile.delay,
                  duration: 0.4,
                  ease: [0.2, 0.9, 0.3, 1.3],
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                aria-hidden="true"
              >
                {hovered === i && tile.filled && (
                  <div
                    className="absolute inset-0"
                    style={{
                      boxShadow: `0 0 8px ${tile.fillColor}`,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-4">
          <PixelText size="xxs" className="text-mist/50 tracking-[0.1em]">
            HOVER A TILE — EACH SILHOUETTE IS PIXEL-RENDERED
          </PixelText>
        </div>

        {/* Pokémon names row */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[...new Set(PATTERN_LIST)].map((name) => (
            <div key={name} className="flex items-center gap-1.5">
              <div className="w-2 h-2" style={{ background: SILO_COLORS[name]?.fill }} />
              <PixelText size="xxs" className="text-mist/60">{name}</PixelText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
