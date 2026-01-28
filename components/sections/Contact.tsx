"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SITE } from "@/lib/constants";
import CustomPhoneInput from "@/components/ui/PhoneInput";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        countryCode: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePhoneChange = (value: string, country: any) => {
        // Extract country code and phone number
        const countryCode = country.dialCode;
        // Remove country code from the full value to get just the phone number
        const phoneNumber = value.replace(countryCode, '');

        setFormData({
            ...formData,
            countryCode: `+${countryCode}`,
            phone: phoneNumber
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            // Using Web3Forms API - Free email service
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    country_code: formData.countryCode,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();
            console.log("Web3Forms result:", result);
            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
                });
                // Reset form
                setFormData({
                    name: "",
                    countryCode: "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again or email me directly at ' + SITE.email
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full py-6 md:py-12">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-14"
            >


                <div className="flex items-center gap-3 mb-6">
                    <Mail className="w-6 h-6 " />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
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
                                <CustomPhoneInput
                                    value={formData.countryCode + formData.phone}
                                    onChange={handlePhoneChange}
                                    placeholder="Phone Number"
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

                        {/* Status Message */}
                        {submitStatus.type && (
                            <div className={`p-4 rounded-lg text-sm ${submitStatus.type === 'success'
                                ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                                : 'bg-red-500/10 border border-red-500/30 text-red-400'
                                }`}>
                                {submitStatus.message}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
