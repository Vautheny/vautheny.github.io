import Link from "next/link";
import React from "react";
import stock_image from '@/public/images/Nitro_Wallpaper_5000x2813.jpg';
import Image from "next/image";
const ProjectCard = ({ project }) => {
  return (
    <div className="p-4">
      <Link href="/">
        <h3>{project.name}</h3>
        <Image src={stock_image} alt='stock image for project image' />
        <p>{project.description}</p>
        <div>{project.tags.join(', ')}</div>
      </Link>
    </div>
  );
};

export default ProjectCard;
