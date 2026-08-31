"use client";

import { useEffect, useState } from "react";

interface Ball {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
}

export default function FloatingPokeballs() {
  const [balls, setBalls] = useState<Ball[]>([]);

  useEffect(() => {
    // Generate distributed floating Pokéballs across page sections
    const generated: Ball[] = [
      { id: 1, left: "6vw", top: "18vh", size: 36, delay: "0s", duration: "5.5s", opacity: 0.35 },
      { id: 2, left: "88vw", top: "25vh", size: 44, delay: "1.2s", duration: "6s", opacity: 0.4 },
      { id: 3, left: "12vw", top: "70vh", size: 32, delay: "2.4s", duration: "4.8s", opacity: 0.3 },
      { id: 4, left: "84vw", top: "82vh", size: 48, delay: "0.8s", duration: "7s", opacity: 0.35 },
      { id: 5, left: "5vw", top: "140vh", size: 40, delay: "3.1s", duration: "6.2s", opacity: 0.3 },
      { id: 6, left: "92vw", top: "165vh", size: 34, delay: "1.7s", duration: "5.2s", opacity: 0.35 },
      { id: 7, left: "8vw", top: "220vh", size: 46, delay: "0.5s", duration: "6.8s", opacity: 0.35 },
      { id: 8, left: "90vw", top: "250vh", size: 38, delay: "2.8s", duration: "5.6s", opacity: 0.3 },
    ];
    setBalls(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
      {balls.map((b) => (
        <div
          key={b.id}
          className="pokeball-bg"
          style={{
            left: b.left,
            top: b.top,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDelay: b.delay,
            animationDuration: b.duration,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
}
