# 00d - How HTML, CSS, and JavaScript Fit Into the Development Process

When building a feature, do not start by randomly writing JavaScript. Think in layers.

## The 5-step frontend development process

For every frontend feature, ask:

1. What needs to exist in HTML?
2. How should it look in CSS?
3. What should change when the user interacts?
4. What data does JavaScript need?
5. What states can the feature be in?

## Example: project filtering

### 1. HTML

You need filter buttons and a project container.

```html
<button class="filter-btn active" data-filter="all">All</button>
<button class="filter-btn" data-filter="ai">AI</button>
<div id="projectList"></div>
```

### 2. CSS

You need normal and active styles.

```css
.filter-btn.active {
  background: var(--color-text);
  color: var(--color-bg);
}
```

### 3. JavaScript events

You need to detect clicks.

```js
button.addEventListener('click', handleFilterClick);
```

### 4. JavaScript data

You need project objects with categories.

```js
{
  title: 'AI Resume Analyzer',
  category: 'ai'
}
```

### 5. State

The feature has a current filter.

```js
let currentFilter = 'all';
```

## Example: contact form validation

### HTML

Inputs, labels, error message locations, submit button.

### CSS

Normal input style, error input style, success/error message style.

### JavaScript

Read input values, validate them, show errors, submit data.

### State

The form may be:

```txt
empty
invalid
valid
submitting
success
error
```

## The key professional habit

Before coding a feature, write a mini plan:

```txt
Feature: Favorite projects
HTML needed: favorite button on each project card
CSS needed: .is-favorite card style
JS needed: click handler, localStorage save/load
Data needed: project id
States: favorite / not favorite
```

This makes you faster and helps you understand how the three languages connect.

## Assignment

Before implementing each TODO in this project, write a short plan using this format:

```txt
Feature:
HTML:
CSS:
JavaScript:
Data:
State:
Done when:
```

Do this for:

1. Mobile navigation
2. Dark mode
3. Project rendering
4. Project filtering
5. Favorite projects
6. Contact validation
7. Fetching GitHub repos
