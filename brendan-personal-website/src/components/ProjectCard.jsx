import React from "react";

const ProjectCard = ({ title, description, technologies, links }) => {
  return (
    <div className="bg-opacity-10 bg-white backdrop-blur-sm rounded-lg p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <div className="mt-4">
        <p className="text-sm opacity-75">Technologies: {technologies}</p>
      </div>
      <div className="mt-4 flex gap-4">{/* Add links here */}</div>
    </div>
  );
};

export default ProjectCard;
