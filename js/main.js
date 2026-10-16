// Menu responsivo, destaque da seção ativa e animação de entrada.
document.documentElement.classList.add('js');

const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});

menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

document.getElementById('ano').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

  const links = document.querySelectorAll('.menu a');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
}

// Filtro de projetos por tecnologia (gerado a partir das tags dos cartões).
(() => {
  const box = document.querySelector('.filters');
  const cards = [...document.querySelectorAll('#projetos .card')];
  if (!box || !cards.length) return;

  const techs = [...new Set(cards.flatMap((c) => [...c.querySelectorAll('.tags span')].map((t) => t.textContent)))]
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));
  const names = ['Todos', ...techs];

  names.forEach((name, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = name;
    b.setAttribute('aria-pressed', String(i === 0));
    b.addEventListener('click', () => {
      box.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      cards.forEach((c) => {
        const has = name === 'Todos' || [...c.querySelectorAll('.tags span')].some((t) => t.textContent === name);
        c.hidden = !has;
      });
    });
    box.append(b);
  });
  box.hidden = false;
})();
