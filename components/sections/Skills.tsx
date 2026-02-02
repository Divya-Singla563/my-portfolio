"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "React Native", icon: "⚛️" },
  { name: "React.js", icon: "⚛️" },
  { name: "Web3 Integration", icon: "⛓️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  // { name: "Docker", icon: "🐳" },
  // { name: "CI/CD", icon: "🔄" },
  // { name: "JavaScript", icon: "📜" },

  { name: "TypeScript", icon: "TS" },
  { name: "HTML/CSS", icon: "🌐" },
  { name: "Vitest", icon: "✅" },
  { name: "Jest", icon: "🃏" },
];

export default function Skills() {
  return (
    <section className="w-full py-6 md:py-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <div className="flex items-center gap-3 mb-6">
          <Wrench className="w-6 h-6" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
            My Skills
          </h3>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
          Key <span className="text-[var(--accent)]">Competencies</span>
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group/skill"
          >
            <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-lg p-4 hover:border-[var(--accent)]/40 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[100px] hover:scale-105">
              {/* Icon */}
              <div className="text-3xl mb-2 group-hover/skill:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <div className="text-xs font-medium text-[var(--foreground)] group-hover/skill:text-[var(--accent)] transition-colors duration-300">
                {skill.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
