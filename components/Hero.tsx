"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown, ArrowUpRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { RESUME_URL } from "@/lib/constants";

const TYPING_PHRASES = [
  "Applied Machine Learning",
  "Explainable AI Systems",
  "Diagnostic & Predictive Models",
];
const TYPING_DELAY = 65;
const PAUSE_AFTER_PHRASE = 2400;
const DELETE_DELAY = 30;

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];
    if (!isDeleting) {
      if (displayText.length < phrase.length) {
        const t = setTimeout(() => setDisplayText(phrase.slice(0, displayText.length + 1)), TYPING_DELAY);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_PHRASE);
      return () => clearTimeout(t);
    } else {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), DELETE_DELAY);
        return () => clearTimeout(t);
      }
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % TYPING_PHRASES.length);
    }
  }, [phraseIndex, displayText, isDeleting]);

  const scrollToWork = () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-28 pb-16 overflow-hidden"
    >
      {/* Editorial Large Background Typographic Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute select-none pointer-events-none font-editorial italic text-[24vw] leading-none text-[#e8e4de]/2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter"
      >
        AS
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151513] border border-[#e8e4de]/8 text-[#a6a094] text-xs font-mono mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
          <span>Open to AI / ML Engineering roles</span>
        </div>

        {/* Name with Editorial Serif */}
        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-normal text-[#fdfcfb] tracking-tight mb-4 leading-[1.08]">
          Abhigyan Sinha
        </h1>

        {/* Dynamic Focus Line */}
        <div className="h-8 text-lg sm:text-xl text-[#a6a094] mb-5 font-mono">
          <span>{displayText}</span>
          <span className="animate-pulse text-[#d97736] ml-0.5">_</span>
        </div>

        {/* Concise Mission Subtext */}
        <p className="text-[#a6a094] text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto font-sans">
          Building end-to-end applied ML platforms, explainability tooling, and intelligent systems from research to production.
        </p>

        {/* Action CTAs */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#d97736] hover:bg-[#e88748] text-[#0d0d0c] font-semibold text-sm transition-colors duration-200 shadow-md"
          >
            <FileText size={15} strokeWidth={2.2} />
            <span>Resume</span>
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>

          <button
            onClick={scrollToWork}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#151513] hover:bg-[#1c1c1a] border border-[#e8e4de]/8 hover:border-[#e8e4de]/18 text-[#e8e4de] text-sm font-medium transition-colors duration-200"
          >
            <span>Selected Work</span>
            <ChevronDown size={15} />
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-2 ml-1">
            {[
              { href: "https://github.com/abhigyansinhaa", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/abhigyansinhaa", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:abhigyansinhaa@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2.5 rounded-md bg-[#151513] hover:bg-[#1c1c1a] border border-[#e8e4de]/8 hover:border-[#d97736]/40 text-[#a6a094] hover:text-[#e8e4de] transition-colors"
                aria-label={label}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
