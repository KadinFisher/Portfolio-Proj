# 01 — Frontend DOM Rendering

## Goal

Learn how JavaScript takes data and turns it into visible HTML.

You will render:

- Featured projects on the homepage
- All projects on the projects page
- Experience cards on the experience page

## Files to study

```txt
client/js/data/projects.js
client/js/data/experience.js
client/js/components/projectCard.js
client/js/components/experienceCard.js
client/js/pages/home.js
client/js/pages/projects.js
client/js/pages/experience.js
```

## Concepts

- arrays
- objects
- functions
- template literals
- imports/exports
- `document.querySelector`
- `innerHTML`
- `map`
- `join`

## Assignment A: render featured projects

Open:

```txt
client/js/pages/home.js
```

Implement the TODOs so that:

1. You import the project data.
2. You filter only projects where `featured: true`.
3. You render those projects into `#featuredProjects`.

## Assignment B: render all projects

Open:

```txt
client/js/pages/projects.js
```

Implement the TODOs so that all projects appear on the Projects page.

## Assignment C: render experience cards

Open:

```txt
client/js/pages/experience.js
```

Implement the TODOs so that experience entries render from `experience.js` data.

## Done when

You can answer:

- What is the DOM?
- Why do we use data arrays instead of hardcoding every card in HTML?
- What does `.map()` return?
- Why do we use `.join('')` after mapping to HTML strings?
- What happens if `document.querySelector('#projectList')` returns `null`?
