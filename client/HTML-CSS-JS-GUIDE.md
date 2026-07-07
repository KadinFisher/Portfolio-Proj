# HTML, CSS, and JavaScript Guide for the Client Folder

Use this guide while working inside the `client/` folder.

## HTML files

The `.html` files are the entry points the browser loads.

They define:

- Page metadata
- Navigation
- Main sections
- Buttons
- Forms
- Empty containers for JavaScript
- Script tags that load JavaScript

Example:

```html
<div class="card-grid" id="projectList"></div>
```

This means JavaScript has a place to render project cards.

## CSS file

`client/css/styles.css` defines how the pages look.

It styles:

- `.container`
- `.section`
- `.card`
- `.btn`
- `.navbar`
- `.contact-form`
- `.filter-btn`

## JavaScript files

The files in `client/js/` make the website dynamic.

They handle:

- Selecting HTML elements
- Listening for events
- Rendering project cards
- Validating forms
- Saving browser storage
- Fetching APIs

## How to trace a feature

When you see a feature, trace it across all three layers.

Example: projects page.

```txt
HTML: client/projects.html has #projectList
CSS: client/css/styles.css has .card-grid and .card
JS: client/js/pages/projects.js renders cards into #projectList
```

Example: contact form.

```txt
HTML: client/contact.html has #contactForm and inputs
CSS: client/css/styles.css styles form fields and errors
JS: client/js/pages/contact.js validates and handles submission
```

## Assignment

For every feature you implement, write this in a comment or your notes:

```txt
HTML hook:
CSS classes:
JavaScript file:
Data source:
User interaction:
```
