// src/components/MicPopup.jsx
import React from 'react';

const MicPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center"
      onClick={onClose} // Click outside = close
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full mx-4 animate-pulse"
        onClick={(e) => e.stopPropagation()} // Don't close when clicking inside
      >
        {/* Animated Mic */}
        <div className="relative mx-auto w-32 h-32 mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-inner">
            <svg className="w-20 h-20 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Listening...
        </h2>
        <p className="text-center text-gray-600 text-lg mb-8">
          Speak now – we're ready for your voice command!
        </p>

        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition shadow-lg"
        >
          Stop Listening
        </button>
      </div>
    </div>
  );
};

export default MicPopup;