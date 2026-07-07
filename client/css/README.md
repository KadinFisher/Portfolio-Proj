# CSS

This folder contains the styling for the frontend.

## Learning goal

Understand how CSS turns HTML structure into a usable interface, and how JavaScript changes CSS classes to create visual states.

## What CSS does in this project

CSS controls:

- Page layout
- Spacing
- Typography
- Colors
- Cards
- Buttons
- Forms
- Responsive design
- Dark mode
- Active states
- Error states

## The most important idea

JavaScript should usually not manually set many styles like this:

```js
element.style.background = 'black';
element.style.color = 'white';
```

A better pattern is:

```js
element.classList.add('active');
```

Then CSS controls what `active` means:

```css
.active {
  background: black;
  color: white;
}
```

This keeps behavior in JavaScript and design in CSS.

## Classes JavaScript may control

As you build features, JavaScript will add/remove classes like:

- `active`
- `open`
- `dark`
- `is-favorite`
- `hidden`
- `loading`
- `error`
- `success`

## Assignment

As you build features, add CSS classes that make state visible.

Examples:

- A selected filter button should look active.
- A favorited project should look different.
- Form errors should be visible.
- Dark mode should change page colors.
- The mobile menu should visibly open and close.

## CSS concepts to focus on

Do not try to learn every CSS property at once. Focus on these first:

1. Selectors
2. Classes
3. Box model
4. Margin and padding
5. Flexbox
6. Grid
7. CSS variables
8. Media queries
9. State classes
10. Responsive layout

Read:

```txt
docs/00b-css-foundations.md
```
