import { motion } from "framer-motion";
import { Shield, Lock, Brain } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

// Map icon names to actual Lucide components
const iconMap = {
  Shield: Shield,
  Lock: Lock,
  Brain: Brain,
};

// Colors for each card
const cardStyles = [
  {
    border: "border-cyan-500/30",
    hover: "hover:border-cyan-500/50",
    bg: "bg-cyan-500/5",
    iconBg: "bg-cyan-500/15 text-cyan-300",
    title: "text-cyan-300",
    glow: "from-cyan-500/10",
  },
  {
    border: "border-indigo-500/30",
    hover: "hover:border-indigo-500/50",
    bg: "bg-indigo-500/5",
    iconBg: "bg-indigo-500/15 text-indigo-300",
    title: "text-indigo-300",
    glow: "from-indigo-500/10",
  },
  {
    border: "border-violet-500/30",
    hover: "hover:border-violet-500/50",
    bg: "bg-violet-500/5",
    iconBg: "bg-violet-500/15 text-violet-300",
    title: "text-violet-300",
    glow: "from-violet-500/10",
  },
];

const Goals = () => {
  const { goals } = portfolioData;

  return (
    <section id="goals" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Career Focus"
            subtitle="Where I'm headed — the areas I'm building expertise and ambition toward."
          />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {goals.map((goal, i) => {
            const style = cardStyles[i % cardStyles.length];
            const IconComponent = iconMap[goal.icon] || Shield;

            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                className={`group relative p-7 rounded-2xl border ${style.border} ${style.hover} ${style.bg} overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg`}
              >
                {/* Glow background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent size={22} />
                  </div>

                  <h3 className={`text-base font-bold mb-3 ${style.title}`}>{goal.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{goal.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-10 max-w-lg mx-auto"
        >
          These aren&apos;t just goals — they&apos;re the direction every project, course, and line of code is taking me.
        </motion.p>
      </div>
    </section>
  );
};

export default Goals;
