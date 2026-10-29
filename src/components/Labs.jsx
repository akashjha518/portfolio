import { labProjects } from "../data";

export default function Labs() {
  return (
    <section id="labs" className="section section--compact">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">04 / Practical labs</p>
          <h2 className="section-title">Work done in controlled environments.</h2>
          <p className="section-description">Hands-on exercises focused on understanding systems, observing behavior, and recording what was learned.</p>
        </div>
        <div className="lab-list">
          {labProjects.map((lab, index) => (
            <article className="lab-row" key={lab.title} data-reveal>
              <span className="lab-number">0{index + 1}</span>
              <div>
                <h3>{lab.title}</h3>
                <p>{lab.description}</p>
              </div>
              <div className="tag-list">{lab.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
