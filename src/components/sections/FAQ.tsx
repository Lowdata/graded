"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";
import { ChevronDown } from "lucide-react";

const FAQ_LIST = [
  {
    q: "What actually happens when I burn?",
    a: "Three faces are sent to an immutable on-chain burn address (0x0...dead) and destroyed permanently. You receive one verified raffle ticket for the 1,000 physical 30th Anniversary booster pack pool. The faces are gone for good — this is a one-way trade toward the physical archive.",
  },
  {
    q: "What's the 50% number based on?",
    a: "1,000 physical sealed packs against a projected raffle pool sized so entrants land around an estimated 1-in-2 hit rate. The final verified odds are determined dynamically by the total number of faces burned.",
  },
  {
    q: "Do I have to decide at mint?",
    a: "No. Mint, hold, and burn whenever you want — there is no forced countdown deadline or pressure.",
  },
  {
    q: "Where do the physical packs come from?",
    a: "Sourced direct from authorized Japanese retail distribution partners in Tokyo carrying the official 30th Anniversary release. Shipped with insured international tracking to raffle winners.",
  },
  {
    q: "What are the 40 lineages included in the 4,444 faces?",
    a: "The 40 lineages represent the most iconic evolutionary families from Kanto through Paldea (Charizard, Blastoise, Venusaur, Gengar, Pikachu, Eeveelutions, Mewtwo, Dragonite, Lucario, Rayquaza, and more).",
  },
  {
    q: "When did Pokémon first begin?",
    a: "Pocket Monsters Red and Green were first released in Japan on February 27, 1996 for the Nintendo Game Boy, created by Satoshi Tajiri and Game Freak.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-10 bg-[#08090D] border-b border-[#222633]" id="faq">
      <div className="max-w-[760px] mx-auto">
        {/* Header from HTML */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Pokeball size="xs" color="#F0B429" />
            <PixelText size="xs" className="text-gold tracking-[0.25em]">
              FAQ // よくある質問
            </PixelText>
            <Pokeball size="xs" color="#F0B429" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] mb-3">
            Straight answers.
          </h2>
          <p className="text-[#8C9098] text-sm leading-relaxed">
            Essential clarifications on minting, burn mechanics, and physical pack fulfillment.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="bg-[#101217] border border-[#222633] hover:border-[#353B4F] transition-colors rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#F5F1E8]">
                    {faq.q}
                  </span>
                  <div
                    className={`font-mono text-xl text-[#F0B429] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 text-sm text-[#8C9098] leading-relaxed border-t border-[#222633]/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
