// src/pages/Wishlist.jsx
import React, { useState } from "react";
import { Heart, X, ShoppingBag, ArrowRight } from "lucide-react";
import Recommendation from "../../components/Recommendation";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Camille Henrot Artwork Trousers",
      price: 1350.00,
      size: "36",
      color: "White",
      image: "/images/cart/MFS1.jpg",
      inStock: true,
    },
    {
      id: 2,
      name: "Camille Henrot Artwork Shirt",
      price: 1250.00,
      size: "36",
      color: "Black",
      image: "/images/cart/MFT1.jpg",
      inStock: true,
    },
    {
      id: 3,
      name: "Camille Henrot Artwork Top",
      price: 495.00,
      size: "36",
      color: "Black",
      image: "/images/cart/MFP1.jpg",
      inStock: false,
    },
    {
      id: 4,
      name: "Camille Henrot Leather Jacket",
      price: 2890.00,
      size: "38",
      color: "Black",
      image: "/images/cart/MFJ1.jpg",
      inStock: true,
    },
  ]);

  // Remove single item
  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  // Clear ALL items
  const clearAll = () => {
    setWishlist([]);
  };

  // Move to cart (demo)
  const moveToCart = (id) => {
    alert("Added to cart!");
    removeFromWishlist(id);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500">
        Home / My Wishlist
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {wishlist.length === 0 ? (
          <div className="text-center py-24">
            <Heart size={80} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 text-lg mb-8">Save your favorite pieces and come back later</p>
            <button className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-900 transition text-lg font-medium">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Header with Clear All */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">My Wishlist ({wishlist.length} items)</h2>
              <button
                onClick={clearAll}
                className="text-sm font-medium underline hover:no-underline transition"
              >
                Clear All
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  {/* Remove Icon - Top Right */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 z-20 bg-white rounded-full p-2.5 shadow-lg hover:scale-110 transition opacity-0 group-hover:opacity-100"
                  >
                    <X size={20} className="text-gray-700" />
                  </button>

                  {/* Image */}
                  <div className="aspect-square bg-gray-50 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-bold text-xl tracking-wider">OUT OF STOCK</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-medium text-lg leading-tight line-clamp-2 min-h-[3.5rem]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Size: {item.size} • Color: {item.color}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-2xl font-bold">${item.price.toFixed(2)}</p>
                      <Heart size={26} className="text-red-500 fill-red-500" />
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 space-y-3">
                      <button
                        onClick={() => moveToCart(item.id)}
                        disabled={!item.inStock}
                        className={`w-full py-3.5 rounded-full font-medium flex items-center justify-center gap-2 transition ${
                          item.inStock
                            ? "bg-black text-white hover:bg-gray-900"
                            : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <ShoppingBag size={18} />
                        {item.inStock ? "Add to Cart" : "Out of Stock"}
                      </button>

                      <button className="w-full py-3.5 rounded-full border border-black text-black hover:bg-black hover:text-white transition font-medium flex items-center justify-center gap-2">
                        View Details <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          
          </>
        )}
      </div>
      <Recommendation />
    </div>
    
  );
};
export default Wishlist;