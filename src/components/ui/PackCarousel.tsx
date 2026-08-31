"use client";

import React, { useState, useEffect, useRef } from "react";
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
  // Physical Packs & Boxes (Authentic Tokyo Stock)
  {
    id: "pack0",
    src: "/pack0.jpg",
    title: "30th Celebration Foil Pack",
    subtitle: "Sealed 6-Card Japanese Pack · All-Holo Guaranteed",
    tag: "★ 1/1,000 POOL",
    tagColor: "var(--gold)",
    type: "pack",
    grade: "SEALED MINT",
  },
  {
    id: "pack",
    src: "/pack.jpg",
    title: "Sealed Booster Display Box",
    subtitle: "Tokyo Retail Direct Stock · Factory Sealed Case",
    tag: "★ JPN IMPORT",
    tagColor: "var(--crimson)",
    type: "pack",
    grade: "BOX CASE",
  },
  // Exact Pokémon Cards from Japanese 30th Anniversary Collection (001-040+)
  {
    id: "mf_044",
    src: "/mf_044_6r7dmqt2.png",
    title: "Umbreon ex (ブラッキーex) SAR",
    subtitle: "#044/040 · 30th Fireworks Art · Illus. REND",
    tag: "★ SPECIAL ART",
    tagColor: "var(--crimson)",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "mf_043",
    src: "/mf_043_krhzgm1o.png",
    title: "Espeon ex (エーフィex) SAR",
    subtitle: "#043/040 · 30th Festival Day Art · Illus. REND",
    tag: "★ SPECIAL ART",
    tagColor: "#c78ce0",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "mf_017",
    src: "/mf_017_jb595z9n.png",
    title: "Umbreon ex (ブラッキーex)",
    subtitle: "#017/040 · Darkness Type HP 270 · Illus. Keisuke Azuma",
    tag: "★ DOUBLE RARE",
    tagColor: "var(--crimson)",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "mf_014",
    src: "/mf_014_bxcy7qxm.png",
    title: "Espeon ex (エーフィex)",
    subtitle: "#014/040 · Psychic Type HP 260 · Illus. 5ban Graphics",
    tag: "★ DOUBLE RARE",
    tagColor: "#c78ce0",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "mf_025",
    src: "/mf_025_08nz8hf8.png",
    title: "Eevee (イーブイ) Meadow",
    subtitle: "#025/040 · Daylight Meadow · Illus. En Morikura",
    tag: "★ 30TH STAMP",
    tagColor: "var(--gold)",
    type: "card",
    grade: "PSA 10 GEM",
  },
  {
    id: "mf_026",
    src: "/mf_026_nq2n1bl7.png",
    title: "Eevee (イーブイ) Moonlit",
    subtitle: "#026/040 · Starry Night Sky · Illus. Hitoshi Ariga",
    tag: "★ 30TH STAMP",
    tagColor: "#3aa0c9",
    type: "card",
    grade: "MINT 9",
  },
  {
    id: "mf_007",
    src: "/mf_007_payx7sz3.png",
    title: "Zeraora (ゼラオラ)",
    subtitle: "#007/040 · Lightning Mythical HP 110 · Illus. Bun Toujo",
    tag: "★ MYTHICAL",
    tagColor: "var(--gold)",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "mf_006",
    src: "/mf_006_pi1yv6sl.png",
    title: "Victini (ビクティニ)",
    subtitle: "#006/040 · Victory Pokemon HP 80 · Illus. Jiro Sasumo",
    tag: "★ MYTHICAL",
    tagColor: "var(--crimson)",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "mf_020",
    src: "/mf_020_0xdyu6bp.png",
    title: "Zoroark (ゾロアーク)",
    subtitle: "#020/040 · Night Illusionist HP 120 · Illus. Shiburingaru",
    tag: "★ STAGE 1",
    tagColor: "#e0576f",
    type: "card",
    grade: "NM-MT 8",
  },
  {
    id: "mf_019",
    src: "/mf_019_d0y2y1vw.png",
    title: "Zorua (ゾロア)",
    subtitle: "#019/040 · Tricky Fox Pokemon HP 70 · Illus. Atsuya Uki",
    tag: "★ 30TH STAMP",
    tagColor: "#8ea6e0",
    type: "card",
    grade: "MINT 9",
  },
  {
    id: "mf_003",
    src: "/mf_003_yg0d6gsk.png",
    title: "Cherrim (チェリム) Sunshine",
    subtitle: "#003/040 · Blossom Stage 1 HP 80 · Illus. takashi shiraishi",
    tag: "★ STAGE 1",
    tagColor: "#7fbf6a",
    type: "card",
    grade: "MINT 9",
  },
  {
    id: "mf_002",
    src: "/mf_002_vq19w0yr.png",
    title: "Cherubi (チェリンボ)",
    subtitle: "#002/040 · Cherry Pokemon HP 40 · Illus. Kurata So",
    tag: "★ 30TH STAMP",
    tagColor: "#f2d98a",
    type: "card",
    grade: "GEM-MT 10",
  },
  {
    id: "card_back",
    src: "/card_back_ddd236d4.webp",
    title: "Official Graded Card Back",
    subtitle: "30th Anniversary Holographic Reverse Backing",
    tag: "★ AUTHENTIC",
    tagColor: "var(--gold)",
    type: "card",
    grade: "REVERSE FOIL",
  },
];

