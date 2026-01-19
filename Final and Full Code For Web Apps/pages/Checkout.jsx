// src/pages/Checkout.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, Truck, Shield, CreditCard } from "lucide-react";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { cartItems = [], subtotal = 0, delivery = 0, total = 0 } = state || {};

  const handlePayment = () => {
    navigate("/payment", {
      state: {
        amount: total,
        orderId: "ORD" + Date.now(),
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-10 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-10 animate-pulse"
            style={{
              background: i % 2 === 0 ? "#e2136e" : "#ee4b2b",
              filter: "blur(100px)",
              top: `${10 + i * 18}%`,
              left: i % 2 === 0 ? "-10%" : "70%",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-center mb-10">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <ShoppingBag className="w-7 h-7" /> Shipping Address
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                <input placeholder="Full Name" className="input-field" />
                <input placeholder="Phone Number" className="input-field" />
                <input placeholder="Division / City" className="md:col-span-2 input-field" />
                <input placeholder="Area / Thana" className="input-field" />
                <input placeholder="Full Address" className="md:col-span-2 input-field" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CreditCard className="w-7 h-7" /> Payment Method
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center justify-center p-6 bg-white/10 rounded-2xl border-2 border-white/30 cursor-pointer hover:border-white/70 transition">
                  <input type="radio" name="method" defaultChecked className="sr-only" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-500">bKash</div>
                    <p className="text-sm opacity-80">Most Popular</p>
                  </div>
                </label>
                <label className="flex items-center justify-center p-6 bg-white/10 rounded-2xl border-2 border-white/30 cursor-pointer hover:border-white/70 transition">
                  <input type="radio" name="method" className="sr-only" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">Nagad</div>
                    <p className="text-sm opacity-80">Fast & Secure</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b border-white/10">
                    <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
                      <ShoppingBag className="w-10 h-10 opacity-60" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm opacity-70">Qty: {item.qty} • Size: {item.size}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${(item.price * item.qty).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 text-lg">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <Truck className="w-5 h-5" /> Shipping
                  </span>
                  <span>Free</span>
                </div>
                <div className="border-t border-white/30 pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-2xl text-green-400">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="w-full mt-8 py-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
              >
                <Shield className="w-6 h-6" />
                Proceed to Payment → ${total.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 16px;
          color: white;
          font-size: 16px;
        }
        .input-field::placeholder { color: rgba(255, 255, 255, 0.6); }
        .input-field:focus { outline: none; border-color: white; background: rgba(255, 255, 255, 0.15); }
      `}</style>
    </div>
  );
}