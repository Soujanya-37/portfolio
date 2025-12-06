import React from "react";
import Section from "../components/Section.jsx";
import { skills } from "../data/portfolioData.jsx";
import { Code2, Cpu, Wrench, Languages, Sparkles } from "lucide-react";
import SkillCloud from "../components/skillcloud.jsx";

export const SkillsSection = () => {
  return (
    <Section id="skills">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Sparkles size={32} className="text-purple-400" />
          Skills & Technologies
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          Tools and technologies I use to design, build, and ship impactful digital experiences.
        </p>

        {/* Core Toolkit */}
        <h3 className="text-2xl font-semibold mb-4 text-purple-300">
          My Core Toolkit
        </h3>

        <div className="flex flex-wrap gap-3 mb-12">
          {skills.core.map((item, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-blue-600/20 
              text-blue-300 border border-blue-600/30 
              hover:bg-blue-600/30 transition-all"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Programming Languages */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Code2 size={22} className="text-purple-400" />
              <h4 className="text-xl font-semibold text-white">Programming Languages</h4>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {skills.languages.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 rounded-full bg-purple-600/20 
                  text-purple-300 border border-purple-600/30 
                  hover:bg-purple-600/30 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Cpu size={22} className="text-purple-400" />
              <h4 className="text-xl font-semibold text-white">Web Technologies</h4>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {skills.web.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 rounded-full bg-purple-600/20 
                  text-purple-300 border border-purple-600/30 
                  hover:bg-purple-600/30 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Sparkles size={22} className="text-purple-400" />
              <h4 className="text-xl font-semibold text-white">Frameworks & Libraries</h4>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {skills.frameworks.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 rounded-full bg-purple-600/20 
                  text-purple-300 border border-purple-600/30 
                  hover:bg-purple-600/30 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Wrench size={22} className="text-purple-400" />
              <h4 className="text-xl font-semibold text-white">Databases</h4>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {skills.databases.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 rounded-full bg-purple-600/20 
                  text-purple-300 border border-purple-600/30 
                  hover:bg-purple-600/30 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Wrench size={22} className="text-purple-400" />
              <h4 className="text-xl font-semibold text-white">Tools & Platforms</h4>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {skills.tools.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 rounded-full bg-purple-600/20 
                  text-purple-300 border border-purple-600/30 
                  hover:bg-purple-600/30 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Spoken Languages */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Languages size={22} className="text-purple-400" />
              <h4 className="text-xl font-semibold text-white">Spoken Languages</h4>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {skills.spoken.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 rounded-full bg-purple-600/20 
                  text-purple-300 border border-purple-600/30 
                  hover:bg-purple-600/30 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
