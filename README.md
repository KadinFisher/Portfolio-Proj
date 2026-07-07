# Portfolio Learning Lab

This project turns a personal portfolio into a full-stack learning lab.

The final product is a personal website/portfolio. The real purpose is to learn the fundamentals of full-stack web development by building realistic features yourself.

## What you will learn

- HTML/CSS structure for a real website
- Vanilla JavaScript fundamentals
- DOM manipulation
- Browser events and interactions
- Reusable JavaScript components
- Forms and validation
- `localStorage` and `sessionStorage`
- Fetching from APIs
- Async JavaScript with `async`/`await`
- Node.js and Express
- REST API design
- PostgreSQL basics
- Environment variables
- Deployment concepts

## Important philosophy

This is intentionally not a polished finished app. It is a starter learning project.

Many files contain `TODO` comments. Your job is to implement those pieces. The READMEs explain what each folder is for and what you are supposed to practice.

This updated version also includes a deeper beginner-friendly HTML/CSS foundation so you understand how the structure layer, styling layer, and JavaScript behavior layer interact during development.

## Suggested order

You do not have to follow this linearly, but this is the cleanest path:

1. `docs/00-html-css-js-mental-model.md`
2. `docs/00a-html-foundations.md`
3. `docs/00b-css-foundations.md`
4. `docs/00c-build-a-card-three-ways.md`
5. `docs/00d-development-process.md`
6. `docs/01-frontend-dom.md`
7. `docs/02-events-and-storage.md`
8. `docs/03-forms-and-validation.md`
9. `docs/04-api-and-async.md`
10. `docs/05-backend-express.md`
11. `docs/06-postgresql.md`
12. `docs/07-deployment.md`

## Project structure

```txt
portfolio-learning-lab/
├── client/                 # Browser-facing app: HTML, CSS, vanilla JS
├── server/                 # Node/Express backend
├── docs/                   # Learning assignments and concept guides
├── README.md               # This file
└── package.json            # Convenience scripts
```

## Quick start

### 1. Open the frontend

The simplest beginner-friendly way:

1. Open the project in VS Code.
2. Install the VS Code extension called **Live Server**.
3. Right-click `client/index.html`.
4. Click **Open with Live Server**.

Alternative:

```bash
npx serve client
```

### 2. Run the backend

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

Then open:

```txt
http://localhost:3000/api/health
```

### 3. Connect frontend to backend later

At first, the frontend will use local JavaScript data files. Later, you will replace that with `fetch()` calls to your own Express API.

## What “done” means

This project is done when you can explain:

- How data gets rendered into the DOM
- How a click event changes the UI
- How form validation works
- How `fetch()` talks to an API
- How an Express route returns JSON
- How PostgreSQL stores project/contact data
- How local development differs from deployment

## Suggested Git workflow

Create a commit after each milestone:

```bash
git init
git add .
git commit -m "Initial portfolio learning lab scaffold"
```

Then use commits like:

```bash
git commit -m "Render project cards with JavaScript"
git commit -m "Add project filtering"
git commit -m "Add contact form validation"
git commit -m "Create Express API routes"
git commit -m "Connect PostgreSQL database"
```
