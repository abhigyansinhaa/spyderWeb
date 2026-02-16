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
    <section id="skills" className="section-gradient-b py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-2xl sm:text-3xl font-bold text-white mb-14 heading-accent"
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
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-white/8 card-gradient p-5 hover:border-blue-500/20 hover:shadow-[0_4px_24px_-4px_rgba(59,130,246,0.1)] transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-blue-400 mb-3 font-mono">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-gray-300 text-sm group-hover:border-blue-500/15 transition-colors duration-200"
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
