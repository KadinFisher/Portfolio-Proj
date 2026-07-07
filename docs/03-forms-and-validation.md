# 03 — Forms and Validation

## Goal

Learn how to validate forms in the browser before sending data anywhere.

## Files

```txt
client/contact.html
client/js/pages/contact.js
client/js/utils/validation.js
client/js/utils/storage.js
```

## Features to build

- Validate name is not empty
- Validate email format
- Validate message length
- Show inline error messages
- Disable submit button while submitting
- Show success/error status
- Save unsent form draft in `sessionStorage`

## Concepts

- submit event
- `event.preventDefault()`
- input values
- validation functions
- inline error messages
- loading state
- accessibility with `aria-live`

## Assignment A: validation helpers

Open:

```txt
client/js/utils/validation.js
```

Implement:

- `isRequired(value)`
- `isEmail(value)`
- `minLength(value, length)`

## Assignment B: contact form

Open:

```txt
client/js/pages/contact.js
```

Implement the form submit handler.

The form should not submit if any field is invalid.

## Assignment C: draft autosave

Use `sessionStorage` so that if the user refreshes the contact page, their partially typed message can be restored.

## Done when

You can explain:

- Why forms reload the page by default
- What `preventDefault()` does
- Why frontend validation is useful but not enough for security
- Why backend validation is still required later
