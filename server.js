import express from 'express';
import instrumentsRouter from './src/routes/instruments.js';
import ordersRouter from './src/routes/orders.js';
import tradesRouter from './src/routes/trades.js';
import portfolioRouter from './src/routes/portfolio.js';

const app = express();
app.use(express.json());

// Health/Home Route
app.get('/', (req, res) => {
  res.send("Trading API is running! Use /api/v1/... endpoints");
});

// API Routes
app.use('/api/v1/instruments', instrumentsRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/trades', tradesRouter);
app.use('/api/v1/portfolio', portfolioRouter);

// Fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start Server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
