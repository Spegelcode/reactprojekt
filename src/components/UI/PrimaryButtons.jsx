import React from 'react';

// Define the Button component
const Button = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}  // default to 'button', can be 'submit' or 'reset'
      onClick={onClick}  // Passes the onClick handler
      className={`bg-orange-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {text}  {/* Display the text */}
    </button>
  );
};

export default Button;