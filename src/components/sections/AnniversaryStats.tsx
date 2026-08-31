"use client";

import { STATS } from "@/lib/constants";
import PixelText from "@/components/ui/PixelText";

export default function AnniversaryStats() {
  const statsList = [
    { n: "4,444", l: "SUPPLY", jp: "総発行数" },
    { n: "40", l: "LINEAGES + EVOS", jp: "系譜と進化" },
    { n: "1,000", l: "PHYSICAL PACKS", jp: "実物パック" },
    { n: "1:2", l: "BURN ODDS", jp: "燃焼確率" },
  ];

  return (
    <section className="bg-[#0B0D12] border-t border-b border-[#222633] py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#222633] border border-[#222633]">
          {statsList.map((stat, i) => (
            <div
              key={stat.l}
              className="bg-[#101217] p-6 sm:p-8 text-center flex flex-col items-center justify-center hover:bg-[#141720] transition-colors"
            >
              <div className="font-jp text-[0.65rem] golden-aura mb-2 opacity-80">
                {stat.jp}
              </div>
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0B429] tracking-tight">
                {stat.n}
              </div>
              <div className="font-pixel text-[0.55rem] sm:text-[0.6rem] text-[#8C9098] tracking-widest mt-2">
                {stat.l}
              </div>
            </div>
          ))}
        </div>

        {/* Retro 8-bit Loading Bar from HTML */}
        <div className="text-center mt-8">
          <div className="loadbar">
            <div className="loadbar-fill" />
          </div>
          <div className="font-mono text-[0.65rem] text-[#8C9098] tracking-[0.15em] mt-3">
            LOADING ON-CHAIN RARITY & LINEAGE DATA...
          </div>
        </div>
      </div>
    </section>
  );
}
