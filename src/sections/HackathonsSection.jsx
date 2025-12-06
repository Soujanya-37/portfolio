import React from "react";
import Section from "../components/Section.jsx";
import { hackathons } from "../data/portfolioData.jsx";
import { MapPin } from "lucide-react";

const HackathonsSection = () => {
  return (
    <Section id="hackathons" title={hackathons.title} icon={hackathons.icon}>
      <p className="text-gray-300 mb-8">{hackathons.description}</p>

      <div className="space-y-10">
        {hackathons.events.map((event, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-[#111827] border border-gray-800"
          >
            {/* Title + Badge */}
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">
                {event.name}
              </h3>

              {event.badge && (
                <span className="px-3 py-1 text-sm bg-purple-600 rounded-full text-white">
                  {event.badge}
                </span>
              )}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-2 text-gray-400">
              <MapPin size={16} />
              <p>{event.location}</p>
            </div>

            {/* Project Name */}
            {event.project && (
              <p className="mt-2 text-indigo-400 font-medium">
                Project: {event.project}
              </p>
            )}

            {/* Description */}
            <p className="text-gray-300 mt-3">{event.description}</p>

            {/* Image grid (Original style) */}
            {event.images && event.images.length > 0 && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    className="rounded-lg border border-gray-700"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HackathonsSection;
