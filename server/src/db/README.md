# Database

This folder contains PostgreSQL-related files.

## Files

- `schema.sql`: creates tables
- `seed.sql`: inserts starter data
- `pool.js`: connects Express to PostgreSQL

## Setup idea

Create a local database:

```bash
createdb portfolio_lab
```

Run schema:

```bash
psql -d portfolio_lab -f server/src/db/schema.sql
```

Run seed data:

```bash
psql -d portfolio_lab -f server/src/db/seed.sql
```

## Assignment

After the fake Express routes work, replace fake arrays with SQL queries.

Example:

```sql
SELECT * FROM projects ORDER BY created_at DESC;
```
