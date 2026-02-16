"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I&apos;m a Computer Science student passionate about turning raw data into actionable insights.
              I focus on data engineering pipelines, machine learning models, and cloud-native solutions on AWS.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From building XGBoost models for railway delay prediction to designing NLP pipelines and
              quantitative portfolio advisors, I enjoy end-to-end projects that combine data, ML, and clean code.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#1f2937]/80 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <p className="text-white font-medium">Kalinga Institute of Industrial Technology</p>
            <p className="text-gray-400 text-sm mt-1">Bhubaneswar, India</p>
            <p className="text-cyan-400 font-mono text-sm mt-2">B.Tech in Computer Science</p>
            <p className="text-gray-500 text-sm mt-1">CGPA: 9.1 · July 2023 – Present</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="w-32 h-32 rounded-full border-2 border-white/10 bg-[#1f2937] flex items-center justify-center text-gray-500 text-sm">
            Photo
          </div>
        </motion.div>
      </div>
    </section>
  );
}
