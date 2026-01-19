// src/components/Footer.jsx
import React from 'react';
import { ArrowUp, Facebook, Twitter, Instagram } from 'lucide-react';
import { FaPinterestP } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* SECTION 1 — Main Footer Content */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 relative pb-12">

          <div className="md:col-span-4 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              A<span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">6</span>AI
            </h2>
            <div className="space-y-3 text-gray-600">
              <p className="text-sm font-medium">Got Question? Call us 24/7</p>
              <p className="text-2xl font-bold text-gray-900">[+880] 1845202570</p>
              <p className="text-sm">Satarkul, Badda, Dhaka</p>
            </div>
            <a href="https://www.google.com/maps/place/Dhaka+International+University"
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-lg transition">
              View On Map
            </a>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">We Using</h4>
              <h3 className="text-lg font-semibold text-gray-900 mt-2">Safe Payments</h3>
              <div className="flex gap-4 mt-4">
                <img src="/images/footer/bkash.png" alt="bKash" className="h-10" />
                <img src="/images/footer/american.png" alt="American Express" className="h-10" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Secured by:</p>
              <div className="flex gap-4 mt-3">
                <img src="/images/footer/norton.png" alt="Norton" className="h-9" />
                <img src="/images/footer/mc.png" alt="McAfee" className="h-9" />
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Our Stores</h4>
              <ul className="space-y-2">
                {['Jashore', 'Rangpur', 'Cumilla', 'Faridpur', 'USA', 'Australia', 'Albarto'].map((city) => (
                  <li key={city}><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">{city}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Support Center', 'Terms & Conditions', 'Shipping', 'Privacy Policy', 'Help', 'Product Return', 'FAQs'].map((link) => (
                  <li key={link}><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Back to Top Button — Yellow, Right Middle, -90° */}
          <div className="absolute right-0 -mr-[100px] top-1/2 -translate-y-1/2 z-10">
  <button
  onClick={scrollToTop}
  className="relative overflow-hidden -rotate-90 bg-yellow-400 hover:text-white font-bold px-6 py-3 shadow-2xl flex items-center gap-2 origin-center group"
>
  {/* Sliding black overlay */}
  <span className="absolute inset-0 w-full bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />

  <ArrowUp size={18} className="rotate-90 relative z-10" />
  <span className="text-xs tracking-widest relative z-10">BACK TO TOP</span>
</button>
</div>


        </section>
      </div>
       {/* SECTION 2 — Copyright + Social Icons Only */}
      <section className="bg-yellow-400 border-t border-yellow-500">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Side */}
          <p className="text-sm font-medium text-black">
            © 2025 A6AI. All Rights Reserved
          </p>

          {/* Right Side */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="text-black hover:text-gray-800 transition"><Facebook size={20} /></a>
            <a href="#" className="text-black hover:text-gray-800 transition"><Twitter size={20} /></a>
            <a href="#" className="text-black hover:text-gray-800 transition"><FaPinterestP size={20} /></a>
            <a href="#" className="text-black hover:text-gray-800 transition"><Instagram size={20} /></a>
          </div>

        </div>
      </section>

    </footer>
  );
}