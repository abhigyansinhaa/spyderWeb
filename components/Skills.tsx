"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  { title: "Languages", items: ["Python", "Java", "C++", "SQL"] },
  { title: "Cloud", items: ["AWS", "EC2", "S3", "IAM", "RDS"] },
  { title: "Web Frameworks", items: ["Django", "React", "Next.js", "MERN"] },
  { title: "Databases", items: ["MySQL", "SQLite"] },
  { title: "Tools", items: ["Git", "GitHub", "Jupyter Notebook", "VS Code"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-[#0f172a]/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-2xl sm:text-3xl font-bold text-white mb-12"
        >
          Technical Skills
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-white/10 bg-[#1f2937]/80 p-5"
            >
              <h3 className="text-sm font-semibold text-blue-400 mb-3 font-mono">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
