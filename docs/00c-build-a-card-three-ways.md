# 00c - Build a Card Three Ways

This exercise gives you a deeper understanding of how HTML, CSS, and JavaScript interact.

You will build the same project card three ways:

1. Manually in HTML
2. Styled with CSS
3. Rendered dynamically with JavaScript

## Part 1: Hardcode the card in HTML

Add this temporarily inside `client/projects.html` above `#projectList`:

```html
<article class="card project-card">
  <h3>Manual HTML Card</h3>
  <p>This card was written directly in the HTML file.</p>
  <span class="tag">Frontend</span>
</article>
```

Now open the page.

Question: What shows up even if JavaScript is broken?

Answer: The manual HTML card.

That is because it exists directly in the document.

## Part 2: Style the card with CSS

Open `client/css/styles.css` and find the existing `.card` styles.

Experiment by adding:

```css
.project-card {
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
}
```

Question: Did you change the content or just the appearance?

Answer: Only the appearance.

CSS cannot create project data. It can only style elements that exist.

## Part 3: Render the card with JavaScript

Now remove the manual card from HTML and render it with JavaScript.

In a page script, create:

```js
const project = {
  title: 'Dynamic JavaScript Card',
  description: 'This card was created from a JavaScript object.',
  category: 'frontend'
};

const projectList = document.querySelector('#projectList');

projectList.innerHTML = `
  <article class="card project-card">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <span class="tag">${project.category}</span>
  </article>
`;
```

Question: What is different now?

Answer: The HTML file only has a container. JavaScript creates the card after the page loads.

## Part 4: Render many cards from an array

```js
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built with vanilla JS.',
    category: 'frontend'
  },
  {
    title: 'Contact API',
    description: 'An Express backend that saves messages.',
    category: 'backend'
  }
];

projectList.innerHTML = projects
  .map((project) => {
    return `
      <article class="card project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <span class="tag">${project.category}</span>
      </article>
    `;
  })
  .join('');
```

Now you are thinking like a web app developer:

```txt
Data -> JavaScript rendering function -> HTML output -> CSS styling
```

## Part 5: Add interaction

Add a button to each card:

```html
<button class="btn btn--secondary" type="button">Favorite</button>
```

Then use JavaScript to listen for clicks:

```js
projectList.addEventListener('click', (event) => {
  if (!event.target.matches('button')) return;

  const card = event.target.closest('.project-card');
  card.classList.toggle('is-favorite');
});
```

Then CSS:

```css
.project-card.is-favorite {
  border-color: currentColor;
}
```

This is the full interaction:

```txt
HTML: button exists inside the card
CSS: .is-favorite has a visual style
JavaScript: click toggles .is-favorite
```

## What you should understand after this

- HTML can be written manually
- JavaScript can generate HTML dynamically
- CSS styles both manual and dynamic HTML the same way
- JavaScript should usually change classes, not write lots of inline styles
- Data-driven rendering is the foundation of frontend apps
