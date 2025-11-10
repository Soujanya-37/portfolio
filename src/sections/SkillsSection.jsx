import React from 'react';
// Import icons used in this section
import { 
  Code, 
  Zap, 
  BookOpen, 
  Briefcase, 
  User 
} from 'lucide-react';

// FIX: Using relative paths WITHOUT extensions
import Section from '../components/Section';
import SkillPill from '../components/SkillPill';
import { skills } from '../data/portfolioData'; 

const SkillsSection = () => (
  <Section 
    id="skills" 
    title={skills.title} 
    icon={skills.icon} 
    animate 
    className="bg-gray-800"
  >
    <div className="mb-10">
      <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">My Core Toolkit</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.mainSkills.map(skill => (
          <SkillPill key={skill} skill={skill} />
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skills.categories.map((category) => (
        <div key={category.name}>
          <h3 className="text-lg font-medium text-blue-400 mb-3 flex items-center">
            {/* Dynamically create the icon component */}
            {React.createElement(category.icon, { className: "w-5 h-5 mr-2" })} 
            {category.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.items.map(skill => <SkillPill key={skill} skill={skill} />)}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export { SkillsSection }; // FIX: Using named export

