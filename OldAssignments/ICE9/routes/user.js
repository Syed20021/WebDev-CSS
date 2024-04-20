import express from 'express';
import { homeView, aboutView } from '../controllers/userController.js';

const router = express.Router();

router.get('/', homeView);
router.get('/about', aboutView);

export { router };