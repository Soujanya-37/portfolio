import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Add default value `tech = []` to prevent .map() error if tech is undefined
const ProjectCard = ({ title, description, tech = [], projectLink }) => (
  <div className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500 border border-transparent">
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {/* This map is now safe, as 'tech' will default to [] if not provided */}
        {tech.map((t) => (
          <span key={t} className="text-xs font-mono bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full border border-blue-800">
            {t}
          </span>
        ))}
      </div>
    </div>
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 inline-flex items-center group font-medium hover:text-blue-300 transition-colors"
    >
      View Project
      <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  </div>
);

export default ProjectCard;