export default function PackCarousel() {
  const [filter, setFilter] = useState<"all" | "packs" | "cards">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredItems = VAULT_ITEMS.filter((item) => {
    if (filter === "packs") return item.type === "pack";
    if (filter === "cards") return item.type === "card";
    return true;
  });

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Auto rotate when not hovered
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

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // On desktop: show 4 items per page; on mobile: show 1 item at a time in carousel
  const desktopPageStart = Math.floor(currentIndex / 4) * 4;
  const visibleDesktopItems = filteredItems.slice(desktopPageStart, desktopPageStart + 4);

  return (
    <div
      className="pack-vault-wrap"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
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

      {/* Mobile Single Card Carousel View */}
      {isMobile ? (
        <div className="mobile-carousel-container" style={{ width: "100%", overflow: "hidden" }}>
          {filteredItems[currentIndex] && (
            <div className="pack-card active" style={{ maxWidth: "320px", margin: "0 auto" }}>
              <div className="pack-card-head">
                <span className="pack-card-tag" style={{ color: filteredItems[currentIndex].tagColor }}>
                  {filteredItems[currentIndex].tag}
                </span>
                <span className="pack-card-num">
                  {filteredItems[currentIndex].grade || `#0${currentIndex + 1}`}
                </span>
              </div>

              <div
                className="pack-card-img-wrap"
                style={{ position: "relative", width: "100%", height: "260px" }}
              >
                <Image
                  src={filteredItems[currentIndex].src}
                  alt={filteredItems[currentIndex].title}
                  fill
                  sizes="320px"
                  style={{ objectFit: "contain", padding: "6px" }}
                  priority
                />
              </div>

              <div className="pack-card-info">
                <div className="pack-card-title">{filteredItems[currentIndex].title}</div>
                <div className="pack-card-sub">{filteredItems[currentIndex].subtitle}</div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Desktop Multi-Card Grid View */
        <div className="pack-carousel-grid">
          {visibleDesktopItems.map((item, index) => {
            const actualIndex = desktopPageStart + index;
            const isSelected = actualIndex === currentIndex;
            return (
              <div
                key={item.id}
                onClick={() => {
                  setIsAutoPlay(false);
                  setCurrentIndex(actualIndex);
                }}
                className={`pack-card ${isSelected ? "active" : ""}`}
              >
                <div className="pack-card-head">
                  <span className="pack-card-tag" style={{ color: item.tagColor }}>
                    {item.tag}
                  </span>
                  <span className="pack-card-num">
                    {item.grade || `#0${actualIndex + 1}`}
                  </span>
                </div>

                <div
                  className="pack-card-img-wrap"
                  style={{ position: "relative", width: "100%", height: "230px" }}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 900px) 45vw, 230px"
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
      )}

      {/* Dots Indicator */}
      <div className="pack-dots-wrap">
        {filteredItems.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setIsAutoPlay(false);
              setCurrentIndex(i);
            }}
            className={`pack-dot ${i === currentIndex ? "active" : ""}`}
            aria-label={`Go to item ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
