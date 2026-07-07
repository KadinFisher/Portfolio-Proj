export function createExperienceCard(item) {
  // TODO: Return a string of HTML for one experience card.
  // Include role, organization, dates, description, and highlights.

  return `
    <article class="card" data-experience-id="${item.id}">
      <h3>${item.role}</h3>
      <p><strong>${item.organization}</strong> · ${item.startDate} - ${item.endDate}</p>
      <p>${item.description}</p>
      <ul>
        ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}
      </ul>
    </article>
  `;
}
