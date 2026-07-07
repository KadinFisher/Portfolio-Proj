# Components

Components are reusable functions that return HTML for a piece of UI.

This project uses simple vanilla JavaScript components, not React components.

## Example idea

```js
export function createProjectCard(project) {
  return `<article class="card"><h3>${project.title}</h3></article>`;
}
```

## Why this matters

Instead of writing the same card HTML repeatedly, you write one function and reuse it for every project.

## Assignment

Implement:

- `createProjectCard(project)`
- `createExperienceCard(item)`
- `createFormMessage(message, type)`

## Done when

You can explain:

- What a function parameter is
- Why reusable functions reduce repeated code
- How data becomes HTML
