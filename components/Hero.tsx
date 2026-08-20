"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown, Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import ParticleWeb from "./ParticleWeb";

const TYPING_PHRASES = [
  "AI Engineering",
  "Applied ML / LLM",
  "Data + Cloud",
];
const TYPING_DELAY = 80;
const PAUSE_AFTER_PHRASE = 2000;
const DELETE_DELAY = 40;

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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden bg-[var(--surface-0)]"
    >
      {/* Particle web background */}
      <ParticleWeb />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <p className="text-indigo-400 font-mono text-sm mb-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Abhigyan Sinha
        </h1>
        <div className="min-h-8 text-xl sm:text-2xl text-zinc-400 mb-6">
          <span className="text-white font-medium">{displayText}</span>
          <span className="animate-pulse text-indigo-400">|</span>
        </div>
        <p className="text-zinc-400 text-base sm:text-lg mb-4 max-w-xl mx-auto">
          AI Engineer building applied ML/LLM products, data pipelines, and cloud-native solutions.
        </p>

        {/* Open to opportunities badge */}
        <div className="flex items-center justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Currently open to opportunities
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
          >
            <Download size={16} />
            Resume
          </motion.a>

          {[
            { href: "https://github.com/abhigyansinhaa", icon: Github, label: "GitHub", external: true },
            { href: "https://linkedin.com/in/abhigyansinhaa", icon: Linkedin, label: "LinkedIn", external: true },
            { href: "mailto:abhigyansinhaa@gmail.com", icon: Mail, label: "Email", external: false },
          ].map(({ href, icon: Icon, label, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-indigo-500/50 hover:bg-white/10 transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={scrollToWork}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/30 text-white font-medium transition-all hover:bg-white/8"
        >
          View My Work
          <ChevronDown size={18} />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          className="text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </motion.div>
    </section>
  );
}
