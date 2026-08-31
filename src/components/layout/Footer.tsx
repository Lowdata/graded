"use client";

import Pokeball from "@/components/ui/Pokeball";
import PixelText from "@/components/ui/PixelText";
import { SITE_CONFIG } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "Anniversary", href: "#anniversary" },
  { label: "Generations", href: "#generations" },
  { label: "Collection", href: "#collection" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-card-line bg-ink px-6 lg:px-10 py-16"
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-12 border-b border-card-line">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
              <Pokeball size="sm" />
              <div>
                <div className="font-bold text-cream tracking-[0.15em] text-sm">POKÉMON</div>
                <PixelText size="xxs" className="text-pokered tracking-[0.15em]">
                  30TH ANNIVERSARY
                </PixelText>
              </div>
            </div>
            <div className="font-mono text-mist text-xs tracking-[0.1em]">1996 — 2026</div>
            <div className="font-jp text-mist/50 text-xs">
              思い出は、色あせない。
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-mist hover:text-cream tracking-[0.1em] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <PixelText size="xxs" className="text-mist/60 mb-1">FOLLOW</PixelText>
            {["Twitter / X", "Discord", "Reddit"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-mono text-xs text-mist hover:text-cream tracking-[0.1em] transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-mist/50 text-xs leading-relaxed max-w-2xl font-mono">
            {SITE_CONFIG.disclaimer}
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-pokered opacity-50" />
            <PixelText size="xxs" className="text-mist/40">FAN PROJECT</PixelText>
          </div>
        </div>
      </div>
    </footer>
  );
}
