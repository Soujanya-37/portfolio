import React from 'react';

const SkillPill = ({ skill }) => (
  <span className="inline-block bg-gradient-to-r from-blue-900 to-blue-800 text-blue-200 rounded-full px-4 py-2 text-sm font-medium border border-blue-700 shadow-md transform transition-transform hover:scale-105">
    {skill}
  </span>
);

export default SkillPill;

