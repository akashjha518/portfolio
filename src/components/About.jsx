import { statCards } from '../data';

const statToneClasses = {
  primary: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black',
  secondary: 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-black',
  tertiary: 'bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-black',
};

function About() {
  return (
    <section className="section-shell" id="about">
      <div className="grid items-center gap-xl lg:grid-cols-12">
        <div className="fade-in-up lg:col-span-5">
          <div className="section-kicker">About</div>
          <h2 className="section-title">
            Creative <span className="accent">objective</span>
          </h2>
          <div className="section-copy space-y-6">
            <p>
              I am a versatile developer specializing in Python and modern web technologies. My approach combines rigorous analytical thinking with a passion for building scalable, user-centric digital products.
            </p>
            <p>
              Currently completing my M.Sc. in Informatics, I bridge the gap between backend logic and fluid frontend experiences, using ML libraries and modern frameworks to solve real-world problems.
            </p>
          </div>
        </div>
        <div className="fade-in-up lg:col-span-7 lg:pl-xl" style={{ transitionDelay: '100ms' }}>
          <div className="grid grid-cols-1 gap-lg sm:grid-cols-2">
            {statCards.map((stat) => (
              <div key={stat.label} className="glass-card group flex flex-col items-center justify-center rounded-[1.5rem] p-lg py-xl text-center">
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
