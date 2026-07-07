# 06 — PostgreSQL

## Goal

Store portfolio data and contact form submissions in a real database.

## Files

```txt
server/src/db/schema.sql
server/src/db/seed.sql
server/src/db/pool.js
```

## Tables

You will create:

- `projects`
- `experience`
- `contact_messages`

## Concepts

- database
- table
- row
- column
- primary key
- SQL
- `SELECT`
- `INSERT`
- connection pool
- environment variables

## Assignment A: create the database

Install PostgreSQL locally or use a hosted provider like Neon or Supabase later.

Create a database named:

```txt
portfolio_lab
```

## Assignment B: run schema

Run:

```bash
psql -d portfolio_lab -f server/src/db/schema.sql
```

## Assignment C: seed data

Run:

```bash
psql -d portfolio_lab -f server/src/db/seed.sql
```

## Assignment D: connect Express to PostgreSQL

Open:

```txt
server/src/db/pool.js
```

Use the `pg` package to connect using `DATABASE_URL`.

## Assignment E: replace fake data

Update your project controller so `GET /api/projects` reads from PostgreSQL instead of a JS array.

## Done when

You can explain:

- Why a database is useful
- What a primary key is
- What SQL does
- Difference between frontend state and persistent data
- Why `.env` should not be committed
