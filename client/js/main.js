// main.js runs on every page.
// Use this file for shared behavior like navigation and theme toggling.

function setupActiveNavLink() {
  const links = document.querySelectorAll('.navbar__link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function setupNavToggle() {
  const navToggle = document.querySelector('#navToggle');
  const navMenu = document.querySelector('#navMenu');

  // TODO: If either element is missing, return early.
  // TODO: Add a click event listener.
  // TODO: Toggle the "open" class on navMenu.
  // TODO: Update aria-expanded to true/false.
}

function setupThemeToggle() {
  const themeToggle = document.querySelector('#themeToggle');

  // TODO: Read saved theme from localStorage.
  // TODO: Apply dark mode if saved theme is "dark".
  // TODO: Update button text to "Light" or "Dark".
  // TODO: On click, toggle body.dark and save preference.
}

setupActiveNavLink();
setupNavToggle();
setupThemeToggle();
