"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

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
                    <Mail className="w-4 h-4 text-[var(--foreground)]" />
                    <h3 className="text-xs font-medium tracking-wide text-[var(--foreground)] uppercase">
                        Contact
                    </h3>
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
                    Let's work <span className="text-[var(--accent)]">Together</span>
                </h2>
            </motion.div>

            {/* Contact Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Side - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden bg-[#1f1f1f] border border-[#2a2a2a]">
                        <Image
                            src="/contact-image.jpg"
                            alt="Contact"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name and Phone Row */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-[var(--foreground)] text-sm placeholder:text-[var(--muted)]/40 focus:outline-none focus:border-[var(--accent)] focus:bg-[#1f1f1f] transition-all duration-300 hover:border-[#3a3a3a]"
                                    required
                                />
                            </div>
                            <div className="group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-[var(--foreground)] text-sm placeholder:text-[var(--muted)]/40 focus:outline-none focus:border-[var(--accent)] focus:bg-[#1f1f1f] transition-all duration-300 hover:border-[#3a3a3a]"
                                />
                            </div>
                        </div>

                        {/* Email and Subject Row */}
                        <div className="grid grid-cols-1  gap-4">
                            <div className="group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-[var(--foreground)] text-sm placeholder:text-[var(--muted)]/40 focus:outline-none focus:border-[var(--accent)] focus:bg-[#1f1f1f] transition-all duration-300 hover:border-[#3a3a3a]"
                                    required
                                />
                            </div>
                            <div className="group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject *"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-[var(--foreground)] text-sm placeholder:text-[var(--muted)]/40 focus:outline-none focus:border-[var(--accent)] focus:bg-[#1f1f1f] transition-all duration-300 hover:border-[#3a3a3a]"
                                    required
                                />
                            </div>
                        </div>

                        {/* Message Textarea */}
                        <div className="group">
                            <textarea
                                name="message"
                                placeholder="Your Message *"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-[var(--foreground)] text-sm placeholder:text-[var(--muted)]/40 focus:outline-none focus:border-[var(--accent)] focus:bg-[#1f1f1f] transition-all duration-300 hover:border-[#3a3a3a] resize-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/20 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
