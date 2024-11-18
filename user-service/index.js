const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));

