document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero text fill on scroll
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      window.addEventListener('scroll', () => {
        const trigger = window.scrollY / window.innerHeight;
        if (trigger > 0.2) heroTitle.classList.add('filled');
        else heroTitle.classList.remove('filled');
      });
    }
  
    // 2. Fade‑in sections
    const faders = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          o.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    faders.forEach(el => obs.observe(el));
  });
  