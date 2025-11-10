import React from 'react';
import { ArrowUpRight, ChevronsRight } from 'lucide-react';

const ExperienceCard = ({ role, company, location, date, details, links }) => (
  <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-6 transition-all duration-300 hover:shadow-2xl hover:border-blue-700 border border-transparent relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
      <div className="mb-2 sm:mb-0">
        <h3 className="text-xl font-semibold text-white">{role}</h3>
        <p className="text-blue-400 font-medium">{company} {location && `• ${location}`}</p>
      </div>
      <span className="text-sm text-gray-400 flex-shrink-0 sm:ml-4">{date}</span>
    </div>
    <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
      {details.map((detail, index) => (
        <li key={`${company}-detail-${index}-${detail.substring(0, 20)}`} className="flex items-start">
          <ChevronsRight className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
          <span>{detail}</span>
        </li>
      ))}
    </ul>
    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
      {links.map(link => (
        <a 
          key={link.name} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center group/link"
        >
          {link.name} 
          <ArrowUpRight className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
        </a>
      ))}
    </div>
  </div>
);

export default ExperienceCard;