import React from "react";
import Section from "../components/Section.jsx";
import { achievements } from "../data/portfolioData.jsx";


export const AchievementsSection = () => {
  return (
    <Section id="achievements" title={achievements.title} icon={achievements.icon}>
      <div className="space-y-8">

        {achievements.items.map((ach, index) => (
          <div
            key={index}
            className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 shadow-lg"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-white">
              {ach.title}
            </h3>

            {/* Badge */}
            {ach.badge && (
              <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-indigo-600 text-white">
                {ach.badge}
              </span>
            )}

            {/* Description */}
            <p className="text-gray-300 mt-4 leading-relaxed">
              {ach.description}
            </p>

            {/* Image preview */}
            {ach.images?.length > 0 && (
              <img
                src={ach.images[0]}
                alt="achievement"
                className="mt-4 rounded-lg w-full max-w-md"
              />
            )}

            {/* Certificate preview */}
            {ach.certificate && (
              <a
                href={ach.certificate}
                target="_blank"
                className="text-indigo-400 underline block mt-3"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}

      </div>
    </Section>
  );
};
