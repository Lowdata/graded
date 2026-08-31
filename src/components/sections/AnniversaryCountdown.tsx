"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";
import { ANNIVERSARY_DATE } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft(): TimeLeft {
  const now = Date.now();
  let diff = Math.max(0, ANNIVERSARY_DATE.getTime() - now);
  const days = Math.floor(diff / 86400000); diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000); diff -= hours * 3600000;
  const minutes = Math.floor(diff / 60000); diff -= minutes * 60000;
  const seconds = Math.floor(diff / 1000);
  return { days, hours, minutes, seconds };
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        {/* Card */}
        <div className="bg-panel border border-card-line px-4 py-3 md:px-6 md:py-4 min-w-[72px] md:min-w-[90px] text-center relative overflow-hidden">
          {/* Scan line */}
          <motion.div
            className="absolute inset-x-0 h-px bg-electric-yellow/20 pointer-events-none"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <span className="font-mono text-3xl md:text-5xl font-semibold text-cream tracking-tight tabular-nums">
            {value}
          </span>
        </div>
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-pokered" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-pokered" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-pokered" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-pokered" />
      </div>
      <PixelText size="xxs" className="text-mist/70 tracking-[0.18em]">{label}</PixelText>
    </div>
  );
}

export default function AnniversaryCountdown() {
  const prefersReduced = useReducedMotion();
  const [time, setTime] = useState<TimeLeft>(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  const isOver = Object.values(time).every((v) => v === 0);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Status header */}
      <div className="flex items-center gap-3">
        <Pokeball size="xs" />
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-pokered animate-pulse" />
          <PixelText size="xxs" className="text-pokered tracking-[0.2em]">
            {isOver ? "ANNIVERSARY ACTIVE" : "ANNIVERSARY EVENT"}
          </PixelText>
        </div>
        <Pokeball size="xs" />
      </div>

      {/* Timer units */}
      <div className="flex items-center gap-3 md:gap-5">
        <TimeUnit value={pad(time.days)} label="DAYS" />
        <span className="font-mono text-2xl md:text-4xl text-pokered/60 font-bold -mt-6">:</span>
        <TimeUnit value={pad(time.hours)} label="HOURS" />
        <span className="font-mono text-2xl md:text-4xl text-pokered/60 font-bold -mt-6">:</span>
        <TimeUnit value={pad(time.minutes)} label="MINUTES" />
        <span className="font-mono text-2xl md:text-4xl text-pokered/60 font-bold -mt-6">:</span>
        <TimeUnit value={pad(time.seconds)} label="SECONDS" />
      </div>

      {/* Target date */}
      <div className="font-mono text-[0.6rem] text-mist/40 tracking-[0.15em]">
        TARGET: {ANNIVERSARY_DATE.toUTCString()}
      </div>

      {/* Load bar */}
      <div className="w-full max-w-xs h-1.5 bg-card border border-card-line overflow-hidden">
        <motion.div
          className="h-full"
          style={{
            background: "repeating-linear-gradient(45deg, #E53935, #E53935 4px, #9B0000 4px, #9B0000 8px)"
          }}
          animate={prefersReduced ? {} : { width: ["6%", "96%"] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
