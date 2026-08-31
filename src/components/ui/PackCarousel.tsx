"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface VaultItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string;
  type: "pack" | "card";
  grade?: string;
}

const VAULT_ITEMS: VaultItem[] = [
  // Physical Packs & Boxes (pack0.jpg and pack.jpg only)
  {
    id: "pack0",
    src: "/pack0.jpg",
    title: "30th Celebration Foil Pack",
    subtitle: "Sealed 6-Card Japanese Pack · All-Holo",
    tag: "★ 1/1,000 POOL",
    tagColor: "var(--gold)",
    type: "pack",
    grade: "SEALED MINT",
  },
  {
    id: "pack",
    src: "/pack.jpg",
    title: "Sealed Display Box Case",
    subtitle: "Tokyo Retail Direct · Factory Sealed",
    tag: "★ JPN IMPORT",
    tagColor: "var(--crimson)",
    type: "pack",
    grade: "BOX CASE",
  },
  // Newly Added Illustrated Graded Cards
  {
    id: "mf_025",
    src: "/mf_025_08nz8hf8.png",
    title: "Pikachu — Lineage #025",
    subtitle: "30th Anniversary Illustrated Graded Card",
    tag: "★ GEM-MT 10",
    tagColor: "var(--gold)",
    type: "card",
    grade: "PSA 10 GEM",
  },
  {
    id: "mf_006",
    src: "/mf_006_pi1yv6sl.png",
    title: "Charizard — Lineage #006",
    subtitle: "Original Starter Final Evolution Holo",
    tag: "★ 1ST EDITION",
    tagColor: "var(--crimson)",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "mf_003",
    src: "/mf_003_yg0d6gsk.png",
    title: "Venusaur — Lineage #003",
    subtitle: "Kanto Grass Starter Final Lineage",
    tag: "★ HOLO RARE",
    tagColor: "#7fbf6a",
    type: "card",
    grade: "MINT 9",
  },
  {
    id: "mf_007",
    src: "/mf_007_payx7sz3.png",
    title: "Squirtle — Lineage #007",
    subtitle: "Classic Kanto Water Starter Icon",
    tag: "★ BASE SET",
    tagColor: "#3aa0c9",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "mf_014",
    src: "/mf_014_bxcy7qxm.png",
    title: "Kakuna — Lineage #014",
    subtitle: "Cocoon Lineage Stage 1 Evolution",
    tag: "★ 100 LINEAGES",
    tagColor: "#f2d98a",
    type: "card",
    grade: "NM-MT 8",
  },
  {
    id: "mf_017",
    src: "/mf_017_jb595z9n.png",
    title: "Pidgeotto — Lineage #017",
    subtitle: "Route 1 Flying Icon Lineage",
    tag: "★ ON-CHAIN",
    tagColor: "#e08a4c",
    type: "card",
    grade: "MINT 9",
  },
  {
    id: "mf_019",
    src: "/mf_019_d0y2y1vw.png",
    title: "Rattata — Lineage #019",
    subtitle: "Classic Early Route Normal Type",
    tag: "★ BASE SET",
    tagColor: "#c78ce0",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "mf_020",
    src: "/mf_020_0xdyu6bp.png",
    title: "Raticate — Lineage #020",
    subtitle: "Stage 1 Hyper Fang Evolution",
    tag: "★ ON-CHAIN",
    tagColor: "#e0576f",
    type: "card",
    grade: "NM-MT 8",
  },
  {
    id: "mf_026",
    src: "/mf_026_nq2n1bl7.png",
    title: "Raichu — Lineage #026",
    subtitle: "Thunderstone Evolution Lightning Holo",
    tag: "★ HOLO RARE",
    tagColor: "var(--gold)",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "mf_043",
    src: "/mf_043_krhzgm1o.png",
    title: "Oddish — Lineage #043",
    subtitle: "Night-Blooming Weed Pokemon Lineage",
    tag: "★ 100 LINEAGES",
    tagColor: "#5ec9b0",
    type: "card",
    grade: "MINT 9",
  },
  {
    id: "mf_044",
    src: "/mf_044_6r7dmqt2.png",
    title: "Gloom — Lineage #044",
    subtitle: "Poison Scent Evolution Stage 1",
    tag: "★ ON-CHAIN",
    tagColor: "#8ea6e0",
    type: "card",
    grade: "NM-MT 8",
  },
  {
    id: "mf_002",
    src: "/mf_002_vq19w0yr.png",
    title: "Ivysaur — Lineage #002",
    subtitle: "Seed Pokémon Stage 1 Evolution",
    tag: "★ STARTER EVO",
    tagColor: "#7fbf6a",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "card_back",
    src: "/card_back_ddd236d4.webp",
    title: "Official 30th Graded Card Back",
    subtitle: "Authentic Holographic Foil Reverse Backing",
    tag: "★ AUTHENTIC",
    tagColor: "var(--gold)",
    type: "card",
    grade: "SECURITY FOIL",
  },
];

