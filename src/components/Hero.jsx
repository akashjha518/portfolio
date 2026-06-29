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
        <h1 className="mb-lg font-display-lg text-[44px] font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-[84px]">
          Building Digital <span className="text-primary">Masterpieces</span> Through Code
        </h1>
        <p className="mx-auto mb-xl max-w-3xl font-body-lg text-lg font-light leading-relaxed text-on-surface-variant/80 md:text-xl">
          M.Sc. Informatics Candidate. I engineer high-performance web experiences and intelligent Python solutions that blend technical precision with creative design.
        </p>
        <div className="flex flex-col items-center justify-center gap-lg sm:flex-row">
          <a
            className="group flex items-center justify-center gap-sm rounded-full bg-primary-container px-10 py-5 text-[18px] font-headline-md text-on-primary-container transition-all duration-500 hover:shadow-[0_0_30px_rgba(60,233,245,0.4)]"
            href="#projects"
            onClick={onNavigate('#projects')}
          >
            View Projects
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <div className="flex gap-md">
            <a
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-5 text-[18px] font-headline-md text-on-surface transition-all hover:bg-white/10"
              href="#contact"
              onClick={onNavigate('#contact')}
            >
              Get in Touch
            </a>
            {/* <a
              className="rounded-full border border-white/10 bg-white/5 p-5 text-primary-container transition-all hover:bg-white/10"
              href="#"
              title="Download Resume"
              onClick={(event) => event.preventDefault()}
            >
              <span className="material-symbols-outlined transition-transform group-hover:translate-y-0.5">
                download
              </span>
            </a> */}
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <span className="material-symbols-outlined text-[32px]">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
}

export default Hero;

