import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
      </main>
      <Footer />
    </>
  );
}
