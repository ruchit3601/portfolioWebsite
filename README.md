# Ruchit Chudasama — Portfolio

A story-driven portfolio that reflects both full-stack development and QA automation. It is built with Vite and vanilla JavaScript, with a polished visual system that presents Ruchit as someone who builds products and proves them through reliable testing.

## What this portfolio includes
- A personal, narrative-first experience rather than a generic resume layout
- A delivery pipeline interaction that highlights the build journey: code, build, Playwright, deploy
- A projects section featuring AI, automation, travel, and delivery-platform work
- A dedicated QA/testing section focused on Playwright, CI, and API mocking
- A floating assistant that acts like a friendly profile guide
- A local chat fallback, plus optional Gemini AI responses when a Vite API key is configured

## Tech stack
- Vite
- Vanilla JavaScript
- Plain CSS with custom properties and responsive layout styling
- GSAP for animated interactions
- Optional Gemini integration via VITE_GEMINI_API_KEY

## Running locally
```bash
npm install
npm run dev
```

## Optional AI assistant
Create a local environment file from the example file and add a Gemini API key:
```bash
copy .env.example .env
```
Then add:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```
If no key is provided, the assistant uses a built-in local response system.

## Building for production
```bash
npm run build
```
Output is generated in the `dist/` directory.

## Deployment
This project is suitable for deployment on Netlify or similar static hosts.
- Build command: `npm run build`
- Publish directory: `dist`

I build products, automate confidence, and ship with intent.
