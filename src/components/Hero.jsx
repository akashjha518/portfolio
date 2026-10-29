
import { resumeUrl } from "../data";

const focusAreas = [
  {
    number: "01",
    title: "Security monitoring",
    description: "Learning to investigate authentication events and system logs.",
  },
  {
    number: "02",
    title: "Network investigation",
    description: "Practising traffic analysis and network reconnaissance in labs.",
  },
  {
    number: "03",
    title: "Defensive practice",
    description: "Documenting findings, understanding risk, and exploring remediation.",
  },
];

export default function Hero({ onNavigate }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="hero-kicker">
            <span className="status-dot" />
            CYBERSECURITY · BLUE TEAM
          </p>

          <h1 id="hero-title">
            Building a<br />
            defender's <span>mindset.</span>
          </h1>

          <p className="hero-lede">
            I'm Akash Jha, an M.Sc. Informatics graduate working toward a
            career in Security Operations. I learn by investigating logs,
            exploring security tools, and documenting hands-on lab work.
          </p>

          <div className="hero-actions">
            <a
              className="button button--primary"
              href="#projects"
              onClick={(event) => onNavigate(event, "#projects")}
            >
              Explore my work <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button button--quiet"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View résumé <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>Hands-on labs</span>
            <span>Log analysis</span>
            <span>Continuous learning</span>
          </div>
        </div>

        <aside className="hero-aside" data-reveal>
          <div className="focus-panel">
            <div className="focus-panel-top">
              <span className="eyebrow">MY APPROACH</span>
              <span className="focus-indicator">
                <span className="status-dot" />
                PRACTICE IN PROGRESS
              </span>
            </div>

            <div className="focus-heading">
              <span className="focus-heading-index">/ 01</span>
              <h2>Learn to see the signal.</h2>
              <p>
                Build the fundamentals. Investigate the evidence.
                Understand what the findings mean.
              </p>
            </div>

            <div className="focus-list">
              {focusAreas.map((area) => (
                <div className="focus-item" key={area.number}>
                  <span className="focus-number">{area.number}</span>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>
                  <span className="focus-arrow" aria-hidden="true">↗</span>
                </div>
              ))}
            </div>

            <div className="focus-panel-bottom">
              <span>OBSERVE</span>
              <span className="focus-line" />
              <span>ANALYSE</span>
              <span className="focus-line" />
              <span>DOCUMENT</span>
            </div>
          </div>

          <p className="hero-note">
            A personal learning portfolio — not a live SOC dashboard.
          </p>
        </aside>
      </div>
    </section>
  );
}
