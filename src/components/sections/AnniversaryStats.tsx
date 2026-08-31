"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/constants";
import PixelText from "@/components/ui/PixelText";

function useCountUp(target: number, duration = 1500, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatCard({ value, suffix, label, index, active }: {
  value: number; suffix: string; label: string; index: number; active: boolean;
}) {
  const prefersReduced = useReducedMotion();
  const count = useCountUp(value, 1200, prefersReduced ? true : active);

  return (
    <motion.div
      className="flex flex-col items-center py-10 px-6 border-r border-card-line last:border-r-0 relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Accent top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-pokered opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="font-mono text-4xl md:text-5xl font-semibold text-electric-yellow tabular-nums">
        {count.toLocaleString()}{suffix}
      </div>
      <PixelText size="xxs" className="text-mist/60 mt-3 tracking-[0.15em]">
        {label}
      </PixelText>
    </motion.div>
  );
}

export default function AnniversaryStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="border-t border-b border-card-line bg-ink"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} active={active} />
          ))}
        </div>
      </div>
    </div>
  );
}
