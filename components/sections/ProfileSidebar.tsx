"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProfileSidebar() {
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

    return (
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
    );
}
