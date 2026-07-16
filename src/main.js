import './style.css';

const app = document.getElementById('app');

app.innerHTML = `
  <nav class="nav">
    <div class="wrap">
      <a href="#top" class="logo">rc<span>@</span>dev</a>
      <ul class="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a class="btn btn-ghost" href="https://github.com/ruchit3601" target="_blank" rel="noopener">GitHub</a>
        <a class="btn btn-primary" href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <main id="top">
    <section class="hero wrap">
      <div>
        <p class="eyebrow">available for full-time roles · Canada</p>
        <h1 class="hero-headline">I build things that fix <span class="hl">my own problems</span> first.</h1>
        <p class="hero-sub">Full-stack developer based in Brampton, ON. I ship AI-integrated tools end to end &mdash; frontend, backend, and the LLM plumbing in between &mdash; usually because I needed the thing myself first.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#work">View Work</a>
          <a class="btn btn-ghost" href="/Ruchit_Chudasama_Resume.pdf" download>Download Resume</a>
        </div>
        <div class="hero-meta">
          <span>Brampton, ON</span>
          <a href="mailto:ruchitchudasama123@gmail.com">ruchitchudasama123@gmail.com</a>
          <a href="https://www.linkedin.com/in/ruchitchudasama" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <div class="terminal">
        <div class="terminal-bar">
          <span class="dot dot-r"></span><span class="dot dot-y"></span><span class="dot dot-g"></span>
          <span class="terminal-title">ruchit@dev &mdash; zsh</span>
        </div>
        <div class="terminal-body" id="terminal-output"></div>
      </div>
    </section>

    <section id="skills" class="wrap reveal">
      <p class="eyebrow">skills</p>
      <h2 class="section-title">What I build with</h2>
      <p class="section-sub">Full-stack across the JS and JVM worlds, with production experience wiring LLM APIs into real products.</p>
      <div class="bento">
        <div class="bento-card span-2">
          <h3>Languages</h3>
          <div class="tag-row">
            <span class="tag">JavaScript (ES6+)</span><span class="tag">TypeScript</span>
            <span class="tag">Java</span><span class="tag">Python</span><span class="tag">SQL</span>
          </div>
        </div>
        <div class="bento-card">
          <h3>Frontend</h3>
          <div class="tag-row">
            <span class="tag">React.js</span><span class="tag">Next.js</span><span class="tag">Vue.js</span>
          </div>
        </div>
        <div class="bento-card">
          <h3>Backend</h3>
          <div class="tag-row">
            <span class="tag">Node.js</span><span class="tag">Express</span><span class="tag">Spring Boot</span><span class="tag">Django</span>
          </div>
        </div>
        <div class="bento-card">
          <h3>Databases</h3>
          <div class="tag-row">
            <span class="tag">PostgreSQL</span><span class="tag">MySQL</span><span class="tag">MongoDB</span><span class="tag">PL/SQL</span>
          </div>
        </div>
        <div class="bento-card">
          <h3>Cloud &amp; DevOps</h3>
          <div class="tag-row">
            <span class="tag">Docker</span><span class="tag">Kubernetes</span><span class="tag">AWS</span><span class="tag">GitHub Actions</span>
          </div>
        </div>
        <div class="bento-card span-2">
          <h3>AI / LLM Integration</h3>
          <div class="tag-row">
            <span class="tag">Claude API</span><span class="tag">Groq API</span><span class="tag">n8n</span><span class="tag">RAG-style prompting</span><span class="tag">Whisper</span>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="wrap reveal">
      <p class="eyebrow">selected work</p>
      <h2 class="section-title">Projects I've shipped</h2>
      <p class="section-sub">Each one started as a real problem I had, not a tutorial I followed.</p>
      <div class="projects-grid">

        <div class="project-card">
          <div class="project-top">
            <span class="project-title">TEF Speaking Practice Coach</span>
            <span class="project-metric">AI oral exam trainer</span>
          </div>
          <p class="project-desc">Built to practice for my own TEF French oral exam. Records spoken responses, transcribes with Groq Whisper, and scores grammar, vocabulary, and task adequacy against real exam criteria using Llama 3.3 70B &mdash; with session-over-session progress tracking.</p>
          <div class="project-links">
            <a href="https://github.com/ruchit3601/tef-speaking-coach" target="_blank" rel="noopener">→ GitHub</a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-top">
            <span class="project-title">JobPilot</span>
            <span class="project-metric">Chrome extension</span>
          </div>
          <p class="project-desc">AI-powered job application assistant using the Claude Haiku API to tailor resumes and generate cover letters directly on Indeed job postings. Worked around Manifest V3 service-worker limits with long-lived port connections; client-side PDF generation, no backend required.</p>
          <div class="project-links">
            <a href="https://github.com/ruchit3601/AI_JobPilot" target="_blank" rel="noopener">→ GitHub</a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-top">
            <span class="project-title">JobMatch AI</span>
            <span class="project-metric">n8n + Groq pipeline</span>
          </div>
          <p class="project-desc">Autonomous job-discovery pipeline: pulls new postings, scores fit against my own experience, and drafts tailored cover letters and resumes without manual intervention, orchestrated entirely through n8n workflows calling the Groq API.</p>
          <div class="project-links">
            <a href="https://github.com/ruchit3601" target="_blank" rel="noopener">→ GitHub</a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-top">
            <span class="project-title">Tresco Ops Platform</span>
            <span class="project-metric">Claude-powered CRM</span>
          </div>
          <p class="project-desc">Manufacturing operations tool that takes unstructured client input (emails, notes, call summaries) and uses the Claude API to convert it into structured, queryable PostgreSQL records for the ops team.</p>
          <div class="project-links">
            <a href="https://github.com/ruchit3601" target="_blank" rel="noopener">→ GitHub</a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-top">
            <span class="project-title">FoodDelivery</span>
            <span class="project-metric">40% faster deploys</span>
          </div>
          <p class="project-desc">Real-time order management and live tracking platform with JWT authentication and role-based access control. Containerized with Docker and Kubernetes, with a Travis CI/CD pipeline that cut deployment time by roughly 40%.</p>
          <div class="project-links">
            <a href="https://github.com/ruchit3601" target="_blank" rel="noopener">→ GitHub</a>
          </div>
        </div>

      </div>
    </section>

    <section id="experience" class="wrap reveal">
      <p class="eyebrow">experience</p>
      <h2 class="section-title">git log --oneline</h2>
      <p class="section-sub">Three roles, in order, each one shipping real features to real users.</p>
      <div class="git-log">

        <div class="commit">
          <div class="commit-hash">a3f9c21</div>
          <div class="commit-role">Full Stack Developer &mdash; Contract</div>
          <div class="commit-company">Dodge Data &amp; Analytics · Remote, CA</div>
          <div class="commit-date">Sept 2025 – Feb 2026</div>
          <ul class="commit-body">
            <li>Worked on Blue Book, a live commercial construction platform connecting contractors and suppliers across the US.</li>
            <li>Fixed bugs and shipped features across Angular/jQuery frontend and Java/Node.js backend in a large existing codebase.</li>
            <li>Wrote MySQL queries and data logic for contractor profiles and bid management.</li>
          </ul>
        </div>

        <div class="commit">
          <div class="commit-hash">9b2e410</div>
          <div class="commit-role">Software Developer &mdash; Co-op</div>
          <div class="commit-company">SilverThread Solutions · Toronto, ON</div>
          <div class="commit-date">Apr 2025 – Sep 2025</div>
          <ul class="commit-body">
            <li>Owned full-stack development of Skyward Travels, a travel-booking platform with flight/hotel search and a loyalty points system.</li>
            <li>Designed REST APIs across MongoDB, MySQL, and PL/SQL depending on the client, shipping a working prototype every two-week sprint.</li>
          </ul>
        </div>

        <div class="commit">
          <div class="commit-hash">7c1d883</div>
          <div class="commit-role">Junior Software Developer</div>
          <div class="commit-company">The Logic Factory · Ahmedabad, India</div>
          <div class="commit-date">Jan 2023 – Dec 2023</div>
          <ul class="commit-body">
            <li>Automated supply chain scheduling workflows using Delmia Quintiq, cutting manual scheduling effort by ~30%.</li>
            <li>Built test harnesses to validate scheduling logic and catch defects before deployment.</li>
          </ul>
        </div>

      </div>
    </section>

    <section class="wrap reveal">
      <p class="eyebrow">why I build</p>
      <h2 class="section-title">The short version</h2>
      <div class="why-grid">
        <div class="why-text">
          <p>I moved to Canada to finish my postgrad and I'm currently on a <strong>PGWP, so no sponsorship is needed</strong> to hire me. Most of what I build starts from a problem sitting directly in front of me: I was tired of manually tailoring resumes, so I built JobPilot and JobMatch AI. I'm studying French for the TEF exam right now, so I built a tool to grade my own practice sessions.</p>
          <p>That pattern is deliberate. I'd rather ship something small that solves a real problem than a polished clone of a tutorial project. It's also why almost everything I build lately touches an LLM API somewhere in the stack &mdash; not because it's trendy, but because it's usually the fastest way to make a tool that used to require a human now work on its own.</p>
        </div>
        <div class="stat-stack">
          <div class="stat-card">
            <div class="stat-num">500+</div>
            <div class="stat-label">DSA problems solved (LeetCode, CodeChef, Codeforces)</div>
          </div>
          <div class="stat-card">
            <div class="stat-num">5</div>
            <div class="stat-label">AI-integrated projects shipped and deployed</div>
          </div>
          <div class="stat-card">
            <div class="stat-num">A2 → B1</div>
            <div class="stat-label">French level, currently in progress for TEF</div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="wrap contact reveal">
      <p class="eyebrow" style="justify-content:center">contact</p>
      <h2 class="section-title">Let's work together</h2>
      <p class="section-sub">Open to Software Engineer and Full Stack Developer roles across Canada. No sponsorship required.</p>
      <div class="contact-actions">
        <a class="btn btn-primary" href="mailto:ruchitchudasama123@gmail.com">Email Me</a>
        <a class="btn btn-ghost" href="https://www.linkedin.com/in/ruchitchudasama" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn btn-ghost" href="https://github.com/ruchit3601" target="_blank" rel="noopener">GitHub</a>
      </div>
    </section>
  </main>

  <footer class="wrap">
    <span>&copy; 2026 Ruchit Chudasama</span>
    <div class="footer-links">
      <a href="mailto:ruchitchudasama123@gmail.com">Email</a>
      <a href="https://github.com/ruchit3601" target="_blank" rel="noopener">GitHub</a>
      <a href="https://www.linkedin.com/in/ruchitchudasama" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </footer>
`;

