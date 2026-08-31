"use client";

import { useState, useEffect } from "react";
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

export default function AnniversaryCountdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <div className="h-32 flex items-center justify-center">
        <PixelText size="xxs" className="text-[#8C9098]">INITIALIZING CHRONOMETER...</PixelText>
      </div>
    );
  }

  return (
    <div className="bg-[#101217] border-2 border-[#222633] p-6 sm:p-8 rounded-sm relative shadow-2xl">
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F0B429]" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F0B429]" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F0B429]" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F0B429]" />

      {/* Header Status */}
      <div className="flex items-center justify-between border-b border-[#222633] pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Pokeball size="xs" color="#E53935" />
          <PixelText size="xxs" className="text-pokered tracking-[0.2em]">
            PUBLIC MINT LAUNCH
          </PixelText>
        </div>
        <div className="font-jp text-[0.65rem] golden-aura">
          カウントダウン
        </div>
      </div>

      {/* Digits Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-6">
        {[
          { label: "DAYS", val: pad(time.days) },
          { label: "HRS", val: pad(time.hours) },
          { label: "MIN", val: pad(time.minutes) },
          { label: "SEC", val: pad(time.seconds) },
        ].map((unit, i) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="w-full bg-[#060709] border border-[#222633] py-3 sm:py-4 px-2 text-center rounded-sm relative overflow-hidden">
              <span className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] tracking-tight tabular-nums">
                {unit.val}
              </span>
              {/* Scanline line */}
              <div className="absolute inset-x-0 top-1/2 h-px bg-[#222633]" />
            </div>
            <PixelText size="xxs" className="text-[#8C9098] mt-2 tracking-widest text-[0.55rem]">
              {unit.label}
            </PixelText>
          </div>
        ))}
      </div>

      {/* Target info & Retro Loadbar */}
      <div className="pt-4 border-t border-[#222633] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="font-mono text-[0.65rem] text-[#8C9098] tracking-wider">
          TARGET: <span className="text-[#F0B429]">SEPTEMBER 16, 2026</span> · 00:00 UTC
        </div>

        <div className="w-full sm:w-48 h-2 bg-[#060709] border border-[#222633] p-0.5 overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-[#E53935] to-[#F0B429]" />
        </div>
      </div>
    </div>
  );
}
