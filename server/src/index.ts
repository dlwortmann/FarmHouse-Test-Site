import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/menu', (req, res) => {
  res.json([
    { id: 1, name: 'Corned Beef Hash', price: 13.99 },
    { id: 2, name: 'Ham Benedict', price: 12.99 }
  ]);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
