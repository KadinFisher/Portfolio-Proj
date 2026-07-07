# Routes

Routes define the API URLs and HTTP methods.

## Example

```js
router.get('/', getProjects);
```

This means:

```txt
GET /api/projects
```

calls the `getProjects` controller.

## Assignment

Add these routes:

Projects:

- `GET /api/projects`
- `GET /api/projects/:id`

Experience:

- `GET /api/experience`

Contact:

- `POST /api/contact`

## Rule

Routes should stay simple. Most logic belongs in controllers.
