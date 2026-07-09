import { journeyItems } from '../data';

function Journey() {
  return (
    <section className="section-shell section-shell--tight" id="experience">
      <div className="mx-auto max-w-4xl">
        <div className="fade-in-up mb-xl text-center">
          <div className="section-kicker mx-auto">Experience</div>
          <h2 className="section-title">
            My <span className="accent">journey</span>
          </h2>
          <p className="section-copy mx-auto text-center">
            Evolution of my academic and professional path.
          </p>
        </div>
        <div className="relative ml-8">
          <div className="timeline-connector absolute bottom-0 left-0 top-0 w-[2px]" />
          {journeyItems.map(([period, title, description], index) => (
            <div
              key={title}
              className="fade-in-up group relative mb-xl pl-12"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute -left-[11px] top-1 h-[22px] w-[22px] rounded-full ring-8 ring-background transition-transform duration-300 group-hover:scale-125 ${
                  index === 0 ? 'bg-primary-container shadow-[0_0_15px_rgba(60,233,245,0.6)]' : 'bg-white/10 group-hover:bg-primary-container/40'
                }`}
              />
              <span className="mb-sm block text-sm font-bold uppercase tracking-widest text-primary-container">
                {period}
              </span>
              <h3 className="font-headline-lg text-xl text-on-surface transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl">
                {title}
              </h3>
              <p className="mt-2 text-base font-light text-on-surface-variant sm:text-lg">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
