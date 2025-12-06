// IMPORT ICONS
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  User,
  Zap,
  BookOpen,
  Github,
  Linkedin,
  Mail,
  Phone,
  Instagram
} from "lucide-react";

// ---------------------------------------------
// PERSONAL INFO
// ---------------------------------------------
export const personalInfo = {
  name: "Soujanya Shanbhag",
  title: "Aspiring Software Engineer",
  tagline:
    "Software developer turning ideas into intuitive applications.",
  location: "Sirsi, Karnataka, India",
  email: "shanbhagsoujanya78@gmail.com",
  phone: "+91 9482548249",
  linkedin: "https://www.linkedin.com/in/soujanya-shanbhag-04ab33290/",
  github: "https://github.com/Soujanya-37",
  photo: "/soujanya.jpeg"
};

// ---------------------------------------------
// ABOUT SECTION
// ---------------------------------------------
export const aboutMe = {
  title: "About Me",
  icon: User,

  description:
    "I am Soujanya Vishnu Shanbhag, an enthusiastic and driven third-year Computer Science and Design student at PES Institute of Technology and Management. I blend strong technical skills with a deep interest in human-centered design. I enjoy building impactful digital products, participating in hackathons, and continuously improving through hands-on learning.",

  story: [
    "My engineering journey began with academic excellence, earning a 9.5 CGPA in my first year, which strengthened my foundation in core Computer Science subjects.",
    "During my second year, I started applying my skills in real projects and competitions. My team, 'InnovateX', became a national finalist in the Smart India Hackathon (SIH) 2024. I also participated in multiple national and state-level hackathons at BITS Pilani, SIET Tumkur, MCE Hassan, and JNNCE Shivamogga.",
    "Now in my third year, I am focused on gaining industry exposure. I have completed internships as a UI/UX Design Intern at Zoro Innovation and as a Front-End Development Intern at CodexIntern, where I built React-based applications and sharpened my design workflow."
  ],

  images: [
    "/about/img1.jpeg",
    "/about/img3.jpeg",
    "/about/img2.jpeg",
    "/hackathons/siet-2.jpeg"
  ]
};

