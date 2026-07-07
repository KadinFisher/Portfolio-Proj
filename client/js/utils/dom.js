export function getElement(selector) {
  const element = document.querySelector(selector);

  if (!element) {
    console.warn(`Element not found: ${selector}`);
  }

  return element;
}

export function renderHTML(element, html) {
  if (!element) return;
  element.innerHTML = html;
}
