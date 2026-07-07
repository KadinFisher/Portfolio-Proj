INSERT INTO projects (title, category, description, featured, demo_url, code_url)
VALUES
('Portfolio Learning Lab', 'full-stack', 'A personal portfolio used to learn full-stack development fundamentals.', true, '#', '#'),
('AI Project Placeholder', 'ai', 'A placeholder AI project used for rendering and API practice.', true, '#', '#'),
('Backend API Practice', 'backend', 'A project for learning Express routes, controllers, and JSON APIs.', false, '#', '#');

INSERT INTO project_technologies (project_id, technology)
VALUES
(1, 'HTML'),
(1, 'CSS'),
(1, 'JavaScript'),
(1, 'Node.js'),
(1, 'Express'),
(1, 'PostgreSQL'),
(2, 'JavaScript'),
(2, 'API'),
(2, 'AI'),
(3, 'Node.js'),
(3, 'Express'),
(3, 'REST API');

INSERT INTO experience (role, organization, start_date, end_date, description)
VALUES
('Software Engineering Learning Lab', 'Personal Project', '2026', 'Present', 'Building a personal portfolio while learning frontend, backend, database, and deployment fundamentals.');
