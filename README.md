# Bajaj-Broking---Trading-SDK - Node.js

A simulated Trading API backend built using Node.js + Express, designed for backend system design evaluation.

Implements a clean **Controller → Service → Router** architecture and provides trading functionality including instruments, orders, trades, and portfolio management.

> **Note:** This application uses in-memory storage and requires no external database, making it simple and fast to run.

---

## 🚀 Features

### ✔ Trading Functionalities

- View tradable instruments
- Place orders (BUY / SELL)
- Support for MARKET and LIMIT order styles
- Auto-execution of MARKET orders
- Track order status by order ID
- View executed trades
- Auto-calculate portfolio holdings

### ✔ Technical Features

- Clean separation of concerns:
  - **Routes** (API endpoints)
  - **Controllers** (request/response handling)
  - **Services** (business logic)
  - **Data store** (in-memory)
- RESTful API design
- Proper HTTP status codes
- Simple error handling and validation
- Expandable architecture

---

## 📁 Folder Structure

```
Bajaj-Broking---Trading-SDK/
├── package.json
├── server.js
└── src/
    ├── controllers/
    │   ├── instruments.controller.js
    │   ├── orders.controller.js
    │   ├── portfolio.controller.js
    │   └── trades.controller.js
    ├── services/
    │   ├── instruments.service.js
    │   ├── orders.service.js
    │   ├── portfolio.service.js
    │   └── trades.service.js
    ├── routes/
    │   ├── instruments.js
    │   ├── orders.js
    │   ├── portfolio.js
    │   └── trades.js
    └── data/
        └── store.js
```

---

## ⚙️ Technology Stack

| Component        | Technology          |
|-----------------|---------------------|
| Backend         | Node.js, Express    |
| Data Storage    | In-memory (arrays)  |
| API Format      | JSON                |
| Authentication  | Optional/mock       |
| Architecture    | MVC-style with services |

---

## 🛠 Installation & Setup

### 1️⃣ Download or Clone Repository

```bash
git clone https://github.com/Pradyut-Guchhait/Bajaj-Broking---Trading-SDK.git
cd Bajaj-Broking---Trading-SDK
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Server

```bash
npm start
```

Server runs at: **http://localhost:3000**

---

## 🧭 API Endpoints Overview

### 📌 Instruments

| Method | Endpoint                  | Description                    |
|--------|---------------------------|--------------------------------|
| GET    | `/api/v1/instruments`     | Fetch all tradable instruments |

### 📌 Orders

#### Place Order

| Method | Endpoint           | Description      |
|--------|--------------------|------------------|
| POST   | `/api/v1/orders`   | Place a new order |

**Sample Request Body:**

```json
{
  "symbol": "AAPL",
  "quantity": 10,
  "price": 150,
  "orderType": "BUY",
  "orderStyle": "MARKET"
}
```

#### Get Order Status

| Method | Endpoint                    | Description           |
|--------|-----------------------------|-----------------------|
| GET    | `/api/v1/orders/{orderId}`  | Fetch order by ID     |

### 📌 Trades

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | `/api/v1/trades`   | Fetch all executed trades |

### 📌 Portfolio

| Method | Endpoint              | Description                |
|--------|-----------------------|----------------------------|
| GET    | `/api/v1/portfolio`   | Fetch current portfolio holdings |

---

## 🧪 Sample cURL Commands

### Get Instruments

```bash
curl http://localhost:3000/api/v1/instruments
```

### Place Market Order

```bash
curl -X POST http://localhost:3000/api/v1/orders \
  -H "Content-Type: application/json" \
  -d '{"symbol":"AAPL","quantity":5,"orderType":"BUY","orderStyle":"MARKET"}'
```

### Fetch Order Status

```bash
curl http://localhost:3000/api/v1/orders/<orderId>
```

### Fetch Trades

```bash
curl http://localhost:3000/api/v1/trades
```

### Fetch Portfolio

```bash
curl http://localhost:3000/api/v1/portfolio
```

---

## 📥 Sample Responses

### Instruments

```json
[
  {
    "symbol": "AAPL",
    "exchange": "NASDAQ",
    "instrumentType": "EQ",
    "lastTradedPrice": 150
  },
  {
    "symbol": "GOOG",
    "exchange": "NASDAQ",
    "instrumentType": "EQ",
    "lastTradedPrice": 2800
  },
  {
    "symbol": "TSLA",
    "exchange": "NASDAQ",
    "instrumentType": "EQ",
    "lastTradedPrice": 700
  }
]
```

### Order Execution

```json
{
  "id": "c8e0a1ef-4f22-4c38-9ca3-5b77e7b58c2d",
  "symbol": "AAPL",
  "quantity": 5,
  "price": 150,
  "orderType": "BUY",
  "orderStyle": "MARKET",
  "status": "EXECUTED"
}
```

### Trades

```json
[
  {
    "id": "98f1f34d-e2e3-4d1c-a275-8e4443de2c21",
    "orderId": "c8e0a1ef-4f22-4c38-9ca3-5b77e7b58c2d",
    "symbol": "AAPL",
    "quantity": 5,
    "price": 150
  }
]
```

### Portfolio

```json
[
  {
    "symbol": "AAPL",
    "quantity": 5,
    "averagePrice": 150
  }
]
```

---

## ✔ Validations & Rules

| Rule                          | Description                |
|-------------------------------|----------------------------|
| Quantity must be > 0          | Mandatory                  |
| LIMIT orders require price    | Enforced                   |
| MARKET orders auto-execute    | Immediate trade            |
| Missing/Invalid fields        | Return 400                 |
| Order not found               | Return 404                 |

---

## 📌 Assumptions Made

- Only one mock user is assumed
- No authentication required unless added later
- MARKET orders fill instantly at last traded price
- LIMIT orders are stored but not automatically executed
- No real trading engine or market feed integration
- Data resets on every server restart
- No concurrency or multi-user handling needed

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Trading! 📈**
