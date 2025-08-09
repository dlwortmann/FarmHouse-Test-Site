import { useEffect, useState } from 'react';

type MenuItem = {
  id: number;
  name: string;
  price: number;
};

function App() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.error('Error fetching menu:', err));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Restaurant Menu</h1>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name} — ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
