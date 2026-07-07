// Starter fake data.
// Later, replace this with PostgreSQL queries.
const fakeExperience = [
  {
    id: 1,
    role: 'Software Engineering Learning Lab',
    organization: 'Personal Project',
    description: 'Learning frontend, backend, database, and deployment fundamentals.'
  }
];

export function getExperience(req, res) {
  res.json({ data: fakeExperience });
}
