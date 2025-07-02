document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animaciones de entrada inicial
  gsap.from(".hero h1", {
    duration: 1.2,
    y: -50,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from(".hero p.lead", {
    duration: 1.2,
    delay: 0.3,
    y: -20,
    opacity: 0,
    ease: "power2.out"
  });

  // Intro al hacer scroll
  gsap.from(".intro h2", {
    scrollTrigger: ".intro h2",
    duration: 1,
    opacity: 0,
    y: 40,
    ease: "power2.out"
  });

  gsap.from(".highlights li", {
    scrollTrigger: ".highlights",
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    ease: "power2.out"
  });

  // 🆕 Artículos: animación individual al scrollear
  document.querySelectorAll("article").forEach((article) => {
    gsap.from(article, {
      scrollTrigger: {
        trigger: article,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      duration: 0.8,
      opacity: 0,
      y: 40,
      ease: "power2.out",
    });
  });

  // Call to Action
  gsap.from(".call-to-action", {
    scrollTrigger: ".call-to-action",
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out"
  });
});
