import Link from "next/link";
import React from "react";
import stock_image from "@/public/images/Nitro_Wallpaper_5000x2813.jpg";
import Image from "next/image";
import ProjectTagContainer from "./ProjectTagContainer";


const ProjectCard = ({ project }) => {
  return (
    <Link href="/" className="border-solid border-1 rounded-xl p-3 m-1 shadow-xl hover:shadow-2xl hover:border-gray-200 hover:border-2">
      <h3>{project.name}</h3>
      <Image src={stock_image} alt="stock image for project image" className="rounded-xl" />
      <p>{project.description}</p>
      <ProjectTagContainer tags={project.tags} />
    </Link>
  );
};

export default ProjectCard;
