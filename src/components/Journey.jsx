import { journeyItems } from "../data";

export default function Journey() {
  return (
    <section id="experience" className="section section--compact">
      <div className="container journey-grid">
        <div className="journey-intro" data-reveal>
          <p className="eyebrow">04 / Education</p>
          <h2 className="section-title">The foundation behind the work.</h2>
          <p>My academic background in informatics and electronics supports the technical learning I’m applying to cybersecurity.</p>
        </div>
        <div className="education-list" data-reveal>
          {journeyItems.map((item) => (
            <article className="education-item" key={item.degree}>
              <span className="education-date">{item.date}</span>
              <div><h3>{item.degree}</h3><p>{item.institution}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
