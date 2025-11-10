import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles
} from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';
// FIX: Using an absolute path from the project root
import { personalInfo } from '../data/portfolioData.js';

const Hero = () => {
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 200
  });

  return (
    <animated.section 
      id="home" 
      style={springProps} 
      className="relative h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-950 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
<div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>
<div className="absolute bottom-1/2 right-1/3 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-1000"></div>
      </div>
      <div className="relative z-10 text-center px-4 flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <div className="relative">
            {/* Creative background shapes */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-blue-500/20 transform rotate-6 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-purple-500/20 transform -rotate-6 rounded-lg"></div>
            {/* Main image container */}
            <div className="relative w-72 h-96 overflow-hidden rounded-lg border-2 border-blue-500/50 shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-2">
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover object-center transition-all duration-500" 
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
            Hi, I'm <span className="text-blue-400 drop-shadow-lg">{personalInfo.name}</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-300 sm:text-xl md:text-2xl font-light">
            {personalInfo.tagline}
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-7 w-7" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-7 w-7" />
            </a>
            {/* FIX: Ensured the 'href' attribute is correctly formatted and aria-label is clear */}
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="Send an Email"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-7 w-7" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg transform hover:-translate-y-1 transition-all duration-300 md:text-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-blue-600 text-base font-medium rounded-full text-blue-300 bg-transparent hover:bg-blue-900/40 shadow-lg transform hover:-translate-y-1 transition-all duration-300 md:text-lg"
            >
              <Mail className="w-5 h-5 mr-2" /> Contact Me
            </a>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export { Hero };

