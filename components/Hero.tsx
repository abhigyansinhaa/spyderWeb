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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 20%, rgba(59,130,246,0.07) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 70% 80%, rgba(6,182,212,0.04) 0%, transparent 50%),
          linear-gradient(180deg, #0a0a0a 0%, #0e1117 40%, #0a0a0a 100%)
        `,
      }}
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
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">{displayText}</span>
          <span className="animate-pulse text-cyan-400/90">|</span>
        </div>
        <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          B.Tech in Computer Science at KIIT. Building data pipelines, ML models, and cloud solutions.
        </p>

        <div className="flex items-center justify-center gap-4 mb-10">
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
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-white/10 transition-colors"
              aria-label={label}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={scrollToProjects}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
        >
          View My Work
          <ChevronDown size={18} />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-gray-500 hover:text-gray-400 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </motion.div>
    </section>
  );
}
