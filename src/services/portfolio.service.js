import { trades } from '../data/store.js';

export const getPortfolio = () => {
  const portfolio = {};
  trades.forEach(t => {
    if (!portfolio[t.symbol]) portfolio[t.symbol] = { symbol: t.symbol, quantity: 0, averagePrice: 0 };
    const p = portfolio[t.symbol];
    const totalCost = p.averagePrice * p.quantity + t.price * t.quantity;
    p.quantity += t.quantity;
    p.averagePrice = totalCost / p.quantity;
  });
  return Object.values(portfolio);
};
