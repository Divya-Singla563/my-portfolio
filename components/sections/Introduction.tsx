"use client";

import { motion } from "framer-motion";
import { House } from "lucide-react";

const stats = [
    { number: "20+", label: "Projects Delivered", description: "Successfully built and deployed full-stack web and mobile applications" },
    { number: "2+", label: "Years Experience", description: "Specialized in React.js, Next.js, React Native, and Web3 development" },
    { number: "Web3", label: "Web3 Integration", description: "Experience integrating blockchain technologies and decentralized solutions" },
];

export default function Introduction() {
    return (
        <>
            {/* Introduce Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <div className="flex items-center gap-2 mb-5">
                    <House />
                    <h3 className="text-xl font-semibold tracking-wider ">
                        Introduce
                    </h3>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl  text-[var(--foreground)] mb-6 leading-tight">
                    Say Hi from <span className="text-[var(--accent)]">John Deon</span>,<br />
                    Full Stack Developer
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
        </>
    );
}
