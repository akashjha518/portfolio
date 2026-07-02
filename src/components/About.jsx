import { statCards } from '../data';

const statToneClasses = {
  primary: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black',
  secondary: 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-black',
  tertiary: 'bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-black',
};

function About() {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl" id="about">
      <div className="grid items-center gap-xl py-xl lg:grid-cols-12">
        <div className="fade-in-up lg:col-span-5">
          <div className="relative mb-lg inline-block">
            <h2 className="relative z-10 font-display-md text-3xl text-primary-container sm:text-display-md">
              Creative Objective
            </h2>
            <div className="absolute -bottom-2 -right-4 h-1 w-24 bg-primary/30" />
          </div>
          <div className="space-y-lg font-body-lg text-base leading-relaxed text-on-surface-variant font-light sm:text-lg">
            <p>
              I am a versatile developer specializing in Python and modern Web Technologies. My approach combines rigorous analytical thinking with a passion for building scalable, user-centric digital products.
            </p>
            <p>
              Currently completing my M.Sc. in Informatics, I bridge the gap between complex backend logic and fluid frontend experiences, utilizing ML libraries and modern frameworks to solve real-world problems.
            </p>
          </div>
        </div>
        <div className="fade-in-up lg:col-span-7 lg:pl-xl" style={{ transitionDelay: '100ms' }}>
          <div className="grid grid-cols-2 gap-lg">
            {statCards.map((stat) => (
              <div key={stat.label} className="glass-card group flex flex-col items-center justify-center rounded-2xl p-lg py-xl text-center">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-500 ${statToneClasses[stat.tone]}`}>
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <span className={`mb-2 block font-display-md text-4xl sm:text-5xl ${stat.tone === 'primary' ? 'text-primary' : stat.tone === 'secondary' ? 'text-secondary' : 'text-tertiary'}`}>
                  {stat.value}
                </span>
                <span className="font-label-ui text-xs uppercase tracking-widest text-on-surface-variant">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
