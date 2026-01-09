import express from 'express';
import { fetchTrades } from '../controllers/trades.controller.js';

const router = express.Router();
router.get('/', fetchTrades);

export default router;
