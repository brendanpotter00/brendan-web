// ProjectCard.jsx
import React from "react";
import "../styles/project-card.css";
import DebugOutline from "./DebugOutline";

const ProjectCard = ({
  title,
  description,
  technologies,
  links,
  videos = [],
}) => (
  <div className="project-card">
    <h3 className="title">{title}</h3>
    <p className="description">{description}</p>
    <p className="technologies">Technologies: {technologies}</p>
    <div className="links">
      {links.split("|").map((link, i) => {
        const [label, href] = link.trim().split(/:\s*/);
        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
      })}
    </div>

    {videos.length > 0 && (
      <DebugOutline>
        <div className="videos">
          {videos.map((url, i) => (
            <div key={i} className="video-wrapper">
              <DebugOutline>
                <video src={url} autoPlay loop muted playsInline />
              </DebugOutline>
            </div>
          ))}
        </div>
      </DebugOutline>
    )}
  </div>
);

export default ProjectCard;
