import express from 'express';
import { fetchPortfolio } from '../controllers/portfolio.controller.js';

const router = express.Router();
router.get('/', fetchPortfolio);

export default router;
