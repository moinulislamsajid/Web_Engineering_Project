// src/components/Navbar.jsx → Replace the entire return() with this

import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaHeart, FaShoppingCart, FaUser, FaTruck, FaUndo } from 'react-icons/fa';
import MicPopup from '../components/MicPopup';
import { useState } from 'react';
import { ShoppingBag } from "lucide-react";
 // Adjust path if needed


export default function Navbar() {
  const [isMicOpen, setIsMicOpen] = useState(false);
  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-700 text-sm border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2"><FaTruck /> <span>Free Delivery</span></div>
                <span className="text-gray-400">|</span>
                <div className="flex items-center gap-2"><FaUndo /> <span>Returns Policy</span></div>
              </div>
              <span className="text-gray-400">|</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Follow Us</span>
                <FaFacebookF className="hover:text-gray-900 cursor-pointer" />
                <FaTwitter className="hover:text-gray-900 cursor-pointer" />
                <FaPinterestP className="hover:text-gray-900 cursor-pointer" />
                <FaInstagram className="hover:text-gray-900 cursor-pointer" />
              </div>
            </div>
            <Link to="/login" className="flex items-center gap-2 hover:text-indigo-600">
              <FaUser size={18} /> Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            <Link to="/" className="text-4xl font-black">
              A<span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">6</span>AI
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-12 text-gray-800 font-medium">

              <Link to="/" className="hover:text-indigo-600 transition">Home</Link>

              
              {/* Gallery Mega Dropdown – Full Previous Width + Exact 500px Height */}
              <div className="relative group">
                <Link to="/gallery" className="hover:text-indigo-600 transition font-medium">
                  Shop
                </Link>

                {/* Invisible bridge – keeps hover alive */}
                <div className="absolute inset-x-0 top-full mt-0 h-12" />

                {/* Mega Menu – Previous full width + Fixed 500px height */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-screen max-w-7xl ml-[200px]
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                transition-all duration-500 z-50 pointer-events-none group-hover:pointer-events-auto">

                  <div 
                    className="h-[412px] shadow-2xl overflow-hidden border border-blue-900/40"
                    style={{
                      backgroundImage: `
                        linear-gradient(to bottom, rgba(0, 0, 0, 0.88), rgba(2, 22, 80, 0.96)),
                        url('/images/megamenu-bg.png')
                      `,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="grid grid-cols-3 gap-16 px-16 py-10 h-full">

                      {/* MEN */}
                      <div className="flex flex-col">
                        <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
                          MEN
                        </h3>
                        <ul className="space-y-3 text-gray-200 font-medium text-sm flex-1">
                          {["Jackets & Coats","Shirts","Pants & Jeans","Shoes","Watches","Bags & Wallets","Sunglasses","Perfume","Winter Collection"].map((item) => (
                            <li key={item} className="group/item relative pl-6">
                              <Link to="#" className="hover:text-white transition block">{item}</Link>
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-cyan-400 transition-all duration-300 group-hover/item:h-full rounded-r"></span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* WOMEN */}
                      <div className="flex flex-col">
                        <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
                          WOMEN
                        </h3>
                        <ul className="space-y-3 text-gray-200 font-medium text-sm flex-1">
                          {["Dresses","Tops & Blouses","Skirts","Handbags","Heels & Flats","Jewelry","Perfume","Saree & Lehenga","Makeup"].map((item) => (
                            <li key={item} className="group/item relative pl-6">
                              <Link to="#" className="hover:text-white transition block">{item}</Link>
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-pink-400 transition-all duration-300 group-hover/item:h-full rounded-r"></span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* TECHNOLOGY */}
                      <div className="flex flex-col">
                        <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 mb-6">
                          TECHNOLOGY
                        </h3>
                        <ul className="space-y-3 text-gray-200 font-medium text-sm flex-1">
                          {["Smartphones","Laptops","Headphones","Smartwatches","Cameras","Gaming Accessories","Speakers","Drones"].map((item) => (
                            <li key={item} className="group/item relative pl-6">
                              <Link to="#" className="hover:text-white transition block">{item}</Link>
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-emerald-400 transition-all duration-300 group-hover/item:h-full rounded-r"></span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
        

              {/* Shop + New Badge */}
              
              <Link to="/products" className="flex items-center gap-2 hover:text-indigo-600 transition font-medium">
                <ShoppingBag size={18} />
                All Products
              </Link>

              <div className="relative group">
                <Link to="/about" className="hover:text-indigo-600 transition font-medium">
                  About
                </Link>

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white rounded-lg shadow-xl border overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link to="/about-us" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 font-medium">About Us</Link>
                  <Link to="/terms-and-condition" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 font-medium">Terms & Conditions</Link>
                </div>
              </div>
                            <div className="relative group">
                <Link to="/help" className="hover:text-indigo-600 transition font-medium">
                  Help
                </Link>

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-lg shadow-xl border overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link to="/faq"           className="block px-6 py-3 hover:bg-gray-50 text-gray-700 font-medium">FAQ</Link>
                  <Link to="/contact-us"       className="block px-6 py-3 hover:bg-gray-50 text-gray-700 font-medium">Contact Us</Link>
                  <Link to="/shopping-info"      className="block px-6 py-3 hover:bg-gray-50 text-gray-700 font-medium">Shipping Info</Link>
                  <Link to="/return-and-refund"       className="block px-6 py-3 hover:bg-gray-50 text-gray-700 font-medium">Returns & Refund</Link>
                </div>
              </div>
              <Link to="/blogs" className="hover:text-indigo-600 transition">Blogs</Link>
            </nav>
            {/* Right Icons – Black Outline Only */}
            <div className="flex items-center gap-7">
              <Link to="/wishlist" className="relative">
                <FaHeart size={24} className="text-gray-800" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">0</span>
              </Link>

              <Link to="/cart" className="relative">
                <FaShoppingCart size={26} className="text-gray-800" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">0</span>
              </Link>

              {/* Track Order Icon – Between Cart & Account */}
              <Link to="/track-order" className="relative">
                <FaTruck size={26} className="text-gray-800 hover:text-indigo-600 transition" />
              </Link>

              {/* Account Icon – Far Right */}
              <Link to="/account">
                <FaUser size={26} className="text-gray-800 hover:text-indigo-600 transition" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>
      </header>

      {/* SEARCH NAVBAR – 100% ALIGNED + HOVER WORKING */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700">
        {/* SAME max-w-7xl as your main navbar → perfect alignment */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center h-16">

            {/* LEFT: All Departments – Perfectly aligned with logo */}
            <div className="flex items-center">
              <div className="relative group">
                <button className="flex items-center gap-3 text-white font-semibold   py-3 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span>All Departments</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border">
                  {["Men's Fashion","Women's Fashion","Smartphones","Laptops","Cameras","Drones","Speakers","Watches","Accessories"].map((cat) => (
                    <a key={cat} href="#" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium transition">
                      {cat}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            
           {/* CENTER: Search Bar – Perfectly centered (NO layout change) */}
            <div className="flex-1 flex justify-center px-8">
              <div className="relative w-full max-w-3xl">
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  className="w-full h-14 pl-6 pr-36 rounded-full text-gray-800 font-medium placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
                />

                {/* Hidden Image Input */}
                <input
                  type="file"
                  accept="image/*"
                  id="image-search-input"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      console.log("Image selected:", e.target.files[0]);
                      alert(`Image selected: ${e.target.files[0].name}`);
                    }
                  }}
                />

                {/* IMAGE SEARCH ICON – Placed exactly where mic was, no extra space */}
                <label
                  htmlFor="image-search-input"
                  className="absolute right-28 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-indigo-600 transition"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </label>

                {/* Mic Button – shifted slightly left (right-16 → right-16 still works perfectly) */}
                <button 
                  onClick={() => setIsMicOpen(true)}
                  className="absolute right-16 top-1/2 -translate-y-1/2 text-gray-600 hover:text-indigo-600 transition"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>

                {/* Search Button – unchanged */}
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 p-3.5 rounded-full transition shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Place this at the very end, right before the final </> */}
            <MicPopup isOpen={isMicOpen} onClose={() => setIsMicOpen(false)} />


            {/* RIGHT: Black Friday – HOVER 100% WORKING + Aligned with profile icon */}
            <div className="flex items-center justify-end">
              <div className="bg-gradient-to-r from-amber-500 to-red-600 hover:bg-black text-white font-bold  py-1 shadow-xl transition-all duration-500 cursor-pointer text-center min-w-80">
                <div className="text-sm uppercase tracking-widest">Black Friday Sale</div>
                <div className="text-2xl font-black">Up to 70% OFF</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
