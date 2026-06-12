import Reveal from "../components/Reveal";
import { PROJECTS } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <Reveal index={0}>
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">Things I've built.</p>
      </Reveal>
      <ul className="project-list">
        {PROJECTS.map((project, i) => (
          <Reveal as="li" key={project.name} index={i + 1}>
            <div className="project-name">{project.name}</div>
            <p className="project-desc">{project.description}</p>
            <span className="project-links">
              {Object.entries(project.links).map(([label, href], j) => (
                <span key={label}>
                  {j > 0 && " · "}
                  <a href={href}>{label}</a>
                </span>
              ))}
            </span>
          </Reveal>
        ))}
      </ul>
    </main>
  );
}
