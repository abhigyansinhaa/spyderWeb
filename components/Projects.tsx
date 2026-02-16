"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const PROJECTS = [
  {
    name: "Quant-Grade SIPA",
    subtitle: "Smart Investment Portfolio Advisor",
    description:
      "Quantitative investment advisor using Ridge Regression to predict asset returns and Markowitz Mean-Variance Optimization for risk-optimized portfolios.",
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    link: "https://github.com/abhigyansinhaa",
  },
  {
    name: "Bio Engine NLP",
    subtitle: "Biological dataset analysis",
    description: "NLP pipeline to process and analyze large biological datasets efficiently.",
    tech: ["Python", "Next.js"],
    link: "https://github.com/abhigyansinhaa",
  },
  {
    name: "Online Judge",
    subtitle: "Full-stack coding platform",
    description:
      "Full-stack online judge supporting problem submissions, test case evaluation, and real-time scoring.",
    tech: ["Python", "Django"],
    link: "https://github.com/abhigyansinhaa",
  },
  {
    name: "Data Visualization Dashboards",
    subtitle: "KPI & analytics dashboards",
    description:
      "Interactive dashboards for performance monitoring and analytics: delay trends, operational efficiency, and predictive insights.",
    tech: ["Python", "Power BI", "Matplotlib", "Seaborn"],
    link: "https://github.com/abhigyansinhaa",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-2xl sm:text-3xl font-bold text-white mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-white/10 bg-[#1f2937]/80 p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{project.subtitle}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <Github size={20} />
                </a>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
