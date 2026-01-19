// src/components/MenClothing.jsx
import React, { useState, useEffect } from 'react';

export default function MenClothing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto swap middle image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Random 8 products from Men's collection
  const generateRandomProducts = () => {
    const tshirts = Array.from({ length: 5 }, (_, i) => ({
      id: `t${i + 1}`,
      name: `Premium T-Shirt MFT${i + 1}`,
      price: (29 + Math.random() * 40).toFixed(2),
      img: `/images/mencloth/MFT${i + 1}.jpg`
    }));

    const shirts = Array.from({ length: 5 }, (_, i) => ({
      id: `s${i + 1}`,
      name: `Formal Shirt MFS${i + 1}`,
      price: (49 + Math.random() * 60).toFixed(2),
      img: `/images/mencloth/MFS${i + 1}.jpg`
    }));

    const punjabi = Array.from({ length: 5 }, (_, i) => ({
      id: `p${i + 1}`,
      name: `Stylish Punjabi MFP${i + 1}`,
      price: (89 + Math.random() * 80).toFixed(2),
      img: `/images/mencloth/MFP${i + 1}.jpg`
    }));

    const jackets = Array.from({ length: 5 }, (_, i) => ({
      id: `j${i + 1}`,
      name: `Winter Jacket MFJ${i + 1}`,
      price: (129 + Math.random() * 120).toFixed(2),
      img: `/images/mencloth/MFJ${i + 1}.jpg`
    }));

    const all = [...tshirts, ...shirts, ...punjabi, ...jackets];
    return all.sort(() => 0.5 - Math.random()).slice(0, 8);
  };

  const products = generateRandomProducts();

  const categories = [
    "T-Shirts", "Shirts", "Punjabi", "Jackets",
    "Polo", "Hoodies", "Jeans", "Kurta Pajama"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main 3-Column Layout - 500px Height */}
        <div className="grid grid-cols-12 gap-0 h-[500px] rounded-2xl overflow-hidden shadow-2xl">

          {/* Column 1: Title + Category Links + Background Man */}
          <div className="col-span-2 bg-gradient-to-b from-indigo-700 to-blue-900 relative flex flex-col">
            {/* Background Man */}
            <div className="absolute inset-0 opacity-40">
              <img
                src="/images/mencloth/man-bg.jpg"
                alt="Men Fashion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-white flex flex-col h-full">
              <div className="p-6">
                <h2 className="text-2xl font-bold tracking-wider">Men Clothing</h2>
              </div>

              {/* Category Links */}
              <ul className="space-y-3 px-6 pb-8 flex-1">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    className="text-sm font-medium hover:bg-white/20 px-3 py-2 rounded transition cursor-pointer"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Rotating Full-Height Models */}
          <div className="col-span-3 relative overflow-hidden bg-white">
            <img
              src="/images/mencloth/model1.png"
              alt="Model"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: currentImageIndex === 0 ? 1 : 0 }}
            />
            <img
              src="/images/mencloth/model2.jpg"
              alt="Model"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: currentImageIndex === 1 ? 1 : 0 }}
            />
          </div>

          {/* Column 3: 8 Product Cards */}
          <div className="col-span-7 bg-white">
            <div className="grid grid-cols-4 grid-rows-2 gap-3 p-3 h-full">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col"
                >
                  <div className="h-32 flex items-center justify-center p-2">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => e.target.src = '/images/placeholder.jpg'}
                    />
                  </div>
                  <div className="flex-1 px-3 py-2 flex flex-col justify-center">
                    <h4 className="text-xs font-medium text-gray-800 line-clamp-2 leading-tight">
                      {product.name}
                    </h4>
                    <p className="text-sm font-bold text-blue-600 mt-2">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}