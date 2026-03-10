import { motion } from "framer-motion";
import { Construction } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

// Badge color map
const badgeColors = {
  cyan:    "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  violet:  "bg-violet-500/15 text-violet-300 border-violet-500/30",
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  indigo:  "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
};

const techColors = [
  "bg-slate-800 text-slate-300 border-slate-700",
  "bg-slate-800 text-slate-300 border-slate-700",
];

const ProjectCard = ({ project, index }) => {
  const colors = badgeColors[project.badgeColor] || badgeColors.indigo;
  const isLearning = project.status === "learning";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
        isLearning
          ? "border-slate-700/50 bg-slate-900/30 hover:border-slate-600/60 hover:shadow-slate-900/50"
          : "border-slate-700/60 bg-slate-900/50 hover:border-indigo-500/30 hover:shadow-indigo-900/20"
      }`}
    >
      {/* Top accent bar */}
      <div
        className={`h-1 w-full ${
          isLearning
            ? "bg-gradient-to-r from-slate-600 to-slate-500"
            : "bg-gradient-to-r from-indigo-500 to-cyan-400"
        }`}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{project.subtitle}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full border ${colors}`}>
              {project.badge}
            </span>
            {isLearning && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                <Construction size={10} />
                Learning
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-400 font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Projects"
            subtitle="Real builds and learning experiments — solving problems through code."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;
