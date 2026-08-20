"use client";

import { Github, ExternalLink, Briefcase, Award, Mail, Linkedin, Download, GraduationCap, Code2, Brain, Cloud, FileText } from "lucide-react";
import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import Image from "next/image";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const FLAGSHIP = {
  name: "rootLens",
  subtitle: "ML Platform for Root-Cause Analysis",
  description:
    "Full-stack ML platform for uploading tabular datasets, choosing a target variable, and getting root-cause insights with feature importance, SHAP explanations, and rule-based business recommendations.",
  tech: ["FastAPI", "React", "XGBoost", "SHAP", "PostgreSQL", "Docker"],
  github: "https://github.com/abhigyansinhaa/rootLens",
  featured: true,
};

const PROJECTS = [
  {
    name: "Quant-Grade SIPA",
    subtitle: "Smart Investment Portfolio Advisor",
    description:
      "Quantitative investment advisor using Ridge Regression to predict asset returns and Markowitz Mean-Variance Optimization for risk-optimized portfolios.",
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    github: "https://github.com/abhigyansinhaa",
  },
  {
    name: "Bio Engine NLP",
    subtitle: "Biological dataset analysis",
    description:
      "NLP pipeline to process and analyze large biological datasets efficiently.",
    tech: ["Python", "Next.js"],
    github: "https://github.com/abhigyansinhaa",
  },
];

const SKILL_GROUPS = [
  {
    title: "ML / Data",
    icon: Brain,
    items: ["Python", "Pandas", "Scikit-learn", "PyTorch", "NumPy", "SQL"],
  },
  {
    title: "AI / LLM Engineering",
    icon: Code2,
    items: ["LangChain", "Vector DBs", "Prompt Engineering", "RAG Pipelines", "PEFT/LoRA"],
  },
  {
    title: "Engineering / Deploy",
    icon: Cloud,
    items: ["FastAPI", "Docker", "Git", "AWS", "Streamlit", "Next.js"],
  },
];

const EXPERIENCE = {
  role: "Data Analyst Intern",
  company: "Centre for Railway Information Systems (CRIS)",
  period: "May 2025 – June 2025",
  impact: "Built XGBoost models for wagon delay prediction, improving accuracy by 18%. Designed dashboards to visualize placement delay and loading trends across stations.",
};

const CERTS = [
  { name: "AWS Cloud Foundations", issuer: "AWS Academy" },
  { name: "AWS Cloud Architecting", issuer: "AWS Academy" },
  { name: "AWS Data Engineering", issuer: "AWS Academy" },
];

