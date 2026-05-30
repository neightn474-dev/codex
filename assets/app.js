const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const seedLeads = [
  { founder: 'Maya Chen', company: 'HelioStack', need: 'VP Sales', stage: 'Series B', status: 'Qualified', window: 'This week' },
  { founder: 'Jon Bell', company: 'Northplane AI', need: 'CFO', stage: 'Growth', status: 'Call booked', window: 'Next week' },
];
const firms = [
  { name: 'Northstar Talent Co.', specialization: 'GTM executives', industries: 'SaaS, AI', roles: 'VP Sales, CRO', geo: 'US/EU', rating: 94 },
  { name: 'Vector Executive', specialization: 'Finance leaders', industries: 'Fintech, Infra', roles: 'CFO, COO', geo: 'US', rating: 91 },
  { name: 'Meridian Search', specialization: 'Technical leadership', industries: 'Developer tools', roles: 'VP Engineering, CTO', geo: 'Global', rating: 87 },
  { name: 'Pinnacle Operators', specialization: 'CEO succession', industries: 'Marketplace, Consumer', roles: 'CEO, GM', geo: 'US', rating: 84 },
];
const cases = [
  { title: 'Series A infrastructure startup', industry: 'SaaS', role: 'VP Engineering', stage: 'Series A', challenge: 'Confidential engineering leadership mandate', outcome: 'Three qualified firms selected in nine days.' },
  { title: 'Regulated fintech platform', industry: 'Fintech', role: 'CFO', stage: 'Growth', challenge: 'First CFO hire before international expansion', outcome: 'Retained specialist with regulated-market CFO placements.' },
  { title: 'AI operations company', industry: 'SaaS', role: 'CEO', stage: 'Growth', challenge: 'Board-led CEO search requiring discretion', outcome: 'Shortlist narrowed from 22 firms to two trusted partners.' },
];

const getLeads = () => JSON.parse(localStorage.getItem('asteria-leads') || 'null') || seedLeads;
const setLeads = (leads) => localStorage.setItem('asteria-leads', JSON.stringify(leads));

function route() {
  const page = location.hash.replace('#', '') || 'home';
  const known = $(`[data-page="${page}"]`) ? page : 'home';
  $$('.page').forEach((section) => section.classList.toggle('active', section.dataset.page === known));
  $$('.site-nav a').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${known}`));
  if (known === 'case-studies') renderCases('all');
  if (known === 'admin') renderAdmin();
  window.scrollTo({ top: 0, behavior: 'instant' });
  observeReveals();
}

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal:not(.visible)').forEach((item) => observer.observe(item));
}

function animateCounters() {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.counter);
      let current = 0;
      const step = Math.max(1, Math.round(target / 48));
      const tick = () => {
        current = Math.min(target, current + step);
        element.textContent = current;
        if (current < target) requestAnimationFrame(tick);
      };
      tick();
      counterObserver.unobserve(element);
    });
  });
  $$('[data-counter]').forEach((counter) => counterObserver.observe(counter));
}

function initInteractions() {
  document.addEventListener('pointermove', (event) => {
    document.documentElement.style.setProperty('--x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--y', `${event.clientY}px`);
  });
  $$('.tilt-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
  $$('.magnetic').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const rect = button.getBoundingClientRect();
      button.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.12}px, ${(event.clientY - rect.top - rect.height / 2) * 0.16}px) translateY(-3px)`;
    });
    button.addEventListener('pointerleave', () => { button.style.transform = ''; });
  });
  $$('[data-accordion]').forEach((accordion) => {
    $$('.accordion-trigger', accordion).forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const isOpen = trigger.classList.toggle('open');
        trigger.setAttribute('aria-expanded', String(isOpen));
        $('span', trigger).textContent = isOpen ? '−' : '+';
      });
    });
  });
  $('.mobile-toggle').addEventListener('click', () => {
    const nav = $('#site-nav');
    const isOpen = nav.classList.toggle('open');
    $('.mobile-toggle').setAttribute('aria-expanded', String(isOpen));
  });
}

