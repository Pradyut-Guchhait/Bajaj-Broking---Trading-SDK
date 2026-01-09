import { placeOrder, getOrderById } from '../services/orders.service.js';

export const createOrder = (req, res) => {
  try {
    const order = placeOrder(req.body);
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const fetchOrder = (req, res) => {
  try {
    const order = getOrderById(req.params.id);
    res.json(order);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
