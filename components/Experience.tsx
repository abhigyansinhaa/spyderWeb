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
    <section id="experience" className="py-20 px-4 bg-[#0f172a]/50">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-2xl sm:text-3xl font-bold text-white mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10" />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-10 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-500/20 border-2 border-blue-500" />
              <div className="rounded-xl border border-white/10 bg-[#1f2937]/80 p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Briefcase size={18} className="text-blue-400 shrink-0" />
                  <span className="text-white font-semibold">{exp.role}</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-cyan-400">{exp.company}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-blue-400 mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
