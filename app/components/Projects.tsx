import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const Projects = [
      {
        name: "React - ONS Data Website Interface",
        short_description: 'Assessment porject for Army coding course. Task required connection and use of public APIs. Site needed to allow users to select what data they wanted to view.',
        tags: ["React", "Third-Party API", "JS"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },
      {
        name: "Python - Hangman Game",
        short_description: 'Assessment for Army JHUB Module 3 course. Required the simple hangman game to be played in shell using Python.',
        tags: ["Python", "Firebase"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },  
      {
        name: "React - Tic Tac Toe Game",
        short_description: 'Self assigned project for working with React and basic deployabilty options. Used Firebase due to course reccomendation but also ease of deployment.',
        tags: ["React", "Firebase"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },
      {
        name: "React - Sailing Logbook",
        short_description: 'Self assigned project logging sailing trips. A simpler alternative to publicly available apps on the market.',
        tags: ["React", "Firebase"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },
      {
        name: "React - RLC Association Funding App",
        short_description: 'Production level project for the RLC Association. Required app to reduce current workload of paper based applications.',
        tags: ["React",, "Node.js", "Azure", "Firebase", "AWS", "Nodemailer", "MYSQL"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },
      {
        name: "NextJS - Software Development Portfolio",
        short_description: 'This website. A demonstration of coding ability and a location to advertise experience and knowledge.',
        tags: ["NextJS", "Prisma", "Tailwind CSS", "DaisyUI", "MYSQL"],
        github: "https://www.githublink.com",
        demo: "https://www.demosite.com"
      },      
  ];

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="grid grid-cols-3 grid-rows-2 grid-flow-row-dense">
        {Projects.map((project)=>{
            return (<ProjectCard project={project} key={project.name}/>)
        })}
      </div>
    </div>
  );
};

export default Projects;
