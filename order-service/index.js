const express = require('express');
const app = express();
app.use(express.json());

let orders = [{ id: 1, item: 'Laptop' }, { id: 2, item: 'Book' }];

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.post('/orders', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.status(201).json(order);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
