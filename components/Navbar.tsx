"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
      const scrollY = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement;
        if (el.offsetTop <= scrollY + 120) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          onClick={() => scrollTo("home")}
          className="text-lg font-semibold text-white hover:text-blue-400 transition-colors"
        >
          AS
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === id ? "text-blue-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col px-4 py-4 gap-2">
              {SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === id ? "text-blue-400 bg-white/5" : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
