import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section section--compact">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">02 / Capabilities</p>
          <h2 className="section-title">Tools and fundamentals I’m building on.</h2>
          <p className="section-description">A practical skills snapshot based on coursework, labs, and personal projects—not a claim of professional production experience.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.number} data-reveal>
              <span className="skill-number">{skill.number} / SKILL SET</span>
              <h3>{skill.title}</h3>
              <p>{skill.summary}</p>
              <div className="tag-list">{skill.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
