"use client";

import { Github, Briefcase, Award, Mail, Linkedin, Download, ArrowUpRight, Play, FileCode, Server, Terminal, Database, Sparkles } from "lucide-react";
import BentoCard from "./BentoCard";
import Image from "next/image";

/* ────────────────────────────────────────────
   RESUME DATA
   ──────────────────────────────────────────── */

const FLAGSHIP = {
  name: "RootLens",
  tagline: "Explainable Machine Learning & Causal Driver Platform",
  description:
    "Full-stack ML platform auto-routing tabular datasets to XGBoost, Random Forest, or Elastic Net. Replaces black-box predictions with SHAP driver attributions and business KPI layers (Pareto concentration, counterfactual rollups).",
  tech: ["Python", "FastAPI", "XGBoost", "SHAP", "React", "Docker", "Redis / RQ", "MySQL"],
  github: "https://github.com/abhigyansinhaa/rootLens",
  demo: "https://github.com/abhigyansinhaa/rootLens#quick-start-docker",
  highlights: [
    { label: "Pipeline", value: "Async Redis + RQ Task Queue" },
    { label: "Explainability", value: "SHAP Driver & Counterfactuals" },
    { label: "Architecture", value: "JWT REST API (10+ endpoints)" },
  ],
};

const PROJECTS = [
  {
    name: "SME Cashflow & Risk Advisor",
    tagline: "Financial Forecasting & AI Risk Simulation",
    description:
      "Full-stack financial SaaS providing real-time visibility into burn rate, runway, and cash position via versioned REST API (/api/v1).",
    metric: "7/14/30-day Ridge Regression forecasts, what-if scenario simulator, and LLM advisor with offline fallback.",
    tech: ["Python", "Flask", "MySQL", "Scikit-learn", "SQLAlchemy"],
    github: "https://github.com/abhigyansinhaa",
    demo: "https://github.com/abhigyansinhaa",
  },
  {
    name: "Bio Engine NLP",
    tagline: "Biomedical RAG & Knowledge Graph Engine",
    description:
      "Two-layer retrieval system over 500+ space-biology papers combining FAISS semantic search and Gemini relation extraction into a queryable knowledge graph.",
    metric: "Sub-second semantic lookup with checkpointed resumption, retry-with-backoff, and deduplication.",
    tech: ["Python", "RAG Systems", "FAISS", "Sentence-Transformers", "Gemini API"],
    github: "https://github.com/abhigyansinhaa",
    demo: "https://github.com/abhigyansinhaa",
  },
];

