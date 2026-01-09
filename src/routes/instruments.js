import express from 'express';
import { fetchInstruments } from '../controllers/instruments.controller.js';
const router = express.Router();
router.get('/', fetchInstruments);
export default router;
