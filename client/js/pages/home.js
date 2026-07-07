import { projects } from '../data/projects.js';
import { createProjectCard } from '../components/projectCard.js';

const featuredProjectsContainer = document.querySelector('#featuredProjects');

function renderFeaturedProjects() {
  // TODO: Filter the projects array to only featured projects.
  // TODO: Convert each project into HTML using createProjectCard.
  // TODO: Insert the HTML into featuredProjectsContainer.

  if (!featuredProjectsContainer) return;

  const featuredProjects = projects.filter((project) => project.featured === true);
  featuredProjectsContainer.innerHTML = featuredProjects
    .map((project) => createProjectCard(project))
    .join('');
}

renderFeaturedProjects();
