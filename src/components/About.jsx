import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target, Lightbulb } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

// Fade-up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  const { university, location, currentYear, graduationYear, careerGoal, stats } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      {/* Subtle section divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeader
            title="About Me"
            subtitle="A passionate student builder on a mission to blend cybersecurity, AI, and practical development."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-4">
          {/* Left: Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="space-y-5"
          >
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              I&apos;m a <span className="text-indigo-400 font-semibold">B.Tech Information Technology</span> student
              at <span className="text-white font-semibold">{university}</span>, currently in my{" "}
              <span className="text-white font-semibold">{currentYear}</span>, graduating in{" "}
              <span className="text-white font-semibold">{graduationYear}</span>.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My technical interests span across <span className="text-cyan-400 font-medium">Cybersecurity</span>,&nbsp;
              <span className="text-violet-400 font-medium">AI/ML</span>, backend systems, and modern web development.
              I approach learning through hands-on projects that solve real problems rather than theoretical study alone.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m a self-driven learner who builds tools, experiments with new technologies, and constantly works
              on improving my technical depth. My career goal is to become a{" "}
              <span className="text-indigo-400 font-medium">{careerGoal}</span> — combining offensive security skills
              with smart AI-powered solutions.
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/60 rounded-lg text-sm text-slate-300 border border-slate-700/60">
                <GraduationCap size={14} className="text-indigo-400" />
                {university}
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/60 rounded-lg text-sm text-slate-300 border border-slate-700/60">
                <MapPin size={14} className="text-cyan-400" />
                {location}
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/60 rounded-lg text-sm text-slate-300 border border-slate-700/60">
                <Target size={14} className="text-violet-400" />
                {careerGoal}
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/60 rounded-lg text-sm text-slate-300 border border-slate-700/60">
                <Lightbulb size={14} className="text-yellow-400" />
                Project-Based Learner
              </span>
            </div>
          </motion.div>

          {/* Right: Stats cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.15, ease: "easeOut" } } }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:border-indigo-500/40 hover:bg-slate-900/70 transition-all duration-300 overflow-hidden"
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}

            {/* Passion note card */}
            <div className="p-6 rounded-2xl border border-slate-800/60 bg-slate-900/40 col-span-1 sm:col-span-3 lg:col-span-1">
              <p className="text-slate-400 text-sm leading-relaxed italic">
                &ldquo;Every line of code I write is a step toward building safer, smarter digital experiences.
                I believe in learning by doing — projects are my classroom.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
