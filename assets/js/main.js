// main.js

gsap.registerPlugin(ScrollTrigger);

// Fade-up animation para secciones
gsap.utils.toArray('.fade-up').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

// Si quieres más animaciones, agrégalas aquí...
