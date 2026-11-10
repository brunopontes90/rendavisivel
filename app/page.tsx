import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Stack from "@/components/Stack";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TrackViewContent from "@/components/TrackViewContent";

export default function Home() {
  return (
    <main>
      <TrackViewContent />
      <Hero />
      <Problema />
      <Stack />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}
