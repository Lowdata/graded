import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#090A0D",
        card: "#111318",
        panel: "#171A20",
        "card-line": "#232329",
        pokered: "#E33535",
        pokeball: "#E53935",
        cream: "#F5F1E8",
        mist: "#8C9098",
        "electric-yellow": "#F6C945",
        "poke-blue": "#3B82C4",
        "gold-dim": "#8a6a1f",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        pixel: ['"Press Start 2P"', "monospace"],
        jp: ['"Noto Sans JP"', "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        pokespin: "pokespin 20s linear infinite",
        "pokespin-slow": "pokespin 40s linear infinite",
        glitch: "glitch 4s steps(1) infinite",
        scanpulse: "scanpulse 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "pulse-red": "pulseRed 2s ease-in-out infinite",
        "count-up": "countUp 0.5s ease forwards",
        "load-fill": "loadFill 2.4s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pokespin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        glitch: {
          "0%, 90%, 100%": { transform: "translate(0)" },
          "92%": { transform: "translate(-2px, 1px)" },
          "94%": { transform: "translate(2px, -1px)" },
          "96%": { transform: "translate(-1px, 2px)" },
          "98%": { transform: "translate(1px, -2px)" },
        },
        scanpulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseRed: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(229, 57, 53, 0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(229, 57, 53, 0)" },
        },
        loadFill: {
          from: { width: "6%" },
          to: { width: "96%" },
        },
      },
      backgroundImage: {
        "pixel-grid":
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        "scanlines":
          "repeating-linear-gradient(to bottom, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 3px)",
      },
      backgroundSize: {
        "pixel-grid": "24px 24px",
      },
    },
  },
  plugins: [],
};

export default config;
