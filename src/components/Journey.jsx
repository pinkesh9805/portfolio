import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

const Journey = () => {
  const { journey } = portfolioData;

  return (
    <section id="journey" className="py-20 md:py-28 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="My Learning Journey"
            subtitle="A continuous path of building, exploring, and growing — one project at a time."
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-4">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-slate-700/40 to-transparent" />

          <div className="space-y-8">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                className="relative flex gap-6 sm:gap-8 pl-16 sm:pl-20"
              >
                {/* Circle dot */}
                <div className="absolute left-0 top-1 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 ring-4 ring-[#0a0f1e] z-10 absolute left-4 sm:left-6" />
                </div>

                {/* Card */}
                <div className="flex-1 group p-5 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:border-indigo-500/30 hover:bg-slate-900/70 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {item.year}
                    </span>
                    <h3 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 p-5 rounded-2xl border border-slate-800/60 bg-slate-900/40 text-center"
        >
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
            I believe in continuous learning and consistent effort. Every project I take on teaches me something
            new — whether it&apos;s a new tool, a new bug, or a new way to think about problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
