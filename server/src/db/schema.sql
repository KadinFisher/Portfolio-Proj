DROP TABLE IF EXISTS contact_messages;
DROP TABLE IF EXISTS project_technologies;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS experience;

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  demo_url TEXT,
  code_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project_technologies (
  id SERIAL PRIMARY KEY,
  project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  technology TEXT NOT NULL
);

CREATE TABLE experience (
  id SERIAL PRIMARY KEY,
  role TEXT NOT NULL,
  organization TEXT NOT NULL,
  start_date TEXT,
  end_date TEXT,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
