
import { trainingItems } from "../data";

export default function Certifications() {
  if (!trainingItems || trainingItems.length === 0) {
    return (
      <section id="training" className="section section--compact">
        <div className="container">
          <h2 className="section-title">Course Credentials</h2>
          <p className="section-description">
            Add your training credentials to src/data.js to display them here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="training" className="section section--compact">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">05 / Credentials</p>
          <h2 className="section-title">
            Learning backed by credentials.
          </h2>
          <p className="section-description">
            Course credentials from TuteDude covering cybersecurity,
            ethical hacking, Python programming, and Linux.
          </p>
        </div>

        <div className="training-grid">
          {trainingItems.map((item, index) => (
            <article
              className="training-card"
              key={item.credentialId || item.title}
              data-reveal
            >
              <div className="training-card-top">
                <span className="training-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="training-format">
                  {item.format || "Online"}
                </span>
              </div>

              <p className="training-provider">
                {item.provider} / COURSE
              </p>

              <h3>{item.title}</h3>
              <p className="training-detail">
                {item.detail || "Course credential"}
              </p>

              <div className="training-credential-id">
                <span>CREDENTIAL ID</span>
                <code>{item.credentialId}</code>
              </div>

              <a
                className="training-link"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.linkLabel || "View credential"}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
