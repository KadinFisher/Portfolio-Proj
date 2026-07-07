# JavaScript

This folder is where most of the frontend learning happens.

## Folder responsibilities

```txt
components/   reusable UI functions
pages/        page-specific JavaScript
data/         temporary frontend data before the backend exists
utils/        helper functions used by multiple files
```

## Why `type="module"`?

The HTML files load JavaScript like this:

```html
<script type="module" src="js/pages/projects.js"></script>
```

That allows you to use:

```js
import { projects } from '../data/projects.js';
export function createProjectCard(project) {}
```

Modules help split code into smaller files.

## Assignment

Before writing code, trace this flow:

1. Browser opens `projects.html`.
2. HTML loads `js/main.js`.
3. HTML loads `js/pages/projects.js`.
4. `projects.js` imports data and component functions.
5. JavaScript renders project cards into the DOM.
