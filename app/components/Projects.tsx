import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const Projects = [
      {
        name: "React - ONS Data Website Interface",
        description: 'Project description. Tech stack, learning acheived, challenges, redos, skill developed.',
        tags: ["React", "Third-Party API", "JS"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },
      {
        name: "Python - Hangman Game",
        description: 'Project description. Tech stack, learning acheived, challenges, redos, skill developed.',
        tags: ["Python", "Firebase"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },  
      {
        name: "React - Tic Tac Toe Game",
        description: 'Project description. Tech stack, learning acheived, challenges, redos, skill developed.',
        tags: ["React", "Firebase"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },
      {
        name: "React - Tic Tac Toe Game",
        description: 'Project description. Tech stack, learning acheived, challenges, redos, skill developed.',
        tags: ["React", "Firebase"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },
      {
        name: "React - Tic Tac Toe Game",
        description: 'Project description. Tech stack, learning acheived, challenges, redos, skill developed.',
        tags: ["React", "Firebase"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },
      {
        name: "React - Tic Tac Toe Game",
        description: 'Project description. Tech stack, learning acheived, challenges, redos, skill developed.',
        tags: ["React", "Firebase"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },

      
  ];

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="grid grid-cols-3 grid-rows-2 grid-flow-row-dense">
        {Projects.map((project)=>{
            return (<ProjectCard project={project}/>)
        })}
      </div>
    </div>
  );
};

export default Projects;
