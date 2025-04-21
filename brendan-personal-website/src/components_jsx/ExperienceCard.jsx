import React from "react";

const ExperienceCard = ({ title, company, duration, description }) => {
  return (
    <div className="bg-opacity-10 bg-white backdrop-blur-sm rounded-lg p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <h4 className="text-lg">{company}</h4>
      <p className="text-sm opacity-75">{duration}</p>
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default ExperienceCard;
