import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Hero = () => {
  const { name, role, headline, bio, badge, github, linkedin, email } = portfolioData;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background grid + gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-transparent to-[#0a0f1e]" />
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[2px]"
        >
          <div className="w-full h-full rounded-full bg-[#0d1427] flex items-center justify-center text-3xl font-bold text-white">
            PP
          </div>
        </motion.div>

        {/* Student badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {badge}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
            {name.split(" ")[0]}
          </span>{" "}
          Patel
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 mb-4"
        >
          {role}
        </motion.p>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-5 leading-relaxed"
        >
          {headline}
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-xl border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800/50"
          >
            Contact Me
          </button>
          <a
            href={portfolioData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-600 text-slate-400 hover:text-white font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 hover:bg-slate-800/50"
          >
            <Download size={15} />
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full border border-slate-700 hover:border-slate-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:bg-slate-800 hover:scale-110"
          >
            <Github size={18} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-slate-700 hover:border-blue-500/50 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-200 hover:bg-blue-500/10 hover:scale-110"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full border border-slate-700 hover:border-indigo-500/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all duration-200 hover:bg-indigo-500/10 hover:scale-110"
          >
            <Mail size={18} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 text-xs"
        >
          <span>Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
