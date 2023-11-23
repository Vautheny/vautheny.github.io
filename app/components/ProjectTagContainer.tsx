import React from "react";
import ProjectTag from "./ProjectTag";

const ProjectTagContainer = ({ tags }) => {
  return (
    <div className="flex">
      {tags.map((tag) => {
        return <ProjectTag tag={tag} key={tag}/>;
      })}
    </div>
  );
};

export default ProjectTagContainer;
