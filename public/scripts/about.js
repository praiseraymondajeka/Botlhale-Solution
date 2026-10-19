(() => {
/* ---- Header scroll ---- */
const hdr = document.getElementById('hdr');
window.addEventListener('scroll', () => {
  hdr.classList.toggle('sc', window.scrollY > 60);
  document.getElementById('bt').classList.toggle('v', window.scrollY > 400);
});

/* ---- Mobile menu ---- */
const hbg = document.getElementById('hbg'), mm = document.getElementById('mm');
hbg.addEventListener('click', () => { hbg.classList.toggle('op'); mm.classList.toggle('op'); });
mm.querySelectorAll('.ml,.btn').forEach(el => el.addEventListener('click', () => {
  hbg.classList.remove('op'); mm.classList.remove('op');
}));

/* ---- Scroll reveal ---- */
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('iv'); ro.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.rv,.rl,.rr').forEach(el => ro.observe(el));

/* ---- Why-us row hover ---- */
document.querySelectorAll('.wp-row').forEach(row => {
  row.addEventListener('mouseenter', () => {
    row.style.borderColor = 'var(--red)';
    row.style.transform = 'translateX(5px)';
    row.style.boxShadow = '0 6px 24px rgba(0,0,0,0.07)';
    const icon = row.querySelector('div > div');
    if (icon) { icon.style.background = 'var(--red)'; icon.style.color = 'var(--white)'; }
  });
  row.addEventListener('mouseleave', () => {
    row.style.borderColor = 'var(--border)';
    row.style.transform = '';
    row.style.boxShadow = '';
    const icon = row.querySelector('div > div');
    if (icon) { icon.style.background = 'var(--red-tint)'; icon.style.color = 'var(--red)'; }
  });
});

/* ---- Counters ---- */
function animCount(el) {
  const t = +el.dataset.count, s = el.dataset.sfx || '+';
  let v = 0; const step = t / (1800 / 16);
  const i = setInterval(() => {
    v = Math.min(v + step, t);
    el.textContent = Math.floor(v).toLocaleString() + s;
    if (v >= t) clearInterval(i);
  }, 16);
}
let counted = false;
const cObs = new IntersectionObserver(([e]) => {
  if (e.isIntersecting && !counted) {
    counted = true;
    document.querySelectorAll('.sb-num[data-count]').forEach(animCount);
  }
}, { threshold: 0.4 });
const sbSection = document.querySelector('.stats-banner');
if (sbSection) cObs.observe(sbSection);

/* ---- Back to top ---- */
document.getElementById('bt').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---- Smooth scroll ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const t = document.querySelector(a.getAttribute('href'));
  if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}));

/* ---- Newsletter ---- */
const nlb = document.getElementById('nlb');
if (nlb) {
  nlb.addEventListener('click', () => {
    const email = document.getElementById('nle').value.trim();
    if (email && email.includes('@')) {
      nlb.textContent = '✓ Subscribed!'; nlb.style.background = '#1a6e38';
      setTimeout(() => { nlb.textContent = 'Get Industry Alerts'; nlb.style.background = ''; document.getElementById('nle').value = ''; }, 3000);
    } else {
      nlb.textContent = 'Enter valid email'; nlb.style.background = '#7a1a1a';
      setTimeout(() => { nlb.textContent = 'Get Industry Alerts'; nlb.style.background = ''; }, 2500);
    }
  });
}
})();
