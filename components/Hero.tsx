"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const stats = [
        "Web & Mobile Apps",
        "API & Backend Development",
        "Web3 / Blockchain Integration",
        "Performance-focused Architecture",
    ];

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 lg:py-24">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[var(--background)]">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                {/* Left Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--muted)] backdrop-blur-sm"
                        >
                            <span className="mr-2 flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
                            </span>
                            Available for new projects
                        </motion.div>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl text-[var(--foreground)]">
                            Hi, I’m Divya — <br />
                            <span className="text-[var(--accent)]">Full-Stack JS Developer</span>
                        </h1>

                        <p className="max-w-xl text-lg text-[var(--muted)] leading-relaxed">
                            I build scalable web & mobile applications using <span className="font-semibold text-[var(--foreground)]">React, React Native, Next.js, Node.js, MongoDB</span>, and <span className="font-semibold text-[var(--foreground)]">Web3</span> integrations.
                        </p>

                        <p className="text-[var(--muted)] font-medium">
                            From frontend UI to backend APIs and blockchain connectivity.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-wrap gap-4 pt-2"
                    >
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[var(--accent-2)] hover:scale-105 active:scale-95 text-center"
                        >
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-transparent px-6 py-3 text-base font-semibold text-[var(--foreground)] transition-all hover:bg-[var(--surface)] hover:text-[var(--accent)] text-center"
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    {/* Stats / Highlights */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center gap-2 text-[var(--muted)]">
                                <CheckCircle2 className="h-5 w-5 text-[var(--accent)] shrink-0" />
                                <span className="text-sm font-medium">{stat}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Social Links (Optional but good for portfolio) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex gap-4 pt-4"
                    >
                        <a href="#" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"><Github className="h-5 w-5" /></a>
                        <a href="#" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"><Linkedin className="h-5 w-5" /></a>
                        <a href="#" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"><Mail className="h-5 w-5" /></a>
                    </motion.div>

                </motion.div>

                {/* Right Column - Abstract Tech Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative hidden lg:block h-full min-h-[500px] w-full"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Abstract floating cards effect */}
                        <div className="relative w-[400px] h-[400px]">
                            {/* Main center circle */}
                            <div className="absolute inset-0 m-auto h-[300px] w-[300px] rounded-full border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-xl shadow-2xl flex items-center justify-center z-10">
                                <div className="text-center p-6">
                                    <div className="text-5xl font-bold text-[var(--foreground)] mb-2">3+</div>
                                    <div className="text-sm text-[var(--muted)]">Years Experience</div>
                                </div>
                            </div>

                            {/* Orbiting Elements - React */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 m-auto h-[450px] w-[450px] rounded-full border border-dashed border-[var(--border)]/50"
                            >
                                <div className="absolute top-0 left-1/2 -ml-6 -mt-6 h-12 w-12 rounded-xl bg-[#2563eb]/10 p-2 flex items-center justify-center backdrop-blur-md border border-blue-500/20 shadow-lg" style={{ transform: 'rotate(0deg)' }}>
                                    <span className="text-[10px] font-bold text-blue-600">React</span>
                                </div>
                            </motion.div>

                            {/* Orbiting Elements - Node */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 m-auto h-[380px] w-[380px] rounded-full border border-[var(--border)]/30"
                            >
                                <div className="absolute bottom-0 right-1/2 -mr-5 -mb-5 h-10 w-10 rounded-xl bg-green-500/10 p-2 flex items-center justify-center backdrop-blur-md border border-green-500/20 shadow-lg">
                                    <span className="text-[10px] font-bold text-green-600">Node</span>
                                </div>
                            </motion.div>

                            {/* Floating Tech Badges */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 right-0 h-16 w-40 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-xl flex items-center justify-center gap-2 z-20"
                            >
                                <div className="h-3 w-3 rounded-full bg-orange-500" />
                                <span className="font-semibold text-sm">Next.js 14</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-5 left-0 h-16 w-44 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-xl flex items-center justify-center gap-2 z-20"
                            >
                                <div className="h-3 w-3 rounded-full bg-purple-500" />
                                <span className="font-semibold text-sm">Web3 Integration</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
