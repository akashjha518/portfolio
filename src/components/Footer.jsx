function Footer({ onNavigate }) {
  return (
    <footer className="mt-xl w-full border-t border-white/5 bg-surface pb-lg pt-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-xl flex flex-col items-center justify-between gap-xl md:flex-row">
          <div className="text-center md:text-left">
            <a className="mb-2 block font-display-md text-2xl text-primary-container" href="#top" onClick={onNavigate('#top')}>
              Akash Jha
            </a>
            <p className="max-w-xs font-light text-on-surface-variant">
              Pioneering the intersection of informatics and modern design.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-xl sm:grid-cols-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Connect</span>
              <a className="text-sm font-light text-on-surface-variant transition-colors hover:text-primary" href="https://www.linkedin.com/in/akashjha518" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="text-sm font-light text-on-surface-variant transition-colors hover:text-primary" href="https://github.com/akashjha518" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Resources</span>
              <a className="text-sm font-light text-on-surface-variant transition-colors hover:text-primary" href="#projects" onClick={onNavigate('#projects')}>
                Projects
              </a>
              <a className="text-sm font-light text-on-surface-variant transition-colors hover:text-primary" href="#">
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-md border-t border-white/5 pt-lg text-xs font-light uppercase tracking-widest text-on-surface-variant/60 md:flex-row">
          <span>© 2024 Akash Jha. All rights reserved.</span>
          <div className="flex gap-lg">
            <span>Built with Passion & Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

