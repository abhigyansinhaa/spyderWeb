"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const CERTS = [
  {
    name: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    description:
      "Cloud computing fundamentals, AWS global infrastructure, IAM basics, EC2, S3, pricing models, and shared responsibility model.",
  },
  {
    name: "AWS Cloud Architecting",
    issuer: "AWS Academy",
    description:
      "Designing scalable and fault-tolerant architectures using EC2, VPC, Load Balancers, Auto Scaling, RDS, security best practices, and high availability.",
  },
  {
    name: "AWS Data Engineering",
    issuer: "AWS Academy",
    description:
      "Data ingestion and processing using AWS services, ETL concepts, data lakes, data warehousing, analytics workflows, and performance optimization.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-flat py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-2xl sm:text-3xl font-bold text-white mb-14 heading-accent"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl border border-amber-500/15 card-gradient p-6 hover:border-amber-500/30 hover:shadow-[0_4px_24px_-4px_rgba(245,158,11,0.1)] transition-all duration-300"
            >
              {/* Top glow on hover */}
              <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-2 mb-3">
                <Award size={20} className="text-amber-400 shrink-0" />
                <span className="text-amber-400/90 text-xs font-medium">{cert.issuer}</span>
              </div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-amber-300 transition-colors duration-200">
                {cert.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
