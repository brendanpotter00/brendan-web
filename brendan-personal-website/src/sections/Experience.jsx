import React from "react";
import ExperienceCard from "../components_jsx/ExperienceCard";
import DebugOutline from "../components_jsx/DebugOutline";
import "../styles/experience.css";
import ExperienceBackground from "../component_models/ExperienceBackgound";
import { useAppContext } from "../context/AppContext";

const Experience = () => {
  const { developerMode } = useAppContext();

  return (
    <section id="experience">
      {developerMode && <ExperienceBackground />}
      <DebugOutline>
        <div className="experience-container">
          <DebugOutline>
            <h2 className="experience-heading">Experience</h2>
            <div className="experience-grid">
              {resumeExperiences.map((exp, idx) => {
                // Assign two videos to the first card only
                const videos =
                  idx === 0
                    ? [
                        "https://www.w3schools.com/html/mov_bbb.mp4",
                        "https://www.w3schools.com/html/movie.mp4",
                      ]
                    : [];

                return (
                  <ExperienceCard
                    key={idx}
                    title={exp.title}
                    company={exp.company}
                    duration={exp.duration}
                    description={exp.description}
                    videos={videos}
                  />
                );
              })}
            </div>
          </DebugOutline>
        </div>
      </DebugOutline>
    </section>
  );
};

export default Experience;

// — your resume data below —
const resumeExperiences = [
  {
    title: "Full-Stack Software Engineer",
    company: "ForeFlight (A Boeing Company)",
    duration: "May 2023 – Present",
    description:
      "Led end-to-end frontend engineering for a cloud drive file system visualizing compliance data for 30,000+ devices, generating $2M. Provided on-call support for 500K users and 35K documents. Directed ForeFlight 16.1 release to App Store with <0.4% crash rate. Developed MVP web authoring tool, migrating 5K+ user data. Refactored RESTful APIs to prevent data overwrites for 2K users. Automated DataDog tests in CI/CD for 90% of services. Implemented cross-platform data syncing, reducing tech debt. Presented architecture docs to stakeholders. Licensed pilot with 150+ flight hours to inform product use cases.",
  },
  {
    title: "ACM Computer Science Tutor",
    company: "Trinity University",
    duration: "Jan 2023 – May 2023",
    description:
      "Mentored freshman and sophomore students in all lower-division computer science courses, clarifying core concepts and improving pass rates.",
  },
  {
    title: "Software Engineer Co-Op/Intern",
    company: "ForeFlight (A Boeing Company)",
    duration: "May 2022 – May 2023",
    description:
      "Built a PDF feature syncing data across iOS and Angular apps, securing ~$30K. Optimized flight search with dispatch tags (–50% lookup time). Improved weight-and-balance UI via editable modal. Delivered technical presentations to 400+ EMs, stakeholders, and engineers.",
  },
  {
    title: "Software Engineer Intern",
    company: "Commuv",
    duration: "Jun 2021 – Sept 2021",
    description:
      "Acquired 60 early users by analyzing HubSpot analytics (↑200% time on page). Researched feasibility of an iOS app pitch that won $5K in the Stumberg Venture Competition.",
  },
];
