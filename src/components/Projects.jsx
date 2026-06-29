import { featuredProjects, otherProjects } from '../data';

function Projects() {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl" id="projects">
      <div className="fade-in-up mb-xl flex flex-col items-end justify-between gap-md md:flex-row">
        <div>
          <h2 className="mb-sm font-display-md text-display-md text-on-surface">
            Featured <span className="text-primary-container">Work</span>
          </h2>
          <p className="font-light text-on-surface-variant">
            A selection of my most significant technical achievements.
          </p>
        </div>
        <div className="flex gap-md pb-1">
          <div className="hidden h-[1px] w-24 self-center bg-primary-container/20 md:block" />
          <a
            className="font-label-ui text-primary-container transition-all hover:underline underline-offset-8"
            href="https://github.com/akashjha518?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            View all on GitHub
          </a>
        </div>
      </div>

      <div className="mb-xl grid gap-md sm:grid-cols-2 xl:grid-cols-4">
        {featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className="glass-card fade-in-up group flex flex-col overflow-hidden rounded-2xl"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-md">
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      project.color === 'primary'
                        ? 'bg-primary/10 text-primary-container'
                        : project.color === 'tertiary'
                          ? 'bg-tertiary/10 text-tertiary'
                          : 'bg-secondary/10 text-secondary'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 font-headline-md text-lg text-on-surface transition-colors group-hover:text-primary-container">
                {project.title}
              </h3>
              <p className="mb-md flex-1 text-sm font-light leading-relaxed text-on-surface-variant">{project.description}</p>
              <div className="mt-auto flex gap-2">
                <a
                  className="flex-1 rounded-lg bg-primary-container px-3 py-2.5 text-center text-xs font-label-ui text-on-primary-container transition-colors hover:bg-primary-container/90"
                  href={project.primaryUrl || '#'}
                  target={project.primaryUrl ? '_blank' : undefined}
                  rel={project.primaryUrl ? 'noreferrer' : undefined}
                  onClick={project.primaryUrl ? undefined : (event) => event.preventDefault()}
                >
                  {project.primaryAction}
                </a>
                <a className="flex items-center justify-center rounded-lg bg-white/5 p-2.5 transition-all hover:bg-white/10" href={project.url} target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined text-primary">open_in_new</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="fade-in-up border-t border-white/5 pt-xl">
        <h2 className="mb-lg font-display-md text-display-md text-on-surface">
          Other Technical <span className="text-primary-container">Projects</span>
        </h2>
        <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map(([title, tag, icon, description, url]) => (
            <div key={title} className="group flex h-full flex-col rounded-xl p-lg glass-card">
              <div className="mb-md flex items-start justify-between">
                <div className="rounded-lg border border-primary/10 bg-primary/5 p-2 transition-colors group-hover:border-primary/30">
                  <span className="material-symbols-outlined text-primary">{icon}</span>
                </div>
                <span className="rounded bg-white/5 px-2 py-0.5 font-code-sm text-[10px] text-on-surface-variant">{tag}</span>
              </div>
              <h4 className="mb-2 font-headline-md text-lg text-on-surface transition-colors group-hover:text-primary-container">
                {title}
              </h4>
              <p className="mb-md flex-1 text-sm font-light text-on-surface-variant">{description}</p>
              <a
                className="flex items-center gap-2 text-xs font-label-ui text-primary-container transition-all hover:gap-3"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                Repository
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
