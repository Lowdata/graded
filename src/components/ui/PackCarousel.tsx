"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const PACK_ITEMS = [
  {
    id: "pack0",
    src: "/pack0.jpg",
    title: "30th Celebration Foil Pack",
    subtitle: "Sealed 6-Card Japanese Pack · All-Holo",
    tag: "★ 1/1,000 POOL",
    tagColor: "var(--gold)",
  },
  {
    id: "pack",
    src: "/pack.jpg",
    title: "Sealed Display Box Case",
    subtitle: "Tokyo Retail Direct · Factory Sealed",
    tag: "★ JPN IMPORT",
    tagColor: "var(--crimson)",
  },
  {
    id: "pack1",
    src: "/pack1.webp",
    title: "Vintage Japanese Booster",
    subtitle: "Classic Era Pack Art · Mint Condition",
    tag: "★ VAULT CHASE",
    tagColor: "#3aa0c9",
  },
  {
    id: "pack2",
    src: "/pack2.webp",
    title: "Collector Anniversary Pack",
    subtitle: "Exclusive Holographic Foil Series",
    tag: "★ RARE EDITION",
    tagColor: "#c78ce0",
  },
];

export default function PackCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto rotate every 4 seconds when not hovered
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PACK_ITEMS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + PACK_ITEMS.length) % PACK_ITEMS.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % PACK_ITEMS.length);
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
            ★ PHYSICAL REWARDS POOL
          </div>
          <h3>1,000 Sealed Japanese Booster Packs & Boxes</h3>
        </div>
        <div className="stamp" style={{ fontSize: "0.55rem" }}>
          1ST-PARTY JAPAN STOCK
        </div>
      </div>

      {/* Carousel Sub-bar & Controls */}
      <div className="pack-carousel-bar">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
          <span className="pixel" style={{ fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.08em" }}>
            REWARD VAULT ({currentIndex + 1}/{PACK_ITEMS.length})
          </span>
        </div>

        <div className="pack-nav-controls">
          <button
            type="button"
            onClick={handlePrev}
            className="pack-nav-btn"
            aria-label="Previous pack"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="pack-nav-btn"
            aria-label="Next pack"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="pack-carousel-grid">
        {PACK_ITEMS.map((item, index) => {
          const isSelected = index === currentIndex;
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
                <span className="pack-card-num">#0{index + 1}</span>
              </div>

              {/* Pack Image Container with explicit height */}
              <div
                className="pack-card-img-wrap"
                style={{ position: "relative", width: "100%", height: "220px" }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 540px) 90vw, (max-width: 900px) 45vw, 220px"
                  style={{ objectFit: "contain", padding: "8px" }}
                  priority={index === 0}
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
        {PACK_ITEMS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setIsAutoPlay(false);
              setCurrentIndex(i);
            }}
            className={`pack-dot ${i === currentIndex ? "active" : ""}`}
            aria-label={`Go to pack ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
