# 05 — Backend with Node.js and Express

## Goal

Build a backend server that returns JSON to the frontend.

## Files

```txt
server/server.js
server/src/routes/
server/src/controllers/
server/src/middleware/
```

## Features to build

- Health check route
- Projects API
- Experience API
- Contact message API
- Error handling middleware
- Request validation middleware

## Concepts

- Node.js
- Express
- server
- route
- controller
- middleware
- HTTP methods
- status codes
- JSON response

## Assignment A: health route

Open:

```txt
server/server.js
```

Confirm this works:

```txt
GET /api/health
```

## Assignment B: projects route

Create:

```txt
GET /api/projects
GET /api/projects/:id
```

At first, return fake data from a JavaScript array.

## Assignment C: contact route

Create:

```txt
POST /api/contact
```

It should accept:

```json
{
  "name": "Example Name",
  "email": "person@example.com",
  "message": "Hello"
}
```

Validate the request before accepting it.

## Done when

You can explain:

- What the backend does that the frontend cannot do alone
- Difference between `GET` and `POST`
- Why controllers are separate from routes
- What middleware is
- Why backend validation matters
