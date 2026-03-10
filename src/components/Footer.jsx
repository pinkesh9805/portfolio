import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const quickLinks = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey",  href: "#journey" },
  { label: "Goals",    href: "#goals" },
  { label: "Contact",  href: "#contact" },
];

const Footer = () => {
  const { shortName, role, github, linkedin, email } = portfolioData;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900/60 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold">
                PP
              </div>
              <div>
                <div className="text-white font-bold text-sm">{shortName}</div>
                <div className="text-slate-500 text-xs">{role}</div>
              </div>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
              A student developer building real-world tools with cybersecurity, AI/ML, and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-500 hover:text-indigo-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Connect</h4>
            <div className="space-y-2.5">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 text-slate-500 hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                <Mail size={14} />
                {email}
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
              >
                <Github size={14} />
                github.com/pinkesh9805
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                <Linkedin size={14} />
                linkedin.com/in/pinkesh-patel
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} {shortName}. Built with
            <Heart size={11} className="text-red-500/70" />
            using React + Tailwind CSS.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg border border-slate-800 hover:border-slate-600 flex items-center justify-center text-slate-600 hover:text-slate-300 transition-all duration-200"
            >
              <Github size={14} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg border border-slate-800 hover:border-blue-500/40 flex items-center justify-center text-slate-600 hover:text-blue-400 transition-all duration-200"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="w-8 h-8 rounded-lg border border-slate-800 hover:border-indigo-500/40 flex items-center justify-center text-slate-600 hover:text-indigo-400 transition-all duration-200"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
