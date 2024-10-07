"use clint"
import React from 'react';

const BestSellingItems = () => {
  const products = [
    {
      id: 1,
      title: "Iphone 15 Pro Max",
      price: "400000",
      image: "/images/15promax.jpg",
    },
    {
      id: 2,
      title: "Iphone 15 Pro",
      price: "350000",
      image: "/images/15pro.jpg",
    },
    {
      id: 3,
      title: "Iphone 15",
      price: "300000",
      image: "/images/15.jpg",
    },
    {
      id: 4,
      title: "Iphone 14 Pro Max",
      price: "275000",
      image: "/images/new1.jpg",
    },
  ];

  return (
    <section className="bg-black min-h-screen-full w-full max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Best Selling Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden px-6">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-lg font-bold mb-4">{product.price}</p>
              <button className="bg-[#042440] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingItems;