// ---------------------------------------------
// SKILLS (Improved & Organized)
// ---------------------------------------------
export const skills = {
  core: [
    "Java",
    "Python",
    "JavaScript",
    "React.js",
    "UI/UX Design",
    "Tailwind CSS",
    "Git & GitHub"
  ],

  languages: ["Java", "Python", "C", "SQL"],

  web: ["HTML", "CSS", "JavaScript", "Responsive Design"],

  frameworks: ["React.js", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS"],

  databases: ["MySQL", "MongoDB"],

  tools: ["VS Code", "GitHub", "Figma", "Vercel", "Postman"],

  spoken: ["Kannada", "English", "Hindi", "Konkani"]
};


export const experiences = {
  title: "Work Experience & Internships",
  icon: Briefcase,
  items: [
    {
      role: "Front-End Development Intern",
      company: "CodeXIntern",
      date: "Aug 1, 2025 – Aug 31, 2025",

      details: [
        "Developed 3 scalable React applications using modern component patterns.",
        "Implemented multilingual translation using RapidAPI to enhance accessibility.",
        "Built a Random String Generator using optimized React hooks such as useCallback and useEffect.",
        "Integrated client-side routing with react-router-dom for seamless navigation."
      ],

      // ⭐ NEW — Internship Images
      images: [
        "/internships/codex/preview-1.png",
        "/internships/codex/preview-2.png",
        "/internships/codex/preview-3.png"
      ],

      // ⭐ NEW — Certificate
      certificate: "/certificates/codexintern-cert.jpeg",

      // ⭐ NEW — Project GitHub Repos
      githubLinks: [
        { name: "Text Translator App", url: "https://github.com/your-repo" },
        { name: "Random String Generator", url: "https://github.com/your-repo" },
        { name: "Client-Side Routing App", url: "https://github.com/your-repo" }
      ],

      // Optional button links
      links: [
        { name: "Letter of Recommendation", url: "#" }
      ]
    },

    {
      role: "UI/UX Design Intern",
      company: "Zoro Innovation",
      location: "Pan India (Online)",
      date: "Jul 6, 2025 – Aug 31, 2025",

      details: [
        "Designed modern responsive UI components and dashboard layouts using Figma.",
        "Collaborated with engineering teams to ensure pixel-perfect design-to-code handoff.",
        "Created reusable design systems aligned with company branding."
      ],

      // ⭐ NEW — Internship Images (Figma work previews)
      images: [
        "/internships/zoro/ui-1.png",
        "/internships/zoro/ui-2.png",
        "/internships/zoro/ui-3.png"
      ],

      // ⭐ NEW — Internship Certificate
      certificate: "/certificates/zoro-cert.jpeg",

      githubLinks: [], // UI/UX work may not need GitHub, but structure stays

      links: [
        { name: "Internship Certificate", url: "#" }
      ]
    }
  ]
};


export const projects = {
  title: "Projects & Creations",
  icon: Code,
  items: [
    {
      title: "DocuLink",
      description:
        "Architected a full-stack, real-time document collaboration platform using Firebase, Clerk, and Groq AI. Includes version control, role-based access, and rich-text editing with Quill.js.",
      tech: ["React", "Firebase", "Quill.js", "Groq AI", "Clerk", "Tailwind CSS"],
      github: "https://github.com/Soujanya-37/DocuLink",
      liveDemo: "",
      badge: "Full Stack",
      images: [
        "/projects/doculink-1.png",
        "/projects/doculink-2.png",
      ],
    },

    {
      title: "Adroit Achievers – Student Skill Marketplace",
      description:
        "A full-stack student collaboration and learning platform developed during the BITS Pilani National Hackathon. Features skill-sharing, mentorship booking, resource library, and user dashboards.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      github: "https://github.com/Soujanya-37/Adroit_Achievers",
      liveDemo: "",
      badge: "Hackathon Project",
      images: [
        "/projects/adroit-1.png",
        "/projects/adroit-2.png"
      ],
    },

    {
      title: "Missing People Finder",
      description:
        "An ML-based face comparison and missing person detection system using OpenCV and feature-matching algorithms. Users upload images, and the system identifies matches from stored datasets.",
      tech: ["Python", "OpenCV", "Flask", "NumPy"],
      github: "https://github.com/Soujanya-37/Find_Missing_People",
      liveDemo: "",
      badge: "AI / ML Project",
      images: [
        "/projects/missing-1.png",
        "/projects/missing-2.png"
      ],
    },

    {
      title: "JavaChatApp",
      description:
        "A real-time multi-client chat application built using core Java, socket programming, and multithreading. Supports multiple active connections and efficient message broadcasting.",
      tech: ["Java", "Sockets", "Multithreading"],
      github: "https://github.com/Soujanya-37/JavaChatApp",
      liveDemo: "",
      badge: "Networking",
      images: ["/projects/chatapp-ui.png"],
    },

    {
      title: "TrafficSim",
      description:
        "A Python-based traffic flow simulation system that models congestion, analyzes travel time, and visualizes patterns using algorithms for signal timing optimization.",
      tech: ["Python", "Simulation Algorithms"],
      github: "https://github.com/Soujanya-37/TrafficSim",
      liveDemo: "",
      badge: "Simulation",
      images: ["/projects/traffic-sim.png"],
    },

    {
      title: "PomodoroTimer",
      description:
        "A desktop productivity app implementing the Pomodoro Technique with customizable intervals, alerts, and a minimal Tkinter-based UI.",
      tech: ["Python", "Tkinter"],
      github: "https://github.com/Soujanya-37/PomodoroTimer",
      liveDemo: "",
      badge: "Productivity",
      images: ["/projects/pomodoro-ui.png"],
    },

    {
      title: "AnyLangTranslator",
      description:
        "A multilingual text translator built using HTML, CSS, JavaScript, and RapidAPI. Features responsive UI, language auto-detection, and fast translations.",
      tech: ["HTML", "CSS", "JavaScript", "RapidAPI"],
      github: "https://github.com/Soujanya-37/AnyLangTranslator-CODEXINTERN",
      liveDemo: "",
      badge: "API Integration",
      images: ["/projects/translator-ui.png"],
    },

    {
      title: "Stringify – Random String Generator",
      description:
        "A React-based random string generator that lets users customize length, character sets, and copy-to-clipboard functionality. Built with optimized React hooks.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Soujanya-37/Stringify-CODEXINTERN",
      liveDemo: "",
      badge: "React App",
      images: ["/projects/stringify.png"],
    },

    {
      title: "RouteCraft – Client-Side Routing App",
      description:
        "A single-page React application demonstrating dynamic client-side routing using react-router-dom. Includes nested routes, protected routes, and smooth page transitions.",
      tech: ["React", "react-router-dom", "JavaScript"],
      github: "https://github.com/Soujanya-37/RouteCraft-CODEXINTERN",
      liveDemo: "",
      badge: "Frontend",
      images: ["/projects/routecraft.png"],
    }
  ]
};


export const education = {
  title: "Academic Journey",
  icon: GraduationCap,
  items: [
    {
      institution: "PES INSTITUTE OF TECHNOLOGY AND MANAGEMENT, Shivamogga",
      degree: "B.E in Computer Science and Design",
      date: "2023 - 2027 (Expected)",
      gpa: "9.35/ 10.00",
      description:
        "Pursuing Computer Science and Design with focus on Software Development and User Experience. Key coursework includes Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering & System Design, Artificial Intelligence, UI/UX Design, Operating Systems, and Computer Networks.",
    },
    {
      institution: "Marikamba Govt PU College, Sirsi",
      degree: "PUC (12th Grade)",
      date: "2023",
      percentage: "85.33%",
      description:
        "Completed Pre-University course with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
    },
    {
      institution: "Shri Kalika Bhavani English Medium High School, Sirsi",
      degree: "SSLC (10th Grade)",
      date: "2021",
      percentage: "91.36%",
      description: "Completed secondary school education with distinction.",
    },
  ],
};

export const achievements = {
  title: "Highlights & Recognitions",
  icon: Award,

  items: [
    {
      title: "Smart India Hackathon Finalist (2024)",
      description:
        "Represented Team InnovateX in the national grand finale at NIET, Greater Noida. Developed an AI-powered cyber forensics solution, showcasing strong problem-solving, innovation, and teamwork under pressure.",
      badge: "National Finalist",
      images: [
        "/achievements/sih-team.jpg",
        "/achievements/sih-stage.jpg"
      ],
      certificate: "/certificates/sih-cert.jpeg"
    },

    {
      title: "VTU First-Year Topper",
      description:
        "Earned a CGPA of 9.5 in the first year and received the Certificate of Excellence for outstanding academic performance across all core engineering subjects.",
      badge: "Academic Excellence",
      certificate: "/certificates/vtu-topper.jpeg",
      images: [
        "/achievements/topper-award.jpg"
      ]
    },

    {
      title: "NPTEL Certifications",
      description:
        "Secured 'Silver Elite' in Programming in Java and 'Elite' in Blockchain and Its Applications. Demonstrated strong command over backend concepts, distributed systems, and cryptographic foundations.",
      badge: "Silver Elite / Elite",
      certificate: "/certificates/nptel-java.jpeg",
      images: [
        "/achievements/nptel-java.png",
        "/achievements/nptel-blockchain.png"
      ]
    },

    {
      title: "Dean’s List Honoree",
      description:
        "Recognized consistently for exceptional performance and dedication throughout the degree program, reflecting academic discipline and a strong passion for learning.",
      badge: "Dean’s List",
      images: [
        "/achievements/deanslist.jpg"
      ]
    },

    {
      title: "AI Task Force Member – PESITM",
      description:
        "Selected as part of the institute’s AI Task Force, contributing to AI-driven research, mentoring peers, and supporting innovation-led initiatives.",
      badge: "AI Task Force",
      images: [
        "/achievements/ai-taskforce.jpg"
      ]
    }
  ]
};


// Export hackathons data
export const hackathons = {
  title: "Hackathon Journey",
  icon: Code,
  description:
    "I have actively participated in national and state-level hackathons, building real-world solutions under pressure while collaborating with diverse teams.",

  events: [

    // ⭐ Shridevi National Hackathon
    {
      name: "Shridevi Institute National Hackathon",
      location: "SIET, Tumkur",
      badge: "National Level",
      project: "Student Mental Health & Wellness Platform",

      description:
        "Developed a mental wellness platform offering anonymous self-help tools, emotional support modules, and student counseling resources aimed at improving campus well-being.",

      images: [
        "/hackathons/siet-1.jpeg",
        "/hackathons/siet-2.jpeg",
        "/hackathons/siet-3.jpeg",
        "/hackathons/siet-4.jpeg"
      ]
    },

    // ⭐ MCE State-Level Hackathon
    {
      name: "Malenadu College State-Level Hackathon",
      location: "MCE, Hassan",
      badge: "State Level",
      project: "Student Support & Collaboration Portal",

      description:
        "Built a collaborative student portal where learners could ask questions, share resources, and interact with peers and mentors for academic problem-solving.",

      images: [
        "/hackathons/mce-1.jpeg",
        "/hackathons/mce-2.jpeg"
      ]
    },
    
    // ⭐ JNNCE Technical Quiz
    {
      name: "JNNCE Technical Quiz",
      location: "JNNCE, Shivamogga",
      badge: "State Level",

      description:
        "Participated in an on-site technical quiz that tested knowledge of Java, Data Structures, Algorithms, and core CS fundamentals.",

      images: [
        "/hackathons/quiz1.jpeg",
        "/hackathons/quiz2.jpeg"
      ]
    },

    // ⭐ Smart India Hackathon
    {
      name: "Smart India Hackathon 2024",
      location: "NIET, Greater Noida",
      badge: "National Finalist",
      project: "AxiomTrace – Cyber Triage Tool",

      description:
        "Competed in the National Finale representing Team InnovateX. Built 'AxiomTrace,' an AI-driven cyber forensics platform capable of tracing real hosting providers of malicious websites using machine learning and automated metadata extraction.",

      images: [
        "/hackathons/sih-team2.jpeg"
      ]
    },

    // ⭐ BITS Pilani Hackathon
    {
      name: "TechXAccelerate – BITS PILANI National Hackathon",
      location: "BITS Pilani, Hyderabad",
      badge: "National Level",
      project: "Adroit Achievers",

      description:
        "Built 'Adroit Achievers,' a student learning and collaboration platform enabling peer-to-peer learning, mentorship, resource sharing, and academic growth tracking.",

      images: [
        "/hackathons/bits-team.jpeg"
      ]
    } 
    

  ]
};


export const certificates = {
  title: "Certificates",
  icon: Award,

  items: [
    {
      name: "NPTEL – Programming in Java",
      issuer: "NPTEL / IIT",
      year: 2024,
      badge: "Silver Elite",
      images: [
        "/certificates/nptel-java.png",     // Main certificate
        "/certificates/nptel-java-score.png" // Optional scorecard
      ]
    },
    {
      name: "NPTEL – Blockchain & Its Applications",
      issuer: "NPTEL / IIT",
      year: 2024,
      badge: "Elite",
      images: [
        "/certificates/nptel-blockchain.png"
      ]
    },
    {
      name: "NPTEL – Cloud Computing",
      issuer: "NPTEL / IIT",
      year: 2024,
      images: [
        "/certificates/nptel-cloud.png"
      ]
    },
    {
      name: "UI/UX Design Internship Certificate",
      issuer: "Zoro Innovation",
      year: 2025,
      images: [
        "/certificates/zoro-cert.jpeg"
      ]
    },
    {
      name: "Front-End Development Internship Certificate",
      issuer: "CodeXIntern",
      year: 2025,
      images: [
        "/certificates/codexintern-cert.jpeg"
      ]
    },
    {
      name: "Smart India Hackathon Finalist Certificate",
      issuer: "SIH 2024",
      year: 2024,
      badge: "National Finalist",
      images: [
        "/certificates/sih-cert.jpeg"
      ]
    }
  ]
};


// --- Navigation Links ---
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

// --- Contact Icons ---
export const contactIcons = [
  {
    name: "GitHub",
    icon: Github,
    href: personalInfo.github,
    color: "#fff",
    hoverColor: "#9b59b6",
    gradient: "from-[#6e38e0] to-[#a56bff]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: personalInfo.linkedin,
    color: "#fff",
    hoverColor: "#0a66c2",
    gradient: "from-[#1d4ed8] to-[#60a5fa]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/soujanya_shanbhag/", // <-- add your username here
    color: "#fff",
    hoverColor: "#e1306c",
    gradient: "from-[#f09433] via-[#e6683c] to-[#dc2743]",
  },
  {
    name: "Email",
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    color: "#fff",
    hoverColor: "#e4e4e4",
    gradient: "from-[#6366f1] to-[#818cf8]",
  },
  {
    name: "Phone",
    icon: Phone,
    href: `tel:${personalInfo.phone}`,
    color: "#fff",
    hoverColor: "#22c55e",
    gradient: "from-[#4ade80] to-[#22c55e]",
  },
];


