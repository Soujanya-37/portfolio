import React from "react";

const skills = [
  "Java", "Python", "C", "SQL",
  "React.js", "Node.js", "JavaScript", "HTML", "CSS",
  "Tailwind CSS", "Bootstrap",
  "GitHub", "VS Code", "Figma", "Vercel",
  "MySQL", "MongoDB",
  "UI/UX Design",
  "Kannada", "English", "Hindi", "Konkani"
];

const SkillCloud = () => {
  return (
    <div className="relative w-full h-64 mt-10 mb-16">
      {skills.map((skill, index) => {
        const randomX = Math.random() * 80 + 10;  
        const randomY = Math.random() * 50 + 10;  
        const delay = Math.random() * 5;          

        return (
          <span
            key={index}
            className="
              absolute text-sm md:text-base font-medium 
              text-blue-300 opacity-80 hover:opacity-100 
              transition duration-300
              animate-float
            "
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              animationDelay: `${delay}s`,
            }}
          >
            {skill}
          </span>
        );
      })}
    </div>
  );
};

export default SkillCloud;
