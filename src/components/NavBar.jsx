import { navLinks } from "../data";

export default function NavBar({ menuOpen, setMenuOpen, onNavigate }) {
  const handleClick = (event, href) => onNavigate(event, href);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="brand" href="#top" onClick={(event) => handleClick(event, "#top")} aria-label="Akash Jha, back to top">
          <span className="brand-mark" aria-hidden="true">AJ</span>
          <span>
            <span className="brand-name">AKASH JHA</span>
            <span className="brand-subtitle">CYBERSECURITY · BLUE TEAM</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href} onClick={(event) => handleClick(event, link.href)}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={(event) => handleClick(event, "#contact")}>Contact ↗</a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        <div className="mobile-nav-inner">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} tabIndex={menuOpen ? 0 : -1} onClick={(event) => handleClick(event, link.href)}>
              {link.label}<span aria-hidden="true">↗</span>
            </a>
          ))}
          <a className="mobile-contact" href="#contact" tabIndex={menuOpen ? 0 : -1} onClick={(event) => handleClick(event, "#contact")}>Contact me ↗</a>
        </div>
      </nav>
    </header>
  );
}
