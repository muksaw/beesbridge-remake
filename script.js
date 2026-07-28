/* BeesBridge — interactions */

/* ============================================
   Nav scroll state + mobile menu
   ============================================ */
const nav = document.getElementById('nav');
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');

function onScroll() {
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');

  // scroll progress
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.getElementById('scrollProgress').style.width = pct + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  mobileMenu.classList.remove('open');
}));

/* ============================================
   Reveal on intersection
   ============================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ============================================
   Animated stat counters
   ============================================ */
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(tick);
}
const countIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.dataset.count) {
      animateCount(entry.target);
      countIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('[data-count]').forEach(el => countIO.observe(el));

/* ============================================
   Floating tech pills: staggered reveal once hero is in view
   ============================================ */
(function pillReveal() {
  const pills = document.querySelectorAll('.tech-pill');
  if (!pills.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  pills.forEach(p => obs.observe(p));
})();

/* ============================================
   Mouse parallax on background gradient blobs
   ============================================ */
(function parallax() {
  const blob = document.querySelector('.bg-gradient');
  if (!blob || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  let raf = null;
  window.addEventListener('mousemove', (e) => {
    const w = window.innerWidth, h = window.innerHeight;
    tx = ((e.clientX / w) - 0.5) * 30;
    ty = ((e.clientY / h) - 0.5) * 24;
    if (!raf) raf = requestAnimationFrame(step);
  });
  function step() {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    blob.style.setProperty('--mx', cx.toFixed(2) + 'px');
    blob.style.setProperty('--my', cy.toFixed(2) + 'px');
    if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
      raf = requestAnimationFrame(step);
    } else {
      raf = null;
    }
  }
})();

/* ============================================
   Particle background canvas
   ============================================ */
(function particles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  const N = 60;
  const pts = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < N; i++) {
    pts.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.20 * dpr,
      vy: (Math.random() - 0.5) * 0.20 * dpr,
      r: (Math.random() * 1.6 + 0.4) * dpr,
      // gold range: 30°–45° (orange→amber)
      hue: 30 + Math.random() * 15
    });
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);

    // connect close pairs
    for (let i = 0; i < N; i++) {
      const a = pts[i];
      for (let j = i + 1; j < N; j++) {
        const b = pts[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        const max = 120 * dpr;
        if (d2 < max * max) {
          const op = 1 - Math.sqrt(d2) / max;
          ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 80%, 60%, ${op * 0.10})`;
          ctx.lineWidth = 1 * dpr;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // draw points
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, 0.45)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) frame();
})();

/* ============================================
   Temporary announcement bar + LinkedIn embed modal
   ============================================ */
(function announcementBanner() {
  const banner = document.getElementById('promoBanner');
  const modal = document.getElementById('promoBannerModal');
  const backdrop = document.getElementById('promoModalBackdrop');
  if (!banner) return;

  // Edit these two dates to change how long the bar shows.
  // To end it early, just delete the .promo-banner / .promo-modal blocks from index.html.
  const startDate = new Date('2026-07-27');
  const endDate = new Date('2026-08-10');

  const now = new Date();

  function removeBanner() {
    banner.remove();
    document.body.classList.remove('has-banner');
    if (modal) modal.remove();
    if (backdrop) backdrop.remove();
  }

  if (now < startDate || now > endDate) {
    removeBanner();
    return;
  }

  document.body.classList.add('has-banner');

  function syncHeight() {
    document.documentElement.style.setProperty('--banner-h', banner.offsetHeight + 'px');
  }
  syncHeight();
  new ResizeObserver(syncHeight).observe(banner);
  window.addEventListener('resize', syncHeight);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeight);

  document.getElementById('promoBannerClose').addEventListener('click', removeBanner);

  /* Modal: opened on demand, LinkedIn iframes only load once actually requested */
  const toggle = document.getElementById('promoBannerToggle');
  const modalClose = document.getElementById('promoModalClose');
  if (!toggle || !modal || !backdrop) return;

  let embedsLoaded = false;
  function loadEmbeds() {
    if (embedsLoaded) return;
    embedsLoaded = true;
    modal.querySelectorAll('iframe.promo-embed[data-src]').forEach((frame) => {
      frame.src = frame.dataset.src;
    });
  }

  function openModal() {
    loadEmbeds();
    modal.hidden = false;
    backdrop.hidden = false;
    requestAnimationFrame(() => {
      modal.classList.add('open');
      backdrop.classList.add('open');
    });
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!modal.classList.contains('open')) {
        modal.hidden = true;
        backdrop.hidden = true;
      }
    }, 260);
  }

  toggle.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();
