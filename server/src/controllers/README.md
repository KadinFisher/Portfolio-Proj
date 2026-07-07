# Controllers

Controllers contain the logic for what happens after a route is matched.

## Example

A route decides:

```txt
GET /api/projects
```

A controller decides:

```txt
Return all projects as JSON.
```

## Assignment

At first, controllers can return fake data.

Later, replace fake data with SQL queries using PostgreSQL.

## Done when

You can explain why this is cleaner than putting all logic in `server.js`.
