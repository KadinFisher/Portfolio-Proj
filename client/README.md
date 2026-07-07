# Client

This is the browser-facing part of the project.

It contains:

- HTML pages
- CSS styles
- Vanilla JavaScript
- Frontend data files
- Reusable frontend components

## Learning goal

Understand how a browser loads files and how HTML, CSS, and JavaScript work together to create a dynamic web app.

## The three frontend layers

```txt
HTML = structure and meaning
CSS = visual design and layout
JavaScript = behavior, data, events, and updates
```

In this project, you should constantly ask:

1. What does HTML create?
2. What does CSS style?
3. What does JavaScript change?

## Start here

Open:

```txt
client/index.html
```

Use VS Code Live Server or run:

```bash
npx serve client
```

## Important files

```txt
client/index.html             # Homepage structure
client/projects.html          # Project page structure and JS targets
client/experience.html        # Experience page structure and JS targets
client/contact.html           # Contact form HTML
client/css/styles.css         # All visual styling
client/js/main.js             # Shared JavaScript used on every page
client/js/pages/              # Page-specific JavaScript
client/js/components/         # Reusable rendering functions
client/js/data/               # Temporary frontend data before backend API
client/js/utils/              # Helper functions
```

## Key idea

At first, data will come from files in:

```txt
client/js/data/
```

Later, data will come from your backend API using `fetch()`.

That means the same page will evolve through three stages:

```txt
Stage 1: HTML hardcoded content
Stage 2: JavaScript renders local data
Stage 3: JavaScript fetches backend/database data
```

## HTML/CSS/JS interaction examples

### Dark mode

```txt
HTML: button with id="themeToggle"
CSS: body.dark changes colors
JS: click toggles the dark class
```

### Project list

```txt
HTML: empty div with id="projectList"
CSS: .card-grid and .card control layout
JS: reads project data and inserts card HTML
```

### Contact form

```txt
HTML: form inputs and error message locations
CSS: error/success visual states
JS: validates input and shows messages
```

## Recommended reading first

Before writing much code, read:

```txt
docs/00-html-css-js-mental-model.md
docs/00a-html-foundations.md
docs/00b-css-foundations.md
docs/00c-build-a-card-three-ways.md
docs/00d-development-process.md
```
