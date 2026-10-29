export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-copy">© {year} Akash Jha<br />Built around curiosity, practice, and documentation.</div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#top" onClick={(event) => onNavigate(event, "#top")}>Back to top ↑</a>
          <a href="https://github.com/akashjha518" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="mailto:jhaa60768@gmail.com">Email ↗</a>
        </nav>
      </div>
    </footer>
  );
}
