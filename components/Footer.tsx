"use client";

import VisitorCounter from "@/components/VisitorCounter";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e4de]/5 bg-[#0d0d0c] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#8d877b]">
        {/* Left: Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Abhigyan Sinha. AI & ML Engineer.
        </p>

        {/* Center: Visitor Counter Badge */}
        <div className="flex items-center justify-center">
          <VisitorCounter />
        </div>

        {/* Right: Social & Contact Links */}
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="hover:text-[#d97736] transition-colors"
          >
            {EMAIL}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d97736] transition-colors"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d97736] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
