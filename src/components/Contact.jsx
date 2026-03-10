import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const { email, github, linkedin } = portfolioData;

  const contactLinks = [
    {
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      icon: <Mail size={18} />,
      color: "text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/10 hover:border-indigo-500/60",
    },
    {
      label: "GitHub",
      value: "pinkesh9805",
      href: github,
      icon: <Github size={18} />,
      color: "text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-slate-500",
    },
    {
      label: "LinkedIn",
      value: "Pinkesh Patel",
      href: linkedin,
      icon: <Linkedin size={18} />,
      color: "text-blue-300 border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/60",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Get In Touch"
            subtitle="I am always open to connecting, collaborating, and learning from new opportunities."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="text-center">
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you are a fellow student, a developer, a recruiter, or just curious about my work,
              feel free to reach out. I am always happy to chat about tech, projects, or collaboration ideas.
            </p>
          </div>

          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${link.color}`}
              >
                <span className="shrink-0">{link.icon}</span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-0.5">
                    {link.label}
                  </div>
                  <div className="text-sm font-medium">{link.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium justify-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to internships, collaborations and learning opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
