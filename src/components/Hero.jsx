import { heroHighlights, resumeUrl, statCards } from '../data';

function Hero({ onNavigate }) {
  return (
    <section className="shimmer-bg relative overflow-hidden px-gutter pt-[112px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-glow absolute left-[-8%] top-[8%] h-[42vw] w-[42vw] rounded-full bg-primary/10" />
        <div className="hero-glow absolute right-[-6%] top-[20%] h-[30vw] w-[30vw] rounded-full bg-tertiary/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-112px)] max-w-container-max items-center gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
        <div className="fade-in-up max-w-3xl">
          <div className="section-kicker mb-6">Portfolio 2026</div>
          <h1 className="max-w-4xl font-display-lg text-[clamp(3rem,7vw,5.75rem)] font-extrabold leading-[0.95] tracking-tighter text-[#f5f4f2]">
            Building digital products with clarity, motion, and{' '}
            <span className="text-primary">technical precision</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-on-surface-variant sm:text-lg">
            M.Sc. Informatics candidate focused on web experiences, Python systems, and practical machine learning. I like shaping tools that are fast to use, visually memorable, and useful in the real world.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-container px-6 py-3.5 text-sm font-semibold text-on-primary-container transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(60,233,245,0.35)]"
              href="#projects"
              onClick={onNavigate('#projects')}
            >
              Explore Projects
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-on-surface transition-all hover:border-white/20 hover:bg-white/10"
              href="#contact"
              onClick={onNavigate('#contact')}
            >
              Start a Conversation
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-6 py-3.5 text-sm font-semibold text-primary-container transition-all hover:bg-primary/15"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {statCards.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-4"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                    {stat.label}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-primary-container">
                    {stat.icon}
                  </span>
                </div>
                <div className="mt-3 text-3xl font-extrabold tracking-tight text-[#f5f4f2]">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-up lg:justify-self-end">
          <div className="hero-panel overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-primary-container">
                    Focus Areas
                  </p>
                  <h2 className="mt-2 font-display-md text-3xl text-[#f5f4f2]">
                    Design-led engineering
                  </h2>
                </div>
                <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary-container">
                  Open to work
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {heroHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm leading-6 text-on-surface-variant"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(60,233,245,0.75)]" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                    Stack
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[#f5f4f2]">
                    React, Python, Tailwind
                  </div>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                    Style
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[#f5f4f2]">
                    Clean, cinematic, responsive
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <span className="material-symbols-outlined text-[28px]">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
}

export default Hero;
