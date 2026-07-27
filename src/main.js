import './style.css';
import { gsap } from 'gsap';

const app = document.getElementById('app');

const stageData = [
  {
    id: 'build',
    title: 'Build',
    label: 'Product shaping',
    detail: 'I turn a real problem into a working feature in Java/Spring Boot, React, or Node/Express.',
    metric: 'Backend + UI',
  },
  {
    id: 'test',
    title: 'Test',
    label: 'QA automation',
    detail: 'I wire Playwright tests around critical flows, mock external APIs, and keep the suite runnable in CI.',
    metric: 'Playwright + CI',
  },
  {
    id: 'deploy',
    title: 'Deploy',
    label: 'Release confidence',
    detail: 'I ship with the same discipline I use in automation: fast feedback, repeatable checks, and fewer surprises.',
    metric: 'GitHub Actions',
  },
];

app.innerHTML = `
  <nav class="site-nav" aria-label="Primary">
    <div class="wrap nav-shell">
      <a href="#top" class="brand">Ruchit Chudasama<span>.</span></a>
      <div class="nav-links">
        <a href="#work">Work</a>
        <a href="#qa">QA</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="nav-actions">
        <a class="btn btn-ghost" href="https://github.com/ruchit3601" target="_blank" rel="noopener">GitHub</a>
        <a class="btn btn-primary" href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <main id="top">
    <section class="hero wrap">
      <div class="hero-copy reveal">
        <p class="kicker">From student curiosity to shipped products</p>
        <h1>I started by solving my own problems, then learned how to prove them.</h1>
        <p class="hero-text">I’m Ruchit Chudasama. I began as a student who wanted better tools for everyday challenges, then grew into a developer who could build the product, the backend, and the automated tests that make it reliable. Every step in my journey added a new layer: curiosity, craft, and now ownership.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#work">See the work</a>
          <a class="btn btn-ghost" href="https://www.linkedin.com/in/ruchit-chudasama-040070211/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
        <ul class="hero-highlights">
          <li>Java / Spring Boot</li>
          <li>React / Node.js / Express</li>
          <li>Playwright · GitHub Actions · API mocking</li>
        </ul>
      </div>

      <div class="hero-panel reveal" aria-labelledby="pipeline-title">
        <div class="panel-head">
          <div>
            <p class="panel-eyebrow">Signature interaction</p>
            <h2 id="pipeline-title">Delivery pipeline</h2>
          </div>
          <span class="panel-pill">CI → QA → Deploy</span>
        </div>
        <div id="pipeline" class="pipeline-shell"></div>
        <div class="hero-metrics">
          <div>
            <strong>Step 1</strong>
            <span>student curiosity turned into side projects</span>
          </div>
          <div>
            <strong>Step 2</strong>
            <span>real internships and contracts sharpened delivery</span>
          </div>
          <div>
            <strong>Step 3</strong>
            <span>full-stack building with QA thinking became the norm</span>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="wrap section reveal">
      <div class="section-head">
        <p class="kicker">The story in projects</p>
        <h2>Each project began with a problem I felt personally, then grew into something real.</h2>
      </div>
      <div class="project-grid">
        <article class="project-card">
          <div class="project-top">
            <h3>TEF Speaking Coach</h3>
            <span class="project-badge">AI speaking practice</span>
          </div>
          <p>As a student preparing for the TEF exam, I needed a better way to practice speaking. That need became a full tool for speech capture, transcription, and scoring.</p>
        </article>
        <article class="project-card">
          <div class="project-top">
            <h3>JobPilot</h3>
            <span class="project-badge">Chrome extension</span>
          </div>
          <p>When job applications started feeling repetitive, I built a helper that could tailor applications faster and with less manual effort.</p>
        </article>
        <article class="project-card">
          <div class="project-top">
            <h3>JobMatch AI</h3>
            <span class="project-badge">Automation pipeline</span>
          </div>
          <p>That habit of automating friction kept growing, until I had a pipeline that could discover roles, assess fit, and draft application materials.</p>
        </article>
        <article class="project-card">
          <div class="project-top">
            <h3>Food Delivery Platform</h3>
            <span class="project-badge">Delivery operations</span>
          </div>
          <p>Once I moved into professional delivery, I started building systems that needed to be reliable for users, not just functional for one person.</p>
        </article>
        <article class="project-card">
          <div class="project-top">
            <h3>Skyward Travels</h3>
            <span class="project-badge">Travel booking</span>
          </div>
          <p>In my co-op role, that experience expanded into larger product work, where I contributed to booking flows and multi-service backend logic.</p>
        </article>
      </div>
    </section>

    <section id="qa" class="wrap section reveal">
      <div class="section-head">
        <p class="kicker">The quality chapter</p>
        <h2>As the work became more serious, quality became part of the build itself.</h2>
      </div>
      <div class="qa-grid">
        <article class="qa-card">
          <h3>Certifications</h3>
          <ul class="detail-list">
            <li>
              <strong>LambdaTest Playwright 101</strong>
              <span>Certificate details verified from the provider listing; credential ID and issue date are retained in the certificate asset.</span>
            </li>
            <li>
              <strong>Advanced Playwright — TestAutomationU</strong>
              <span>Certificate details verified from the provider listing; credential ID and issue date are retained in the certificate asset.</span>
            </li>
          </ul>
        </article>

        <article class="qa-card">
          <h3>Playwright suite I built</h3>
          <p>For one of my own AI projects, I moved from building features to proving them. I created a headless Playwright suite that mocks external API calls and exercises the core flow in GitHub Actions CI, catching the kind of issue that can slip through a visual check.</p>
          <ul class="detail-list">
            <li>Mocks API responses so the UI is tested without brittle third-party dependencies.</li>
            <li>Runs headlessly in GitHub Actions for quick, repeatable validation.</li>
            <li>Protects critical user flows from regressions that are easy to miss in a manual pass.</li>
          </ul>
        </article>

        <article class="qa-card">
          <h3>Tools in the loop</h3>
          <div class="tag-row">
            <span class="tag">Playwright</span>
            <span class="tag">GitHub Actions</span>
            <span class="tag">API mocking</span>
            <span class="tag">Headless CI</span>
            <span class="tag">Cross-browser checks</span>
          </div>
        </article>
      </div>
    </section>

    <section id="experience" class="wrap section reveal">
      <div class="section-head">
        <p class="kicker">How the story evolved</p>
        <h2>From learning the basics to owning delivery in real teams.</h2>
      </div>
      <div class="timeline">
        <article class="timeline-item">
          <span class="timeline-label">Sep 2025 — Feb 2026</span>
          <h3>Full Stack Developer · Contract</h3>
          <p>Dodge Data &amp; Analytics · Remote, Canada</p>
          <ul>
            <li>Worked on Blue Book, a live commercial-construction platform that connects contractors and suppliers.</li>
            <li>Shipped fixes and features across an existing Angular/jQuery estate and the supporting Java/Node.js backend.</li>
            <li>Wrote SQL logic and data handling for contractor profiles and bid-management workflows.</li>
          </ul>
        </article>
        <article class="timeline-item">
          <span class="timeline-label">Apr 2025 — Sep 2025</span>
          <h3>Software Developer · Co-op</h3>
          <p>SilverThread Solutions · Toronto, ON</p>
          <ul>
            <li>Owned full-stack work on Skyward Travels, a travel-booking experience with flight and hotel search plus loyalty-point flows.</li>
            <li>Designed REST APIs across MongoDB, MySQL, and PL/SQL depending on the client needs.</li>
          </ul>
        </article>
        <article class="timeline-item">
          <span class="timeline-label">Jan 2023 — Dec 2023</span>
          <h3>Junior Software Developer</h3>
          <p>The Logic Factory · Ahmedabad, India</p>
          <ul>
            <li>Automated supply-chain scheduling workflows and built validation harnesses to catch defects before deployment.</li>
            <li>Worked in a delivery-focused setting where quality checks mattered as much as feature delivery.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="wrap section reveal">
      <div class="section-head">
        <p class="kicker">Why this story matters</p>
        <h2>I care about products that work, because I’ve lived the gap between an idea and a reliable release.</h2>
      </div>
      <div class="insight-grid">
        <div class="insight-card">
          <p>Most of the tools I build start from a problem I actually feel. I got tired of manually tailoring resumes and built JobPilot and JobMatch AI. I’m studying for the TEF exam and built a speaking coach to practice against real criteria.</p>
          <p>That habit shaped my stack: I build the product, the API layer, and the checks that keep it reliable, because I know how a promising idea can fall apart without that last layer of proof.</p>
        </div>
        <div class="insight-card stats-card">
          <div>
            <strong>500+</strong>
            <span>LeetCode / Codeforces / CodeChef problems solved</span>
          </div>
          <div>
            <strong>5</strong>
            <span>AI-integrated products shipped</span>
          </div>
          <div>
            <strong>A2 → B1</strong>
            <span>French progress while preparing for TEF</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="wrap section contact-section reveal">
      <p class="kicker">Contact</p>
      <h2>Let’s build something that ships with confidence.</h2>
      <div class="contact-actions">
        <a class="btn btn-primary" href="mailto:ruchitchudasama123@gmail.com">Email me</a>
        <a class="btn btn-ghost" href="https://www.linkedin.com/in/ruchit-chudasama-040070211/" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn btn-ghost" href="https://github.com/ruchit3601" target="_blank" rel="noopener">GitHub</a>
      </div>
    </section>
  </main>

  <footer class="wrap footer">
    <span>© 2026 Ruchit Chudasama</span>
    <div class="footer-links">
      <a href="mailto:ruchitchudasama123@gmail.com">Email</a>
      <a href="https://github.com/ruchit3601" target="_blank" rel="noopener">GitHub</a>
      <a href="https://www.linkedin.com/in/ruchit-chudasama-040070211/" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </footer>
`;

