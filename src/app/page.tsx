"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FloatingPokeballs from "@/components/ui/FloatingPokeballs";
import PackCarousel from "@/components/ui/PackCarousel";

const FAQ_ITEMS = [
  {
    q: "What actually happens when I burn?",
    a: "Three cards are sent to a burn address on-chain and you receive one raffle ticket. The cards are gone for good — this is a one-way trade toward the physical pack pool.",
  },
  {
    q: "What's the 50% number based on?",
    a: "1,000 physical packs against a projected raffle pool sized so entrants land around a 1-in-2 hit rate. Final odds depend on how many tickets are actually burned in.",
  },
  {
    q: "Do I have to decide at mint?",
    a: "No. Mint, hold, and burn whenever you want — there's no countdown forcing the decision.",
  },
  {
    q: "Where do the packs come from?",
    a: "Sourced through one of the first authorized retailers in Japan carrying the official 30th Anniversary release. Shipped directly to raffle winners with insured international tracking.",
  },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ dd: "15", hh: "12", mm: "10", ss: "38" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Initialize Countdown
  useEffect(() => {
    const target = new Date("2026-09-16T00:00:00Z").getTime();
    const tick = () => {
      const now = Date.now();
      let diff = Math.max(0, target - now);
      const d = Math.floor(diff / 86400000); diff -= d * 86400000;
      const h = Math.floor(diff / 3600000); diff -= h * 3600000;
      const m = Math.floor(diff / 60000); diff -= m * 60000;
      const s = Math.floor(diff / 1000);

      setTimeLeft({
        dd: String(d).padStart(2, "0"),
        hh: String(h).padStart(2, "0"),
        mm: String(m).padStart(2, "0"),
        ss: String(s).padStart(2, "0"),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* CRT Scanline Overlay */}
      <div className="scanlines" aria-hidden="true" />

      {/* Floating Pokéballs in background */}
      <FloatingPokeballs />

      {/* Header with Marquee Strip and Navigation */}
      <header className="header-wrapper">
        {/* Top Japanese Marquee Bar */}
        <div className="marquee-wrap">
          <div className="marquee-content">
            <span>ポケットモンスター 30周年記念プロジェクト</span>
            <span>•</span>
            <span>1996 - 2026</span>
            <span>•</span>
            <span>4,444 CARDS ON-CHAIN</span>
            <span>•</span>
            <span>1,000 PHYSICAL PACKS</span>
            <span>•</span>
            <span>冒険は、まだ終わらない。</span>
            <span>•</span>
            <span>ポケットモンスター 30周年記念プロジェクト</span>
            <span>•</span>
            <span>1996 - 2026</span>
            <span>•</span>
            <span>4,444 CARDS ON-CHAIN</span>
            <span>•</span>
            <span>1,000 PHYSICAL PACKS</span>
            <span>•</span>
            <span>冒険は、まだ終わらない。</span>
          </div>
        </div>

        {/* Clean Sticky Navigation */}
        <nav>
          <div className="logo">
            <div className="dpad">
              <div className="dpad-center" />
            </div>
            <div>
              GRADED <span>/// 30TH</span>
            </div>
          </div>
          <div className="navlinks">
            <a href="#showcase">Collection</a>
            <a href="#mechanics">Mint &amp; Packs</a>
            <a href="#timeline">Timeline</a>
            <a href="#faq">FAQ</a>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="eyebrow pixel">PUBLIC MINT · SEPT 16</div>

        <h1>
          Built for those who <em>never</em> stopped collecting.
        </h1>
        
        <p className="sub">
          4,444 illustrated graded cards pulled from 100 of the most recognizable lineups in the Pokemon world, minted on-chain for the 30th anniversary. Hold your illustrated card forever, or burn three and chase 1 of 1,000 real anniversary packs.
        </p>
        
        <div className="cta-row">
          <a href="#mechanics" className="btn btn-primary pixel" style={{ fontSize: "0.7rem" }}>
            ENTER MINT
          </a>
          <a href="#mechanics" className="btn btn-ghost">
            View Physical Packs
          </a>
        </div>

        <div className="stamp" style={{ marginTop: "24px" }}>
          MINT CONDITION ONLY
        </div>

        {/* Countdown */}
        <div className="countdown">
          <div>
            <div className="num">{timeLeft.dd}</div>
            <div className="lbl">DAYS</div>
          </div>
          <div>
            <div className="num">{timeLeft.hh}</div>
            <div className="lbl">HRS</div>
          </div>
          <div>
            <div className="num">{timeLeft.mm}</div>
            <div className="lbl">MIN</div>
          </div>
          <div>
            <div className="num">{timeLeft.ss}</div>
            <div className="lbl">SEC</div>
          </div>
        </div>
      </section>

      {/* ALTERNATING 3-ROW FEATURE SHOWCASE (Image-Copy / Copy-Image / Image-Copy) */}
      <section id="showcase" style={{ paddingTop: "20px" }}>
        <div className="section-head">
          <div className="eyebrow pixel">30TH ANNIVERSARY ARCHIVE</div>
          <h2>Preserved on-chain. Sealed in Tokyo.</h2>
          <p>Every piece is an authentic graded tribute to the origins of the card hobby.</p>
        </div>

        <div className="feature-showcase">
          {/* ROW 1: Image (Left) + Copy (Right) - Featuring Umbreon ex SAR #044 */}
          <div className="feature-row">
            <div className="feature-media">
              <div className="feature-img-frame">
                <Image
                  src="/mf_044_6r7dmqt2.png"
                  alt="Umbreon ex Special Art Rare 30th Anniversary Card"
                  fill
                  sizes="(max-width: 768px) 220px, 260px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            <div className="feature-copy">
              <div className="stamp" style={{ width: "fit-content" }}>
                01 // 30TH SPECIAL ART RARE
              </div>
              <h3>4,444 Illustrated Cards Pulled from 100 Lineages</h3>
              <p>
                Each card represents an immutable on-chain record celebrating the iconic evolutions and starter lineups from the first generation. Shown above: <strong>Umbreon ex SAR (#044/040)</strong> with 30th Anniversary night fireworks festival art by REND.
              </p>
              <div className="feature-stats">
                <div className="feature-stat-pill">
                  <div className="val">4,444</div>
                  <div className="lbl">SUPPLY</div>
                </div>
                <div className="feature-stat-pill">
                  <div className="val">100</div>
                  <div className="lbl">LINEAGES</div>
                </div>
                <div className="feature-stat-pill">
                  <div className="val">GEM-MT 10</div>
                  <div className="lbl">GRADE</div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: Copy (Left) + Image (Right) - Featuring Official Holographic Card Back */}
          <div className="feature-row reverse">
            <div className="feature-copy">
              <div className="stamp" style={{ width: "fit-content" }}>
                02 // DUAL UTILITY
              </div>
              <h3>Hold Your Digital Grail. Or Burn for Real Foil.</h3>
              <p>
                Your card stays yours forever as a permanent on-chain collectible with authentic holographic reverse backing. Or send three cards to the burn address to receive a raffle ticket for 1 of 1,000 real physical 30th Anniversary booster packs.
              </p>
              <div className="feature-stats">
                <div className="feature-stat-pill">
                  <div className="val">50%</div>
                  <div className="lbl">HIT RATE</div>
                </div>
                <div className="feature-stat-pill">
                  <div className="val">1 IN 2</div>
                  <div className="lbl">RAFFLE ODDS</div>
                </div>
                <div className="feature-stat-pill">
                  <div className="val">PERMANENT</div>
                  <div className="lbl">NO EXPIRY</div>
                </div>
              </div>
            </div>
            <div className="feature-media">
              <div className="feature-img-frame">
                <Image
                  src="/card_back_ddd236d4.webp"
                  alt="Official 30th Graded Holographic Card Back"
                  fill
                  sizes="(max-width: 768px) 220px, 260px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* ROW 3: Image (Left) + Copy (Right) - Featuring Authentic Japanese 30th Booster Pack */}
          <div className="feature-row">
            <div className="feature-media">
              <div className="feature-img-frame">
                <Image
                  src="/pack0.jpg"
                  alt="30th Anniversary Japanese Sealed Booster Pack"
                  fill
                  sizes="(max-width: 768px) 220px, 260px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            <div className="feature-copy">
              <div className="stamp" style={{ width: "fit-content" }}>
                03 // PHYSICAL REWARDS
              </div>
              <h3>1,000 Sealed Japanese Booster Packs Direct from Tokyo</h3>
              <p>
                Sourced directly from authorized Japanese retail distribution stock in Tokyo. Each sealed foil pack contains 6 random Japanese cards, all guaranteed holographic, with insured international fulfillment for all raffle winners.
              </p>
              <div className="feature-stats">
                <div className="feature-stat-pill">
                  <div className="val">1,000</div>
                  <div className="lbl">PACKS IN POOL</div>
                </div>
                <div className="feature-stat-pill">
                  <div className="val">6 CARDS</div>
                  <div className="lbl">ALL-HOLO</div>
                </div>
                <div className="feature-stat-pill">
                  <div className="val">TOKYO</div>
                  <div className="lbl">DIRECT SOURCING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MECHANICS & PACK CAROUSEL SECTION */}
      <section id="mechanics">
        <div className="section-head">
          <div className="eyebrow pixel">TWO WAYS TO PLAY</div>
          <h2>Keep the card. Or chase the pack.</h2>
          <p>No forced choice at mint. Decide later, decide never — the option stays open as long as you&apos;re holding.</p>
        </div>

        {/* Hold vs Burn Dual Paths */}
        <div className="paths">
          {/* Path 1: HOLD */}
          <div className="path hold">
            <div>
              <span className="tag pixel">HOLD</span>
              <span className="stamp" style={{ position: "absolute", top: "20px", right: "20px" }}>
                NM-MT
              </span>
              <h3>Keep it as an Illustrated Card</h3>
              <p>Your card stays exactly as minted — on-chain, untouched, yours. A permanent record of the anniversary, not a wrapper for something else.</p>
            </div>
            <div className="stat">
              <span className="n">4,444</span>
              <span className="l">TOTAL SUPPLY</span>
            </div>
          </div>

          {/* Path 2: BURN */}
          <div className="path burn">
            <div>
              <span className="tag pixel">BURN</span>
              <h3>Burn 3, roll for a pack</h3>
              <p>Send three cards to the raffle and you&apos;re in the pool for one of 1,000 real 30th Anniversary packs, sourced direct from one of the first retailers in Japan to carry the drop.</p>
            </div>

            <div className="stat">
              <span className="n">50%</span>
              <span className="l">RAFFLE HIT RATE</span>
            </div>
          </div>
        </div>

        {/* High-Visibility Physical Pack & Card Showcase Carousel with Mobile Carousel View */}
        <PackCarousel />
      </section>

      {/* STATS STRIP */}
      <div className="stats">
        <div className="stat-item">
          <div className="n mono">4,444</div>
          <div className="l">SUPPLY</div>
        </div>
        <div className="stat-item">
          <div className="n mono">100</div>
          <div className="l">LINEAGES + EVOS</div>
        </div>
        <div className="stat-item">
          <div className="n mono">1,000</div>
          <div className="l">PHYSICAL PACKS</div>
        </div>
        <div className="stat-item">
          <div className="n mono">1:2</div>
          <div className="l">BURN ODDS</div>
        </div>
      </div>

      {/* 8-BIT LOADING BAR */}
      <div style={{ textAlign: "center", padding: "30px 5vw 0" }}>
        <div className="loadbar">
          <div className="loadbar-fill" />
        </div>
        <div className="mono" style={{ fontSize: "0.6rem", color: "var(--mist)", letterSpacing: "0.1em", marginTop: "8px" }}>
          LOADING RARITY DATA...
        </div>
      </div>

      {/* TIMELINE SECTION */}
      <section id="timeline">
        <div className="section-head">
          <div className="eyebrow pixel">NO ROADMAP, JUST DATES</div>
          <h2>The only timeline that matters</h2>
        </div>
        <div className="timeline">
          <div className="tl-item">
            <div className="dot" />
            <div>
              <div className="when mono">NOW</div>
              <h4>Public Contract</h4>
              <p>No allowlist, no whitelist grind. Contract goes live on-chain.</p>
            </div>
          </div>
          <div className="tl-item active">
            <div className="dot" />
            <div>
              <div className="when mono">SEPT 16</div>
              <h4>Public Mint opens</h4>
              <p>4,444 cards available. Public, first come, first served.</p>
            </div>
          </div>
          <div className="tl-item">
            <div className="dot" />
            <div>
              <div className="when mono">POST-MINT</div>
              <h4>Burn window opens</h4>
              <p>Burn 3 cards to enter the raffle whenever you&apos;re ready — no deadline pressure.</p>
            </div>
          </div>
          <div className="tl-item">
            <div className="dot" />
            <div>
              <div className="when mono">TBD</div>
              <h4>Raffle draw + fulfillment</h4>
              <p>1,000 winners drawn on-chain. Packs ship direct from retailer stock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq">
        <div className="section-head">
          <div className="eyebrow pixel">FAQ</div>
          <h2>Straight answers</h2>
        </div>
        <div className="faq">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                <div
                  className="faq-q"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  {item.q}
                  <span className="plus mono">+</span>
                </div>
                <div className="faq-a">
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div className="dpad">
            <div className="dpad-center" />
          </div>
          <div className="fine">
            GRADED is an independent collector project celebrating the pack-opening era and 30 years of Pokémon. Not affiliated with, endorsed by, or sponsored by the original card publisher.
          </div>
        </div>
        <div className="social">
          <a href="#">X</a>
          <a href="#">Discord</a>
          <a href="#">OpenSea</a>
        </div>
      </footer>
    </>
  );
}
