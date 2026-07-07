// Temporary frontend data.
// Later this should come from GET /api/projects.

export const projects = [
  {
    id: 1,
    title: 'Portfolio Learning Lab',
    category: 'full-stack',
    featured: true,
    description: 'A personal website used to learn vanilla JavaScript, APIs, Node.js, Express, PostgreSQL, and deployment.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express', 'PostgreSQL'],
    links: {
      demo: '#',
      code: '#'
    }
  },
  {
    id: 2,
    title: 'AI Project Placeholder',
    category: 'ai',
    featured: true,
    description: 'A placeholder AI project card used for rendering, filtering, and future API/database practice.',
    technologies: ['JavaScript', 'API', 'AI'],
    links: {
      demo: '#',
      code: '#'
    }
  },
  {
    id: 3,
    title: 'Frontend Components Practice',
    category: 'frontend',
    featured: false,
    description: 'Practice reusable JavaScript functions that generate UI cards from data objects.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {
      demo: '#',
      code: '#'
    }
  },
  {
    id: 4,
    title: 'Backend API Practice',
    category: 'backend',
    featured: false,
    description: 'Practice Express routes, controllers, JSON responses, and HTTP status codes.',
    technologies: ['Node', 'Express', 'REST API'],
    links: {
      demo: '#',
      code: '#'
    }
  }
];
