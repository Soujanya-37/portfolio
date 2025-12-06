import React from 'react';
// --- FIX: Corrected all paths to be relative and use named imports ---
import { Navbar } from './sections/Navbar.jsx';
import { Hero } from "./sections/Hero.jsx";


import { AboutSection } from './sections/AboutSection.jsx';
import { SkillsSection } from './sections/SkillsSection.jsx';
import { ExperienceSection } from './sections/ExperienceSection.jsx';
import { ProjectsSection } from './sections/ProjectsSection.jsx';
import { EducationSection } from './sections/EducationSection.jsx';
import HackathonsSection from "./sections/HackathonsSection.jsx";

import { AchievementsSection } from './sections/AchievementsSection.jsx';
import { ContactSection } from './sections/ContactSection.jsx';
import { Footer } from './sections/Footer.jsx';

export default function App() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" }, // FIX: Corrected typo 'name:S:' to 'name:'
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 antialiased font-sans">
      <Navbar navLinks={navLinks} />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <HackathonsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

