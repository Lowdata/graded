"use client";
import React from "react";

interface PokeballProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  spinning?: boolean;
  opacity?: number;
  color?: string;
  style?: React.CSSProperties;
}

const sizes = {
  xs: 12,
  sm: 20,
  md: 32,
  lg: 56,
  xl: 120,
};

export default function Pokeball({
  size = "md",
  className = "",
  spinning = false,
  opacity = 1,
  color = "#E53935",
  style,
}: PokeballProps) {
  const px = sizes[size];

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`${spinning ? "animate-pokespin" : ""} ${className} flex-shrink-0`}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      {/* Top half - red */}
      <path
        d="M 10,50 A 40,40 0 0,1 90,50 Z"
        fill={color}
      />
      {/* Bottom half - white */}
      <path
        d="M 10,50 A 40,40 0 0,0 90,50 Z"
        fill="#F5F1E8"
      />
      {/* Horizontal line */}
      <line x1="10" y1="50" x2="90" y2="50" stroke="#111318" strokeWidth="4" />
      {/* Center button ring */}
      <circle cx="50" cy="50" r="12" fill="#111318" />
      <circle cx="50" cy="50" r="8" fill="#F5F1E8" />
      <circle cx="50" cy="50" r="4" fill="#F5F1E8" />
      {/* Outer ring */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#111318" strokeWidth="4" />
    </svg>
  );
}
