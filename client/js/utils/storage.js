export function saveLocalItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalItem(key) {
  const rawValue = localStorage.getItem(key);
  if (!rawValue) return null;
  return JSON.parse(rawValue);
}

export function removeLocalItem(key) {
  localStorage.removeItem(key);
}

export function saveSessionItem(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionItem(key) {
  const rawValue = sessionStorage.getItem(key);
  if (!rawValue) return null;
  return JSON.parse(rawValue);
}

export function removeSessionItem(key) {
  sessionStorage.removeItem(key);
}
