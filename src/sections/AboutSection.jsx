import React from 'react';
import { User } from 'lucide-react';
// FIX: Using relative paths (../) WITHOUT file extensions
import Section from '../components/Section';
import { aboutMe } from '../data/portfolioData';

const AboutSection = () => (
  <Section 
    id="about" 
    title={aboutMe.title} 
    icon={aboutMe.icon} 
    animate
  >
    {/* This component reads 'aboutMe' from your data file.
      That data should be an object: { title: "...", icon: ..., description: "...", story: [...] }
    */}
    <div className="max-w-4xl mx-auto text-lg text-gray-300 space-y-4">
      <p>{aboutMe.description}</p>
      {aboutMe.story.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  </Section>
);

export { AboutSection }; // FIX: Using named export

