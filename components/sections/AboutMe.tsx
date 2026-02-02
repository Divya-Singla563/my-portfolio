"use client";

import { motion } from "framer-motion";
import { UserCircle, Download } from "lucide-react";

export default function AboutMe() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Divya Resume.pdf";
    link.download = "Divya_Singla_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full py-6 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <UserCircle className="w-6 h-6 " />

          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
            About
          </h3>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
          About <span className="text-[var(--accent)]">Me</span>
        </h2>

        <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed mb-6">
          Full Stack Developer with 3+ years of hands-on experience in
          designing, developing, and deploying scalable web applications.
          Proficient in front-end technologies like React Native, React JS,
          Javascript, HTML, CSS, SCSS and skilled in back-end development using
          Node.js and Express. Experienced in building RESTful APIs, integrating
          databases, and optimizing application performance.
        </p>

        {/* Download Resume Button */}
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleDownload}
          className="group inline-flex items-center gap-3 px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium shadow-lg shadow-[var(--accent)]/30 hover:shadow-xl hover:shadow-[var(--accent)]/50 transition-all"
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          <span>Download Resume</span>
        </motion.button>
      </motion.div>
    </section>
  );
}
