"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Pokeball from "@/components/ui/Pokeball";
import PixelText from "@/components/ui/PixelText";

const NAV_LINKS = [
  { label: "ANNIVERSARY", href: "#anniversary" },
  { label: "GENERATIONS", href: "#generations" },
  { label: "COLLECTION", href: "#collection" },
  { label: "TIMELINE", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-md border-b border-card-line py-3"
            : "bg-transparent py-5"
        }`}
      >
        {/* Thin accent line on scroll */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pokered to-transparent" />
        )}

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="Pokémon 30th Anniversary - Home"
          >
            <Pokeball size="sm" spinning className="group-hover:opacity-80 transition-opacity" />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-cream text-[0.95rem] tracking-[0.12em]">
                POKÉMON
              </span>
              <PixelText size="xxs" className="text-pokered tracking-[0.15em]">
                30 YEARS
              </PixelText>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-mist hover:text-cream transition-colors duration-200 font-mono text-[0.72rem] tracking-[0.12em] relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-pokered group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right info */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <div className="font-jp text-[0.65rem] text-mist opacity-70">
                ポケットモンスター
              </div>
              <div className="font-mono text-[0.65rem] text-electric-yellow tracking-[0.1em]">
                1996 → 2026
              </div>
            </div>
            {/* Status indicator */}
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-pokered animate-pulse-red" />
              <PixelText size="xxs" className="text-mist">LIVE</PixelText>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-cream p-2 border border-card-line rounded-sm hover:border-pokered transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-40 bg-ink/98 backdrop-blur-xl border-b border-card-line pt-24 pb-8 px-6"
            aria-label="Mobile navigation"
          >
            {/* BG pokeball */}
            <div className="absolute right-6 top-6 opacity-5 pointer-events-none">
              <Pokeball size="xl" spinning />
            </div>

            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-4 border-b border-card-line text-mist hover:text-cream transition-colors group"
                >
                  <Pokeball size="xs" className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  <PixelText size="xs" className="tracking-[0.15em]">{link.label}</PixelText>
                </motion.a>
              ))}
            </nav>

            <div className="mt-6 flex items-center gap-2">
              <div className="font-jp text-[0.75rem] text-mist opacity-50">ポケットモンスター 30周年</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
