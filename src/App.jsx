import { useState } from "react";
import "./App.css";

const productsData = [
  { id: 1, name: "Product 1", price: 10, image: "https://via.placeholder.com/120" },
  { id: 2, name: "Product 2", price: 15, image: "https://via.placeholder.com/120" },
  { id: 3, name: "Product 3", price: 20, image: "https://via.placeholder.com/120" },
];

export default function App() {
  const [cart, setCart] = useState({});

  const addProduct = (id) => setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  const removeProduct = (id) => {
    if (!cart[id]) return;
    setCart({ ...cart, [id]: cart[id] - 1 });
  };

  const total = Object.keys(cart).reduce((sum, id) => {
    const product = productsData.find(p => p.id === Number(id));
    return sum + product.price * cart[id];
  }, 0);

  return (
    <div className="container">
      <h1>Order Catalog</h1>

      {productsData.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <div className="product-controls">
              <button onClick={() => removeProduct(product.id)}>-</button>
              <span>{cart[product.id] || 0}</span>
              <button onClick={() => addProduct(product.id)}>+</button>
            </div>
          </div>
        </div>
      ))}

      <div className="cart-card">
        <h2>Cart</h2>
        {Object.keys(cart).length === 0 ? <p>No items yet</p> :
          Object.keys(cart).map(id => {
            const product = productsData.find(p => p.id === Number(id));
            if (!cart[id]) return null;
            return (
              <div key={id} className="cart-item-card">
                <span>{product.name}</span>
                <span>x{cart[id]}</span>
                <span>${product.price * cart[id]}</span>
              </div>
            );
          })
        }
        <h3>Total: ${total}</h3>
      </div>

      <div className="form">
        <h2>Your Info</h2>
        <input placeholder="Name" />
        <input placeholder="Address" />
        <button className="submit">Submit Order</button>
      </div>
    </div>
  );
}