import React from "react";
import Skill from "./Skill";

const Skills = ({changeFilter}) => {


  const skills = [
    "React",
    "NextJS",
    "Tailwind CSS",
    "DaisyUI",
    "Bootstrap CSS",
    "Firebase",
    "Azure",
    "AWS",
    "Python",
    "Django",
    "PHP",
    "JavaScript",
    "VBA",
    "Heroku",
    "NodeJS",
    "MYSQL",
    "Prisma",
    "Nodemailer",
    "Third-Party API",
  ];
  return (
    <div className="flex max-w-4xl flex-wrap m-5">
      {skills.map((skill) => {
        return <Skill skill={skill} key={skill} changeFilter={changeFilter}/>;
      })}
    </div>
  );
};

export default Skills;
