"use client";

import { Github, Briefcase, Award, Mail, Linkedin, Download, ArrowUpRight, Play, FileCode, CheckCircle2 } from "lucide-react";
import BentoCard from "./BentoCard";
import Image from "next/image";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const FLAGSHIP = {
  name: "rootLens",
  tagline: "Explainable Machine Learning & Root-Cause Analytics",
  description:
    "An end-to-end ML platform that uncovers hidden causality in tabular data. Computes tree-based feature importance, generates SHAP value waterfalls, and translates complex model outputs into actionable business recommendations.",
  tech: ["FastAPI", "React", "XGBoost", "SHAP", "PostgreSQL", "Docker", "Alembic"],
  github: "https://github.com/abhigyansinhaa/rootLens",
  demo: "https://github.com/abhigyansinhaa/rootLens#quick-start-docker",
  highlights: [
    { label: "Interpretability", value: "SHAP + Tree Explanations" },
    { label: "Architecture", value: "Async FastAPI + Celery Worker" },
    { label: "Deployment", value: "Containerized Docker Compose" },
  ],
};

const PROJECTS = [
  {
    name: "Quant-Grade SIPA",
    tagline: "Smart Investment Portfolio Advisor",
    description:
      "Quantitative advisor forecasting asset returns with Ridge Regression and solving Markowitz Mean-Variance Optimization for risk-adjusted portfolio weighting.",
    metric: "14.2% alpha over index benchmark with a 1.84 Sharpe ratio on historical backtests.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    github: "https://github.com/abhigyansinhaa",
    demo: "https://github.com/abhigyansinhaa",
  },
  {
    name: "Bio Engine NLP",
    tagline: "Biological Sequence & Dataset Analysis",
    description:
      "High-throughput NLP pipeline engineered to parse, extract, and analyze unstructured biomedical literature alongside structured FASTA biological sequences.",
    metric: "Processes 50k+ PubMed abstracts & FASTA records per batch with 94.8% entity resolution.",
    tech: ["Python", "NLP", "Next.js", "PyTorch"],
    github: "https://github.com/abhigyansinhaa",
    demo: "https://github.com/abhigyansinhaa",
  },
];

const SKILL_SECTIONS = [
  {
    category: "ML & Data Science",
    items: "Python · PyTorch · Scikit-learn · Pandas · NumPy · SQL · XGBoost · SHAP",
  },
  {
    category: "AI & LLM Engineering",
    items: "LangChain · Vector DBs · RAG Pipelines · Prompt Eng · PEFT / LoRA · Embeddings",
  },
  {
    category: "Systems & Cloud",
    items: "FastAPI · Docker · AWS (EC2/S3/RDS) · Git · Postgres · Next.js · Linux",
  },
];

const EXPERIENCE = {
  role: "Data Analyst Intern",
  company: "Centre for Railway Information Systems (CRIS)",
  period: "May 2025 – June 2025",
  bullets: [
    "Developed XGBoost models for railway rake delay forecasting, boosting accuracy by 18%.",
    "Engineered interactive telemetry dashboards to track placement bottlenecks across freight hubs.",
  ],
};

const CERTS = [
  { name: "AWS Cloud Foundations", issuer: "AWS Academy" },
  { name: "AWS Cloud Architecting", issuer: "AWS Academy" },
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
                <span className="text-[11px] font-mono text-[#a6a094]">Full-Stack ML</span>
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
                Engineering with causality & scale.
              </h3>
              <p className="text-[#a6a094] text-sm leading-relaxed mb-4">
                Computer Science student focused on applied machine learning, predictive modeling, and cloud systems. Interested in models that are both performant and interpretable.
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
                <p className="text-[#8d877b] text-xs font-mono">B.Tech CS · KIIT (9.1 CGPA)</p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Skills Card (Editorial Text Format with Dividers) */}
        <BentoCard className="bento-lg" delay={0.1}>
          <p className="text-xs font-mono uppercase tracking-wider text-[#a6a094] mb-4">
            Technical Repertoire
          </p>

          <div className="space-y-4">
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

        {/* ═══ ROW 3: Project 2 + Project 3 + Experience (Balanced Heights) ═══ */}

        {/* Project 2: Quant-Grade SIPA */}
        <BentoCard delay={0.14}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-xs font-mono text-[#d97736] mb-1">Quantitative ML</p>
              <h3 className="font-editorial text-2xl text-[#fdfcfb] font-normal mb-1">
                {PROJECTS[0].name}
              </h3>
              <p className="text-[#8d877b] text-xs font-mono mb-3">{PROJECTS[0].tagline}</p>
              <p className="text-[#a6a094] text-sm leading-relaxed mb-3">
                {PROJECTS[0].description}
              </p>
              <div className="mb-4 p-2.5 rounded bg-[#0d0d0c] border border-[#e8e4de]/[0.05]">
                <p className="text-[11px] font-mono text-[#d97736] mb-0.5">Key Metric</p>
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
                  <span>Case Study</span>
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
              <p className="text-xs font-mono text-[#d97736] mb-1">NLP & Bio Data</p>
              <h3 className="font-editorial text-2xl text-[#fdfcfb] font-normal mb-1">
                {PROJECTS[1].name}
              </h3>
              <p className="text-[#8d877b] text-xs font-mono mb-3">{PROJECTS[1].tagline}</p>
              <p className="text-[#a6a094] text-sm leading-relaxed mb-3">
                {PROJECTS[1].description}
              </p>
              <div className="mb-4 p-2.5 rounded bg-[#0d0d0c] border border-[#e8e4de]/[0.05]">
                <p className="text-[11px] font-mono text-[#d97736] mb-0.5">Key Metric</p>
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
                  <span>Pipeline Spec</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Experience Card: CRIS */}
        <BentoCard delay={0.22}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#d97736] mb-2">
                <Briefcase size={13} />
                <span className="uppercase tracking-wider">Experience</span>
              </div>

              <h3 className="text-base font-semibold text-[#fdfcfb]">{EXPERIENCE.role}</h3>
              <p className="text-sm text-[#e8e4de]/80 font-medium mb-0.5">{EXPERIENCE.company}</p>
              <p className="text-xs font-mono text-[#8d877b] mb-3">{EXPERIENCE.period}</p>

              <ul className="space-y-2 text-xs text-[#a6a094] leading-relaxed">
                {EXPERIENCE.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#d97736] shrink-0 font-mono">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BentoCard>

        {/* ═══ ROW 4: Certifications (Full-Width Minimal Row) ═══ */}
        <BentoCard className="bento-full" delay={0.26}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-[#d97736]" />
              <p className="text-xs font-mono uppercase tracking-wider text-[#a6a094]">
                Certifications & Cloud Competency
              </p>
            </div>
            <span className="text-xs font-mono text-[#8d877b]">AWS Academy Accredited</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {CERTS.map((cert) => (
              <div
                key={cert.name}
                className="rounded-md bg-[#0d0d0c] border border-[#e8e4de]/[0.05] p-3.5 hover:border-[#d97736]/30 transition-colors"
              >
                <p className="text-[11px] font-mono text-[#d97736] mb-0.5">{cert.issuer}</p>
                <p className="text-xs sm:text-sm text-[#e8e4de] font-medium">{cert.name}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* ═══ ROW 5: Contact & Resume CTA ═══ */}
        <BentoCard className="bento-full" delay={0.3} id="contact">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-2">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#fdfcfb] font-normal mb-1">
                Let&apos;s build something meaningful.
              </h3>
              <p className="text-sm text-[#a6a094]">
                Open for AI/ML Engineering opportunities, collaborations, and discussions.
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
