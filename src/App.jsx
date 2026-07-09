import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleAnchorClick = (href) => (event) => {
    event.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="site-shell font-body-md text-body-md selection:bg-primary-container/30 selection:text-primary">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onNavigate={handleAnchorClick} />
      <main id="top">
        <Hero onNavigate={handleAnchorClick} />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <Footer onNavigate={handleAnchorClick} />
    </div>
  );
}

export default App;
