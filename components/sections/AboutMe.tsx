"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-16 mt-40"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded bg-[var(--card-bg)] border border-[var(--border)] flex items-center justify-center">
                    <div className="w-6 h-6 rounded bg-[var(--accent)]" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                    AboutMe
                </h3>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
                Every great project begins with<br />
                an even <span className="text-[var(--accent)]">better solution</span>
            </h2>

            <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed mb-6">
                Since beginning my journey as a full stack developer, I've worked with cutting-edge technologies including React Native, React.js, Next.js, MongoDB, Express, and Node.js. I've done remote work for agencies, consulted for startups, and collaborated with talented people to create scalable web and mobile applications for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my development skills one project at a time.
            </p>
        </motion.div>
    );
}
