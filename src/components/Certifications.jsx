import { useEffect, useState } from 'react';
import { certificateGallery, certifications, greatLearningCertificateGallery } from '../data';

const accentStyles = {
  primary: {
    chip: 'bg-[#1c2f33] text-[#8deef5] border-[#8deef5]/15',
    border: 'hover:border-[#42dbe6]/35',
  },
  secondary: {
    chip: 'bg-[#222836] text-[#a7c2ff] border-[#a7c2ff]/15',
    border: 'hover:border-[#a7c2ff]/35',
  },
  tertiary: {
    chip: 'bg-[#1d2c29] text-[#b8ffe4] border-[#b8ffe4]/15',
    border: 'hover:border-[#b8ffe4]/35',
  },
};

function isPdfSource(src) {
  return /\.pdf(\?|#|$)/i.test(src);
}

function isExternalCertificateSource(src) {
  return /^https:\/\/www\.mygreatlearning\.com\/certificate\//i.test(src);
}

function getPdfPreviewFragment(src, thumbnail = false) {
  const baseFragment = thumbnail
    ? '#page=1&view=FitH&zoom=145&toolbar=0&navpanes=0&scrollbar=0'
    : '#page=1&view=FitH&zoom=100&toolbar=0&navpanes=0&scrollbar=0';

  return `${src}${baseFragment}`;
}

function CertificateMedia({ src, title, className, thumbnail = false }) {
  if (isPdfSource(src) || isExternalCertificateSource(src)) {
    const previewSrc = isPdfSource(src) ? getPdfPreviewFragment(src, thumbnail) : src;

    return (
      <iframe
        className={`${className} ${thumbnail ? 'pointer-events-none origin-top -translate-y-4 scale-[1.12]' : ''}`}
        src={previewSrc}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }

  return <img className={className} alt={title} src={src} loading="lazy" />;
}

function Certifications() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(certifications[0]);
  const [activeGallery, setActiveGallery] = useState(certificateGallery);
  const [activeGalleryTitle, setActiveGalleryTitle] = useState('All Certificates');
  const [zoomedCertificate, setZoomedCertificate] = useState(null);

  useEffect(() => {
    if (!galleryOpen && !zoomedCertificate) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        if (zoomedCertificate) {
          setZoomedCertificate(null);
          return;
        }

        setGalleryOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [galleryOpen, zoomedCertificate]);

  const getGalleryForCertificate = (certificate) => {
    if (certificate.galleryId === 'greatLearning') {
      return greatLearningCertificateGallery;
    }

    if (certificate.galleryId === 'allCertificates') {
      return certificateGallery;
    }

    return null;
  };

  const openGallery = (certificate) => {
    const gallery = getGalleryForCertificate(certificate);

    if (!gallery) {
      return;
    }

    setActiveGallery(gallery);
    setActiveGalleryTitle(certificate.galleryId === 'greatLearning' ? 'Great Learning Certificates' : 'All Certificates');
    setActiveCertificate(certificate);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setZoomedCertificate(null);
    setGalleryOpen(false);
  };

  return (
    <section className="section-shell" id="certifications">
      <div className="fade-in-up mb-xl max-w-3xl">
        <div className="section-kicker">Certificates</div>
        <h2 className="section-title">
          Verified <span className="accent">credentials</span>
        </h2>
        <p className="section-copy">
          Open a certificate card gallery, hover previews to zoom, and click any item to view it larger.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((certificate, index) => {
          const styles = accentStyles[certificate.accent] ?? accentStyles.primary;
          const gallery = getGalleryForCertificate(certificate);
          const isGalleryEntry = Boolean(gallery);

          return (
            <div
              key={certificate.title}
              className={`fade-in-up group overflow-hidden rounded-[1.35rem] border border-white/5 bg-[#171717] transition-all duration-300 hover:-translate-y-1 ${styles.border}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex min-h-[240px] flex-col justify-between p-5 sm:p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-primary-container ring-1 ring-white/10">
                  <span className="material-symbols-outlined text-[24px]">
                    {certificate.category === 'Workshop' ? 'experiment' : 'workspace_premium'}
                  </span>
                </div>

                <div className="mt-10">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
                    <span className={`h-1.5 w-1.5 rounded-full ${certificate.category === 'Academic' ? 'bg-[#a7c2ff]' : 'bg-[#8deef5]'}`} />
                    {certificate.category}
                  </div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/65">
                    {certificate.issuer}
                  </p>
                  <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/5 p-4 sm:p-5">
                <p className="text-sm leading-6 text-on-surface-variant">
                  {certificate.description}
                </p>
                <button
                  type="button"
                  className={`flex w-full items-center justify-center gap-3 rounded-[0.9rem] border px-4 py-3 text-left transition-colors ${
                    isGalleryEntry
                      ? 'border-[#8deef5]/20 bg-[#1c2f33]/40 text-[#8deef5] hover:bg-[#1c2f33]/60'
                      : 'border-white/10 bg-white/5 text-on-surface-variant hover:bg-white/10 hover:text-on-surface'
                  }`}
                  onClick={isGalleryEntry ? () => openGallery(certificate) : undefined}
                  disabled={!isGalleryEntry}
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
                    {isGalleryEntry ? 'View Certificate Gallery' : 'View Certificate'}
                  </span>
                  {isGalleryEntry ? <span className="material-symbols-outlined text-sm">photo_library</span> : null}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {galleryOpen ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/35 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate gallery"
          onClick={closeGallery}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-6xl flex-col overflow-y-auto rounded-[1.75rem] border border-white/10 bg-[#111111]/55 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant">
                  Gallery
                </p>
                <h3 className="mt-1 text-lg font-semibold text-on-surface sm:text-2xl">
                  {activeGalleryTitle}
                </h3>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-on-surface-variant transition-colors hover:bg-white/10 hover:text-on-surface"
                onClick={closeGallery}
                aria-label="Close gallery"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activeGallery.map((certificate) => (
                  <button
                    key={certificate.sourceUrl}
                    type="button"
                    className={`group overflow-hidden rounded-[1.2rem] border text-left transition-all duration-300 ${
                      activeCertificate?.sourceUrl === certificate.sourceUrl
                        ? 'border-primary-container/60 ring-2 ring-primary-container/25'
                        : 'border-white/5 hover:border-white/15'
                    }`}
                    onClick={() => {
                      setActiveCertificate(certificate);
                      setZoomedCertificate(certificate);
                    }}
                  >
                    <div
                      className={`relative overflow-hidden bg-[#ede8dd] p-2 ${
                        certificate.previewAspect ?? 'aspect-[4/5]'
                      }`}
                    >
                      <div className="h-full w-full overflow-hidden rounded-[1rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
                        <CertificateMedia
                          className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]"
                          src={certificate.image}
                          title={`${certificate.title} gallery thumbnail`}
                          thumbnail
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h4 className="text-sm font-semibold text-white">{certificate.title}</h4>
                        {isExternalCertificateSource(certificate.sourceUrl) ? (
                          <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#a7c2ff]">
                            Open preview
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <p className="mt-4 text-sm leading-6 text-on-surface-variant">
        The gallery is arranged in 3 columns on large screens. Click any thumbnail to open the larger preview.
      </p>

      {zoomedCertificate ? (
        <div
          className="fixed inset-0 z-[210] flex items-center justify-center bg-black/35 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${zoomedCertificate.title} preview`}
          onClick={() => setZoomedCertificate(null)}
        >
          <div
            className="group flex h-[92vh] w-full max-w-[min(96vw,1200px)] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#ede8dd] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-0 flex-[1_1_auto] overflow-hidden rounded-[1.15rem] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] ring-1 ring-black/5">
              <CertificateMedia
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                src={zoomedCertificate.image}
                title={`${zoomedCertificate.title} enlarged preview`}
              />
            </div>
            {isExternalCertificateSource(zoomedCertificate.sourceUrl) ? (
              <a
                className="flex items-center justify-center gap-2 border-t border-white/10 bg-black/70 px-5 py-4 text-sm font-semibold text-[#a7c2ff] transition-colors hover:bg-black/80"
                href={zoomedCertificate.sourceUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                Open Great Learning certificate
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Certifications;
