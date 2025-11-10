import React from 'react';
import { Briefcase } from 'lucide-react';
// FIX 1: Using relative paths WITH file extensions
import Section from '../components/Section.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';
import { experiences } from '../data/portfolioData.js'; 

const ExperienceSection = () => (
  <Section 
    id="experience" 
    title={experiences.title} 
    // FIX 2: Pass the component type (experiences.icon) directly,
    // instead of creating an element here.
    icon={experiences.icon} 
    animate
  >
    <div className="relative border-l-2 border-gray-700 pl-8">
      {/* This code expects 'experiences' from your data file to be an object 
        with a key 'items' that is an array: { title: "...", icon: ..., items: [...] }
      */}
      {experiences.items.map((exp, index) => (
        <div key={index} className="mb-10 last:mb-0 relative group">
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-10 top-0 mt-1 ring-4 ring-gray-900 z-10 group-hover:bg-blue-300 transition-colors duration-200"></div>
          <ExperienceCard 
            role={exp.role}
            company={exp.company}
            location={exp.location}
            date={exp.date}
            details={exp.details}
            links={exp.links}
          />
        </div>
      ))}
    </div>
  </Section>
);

export { ExperienceSection }; // FIX 3: Using named export

