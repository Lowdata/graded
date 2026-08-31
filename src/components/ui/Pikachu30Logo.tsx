"use client";

import React from "react";

interface Pikachu30LogoProps {
  size?: number | string;
  className?: string;
}

export default function Pikachu30Logo({ size = 48, className = "" }: Pikachu30LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pokémon 30th Anniversary Pikachu Logo"
    >
      {/* Left Ear */}
      <path
        d="M62 72 L20 18 C16 12 24 6 30 10 L82 52 Z"
        fill="#FFD200"
      />
      {/* Left Ear Black Tip */}
      <path
        d="M20 18 C16 12 24 6 30 10 L44 22 L28 28 Z"
        fill="#111318"
      />

      {/* Right Ear */}
      <path
        d="M138 72 L180 18 C184 12 176 6 170 10 L118 52 Z"
        fill="#FFD200"
      />
      {/* Right Ear Black Tip */}
      <path
        d="M180 18 C184 12 176 6 170 10 L156 22 L172 28 Z"
        fill="#111318"
      />

      {/* Main Pikachu Head */}
      <ellipse
        cx="100"
        cy="96"
        rx="54"
        ry="48"
        fill="#FFD200"
      />

      {/* Left Cheek "3" in Red */}
      <text
        x="72"
        y="112"
        fill="#E8384F"
        fontFamily="'Space Grotesk', 'Arial Black', sans-serif"
        fontWeight="800"
        fontSize="24"
        textAnchor="middle"
        letterSpacing="-1"
      >
        3
      </text>

      {/* Right Cheek "0" in Red */}
      <text
        x="128"
        y="112"
        fill="#E8384F"
        fontFamily="'Space Grotesk', 'Arial Black', sans-serif"
        fontWeight="800"
        fontSize="24"
        textAnchor="middle"
        letterSpacing="-1"
      >
        0
      </text>
    </svg>
  );
}
