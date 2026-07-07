# 00 - HTML, CSS, and JavaScript Mental Model

This project is not only about JavaScript. You need to understand how HTML, CSS, and JavaScript work together because every frontend feature uses all three.

## The simple model

```txt
HTML = structure and meaning
CSS = appearance and layout
JavaScript = behavior and change
```

A browser loads your page in this order:

1. It reads the HTML and builds the page structure.
2. It downloads and applies the CSS to style that structure.
3. It runs JavaScript, which can inspect, modify, add, remove, or react to the HTML.

## One feature using all three

Imagine a dark mode button.

### HTML creates the button

```html
<button id="themeToggle" type="button">Dark</button>
```

HTML answers: **What exists on the page?**

### CSS defines how dark mode looks

```css
body.dark {
  background: #111827;
  color: #f9fafb;
}
```

CSS answers: **How should it look when a certain class exists?**

### JavaScript changes the class

```js
const button = document.querySelector('#themeToggle');

button.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

JavaScript answers: **What should happen when the user interacts?**

## The important relationship

JavaScript usually does not "style" the page directly. A better pattern is:

```txt
JavaScript changes HTML attributes or CSS classes.
CSS reacts to those classes.
```

For example:

```js
document.body.classList.add('dark');
```

Then CSS decides what `.dark` means visually.

## Static vs dynamic content

### Static HTML

Static HTML means you manually write the content into the `.html` file:

```html
<article class="project-card">
  <h3>Portfolio Website</h3>
  <p>A personal portfolio built with HTML, CSS, and JavaScript.</p>
</article>
```

### Dynamic JavaScript-rendered HTML

Dynamic rendering means JavaScript creates the HTML from data:

```js
const project = {
  title: 'Portfolio Website',
  description: 'A personal portfolio built with HTML, CSS, and JavaScript.'
};

const html = `
  <article class="project-card">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  </article>
`;

document.querySelector('#projectList').innerHTML = html;
```

Same visual result. Different development process.

## Why this matters

Real web apps usually do not manually hardcode every card, table row, notification, or form state. Instead:

1. HTML provides containers.
2. JavaScript gets data.
3. JavaScript renders data into HTML.
4. CSS styles the result.
5. JavaScript responds to user events and updates the page.

## Example from this project

In `client/projects.html`, the page has an empty container:

```html
<div class="card-grid" id="projectList"></div>
```

That container is intentionally empty. Your JavaScript should fill it with project cards.

The interaction looks like this:

```txt
projects.html gives JavaScript a target: #projectList
projects.js imports project data
projectCard.js creates card HTML
styles.css makes cards look good
```

## What you should be able to explain

After this section, you should be able to explain:

- What HTML does
- What CSS does
- What JavaScript does
- Why JavaScript often changes classes instead of manually changing styles
- Why dynamic rendering is useful
- How an empty HTML container can become a rendered list of cards

## Assignment

Pick one feature in the site and identify the three layers.

Example: project filtering.

```txt
HTML: filter buttons and project container
CSS: active filter button style and card layout
JavaScript: listens for clicks, filters project data, rerenders cards
```

Do this for:

1. Dark mode
2. Mobile navigation
3. Project cards
4. Contact form validation
5. Favorite projects
