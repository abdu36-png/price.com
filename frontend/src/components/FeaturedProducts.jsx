import React from "react";
import ProductCard from "./ProductCard";

// Mock product data
const products = [
  { id: 1, name: "iPhone 15", price: 999, image: "https://via.placeholder.com/150", link: "#" },
  { id: 2, name: "Samsung Galaxy S23", price: 899, image: "https://via.placeholder.com/150", link: "#" },
  { id: 3, name: "MacBook Pro", price: 1999, image: "https://via.placeholder.com/150", link: "#" },
  { id: 4, name: "AirPods Pro", price: 249, image: "https://via.placeholder.com/150", link: "#" },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
