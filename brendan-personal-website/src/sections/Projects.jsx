// Projects.jsx
import React from "react";
import ProjectCard from "../components_jsx/ProjectCard";
import DebugOutline from "../components_jsx/DebugOutline";
import "../styles/project.css";
import { useAppContext } from "../context/AppContext";

const Projects = () => {
  const { developerMode } = useAppContext();
  return (
    <section id="projects">
      <DebugOutline>
        <div className="projects-container">
          <h2 className="projects-heading">Projects</h2>
          <div className="projects-grid">
            {resumeProjects.map((proj, idx) => {
              const videos =
                idx === -1
                  ? [
                      "https://www.w3schools.com/html/mov_bbb.mp4",
                      "https://www.w3schools.com/html/movie.mp4",
                    ]
                  : [];

              return (
                <ProjectCard
                  key={idx}
                  title={proj.title}
                  description={proj.description}
                  technologies={proj.technologies}
                  links={proj.links}
                  videos={developerMode ? videos : []}
                />
              );
            })}
          </div>
        </div>
      </DebugOutline>
    </section>
  );
};

export default Projects;

const resumeProjects = [
  {
    title: "Spotify Uncovered",
    description:
      "Led a 5-person team building a React-based web app to analyze and visualize users’ Spotify metadata. Crafted system design, user stories, wireframes, and retrospectives for team alignment.",
    technologies: "React, NodeJS, GitHub Pages",
    links:
      "Live: https://brendanpotter00.github.io/Spotify_Uncovered_v2/ | Repo: https://github.com/brendanpotter00/Spotify_Uncovered_v2",
  },
  {
    title: "Market Predictor",
    description:
      "Developed a Python neural network to predict next-day stock closing prices using 60+ days of historical data from the Yahoo Finance API. Visualized predicted vs. actual trendlines in Matplotlib.",
    technologies: "Python, NumPy, Matplotlib, Pandas, TensorFlow, YFinance API",
    links: "Repo: https://github.com/brendanpotter00/Stock-Price-Predictor",
  },
];
