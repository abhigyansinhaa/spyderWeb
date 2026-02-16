"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const TYPING_PHRASES = [
  "Data Engineering",
  "Machine Learning",
  "Cloud (AWS)",
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

  const scrollToProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 bg-linear-to-b from-[#0a0a0a] via-[#0f172a] to-[#0a0a0a] overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <p className="text-blue-400 font-mono text-sm mb-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Abhigyan Sinha
        </h1>
        <div className="min-h-8 text-xl sm:text-2xl text-gray-400 mb-8">
          <span className="text-cyan-400/90">{displayText}</span>
          <span className="animate-pulse">|</span>
        </div>
        <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          B.Tech in Computer Science at KIIT. Building data pipelines, ML models, and cloud solutions.
        </p>

        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href="https://github.com/abhigyansinhaa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-white/10 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/abhigyansinhaa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-white/10 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:abhigyansinhaa@gmail.com"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-white/10 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        <button
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
        >
          View My Work
          <ChevronDown size={18} />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-gray-500 hover:text-gray-400 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </motion.div>
    </section>
  );
}
