import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import projectsRoutes from './src/routes/projects.routes.js';
import experienceRoutes from './src/routes/experience.routes.js';
import contactRoutes from './src/routes/contact.routes.js';
import { errorHandler } from './src/middleware/errorHandler.js';

// Load environment variables from .env
// Example: PORT=3000
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio Learning Lab API is running'
  });
});

// API routes
app.use('/api/projects', projectsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/contact', contactRoutes);

// Error handler should be last
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
