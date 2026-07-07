import { projects } from '../data/projects.js';
import { createProjectCard } from '../components/projectCard.js';

const projectList = document.querySelector('#projectList');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.querySelector('#projectSearch');
const githubReposContainer = document.querySelector('#githubRepos');

let activeFilter = 'all';
let searchTerm = '';

function getVisibleProjects() {
  // TODO: Filter by activeFilter.
  // TODO: Filter by searchTerm.
  // Return the filtered projects.

  return projects.filter((project) => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const normalizedSearch = searchTerm.toLowerCase();
    const searchableText = `${project.title} ${project.description} ${project.technologies.join(' ')}`.toLowerCase();
    const matchesSearch = searchableText.includes(normalizedSearch);
    return matchesFilter && matchesSearch;
  });
}

function renderProjects() {
  if (!projectList) return;

  const visibleProjects = getVisibleProjects();

  if (visibleProjects.length === 0) {
    projectList.innerHTML = '<p class="empty-state">No projects found.</p>';
    return;
  }

  projectList.innerHTML = visibleProjects
    .map((project) => createProjectCard(project))
    .join('');
}

function setupFilters() {
  // TODO: Add click listeners to all filter buttons.
  // TODO: Update activeFilter from button.dataset.filter.
  // TODO: Update active button class.
  // TODO: Re-render projects.

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      renderProjects();
    });
  });
}

function setupSearch() {
  // TODO: Add input listener.
  // TODO: Update searchTerm.
  // TODO: Re-render projects.

  if (!searchInput) return;

  searchInput.addEventListener('input', (event) => {
    searchTerm = event.target.value;
    renderProjects();
  });
}

async function fetchGithubRepos() {
  // TODO: Replace YOUR_USERNAME with your GitHub username when ready.
  // TODO: Show loading state before fetch.
  // TODO: Use try/catch.
  // TODO: Render repo cards or show error.

  if (!githubReposContainer) return;

  githubReposContainer.innerHTML = '<p class="empty-state">TODO: Implement GitHub API fetch in docs/04-api-and-async.md.</p>';
}

renderProjects();
setupFilters();
setupSearch();
fetchGithubRepos();
