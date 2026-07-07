# 04 — APIs and Async JavaScript

## Goal

Learn how the browser gets data from APIs.

## Features to build

- Fetch public GitHub repositories
- Display loading state
- Display error state
- Render fetched data as cards
- Later, fetch your own backend API

## Concepts

- HTTP requests
- JSON
- `fetch`
- promises
- `async` / `await`
- `try` / `catch`
- loading states
- error states

## Assignment A: GitHub API practice

Create a section on the projects page that fetches repositories from GitHub.

Start with a placeholder username.

Example endpoint shape:

```txt
https://api.github.com/users/YOUR_USERNAME/repos
```

Do not worry about authentication yet.

## Assignment B: loading and error states

Your UI should show:

- Loading while waiting
- Error if fetch fails
- Empty message if no repos return

## Assignment C: replace local data with backend data

Later, once the Express API exists, update your frontend to call:

```txt
http://localhost:3000/api/projects
```

## Done when

You can explain:

- Why API calls take time
- What `await` does
- Why network calls need error handling
- What JSON is
- Difference between frontend data and backend data
