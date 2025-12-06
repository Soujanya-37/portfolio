import React from 'react';
import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/portfolioData.jsx';  // FIXED

export const ProjectsSection = () => {
  return (
    <Section
      id="projects"
      title={projects.title}
      icon={projects.icon}
      animate
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, index) => (
            <ProjectCard
              key={`project-${index}-${project.title}`}
              title={project.title}
              description={project.description}
              tech={project.tech}
              projectLink={project.github || project.liveDemo}
              images={project.images}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
