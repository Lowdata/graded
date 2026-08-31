import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AnniversaryStats from "@/components/sections/AnniversaryStats";
import GenerationCards from "@/components/sections/GenerationCards";
import PokemonMosaic from "@/components/sections/PokemonMosaic";
import CollectorSection from "@/components/sections/CollectorSection";
import GenerationTimeline from "@/components/sections/GenerationTimeline";
import PokedexViewer from "@/components/sections/PokedexViewer";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero + Countdown */}
      <Hero />

      {/* Stats strip */}
      <AnniversaryStats />

      {/* Generation Cards - horizontally scrollable */}
      <GenerationCards />

      {/* Pokémon Mosaic */}
      <PokemonMosaic />

      {/* Collector section */}
      <CollectorSection />

      {/* Interactive Pokédex */}
      <PokedexViewer />

      {/* Generation Timeline */}
      <GenerationTimeline />

      {/* FAQ */}
      <FAQ />

      <Footer />
    </main>
  );
}
