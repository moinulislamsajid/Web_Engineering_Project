// src/components/HotSaleSection.jsx
import React, { useState, useEffect } from 'react';

const useAllCountdowns = (deals) => {
  const [countdowns, setCountdowns] = useState({});

  useEffect(() => {
    const calculate = () => {
      const now = Date.now();
      const newCountdowns = {};

      Object.keys(deals).forEach(tab => {
        deals[tab].forEach(product => {
          const diff = new Date(product.endTime) - now;
          if (diff <= 0) {
            newCountdowns[product.id] = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          } else {
            newCountdowns[product.id] = {
              days: Math.floor(diff / (1000 * 60 * 60 * 24)),
              hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((diff / 1000 / 60) % 60),
              seconds: Math.floor((diff / 1000) % 60),
            };
          }
        });
      });
      setCountdowns(newCountdowns);
    };

    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [deals]);

  return countdowns;
};

const TimerBox = ({ value }) => (
  <div className="w-12 h-12 bg-orange-500 text-white font-bold text-sm flex items-center justify-center rounded-lg shadow">
    {String(value).padStart(2, '0')}
  </div>
);

export default function HotSaleSection() {
  const [activeTab, setActiveTab] = useState('16');

  const deals = {
    '16': [
      { id: '1', name: "27\" 144Hz Gaming Monitor", oldPrice: 449, newPrice: 377, img: "monitor1.jpg", endTime: "2025-12-03T23:59:59" },
      { id: '2', name: "Wireless Bluetooth Headphone", oldPrice: 179, newPrice: 150, img: "bluetooth-headphone.jpg", endTime: "2025-11-30T20:00:00" },
      { id: '3', name: "PS3 Wireless Gamepad", oldPrice: 99, newPrice: 83, img: "gamepad-ps3.jpg", endTime: "2025-12-01T12:00:00" },
    ],
    '25': [
      { id: '4', name: "32\" 4K Curved Monitor", oldPrice: 799, newPrice: 599, img: "monitor2.jpg", endTime: "2025-11-29T23:59:59" },
      { id: '5', name: "Fitness Tracker Wristband", oldPrice: 129, newPrice: 96, img: "wristband.jpg", endTime: "2025-11-30T18:00:00" },
      { id: '6', name: "Portable Bluetooth Projector", oldPrice: 399, newPrice: 299, img: "bluetooth-projector.jpg", endTime: "2025-12-02T10:00:00" },
    ],
    '32': [
      { id: '7', name: "Core i7 Gaming Laptop 16GB", oldPrice: 1799, newPrice: 1223, img: "laptop.jpg", endTime: "2025-11-28T23:59:59" },
      { id: '8', name: "Premium Smart Watch", oldPrice: 499, newPrice: 339, img: "watch.jpg", endTime: "2025-11-30T15:00:00" },
      { id: '9', name: "Professional DSLR Camera Kit", oldPrice: 1599, newPrice: 1087, img: "dslr-camera.jpg", endTime: "2025-12-04T17:00:00" },
    ],
  };

  const currentDeals = deals[activeTab];
  const allCountdowns = useAllCountdowns(deals);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Hot Sale</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">

        {/* LEFT 35% – Promo Banners */}
        <div className="lg:col-span-4 flex flex-col gap-6">

          {/* Top Banner */}
          <div className="h-[290px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl overflow-hidden flex">
            <div className="w-1/2 p-8 flex flex-col justify-center text-white">
              <p className="text-sm opacity-90">Limited Time Only</p>
              <h3 className="text-2xl font-bold mt-2 leading-tight">
                3D VR Headset<br />+ Controllers
              </h3>
              <button className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg transition">
                Grab Now
              </button>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img src="/images/HotSale/3d-vr.png" alt="3D VR" className="w-full h-full object-contain p-2" />
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="h-[290px] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-2xl overflow-hidden flex">
            <div className="w-1/2 p-8 flex flex-col justify-center text-white">
              <p className="text-4xl font-black">UP TO<br />50% OFF</p>
              <h3 className="text-xl font-bold mt-3">Premium<br />Earphones</h3>
              <button className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg transition">
                Shop Now
              </button>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img src="/images/HotSale/earphone.png" alt="Earphone" className="w-full h-full object-contain p-3" />
            </div>
          </div>
        </div>

        {/* RIGHT 65% – Hot Deals */}
        <div className="lg:col-span-8 flex flex-col h-full">

          {/* Tabs – Top Right */}
          <div className="flex justify-end gap-10 p-11">
            {['16', '25', '32'].map((d) => (
              <button
                key={d}
                onClick={() => setActiveTab(d)}
                className="relative text-sm font-medium text-gray-600 hover:text-orange-600 transition-all pb-2"
              >
                {d}% Off
                {activeTab === d && (
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 px-6 pb-6 flex-1">
            {currentDeals.map((product) => {
              const time = allCountdowns[product.id] || { days: 0, hours: 0, minutes: 0, seconds: 0 };

              return (
                <div
                  key={product.id}
                  className="bg-white  overflow-hidden hover: transition-all duration-300 group"
                >
                  <div className="relative">
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      {activeTab}% Off
                    </div>
                    <img
                      src={`/images/HotSale/${product.img}`}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 px-6"
                    />
                  </div>

                  <div className="p-5 space-y-4">
                    <h4 className="font-bold text-gray-800 text-center line-clamp-2 text-sm">
                      {product.name}
                    </h4>

                    <div className="flex justify-center items-center gap-3">
                      <span className="text-2xl font-bold text-blue-600">
                        ${product.newPrice}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ${product.oldPrice}
                      </span>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-orange-600 font-semibold mb-2">Ends in:</p>
                      <div className="flex justify-center gap-2">
                        <TimerBox value={time.days} />
                        <TimerBox value={time.hours} />
                        <TimerBox value={time.minutes} />
                        <TimerBox value={time.seconds} />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Days • Hours • Min • Sec</p>
                    </div>

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}