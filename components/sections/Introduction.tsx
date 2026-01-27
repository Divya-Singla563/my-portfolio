"use client";

import { SITE, stats } from "@/lib/constants";
import { motion } from "framer-motion";
import { House } from "lucide-react";


export default function Introduction() {
    return (
        <section className="w-full">
            {/* Introduce Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <div className="flex items-center gap-3 mb-6">
                    <House className="w-6 h-6 " />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                        Introduce
                    </h3>
                </div>



                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl  text-[var(--foreground)] mb-6 leading-tight">
                    Hi from <span className="text-[var(--accent)]">{SITE.name}</span>,<br />
                    {SITE.role}
                </h1>

                <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed">
                    I build modern, scalable web and mobile applications with a strong emphasis on clean code and great user experience.
                </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--accent)]/30 transition-all"
                    >
                        <div className="text-5xl font-bold text-[var(--foreground)] mb-3">
                            {stat.number}
                        </div>
                        <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                            {stat.label}
                        </h4>
                        <p className="text-sm text-[var(--muted)] leading-relaxed">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
