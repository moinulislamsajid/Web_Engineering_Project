// src/pages/Cart.jsx
import React, { useState } from "react";
import { Plus, Minus, X, Truck, Home, Store } from "lucide-react";
import Recommendation from "../../components/Recommendation";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [deliveryMethod, setDeliveryMethod] = useState("home");

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Camille Henrot Artwork Trousers",
      price: 1350.00,
      size: "36",
      color: "White",
      qty: 1,
      image: "/images/cart/MFS1.jpg",
      ref: "REF169928",
    },
    {
      id: 2,
      name: "Camille Henrot Artwork Shirt",
      price: 1250.00,
      size: "36",
      color: "Black",
      qty: 3,
      image: "/images/cart/MFT1.jpg",
      ref: "REF172049",
    },
    {
      id: 3,
      name: "Camille Henrot Artwork Jacket",
      price: 1890.00,
      size: "38",
      color: "Black",
      qty: 1,
      image: "/images/cart/MFJ1.jpg",
      ref: "REF189101",
    },
  ]);

  const updateQty = (id, delta) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = 0.00; // Free delivery
  const total = subtotal + delivery;

  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        cartItems: items,
        subtotal,
        delivery,
        total,
      },
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500">
        Home / Your Basket
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left - Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold mb-8">Your Basket</h2>

          {items.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex gap-6">
              <div className="w-40 h-56 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">Ref: {item.ref}</p>
                    <div className="mt-3 space-y-1 text-sm">
                      <p className="text-green-600">Home Delivery Available</p>
                      <p className="text-green-600">Click & Collect Available</p>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-black transition">
                    <X size={28} />
                  </button>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                  <span>Size: {item.size} • Color: {item.color}</span>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center gap-4">
                    <span className="text-sm">Qty:</span>
                    <button onClick={() => updateQty(item.id, -1)} className="w-10 h-10 rounded-full border border-gray-300 hover:border-black flex items-center justify-center">
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center text-lg font-medium">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-10 h-10 rounded-full border border-gray-300 hover:border-black flex items-center justify-center">
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold">${(item.price * item.qty).toFixed(2)}</p>
                    {item.qty > 1 && <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Summary & Checkout */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-6">
              <button onClick={() => setDeliveryMethod("home")} className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl transition ${deliveryMethod === "home" ? "bg-white shadow-md border border-gray-300" : "bg-gray-100"}`}>
                <Home size={20} />
                <span className="font-medium">Home Delivery</span>
              </button>
              <button onClick={() => setDeliveryMethod("collect")} className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl transition ${deliveryMethod === "collect" ? "bg-white shadow-md border border-gray-300" : "bg-gray-100"}`}>
                <Store size={20} />
                <span className="font-medium">Click & Collect</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="space-y-4 text-lg">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* CONNECTED CHECKOUT BUTTON */}
            <button
              onClick={handleCheckout}
              className="group relative w-full mt-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Checkout • ${total.toFixed(2)}
                <svg className="w-6 h-6 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 mt-12 rounded-3xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Truck className="text-green-600" /> Delivery Information
        </h3>
        <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
          <li>Standard Delivery: 3–5 working days (Free on orders over $150)</li>
          <li>Express Delivery: Next working day if ordered before 6PM</li>
          <li>Free Click & Collect from any GAUCHERE boutique within 2 hours</li>
          <li>Free returns within 30 days — simply bring your items to any store or use our free return label</li>
        </ul>
      </div>

      <Recommendation />
    </div>
  );
};

export default Cart;