"use client";

import Pokeball from "@/components/ui/Pokeball";
import PixelText from "@/components/ui/PixelText";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#040507] border-t border-[#222633] py-16 px-4 sm:px-6 lg:px-10 text-xs text-[#8C9098]" role="contentinfo">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12 border-b border-[#222633]">
          {/* Brand & D-Pad */}
          <div className="flex items-center gap-4">
            <div className="dpad">
              <div className="dpad-center" />
            </div>

            <div>
              <div className="font-bold text-sm text-[#F5F1E8] tracking-wider">
                GRADED <span className="text-[#F0B429]">/// 30TH ANNIVERSARY</span>
              </div>
              <div className="font-jp text-[0.65rem] golden-aura mt-0.5">
                思い出は、色あせない。 — 1996 to 2026
              </div>
            </div>
          </div>

          {/* Social Links from HTML */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            {["X (Twitter)", "Discord", "OpenSea", "Contract (Etherscan)"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-[#F5F1E8] transition-colors flex items-center gap-1.5"
              >
                <span>{link}</span>
                <ExternalLink size={12} className="opacity-50" />
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer from reference HTML */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[0.7rem] leading-relaxed">
          <p className="max-w-2xl font-sans text-[#8C9098]">
            <strong>GRADED</strong> is an independent collector project celebrating the pack-opening era and 30 years of Pokémon history. Not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak, or The Pokémon Company.
          </p>

          <div className="stamp text-[0.5rem] whitespace-nowrap">
            FAN-TRIBUTE ONLY
          </div>
        </div>
      </div>
    </footer>
  );
}
