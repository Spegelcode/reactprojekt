import React, { useState } from 'react';
import "./order.css";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";

const Order = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();


  const products = [
    { id: 1, name: 'Burger', price: 10 },
    { id: 2, name: 'Fries', price: 5 },
    { id: 3, name: 'Soda', price: 2 },
  ];



  const addToCart = (product) => {
    setCart((prevCart)=>{
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }else {
          return [...prevCart, { ...product, quantity: 1}];
        }
    });
};

const removeFromCart = (id) => {
  setCart(cart.filter((item) => item.id !== id));
};

const increaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0)
  );
};

const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);


const handleCheckout = () => {
  navigate("/checkout",{ state: { cart, totalPrice} });
}

return (
  <div className=" mx-auto p-5 bg-black text-white">
  <h2 className="text-3xl font-bold text-center mb-4">Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {products.map((product) => (
      <div key={product.id} className="bg-red p-4 rounded-lg shadow-md flex flex-col items-center">
        <span className="text-lg font-semibold">{product.name} - ${product.price}</span>
        <button
          className="mt-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-600"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>

  <h2 className="text-3xl font-bold text-center mt-6">Shopping Cart</h2>
  {cart.length === 0 ? (
    <p className="text-center mt-4 text-gray-500">Your cart is empty.</p>
  ) : (
    <ul className="mt-4 space-y-4">
      {cart.map((item) => (
        <li key={item.id} className="text-center flex justify-between items-center bg-orange-600 p-4 rounded-lg shadow">
          <span className="text-center font-semibold">{item.name} - ${item.price} x {item.quantity}</span>
          <div className="space-x-2">
            <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => increaseQuantity(item.id)}>+</button>
            <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => decreaseQuantity(item.id)}>-</button>
            <button className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  )}


  {cart.length > 0 && (
    <div className="text-center mt-4">
      <h3 className="text-2xl font-bold">Total Price: ${totalPrice}</h3>
      <button
        onClick = {handleCheckout}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
        Checkout
        </button>
      </div>
  )}
</div>
);
};

export default Order;