import { navLinks } from '../data';

function NavBar({ menuOpen, setMenuOpen, onNavigate }) {
  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-white/5 bg-surface/60 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-container-max items-center justify-between px-gutter py-md">
        <a
          className="font-display-md text-lg tracking-tight text-primary-container sm:text-xl md:text-2xl"
          href="#top"
          onClick={onNavigate('#top')}
        >
          Akash Jha
        </a>
        <div className="hidden items-center gap-lg md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="py-2 font-label-ui text-label-ui text-on-surface-variant transition-colors hover:text-primary"
              href={link.href}
              onClick={onNavigate(link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="ml-4 rounded-full bg-primary-container px-lg py-sm font-label-ui text-label-ui text-on-primary-container transition-all duration-300 hover:shadow-[0_0_20px_rgba(60,233,245,0.3)]"
            href="mailto:akashjha518@gmail.com"
          >
            Hire Me
          </a>
        </div>
        <button
          className="p-2 text-primary md:hidden"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      {menuOpen ? (
        <div className="border-t border-white/5 bg-surface/95 px-gutter py-md md:hidden">
          <div className="mx-auto flex max-w-container-max flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-xl border border-white/5 bg-white/5 px-md py-3 font-label-ui text-on-surface-variant transition-colors hover:text-primary"
                href={link.href}
                onClick={onNavigate(link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="rounded-xl bg-primary-container px-md py-3 text-center font-label-ui text-on-primary-container"
              href="mailto:akashjha518@gmail.com"
            >
              Hire Me
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default NavBar;
