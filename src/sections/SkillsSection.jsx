import React from "react";
import Section from "../components/Section.jsx";
import { skills } from "../data/portfolioData.jsx";
import { Code2, Cpu, Wrench, Languages, Sparkles } from "lucide-react";
import SkillCloud from "../components/SkillCloud";

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

          <div>
            <CategoryTitle icon={Code2} title="Programming Languages" />
            <SkillChips items={skills.languages} />
          </div>

          <div>
            <CategoryTitle icon={Cpu} title="Web Technologies" />
            <SkillChips items={skills.web} />
          </div>

          <div>
            <CategoryTitle icon={Sparkles} title="Frameworks & Libraries" />
            <SkillChips items={skills.frameworks} />
          </div>

          <div>
            <CategoryTitle icon={Wrench} title="Databases" />
            <SkillChips items={skills.databases} />
          </div>

          <div>
            <CategoryTitle icon={Wrench} title="Tools & Platforms" />
            <SkillChips items={skills.tools} />
          </div>

          <div>
            <CategoryTitle icon={Languages} title="Spoken Languages" />
            <SkillChips items={skills.spoken} />
          </div>

        </div>
      </div>
    </Section>
  );
};

c
