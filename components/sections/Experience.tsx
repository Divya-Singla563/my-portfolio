"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    rating?: string;
}

const experiences: ExperienceItem[] = [
    {
        title: "Personal Portfolio April Fools",
        company: "University of DVI",
        period: "1997 - 2001",
        description: "The education should be very interactual, ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
        rating: "4.30/5"
    },
    {
        title: "Examples Of Personal Portfolio",
        company: "College of Studies",
        period: "2000 - 2002",
        description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
        rating: "4.30/5"
    },
    {
        title: "Tips For Personal Portfolio",
        company: "University of Studies",
        period: "2003 - 2005",
        description: "If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
        rating: "4.30/5"
    }
];

export default function Experience() {
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
                    <User className="w-4 h-4 text-[var(--foreground)]" />
                    <h3 className="text-xs font-medium tracking-wide text-[var(--foreground)] uppercase">
                        MyResume
                    </h3>
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
                    Education & <span className="text-[var(--accent)]">Experience</span>
                </h2>
            </motion.div>

            {/* Timeline */}
            <div className="relative mt-12">
                {/* Timeline Line */}
                <div className="absolute left-[7px] top-8 bottom-8 w-[1px] bg-[var(--border)]" />

                {/* Experience Items */}
                <div className="space-y-8">
                    {experiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="relative group/item"
                        >
                            {/* Timeline Dot - Gray by default, Pink on hover */}
                            <div className="absolute left-0 top-7 w-[15px] h-[15px] rounded-full bg-[#3a3a3a] border-[3px] border-[var(--background)] z-10 group-hover/item:bg-[var(--accent)] transition-colors duration-300" />

                            {/* Content Card */}
                            <div className="ml-12 bg-[#1f1f1f] border border-[#2a2a2a] rounded-lg p-7 hover:border-[var(--accent)]/30 transition-all duration-300">
                                <div className="flex items-start justify-between gap-6 mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-[var(--foreground)] mb-2.5 leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-[var(--muted)]/70">
                                            {item.company} <span className="text-[var(--muted)]/50">({item.period})</span>
                                        </p>
                                    </div>

                                    {/* Rating Badge */}
                                    {item.rating && (
                                        <div className="flex-shrink-0 px-3.5 py-1.5 bg-[#3a3a3a] group-hover/item:bg-[var(--accent)] text-white text-xs font-bold rounded shadow-sm transition-all duration-300">
                                            {item.rating}
                                        </div>
                                    )}
                                </div>

                                <p className="text-[var(--muted)]/70 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
