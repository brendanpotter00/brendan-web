import React from "react";
import ExperienceCard from "../components_jsx/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
        <div className="grid gap-8">
          <ExperienceCard
            title={"experience"}
            company={"experience desc"}
            duration={"techs"}
            description={"links"}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
