import express from 'express';
import { getExperience } from '../controllers/experience.controller.js';

const router = express.Router();

router.get('/', getExperience);

export default router;
