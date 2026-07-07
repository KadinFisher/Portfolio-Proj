# 02 — Events and Browser Storage

## Goal

Learn how JavaScript responds to user actions and saves small pieces of browser state.

## Features to build

- Mobile navigation toggle
- Dark/light theme toggle
- Project filter buttons
- Project search input
- Favorite projects saved in `localStorage`
- Contact form draft saved in `sessionStorage`

## Concepts

- `addEventListener`
- click events
- input events
- `classList.toggle`
- `dataset`
- `localStorage`
- `sessionStorage`
- `JSON.stringify`
- `JSON.parse`

## Assignment A: navbar toggle

Open:

```txt
client/js/main.js
```

Implement the nav toggle so clicking the hamburger opens/closes the menu.

## Assignment B: theme toggle

Still in `main.js`, make the theme button:

1. Read saved theme from `localStorage`.
2. Apply it on page load.
3. Toggle between light and dark on click.
4. Save the choice.

## Assignment C: filters

Open:

```txt
client/js/pages/projects.js
```

Make the filter buttons work:

- All
- Full Stack
- AI
- Frontend
- Backend

Use the `data-filter` attribute on each button.

## Assignment D: favorites

Add a favorite button to project cards.

When clicked:

1. Save the project ID in `localStorage`.
2. Visually mark the card as favorited.
3. Keep favorites after refresh.

## Done when

You can explain:

- What an event listener is
- Difference between `localStorage` and `sessionStorage`
- Why browser storage stores strings
- Why `JSON.stringify` and `JSON.parse` are needed
