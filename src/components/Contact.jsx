function Contact() {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl" id="contact">
      <div className="fade-in-up glass-card flex flex-col items-stretch gap-xl rounded-[2rem] p-lg md:p-xl lg:flex-row">
        <div className="flex flex-col justify-center lg:w-5/12">
          <h2 className="mb-lg font-display-md text-3xl leading-tight text-on-surface sm:text-4xl md:text-5xl">
            Let's Create <br />
            <span className="text-primary-container">Something Iconic</span>
          </h2>
          <p className="mb-xl text-base leading-relaxed text-on-surface-variant font-light sm:text-lg">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Reach out and let&apos;s start a conversation.
          </p>
          <div className="space-y-6">
            <a className="group flex items-center gap-md text-on-surface-variant transition-all hover:text-primary-container" href="mailto:jhaa6768@gmail.com">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-primary/10">
                <span className="material-symbols-outlined text-[24px]">mail</span>
              </div>
              <span className="text-base font-light sm:text-lg">jhaa6768@gmail.com</span>
            </a>
            <a className="group flex items-center gap-md text-on-surface-variant transition-all hover:text-primary-container" href="https://github.com/akashjha518" target="_blank" rel="noreferrer">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-primary/10">
                <span className="material-symbols-outlined text-[24px]">code</span>
              </div>
              <span className="text-base font-light sm:text-lg">github.com/akashjha518</span>
            </a>
          </div>
        </div>
        <div className="lg:w-7/12">
          <div className="rounded-2xl border border-white/5 bg-white/5 p-lg md:p-xl">
            <form className="space-y-lg">
              <div className="grid gap-lg md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Name
                  </label>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-surface-container-lowest px-md py-4 text-on-surface outline-none transition-all placeholder:text-white/20 focus:border-primary-container focus:ring-0"
                    placeholder="Full Name"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Email
                  </label>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-surface-container-lowest px-md py-4 text-on-surface outline-none transition-all placeholder:text-white/20 focus:border-primary-container focus:ring-0"
                    placeholder="john@email.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="ml-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Message
                </label>
                <textarea
                  className="w-full rounded-xl border border-white/10 bg-surface-container-lowest px-md py-4 text-on-surface outline-none transition-all placeholder:text-white/20 focus:border-primary-container focus:ring-0"
                  placeholder="How can I help you?"
                  rows="5"
                />
              </div>
              <button
                className="w-full rounded-xl bg-primary-container py-4 text-base font-headline-md text-on-primary-container transition-all hover:shadow-[0_0_30px_rgba(60,233,245,0.3)] active:scale-[0.98] sm:text-lg"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
