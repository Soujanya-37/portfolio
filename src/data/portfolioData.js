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
} from "lucide-react";

export const personalInfo = {
  name: "Soujanya Shanbhag",
  title: "Aspiring Software Engineer",
  tagline: "Software developer turning ideas into intuitive applications.",
  location: "Sirsi, Karnataka, India",
  email: "shanbhagsoujanya78@gmail.com",
  phone: "+91 9482548249", // <-- UPDATED with country code
  linkedin: "https://www.linkedin.com/in/your-profile", // <-- !! UPDATE THIS !!
  github: "https://github.com/your-username", // <-- !! UPDATE THIS !!

  photo: "/soujanya.jpg.jpeg", // Updated to match the actual file name
};

export const aboutMe = {
  title: "About Me",
  icon: User,
  description:
    "I am Soujanya Vishnu Shanbhag, a passionate and driven third-year Computer Science and Design student at PES Institute of Technology and Management. My journey is focused on blending a strong technical foundation with practical, user-centered design. I thrive in environments where I can collaborate, learn continuously, and apply my skills to build impactful digital products.",
  story: [
    "My engineering journey began with a focus on academic excellence, leading me to become the VTU First-Year Topper with a 9.5 CGPA. This gave me a strong foundation in core computer science concepts.",
    "Building on that, my second year was about applying those concepts in high-pressure environments. My team, 'Innovate'X', became a finalist in the Smart India Hackathon (SIH), and I competed in numerous other state and national-level hackathons.", // <-- !! CRITICAL UPDATE: Changed "I led" to "My team"
    "Now in my third year, I've shifted my focus to gaining industry experience. I recently completed internships as a UI/UX Design Intern at Zoro Innovation, honing my skills in Figma, and as a Front-End Development Intern at CodexIntern, building projects with React and Tailwind CSS.",
  ],
};

export const skills = {
  title: "Skills & Technologies",
  icon: Code,
  mainSkills: [
    "JavaScript",
    "Python",
    "Java",
    "Tailwind CSS",
    "UI/UX Design",
    "GitHub",
  ],
  categories: [
    {
      name: "Programming Languages",
      icon: BookOpen,
      items: ["Java", "Python", "C", "SQL", "HTML/CSS", "JavaScript"],
    },
    {
      name: "Frameworks & Libraries",
      icon: Zap,
      items: ["Next.js", "Node.js", "React.js", "Bootstrap", "Tailwind CSS"],
    },
    {
      name: "Tools & Platforms",
      icon: Briefcase,
      items: ["GitHub", "Figma", "VS Code", "AWS", "Vercel"],
    },
    {
      name: "Spoken Languages",
      icon: User,
      items: ["Kannada", "English", "Hindi", "Konkani"],
    },
  ],
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
        "Developed 3 React-based projects using React & Tailwind CSS, focusing on modern web development practices.",
        "Implemented multilingual translation using RapidAPI in a Text Translator App, enhancing user accessibility.",
        "Built a Random String Generator with advanced React hooks (useState, useCallback, useEffect) for optimal performance.",
        "Integrated client-side routing using react-router-dom, creating seamless navigation experiences.",
      ],
      links: [
        { name: "Letter of Recommendation", url: "#" }, // <-- !! UPDATE THIS !!
      ],
    },
    {
      role: "UI/UX Design Intern",
      company: "Zoro Innovation",
      location: "Pan India (Online)",
      date: "July 6, 2025 – Aug 31, 2025",
      details: [
        "Designed intuitive and responsive web interfaces using Figma, prioritizing user-centered design principles.",
        "Collaborated closely with development teams to ensure pixel-perfect design-to-code consistency across the company's digital platforms.",
      ],
      links: [
        { name: "Internship Certificate", url: "#" }, // <-- !! UPDATE THIS !!
      ],
    },
  ],
};