export default function PackCarousel() {
  const [filter, setFilter] = useState<"all" | "packs" | "cards">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const filteredItems = VAULT_ITEMS.filter((item) => {
    if (filter === "packs") return item.type === "pack";
    if (filter === "cards") return item.type === "card";
    return true;
  });

  // Ensure index stays in bounds when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Auto rotate every 3.5 seconds when not hovered
  useEffect(() => {
    if (!isAutoPlay || filteredItems.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isAutoPlay, filteredItems.length]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <div
      className="pack-vault-wrap"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Top Header Bar */}
      <div className="pack-vault-head">
        <div className="pack-vault-title-wrap">
          <div className="eyebrow pixel" style={{ marginBottom: "6px" }}>
            ★ ON-CHAIN ARCHIVE &amp; PACK POOL
          </div>
          <h3>4,444 Illustrated Cards &amp; 1,000 Physical Packs</h3>
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="btn"
            style={{
              padding: "6px 12px",
              fontSize: "0.62rem",
              fontFamily: "'Press Start 2P', monospace",
              background: filter === "all" ? "var(--gold)" : "#0a0a0c",
              color: filter === "all" ? "#0a0a0c" : "var(--mist)",
              borderColor: filter === "all" ? "var(--gold)" : "var(--card-line)",
            }}
          >
            ALL ({VAULT_ITEMS.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("cards")}
            className="btn"
            style={{
              padding: "6px 12px",
              fontSize: "0.62rem",
              fontFamily: "'Press Start 2P', monospace",
              background: filter === "cards" ? "var(--gold)" : "#0a0a0c",
              color: filter === "cards" ? "#0a0a0c" : "var(--mist)",
              borderColor: filter === "cards" ? "var(--gold)" : "var(--card-line)",
            }}
          >
            CARDS ({VAULT_ITEMS.filter((i) => i.type === "card").length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("packs")}
            className="btn"
            style={{
              padding: "6px 12px",
              fontSize: "0.62rem",
              fontFamily: "'Press Start 2P', monospace",
              background: filter === "packs" ? "var(--gold)" : "#0a0a0c",
              color: filter === "packs" ? "#0a0a0c" : "var(--mist)",
              borderColor: filter === "packs" ? "var(--gold)" : "var(--card-line)",
            }}
          >
            PACKS (2)
          </button>
        </div>
      </div>

      {/* Carousel Sub-bar & Controls */}
      <div className="pack-carousel-bar">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
          <span className="pixel" style={{ fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.08em" }}>
            VAULT GALLERY ({currentIndex + 1}/{filteredItems.length})
          </span>
        </div>

        <div className="pack-nav-controls">
          <button
            type="button"
            onClick={handlePrev}
            className="pack-nav-btn"
            aria-label="Previous card"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="pack-nav-btn"
            aria-label="Next card"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="pack-carousel-grid">
        {filteredItems.slice(0, 8).map((item, index) => {
          const isSelected = index === currentIndex % Math.min(8, filteredItems.length);
          return (
            <div
              key={item.id}
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentIndex(index);
              }}
              className={`pack-card ${isSelected ? "active" : ""}`}
            >
              <div className="pack-card-head">
                <span className="pack-card-tag" style={{ color: item.tagColor }}>
                  {item.tag}
                </span>
                <span className="pack-card-num">
                  {item.grade || `#0${index + 1}`}
                </span>
              </div>

              {/* Card / Pack Image Container with explicit height */}
              <div
                className="pack-card-img-wrap"
                style={{ position: "relative", width: "100%", height: "230px" }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 540px) 90vw, (max-width: 900px) 45vw, 230px"
                  style={{ objectFit: "contain", padding: "6px" }}
                  priority={index < 4}
                />
              </div>

              <div className="pack-card-info">
                <div className="pack-card-title">{item.title}</div>
                <div className="pack-card-sub">{item.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <div className="pack-dots-wrap">
        {filteredItems.slice(0, 8).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setIsAutoPlay(false);
              setCurrentIndex(i);
            }}
            className={`pack-dot ${i === currentIndex % Math.min(8, filteredItems.length) ? "active" : ""}`}
            aria-label={`Go to item ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
