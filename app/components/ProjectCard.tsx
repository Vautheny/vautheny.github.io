import Link from "next/link";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="p-4">
      <Link href='/'>
        <h3>Project Name</h3>
        <p>
          Project description. Tech stack, learning acheived, challenges, redos,
          skill developed.
        </p>
        <p>Image</p>
      </Link>
    </div>
  );
};

export default ProjectCard;
