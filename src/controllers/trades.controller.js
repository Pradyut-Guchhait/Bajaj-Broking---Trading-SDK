import { getAllTrades } from '../services/trades.service.js';
export const fetchTrades = (req, res) => res.json(getAllTrades());
