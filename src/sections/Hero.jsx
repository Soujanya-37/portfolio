import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 bg-[#0c0f1a]"
    >
      {/* --- Intro Text --- */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
      >
        Hi, I'm <span className="text-purple-400">{personalInfo.name}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        Aspiring Software Engineer | Learning UI/UX & Full-Stack Development
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-4 text-gray-400 max-w-2xl leading-relaxed"
      >
       I’m a third-year CS student with a strong interest in frontend development, UI/UX design, and problem-solving. I enjoy working on real-world projects, exploring modern tools, and participating in hackathons where I learn, collaborate, and grow. I believe in building solutions that are simple, useful, and well-designed.
      </motion.p>

      {/* --- Buttons --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-200"
        >
          View My Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800 text-white font-medium transition-all duration-200"
        >
          Contact Me
        </a>
      </motion.div>

      {/* --- Profile Image --- */}
      {/* --- Professional Profile Image (Improved Alignment) --- */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  className="mt-10 flex justify-center"
>
  <img
    src={personalInfo.photo}
    alt="Soujanya portrait"
    className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-xl border border-gray-700 mx-auto"
  />
</motion.div>

    </section>
  );
};

export default Hero;
