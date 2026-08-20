"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Data Analyst Intern",
    company: "Centre for Railway Information Systems (CRIS)",
    period: "May 2025 – June 2025",
    bullets: [
      "Analyzed large-scale railway logistics datasets to extract insights for operational efficiency.",
      "Built dashboards to visualize placement delay and rake loading trends across stations.",
      "Applied machine learning techniques to predict operational delays.",
      "Developed multiple XGBoost-based models for wagon delay prediction and loading/unloading features, improving accuracy by 18%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-flat py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-2xl sm:text-3xl font-bold text-white mb-14 heading-accent"
        >
          <span className="text-indigo-400 font-mono text-base mr-2">02.</span>
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line with gradient fade */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-linear-to-b from-white/20 via-white/10 to-transparent" />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-10 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-indigo-500/20 border-2 border-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.3)]" />
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-xl border border-white/8 card-gradient p-6 hover:border-indigo-500/20 hover:shadow-[0_4px_24px_-4px_rgba(99,102,241,0.1)] transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Briefcase size={18} className="text-indigo-400 shrink-0" />
                  <span className="text-white font-semibold">{exp.role}</span>
                  <span className="text-zinc-700">·</span>
                  <span className="text-indigo-400 font-medium">{exp.company}</span>
                </div>
                <p className="text-zinc-600 text-sm mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-zinc-600 mt-1.5 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
