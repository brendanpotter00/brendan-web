import React from "react";
import "../styles/experience-card.css";

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  videos = [],
}) => {
  return (
    <div className="experience-card">
      <h3 className="title">{title}</h3>
      <h4 className="company">{company}</h4>
      <p className="duration">{duration}</p>
      <p className="description">{description}</p>

      {videos.length > 0 && (
        <div className="videos">
          {videos.map((url, idx) => (
            <div key={idx} className="video-wrapper">
              <video src={url} autoPlay loop muted playsInline />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
