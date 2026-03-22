import { useState } from "react";
import "./App.css";

const productsData = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image: "https://via.placeholder.com/100"
  },
  {
    id: 2,
    name: "Product 2",
    price: 15,
    image: "https://via.placeholder.com/100"
  }
];

export default function App() {
  const [cart, setCart] = useState({});

  const addProduct = (id) => {
    setCart({
      ...cart,
      [id]: (cart[id] || 0) + 1
    });
  };

  const removeProduct = (id) => {
    if (!cart[id]) return;
    setCart({
      ...cart,
      [id]: cart[id] - 1
    });
  };

  return (
    <div className="container">
      <h1>Order Catalog</h1>

      {productsData.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} />
          <div className="info">
            <h2>{product.name}</h2>
            <p>${product.price}</p>

            <div className="controls">
              <button onClick={() => removeProduct(product.id)}>-</button>
              <span>{cart[product.id] || 0}</span>
              <button onClick={() => addProduct(product.id)}>+</button>
            </div>
          </div>
        </div>
      ))}

      <div className="form">
        <h2>Your Info</h2>
        <input placeholder="Name" />
        <input placeholder="Address" />
        <button className="submit">Submit Order</button>
      </div>
    </div>
  );
}