const pipeline = document.getElementById('pipeline');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function renderPipeline() {
  if (!pipeline) return;

  pipeline.innerHTML = `
    <div class="pipeline-track" aria-hidden="true">
      <div class="pipeline-track__fill"></div>
    </div>
    <div class="pipeline-buttons" role="list">
      ${stageData.map((stage) => `
        <button class="stage-button ${stage.id === 'build' ? 'is-active' : ''}" type="button" data-stage="${stage.id}" aria-pressed="${stage.id === 'build'}" role="listitem">
          <span class="stage-dot"></span>
          <span class="stage-copy">
            <strong>${stage.title}</strong>
            <small>${stage.label}</small>
          </span>
        </button>
      `).join('')}
    </div>
    <div class="pipeline-detail" aria-live="polite">
      <p class="detail-kicker">${stageData[0].label}</p>
      <h3>${stageData[0].title}</h3>
      <p>${stageData[0].detail}</p>
      <span class="detail-metric">${stageData[0].metric}</span>
    </div>
  `;

  const buttons = pipeline.querySelectorAll('.stage-button');
  const detail = pipeline.querySelector('.pipeline-detail');
  const trackFill = pipeline.querySelector('.pipeline-track__fill');

  const updateDetail = (activeId) => {
    const activeStage = stageData.find((stage) => stage.id === activeId) || stageData[0];
    buttons.forEach((button) => {
      const isActive = button.dataset.stage === activeId;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    if (detail) {
      detail.querySelector('.detail-kicker').textContent = activeStage.label;
      detail.querySelector('h3').textContent = activeStage.title;
      detail.querySelector('p').textContent = activeStage.detail;
      detail.querySelector('.detail-metric').textContent = activeStage.metric;
    }

    if (trackFill) {
      const index = stageData.findIndex((stage) => stage.id === activeId);
      const progress = index >= 0 ? ((index + 1) / stageData.length) * 100 : 0;
      trackFill.style.width = `${progress}%`;
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => updateDetail(button.dataset.stage));
  });

  updateDetail('build');

  if (!reducedMotion) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(pipeline.querySelector('.pipeline-track'), { scaleX: 0.3, opacity: 0.5, duration: 0.7 })
      .from(pipeline.querySelectorAll('.stage-button'), { y: 12, opacity: 0, duration: 0.45, stagger: 0.1 }, '-=0.3')
      .from(pipeline.querySelector('.pipeline-detail'), { y: 12, opacity: 0, duration: 0.45 }, '-=0.25');
  }
}

renderPipeline();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
