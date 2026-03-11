/* ═══════════════════════════════════════════════════════
   BHARATHKUMAR PALTHUR — PORTFOLIO JS
   ═══════════════════════════════════════════════════════ */

/* ── DATA ───────────────────────────────────────────────── */
const skillBars = [
  { name: 'AWS Cloud Services',       percent: 90, color: 'linear-gradient(90deg,#ff9900,#ffb74d)' },
  { name: 'Linux Administration',     percent: 88, color: 'linear-gradient(90deg,#00d4ff,#00ff9d)' },
  { name: 'Infrastructure Monitoring',percent: 85, color: 'linear-gradient(90deg,#00d4ff,#0099cc)' },
  { name: 'VM & Storage Management',  percent: 87, color: 'linear-gradient(90deg,#a78bfa,#7c3aed)' },
  { name: 'Patching & Automation',    percent: 83, color: 'linear-gradient(90deg,#00ff9d,#00d4ff)' },
  { name: 'SSL & Certificate Mgmt',   percent: 80, color: 'linear-gradient(90deg,#f59e0b,#fbbf24)' },
];

const skillIcons = [
  { icon: 'fab fa-aws',             label: 'AWS',       color: '#ff9900' },
  { icon: 'fab fa-linux',           label: 'Linux',     color: '#00d4ff' },
  { icon: 'fas fa-cloud',           label: 'CloudWatch',color: '#00d4ff' },
  { icon: 'fas fa-eye',             label: 'SolarWinds',color: '#f59e0b' },
  { icon: 'fas fa-paw',             label: 'BigPanda',  color: '#a78bfa' },
  { icon: 'fas fa-ticket-alt',      label: 'ServiceNow',color: '#22d3ee' },
  { icon: 'fas fa-shield-virus',    label: 'Automox',   color: '#00ff9d' },
  { icon: 'fas fa-database',        label: 'EFS / EBS', color: '#fb7185' },
  { icon: 'fas fa-code-branch',     label: 'Lambda',    color: '#f59e0b' },
  { icon: 'fas fa-bell',            label: 'SNS',       color: '#f97316' },
  { icon: 'fas fa-hdd',             label: 'Veritas',   color: '#818cf8' },
  { icon: 'fas fa-project-diagram', label: 'TIC',       color: '#34d399' },
];

const experiences = [
  {
    title: 'Infra Managed Service Analyst',
    company: 'Accenture – AWS & GCP Runtime & CIS Operations',
    period: 'Jan 2024 – Present',
    badge: 'Current Role',
    active: true,
    points: [
      'Managed 6000+ Linux and Windows servers hosted on AWS across multiple regions for SAP cloud customers.',
      'Maintained 100% SLA by proactive monitoring via CloudWatch, AWS Health Dashboard, and event log analysis.',
      'Automated patching pipelines using Automox and TIC tool; executed manual patching for edge cases.',
      'Performed VM resize, capacity reservation, snapshots via CSM, and virtual IP movements.',
      'Managed EFS/EBS volume mounting, unmounting, and extension of HDB data/log volumes.',
      'Deployed Lambda functions, created SNS topics and subscriptions for event-driven automation.',
      'Renewed SSL/TLS certificates on container services; performed Mashup certificate lifecycle management.',
      'Acted as SPOC for weekly/monthly service data reporting to clients; maintained and updated client wikis.',
      'Monitored infrastructure using SolarWinds and Big Panda for real-time alert triage.',
      'Performed EFS replication from Multi-AZ to Single-AZ and managed Splunk/Kernel version upgrades.',
    ],
  },
];

const certifications = [
  {
    name: 'Microsoft Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    icon: 'fab fa-microsoft',
    iconColor: '#00a4ef',
    bgColor: 'rgba(0, 164, 239, 0.1)',
  },
];

const awards = [
  {
    name: 'SAP Account Hero',
    org: 'Accenture / SAP',
    icon: '🏆',
    accentColor: '#f59e0b',
    gradientTop: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
    desc: 'Recognized for outstanding contributions and dedication to SAP cloud runtime operations, exceeding client expectations.',
  },
  {
    name: 'SAP Truly Human Award',
    org: 'Accenture / SAP',
    icon: '⭐',
    accentColor: '#a78bfa',
    gradientTop: 'linear-gradient(90deg, #a78bfa, #c4b5fd)',
    desc: 'Awarded for exemplifying Accenture\'s core value of being truly human — empathy, teamwork, and excellence in every interaction.',
  },
];

const typedRoles = [
  'Infrastructure Analyst',
  'AWS Cloud Engineer',
  'Linux Systems Admin',
  'DevOps Practitioner',
  'Production Support Lead',
];

/* ── AOS ─────────────────────────────────────────────────── */
AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });

/* ── Scroll Progress ─────────────────────────────────────── */
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = scrolled + '%';
});

/* ── Navbar ──────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => observer.observe(s));

/* ── Back to Top ─────────────────────────────────────────── */
const backTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 300);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── Counter Animation ───────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(step);
}

const counters = document.querySelectorAll('.stat-num[data-target]');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

/* ── Typing Animation ────────────────────────────────────── */
const typedEl = document.getElementById('typed-role');
let roleIdx = 0, charIdx = 0, isDeleting = false;

