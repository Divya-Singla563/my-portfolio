"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import Image from "next/image";

interface Skill {
    name: string;
    percentage: string;
    icon: string;
}

const skills: Skill[] = [
    {
        name: "React",
        percentage: "92%",
        icon: "⚛️"
    },
    {
        name: "Next.js",
        percentage: "95%",
        icon: "▲"
    },
    {
        name: "Node.js",
        percentage: "95%",
        icon: "◆"
    },
    {
        name: "MongoDB",
        percentage: "88%",
        icon: "🍃"
    },
    {
        name: "TypeScript",
        percentage: "85%",
        icon: "TS"
    },
    {
        name: "React Native",
        percentage: "88%",
        icon: "📱"
    },
    {
        name: "Web3",
        percentage: "80%",
        icon: "⛓️"
    }
];

export default function Skills() {
    return (
        <section className="w-full py-12">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-14"
            >
                <div className="flex items-center gap-2.5 mb-6">
                    <Wrench className="w-4 h-4 text-[var(--foreground)]" />
                    <h3 className="text-xs font-medium tracking-wide text-[var(--foreground)] uppercase">
                        MySkill
                    </h3>
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
                    My <span className="text-[var(--accent)]">Specializations</span>
                </h2>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group/skill"
                    >
                        <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-lg p-8 hover:border-[var(--accent)]/30 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[200px]">
                            {/* Icon */}
                            <div className="text-5xl mb-6 group-hover/skill:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>

                            {/* Percentage */}
                            <div className="text-4xl font-bold text-[var(--foreground)] mb-2 group-hover/skill:text-[var(--accent)] transition-colors duration-300">
                                {skill.percentage}
                            </div>

                            {/* Skill Name */}
                            <div className="text-sm text-[var(--muted)]/70">
                                {skill.name}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