export const projects = {
  title: "Projects & Creations",
  icon: Code,
  items: [
    {
      title: "DocuLink",
      description: "Architected a full-stack, real-time document collaboration platform with version control. Integrated Quill.js for rich-text editing, Firebase (Firestore) for real-time updates, and Groq AI for intelligent content generation. Features robust version control and role-based access with Clerk.",
      tech: ["React", "Firebase", "Quill.js", "Groq AI", "Clerk", "Tailwind CSS"],
      projectLink: "#"
    },
    {
      title: "LearnXchange - Student Help Platform",
      description: "Architected a scalable, full-stack learning platform using Java and Spring Boot. Features comprehensive RESTful APIs for user management, resource sharing, and mentorship scheduling, fostering a collaborative academic environment.",
      tech: ["Java", "Spring Boot", "RESTful APIs", "SQL", "React"],
      projectLink: "#"
    },
    {
      title: "JavaChatApp",
      description: "A real-time, multi-client chat application built in Java, showcasing advanced concepts like socket programming, multithreading, and efficient data handling for concurrent communication.",
      tech: ["Java", "Sockets", "Multithreading"],
      projectLink: "#"
    },
    {
      title: "TrafficSim",
      description: "A dynamic Python-based simulation that models and visualizes complex traffic flow dynamics. Utilizes algorithms to analyze congestion patterns, optimize signal timings, and improve urban mobility.",
      tech: ["Python", "Simulation Algorithms"],
      projectLink: "#"
    },
    {
      title: "PomodoroTimer",
      description: "A productivity-enhancing tool developed in Python, implementing the Pomodoro Technique. Features customizable work/break intervals, notifications, and a simple UI to boost focus and time management.",
      tech: ["Python", "Tkinter"],
      projectLink: "#"
    },
    {
      title: "AnyLangTranslator",
      description: "A responsive web-based text translator supporting multiple languages. Built with HTML, CSS, and JavaScript, leveraging the RapidAPI for robust translation services and a user-friendly interface.",
      tech: ["HTML", "CSS", "JavaScript", "RapidAPI"],
      projectLink: "#"
    },
    {
      title: "Stringify (Random String Generator)",
      description: "A modern React application for generating random strings based on user-defined criteria. Utilizes React hooks for efficient state management and performance optimization, styled with Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      projectLink: "#"
    },
    {
      title: "RouteCraft (Client-Side Routing App)",
      description: "A demonstration of efficient client-side navigation in React applications using react-router-dom. Features dynamic routing, nested routes, and programmatic navigation for a smooth single-page application experience.",
      tech: ["React", "react-router-dom", "JavaScript"],
      projectLink: "#"
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
    "Smart India Hackathon Finalist (2024): Represented college team \"Innovate'X\" in the national hackathon finals held at NIET, Greater Noida, Uttar Pradesh, showcasing innovation and problem-solving skills.",
    "VTU First-Year Topper: Achieved a CGPA of 9.5 and was awarded a Certificate of Excellence for Academic Performance, demonstrating strong foundational knowledge.",
    "Certified in Advanced Topics: Earned \"Silver Elite\" and \"Elite\" certificates for NPTEL courses on Programming in Java and Blockchain and its Applications, reflecting expertise in cutting-edge technologies.",
    "Dean's List Honoree: Consistently recognized for outstanding academic performance throughout my degree program.",
  ],
};

// Export hackathons data
export const hackathons = {
  title: "Hackathon Journey",
  icon: Code,
  description:
    "I have actively participated in numerous national and state-level hackathons, continuously pushing the boundaries of innovation and problem-solving.",
  events: [
    {
      name: "Smart India Hackathon 2024",
      location: "NIET, Greater Noida",
      achievement: "National Finalist",
      description:
        "As part of the team 'Innovate'X', I competed in the Smart India Hackathon 2024 national finals. Our team demonstrated exceptional technical innovation by developing 'AxiomTrace,' an advanced cyber triage solution that uses AI and machine learning to accurately identify the true hosting providers of suspicious websites.",
    },
    {
      name: "BITS PILANI National Level Hackathon",
      location: "BITS PILANI, Hyderabad", // <-- Standardized location
      project: "Adroit Achievers",
      description:
        "Developed 'Adroit Achievers,' a comprehensive student learning platform. Our team's goal was to create a centralized hub that facilitated peer-to-peer knowledge sharing, provided access to curated academic resources, and included collaborative tools to enhance the student study experience.",
    },
    {
      name: "Shridevi Institute National Level Hackathon",
      location: "Shridevi Institute of Engineering & Technology, Tumkur",
      project: "Student Mental Health & Wellness Website",
      description:
        "Co-developed a platform dedicated to student mental health. The application was designed to provide anonymous access to wellness resources, offer self-help guides, and connect students with support channels, aiming to de-stigmatize mental health and provide accessible help.",
    },
   
    {
      name: "Malenadu College State-Level Hackathon",
      location: "Malenadu College of Engineering, Hassan",
      project: "Student Support & Collaboration Portal",
      description:
        "Designed and built a web-based student help platform. This project focused on fostering a community environment where students could post academic queries, share resources, and connect with peers and mentors to solve problems collaboratively.",
    },
     {
      name: "JNNCE State-Level Hackathon & Technical Quiz",
      location: "Jawaharlal Nehru National College of Engineering, Shivamogga",
      description:
        "Participated in a regional on-site Technical Quiz, which tested my knowledge of core computer science fundamentals and algorithms.",
    },
  ],
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
  { name: "GitHub", icon: Github, href: personalInfo.github },
  { name: "LinkedIn", icon: Linkedin, href: personalInfo.linkedin },
  { name: "Email", icon: Mail, href: `mailto:${personalInfo.email}` },
  { name: "Phone", icon: Phone, href: `tel:${personalInfo.phone}` },
];
