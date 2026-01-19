// src/components/LaptopGadgetSection.jsx
import React from 'react';
import { Heart } from 'lucide-react';

export default function LaptopGadgetSection() {
  const laptops = [
    { id: 1, name: "Xpeed Laptop", oldPrice: "$640.00", price: "$540.00", rating: 5, img: "/images/laptop/laptop1.png", buttonText: "Read more" },
    { id: 2, name: "Intel Laptop", oldPrice: "$640.00", price: "$540.00", rating: 5, img: "/images/laptop/laptop2.jpg", buttonText: "Read more" },
    { id: 3, name: "Core i7 Laptop", oldPrice: null, price: "$125.00", rating: 5, img: "/images/laptop/laptop3.jpg", buttonText: "Add to cart" },
    { id: 4, name: "Xpeed Laptop V2", oldPrice: null, price: "$699.00", rating: 5, img: "/images/laptop/laptop4.jpg", buttonText: "Add to cart" },
  ];

  // ONLY THIS FUNCTION IS CHANGED
  const renderStars = (count) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
  // END OF CHANGE

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background Image – 20% Opacity */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/laptop/laptop-bg-1.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Decorative PNG */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <img
          src="/images/laptop/laptop-bg-2.png"
          alt="Laptop Decor"
          className="w-full h-full object-contain object-right-top"
        />
      </div>

      {/* Main Content – 450px Height */}
      <div className="relative max-w-7xl mx-auto px-6 h-[450px] flex flex-col justify-center">

        {/* Title + View Collections Button */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[24px] font-bold text-black tracking-wider">
            Gadget Makes Your Life Easy
          </h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3  shadow-lg transition text-sm z-10 mr-[400px]">
                View Collections
          </button>
        </div>

        {/* 2×2 Cards – Strictly Left-Aligned with 10px Gap */}
        <div className="grid grid-cols-2 gap-x-[10px] gap-y-8 max-w-[850px]">
          {laptops.map((laptop) => (
            <div
              key={laptop.id}
              className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 w-[400px] h-[175px] flex"
            >
              {/* Left: Image */}
              <div className="w-48 flex items-center justify-center p-4">
                <img
                  src={laptop.img}
                  alt={laptop.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => e.target.src = '/images/placeholder.jpg'}
                />
              </div>

              {/* Right: Info */}
              <div className="flex-1 px-5 py-4 flex flex-col justify-between relative">
                {/* Heart Icon – Top Right of Info */}
                <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition">
                  <Heart className="w-5 h-5" />
                </button>

                <div className="mb-1">{renderStars(laptop.rating)}</div>

                <h3 className="text-sm font-bold text-gray-800 line-clamp-2 leading-tight">
                  {laptop.name}
                </h3>

                <div className="flex items-center gap-2 mt-1">
                  {laptop.oldPrice && (
                    <span className="text-xs text-gray-500 line-through">
                      {laptop.oldPrice}
                    </span>
                  )}
                  <span className="text-lg font-bold text-blue-600">
                    {laptop.price}
                  </span>
                </div>

                <button className={`text-xs font-bold  py-2 rounded-full max-w-[100px] mt-3 transition ${
                  laptop.buttonText === "Read more"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-yellow-400 hover:bg-yellow-500 text-black"
                }`}>
                  {laptop.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}