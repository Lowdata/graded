import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRADED — 30th Anniversary Collection",
  description:
    "4,444 illustrated graded cards pulled from 100 of the most recognizable lineups in the Pokemon world, minted on-chain for the 30th anniversary. Hold your illustrated card forever, or burn three and chase 1 of 1,000 real anniversary packs.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Press+Start+2P&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+JP:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
