"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Abhigyan Sinha. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/abhigyansinhaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/abhigyansinhaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:abhigyansinhaa@gmail.com"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
