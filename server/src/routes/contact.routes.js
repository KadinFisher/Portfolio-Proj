import express from 'express';
import { createContactMessage } from '../controllers/contact.controller.js';
import { validateContactRequest } from '../middleware/validateRequest.js';

const router = express.Router();

router.post('/', validateContactRequest, createContactMessage);

export default router;
