// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  document.getElementById('mobile-menu-button').addEventListener('click', () =>
    document.getElementById('mobile-menu').classList.toggle('hidden')
  );
  document.getElementById('mobile-menu-close').addEventListener('click', () =>
    document.getElementById('mobile-menu').classList.add('hidden')
  );

  // Chevron <details>
  document.querySelectorAll('aside details').forEach(d =>
    d.addEventListener('toggle', () => d.classList.toggle('open', d.open))
  );

  // AOS scroll reveal
  AOS.init({ duration:800, once:true });

  // Theme toggle buttons
  const themeBtns = document.querySelectorAll('.theme-toggle');
  const applyTheme = mode => {
    document.body.classList.toggle('light', mode==='light');
    themeBtns.forEach(b => b.textContent = mode==='light' ? '🌙' : '☀️');
  };
  const saved = localStorage.theme || 'dark';
  applyTheme(saved);
  themeBtns.forEach(btn => btn.addEventListener('click', () => {
    const next = document.body.classList.contains('light') ? 'dark' : 'light';
    localStorage.theme = next;
    applyTheme(next);
  }));

  // Copiar en <pre>
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.textContent='Copiar'; btn.className='absolute top-2 right-2 bg-blue-600 text-white p-1 rounded';
    pre.style.position='relative'; pre.append(btn);
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(pre.innerText);
      btn.textContent='¡Copiado!'; setTimeout(()=>btn.textContent='Copiar',1500);
    });

  });

  // Fade-in custom (para <h2>, <blockquote> o .fade-in)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});


  // Back to top
  const backBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => backBtn.classList.toggle('hidden', window.scrollY<200));
  backBtn.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
});