/* ===== Terminal typing animation ===== */
const lines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Ruchit Chudasama — Full Stack Developer' },
  { type: 'cmd', text: 'cat status.json' },
  { type: 'out', text: '{ "location": "Brampton, ON", "sponsorship": "not required (PGWP)", "seeking": "SWE / Full Stack roles" }' },
  { type: 'cmd', text: 'git log --oneline -3' },
  { type: 'out', text: 'a3f9c21 feat: TEF speaking coach — Groq Whisper + Llama scoring' },
  { type: 'out', text: '9b2e410 feat: JobPilot — Chrome extension, Claude Haiku API' },
  { type: 'out', text: '7c1d883 feat: JobMatch AI — n8n + Groq autonomous pipeline' },
];

const termEl = document.getElementById('terminal-output');

function typeLine(el, text, speed = 22) {
  return new Promise((resolve) => {
    let i = 0;
    const span = document.createElement('span');
    el.appendChild(span);
    const interval = setInterval(() => {
      span.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

async function runTerminal() {
  for (const line of lines) {
    const row = document.createElement('div');
    row.className = 'term-line';
    termEl.appendChild(row);

    if (line.type === 'cmd') {
      const prompt = document.createElement('span');
      prompt.className = 'term-prompt';
      prompt.textContent = '$ ';
      row.appendChild(prompt);
      const textSpan = document.createElement('span');
      row.appendChild(textSpan);
      await typeLine(textSpan, line.text, 28);
      await new Promise((r) => setTimeout(r, 150));
    } else {
      row.classList.add('term-out');
      row.textContent = line.text;
      await new Promise((r) => setTimeout(r, 350));
    }
  }
  const cursorRow = document.createElement('div');
  cursorRow.className = 'term-line';
  cursorRow.innerHTML = '<span class="term-prompt">$ </span><span class="cursor"></span>';
  termEl.appendChild(cursorRow);
}

runTerminal();

/* ===== Scroll reveal ===== */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
reveals.forEach((el) => observer.observe(el));
