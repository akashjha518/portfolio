export default function About() {
  return (
    <section id="about" className="section section--compact">
      <div className="container about-grid">
        <div data-reveal>
          <div className="section-heading">
            <p className="eyebrow">01 / About</p>
            <h2 className="section-title">Curiosity, turned into hands-on practice.</h2>
          </div>
          <div className="about-copy">
            <p>I’m a postgraduate in <strong>Informatics</strong> with a growing focus on security operations and defensive security.</p>
            <p>My learning is built around practical environments: investigating Windows authentication events, analysing network traffic, working with Linux services, and testing applications in controlled labs.</p>
            <p>I document what I do, what the evidence shows, what remains uncertain, and how a finding could be addressed. I’m looking for an opportunity to keep developing these skills in an entry-level SOC or blue-team role.</p>
          </div>
        </div>
        <aside className="about-aside" data-reveal aria-label="Profile details">
          <div className="fact-row"><span className="fact-label">Focus</span><span className="fact-value">SOC analysis · Blue team fundamentals</span></div>
          <div className="fact-row"><span className="fact-label">Approach</span><span className="fact-value">Hands-on labs, evidence, documentation</span></div>
          <div className="fact-row"><span className="fact-label">Environment</span><span className="fact-value">VirtualBox · Windows · Linux</span></div>
          <div className="fact-row"><span className="fact-label">Based in</span><span className="fact-value">Noida, India</span></div>
        </aside>
      </div>
    </section>
  );
}
