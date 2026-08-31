import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.title} | Fan Tribute`,
  description: SITE_CONFIG.description,
  keywords: ["Pokémon", "30th Anniversary", "1996", "2026", "fan tribute", "Pokémon history", "generations"],
  openGraph: {
    title: `${SITE_CONFIG.title} | Fan Tribute`,
    description: SITE_CONFIG.description,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Press+Start+2P&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* CRT Effects */}
        <div className="crt-overlay" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
