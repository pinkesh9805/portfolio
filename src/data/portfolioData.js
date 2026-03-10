// ============================================================
// Portfolio Data — Edit this file to update your portfolio
// ============================================================

export const portfolioData = {
  name: "Pinkesh Alpeshbhai Patel",
  shortName: "Pinkesh Patel",
  role: "AI-ML Developer & Cybersecurity Enthusiast",
  headline: "Building practical digital solutions with AI, cybersecurity, and modern web technologies.",
  bio: "I am a B.Tech Information Technology student passionate about building real-world software projects. My interests include Cybersecurity, AI/ML, Backend Systems, and Generative AI. I enjoy learning by building tools that solve practical problems and improve digital safety.",
  badge: "B.Tech IT Student | 3rd Year | Gujarat, India",
  education: "B.Tech Information Technology — CVM University, Gujarat, India (2023–2027, 3rd Year)",
  university: "CVM University",
  location: "Gujarat, India",
  graduationYear: "2027",
  currentYear: "3rd Year",
  careerGoal: "Penetration Tester & Cybersecurity Developer",

  // Contact
  email: "pinkeshpatel9805@gmail.com",
  github: "https://github.com/pinkesh9805",
  linkedin: "https://linkedin.com/in/pinkesh-patel-533b943a4",
  resume: "https://docs.google.com/document/d/1jzR5Ttcsyb3zy97OshOD-pXBFYP_OYaJ/export?format=pdf",

  // Stats shown in About section
  stats: [
    { label: "Projects", value: "5+" },
    { label: "Student Year", value: "3rd Year" },
    { label: "Passion", value: "100%" },
  ],

  // Skills grouped by category
  skills: {
    "Programming": ["Python", "JavaScript"],
    "Frontend": ["React", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend": ["Node.js", "Express.js", "REST APIs"],
    "Databases": ["MongoDB", "PostgreSQL"],
    "Cybersecurity Tools": ["Nmap", "Burp Suite", "Wireshark", "Linux"],
    "Developer Tools": ["Git", "GitHub", "VS Code"],
    "Concepts": ["AI/ML Basics", "Problem Solving", "Responsive Design", "Agile Basics"],
  },

  // Projects
  projects: [
    {
      title: "Automated Phishing Detector",
      subtitle: "Gmail + Website Scanner",
      badge: "★ Featured",
      badgeColor: "cyan",
      category: "Cybersecurity",
      status: "completed",
      description:
        "Built a phishing detection system that analyzes emails and web links to flag suspicious content and reduce phishing risk. Uses URL heuristics, keyword analysis, and domain reputation checks to provide real-time threat assessment.",
      tech: ["Python", "Flask", "Gmail API", "scikit-learn", "BeautifulSoup", "WHOIS"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Video Summarizer",
      subtitle: "Key Moments Extractor",
      badge: "AI / ML",
      badgeColor: "violet",
      category: "AI / ML",
      status: "completed",
      description:
        "Developed a video summarization tool that extracts key moments from long videos and generates concise highlight clips. Uses ML-based scene detection and transcript analysis to identify important segments automatically.",
      tech: ["Python", "OpenCV", "Whisper API", "NLTK", "FFmpeg", "Transformers"],
      github: "#",
      demo: "#",
    },
    {
      title: "Network Scanner Dashboard",
      subtitle: "Learning Project",
      badge: "Cybersecurity",
      badgeColor: "cyan",
      category: "Cybersecurity",
      status: "learning",
      description:
        "A student-focused learning project for visualizing scan results, open ports, and basic network observations in a simple dashboard. Currently in active development.",
      tech: ["Python", "Nmap", "React", "REST API"],
      github: "#",
      demo: null,
    },
    {
      title: "Secure Notes App",
      subtitle: "Practice Project",
      badge: "Backend / Security",
      badgeColor: "emerald",
      category: "Backend / Security",
      status: "learning",
      description:
        "A simple full-stack practice project focused on authentication, CRUD operations, and secure handling of user data. Great for learning auth flows and secured backend patterns.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "#",
      demo: null,
    },
  ],

  // Journey / Learning Timeline
  journey: [
    {
      year: "2023",
      title: "Started B.Tech in Information Technology",
      description:
        "Enrolled at CVM University, Gujarat. Began exploring programming, web fundamentals, and the vast world of computer science.",
    },
    {
      year: "2024",
      title: "Dived into Cybersecurity & AI/ML",
      description:
        "Started learning ethical hacking concepts, network security tools, and machine learning fundamentals. Built first practical projects.",
    },
    {
      year: "2024–25",
      title: "Built Real-World Projects",
      description:
        "Developed the Automated Phishing Detector and AI Video Summarizer, applying Python, Flask, machine learning, and real APIs to solve practical problems.",
    },
    {
      year: "2025–26",
      title: "Expanding into Full-Stack & Security Dev",
      description:
        "Exploring backend development with Node.js, React frontends, and working toward building more security-focused tools and dashboards.",
    },
    {
      year: "2027",
      title: "Goal: Graduate & Become a Security Developer",
      description:
        "Aiming to graduate with strong skills in penetration testing, cybersecurity development, and AI-powered security solutions.",
    },
  ],

  // Career Goals
  goals: [
    {
      title: "Penetration Testing",
      description:
        "Learn and practice ethical hacking techniques, vulnerability assessment, and network penetration testing methodologies to build real offensive security skills.",
      icon: "Shield",
    },
    {
      title: "Cybersecurity Development",
      description:
        "Build security tools, automation scripts, and dashboards that help identify threats, monitor networks, and improve digital defense capabilities.",
      icon: "Lock",
    },
    {
      title: "AI-Powered Security",
      description:
        "Combine AI/ML with cybersecurity to create intelligent systems that detect anomalies, flag phishing, and automate threat analysis at scale.",
      icon: "Brain",
    },
  ],
};
