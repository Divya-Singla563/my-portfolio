"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  type: "degree" | "training";
  description?: string;
}

const education: EducationItem[] = [
  {
    degree: "Bachelor's Degree",
    institution: "PGGC, Sector - 11 Chandigarh, India",
    duration: "2019 - 2022",
    type: "degree",

    description: "Punjab University, Chandigarh",
  },
  {
    degree: "React.js & React Native Training",
    institution: "Apptunix Pvt. Ltd.",
    duration: "4 Months",
    type: "training",
    description:
      "Intensive training program focused on modern React development, React Native mobile app development, and industry best practices",
  },
];

export default function Education() {
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
          <GraduationCap className="w-6 h-6 " />

          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
            Education
          </h3>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
          My <span className="text-[var(--accent)]">Education</span>
        </h2>
      </motion.div>

      {/* Education List */}
      <div className="space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group"
          >
            <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-lg p-6 hover:border-[var(--accent)]/50 transition-all duration-300">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-[250px]">
                  {/* Degree/Training */}
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-sm text-[var(--muted)]/80 mb-3">
                    {item.institution}
                  </p>

                  {/* Description */}
                  {item.description && (
                    <p className="text-sm text-[var(--muted)]/70 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Duration Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-xs font-medium text-[var(--foreground)]/80">
                    {item.duration}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
