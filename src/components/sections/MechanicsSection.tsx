"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";
import { Flame, ShieldCheck, Ticket, Sparkles, RefreshCw, CheckCircle2 } from "lucide-react";

export default function MechanicsSection() {
  const [selectedCards, setSelectedCards] = useState<number[]>([1, 2, 3]);
  const [isBurning, setIsBurning] = useState(false);
  const [hasBurned, setHasBurned] = useState(false);

  const handleSimulateBurn = () => {
    if (selectedCards.length < 3) return;
    setIsBurning(true);
    setTimeout(() => {
      setIsBurning(false);
      setHasBurned(true);
    }, 2200);
  };

  const handleReset = () => {
    setHasBurned(false);
    setSelectedCards([1, 2, 3]);
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-10 bg-[#060709] border-b border-[#222633] relative overflow-hidden" id="mechanics">
      {/* Background Japanese Watermark */}
      <div className="absolute left-4 top-1/3 font-jp text-white/[0.015] select-none pointer-events-none text-[10vw] font-black" style={{ writingMode: "vertical-rl" }}>
        完全燃焼
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Pokeball size="xs" color="#E53935" />
            <PixelText size="xs" className="text-pokered tracking-[0.25em]">
              TWO WAYS TO PLAY // 選択の時
            </PixelText>
            <Pokeball size="xs" color="#E53935" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] mb-4">
            Keep the face.{" "}
            <span className="text-gradient-red">Or chase the pack.</span>
          </h2>
          <p className="text-[#8C9098] text-sm md:text-base leading-relaxed">
            No forced choice at mint. Decide later, decide never — the option stays open as long as you hold on-chain.
          </p>
        </div>

        {/* Dual Paths (HOLD vs BURN) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Path 1: HOLD */}
          <div className="bg-[#101217] border-2 border-[#222633] hover:border-[#F0B429]/60 transition-all duration-300 p-8 sm:p-10 rounded-sm relative flex flex-col justify-between group">
            <div className="absolute top-0 left-8 w-12 h-1 bg-[#F0B429]" />
            <div className="absolute top-6 right-6">
              <span className="stamp">NM-MT 10</span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-2.5 py-1 bg-[#1A1D27] border border-[#F0B429]/40 font-pixel text-[0.6rem] text-[#F0B429] tracking-widest">
                  HOLD
                </span>
                <span className="font-jp text-xs text-[#F0B429] opacity-70">永久保持</span>
              </div>

              <h3 className="text-2xl font-bold text-[#F5F1E8] mb-4 flex items-center gap-2">
                Keep it as a PFP
              </h3>

              <p className="text-[#8C9098] text-sm leading-relaxed mb-6">
                Your face stays exactly as minted — on-chain, untouched, yours. A permanent, immutable digital record of the 30th anniversary, not a speculative wrapper for something else.
              </p>
            </div>

            <div className="pt-6 border-t border-[#222633] flex items-baseline justify-between">
              <div>
                <div className="font-mono text-3xl font-bold text-[#F5F1E8]">4,444</div>
                <PixelText size="xxs" className="text-[#8C9098] tracking-widest mt-1 block">
                  TOTAL INITIAL SUPPLY
                </PixelText>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#F0B429] font-mono">
                <ShieldCheck size={16} />
                <span>UNALTERED VAULT</span>
              </div>
            </div>
          </div>

          {/* Path 2: BURN */}
          <div className="bg-[#101217] border-2 border-[#222633] hover:border-[#E53935]/60 transition-all duration-300 p-8 sm:p-10 rounded-sm relative flex flex-col justify-between group">
            <div className="absolute top-0 left-8 w-12 h-1 bg-[#E53935]" />
            <div className="absolute top-6 right-6">
              <span className="stamp" style={{ borderColor: "#E53935", color: "#FF7B7B" }}>
                1:2 ODDS
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-2.5 py-1 bg-[#251013] border border-[#E53935]/40 font-pixel text-[0.6rem] text-[#E53935] tracking-widest">
                  BURN
                </span>
                <span className="font-jp text-xs text-[#E53935] opacity-70">完全燃焼</span>
              </div>

              <h3 className="text-2xl font-bold text-[#F5F1E8] mb-4 flex items-center gap-2">
                Burn 3, roll for a pack
              </h3>

              <p className="text-[#8C9098] text-sm leading-relaxed mb-6">
                Send three faces to the on-chain burn contract and enter the pool for 1 of 1,000 authentic, sealed 30th Anniversary booster packs, sourced direct from authorized Japan retailers in Tokyo.
              </p>
            </div>

            <div className="pt-6 border-t border-[#222633] flex items-baseline justify-between">
              <div>
                <div className="font-mono text-3xl font-bold text-[#E53935]">50%</div>
                <PixelText size="xxs" className="text-[#8C9098] tracking-widest mt-1 block">
                  PROJECTED HIT RATE
                </PixelText>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#E53935] font-mono">
                <Flame size={16} />
                <span>1,000 PHYSICAL PACKS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Burn Ceremony Simulator */}
        <div className="bg-[#0D0F15] border-2 border-[#222633] p-6 sm:p-10 rounded-sm relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222633] pb-6 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <Flame size={18} className="text-[#E53935]" />
                <span className="font-bold text-lg text-[#F5F1E8] tracking-wide">
                  ON-CHAIN BURN PROTOCOL SIMULATOR
                </span>
              </div>
              <p className="text-xs text-[#8C9098] mt-1 font-mono">
                TEST HOW THE 3-FOR-1 BURN WORKS BEFORE CONTRACT LAUNCH
              </p>
            </div>

            <div className="font-jp text-xs golden-aura">
              東京直輸入 — 30周年パック
            </div>
          </div>

          {/* Burn Slots */}
          {!hasBurned ? (
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg w-full mb-8">
                {[1, 2, 3].map((slot) => (
                  <motion.div
                    key={slot}
                    animate={isBurning ? { scale: [1, 0.9, 0], opacity: [1, 0.8, 0], rotate: [0, 5, -5, 10] } : {}}
                    transition={{ duration: 1.8, delay: slot * 0.2 }}
                    className={`aspect-[3/4] rounded-sm border-2 p-3 flex flex-col items-center justify-between relative overflow-hidden ${
                      isBurning
                        ? "bg-[#251013] border-[#E53935] shadow-[0_0_20px_#E53935]"
                        : "bg-[#141720] border-[#353B4F]"
                    }`}
                  >
                    {/* Corner Tag */}
                    <div className="w-full flex justify-between items-center text-[0.6rem] font-mono text-[#8C9098]">
                      <span>#{slot.toString().padStart(4, "0")}</span>
                      <Pokeball size="xs" color="#E53935" />
                    </div>

                    {/* Face Silhouette */}
                    <div className="w-12 h-12 rounded-sm bg-[#1A1D27] flex items-center justify-center border border-[#222633]">
                      <span className="font-pixel text-xs text-[#F0B429]">
                        {slot === 1 ? "PIKA" : slot === 2 ? "CHAR" : "GENG"}
                      </span>
                    </div>

                    <PixelText size="xxs" className="text-[#8C9098]">
                      FACE 0{slot}
                    </PixelText>
                  </motion.div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={handleSimulateBurn}
                disabled={isBurning}
                className="px-8 py-4 bg-[#E53935] hover:bg-[#FF4D4D] text-[#F5F1E8] font-pixel text-xs tracking-widest border border-[#FF8A8A] transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 shadow-[0_0_25px_rgba(229,57,53,0.4)] flex items-center gap-3 cursor-pointer"
              >
                {isBurning ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    BURNING FACES ON-CHAIN...
                  </>
                ) : (
                  <>
                    <Flame size={16} />
                    EXECUTE 3-FOR-1 BURN ✦
                  </>
                )}
              </button>

              <span className="font-mono text-[0.65rem] text-[#8C9098] mt-3 tracking-wider">
                TRANSACTION IS IRREVERSIBLE · 1 RAFFLE TICKET MINTED PER 3 FACES
              </span>
            </div>
          ) : (
            /* Burn Result Card */
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center py-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#1A1D27] border-2 border-[#F0B429] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(240,180,41,0.4)]">
                <Ticket size={36} className="text-[#F0B429]" />
              </div>

              <div className="stamp mb-3">TICKET #0042 MINTED</div>
              
              <h4 className="text-2xl font-bold text-[#F5F1E8] mb-2">
                1x Physical Pack Raffle Entry Secured
              </h4>
              
              <p className="text-[#8C9098] text-sm max-w-md mb-6 leading-relaxed">
                Your 3 faces have been successfully sent to the burn address. Your ticket has a <strong>50% projected hit rate</strong> for a sealed Japanese 30th Anniversary Pack.
              </p>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#141720] hover:bg-[#1A1D27] border border-[#353B4F] text-xs font-mono text-[#F5F1E8] flex items-center gap-2 transition-colors cursor-pointer"
              >
                <RefreshCw size={14} />
                RESET SIMULATION
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
