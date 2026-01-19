// src/components/PromotionBanner.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PromotionBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const largeImages = [
    '/images/bannerimage/1.avif',
    '/images/bannerimage/2.avif',
    '/images/bannerimage/3.avif',
    '/images/bannerimage/4.avif',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % largeImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      {/* MAIN BANNER – Fixed 350px height */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[300px] overflow-hidden  shadow-2xl bg-white">

        {/* LEFT: Large Sliding Image (2/3 width) */}
        <div className="lg:col-span-2 relative overflow-hidden">
          {/* Sliding Images */}
          {largeImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent flex items-center">
            <div className="text-white p-8 max-w-lg">
              <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-1">
                SUPER BRAND DAY
              </h3>
              <p className="text-lg mb-4 font-medium">Make Your Way in Style</p>

              <div className="flex items-center gap-3 mb-5">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Free Delivery
                </span>
                <span className="text-sm opacity-90">Min. Order BDT 499</span>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/shop"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold text-lg transition shadow-lg"
                >
                  Shop Now
                </Link>
                <Link
                  to="/gallery"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-bold text-lg transition shadow-lg"
                >
                  VIEW COLLECTION
                </Link>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-8 flex gap-2">
            {largeImages.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'bg-white w-10' : 'bg-white/50 w-6'
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Two Small Banners – Text perfectly visible */}
        <div className="flex flex-col gap-4">

          {/* Top Small Banner */}
          <div className="relative h-1/2 bg-gradient-to-br from-orange-400 to-red-500 overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-white z-10">
              <h3 className="text-lg font-bold">TOP PICKS IN POPULAR</h3>
              <p className="text-2xl font-black">TECH & MORE</p>
              <p className="text-xs mt-1 opacity-90">Hurry, these deals will be gone in a FLASH</p>
            </div>
            <img
              src="/images/bannerimage/d3.png"
              alt="Tech"
              className="absolute bottom-0 right-0 w-48 object-contain transform group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Bottom Small Banner */}
          <div className="relative h-1/2 bg-gradient-to-tr from-blue-500 to-cyan-400  overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-white z-10">
              <h3 className="text-3xl font-black">KERUI</h3>
              <p className="text-lg font-bold">ENJOY THE SECURITY</p>
              <p className="text-xs mt-1 opacity-90">Amazing offers for security systems</p>
            </div>
            <img
              src="/images/bannerimage/d2.png"
              alt="Kerui"
              className="absolute bottom-0 right-0 w-40 object-contain transform group-hover:scale-110 transition duration-500"
            />
          </div>

        </div>
      </div>
    </div>
  );
}