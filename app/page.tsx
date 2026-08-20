import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
      </main>
      <footer className="border-t border-white/5 bg-[var(--surface-0)] py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Abhigyan Sinha. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
