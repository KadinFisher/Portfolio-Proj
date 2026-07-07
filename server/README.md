# Server

This is the backend part of the learning lab.

## What the backend will do

- Serve JSON data to the frontend
- Receive contact form submissions
- Validate requests on the server
- Connect to PostgreSQL
- Return useful error messages

## Setup

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

Open:

```txt
http://localhost:3000/api/health
```

You should see JSON.

## Learning path

1. Understand `server.js`.
2. Create route files in `src/routes/`.
3. Create controller files in `src/controllers/`.
4. Add middleware.
5. Connect PostgreSQL.
6. Replace fake data with database queries.

## Important

Never commit your real `.env` file.
Only commit `.env.example`.
