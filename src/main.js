import './style.css';
import { gsap } from 'gsap';

const app = document.getElementById('app');

const stageData = [
  {
    id: 'code',
    title: 'Code',
    label: 'Problem → implementation',
    detail: 'I start from a real need and translate it into a working product with Java/Spring Boot, React, or Node.js/Express.',
    metric: 'Full-stack implementation',
  },
  {
    id: 'build',
    title: 'Build',
    label: 'System wiring',
    detail: 'I connect the UI, API layer, and data model so the feature behaves like a coherent system, not a one-off script.',
    metric: 'Backend + UI',
  },
  {
    id: 'test',
    title: 'Playwright',
    label: 'Proof in CI',
    detail: 'I write Playwright tests around critical flows, mock external APIs, and keep the suite runnable in GitHub Actions.',
    metric: 'Playwright + CI',
  },
  {
    id: 'deploy',
    title: 'Deploy',
    label: 'Release confidence',
    detail: 'I ship with the same discipline I use in automation: repeatable checks, fast feedback, and fewer surprises.',
    metric: 'GitHub Actions',
  },
];

const projects = [
  {
    title: 'TEF Speaking Coach',
    badge: 'AI speaking practice',
    description: 'Built for TEF French prep, this tool captures speech, transcribes responses, and scores them against the exam criteria I was training for.',
    stack: ['React', 'Node.js', 'AI workflow'],
    outcome: 'Turned a personal study need into a reusable product loop.',
    link: 'https://github.com/ruchit3601/tef-speaking-coach',
  },
  {
    title: 'JobPilot',
    badge: 'Chrome extension',
    description: 'A job-application assistant that tailors resumes and cover letters directly for postings, built around a lightweight client-side workflow.',
    stack: ['Chrome extension', 'JavaScript', 'AI assistance'],
    outcome: 'Cut the repetitive parts of job applications down to a single flow.',
    link: 'https://github.com/ruchit3601/AI_JobPilot',
  },
  {
    title: 'JobMatch AI',
    badge: 'Automation pipeline',
    description: 'An automation pipeline that discovers roles, scores fit, and drafts application materials without manual handoff.',
    stack: ['n8n', 'Groq', 'Automation'],
    outcome: 'Moved role discovery and drafting from manual effort to a repeatable process.',
    link: 'https://github.com/ruchit3601',
  },
  {
    title: 'Food Delivery Platform',
    badge: 'Delivery operations',
    description: 'Delivered an order-management and live-tracking platform with JWT access control, containerization, and deployment automation.',
    stack: ['Java', 'Spring Boot', 'Docker'],
    outcome: 'Built a platform that needed to be reliable for real users.',
    link: 'https://github.com/ruchit3601',
  },
  {
    title: 'Skyward Travels',
    badge: 'Travel booking',
    description: 'Contributed to a travel-booking experience covering search flows, booking logic, and multi-service backend integration.',
    stack: ['React', 'Node.js', 'MySQL/PostgreSQL/MongoDB'],
    outcome: 'Expanded from side projects into multi-service product work.',
    link: 'https://github.com/ruchit3601',
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
        <p class="kicker">Computer Engineering · Full Stack Developer · QA Automation Engineer</p>
        <h1>I build the product and the proof.</h1>
        <p class="hero-text">I’m Ruchit Chudasama. I work across Java/Spring Boot, React, Node.js/Express, and SQL/NoSQL systems, and I also write the Playwright suites that verify the experience end to end. My edge is not a side skill — it is the way I build.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#work">View projects</a>
          <a class="btn btn-ghost" href="https://www.linkedin.com/in/ruchit-chudasama-040070211/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
        <ul class="hero-highlights">
          <li>Java / Spring Boot</li>
          <li>React / Node.js / Express</li>
          <li>MySQL / PostgreSQL / MongoDB</li>
        </ul>
      </div>

      <div class="hero-panel reveal" aria-labelledby="pipeline-title">
        <div class="panel-head">
          <div>
            <p class="panel-eyebrow">Signature interaction</p>
            <h2 id="pipeline-title">Delivery pipeline</h2>
          </div>
          <span class="panel-pill">Code → Build → Playwright → Deploy</span>
        </div>
        <div id="pipeline" class="pipeline-shell"></div>
      </div>
    </section>

    <section id="work" class="wrap section reveal">
      <div class="section-head">
        <p class="kicker">Projects</p>
        <h2>Each project began with a concrete problem and ended in a working system.</h2>
      </div>
      <div class="project-grid">
        ${projects.map((project) => `
          <article class="project-card">
            <div class="project-top">
              <h3>${project.title}</h3>
              <span class="project-badge">${project.badge}</span>
            </div>
            <p>${project.description}</p>
            <div class="project-meta">
              <span>${project.stack.join(' · ')}</span>
              <strong>${project.outcome}</strong>
            </div>
            <a class="project-link" href="${project.link}" target="_blank" rel="noopener">Open project ↗</a>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="qa" class="wrap section reveal">
      <div class="section-head">
        <p class="kicker">QA / Testing</p>
        <h2>This is a dedicated capability, not an afterthought.</h2>
      </div>
      <div class="qa-grid">
        <article class="qa-card">
          <h3>Certifications</h3>
          <ul class="detail-list">
            <li>
              <strong>LambdaTest Playwright 101</strong>
              <span>Completed with certification details retained in the official certificate asset.</span>
            </li>
            <li>
              <strong>Advanced Playwright — TestAutomationU</strong>
              <span>Completed with certification details retained in the official certificate asset.</span>
            </li>
          </ul>
        </article>

        <article class="qa-card">
          <h3>Playwright suite I built</h3>
          <p>For one of my own AI projects, I created a headless Playwright suite that mocks external API calls and exercises the core user journey in GitHub Actions CI. The suite targets the failure mode where an upstream API response breaks the visible state even when the UI looks healthy.</p>
          <ul class="detail-list">
            <li>Mocks external API responses to keep the suite deterministic.</li>
            <li>Runs headlessly in GitHub Actions for rapid CI validation.</li>
            <li>Protects critical flows from regressions that can slip through a visual check.</li>
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
        <p class="kicker">Experience & Education</p>
        <h2>A steady move from learning to owning delivery.</h2>
      </div>
      <div class="timeline">
        <article class="timeline-item">
          <span class="timeline-label">Sep 2025 — Feb 2026</span>
          <h3>Full Stack Developer · Contract</h3>
          <p>Dodge Data &amp; Analytics · Remote, Canada</p>
          <ul>
            <li>Worked on Blue Book, a commercial construction platform connecting contractors and suppliers.</li>
            <li>Shipped fixes and features across an existing Angular/jQuery frontend and supporting Java/Node.js backend.</li>
            <li>Wrote SQL logic and data handling for contractor profiles and bid workflows.</li>
          </ul>
        </article>
        <article class="timeline-item">
          <span class="timeline-label">Apr 2025 — Sep 2025</span>
          <h3>Software Developer · Co-op</h3>
          <p>SilverThread Solutions · Toronto, ON</p>
          <ul>
            <li>Owned full-stack work on Skyward Travels, a travel-booking experience with search, booking, and loyalty flows.</li>
            <li>Designed APIs across MongoDB, MySQL, and PL/SQL depending on client needs.</li>
          </ul>
        </article>
        <article class="timeline-item">
          <span class="timeline-label">Jan 2023 — Dec 2023</span>
          <h3>Junior Software Developer</h3>
          <p>The Logic Factory · Ahmedabad, India</p>
          <ul>
            <li>Automated supply-chain scheduling workflows and built validation harnesses.</li>
            <li>Worked in a delivery-oriented environment where quality checks mattered before deployment.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="wrap section reveal">
      <div class="section-head">
        <p class="kicker">Engineering mindset</p>
        <h2>I care about systems that work in the real world, not just in a demo.</h2>
      </div>
      <div class="insight-grid">
        <div class="insight-card">
          <p>I started from a practical need: make my own work easier. That led to side projects that slowly grew into products and then into professional delivery. The common thread is the same: I build the feature, the supporting system, and the checks that make it trustworthy.</p>
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
            <strong>Playwright</strong>
            <span>Certified and used in real CI-driven test suites</span>
          </div>
        </div>
      </div>
    </section>

    <section class="wrap section reveal">
      <div class="section-head">
        <p class="kicker">Quick profile guide</p>
        <h2>Ask a few questions and learn what I do in a minute.</h2>
      </div>
      <div class="chat-shell">
        <div class="chat-card">
          <div class="chat-header">
            <div>
              <strong>Ruchit Assistant</strong>
              <span>Profile guide</span>
            </div>
            <span id="chat-status" class="chat-status">Online</span>
          </div>
          <div id="chat-messages" class="chat-messages">
            <div class="message bot">Hi! I’m Ruchit Assistant, and I’m here to help you get to know Ruchit in a more natural way. Ask me anything about his work, projects, or personality.</div>
          </div>
          <div class="chat-suggestions" role="list">
            <button class="chip" type="button" data-question="What stack do you use?">What stack do you use?</button>
            <button class="chip" type="button" data-question="Tell me about your QA work.">Tell me about your QA work.</button>
            <button class="chip" type="button" data-question="What projects have you built?">What projects have you built?</button>
            <button class="chip" type="button" data-question="How can I contact you?">How can I contact you?</button>
          </div>
          <form id="chat-form" class="chat-form">
            <input id="chat-input" type="text" name="question" placeholder="Ask about my work, skills, or projects" autocomplete="off" />
            <button class="btn btn-primary" type="submit">Send</button>
          </form>
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

  updateDetail('code');

  if (!reducedMotion) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(pipeline.querySelector('.pipeline-track'), { scaleX: 0.3, opacity: 0.5, duration: 0.7 })
      .from(pipeline.querySelectorAll('.stage-button'), { y: 12, opacity: 0, duration: 0.45, stagger: 0.1 }, '-=0.3')
      .from(pipeline.querySelector('.pipeline-detail'), { y: 12, opacity: 0, duration: 0.45 }, '-=0.25');
  }
}

renderPipeline();

const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatStatus = document.getElementById('chat-status');
const suggestionButtons = document.querySelectorAll('.chip');
const geminiEnabled = Boolean(import.meta.env.VITE_GEMINI_API_KEY);

if (chatStatus) {
  chatStatus.textContent = geminiEnabled ? 'Gemini AI online' : 'Local chat mode';
}

const conversationState = {
  userName: '',
  lastTopic: '',
};

function appendMessage(role, text) {
  if (!chatMessages) return;
  const message = document.createElement('div');
  message.className = `message ${role}`;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function normalizeText(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function getLocalResponse(question) {
  const q = normalizeText(question);
  const { userName } = conversationState;

  if (/(^|\s)(hi|hello|hey|hey there|good morning|good afternoon|good evening)(\s|$)/.test(q)) {
    return userName
      ? `Hi ${userName}! I’m Ruchit Assistant. I can tell you about Ruchit’s work, stack, QA automation, and projects. What would you like to know?`
      : 'Hi! I’m Ruchit Assistant. I can tell you about Ruchit’s work, stack, QA automation, and projects. What would you like to know?';
  }

  if (/(what is your name|who are you|who are u|your name)/.test(q)) {
    return 'I’m Ruchit Assistant — a friendly guide for Ruchit Chudasama. I help visitors learn about his work in a more conversational way.';
  }

  if (/(tell me more|explain that|go deeper|more about that|say more)/.test(q)) {
    const topic = conversationState.lastTopic || 'his work';
    if (topic === 'stack') {
      return 'He likes building practical systems with Java/Spring Boot, React, Node.js/Express, and databases like MySQL, PostgreSQL, and MongoDB. He enjoys connecting the product layer and the backend layer so the experience feels solid.';
    }
    if (topic === 'qa') {
      return 'His QA mindset is about trust and repeatability. He uses Playwright, GitHub Actions, and API mocking so the critical path is validated consistently instead of relying on a manual pass.';
    }
    if (topic === 'projects') {
      return 'His projects often start from something personal and practical. That is why they tend to focus on real user value, useful automation, and experiences that feel smooth to use.';
    }
    return `Sure — I can tell you more about ${topic}.`;
  }

  if (/(my name is|i am |i'm )/.test(q)) {
    const match = q.match(/(?:my name is|i am|i'm)\s+([a-z]+(?:\s+[a-z]+)*)/);
    if (match && match[1]) {
      conversationState.userName = match[1].replace(/\s+/g, ' ').trim();
      return `Nice to meet you, ${conversationState.userName}. I’m happy to help you learn about Ruchit.`;
    }
  }

  if (/(what is my name|who am i|do you know my name)/.test(q)) {
    return userName ? `You told me your name is ${userName}.` : 'I don’t know your name yet — what should I call you?';
  }

  if (/(how are you|how's it going|how are u|how are ya)/.test(q)) {
    return 'I’m doing well, thanks. I’m here to help you learn about Ruchit’s background and work.';
  }

  if (/(what do you do|what are you|who do you work for|what can you do)/.test(q)) {
    return 'I help visitors understand Ruchit’s skills, projects, and QA mindset in a conversational way. Think of me as a friendly guide to his portfolio.';
  }

  if (/(stack|tech|skills|languages|frameworks|java|react|node|spring boot)/.test(q)) {
    conversationState.lastTopic = 'stack';
    return 'Ruchit works with Java/Spring Boot, React, Node.js/Express, and databases like MySQL, PostgreSQL, and MongoDB. He likes building systems that feel practical and dependable.';
  }

  if (/(qa|playwright|testing|test automation|automate|ci)/.test(q)) {
    conversationState.lastTopic = 'qa';
    return 'QA is a big part of how he builds. He uses Playwright, GitHub Actions, and API mocking to validate critical flows in a repeatable way.';
  }

  if (/(project|projects|built|portfolio|work)/.test(q)) {
    conversationState.lastTopic = 'projects';
    return 'He has built projects around AI speaking practice, job automation, travel booking, and delivery-platform workflows. The common theme is solving real problems with useful products.';
  }

  if (/(experience|background|journey|story|career)/.test(q)) {
    return 'His path moved from personal side projects to professional delivery, including co-op and contract roles. He grew from solving his own problems to building systems for real users.';
  }

  if (/(contact|email|linkedin|github|hire|reach you)/.test(q)) {
    return 'You can reach him at ruchitchudasama123@gmail.com, connect on LinkedIn, or check his GitHub profile for more examples of his work.';
  }

  if (/(thanks|thank you|appreciate)/.test(q)) {
    return 'You’re welcome. I’m happy to help.';
  }

  if (/(bye|goodbye|see you|talk to you later)/.test(q)) {
    return 'Nice chatting with you. If you want, I can tell you more about his projects, QA work, or how to contact him.';
  }

  return 'That’s a good question. I can tell you about his stack, projects, QA work, experience, or how to get in touch. What would you like to know?';
}

async function getAssistantResponse(question) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const { userName } = conversationState;

  if (apiKey) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            role: 'user',
            parts: [{
              text: `You are a friendly portfolio assistant for Ruchit Chudasama. Speak naturally, warmly, and briefly in 2 to 4 sentences. Use these facts about him: Java/Spring Boot, React, Node.js/Express, MySQL/PostgreSQL/MongoDB, Playwright, GitHub Actions, AI projects, contract and co-op experience, and contact at ruchitchudasama123@gmail.com. If the user gives their name, remember it and use it naturally. The user name is ${userName || 'unknown'}. Question: ${question}`,
            }],
          }],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text.trim();
      }
    } catch (error) {
      console.warn('Gemini fallback triggered', error);
    }
  }

  return getLocalResponse(question);
}

async function handleChatSubmit(event) {
  event.preventDefault();
  if (!chatInput || !chatMessages) return;

  const question = chatInput.value.trim();
  if (!question) return;

  appendMessage('user', question);
  chatInput.value = '';
  chatInput.disabled = true;

  const typingMessage = document.createElement('div');
  typingMessage.className = 'message bot typing';
  typingMessage.textContent = 'Typing...';
  chatMessages.appendChild(typingMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  await new Promise((resolve) => setTimeout(resolve, 380));
  const reply = await getAssistantResponse(question);
  chatMessages.removeChild(typingMessage);
  appendMessage('bot', reply);
  chatInput.disabled = false;
  chatInput.focus();
}

suggestionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (chatInput) {
      chatInput.value = button.dataset.question || '';
      chatInput.focus();
    }
  });
});

if (chatForm) {
  chatForm.addEventListener('submit', handleChatSubmit);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
