// src/components/Recommendation.jsx
import React from "react";
import { ShoppingBag, ArrowRight } from "lucide-react";

const Recommendation = () => {
  const products = [
    { id: 1, name: "Artwork Shirt", price: 1350, image: "/images/cart/MFS1.jpg" },
    { id: 2, name: "Artwork Tshirt", price: 1250, image: "/images/cart/MFT1.jpg" },
    { id: 3, name: "Artwork Punjabi", price: 495, image: "/images/cart/MFP1.jpg" },
    { id: 4, name: "Leather Jacket", price: 2890, image: "/images/cart/MFJ1.jpg" },
    { id: 5, name: "Silk Shirt", price: 980, image: "/images/cart/MFS2.jpg" },
    { id: 6, name: "Oversized T-Shirt", price: 680, image: "/images/cart/MFT2.jpg" },
    { id: 7, name: "Technical Parka", price: 1490, image: "/images/cart/MFP2.jpg" },
    { id: 8, name: "Wool Coat", price: 3200, image: "/images/cart/MFJ2.jpg" },
  ];

  const doubledProducts = [...products, ...products];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl text-gray-800 font-bold">Recommended For You</h2>
            <p className="text-gray-600 mt-2">Curated just for your style</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-black hover:gap-4 transition-all font-medium">
            Shop All <ArrowRight size={20} />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex animate-slide gap-6">
            {doubledProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                style={{ height: "450px" }}
              >
                {/* Image Section – Reduced by 50px → now 270px */}
                <div className="h-[270px] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content – Now has more breathing room */}
                <div className="p-6 flex flex-col justify-between h-[180px]">
                  <div>
                    <h3 className="font-medium text-lg leading-tight truncate">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
                  </div>

                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-full flex items-center justify-center gap-2 transition font-medium">
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Shop All */}
        <div className="md:hidden text-center mt-8">
          <button className="inline-flex items-center gap-2 text-black font-medium underline">
            Shop All <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Infinite Scroll Animation */}
      <style jsx>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-slide {
          display: flex;
          width: max-content;
          animation: slide 35s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Recommendation;