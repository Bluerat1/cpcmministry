// NAV BURGER
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));

// ACTIVE NAV ON SCROLL
const sections = document.querySelectorAll('section[id], footer[id]');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  navItems.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--gold)' : '';
  });
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => revealObserver.observe(r));

// MINISTRY TABS
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// HERO DONATE WIDGET AMOUNT BUTTONS
document.querySelectorAll('.amount-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('custom-amount').value = btn.dataset.amount;
  });
});

// GIVE SECTION AMOUNT BUTTONS
document.querySelectorAll('.amount-btn-dark').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.amount-btn-dark').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// STATS COUNTER (banner)
function animateCounter(el) {
  const target = +el.dataset.target;
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString() + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.animated) {
      e.target.dataset.animated = '1';
      animateCounter(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num, .impact-number').forEach(el => counterObserver.observe(el));

// NEWSLETTER
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.querySelector('button').addEventListener('click', () => {
    const input = newsletterForm.querySelector('input');
    if (input.value) {
      alert('Thank you for subscribing! God bless you.');
      input.value = '';
    }
  });
}
