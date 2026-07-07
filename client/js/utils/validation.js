export function isRequired(value) {
  return value.trim().length > 0;
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function minLength(value, length) {
  return value.trim().length >= length;
}
