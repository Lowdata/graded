"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Pokeball from "@/components/ui/Pokeball";
import PixelText from "@/components/ui/PixelText";

const NAV_LINKS = [
  { label: "MINT & BURN", href: "#mechanics" },
  { label: "EVOLUTIONS", href: "#evolutions" },
  { label: "MOSAIC", href: "#collection" },
  { label: "COLLECTOR", href: "#collector" },
  { label: "POKÉDEX", href: "#pokedex" },
  { label: "TIMELINE", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#060709]/95 backdrop-blur-md border-b border-[#222633] py-3.5"
            : "bg-gradient-to-b from-[#060709]/90 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-6">
          {/* Logo with D-Pad & Pokeball from HTML */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="GRADED 30th Anniversary Collection"
          >
            <div className="dpad group-hover:rotate-90 transition-transform duration-300">
              <div className="dpad-center" />
            </div>
            
            <div className="flex flex-col">
              <div className="font-bold text-[#F5F1E8] text-base tracking-wider flex items-center gap-1.5">
                GRADED <span className="text-[#F0B429]">/// 30TH</span>
              </div>
              <span className="font-jp text-[0.6rem] golden-aura font-medium">
                ポケットモンスター
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#8C9098] hover:text-[#F5F1E8] font-mono text-xs tracking-widest transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F0B429] group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Right Status Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="stamp hidden md:inline-flex text-[0.55rem]">
              NM-MT 10
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#101217] border border-[#222633] rounded-sm">
              <div className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
              <PixelText size="xxs" className="text-[#8C9098]">
                STEALTH MINT
              </PixelText>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="xl:hidden p-2 rounded-sm bg-[#101217] border border-[#222633] text-[#F5F1E8] hover:border-[#F0B429] transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#060709]/98 border-b border-[#222633] backdrop-blur-xl p-6 xl:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-2 text-sm font-mono text-[#8C9098] hover:text-[#F5F1E8] border-b border-[#222633]/40"
                >
                  <span>{link.label}</span>
                  <Pokeball size="xs" color="#F0B429" />
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-[#222633] flex justify-between items-center text-xs font-mono text-[#8C9098]">
              <span className="golden-aura font-jp">冒険は、まだ終わらない。</span>
              <span className="text-[#F0B429]">1996 → 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
