"use client";

import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";
import { CheckCircle2, Clock, Flame, Package } from "lucide-react";

export default function GenerationTimeline() {
  const roadmapItems = [
    {
      when: "NOW",
      title: "Stealth Contract Deployment",
      desc: "No allowlist, no whitelist grind, no gatekeeping. Smart contract deploys directly on-chain.",
      active: false,
      icon: CheckCircle2,
      jp: "ステルス公開",
    },
    {
      when: "SEPT 16",
      title: "Public Mint Opens",
      desc: "4,444 faces available. Public mint, first come, first served. Instant on-chain lineage reveal.",
      active: true,
      icon: Clock,
      jp: "ミント開始",
    },
    {
      when: "POST-MINT",
      title: "Burn Window Opens",
      desc: "Burn 3 faces to enter the physical booster pack raffle pool whenever ready — zero countdown pressure.",
      active: false,
      icon: Flame,
      jp: "燃焼期間開始",
    },
    {
      when: "TBD",
      title: "Raffle Draw + Tokyo Fulfillment",
      desc: "1,000 winners drawn via Chainlink VRF on-chain. Sealed packs ship direct from authorized retailer stock in Tokyo.",
      active: false,
      icon: Package,
      jp: "抽選と発送",
    },
  ];

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-10 bg-[#060709] border-b border-[#222633]" id="timeline">
      <div className="max-w-[800px] mx-auto">
        {/* Section Header from HTML */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Pokeball size="xs" color="#F0B429" />
            <PixelText size="xs" className="text-gold tracking-[0.25em]">
              NO ROADMAP, JUST DATES // スケジュール
            </PixelText>
            <Pokeball size="xs" color="#F0B429" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] mb-3">
            The only timeline that matters.
          </h2>
          <p className="text-[#8C9098] text-sm leading-relaxed">
            Direct, transparent milestone dates for the 30th anniversary release.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {roadmapItems.map((item, i) => (
            <div
              key={item.when}
              className={`p-6 sm:p-8 rounded-sm border-2 transition-all duration-300 relative ${
                item.active
                  ? "bg-[#141720] border-[#E53935] shadow-[0_0_30px_rgba(229,57,53,0.2)]"
                  : "bg-[#101217] border-[#222633] hover:border-[#353B4F]"
              }`}
            >
              {item.active && (
                <div className="absolute -top-3 right-6 bg-[#E53935] px-3 py-0.5 font-pixel text-[0.55rem] text-[#F5F1E8] tracking-widest rounded-[1px]">
                  CURRENT STAGE
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-sm font-bold ${item.active ? "text-[#E53935]" : "text-[#F0B429]"}`}>
                    {item.when}
                  </span>
                  <span className="font-jp text-xs opacity-60 text-[#8C9098]">{item.jp}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#F5F1E8]">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-[#8C9098] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
