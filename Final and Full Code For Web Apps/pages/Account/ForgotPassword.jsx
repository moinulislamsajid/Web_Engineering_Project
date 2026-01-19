// src/pages/ForgotPassword.jsx
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  return (
    <div className="min-h-[500px] bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/40">
        
        {/* Gradient Top Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#FF3E6C] via-[#8E2DE2] to-[#4A00E0] animate-pulse" />
        
        <div className="p-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF3E6C] to-[#8E2DE2] bg-clip-text text-transparent">
              ShopVerse
            </h1>
            <p className="text-gray-600 mt-2 text-lg">Reset your password</p>
          </div>

          <form className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <input type="email" required placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF3E6C] outline-none transition" />
            </div>

            <button type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#FF3E6C] to-[#8E2DE2] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition text-sm">
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#FF3E6C] transition font-medium">
              <ArrowLeft className="h-4 w-4" /> Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}