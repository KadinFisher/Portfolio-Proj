// Starter fake data.
// Later, replace this with PostgreSQL queries.
const fakeProjects = [
  {
    id: 1,
    title: 'Portfolio Learning Lab',
    category: 'full-stack',
    description: 'A portfolio project used to learn full-stack development.'
  },
  {
    id: 2,
    title: 'Backend API Practice',
    category: 'backend',
    description: 'Practice Express routes and JSON APIs.'
  }
];

export function getProjects(req, res) {
  res.json({ data: fakeProjects });
}

export function getProjectById(req, res, next) {
  const id = Number(req.params.id);
  const project = fakeProjects.find((item) => item.id === id);

  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  res.json({ data: project });
}
