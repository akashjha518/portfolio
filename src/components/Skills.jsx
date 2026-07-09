import { skills } from '../data';

function Skills() {
  return (
    <section className="relative py-xl" id="skills">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative z-10 section-shell section-shell--tight">
        <div className="fade-in-up mb-xl text-center">
          <div className="section-kicker mx-auto">Skills</div>
          <h2 className="section-title">
            Technical <span className="accent">capabilities</span>
          </h2>
          <p className="section-copy mx-auto text-center">
            A curated stack of technologies I use to bring complex ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card fade-in-up rounded-[1.5rem] p-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <span
                  className="material-symbols-outlined text-[28px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {skill.icon}
                </span>
              </div>
              <h3 className="mb-md font-headline-lg text-lg text-on-surface sm:text-xl">{skill.title}</h3>
              <ul className="space-y-3 font-light text-on-surface-variant">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
