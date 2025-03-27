import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElemets, cardElements } from "@stripe/react-stripe-js";



const stripePromise = loadStripe(pk_test_51R7Cog2YSZsKT8ZB6B8VFBsdxoplHKS4Wzl73WshT2x7vVnwf6Pxl0ZB4tjV5JLPgepmx8vyTt4HXVWZMDzVaQk500qdimT8OZ);

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, totalPrice } = location.state || { cart: [], totalPrice: 0 };
  

  const handleSubmit = () => {
    alert("Checkout successful! Thank you for your purchase.");
    navigate("/"); // Navigate back to the home page after checkout
  };

  return (
    <div className=" mx-auto p-5 bg-orange-700 text-center">
      <h2 className="text-2xl font-bold text-center">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty.</p>
      ) : (
        <>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Order Summary</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className=" justify-between items-center p-3 border-b text-center">
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold">Total Price: ${totalPrice}</h3>
            <button 
              onClick={handleSubmit} 
              className="mt-3 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
            >
              Complete Purchase
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;