function initParticles() {
  const canvas = $('#particle-canvas');
  const context = canvas.getContext('2d');
  const particles = Array.from({ length: 72 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.0007, vy: (Math.random() - 0.5) * 0.0007 }));
  const draw = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    context.scale(dpr, dpr);
    context.clearRect(0, 0, rect.width, rect.height);
    particles.forEach((particle, index) => {
      particle.x = (particle.x + particle.vx + 1) % 1;
      particle.y = (particle.y + particle.vy + 1) % 1;
      const x = particle.x * rect.width;
      const y = particle.y * rect.height;
      context.fillStyle = 'rgba(112,231,255,.55)';
      context.beginPath();
      context.arc(x, y, 1.3, 0, Math.PI * 2);
      context.fill();
      particles.slice(index + 1).forEach((other) => {
        const ox = other.x * rect.width;
        const oy = other.y * rect.height;
        const distance = Math.hypot(x - ox, y - oy);
        if (distance < 115) {
          context.strokeStyle = `rgba(112,231,255,${(115 - distance) / 850})`;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(ox, oy);
          context.stroke();
        }
      });
    });
    requestAnimationFrame(draw);
  };
  draw();
}

function initForms() {
  $('#lead-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const leads = getLeads();
    leads.unshift({ ...data, status: 'New inquiry' });
    setLeads(leads);
    $('.form-status', form).textContent = 'Discovery request captured, CRM updated, and notification queued.';
    form.reset();
  });
  $('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const status = $('.form-status', event.currentTarget);
    if (data.email === 'admin@asteria.local' && data.password === 'asteria') {
      localStorage.setItem('asteria-auth', 'true');
      $('#login-form').classList.add('hidden');
      $('#admin-app').classList.remove('hidden');
      renderAdmin();
    } else {
      status.textContent = 'Invalid credentials for the demo workspace.';
    }
  });
  if (localStorage.getItem('asteria-auth') === 'true') {
    $('#login-form').classList.add('hidden');
    $('#admin-app').classList.remove('hidden');
  }
}

function renderCases(filter = 'all') {
  const grid = $('#case-grid');
  const filtered = cases.filter((item) => filter === 'all' || [item.industry, item.role, item.stage].includes(filter));
  grid.innerHTML = filtered.map((item) => `<article class="glass case-card tilt-card reveal visible"><p class="eyebrow">${item.stage}</p><h2>${item.title}</h2><div class="case-tags"><span>${item.industry}</span><span>${item.role}</span><span>${item.stage}</span></div><p><strong>Hiring challenge:</strong> ${item.challenge}</p><p><strong>Search process:</strong> Structured market map, weighted scoring, founder calibration, and reference-backed introductions.</p><p><strong>Outcome:</strong> ${item.outcome}</p></article>`).join('');
}

function renderAdmin() {
  if (localStorage.getItem('asteria-auth') !== 'true') return;
  const leads = getLeads();
  $('#metric-leads').textContent = leads.length;
  $('#metric-conversions').textContent = Math.max(1, Math.round(leads.length * 0.42));
  $('#metric-calls').textContent = leads.filter((lead) => String(lead.status).toLowerCase().includes('call')).length + 3;
  $('#metric-placements').textContent = Math.max(1, Math.round(leads.length * 0.16));
  $('#lead-table').innerHTML = leads.map((lead) => `<div class="table-row"><div><strong>${lead.founder}</strong><br><small>${lead.company} · ${lead.need} · ${lead.stage}</small></div><span>${lead.status}</span></div>`).join('');
  $('#firm-table').innerHTML = firms.map((firm) => `<div class="table-row"><div><strong>${firm.name}</strong><br><small>${firm.specialization} · ${firm.industries} · ${firm.roles} · ${firm.geo}</small></div><span>${firm.rating}</span></div>`).join('');
}

function initCaseFilters() {
  $$('#case-studies .chip').forEach((button) => {
    button.addEventListener('click', () => {
      $$('#case-studies .chip').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      renderCases(button.dataset.filter);
    });
  });
}

function initMatching() {
  $('#generate-match').addEventListener('click', () => {
    const role = $('#match-role').value;
    const scored = firms.map((firm) => ({ ...firm, score: firm.rating + (firm.roles.includes(role) ? 8 : 0) })).sort((a, b) => b.score - a.score).slice(0, 3);
    $('#match-results').innerHTML = scored.map((firm) => `<div class="table-row"><div><strong>${firm.name}</strong><br><small>${firm.specialization} · ${firm.geo}</small></div><span>${Math.min(99, firm.score)}%</span></div>`).join('');
  });
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', () => {
  initInteractions();
  initParticles();
  initForms();
  initCaseFilters();
  initMatching();
  animateCounters();
  route();
});
