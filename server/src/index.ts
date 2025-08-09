import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    //credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());


// starter menu
const menu = [
    { id: 1, name: 'Corned Beef Hash', price: 13.99 },
    { id: 2, name: 'Ham Benedict', price: 12.99 },
    { id: 3, name: 'Heirloom Tomato Salad', price: 10.99 }
]
app.get('/api/menu', (req, res) => {
  res.json(menu);
});

const PORT = 5000;
app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`);
})
