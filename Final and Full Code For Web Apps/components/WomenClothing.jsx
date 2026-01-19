// src/components/WomenClothing.jsx
import React, { useState, useEffect } from 'react';

export default function WomenClothing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto swap middle image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Random 8 products
  const generateRandomProducts = () => {
    const kameez = Array.from({ length: 10 }, (_, i) => ({
      id: `k${i + 1}`,
      name: `Elegant Kameez FDK${i + 1}`,
      price: (199 + Math.random() * 180).toFixed(2),
      img: `/images/womencloth/FDK${i + 1}.jpg`
    }));

    const saree = Array.from({ length: 10 }, (_, i) => ({
      id: `s${i + 1}`,
      name: `Designer Saree FDS${i + 1}`,
      price: (249 + Math.random() * 250).toFixed(2),
      img: `/images/womencloth/FDS${i + 1}.jpg`
    }));

    return [...kameez, ...saree].sort(() => 0.5 - Math.random()).slice(0, 8);
  };

  const products = generateRandomProducts();

  const categories = [
    "Kameez", "Saree", "Salwar Suit", "Lehenga",
    "Kurti", "Anarkali", "Gown", "Palazzo Set"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main 3-Column Layout - 500px Height */}
        <div className="grid grid-cols-12 gap-0 h-[500px] rounded-2xl overflow-hidden shadow-2xl">

          {/* Column 1: Title + Category Links + Background Woman */}
          <div className="col-span-2 bg-gradient-to-b from-pink-600 to-purple-700 relative flex flex-col">
            {/* Background Woman */}
            <div className="absolute inset-0 opacity-40">
              <img
                src="/images/womencloth/woman-bg.jpg"
                alt="Fashion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-white flex flex-col h-full">
              <div className="p-6">
                <h2 className="text-2xl font-bold tracking-wider">Women Clothing</h2>
              </div>

              {/* Category Links - No "Categories" heading */}
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
              src="/images/womencloth/model1.jpg"
              alt="Model"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: currentImageIndex === 0 ? 1 : 0 }}
            />
            <img
              src="/images/womencloth/model2.jpg"
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
                    <p className="text-sm font-bold text-pink-600 mt-2">
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