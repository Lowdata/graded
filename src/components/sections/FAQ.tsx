"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import PixelText from "@/components/ui/PixelText";
import Pokeball from "@/components/ui/Pokeball";

function FAQItem({ item, index }: { item: typeof FAQ_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="border-b border-card-line"
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-5 px-2 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokered focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <Pokeball
            size="xs"
            color={open ? "#E53935" : "#8C9098"}
            className="transition-all duration-300 flex-shrink-0"
          />
          <span className="font-semibold text-cream text-sm md:text-base group-hover:text-electric-yellow transition-colors duration-200">
            {item.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <span className="font-mono text-pokered text-lg leading-none">+</span>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-mist text-sm leading-relaxed pb-6 pl-9 pr-8">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-ink" id="faq">
      <div className="max-w-[760px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-pokered/40" />
            <PixelText size="xxs" className="text-pokered tracking-[0.2em]">FAQ</PixelText>
            <div className="h-px w-8 bg-pokered/40" />
          </div>
          <h2 className="font-bold text-cream" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Straight answers.
          </h2>
          <p className="text-mist mt-3 text-sm max-w-md mx-auto">
            Questions about Pokémon history, the anniversary, and the franchise.
          </p>
        </div>

        {/* FAQ list */}
        <div role="list" aria-label="Frequently asked questions">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