function typeLoop() {
  const current = typedRoles[roleIdx];
  if (!isDeleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      setTimeout(() => { isDeleting = true; typeLoop(); }, 2000);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % typedRoles.length;
    }
  }
  setTimeout(typeLoop, isDeleting ? 45 : 90);
}
setTimeout(typeLoop, 800);

/* ── Skill Bars ──────────────────────────────────────────── */
function renderSkillBars() {
  const container = document.getElementById('skill-bars-container');
  container.innerHTML = skillBars.map(s => `
    <div class="skill-bar-item" data-aos="fade-right" data-aos-delay="150">
      <div class="skill-bar-header">
        <span class="skill-bar-name">${s.name}</span>
        <span class="skill-bar-percent">${s.percent}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-target="${s.percent}" style="background:${s.color}"></div>
      </div>
    </div>
  `).join('');

  // Animate bars on scroll
  const fills = container.querySelectorAll('.skill-bar-fill');
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.target + '%';
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  fills.forEach(f => barObserver.observe(f));
}

/* ── Skill Icons ─────────────────────────────────────────── */
function renderSkillIcons() {
  const container = document.getElementById('skill-icons-container');
  container.innerHTML = skillIcons.map((s, i) => `
    <div class="skill-icon-card" data-aos="zoom-in" data-aos-delay="${i * 50}">
      <i class="${s.icon}" style="color:${s.color}"></i>
      <span class="icon-label">${s.label}</span>
    </div>
  `).join('');
}

/* ── Experience Timeline ─────────────────────────────────── */
function renderExperience() {
  const container = document.getElementById('timeline-container');
  container.innerHTML = experiences.map((exp, i) => `
    <div class="timeline-item" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="timeline-dot ${exp.active ? 'active' : ''}"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <div class="timeline-title">${exp.title}</div>
            <div class="timeline-company">${exp.company}</div>
            <div class="timeline-period"><i class="fas fa-calendar-alt"></i> ${exp.period}</div>
          </div>
          ${exp.badge ? `<span class="timeline-badge">${exp.badge}</span>` : ''}
        </div>
        <ul class="timeline-points">
          ${exp.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ── Certifications ──────────────────────────────────────── */
function renderCerts() {
  const container = document.getElementById('certs-container');
  container.innerHTML = certifications.map((c, i) => `
    <div class="cert-card" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="cert-icon" style="background:${c.bgColor}; color:${c.iconColor}">
        <i class="${c.icon}"></i>
      </div>
      <div class="cert-info">
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <span class="cert-badge">${c.code}</span>
      </div>
    </div>
  `).join('');
}

/* ── Awards ──────────────────────────────────────────────── */
function renderAwards() {
  const container = document.getElementById('awards-container');
  container.innerHTML = awards.map((a, i) => `
    <div class="award-card" data-aos="fade-up" data-aos-delay="${i * 150}"
         style="--award-accent:${a.accentColor}">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${a.gradientTop};border-radius:12px 12px 0 0"></div>
      <div class="award-icon">${a.icon}</div>
      <div class="award-name">${a.name}</div>
      <div class="award-org">${a.org}</div>
      <div class="award-desc">${a.desc}</div>
    </div>
  `).join('');
}

/* ── Contact Form Validation ─────────────────────────────── */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const successMsg = document.getElementById('form-success');

  function validate() {
    let valid = true;
    const fields = [
      { id: 'name',    errId: 'name-error',    msg: 'Please enter your name.',            check: v => v.trim().length >= 2 },
      { id: 'email',   errId: 'email-error',   msg: 'Please enter a valid email.',        check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id: 'subject', errId: 'subject-error', msg: 'Please enter a subject.',            check: v => v.trim().length >= 3 },
      { id: 'message', errId: 'message-error', msg: 'Please enter a message (10+ chars).', check: v => v.trim().length >= 10 },
    ];
    fields.forEach(f => {
      const el = document.getElementById(f.id);
      const errEl = document.getElementById(f.errId);
      if (!f.check(el.value)) {
        el.classList.add('error');
        errEl.textContent = f.msg;
        valid = false;
      } else {
        el.classList.remove('error');
        errEl.textContent = '';
      }
    });
    return valid;
  }

  // Live validation on blur
  ['name','email','subject','message'].forEach(id => {
    document.getElementById(id).addEventListener('blur', validate);
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    const data = {
      name:    document.getElementById('name').value,
      email:   document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };

    try {
      const res = await fetch('https://formspree.io/f/mdawgkrq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        submitBtn.style.display = 'none';
        successMsg.style.display = 'flex';
        successMsg.style.alignItems = 'center';
        successMsg.style.gap = '8px';
        successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Message sent! Bharathkumar will get back to you soon.';
        form.reset();
      } else {
        const json = await res.json();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        alert(json?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      alert('Network error. Please check your connection and try again.');
    }
  });
}

/* ── Particle System ─────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const NUM = Math.min(70, Math.floor(window.innerWidth / 20));
  const particles = Array.from({ length: NUM }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    radius: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.12 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  }
  draw();
}

/* ── Init All ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderSkillBars();
  renderSkillIcons();
  renderExperience();
  renderCerts();
  renderAwards();
  setupContactForm();
  initParticles();
});
