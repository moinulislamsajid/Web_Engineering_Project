// src/pages/CreateAccount.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Phone, Lock, Eye, EyeOff, Chrome, Facebook, Check, X } from "lucide-react";

export default function CreateAccount() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [strength, setStrength] = useState(0);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", password: "", confirmPassword: "", agree: false
  });

  const navigate = useNavigate();

  useEffect(() => {
    const p = formData.password;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[a-z]/.test(p) && /[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    setStrength(s);
  }, [formData.password]);

  useEffect(() => {
    if (formData.password && formData.confirmPassword) {
      setPasswordMatch(formData.password === formData.confirmPassword);
    } else setPasswordMatch(null);
  }, [formData.password, formData.confirmPassword]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordMatch || strength < 2) return;
    navigate("/login?created=true");
  };

  return (
    <div className="min-h-[800px] bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="relative w-full max-w-4xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/40">
        
        {/* Animated Gradient Top Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#FF3E6C] via-[#8E2DE2] to-[#4A00E0] animate-pulse" />
        
        <div className="p-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF3E6C] to-[#8E2DE2] bg-clip-text text-transparent">
              ShopVerse
            </h1>
            <p className="text-gray-600 mt-2 text-lg">Create your account & enjoy shopping</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <input type="text" name="name" required placeholder="Full Name" value={formData.name} onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF3E6C] focus:border-transparent outline-none transition" />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <input type="email" name="email" required placeholder="Email" value={formData.email} onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF3E6C] focus:border-transparent outline-none transition" />
              </div>
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <input type="tel" name="phone" placeholder="Phone (Optional)" value={formData.phone} onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF3E6C] focus:border-transparent outline-none transition" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <input type={showPass ? "text" : "password"} name="password" required placeholder="Password" value={formData.password} onChange={handleChange}
                    className="w-full pl-10 pr-10 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF3E6C] outline-none transition" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-3">
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {formData.password && (
                  <div className="flex gap-1">
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`h-1.5 flex-1 rounded-full transition ${i <= strength ? 'bg-gradient-to-r from-[#FF3E6C] to-[#8E2DE2]' : 'bg-gray-300'}`} />
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <input type={showConfirm ? "text" : "password"} name="confirmPassword" required placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-3 text-sm border rounded-xl focus:ring-2 focus:ring-[#FF3E6C] outline-none transition ${passwordMatch === false ? 'border-red-500' : passwordMatch ? 'border-green-500' : 'border-gray-300'}`} />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-8 top-3">
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                {passwordMatch !== null && (passwordMatch ? <Check className="absolute right-3 top-3 h-4 w-4 text-green-600" /> : <X className="absolute right-3 top-3 h-4 w-4 text-red-600" />)}
              </div>
            </div>

            <label className="flex items-center gap-3 text-sm">
              <input type="checkbox" name="agree" required checked={formData.agree} onChange={handleChange} className="w-4 h-4 rounded text-[#FF3E6C]" />
              <span className="text-gray-700">I agree to <a href="#" className="text-[#FF3E6C] font-medium hover:underline">Terms</a> & <a href="#" className="text-[#FF3E6C] font-medium hover:underline">Privacy</a></span>
            </label>

            <button type="submit" disabled={!passwordMatch || strength < 2}
              className="w-full py-3.5 bg-gradient-to-r from-[#FF3E6C] to-[#8E2DE2] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition disabled:opacity-50 text-sm">
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <p className="text-sm text-gray-600">Or continue with</p>
            <div className="flex justify-center gap-4">
              <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-[#FF3E6C] transition"><Chrome className="h-5 w-5 text-blue-600" /></button>
              <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-[#FF3E6C] transition"><Facebook className="h-5 w-5 text-blue-700" /></button>
            </div>
            <p className="text-sm">Already have an account? <Link to="/login" className="text-[#FF3E6C] font-bold hover:underline">Log in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}