import { certifications } from '../data';

const accentStyles = {
  primary: {
    icon: 'bg-[#232727] text-[#8deef5]',
    title: 'text-[#42dbe6]',
    button: 'text-[#42dbe6] border-white/10 hover:border-[#42dbe6]/40',
  },
  secondary: {
    icon: 'bg-[#262b34] text-[#a7c2ff]',
    title: 'text-[#a7c2ff]',
    button: 'text-[#a7c2ff] border-white/10 hover:border-[#a7c2ff]/40',
  },
  tertiary: {
    icon: 'bg-[#24302c] text-[#b8ffe4]',
    title: 'text-[#b8ffe4]',
    button: 'text-[#b8ffe4] border-white/10 hover:border-[#b8ffe4]/40',
  },
};

function Certifications() {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl" id="certifications">
      <div className="fade-in-up mb-xl text-center">
        <h2 className="font-display-md text-display-md text-on-surface">
          Academic <span className="text-primary-container">Certifications</span>
        </h2>
        <p className="mt-3 text-on-surface-variant">
          Professional recognition and specialized training milestones.
        </p>
      </div>

      <div className="grid gap-lg lg:grid-cols-3">
        {certifications.map((cert, index) => {
          const styles = accentStyles[cert.accent];

          return (
            <article
              key={cert.title}
              className="fade-in-up rounded-3xl border border-white/5 bg-[#171717] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}>
                <span className="material-symbols-outlined text-[24px]">{cert.icon}</span>
              </div>

              <h3 className="mb-2 text-2xl font-semibold text-on-surface">
                {cert.title}
              </h3>
              <p className={`mb-4 text-[13px] font-bold uppercase tracking-[0.18em] ${styles.title}`}>
                {cert.issuer}
              </p>
              <p className="mb-8 min-h-[84px] text-sm leading-6 text-on-surface-variant">
                {cert.description}
              </p>

              <a
                className={`flex h-12 items-center justify-center rounded-xl border bg-transparent text-sm font-semibold transition-all ${styles.button}`}
                href={cert.actionUrl}
                onClick={(event) => event.preventDefault()}
              >
                {cert.actionLabel}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;
