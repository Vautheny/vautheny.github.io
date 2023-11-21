import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const Projects = [
    {
      name: "ONS Data Website Interface",
      front_end: ["React"],
      back_end: ["Third-Party API"],
      github: "https://www.githublink.com",
      demo: "https://www.demosite.com"
    },
  ];

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="grid grid-flow-col grid-cols-3 grid-rows-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
