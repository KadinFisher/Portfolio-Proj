export function createFormMessage(message, type = 'success') {
  // type should usually be "success" or "error".
  return `<span class="${type}">${message}</span>`;
}
