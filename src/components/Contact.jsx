
export default function Contact() {
  return (
    <section id="contact" className="section section--compact">
      <div className="container">
        <div className="contact-layout" data-reveal>
          <div className="contact-main">
            <p className="eyebrow">06 / Contact</p>

            <h2 className="contact-title">
              Let's build a more
              <br />
              <span>secure future.</span>
            </h2>

            <p className="contact-description">
              I'm working toward an entry-level SOC Analyst or Blue Team role.
              I'm open to discussing junior opportunities, hands-on security
              projects, and ways to keep learning through practical work.
            </p>

            <div className="contact-actions">
              <a
                className="button button--primary"
                href="mailto:jhaa60768@gmail.com"
              >
                Get in touch <span aria-hidden="true">↗</span>
              </a>

              <a
                className="button button--quiet"
                href="https://github.com/akashjha518"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="contact-card" aria-label="Contact details">
            <div className="contact-card-header">
              <span className="contact-card-label">CONTACT DETAILS</span>
              <span className="contact-card-indicator">
                <span className="status-dot" />
                AVAILABLE TO CONNECT
              </span>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">EMAIL</span>
              <a href="mailto:jhaa60768@gmail.com">
                jhaa60768@gmail.com
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">CAREER INTEREST</span>
              <p>SOC Analyst · Blue Team · Security Operations</p>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">LOCATION</span>
              <p>Noida, India</p>
            </div>

            <div className="contact-card-footer">
              <span>GOOD SECURITY STARTS WITH CURIOSITY.</span>
              <span aria-hidden="true">✳</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