const GITHUB_STATS = {
  repos: "15+",
  projects: "8+",
  contributions: "200+",
};

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export default function BentoGrid() {
  return (
    <section id="work" className="bento-section">
      <div className="bento-grid relative z-10">

        {/* ═══ ROW 1: Flagship Project (2col) + About Me (1col) ═══ */}

        {/* Flagship Project — Large Card */}
        <BentoCard className="bento-lg" delay={0}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-mono font-medium text-indigo-400 border border-indigo-500/30 rounded px-1.5 py-0.5 uppercase tracking-wider">
              Featured
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
            {FLAGSHIP.name}
          </h3>
          <p className="text-zinc-500 text-sm mb-3">{FLAGSHIP.subtitle}</p>
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            {FLAGSHIP.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {FLAGSHIP.tech.map((t) => (
              <span key={t} className="skill-tag text-xs">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={FLAGSHIP.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo-400 transition-colors"
            >
              <Github size={16} />
              <span>Source</span>
            </a>
            <a
              href={FLAGSHIP.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo-400 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          </div>
        </BentoCard>

        {/* About Me — Small Card */}
        <BentoCard delay={0.05}>
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-bold text-white mb-3">About Me</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
              Computer Science student passionate about turning raw data into actionable insights.
              I focus on building applied ML/LLM products, data pipelines, and cloud-native solutions.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                <Image
                  src="/avatar.jpg"
                  alt="Abhigyan Sinha"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Abhigyan Sinha</p>
                <p className="text-zinc-600 text-xs">B.Tech CS · KIIT</p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* ═══ ROW 2: Project 2 + Project 3 + Skills ═══ */}

        {PROJECTS.map((project, i) => (
          <BentoCard key={project.name} delay={0.1 + i * 0.05}>
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">
              {project.name}
            </h3>
            <p className="text-zinc-500 text-sm mb-2">{project.subtitle}</p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="skill-tag text-xs">{t}</span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo-400 transition-colors"
            >
              <Github size={16} />
              <span>View project</span>
            </a>
          </BentoCard>
        ))}

        {/* Skills Card */}
        <BentoCard delay={0.2}>
          <h3 className="text-lg font-bold text-white mb-4">Skills</h3>
          <div className="space-y-4">
            {SKILL_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={14} className="text-indigo-400" />
                    <span className="text-xs font-semibold text-indigo-400 font-mono uppercase tracking-wider">
                      {group.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span key={skill} className="skill-tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </BentoCard>

        {/* ═══ ROW 3: GitHub Stats + Experience ═══ */}

        {/* GitHub Stats Card */}
        <BentoCard delay={0.25}>
          <h3 className="text-lg font-bold text-white mb-5">GitHub</h3>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {Object.entries(GITHUB_STATS).map(([label, value]) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-indigo-400 font-mono">{value}</p>
                <p className="text-zinc-600 text-xs mt-1 capitalize">{label}</p>
              </div>
            ))}
          </div>
          <a
            href="https://github.com/abhigyansinhaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            <Github size={16} />
            <span>View profile</span>
          </a>
        </BentoCard>

        {/* Experience Card */}
        <BentoCard delay={0.3}>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-indigo-500/10">
              <Briefcase size={16} className="text-indigo-400" />
            </div>
            <span className="text-xs font-semibold text-indigo-400 font-mono uppercase tracking-wider">
              Experience
            </span>
          </div>
          <h3 className="text-white font-semibold mb-0.5">{EXPERIENCE.role}</h3>
          <p className="text-indigo-400/80 text-sm font-medium mb-1">{EXPERIENCE.company}</p>
          <p className="text-zinc-600 text-xs mb-3">{EXPERIENCE.period}</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {EXPERIENCE.impact}
          </p>
        </BentoCard>

        {/* Education Card */}
        <BentoCard delay={0.35}>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-indigo-500/10">
              <GraduationCap size={16} className="text-indigo-400" />
            </div>
            <span className="text-xs font-semibold text-indigo-400 font-mono uppercase tracking-wider">
              Education
            </span>
          </div>
          <h3 className="text-white font-semibold mb-0.5">B.Tech in Computer Science</h3>
          <p className="text-indigo-400/80 text-sm font-medium mb-1">
            Kalinga Institute of Industrial Technology
          </p>
          <p className="text-zinc-500 text-xs mb-2">Bhubaneswar, India</p>
          <p className="text-zinc-400 text-sm">
            <span className="text-indigo-400 font-mono font-medium">CGPA: 9.1</span>
          </p>
        </BentoCard>

        {/* ═══ Certifications — Full Width ═══ */}
        <BentoCard className="bento-full" delay={0.4}>
          <div className="flex items-center gap-2 mb-5">
            <Award size={18} className="text-indigo-400" />
            <h3 className="text-lg font-bold text-white">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {CERTS.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-4 hover:border-indigo-500/20 transition-colors"
              >
                <p className="text-indigo-400/70 text-xs font-medium mb-1">{cert.issuer}</p>
                <p className="text-white text-sm font-medium">{cert.name}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* ═══ Contact CTA — Full Width ═══ */}
        <BentoCard className="bento-full" delay={0.45} id="contact">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let&apos;s build something together</h3>
              <p className="text-zinc-500 text-sm">
                Open to opportunities — reach out anytime.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
              >
                <Download size={16} />
                Resume
              </a>
              {[
                { href: "https://github.com/abhigyansinhaa", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/abhigyansinhaa", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:abhigyansinhaa@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/8 text-zinc-500 hover:text-white hover:border-indigo-500/50 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </BentoCard>

      </div>
    </section>
  );
}
