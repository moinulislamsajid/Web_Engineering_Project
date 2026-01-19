// src/pages/CompactPayment.jsx
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

export default function WorldClassPayment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const amount = state?.amount || 1890;
  const orderId = state?.orderId || "ORD" + Date.now();

  const [step, setStep] = useState(1);
  const [method, setMethod] = useState("bkash");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [pin, setPin] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer > 0) {
      const t = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(t);
    } else if (timer === 0 && generatedOTP) setGeneratedOTP(null);
  }, [timer, generatedOTP]);

  const sendOTP = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOTP(code);
    setTimer(120);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.6 } });
  };

  const completePayment = () => {
    if (pin === "1010") {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: method === "bkash" ? ["#e2136e", "#ff69b4"] : ["#ee4b2b", "#ff8c42"],
      });
      setStep(7);
    } else {
      alert("Wrong PIN! Use 1010");
    }
  };

  const bgHeader = method === "bkash" 
    ? "from-pink-600 to-purple-700" 
    : "from-orange-500 to-red-600";

  return (
    <div className="min-h-[700px] flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-80 h-80 rounded-full opacity-15 animate-pulse blur-3xl"
            style={{
              background: method === "bkash" ? "#e2136e" : "#ee4b2b",
              top: `${10 + i * 18}%`,
              left: i % 2 === 0 ? "10%" : "70%",
            }}
          />
        ))}
      </div>

      {/* Compact 2-Column Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 w-full max-w-4xl">
        <div className="grid md:grid-cols-2">
          
          {/* Left Column - Steps */}
          <div className="p-8 order-2 md:order-1">
            <div className="space-y-6">
              {/* Step 1 */}
              {step === 1 && (
                <div className="text-center text-white">
                  <h3 className="text-lg font-medium mb-6">Complete Your Payment</h3>
                  <button onClick={() => setStep(2)} className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-medium">
                    Pay ${amount}
                  </button>
                </div>
              )}

              {/* Step 2 - Method */}
              {step === 2 && (
                <div className="text-white">
                  <h4 className="text-base font-medium mb-4">Choose Method</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["bkash", "nagad"].map(m => (
                      <button
                        key={m}
                        onClick={() => setMethod(m)}
                        className={`py-4 rounded-xl border font-medium transition ${
                          method === m ? "bg-white/30 border-white" : "border-white/40"
                        }`}
                      >
                        {m === "bkash" ? "bKash" : "Nagad"}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(3)} className="w-full mt-5 py-3 bg-white text-gray-900 rounded-xl font-medium">
                    Continue
                  </button>
                </div>
              )}

              {/* Step 3 - Phone */}
              {step === 3 && (
                <div className="text-white">
                  <label className="text-sm font-medium">Mobile Number</label>
                  <div className="flex gap-3 mt-2">
                    <div className="bg-white/20 px-4 py-3 rounded-xl">+880</div>
                    <input
                      type="text"
                      maxLength="10"
                      value={phone}
                      onChange={e => setPhone(e.target.value.replace(/\D/g, ""))}
                      placeholder="17xxxxxxxx"
                      className="flex-1 bg-white/10 border border-white/30 rounded-xl px-4 py-3"
                    />
                  </div>
                  <button
                    onClick={() => phone.length === 10 ? setStep(4) : alert("10 digits required")}
                    className="w-full mt-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Step 4 - Confirm */}
              {step === 4 && (
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-6">${amount}</div>
                  <button
                    onClick={() => { sendOTP(); setStep(5); }}
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-medium"
                  >
                    Send OTP
                  </button>
                </div>
              )}

              {/* Step 5 - OTP */}
              {step === 5 && (
                <div className="text-white">
                  <div className="bg-blue-500/20 border border-blue-400/50 rounded-xl p-4 text-center mb-4">
                    <p className="text-2xl font-bold tracking-widest">{generatedOTP || "••••"}</p>
                    <p className="text-xs mt-1 opacity-70">Your OTP (demo)</p>
                  </div>
                  <input
                    type="text"
                    maxLength="4"
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="w-full text-center text-xl tracking-widest bg-white/10 border border-white/30 rounded-xl py-4"
                  />
                  <div className="flex justify-between mt-3 text-sm">
                    <button onClick={sendOTP} className="underline">Resend</button>
                    <span className="bg-white/20 px-4 py-2 rounded-lg font-mono">
                      {String(Math.floor(timer / 60)).padStart(2, "0")}:{String(timer % 60).padStart(2, "0")}
                    </span>
                  </div>
                  <button
                    onClick={() => otp == generatedOTP ? setStep(6) : alert("Wrong OTP")}
                    className="w-full mt-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium"
                  >
                    Verify
                  </button>
                </div>
              )}

              {/* Step 6 - PIN */}
              {step === 6 && (
                <div className="text-white">
                  <label className="text-sm font-medium">Enter PIN</label>
                  <input
                    type="password"
                    maxLength="4"
                    value={pin}
                    onChange={e => setPin(e.target.value.replace(/\D/g, ""))}
                    placeholder="••••"
                    className="w-full text-center text-2xl tracking-widest bg-white/10 border border-white/30 rounded-xl py-5 mt-3"
                  />
                  <p className="text-center text-xs mt-2 opacity-70">Demo PIN: 1010</p>
                  <button
                    onClick={completePayment}
                    className="w-full mt-5 py-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-bold text-lg"
                  >
                    Pay Now
                  </button>
                </div>
              )}

              {/* Step 7 - Success */}
              {step === 7 && (
                <div className="text-center text-white py-8">
                  <div className="text-6xl mb-4">Success</div>
                  <h3 className="text-xl font-bold">Payment Complete!</h3>
                  <p className="mt-3 text-lg">${amount} paid via {method.toUpperCase()}</p>
                  <button
                    onClick={() => navigate("/")}
                    className="mt-8 py-4 px-10 bg-white text-gray-900 rounded-xl font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}

              {/* Back Button */}
              {step > 1 && step < 7 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="w-full mt-6 py-3 bg-white/10 rounded-xl text-sm font-medium hover:bg-white/20 transition"
                >
                  ← Back
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Header & Progress */}
          <div className={`p-8 text-white bg-gradient-to-br ${bgHeader} rounded-t-3xl md:rounded-tr-3xl md:rounded-bl-none order-1 md:order-2`}>
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">
                {method === "bkash" ? "bKash" : "Nagad"}
              </h1>
              <p className="text-sm opacity-90">Secure Payment</p>
              <div className="text-5xl font-black mt-6">${amount}</div>
              <p className="text-xs mt-2 opacity-80">Order: {orderId}</p>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-10">
              {[1, 2, 3, 4, 5, 6].map(s => (
                <div
                  key={s}
                  className={`w-2 h-2 rounded-full transition ${step >= s ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}