import React from "react";
import Section from "../components/Section.jsx";
import { aboutMe } from "../data/portfolioData.jsx";

export const AboutSection = () => {
  return (
    <Section id="about" title={aboutMe.title} icon={aboutMe.icon}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* ---------------- LEFT : TEXT ---------------- */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p className="text-lg">{aboutMe.description}</p>

          {aboutMe.story.map((line, index) => (
            <p key={index} className="text-gray-400">
              {line}
            </p>
          ))}
        </div>

        {/* ---------------- RIGHT : FIXED IMAGE LAYOUT ---------------- */}
        <div className="grid grid-cols-2 gap-4">

          {/* Top row – tall vertical rectangles */}
          <img
            src={aboutMe.images[0]}
            alt="About 1"
            className="w-full h-80 object-cover rounded-xl shadow-lg border border-gray-700"
          />

          <img
            src={aboutMe.images[1]}
            alt="About 2"
            className="w-full h-80 object-cover rounded-xl shadow-lg border border-gray-700"
          />

          {/* Bottom row – small horizontal rectangles */}
          <img
            src={aboutMe.images[2]}
            alt="About 3"
            className="w-full h-52 object-cover rounded-xl shadow-lg border border-gray-700"
          />

          <img
            src={aboutMe.images[3]}
            alt="About 4"
            className="w-full h-52 object-cover rounded-xl shadow-lg border border-gray-700"
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
