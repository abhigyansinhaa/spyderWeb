"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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
    description:
      "NLP pipeline to process and analyze large biological datasets efficiently.",
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
    <section id="projects" className="section-gradient-a py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-2xl sm:text-3xl font-bold text-white mb-14 heading-accent"
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
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative rounded-xl border border-white/8 card-gradient p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_8px_32px_-8px_rgba(59,130,246,0.15)]"
            >
              {/* Top glow on hover */}
              <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <Github size={20} />
                </motion.a>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white/4 border border-white/8 text-gray-400 text-xs font-mono transition-all duration-200 group-hover:border-blue-500/20 group-hover:text-gray-300"
                    style={{
                      transitionDelay: `${j * 30}ms`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* "View project" hint on hover */}
              <div className="mt-4 flex items-center gap-1.5 text-xs text-blue-400/0 group-hover:text-blue-400/70 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <ExternalLink size={12} />
                <span className="font-medium">View project</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
