import { experience } from '../data/experience.js';
import { createExperienceCard } from '../components/experienceCard.js';

const experienceList = document.querySelector('#experienceList');

function renderExperience() {
  // TODO: Render every item in the experience array.
  // TODO: Use createExperienceCard.

  if (!experienceList) return;

  experienceList.innerHTML = experience
    .map((item) => createExperienceCard(item))
    .join('');
}

renderExperience();
