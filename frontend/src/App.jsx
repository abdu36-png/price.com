import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      
  );
}

