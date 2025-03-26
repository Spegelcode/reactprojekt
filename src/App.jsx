import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/UI/NavBar";  
import HeroSection from "./components/UI/HeroSection";
import MainSection from "./components/UI/MainSection";
import Order from "./components/UI/Order";
import Checkout from "./components/UI/Checkout";

function App() {
  return (
    <Router>
      <NavBar />
      <HeroSection />
      <MainSection />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Order />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;