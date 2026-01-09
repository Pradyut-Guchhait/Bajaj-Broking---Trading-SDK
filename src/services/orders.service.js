import { orders, trades, instruments } from '../data/store.js';
import { v4 as uuidv4 } from 'uuid';

export const placeOrder = ({ symbol, quantity, price, orderType, orderStyle }) => {
  if (!symbol || !quantity || quantity <= 0) throw new Error("Invalid quantity or symbol");
  if (orderStyle === "LIMIT" && !price) throw new Error("Price required for limit order");

  const id = uuidv4();
  const order = { id, symbol, quantity, price, orderType, orderStyle, status: "PLACED" };
  orders.push(order);

  if (orderStyle === "MARKET") {
    order.status = "EXECUTED";
    const ltp = instruments.find(i => i.symbol === symbol)?.lastTradedPrice || price;
    trades.push({ id: uuidv4(), orderId: id, symbol, quantity, price: ltp });
  }
  return order;
};

export const getOrderById = (id) => {
  const order = orders.find(o => o.id === id);
  if (!order) throw new Error("Order not found");
  return order;
};
