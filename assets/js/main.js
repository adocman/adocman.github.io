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
    document.body.classList.toggle('light', mode === 'light');
    themeBtns.forEach(b => b.textContent = mode === 'light' ? '☀️' : '🌙');
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
    btn.textContent = 'Copiar';
    btn.className = 'absolute top-2 right-2 bg-blue-600 text-white p-1 rounded';
    pre.style.position = 'relative';
    pre.append(btn);
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(pre.innerText);
      btn.textContent = '¡Copiado!';
      setTimeout(() => btn.textContent = 'Copiar', 1500);
    });
  });

  // Table of Contents + Scroll-Spy
  const tocList = document.getElementById('toc-list');
  if (tocList) {
    const headers = document.querySelectorAll('main#content h2, main#content h3');
    let currentLevel = 2;
    const stack = [tocList];
    headers.forEach(h => {
      if (!h.id) {
        h.id = h.textContent.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
      }
      const level = Number(h.tagName.charAt(1));
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent;
      li.appendChild(a);
      if (level > currentLevel) {
        const ul = document.createElement('ul');
        ul.classList.add('pl-4', 'space-y-1');
        stack[0].lastElementChild.appendChild(ul);
        stack.unshift(ul);
      } else if (level < currentLevel) {
        stack.shift();
      }
      currentLevel = level;
      stack[0].appendChild(li);
    });
    const links = tocList.querySelectorAll('a');
    window.addEventListener('scroll', () => {
      const fromTop = window.scrollY + 120;
      links.forEach(link => {
        const section = document.getElementById(link.hash.slice(1));
        if (!section) return;
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  }

  // Fade-in custom
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  
});
