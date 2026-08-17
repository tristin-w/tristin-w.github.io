// =============================================================
// Portfolio site behavior:
//  - mobile nav toggle
//  - pixel starfield background (drawn once)
//  - typewriter effect in the hero
//  - scroll-reveal for sections
//  - contact form -> mailto
//  - footer year
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  initStarfield();
  initNavToggle();
  initTypewriter();
  initScrollReveal();
  initContactForm();
});

// ---------- Pixel starfield ----------
function initStarfield() {
  const field = document.getElementById('starfield');
  if (!field) return;

  const w = 480, h = 260;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  const stars = 26;
  for (let i = 0; i < stars; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const size = Math.random() < 0.2 ? 2 : 1;
    const alpha = 0.3 + Math.random() * 0.5;
    ctx.fillStyle = `rgba(240,233,255,${alpha})`;
    ctx.fillRect(x, y, size, size);
  }

  field.style.backgroundImage = `url(${canvas.toDataURL()})`;
}

// ---------- Mobile nav ----------
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Typewriter effect for hero subtext ----------
function initTypewriter() {
  const target = document.getElementById('typewriterTarget');
  if (!target) return;

  const message = "Minor in Computer Engineering & Software Development. I build at the point where circuits meet code — signal processing, embedded systems, and the models that make sense of the data they produce.";
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    target.textContent = message;
    return;
  }

  let i = 0;
  target.innerHTML = '<span class="type-cursor">▌</span>';

  function type() {
    if (i <= message.length) {
      target.innerHTML = message.slice(0, i) + '<span class="type-cursor">▌</span>';
      i++;
      setTimeout(type, 14);
    }
  }
  setTimeout(type, 500);
}

// ---------- Scroll reveal ----------
function initScrollReveal() {
  const targets = document.querySelectorAll('.section, .project-card, .timeline-item');
  targets.forEach(el => el.classList.add('reveal'));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    targets.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
}

// ---------- Contact form -> mailto ----------
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Edit this address to your own.
    const to = 'your.email@nmsu.edu';
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
