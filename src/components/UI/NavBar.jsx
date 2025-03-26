import React from "react";
import Button from './PrimaryButtons';  // Import the Button component


const NavBar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Haven Burgers</div>
        <div className="flex space-x-4">
          <Button text="Home" onClick={() => console.log('Home clicked')} />
          <Button text="About" onClick={() => console.log('About clicked')} />
          <Button text="Order" onClick={() => console.log('Contact clicked')} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;