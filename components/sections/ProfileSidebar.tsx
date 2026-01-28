"use client";

import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProfileSidebar() {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = SITE.role
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
            <div className="sticky top-32 h-[calc(100vh-8rem)] flex items-center justify-center">
                <div className="relative w-full max-w-sm">
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
                                src="/profile1.jpg"
                                alt="Divya"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Social Icons - On top of photo */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="absolute top-6 left-0 right-0 flex justify-center gap-4 z-20"
                        >
                            <a
                                target="_blank"
                                href="#"
                                className="w-12 h-12 rounded bg-[#1a1a1a]/80 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/divya_in_frames?igsh=c2t2bDc5YXVpaXhr"
                                className="w-12 h-12 rounded bg-[#1a1a1a]/80 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/divya-singla-4188ba1b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                className="w-12 h-12 rounded bg-[#1a1a1a]/80 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/Divya-Singla563"
                                className="w-12 h-12 rounded bg-[#1a1a1a]/80 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </motion.div>

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
                                    {SITE.name}
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
