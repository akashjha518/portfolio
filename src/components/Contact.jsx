function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get('name')?.toString().trim() || 'Someone';
    const email = form.get('email')?.toString().trim() || '';
    const message = form.get('message')?.toString().trim() || '';

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, email ? `Email: ${email}` : null, '', message || 'Hello Akash, I would like to get in touch.']
        .filter(Boolean)
        .join('\n'),
    );

    window.location.href = `mailto:jhaa60768@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-shell" id="contact">
      <div className="fade-in-up glass-card flex flex-col gap-xl rounded-[2rem] p-lg md:p-xl lg:flex-row">
        <div className="flex flex-col justify-center lg:w-5/12">
          <div className="section-kicker">Contact</div>
          <h2 className="section-title">
            Let&apos;s create <span className="accent">something iconic</span>
          </h2>
          <p className="section-copy">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Reach out and let&apos;s start a conversation.
          </p>
          <div className="mt-8 space-y-4">
            <a
              className="group flex items-center gap-md text-on-surface-variant transition-all hover:text-primary-container"
              href="mailto:jhaa60768@gmail.com"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-primary/10">
                <span className="material-symbols-outlined text-[24px]">mail</span>
              </div>
              <span className="text-base font-light sm:text-lg">jhaa60768@gmail.com</span>
            </a>
            <a
              className="group flex items-center gap-md text-on-surface-variant transition-all hover:text-primary-container"
              href="https://github.com/akashjha518"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-primary/10">
                <span className="material-symbols-outlined text-[24px]">code</span>
              </div>
              <span className="text-base font-light sm:text-lg">github.com/akashjha518</span>
            </a>
          </div>
        </div>

        <div className="lg:w-7/12">
          <div className="rounded-[1.5rem] border border-white/5 bg-white/5 p-lg md:p-xl">
            <form className="space-y-lg" onSubmit={handleSubmit}>
              <div className="grid gap-lg md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-surface-container-lowest px-md py-4 text-on-surface outline-none transition-all placeholder:text-white/20 focus:border-primary-container focus:ring-0"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-surface-container-lowest px-md py-4 text-on-surface outline-none transition-all placeholder:text-white/20 focus:border-primary-container focus:ring-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="ml-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-xl border border-white/10 bg-surface-container-lowest px-md py-4 text-on-surface outline-none transition-all placeholder:text-white/20 focus:border-primary-container focus:ring-0"
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  rows="5"
                  required
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
