import React from 'react';
// FIX: Using relative path *without* .js extension
import { personalInfo } from '../data/portfolioData'; 

const Footer = () => (
  <footer className="bg-gray-950 py-8 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
      <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      <p className="mt-2 text-xs">Crafted with <span className="text-red-500">&hearts;</span> using React & Tailwind CSS</p>
    </div>
  </footer>
);

export { Footer }; // FIX: Using named export

