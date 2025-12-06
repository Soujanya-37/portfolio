const skills = [
  "Java",
  "Python",
  "React.js",
  "JavaScript",
  "UI/UX Design",
  "Tailwind CSS",
  "GitHub",
  "C",
  "SQL",
  "Node.js",
  "MongoDB",
  "Figma",
  "Vercel"
];

const SkillCloud = () => {
  return (
    <div className="relative w-full h-44 mt-10 flex justify-center items-center">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="
            absolute px-4 py-2 rounded-full text-sm font-medium
            bg-purple-700/30 border border-purple-500/30 text-purple-200
            animate-float
          "
          style={{
            top: `${Math.random() * 70}%`,
            left: `${Math.random() * 70}%`,
            animationDelay: `${idx * 0.4}s`,
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillCloud;
