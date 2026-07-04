import { resumeUrl } from '../data';

function Hero({ onNavigate }) {
  return (
    <section className="shimmer-bg relative flex min-h-screen items-center justify-center overflow-hidden px-gutter pt-xl">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-glow absolute left-[15%] top-[10%] h-[40vw] w-[40vw] rounded-full bg-primary/10" />
        <div className="hero-glow absolute bottom-[10%] right-[10%] h-[35vw] w-[35vw] rounded-full bg-secondary/10" />
      </div>
      <div className="fade-in-up visible relative z-10 max-w-5xl text-center">
        <div className="mb-lg inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[12px] font-bold uppercase tracking-widest text-primary-container">
            Available for new opportunities
          </span>
        </div>
        <h1 className="mb-lg font-display-lg text-[36px] font-extrabold leading-[1.1] tracking-tighter text-on-surface sm:text-[44px] md:text-[84px]">
          Building Digital <span className="text-primary">Masterpieces</span> Through Code
        </h1>
        <p className="mx-auto mb-xl max-w-3xl font-body-lg text-base font-light leading-relaxed text-on-surface-variant/80 sm:text-lg md:text-xl">
          M.Sc. Informatics Candidate. I engineer high-performance web experiences and intelligent Python solutions that blend technical precision with creative design.
        </p>
        <div className="flex flex-col items-center justify-center gap-lg sm:flex-row">
          <a
            className="group flex items-center justify-center gap-sm rounded-full bg-primary-container px-8 py-4 text-base font-headline-md text-on-primary-container transition-all duration-500 hover:shadow-[0_0_30px_rgba(60,233,245,0.4)] sm:px-10 sm:py-5 sm:text-[18px]"
            href="#projects"
            onClick={onNavigate('#projects')}
          >
            View Projects
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <div className="flex flex-wrap justify-center gap-md">
            <a
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-headline-md text-on-surface transition-all hover:bg-white/10 sm:px-8 sm:py-5 sm:text-[18px]"
              href="#contact"
              onClick={onNavigate('#contact')}
            >
              Get in Touch
            </a>
            <a
              className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-6 py-4 text-base font-headline-md text-primary-container transition-all hover:bg-primary/15 sm:px-8 sm:py-5 sm:text-[18px]"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
              <span className="material-symbols-outlined text-[20px]">open_in_new</span>
            </a>
            <a
              className="rounded-full border border-white/10 bg-white/5 p-4 text-primary-container transition-all hover:bg-white/10 sm:p-5"
              href={resumeUrl}
              download="AkashJha-Resume.pdf"
              title="Download Resume"
            >
              <span className="material-symbols-outlined text-[20px] sm:text-[24px]">download</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <span className="material-symbols-outlined text-[32px]">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
}

export default Hero;
