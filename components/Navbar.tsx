"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "home", label: "Overview" },
  { id: "work", label: "Selected Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
      const scrollY = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement;
        if (el.offsetTop <= scrollY + 140) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <div className="border-b border-[#e8e4de]/[0.05] bg-[#0d0d0c]/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="font-editorial italic text-xl font-normal text-[#fdfcfb] hover:text-[#d97736] transition-colors"
          >
            Abhigyan Sinha
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`text-xs font-mono tracking-wide transition-colors ${
                    activeSection === id ? "text-[#d97736]" : "text-[#a6a094] hover:text-[#fdfcfb]"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="text-xs font-mono px-3 py-1.5 rounded bg-[#151513] hover:bg-[#1c1c1a] border border-[#e8e4de]/[0.08] hover:border-[#d97736]/40 text-[#e8e4de] transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-1 text-[#a6a094] hover:text-[#fdfcfb]"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#e8e4de]/[0.05] bg-[#0d0d0c]/98 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col px-5 py-4 gap-3">
              {SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`block w-full text-left py-2 text-xs font-mono transition-colors ${
                      activeSection === id ? "text-[#d97736]" : "text-[#a6a094] hover:text-[#fdfcfb]"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-[#e8e4de]/[0.05]">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-block text-xs font-mono text-[#d97736]"
                >
                  Download Resume ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
