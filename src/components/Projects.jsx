import { featuredProjects } from "../data";

const symbols = { logs: ">_", network: "↗", assistant: "AI", shield: "◇" };

export default function Projects() {
  return (
    <section id="projects" className="section section--compact">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">03 / Selected work</p>
          <h2 className="section-title">Learning by building and investigating.</h2>
          <p className="section-description">Selected projects and labs. Their status is stated plainly so visitors can distinguish completed documentation from ongoing work.</p>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.number} data-reveal>
              <div className="project-visual">
                <span className="project-type">{project.type}</span>
                <span className="project-visual-symbol" aria-hidden="true">{symbols[project.visual] || "◇"}</span>
              </div>
              <div className="project-content">
                <span className="project-status">{project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View project notes <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
