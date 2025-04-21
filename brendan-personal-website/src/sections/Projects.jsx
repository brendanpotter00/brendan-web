import React from "react";
import ProjectCard from "../components_jsx/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid gap-8">
          <ProjectCard
            title={"experience"}
            description={"experience desc"}
            technologies={"techs"}
            links={"links"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
