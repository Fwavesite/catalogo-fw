import { useState } from 'react';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Producto 1', price: '$10', img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2', price: '$20', img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Producto 3', price: '$30', img: 'https://via.placeholder.com/150' },
  ]);

  return (
    <div className="App">
      <h1>Mi Catálogo</h1>
      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
