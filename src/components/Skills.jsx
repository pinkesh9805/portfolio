import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

// Color map for each skill category accent
const categoryColors = {
  "Programming":          { bg: "bg-violet-500/10",  border: "border-violet-500/30",  text: "text-violet-300",  dot: "bg-violet-400" },
  "Frontend":             { bg: "bg-cyan-500/10",    border: "border-cyan-500/30",    text: "text-cyan-300",    dot: "bg-cyan-400" },
  "Backend":              { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-300", dot: "bg-emerald-400" },
  "Databases":            { bg: "bg-yellow-500/10",  border: "border-yellow-500/30",  text: "text-yellow-300",  dot: "bg-yellow-400" },
  "Cybersecurity Tools":  { bg: "bg-red-500/10",     border: "border-red-500/30",     text: "text-red-300",     dot: "bg-red-400" },
  "Developer Tools":      { bg: "bg-blue-500/10",    border: "border-blue-500/30",    text: "text-blue-300",    dot: "bg-blue-400" },
  "Concepts":             { bg: "bg-indigo-500/10",  border: "border-indigo-500/30",  text: "text-indigo-300",  dot: "bg-indigo-400" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const Skills = () => {
  const { skills } = portfolioData;
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Skills & Technologies"
            subtitle="The tools and technologies I work with — actively learning and building with each one."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {entries.map(([category, skillList], i) => {
            const colors = categoryColors[category] || categoryColors["Concepts"];
            return (
              <motion.div
                key={category}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className={`group p-5 rounded-2xl border ${colors.border} ${colors.bg} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
                  <h3 className={`text-sm font-semibold uppercase tracking-wider ${colors.text}`}>
                    {category}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-600 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learning note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          Actively expanding my skills through projects, courses, and hands-on experimentation.
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
