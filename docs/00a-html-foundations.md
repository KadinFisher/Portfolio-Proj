# 00a - HTML Foundations for This Project

HTML is the skeleton of the website. It defines what content exists and what the content means.

In a real development process, you should not think of HTML as "just text on a page." You should think of it as the document structure that CSS and JavaScript depend on.

## What HTML is responsible for

HTML handles:

- Page structure
- Headings and sections
- Links between pages
- Forms and inputs
- Buttons
- Images
- Accessibility landmarks
- IDs and classes that JavaScript and CSS use

## Important tags in this project

### `header`

Used for the top site area, usually navigation.

```html
<header class="site-header">
  ...
</header>
```

### `nav`

Used for navigation links.

```html
<nav class="navbar container" aria-label="Primary navigation">
  ...
</nav>
```

### `main`

Used for the main content of a page. Each page should usually have one `main`.

```html
<main>
  ...
</main>
```

### `section`

Used to group related content.

```html
<section class="section">
  ...
</section>
```

### `article`

Good for reusable independent pieces of content, such as project cards.

```html
<article class="card">
  ...
</article>
```

### `form`

Used for user input.

```html
<form id="contactForm" novalidate>
  ...
</form>
```

The `novalidate` attribute tells the browser not to use its default validation bubbles. That lets you practice writing custom JavaScript validation.

## IDs vs classes

### IDs

Use an ID when JavaScript needs one specific element.

```html
<div id="projectList"></div>
```

```js
const projectList = document.querySelector('#projectList');
```

An ID should be unique on the page.

### Classes

Use classes for styling or selecting groups of elements.

```html
<button class="filter-btn active">All</button>
```

```css
.filter-btn.active {
  font-weight: 700;
}
```

## Data attributes

Data attributes let HTML store extra information for JavaScript.

```html
<button class="filter-btn" data-filter="ai">AI</button>
```

JavaScript can read it:

```js
const filter = button.dataset.filter;
```

This is useful when the button text and the JavaScript value should be connected.

## HTML as JavaScript targets

A common pattern in this project is an empty HTML container:

```html
<div class="card-grid" id="projectList"></div>
```

This means:

```txt
HTML creates the location.
JavaScript fills the location.
CSS styles what JavaScript adds.
```

## Accessibility basics to notice

Good HTML is not only for visuals. It helps screen readers, keyboard users, search engines, and maintainability.

Examples in this project:

```html
<nav aria-label="Primary navigation">
```

```html
<p class="form-status" id="formStatus" aria-live="polite"></p>
```

`aria-live="polite"` tells assistive technology that this message area may update after a form submission.

## Assignment: inspect the current pages

Open these files and identify the important HTML structure:

- `client/index.html`
- `client/projects.html`
- `client/contact.html`

For each file, answer:

1. What is static content?
2. What is an empty container for JavaScript?
3. Which IDs are JavaScript hooks?
4. Which classes are mostly for CSS?
5. Which elements are interactive?

## Mini-build assignment

Create a new section on the homepage:

```html
<section class="section" id="learningGoals">
  <div class="container">
    <h2>Learning Goals</h2>
    <ul>
      <li>Understand HTML structure</li>
      <li>Understand CSS layout</li>
      <li>Use JavaScript to make pages dynamic</li>
    </ul>
  </div>
</section>
```

Then answer:

- What did HTML add?
- What CSS class names already affect it?
- What could JavaScript do with this section later?
