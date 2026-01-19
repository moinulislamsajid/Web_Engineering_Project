// src/pages/AccountProfile.jsx
import React, { useState, useEffect } from "react";
import {
  Settings, LogOut, Camera, Package, Truck, Star, PenLine,
  ChevronDown, Moon, Sun
} from "lucide-react";

const AccountProfile = () => {
  const [isDark, setIsDark] = useState(false); // ← ONLY THIS LINE CHANGED (false = white mode default)
  const [showSettings, setShowSettings] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Era",
    email: "era@example.com",
    address: "123 Tbilisi Street, Georgia",
    phone: "+8801700000019",
    avatar: "/images/account/era.jpg",
  });

  // Apply dark mod
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Dummy Data
  const orders = [
    { id: "#ORD1287", name: "Sony WH-1000XM5", qty: 1, price: 349.99, status: "Shipped" },
    { id: "#ORD1286", name: "MacBook Pro 14″ M3", qty: 1, price: 1999, status: "Processing" },
  ];

  const delivered = [
    { name: "Apple Watch Series 9", qty: 1, price: 399, date: "15 Nov 2025" },
    { name: "AirPods Pro 2nd Gen", qty: 2, price: 249, date: "10 Nov 2025" },
  ];

  const pendingReviews = [
    { name: "Apple Watch Series 9" },
    { name: "AirPods Pro 2nd Gen" },
  ];

  const completedReviews = [
    { name: "PS5 DualSense Edge", rating: 5 },
    { name: "Samsung Odyssey G9", rating: 4 },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"} transition-all duration-300`}>
      {/* Header */}
      <div className={`${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"} border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Account</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-3 rounded-full ${isDark ? "bg-orange-500 text-white" : "bg-gray-200 text-black"} transition hover:scale-110`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full transition">
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          <div className={`${isDark ? "bg-zinc-900" : "bg-white"} rounded-2xl shadow-2xl p-8`}>
            <div className="text-center">
              {/* IMAGE UPLOAD + DEFAULT IMAGE */}
              <div className="relative inline-block">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setUser({ ...user, avatar: reader.result });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="hidden"
                  id="avatar-upload"
                />

                <label htmlFor="avatar-upload" className="cursor-pointer block group">
                  <div className={`w-36 h-36 rounded-full overflow-hidden ${isDark ? "border-zinc-700" : "border-white"} shadow-xl`}>
                    <img
                      src={user.avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/images/account/default-profile.jpg";
                      }}
                    />
                  </div>

                  {/* Hover Camera Overlay */}
                  <div className="absolute inset-0 rounded-full bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Camera size={40} className="text-white" />
                  </div>
                </label>
              </div>

              {/* User Info */}
              {isEditing ? (
                <div className="mt-8 space-y-5">
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="w-full text-2xl font-bold text-center bg-transparent border-b-2 border-orange-500 focus:outline-none"
                    placeholder="Your Name"
                  />
                  <input
                    type="text"
                    value={user.address}
                    onChange={(e) => setUser({ ...user, address: e.target.value })}
                    className="w-full text-center bg-transparent border-b border-zinc-600 focus:border-orange-500 outline-none"
                    placeholder="Address"
                  />
                  <input
                    type="text"
                    value={user.phone}
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    className="w-full text-center bg-transparent border-b border-zinc-600 focus:border-orange-500 outline-none"
                    placeholder="Phone"
                  />
                </div>
              ) : (
                <div className="mt-8">
                  <h2 className="text-3xl font-bold">{user.name}</h2>
                  <p className={`${isDark ? "text-zinc-400" : "text-gray-500"} mt-2`}>{user.email}</p>
                  <p className={`${isDark ? "text-zinc-300" : "text-gray-600"} mt-6 leading-relaxed`}>{user.address}</p>
                  <p className={`${isDark ? "text-zinc-300" : "text-gray-600"} mt-2`}>{user.phone}</p>
                </div>
              )}

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition transform hover:scale-105"
              >
                {isEditing ? "Save Changes" : "Edit Profile"}
              </button>
            </div>

            {/* Settings */}
            <div className={`mt-10 border-t ${isDark ? "border-zinc-800" : "border-gray-200"} pt-6`}>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg ${isDark ? "hover:bg-zinc-800" : "hover:bg-gray-50"} transition`}
              >
                <div className="flex items-center gap-3">
                  <Settings size={22} />
                  <span className="font-medium">Settings</span>
                </div>
                <ChevronDown size={20} className={`transition ${showSettings ? "rotate-180" : ""}`} />
              </button>

              {showSettings && (
                <div className={`${isDark ? "bg-zinc-800" : "bg-gray-50"} rounded-lg mt-2 overflow-hidden`}>
                  <button className={`w-full text-left px-6 py-3 ${isDark ? "hover:bg-zinc-700" : "hover:bg-gray-200"} transition`}>Change Password</button>
                  <button className={`w-full text-left px-6 py-3 ${isDark ? "hover:bg-zinc-700" : "hover:bg-gray-200"} transition`}>Privacy Settings</button>
                  <button className="w-full text-left px-6 py-3 text-red-500 font-medium flex items-center gap-2 hover:bg-red-500/10 transition">
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Orders, Delivered, Reviews */}
        <div className="lg:col-span-2 space-y-8">
          {/* Orders */}
          <div className={`${isDark ? "bg-zinc-900" : "bg-white"} rounded-2xl shadow-2xl p-8`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Package className="text-orange-500" /> Orders Placed
            </h2>
            {orders.map((o) => (
              <div key={o.id} className={`flex justify-between items-center py-5 ${isDark ? "border-zinc-800" : "border-gray-200"} border-b last:border-0`}>
                <div>
                  <p className="font-semibold text-lg">{o.name}</p>
                  <p className={`text-sm ${isDark ? "text-zinc-400" : "text-gray-500"}`}>Order {o.id} • Qty: {o.qty}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl">${o.price}</p>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full font-medium">{o.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Delivered */}
          <div className={`${isDark ? "bg-zinc-900" : "bg-white"} rounded-2xl shadow-2xl p-8`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Truck className="text-green-500" /> Delivered Products
            </h2>
            {delivered.map((d, i) => (
              <div key={i} className={`flex justify-between items-center py-5 ${isDark ? "border-zinc-800" : "border-gray-200"} border-b last:border-0`}>
                <p className="font-semibold text-lg">{d.name}</p>
                <p className={`${isDark ? "text-zinc-400" : "text-gray-600"}`}>Delivered {d.date}</p>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <div className={`${isDark ? "bg-zinc-900" : "bg-white"} rounded-2xl shadow-2xl p-8`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Star className="text-purple-500" /> Product Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-red-500 mb-4 text-lg">Pending Reviews</h3>
                {pendingReviews.map((r, i) => (
                  <div key={i} className={`${isDark ? "bg-zinc-800" : "bg-gray-50"} p-5 rounded-xl mb-4`}>
                    <p className="font-medium">{r.name}</p>
                    <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition">
                      <PenLine size={16} /> Write Review
                    </button>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-bold text-green-500 mb-4 text-lg">Completed Reviews</h3>
                {completedReviews.map((r, i) => (
                  <div key={i} className={`flex justify-between items-center ${isDark ? "bg-zinc-800" : "bg-gray-50"} p-5 rounded-xl`}>
                    <p className="font-medium">{r.name}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          size={20}
                          className={idx < r.rating ? "fill-yellow-400 text-yellow-400" : `${isDark ? "text-zinc-600" : "text-gray-400"}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;