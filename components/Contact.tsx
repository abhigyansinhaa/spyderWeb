"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\nFrom: ${name} (${email})`);
    window.location.href = `mailto:abhigyansinhaa@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-gradient-a py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-2xl sm:text-3xl font-bold text-white mb-4 heading-accent inline-block"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-10 mt-6"
        >
          Let&apos;s build something together.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="rounded-xl border border-white/8 card-gradient p-6 mb-10 text-left"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white/4 border border-white/8 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white/4 border border-white/8 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white/4 border border-white/8 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
          >
            <Send size={18} />
            Send via Email
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: "https://github.com/abhigyansinhaa", icon: Github, label: "GitHub", external: true },
            { href: "https://linkedin.com/in/abhigyansinhaa", icon: Linkedin, label: "LinkedIn", external: true },
            { href: "mailto:abhigyansinhaa@gmail.com", icon: Mail, label: "Email", external: false },
          ].map(({ href, icon: Icon, label, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="p-2.5 rounded-lg bg-white/5 border border-white/8 text-gray-400 hover:text-white hover:border-blue-500/50 transition-colors"
              aria-label={label}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
