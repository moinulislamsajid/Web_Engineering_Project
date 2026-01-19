// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Chrome, Facebook } from "lucide-react";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const justCreated = new URLSearchParams(location.search).get("created") === "true";

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-[750px] bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/40">
        
        {/* Gradient Top Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#FF3E6C] via-[#8E2DE2] to-[#4A00E0] animate-pulse" />
        
        <div className="p-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF3E6C] to-[#8E2DE2] bg-clip-text text-transparent">
              ShopVerse
            </h1>
            <p className="text-gray-600 mt-2 text-lg">Welcome back!</p>
            {justCreated && <p className="mt-3 text-sm text-green-600 font-semibold bg-green-50 py-2 rounded-lg">Account created successfully!</p>}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF3E6C] outline-none transition" />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <input type={showPass ? "text" : "password"} required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF3E6C] outline-none transition" />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-3">
                {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" className="w-4 h-4 rounded" /> Remember me</label>
              <Link to="/forgot-password" className="text-[#FF3E6C] font-medium hover:underline">Forgot Password?</Link>
            </div>

            <button type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#FF3E6C] to-[#8E2DE2] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition text-sm">
              Log In
            </button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <p className="text-sm text-gray-600">Or continue with</p>
            <div className="flex justify-center gap-4">
              <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-[#FF3E6C] transition"><Chrome className="h-5 w-5 text-blue-600" /></button>
              <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-[#FF3E6C] transition"><Facebook className="h-5 w-5 text-blue-700" /></button>
            </div>
            <p className="text-sm">New here? <Link to="/create-account" className="text-[#FF3E6C] font-bold hover:underline">Create Account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}