const EXPERIENCES = [
  {
    role: "AI Engineer Intern",
    company: "Central Warehousing Corporation (CWC)",
    division: "MIS Division",
    period: "May 2026 – June 2026",
    bullets: [
      "Cut query response time by 95%+ (45s → under 2s) on CPU-only infrastructure via Depot Darpan AI combining XGBoost forecasting, LangChain/BGE-M3 RAG, and semantic caching.",
      "Prevented 3 production-breaking bugs by designing a 6-layer audit, and stress-tested pipeline against a 50-depot benchmark pre-launch.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Centre for Railway Information Systems (CRIS)",
    division: "Logistics Operations",
    period: "May 2025 – June 2025",
    bullets: [
      "Boosted delay-prediction accuracy by 18% via Bayesian hyperparameter optimization and feature engineering on a 250k+ record dataset.",
      "Replaced manual wagon-placement with a production ML model adopted by operations, retiring a legacy heuristic workflow.",
    ],
  },
];

const SKILL_SECTIONS = [
  {
    category: "Data & Machine Learning",
    items: "Python · Pandas · NumPy · Scikit-learn · FAISS · HuggingFace · LangChain · XGBoost · SHAP · Feature Eng",
  },
  {
    category: "Backend & Systems",
    items: "FastAPI · Flask · Django · REST APIs · SQLAlchemy ORM · Redis / RQ · JWT Auth · System Design",
  },
  {
    category: "Cloud, DevOps & Databases",
    items: "AWS (EC2, S3, IAM, RDS) · Docker · Git · PostgreSQL · MySQL · SQLite · Next.js · React",
  },
  {
    category: "Languages",
    items: "Python · SQL · Java · C · C++",
  },
];

const CERTS = [
  { name: "AWS Academy Cloud Foundations", issuer: "AWS Academy" },
  { name: "AWS Academy ML Foundations", issuer: "AWS Academy" },
  { name: "AWS Academy Cloud Architecting", issuer: "AWS Academy" },
  { name: "AWS Data Engineering", issuer: "AWS Academy" },
];

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export default function BentoGrid() {
  return (
    <section id="work" className="bento-section">
      <div className="bento-grid">

        {/* ═══ FLAGSHIP: Full-Width Asymmetric Feature Card ═══ */}
        <BentoCard className="bento-full" delay={0}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start">
            
            {/* Left Column: Narrative & Links */}
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#d97736] font-semibold">
                  Flagship Project
                </span>
                <span className="text-[#a6a094]/40">/</span>
                <span className="text-[11px] font-mono text-[#a6a094]">Full-Stack ML & Explainability</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl text-[#fdfcfb] font-normal mb-2 leading-tight">
                {FLAGSHIP.name}
              </h2>
              
              <p className="text-[#d97736]/90 text-sm font-medium mb-4">
                {FLAGSHIP.tagline}
              </p>

              <p className="text-[#a6a094] text-sm sm:text-base leading-relaxed mb-6">
                {FLAGSHIP.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {FLAGSHIP.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Dual Action Links */}
              <div className="flex items-center gap-6">
                <a
                  href={FLAGSHIP.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-xs font-mono text-[#e8e4de]"
                >
                  <Github size={14} />
                  <span>Source Code</span>
                  <ArrowUpRight size={12} className="text-[#d97736]" />
                </a>

                <a
                  href={FLAGSHIP.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-xs font-mono text-[#e8e4de]"
                >
                  <Play size={12} className="text-[#d97736]" />
                  <span>Docker Setup & Demo</span>
                  <ArrowUpRight size={12} className="text-[#d97736]" />
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Highlights / Metrics Panel */}
            <div className="w-full lg:w-72 shrink-0 rounded-lg bg-[#0d0d0c] border border-[#e8e4de]/[0.06] p-5">
              <p className="text-xs font-mono uppercase tracking-wider text-[#a6a094] mb-4 pb-2 border-b border-[#e8e4de]/[0.06]">
                System Architecture
              </p>
              
              <div className="space-y-4">
                {FLAGSHIP.highlights.map((h) => (
                  <div key={h.label}>
                    <p className="text-xs text-[#8d877b] font-mono">{h.label}</p>
                    <p className="text-sm text-[#e8e4de] font-medium mt-0.5">{h.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-[#e8e4de]/[0.06] flex items-center justify-between text-xs font-mono text-[#a6a094]">
                <span>Status</span>
                <span className="text-[#d97736] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97736]"></span>
                  Production Ready
                </span>
              </div>
            </div>

          </div>
        </BentoCard>

        {/* ═══ ROW 2: About Me (1 Col) + Skills (2 Col) ═══ */}

        {/* About Me Card */}
        <BentoCard delay={0.06}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#a6a094] mb-3">
                Background
              </p>
              <h3 className="font-editorial text-2xl text-[#fdfcfb] font-normal mb-3">
                Applied AI, RAG & production systems.
              </h3>
              <p className="text-[#a6a094] text-sm leading-relaxed mb-4">
                CS student at KIIT with engineering experience across national logistics (CRIS, CWC). Focused on latency-optimized RAG pipelines, explainable ML models, and scalable asynchronous backends.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#e8e4de]/[0.06]">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#e8e4de]/[0.1] shrink-0 bg-[#0d0d0c]">
                <Image
                  src="/avatar.jpg"
                  alt="Abhigyan Sinha"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div>
                <p className="text-[#e8e4de] text-sm font-medium">Abhigyan Sinha</p>
                <p className="text-[#8d877b] text-xs font-mono">B.Tech CS · KIIT (9.11 CGPA)</p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Skills Card (Editorial Text Format with Dividers) */}
        <BentoCard className="bento-lg" delay={0.1}>
          <p className="text-xs font-mono uppercase tracking-wider text-[#a6a094] mb-4">
            Technical Repertoire
          </p>

          <div className="space-y-3.5">
            {SKILL_SECTIONS.map((sec) => (
              <div key={sec.category} className="pb-3 border-b border-[#e8e4de]/[0.04] last:border-0 last:pb-0">
                <p className="text-xs font-mono text-[#d97736] mb-1 font-medium">
                  {sec.category}
                </p>
                <p className="text-sm sm:text-base text-[#e8e4de]/90 font-sans tracking-wide leading-relaxed">
                  {sec.items}
                </p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* ═══ ROW 3: Secondary Projects (2 Col) ═══ */}

        {/* Project 2: SME Cashflow & Risk Advisor */}
        <BentoCard delay={0.14}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-xs font-mono text-[#d97736] mb-1">Financial ML & SaaS</p>
              <h3 className="font-editorial text-2xl text-[#fdfcfb] font-normal mb-1">
                {PROJECTS[0].name}
              </h3>
              <p className="text-[#8d877b] text-xs font-mono mb-3">{PROJECTS[0].tagline}</p>
              <p className="text-[#a6a094] text-sm leading-relaxed mb-3">
                {PROJECTS[0].description}
              </p>
              <div className="mb-4 p-2.5 rounded bg-[#0d0d0c] border border-[#e8e4de]/[0.05]">
                <p className="text-[11px] font-mono text-[#d97736] mb-0.5">Core Innovation</p>
                <p className="text-xs text-[#e8e4de] leading-snug">{PROJECTS[0].metric}</p>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {PROJECTS[0].tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-1 border-t border-[#e8e4de]/[0.05]">
                <a
                  href={PROJECTS[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-xs font-mono"
                >
                  <Github size={12} />
                  <span>Source</span>
                  <ArrowUpRight size={11} />
                </a>
                <a
                  href={PROJECTS[0].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-xs font-mono"
                >
                  <FileCode size={12} />
                  <span>Architecture</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Project 3: Bio Engine NLP */}
        <BentoCard delay={0.18}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-xs font-mono text-[#d97736] mb-1">Biomedical RAG & Knowledge Graphs</p>
              <h3 className="font-editorial text-2xl text-[#fdfcfb] font-normal mb-1">
                {PROJECTS[1].name}
              </h3>
              <p className="text-[#8d877b] text-xs font-mono mb-3">{PROJECTS[1].tagline}</p>
              <p className="text-[#a6a094] text-sm leading-relaxed mb-3">
                {PROJECTS[1].description}
              </p>
              <div className="mb-4 p-2.5 rounded bg-[#0d0d0c] border border-[#e8e4de]/[0.05]">
                <p className="text-[11px] font-mono text-[#d97736] mb-0.5">Core Innovation</p>
                <p className="text-xs text-[#e8e4de] leading-snug">{PROJECTS[1].metric}</p>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {PROJECTS[1].tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-1 border-t border-[#e8e4de]/[0.05]">
                <a
                  href={PROJECTS[1].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-xs font-mono"
                >
                  <Github size={12} />
                  <span>Source</span>
                  <ArrowUpRight size={11} />
                </a>
                <a
                  href={PROJECTS[1].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-xs font-mono"
                >
                  <FileCode size={12} />
                  <span>Live Pipeline</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* ═══ ROW 4: Experience Cards (2 Columns for CWC and CRIS) ═══ */}
        
        {/* Experience 1: CWC */}
        <BentoCard delay={0.22}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#d97736]">
                  <Briefcase size={13} />
                  <span className="uppercase tracking-wider">AI Engineering</span>
                </div>
                <span className="text-[11px] font-mono text-[#8d877b]">{EXPERIENCES[0].period}</span>
              </div>

              <h3 className="text-base font-semibold text-[#fdfcfb]">{EXPERIENCES[0].role}</h3>
              <p className="text-xs text-[#e8e4de]/80 font-medium mb-3">{EXPERIENCES[0].company} · {EXPERIENCES[0].division}</p>

              <ul className="space-y-2 text-xs text-[#a6a094] leading-relaxed">
                {EXPERIENCES[0].bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#d97736] shrink-0 font-mono">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BentoCard>

        {/* Experience 2: CRIS */}
        <BentoCard className="bento-lg" delay={0.25}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#d97736]">
                  <Briefcase size={13} />
                  <span className="uppercase tracking-wider">Machine Learning</span>
                </div>
                <span className="text-[11px] font-mono text-[#8d877b]">{EXPERIENCES[1].period}</span>
              </div>

              <h3 className="text-base font-semibold text-[#fdfcfb]">{EXPERIENCES[1].role}</h3>
              <p className="text-xs text-[#e8e4de]/80 font-medium mb-3">{EXPERIENCES[1].company} · {EXPERIENCES[1].division}</p>

              <ul className="space-y-2 text-xs text-[#a6a094] leading-relaxed">
                {EXPERIENCES[1].bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#d97736] shrink-0 font-mono">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BentoCard>

        {/* ═══ ROW 5: Certifications (Full-Width Minimal Row) ═══ */}
        <BentoCard className="bento-full" delay={0.28}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-[#d97736]" />
              <p className="text-xs font-mono uppercase tracking-wider text-[#a6a094]">
                Certifications & Cloud Competency
              </p>
            </div>
            <span className="text-xs font-mono text-[#8d877b]">AWS Academy Accredited</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CERTS.map((cert) => (
              <div
                key={cert.name}
                className="rounded-md bg-[#0d0d0c] border border-[#e8e4de]/[0.05] p-3 hover:border-[#d97736]/30 transition-colors"
              >
                <p className="text-[10px] font-mono text-[#d97736] mb-0.5">{cert.issuer}</p>
                <p className="text-xs text-[#e8e4de] font-medium leading-snug">{cert.name}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* ═══ ROW 6: Contact & Resume CTA ═══ */}
        <BentoCard className="bento-full" delay={0.32} id="contact">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-2">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#fdfcfb] font-normal mb-1">
                Let&apos;s build something meaningful.
              </h3>
              <p className="text-sm text-[#a6a094]">
                Available for AI/ML Engineering opportunities · +91 94731-54146 · abhigyansinhaa@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#d97736] hover:bg-[#e88748] text-[#0d0d0c] font-semibold text-sm transition-colors shadow-md"
              >
                <Download size={15} strokeWidth={2.5} />
                <span>Resume PDF</span>
              </a>

              <div className="flex items-center gap-2">
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
                    className="p-2.5 rounded-md bg-[#0d0d0c] hover:bg-[#1c1c1a] border border-[#e8e4de]/[0.08] hover:border-[#d97736]/40 text-[#a6a094] hover:text-[#e8e4de] transition-colors"
                    aria-label={label}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </BentoCard>

      </div>
    </section>
  );
}
