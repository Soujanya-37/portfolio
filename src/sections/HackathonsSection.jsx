import React from "react";
import Section from "../components/Section";
import { hackathons } from "../data/portfolioData.js";
import { IoLocationSharp } from "react-icons/io5";
import "./Hackathons.css";

export const HackathonsSection = () => {
  return (
    <Section id="hackathons" title={hackathons.title} icon={hackathons.icon} animate>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-300 mb-8 text-center">
          {hackathons.description}
        </p>
        <div className="space-y-6">
          {hackathons.events.map((hackathon, index) => (
            <div
              key={`hackathon-${index}-${hackathon.name}`}
              className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {hackathon.name}
                  </h3>
                  <p className="text-gray-400 flex items-center gap-2">
                    <IoLocationSharp className="w-4 h-4" />
                    {hackathon.location}
                  </p>
                </div>
                {hackathon.achievement && (
                  <div className="flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-blue-300">
                      {hackathon.achievement}
                    </span>
                  </div>
                )}
              </div>
              {hackathon.project && (
                <p className="text-blue-400 mt-3 font-medium">
                  Project: {hackathon.project}
                </p>
              )}
              <p className="text-gray-300 mt-3">
                {hackathon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};