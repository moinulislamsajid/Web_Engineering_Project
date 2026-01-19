// src/components/CategoriesSection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CategoriesSection() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const products = [
    { id: 1, name: "Xpeed Projector", price: 499.00, oldPrice: 529.00, rating: 4.5, img: "projector1.png" },
    { id: 2, name: "Apple iPhone 7s", price: 660.00, oldPrice: 690.00, rating: 5, img: "iphone7s.png" },
    { id: 3, name: "Apple iPhone 6s", price: 299.00, oldPrice: null, rating: 4, img: "iphone6s.png" },
    { id: 4, name: "Wireless Microphone", price: 70.00, oldPrice: null, rating: 4.8, img: "mic.webp" },
    { id: 5, name: "CC Camera", price: 210.00, oldPrice: 240.00, rating: 4.2, img: "camera.png" },
    { id: 6, name: "Moving Camera", price: 230.00, oldPrice: null, rating: 4.6, img: "moving-cam.jpg" },
    { id: 7, name: "Core i7 Laptop", price: 125.00, oldPrice: null, rating: 5, img: "laptop.png" },
    { id: 8, name: "Unlocked Mobile Phone", price: 125.00, oldPrice: null, rating: 4.3, img: "phone.png" },
    { id: 9, name: "Stereo Headset", price: 16.00, oldPrice: null, rating: 4.7, img: "headset.png" },
    { id: 10, name: "Camera Drone", price: 540.00, oldPrice: 720.00, rating: 4.9, img: "drone1.png" },
    { id: 11, name: "Holy Stone Drone", price: 540.00, oldPrice: 720.00, rating: 5, img: "drone2.jpg" },
    { id: 12, name: "LED Projector", price: 20.00, oldPrice: null, rating: 4.4, img: "led-projector.png" },
  ];

  // renderStars function – was missing before!
  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-xs ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Top Products This Week
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block"
          >
            <div
              className="group flex w-full max-w-[350px] h-[110px] mx-auto bg-white rounded-lg shadow-sm border overflow-hidden
                         transition-all duration-300 hover:shadow-lg hover:border-blue-300 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="w-2/4 h-full flex items-center justify-center p-2">
                <img
                  src={`/images/Categories/${product.img}`}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-md"
                  onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
                />
              </div>

              {/* Info */}
              <div className="w-3/4 h-full flex flex-col justify-between p-3 pr-4">
                {/* Name + Heart */}
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    className="ml-2 flex-shrink-0"
                  >
                    <span className={`text-lg transition-all ${favorites.includes(product.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}>
                      {favorites.includes(product.id) ? '♥' : '♡'}
                    </span>
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  {renderStars(Math.round(product.rating))}
                  {product.rating >= 4.8 && (
                    <span className="text-xs bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded">Hot</span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}