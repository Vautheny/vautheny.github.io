import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const Projects = [
      {
        name: "React - ONS Data Website Interface",
        tags: ["React", "Third-Party API", "JS"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },
      {
        name: "Python - Hangman Game",
        front_end: ["Python", "Firebase"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },
  ];

  return (
    <div id="projects">
      <h2 className="w-fill text-center pb-5">Projects</h2>
      <div className="grid grid-cols-3 grid-rows-2 grid-flow-row-dense">
        {Projects.map(()=>{
            return (<ProjectCard />)
        })}
      </div>
    </div>
  );
};

export default Projects;
