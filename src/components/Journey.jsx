function Journey() {
  return (
    <section className="mx-auto max-w-4xl px-gutter py-xl" id="experience">
      <div className="fade-in-up mb-xl text-center">
        <h2 className="font-display-md text-3xl text-on-surface sm:text-display-md">
          My <span className="text-primary-container">Journey</span>
        </h2>
        <p className="mt-2 font-light text-on-surface-variant">
          Evolution of my academic and professional path.
        </p>
      </div>
      <div className="relative ml-8">
        <div className="timeline-connector absolute bottom-0 left-0 top-0 w-[2px]" />
        {[
          ['2024 - 2026 (Expected)', 'M.Sc. Informatics', 'Specializing in Advanced Computing and Digital Systems architecture. Focused on bridging informatics with human-centric design.'],
          ['2020 - 2023', 'B.Sc. Electronic Science', 'Deep technical foundation in hardware-software integration, digital electronics, and signal processing.'],
          ['Summer 2022', 'Elite Summer Fellow', 'Researched and built components for Virtual Laboratory platforms, contributing to open-access scientific education tools.'],
        ].map(([period, title, description], index) => (
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
    </section>
  );
}

export default Journey;
