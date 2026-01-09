import { getPortfolio } from '../services/portfolio.service.js';
export const fetchPortfolio = (req, res) => res.json(getPortfolio());
