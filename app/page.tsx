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
      <footer className="border-t border-[#e8e4de]/[0.05] bg-[#0d0d0c] py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8d877b]">
          <p>© {new Date().getFullYear()} Abhigyan Sinha. AI & ML Engineer.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:abhigyansinhaa@gmail.com" className="hover:text-[#d97736] transition-colors">
              abhigyansinhaa@gmail.com
            </a>
            <a href="https://github.com/abhigyansinhaa" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97736] transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/abhigyansinhaa" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97736] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
