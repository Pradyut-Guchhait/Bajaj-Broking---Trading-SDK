import express from 'express';
import { createOrder, fetchOrder } from '../controllers/orders.controller.js';

const router = express.Router();
router.post('/', createOrder);
router.get('/:id', fetchOrder);

export default router;
