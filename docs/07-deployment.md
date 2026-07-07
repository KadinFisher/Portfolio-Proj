# 07 — Deployment

## Goal

Learn what it means to put your app online.

## Deployment pieces

A full-stack app usually has three deployed parts:

1. Frontend site
2. Backend server
3. Database

## Beginner-friendly options

Frontend:

- Netlify
- Vercel

Backend:

- Render
- Railway
- Fly.io

PostgreSQL:

- Neon
- Supabase
- Railway
- Render PostgreSQL

## Concepts

- localhost vs production
- environment variables
- build command
- start command
- CORS
- production API URL
- logs
- redeploys

## Assignment A: deploy frontend

Deploy the `client/` folder first.

At this stage, the site can work as a static site.

## Assignment B: deploy backend

Deploy the `server/` folder.

Your backend should expose:

```txt
/api/health
```

## Assignment C: deploy database

Create a hosted PostgreSQL database and set `DATABASE_URL` in your backend deployment platform.

## Assignment D: connect production frontend to backend

Update the frontend API base URL so it uses your deployed backend URL.

## Done when

You can explain:

- What deployment means
- Why `localhost` only works on your computer
- How environment variables are set in production
- Why CORS errors happen
- How the frontend talks to a deployed backend
