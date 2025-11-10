import React from 'react';
import Section from '../components/Section.jsx';
import { achievements } from '../data/portfolioData.js';
import { Award } from 'lucide-react'; // Make sure Award icon is imported if needed, though it's pulled from data

const AchievementsSection = () => (
  <Section 
    id="achievements" 
    title={achievements.title} 
    icon={achievements.icon} 
    animate 
    className="bg-gray-800"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {achievements.items.map((ach, index) => (
        <div 
          key={`achievement-${index}-${ach.substring(0, 20)}`} 
          className="flex items-start bg-gray-900 p-5 rounded-lg shadow-md border border-gray-700 hover:border-blue-600 transition-colors duration-200"
        >
          {/* Using the icon from the data object, but Award is a good fallback */}
          <Award className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
          <p className="text-lg text-gray-300">{ach}</p>
        </div>
      ))}
    </div>
  </Section>
);


export { AchievementsSection };
