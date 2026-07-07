# 00b - CSS Foundations for This Project

CSS controls how the HTML looks. In this project, CSS is not separate from the learning goal. You need to understand how CSS classes create the visual states that JavaScript turns on and off.

## What CSS is responsible for

CSS handles:

- Colors
- Fonts
- Spacing
- Layout
- Responsive design
- Card appearance
- Button states
- Form error states
- Dark mode styles
- Animations/transitions

## The most important CSS mental model

```txt
HTML has elements.
CSS selects those elements.
CSS applies visual rules.
JavaScript can add/remove classes to change which rules apply.
```

## Selectors you will use often

### Class selector

```css
.card {
  padding: 1rem;
}
```

Matches:

```html
<article class="card"></article>
```

### ID selector

```css
#projectList {
  margin-top: 2rem;
}
```

Matches:

```html
<div id="projectList"></div>
```

Use IDs less often in CSS. Prefer classes for styling.

### Combined class selector

```css
.filter-btn.active {
  background: black;
  color: white;
}
```

Matches a button that has both classes:

```html
<button class="filter-btn active">All</button>
```

JavaScript can add or remove `active`.

## Layout concepts in this project

### Container

A `.container` keeps content from stretching too wide.

```css
.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}
```

### Grid

A grid is useful for project cards.

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
```

This means:

- Use a grid layout.
- Each card should be at least 240px wide.
- Fit as many columns as possible.
- Use one column on smaller screens automatically.

### Flexbox

Flexbox is useful for navbars, buttons, and horizontal alignment.

```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

## CSS variables

CSS variables let you define reusable design values.

```css
:root {
  --color-bg: #ffffff;
  --color-text: #111827;
  --space-md: 1rem;
}
```

Then use them:

```css
body {
  background: var(--color-bg);
  color: var(--color-text);
}
```

Dark mode becomes easier:

```css
body.dark {
  --color-bg: #111827;
  --color-text: #f9fafb;
}
```

Now JavaScript only needs to toggle the `dark` class.

## State classes

State classes show that something has changed.

Examples:

```css
.active {}
.open {}
.hidden {}
.error {}
.is-favorite {}
.loading {}
```

JavaScript usually controls state classes.

Example:

```js
menu.classList.toggle('open');
```

CSS decides what `.open` looks like.

## Responsive design

Responsive design means the site works on different screen sizes.

A media query changes CSS based on viewport width:

```css
@media (max-width: 768px) {
  .navbar__menu {
    display: none;
  }

  .navbar__menu.open {
    display: flex;
  }
}
```

That creates this relationship:

```txt
HTML: menu exists
CSS: menu is hidden on small screens
JavaScript: clicking button toggles .open
CSS: .open shows the menu
```

## Assignment: CSS state map

Create a table in your notes with this format:

```txt
Feature: Dark mode
HTML element: body
CSS class changed by JS: dark
CSS result: changes background and text colors
```

Do this for:

1. Dark mode
2. Mobile nav
3. Active project filter
4. Form error
5. Favorite project

## Mini-build assignment

Add a new CSS class:

```css
.card.highlighted {
  outline: 3px solid currentColor;
}
```

Then use JavaScript to add the class to the first project card after rendering.

Goal: understand that JavaScript changes the class, but CSS controls the visual result.
