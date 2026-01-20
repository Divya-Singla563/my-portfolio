"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Facebook, Instagram, House } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Full Stack Developer";
    const typingSpeed = 150; // milliseconds per character

    useEffect(() => {
        let currentIndex = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (currentIndex <= fullText.length) {
                    setDisplayedText(fullText.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, typingSpeed);
            return () => clearInterval(interval);
        }, 1000); // Start after 1 second delay

        return () => clearTimeout(timeout);
    }, []);

    // const stats = [
    //     { number: "320", label: "Happy Clients", description: "Lorem ipsum is simply dummy text of the printing and typesetting industry" },
    //     { number: "299", label: "Employees", description: "Lorem ipsum is simply dummy text of the printing and typesetting industry" },
    //     { number: "199", label: "Running Work", description: "Lorem ipsum is simply dummy text of the printing and typesetting industry" },
    // ];

    return (
        <section className="relative flex pt-16 sm:pt-20">
            {/* Left Sidebar - Sticky (stops at footer) */}
            <div className="hidden lg:block lg:w-[420px] xl:w-[480px]">
                <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] flex items-center justify-center">
                    <div className="relative w-full max-w-sm">
                        {/* Social Icons - Top */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="absolute -top-16 left-0 right-0 flex justify-center gap-4 z-20"
                        >
                            <a
                                href="#"
                                className="w-12 h-12 rounded bg-[#1a1a1a] border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 rounded bg-[#1a1a1a] border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 rounded bg-[#1a1a1a] border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 rounded bg-[#1a1a1a] border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </motion.div>

                        {/* Profile Card with Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[var(--border)] shadow-2xl"
                        >
                            {/* Profile Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src="/profile.png"
                                    alt="Divya"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Text Overlay - Bottom Left */}
                            <div className="absolute z-20 bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-1">
                                        Hello I'm
                                    </h2>
                                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-2">
                                        John Deon
                                    </h1>
                                    <p className="text-2xl sm:text-3xl font-medium text-white">
                                        a <span className="text-[var(--accent)] font-bold">{displayedText}</span>
                                        <span className="inline-block w-0.5 h-8 bg-[var(--accent)] ml-1 animate-blink align-middle"></span>
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Pink Accent Shape - Bottom Left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 w-20 h-20 bg-[var(--accent)] rounded-lg z-10"
                        />
                    </div>
                </div>
            </div>

            {/* Right Content Area - Scrollable */}
            <div className="w-full lg:flex-1">
                <div className="min-h-screen px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-24 pt-24 lg:pt-20">
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
                    {/* <motion.div
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
                    </motion.div> */}

                    {/* About Me Section */}
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
                </div>
            </div>
        </section>
    );
}
