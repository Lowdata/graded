"use client";

import React from "react";

interface FlameSVGProps {
  size?: number | string;
  className?: string;
  color?: string;
}

export default function FlameSVG({ size = 14, className = "", color = "#E8384F" }: FlameSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Flame */}
      <path
        d="M12 2C9.5 6.8 5 8.8 5 13.8C5 17.8 8.1 21 12 21C15.9 21 19 17.8 19 13.8C19 10.8 17.5 8.2 16 6.7C15.5 8.7 14 10.2 12 10.7C12 7.2 13 4.2 12 2Z"
        fill={color}
      />
      {/* Inner Hot Gold Core */}
      <path
        d="M12 11C10.5 13.2 9 14.5 9 16.5C9 18.2 10.3 19.5 12 19.5C13.7 19.5 15 18.2 15 16.5C15 14.8 14.2 13.5 13.5 12.5C13.2 13.2 12.6 13.8 12 13.8C12 12.3 12.4 11.8 12 11Z"
        fill="#F0B429"
      />
    </svg>
  );
}
