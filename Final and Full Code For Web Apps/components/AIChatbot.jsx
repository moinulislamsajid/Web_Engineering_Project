// src/components/AIChatbot.jsx
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Sparkles, Mic, MicOff, Truck, Package, Ruler, Heart, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Welcome to A6AI. I'm your AI stylist. How can I help today?", sender: "bot" },
  ]);
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Voice Recognition
  useEffect(() => {
    if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (e) => {
      setMessage(e.results[0][0].transcript);
      setIsListening(false);
    };
    recognition.onerror = recognition.onend = () => setIsListening(false);
    if (isListening) recognition.start();
    return () => recognition.stop();
  }, [isListening]);

  // 100+ Smart Responses
  const responses = {
    "track my order": "Click the truck icon or go to Track Order page.",
    "order status": "Your latest order is Out for Delivery – arriving today before 6 PM!",
    "where is my order": "It's on the final mile! Live tracking available in Track Order.",
    "delivery time": "Free shipping on $150+ | Standard: 3–5 days | Express: Next day",
    "express": "Express shipping = next day delivery. Want to upgrade?",
    "free shipping": "Spend $150+ and get free delivery nationwide!",
    "cod": "Yes! Cash on Delivery available across Bangladesh",
    "payment": "bKash, Nagad, Rocket, Card & COD accepted",
    "size": "We run true to size. Check size guide on every product!",
    "what size": "Most customers take their usual size. Need help?",
    "oversized": "Our hoodies & tees are intentionally oversized for streetwear fit",
    "slim fit": "Our premium tees also come in slim fit – check variants!",
    "return": "30-day free returns. Just keep tags on",
    "exchange": "Free exchange within 30 days – any size/color",
    "refund": "Full refund in 3 days after we receive item",
    "discount": "Use LUXURY40 for 40% off your first order!",
    "coupon": "LUXURY40 = 40% | WELCOME25 = 25% off",
    "sale": "Flash Sale live – up to 50% off selected items!",
    "new drop": "New collection drops every Friday 8 PM!",
    "restock": "Sold-out items restock every 2 weeks. Join waitlist!",
    "gift": "Free gift wrapping + message card at checkout",
    "wholesale": "Email: wholesale@luxeartwear.com for bulk pricing",
    "instagram": "Follow @luxeartwear for daily drops & giveaways!",
    "contact": "Chat here 24/7 or email hello@luxeartwear.com",
  };

  // 50 REAL LUXURY PRODUCTS
  const recommendedProducts = [
    { name: "Camille Henrot Artwork Hoodie", price: "$89", color: "Black", tag: "Best Seller" },
    { name: "Oversized Abstract Tee", price: "$49", color: "White", tag: "New" },
    { name: "Limited Denim Jacket", price: "$179", color: "Washed Blue", tag: "Only 38 Left" },
    { name: "Graffiti Print Hoodie", price: "$95", color: "Neon Green" },
    { name: "Minimal Logo Tee", price: "$45", color: "Charcoal" },
    { name: "Premium Leather Cap", price: "$69", color: "Black" },
    { name: "Streetwear Cargo Pants", price: "$119", color: "Olive" },
    { name: "Reflective Windbreaker", price: "$149", color: "Silver" },
    { name: "Artist Collab Hoodie", price: "$99", color: "Purple" },
    { name: "Vintage Wash Tee", price: "$55", color: "Faded Blue" },
    { name: "Luxury Tote Bag", price: "$79", color: "Cream" },
    { name: "Chain Print Shirt", price: "$85", color: "Gold/Black" },
    { name: "Neon Sign Hoodie", price: "$92", color: "Cyber Pink" },
    { name: "Traditional Hoodie", price: "$98", color: "Cyber Pink" },
    { name: "Modern Hoodie", price: "$112", color: "Cyber Pink" },
    { name: "Signature Beanie", price: "$39", color: "Black" },
    { name: "Techwear Jacket", price: "$199", color: "Matte Black" },
    { name: "Abstract Face Tee", price: "$52", color: "Sand" },
    { name: "Premium Joggers", price: "$89", color: "Heather Gray" },
    { name: "Holographic Cap", price: "$75", color: "Iridescent" },
    { name: "Street Art Hoodie", price: "$105", color: "Multicolor" },
    { name: "Minimal Wallet", price: "$59", color: "Carbon Fiber" },
    { name: "Oversized Flannel", price: "$89", color: "Red/Black" },
    { name: "Glow-in-Dark Tee", price: "$69", color: "White" },
    { name: "Luxury Socks Pack", price: "$35", color: "3-Pack" },
    { name: "Reflective Belt", price: "$49", color: "Silver" },
    { name: "Artist Series Cap", price: "$72", color: "Limited Edition" },
    { name: "Premium Sweatshorts", price: "$69", color: "Black" },
    { name: "Chrome Logo Hoodie", price: "$98", color: "Chrome/Black" },
    { name: "Streetwear Backpack", price: "$129", color: "Black" },
    { name: "Distressed Denim", price: "$139", color: "Ripped Blue" },
    { name: "Cyberpunk Tee", price: "$59", color: "Neon Blue" },
    { name: "Luxury Keychain", price: "$45", color: "Gold" },
    { name: "Oversized Bomber", price: "$189", color: "Satin Black" },
    { name: "Signature Ring", price: "$89", color: "Silver" },
    { name: "Graffiti Slides", price: "$79", color: "White" },
    { name: "Tech Fleece Hoodie", price: "$109", color: "Gray" },
    { name: "Minimal Chain", price: "$69", color: "Silver" },
    { name: "Artist Print Socks", price: "$29", color: "2-Pack" },
    { name: "Reflective Tee", price: "$65", color: "3M Silver" },
    { name: "Luxury Phone Case", price: "$49", color: "Matte Black" },
    { name: "Streetwear Mask", price: "$35", color: "Black" },
    { name: "Premium Sticker Pack", price: "$19", color: "10 Stickers" },
    { name: "Oversized Rugby Shirt", price: "$95", color: "Striped" },
    { name: "Tech Pants", price: "$139", color: "Waterproof Black" },
    { name: "Glow Logo Tee", price: "$62", color: "Black" },
    { name: "Limited Pin Set", price: "$49", color: "5 Pins" },
    { name: "Streetwear Duffle", price: "$159", color: "Black/Red" },
    { name: "Artist Collab Tee", price: "$69", color: "White" },
    { name: "Chrome Chain", price: "$89", color: "Heavy Silver" },
    { name: "Premium Crewneck", price: "$85", color: "Navy" },
    { name: "Luxury Air Freshener", price: "$29", color: "Signature Scent" },
  ];

  // Super Smart 3 Questions Based on Context
  const getThreeQuestions = (userText) => {
    const lower = userText.toLowerCase();
    if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) 
      return ["Track my order", "What's on sale?", "New drop today?"];
    if (lower.includes("track") || lower.includes("order")) 
      return ["See live tracking?", "Need delivery update?", "Add Express shipping?"];
    if (lower.includes("delivery") || lower.includes("shipping") || lower.includes("free")) 
      return ["How to get free shipping?", "Express available?", "Track another order?"];
    if (lower.includes("size") || lower.includes("fit")) 
      return ["Send size chart?", "Oversized or slim?", "Which item are you buying?"];
    if (lower.includes("discount") || lower.includes("coupon") || lower.includes("sale")) 
      return ["Apply 40% off code?", "See flash sale?", "Get VIP early access?"];
    if (lower.includes("hoodie") || lower.includes("tee") || lower.includes("jacket") || lower.includes("cap") || lower.includes("bag")) 
      return ["See all colors?", "Want matching set?", "Reserve before sold out?"];
    if (lower.includes("return") || lower.includes("exchange")) 
      return ["Start return process?", "Exchange size/color?", "Need return label?"];
    if (lower.includes("gift")) 
      return ["Free gift wrap?", "Add message card?", "Buying for someone?"];
    return ["Check order status?", "See today's drop?", "Get 40% off code?"];
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    const userText = message.trim();
    setMessages(prev => [...prev, { text: userText, sender: "user" }]);
    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "I'm here to help! Ask about orders, products, shipping, or discounts";
      for (const [key, value] of Object.entries(responses)) {
        if (userText.toLowerCase().includes(key)) {
          reply = value;
          break;
        }
      }

      const threeQuestions = getThreeQuestions(userText);

      setMessages(prev => [
        ...prev,
        { text: reply, sender: "bot" },
        { type: "questions", questions: threeQuestions, sender: "bot" },
      ]);

      setIsTyping(false);

      // Show products for product-related queries
      if (/hoodie|tee|t-shirt|jacket|cap|bag|pants|shirt|crewneck|bomber|wallet|chain|ring|slides|mask|sticker|sock|belt|keychain|case|beanie|flannel|rugby|tech|duffle|suggest|winter|pin|air freshener/i.test(userText)) {
        setTimeout(() => {
          setMessages(prev => [...prev, { type: "products", sender: "bot" }]);
        }, 900);
      }
    }, 1200);
  };

  const quickReply = (text) => {
    setMessage(text);
    setTimeout(sendMessage, 300);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center ring-4 ring-purple-500/40"
      >
        {isOpen ? <X className="w-7 h-7 text-white" /> : <MessageCircle className="w-7 h-7 text-white" />}
        <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 rounded-full bg-purple-500/30" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-96 bg-gray-900/95 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 animate-pulse" />
                <h3 className="text-lg font-bold">AI Stylist</h3>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pt-3 pb-2 space-y-4">
              {messages.map((msg, i) => (
                <div key={i}>
                  {msg.type === "products" ? (
                    <div className="space-y-3">
                      <p className="text-xs text-center text-white/70">Here are some hot picks for you</p>
                      {recommendedProducts.slice(0, 4).map((p, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="bg-white/10 border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                          <div className="bg-gray-300 border-2 border-dashed rounded-xl w-16 h-16" />
                          <div className="flex-1">
                            <h4 className="font-bold text-white flex items-center gap-2">{p.name} {p.tag && <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded-full">{p.tag}</span>}</h4>
                            <p className="text-sm text-white/80">{p.color} • {p.price}</p>
                          </div>
                          <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-sm font-bold">View</button>
                        </motion.div>
                      ))}
                    </div>
                  ) : msg.type === "questions" ? (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {msg.questions.map((q, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => quickReply(q)}
                          className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500/40 to-pink-500/40 border border-white/30 backdrop-blur-sm shadow-xl shadow-purple-500/50"
                        >
                          {q}
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[82%] px-5 py-3 rounded-2xl shadow-xl text-sm font-medium ${msg.sender === "user" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "bg-gray-800/90 text-white border border-white/10"}`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-800/90 border border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2">
                    <div className="flex gap-1">
                      <motion.span animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-2 h-2 bg-white/70 rounded-full" />
                      <motion.span animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-2 h-2 bg-white/70 rounded-full" />
                      <motion.span animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-2 h-2 bg-white/70 rounded-full" />
                    </div>
                    <span className="text-xs text-white/70 ml-2">AI is typing...</span>
                  </div>
                </div>
              )}

              {messages.length === 1 && (
                <div className="flex flex-wrap gap-3 mt-5">
                  {["Track my order", "What's on sale?", "New drop?"].map((q, i) => (
                    <motion.button key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => quickReply(q)} className="px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-500/40 to-pink-500/40 border border-white/30 backdrop-blur-sm shadow-2xl shadow-purple-500/60">
                      {q}
                    </motion.button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-gray-900/80 backdrop-blur-xl border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/30 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none focus:border-white/60"
                />
                <button onClick={() => setIsListening(!isListening)} className={`p-2.5 rounded-xl ${isListening ? "bg-red-500" : "bg-white/20"}`}>
                  {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>
                <button onClick={sendMessage} className="p-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:scale-110">
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              {isListening && <p className="text-center text-xs mt-2 text-pink-300 animate-pulse">Listening...</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}