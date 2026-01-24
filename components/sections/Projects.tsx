"use client";

import { motion } from "framer-motion";
import { Briefcase, Smartphone, Globe, ArrowUpRight } from "lucide-react";

interface Project {
    name: string;
    description: string;
    type: "mobile" | "web";
    platform?: string;
    techStack: string[];
    links: {
        playStore?: string;
        appStore?: string;
        website?: string;
    };
}

const projects: Project[] = [
    {
        name: "TutorHail",
        description: "A comprehensive tutoring platform connecting students with qualified tutors. Features real-time chat, scheduling, payment integration, and progress tracking.",
        type: "mobile",
        platform: "Android & iOS",
        techStack: ["React Native", "Node.js", "MongoDB", "Socket.io"],
        links: {
            playStore: "https://play.google.com/store",
            appStore: "https://apps.apple.com"
        }
    },
    {
        name: "GetProp",
        description: "A modern real estate application that helps users find, buy, and sell properties. Features advanced search filters, virtual tours, and agent connections.",
        type: "mobile",
        platform: "Android & iOS",
        techStack: ["React Native", "Express", "MongoDB", "Google Maps API"],
        links: {
            playStore: "https://play.google.com/store",
            appStore: "https://apps.apple.com"
        }
    },
    {
        name: "Krafo",
        description: "A sleek and responsive website showcasing creative portfolio work with stunning animations and modern design principles.",
        type: "web",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        links: {
            website: "https://krafo.com"
        }
    }
];

export default function Projects() {
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
                    <Briefcase className="w-4 h-4 text-[var(--foreground)]" />
                    <h3 className="text-xs font-medium tracking-wide text-[var(--foreground)] uppercase">
                        Portfolio
                    </h3>
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
                    Featured <span className="text-[var(--accent)]">Projects</span>
                </h2>
            </motion.div>

            {/* Projects List */}
            <div className="space-y-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group"
                    >
                        <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-lg p-6 hover:border-[var(--accent)]/50 transition-all duration-300">
                            {/* Header Row */}
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        {/* Icon */}
                                        <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[var(--accent)]/30 transition-colors">
                                            {project.type === "mobile" ? (
                                                <Smartphone className="w-5 h-5 text-[var(--accent)]" />
                                            ) : (
                                                <Globe className="w-5 h-5 text-[var(--accent)]" />
                                            )}
                                        </div>

                                        {/* Title */}
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                                                {project.name}
                                            </h3>
                                            {project.platform && (
                                                <p className="text-xs text-[var(--muted)]/60 mt-0.5">
                                                    {project.platform}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-2 justify-end">
                                    {project.links.playStore && (
                                        <a
                                            href={project.links.playStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-xs font-medium text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-all group/link"
                                        >
                                            Play Store
                                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        </a>
                                    )}
                                    {project.links.appStore && (
                                        <a
                                            href={project.links.appStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-xs font-medium text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-all group/link"
                                        >
                                            App Store
                                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        </a>
                                    )}
                                    {project.links.website && (
                                        <a
                                            href={project.links.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-xs font-medium text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-all group/link"
                                        >
                                            Visit Website
                                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-[var(--muted)]/80 leading-relaxed mb-4">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-[var(--foreground)]/70"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
