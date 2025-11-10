import React from 'react';
import { GraduationCap } from 'lucide-react';
import Section from '../components/Section'; // FIX: Removed .jsx extension
import { education } from '../data/portfolioData'; // FIX: Removed .js extension

const EducationSection = () => (
  <Section id="education" title={education.title} icon={education.icon} animate>
    <div className="space-y-8">
      {education.items.map((item, index) => (
        <div 
          key={`education-${index}-${item.institution}`}
          className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-4xl mx-auto border border-blue-700/50 relative overflow-hidden"
        >
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-10 animate-spin-slow"></div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-blue-400" /> {item.institution}
          </h3>
          <p className="text-blue-400 font-medium text-lg mt-2">{item.degree}</p>
          <p className="text-gray-400 text-sm mb-4">{item.date}</p>
          {item.gpa && (
            <p className="text-gray-300 text-base mb-2">
              <strong>GPA:</strong> <span className="text-blue-300">{item.gpa}</span>
            </p>
          )}
          {item.percentage && (
            <p className="text-gray-300 text-base mb-2">
              <strong>Percentage:</strong> <span className="text-blue-300">{item.percentage}</span>
            </p>
          )}
          <p className="text-gray-300 text-base mt-4">{item.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export { EducationSection }; // FIX: Using named export

