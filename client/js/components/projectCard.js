// A vanilla JS "component" is just a function that returns HTML.

export function createProjectCard(project) {
  // TODO: Return a string of HTML for one project card.
  // Include: title, description, category, technologies, and links.
  // Bonus: Add a favorite button with data-project-id.

  return `
    <article class="card" data-project-id="${project.id}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="card__meta">
        <span class="tag">${project.category}</span>
      </div>
      <div class="card__tags">
        ${project.technologies.map((tech) => `<span class="tag">${tech}</span>`).join('')}
      </div>
    </article>
  `;
}
