// src/pages/TrackOrder.jsx
import { useState, useEffect } from "react";
import { Package, Truck, CheckCircle, Clock, Home, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ———— ALL ORDERS DATA ————
const allOrders = [
  {
    orderId: "ORD20251120B2",
    total: "$2,890.00",
    estimatedDelivery: "2025-11-29T14:00:00",
    currentStatus: "Processing",
    steps: [
      { id: 1, status: "Order Placed", date: "Nov 20, 2025", time: "02:15 PM", icon: Package, completed: true },
      { id: 2, status: "Processing", date: "Nov 20, 2025", time: "03:00 PM", icon: Clock, completed: true, active: true },
      { id: 3, status: "Shipped", date: "Expected Nov 28", time: "", icon: Truck, completed: false },
      { id: 4, status: "Out for Delivery", date: "Expected Nov 29", time: "", icon: Home, completed: false },
      { id: 5, status: "Delivered", date: "Expected Nov 29", time: "", icon: CheckCircle, completed: false },
    ],
    items: [
      { name: "Artwork Shirt Black", qty: 2, price: "$2,500.00" },
      { name: "Artwork Cap", qty: 1, price: "$390.00" },
    ],
    shippingAddress: "456 Gulshan Avenue, Dhaka",
    paymentMethod: "Nagad",
  },
//   {
//     orderId: "ORD20251115C3",
//     total: "$1,350.00",
//     estimatedDelivery: "2025-11-18T16:30:00",
//     currentStatus: "Delivered",
//     deliveredAt: "2025-11-18T16:25:00",
//     steps: [
//       { id: 1, status: "Order Placed", date: "Nov 15, 2025", time: "09:45 AM", icon: Package, completed: true },
//       { id: 2, status: "Processing", date: "Nov 15, 2025", time: "10:30 AM", icon: Clock, completed: true },
//       { id: 3, status: "Shipped", date: "Nov 16, 2025", time: "11:00 AM", icon: Truck, completed: true },
//       { id: 4, status: "Out for Delivery", date: "Nov 18, 2025", time: "10:00 AM", icon: Home, completed: true },
//       { id: 5, status: "Delivered", date: "Nov 18, 2025", time: "04:25 PM", icon: CheckCircle, completed: true, active: true },
//     ],
//     items: [{ name: "Camille Henrot Artwork Trousers", qty: 1, price: "$1,350.00" }],
//     shippingAddress: "789 Banani Road, Dhaka",
//     paymentMethod: "bKash",
//   },
];

const filterTabs = [
  { id: "all", label: "All Orders", icon: Package },
  { id: "processing", label: "Processing", icon: Clock },
  { id: "shipped", label: "Shipped", icon: Truck },
  { id: "delivered", label: "Delivered", icon: CheckCircle },
];

export default function TrackOrder() {
  const [searchId, setSearchId] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [countdown, setCountdown] = useState({});

  // Live Countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const updated = {};

      allOrders.forEach((order) => {
        if (order.currentStatus === "Delivered") {
          updated[order.orderId] = "Delivered Successfully";
        } else {
          const diff = new Date(order.estimatedDelivery).getTime() - now;
          if (diff <= 0) updated[order.orderId] = "Arriving Today";
          else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            updated[order.orderId] = days > 0 ? `${days}d ${hours}h left` : `${hours}h ${minutes}m left`;
          }
        }
      });
      setCountdown(updated);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Filter Logic
  const filteredOrders = allOrders
    .filter((o) => o.orderId.toLowerCase().includes(searchId.toLowerCase()))
    .filter((o) => activeTab === "all" || o.currentStatus.toLowerCase().includes(activeTab));

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-96 h-96 rounded-full opacity-10 animate-pulse"
              style={{
                background: i % 2 === 0 ? "#e2136e" : "#ee4b2b",
                filter: "blur(100px)",
                top: `${10 + i * 15}%`,
                left: i % 2 === 0 ? "-20%" : "80%",
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
          >
            Track Your Orders
          </motion.h1>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
              <input
                type="text"
                placeholder="Search Order ID..."
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl text-lg focus:border-white/70 transition"
              />
            </div>
          </div>

          {/* FILTER TABS */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 shadow-2xl shadow-pink-500/50"
                      : "bg-white/10 border border-white/20 hover:bg-white/20"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          {/* Orders List */}
          <div className="space-y-20">
            {filteredOrders.length === 0 ? (
              <div className="text-center py-20 text-2xl opacity-60">No orders found</div>
            ) : (
              filteredOrders.map((order) => (
                <div key={order.orderId} className="relative">
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <h2 className="text-3xl font-bold">{order.orderId}</h2>
                    <p className="text-xl mt-2 opacity-90">
                      {order.currentStatus === "Delivered" ? "Delivered" : countdown[order.orderId] || "Calculating..."}
                    </p>
                    <p className="text-lg opacity-70">Total: {order.total}</p>
                  </motion.div>

                  {/* SAME ZIGZAG TIMELINE (unchanged) */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-20 bottom-20 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-transparent opacity-30 hidden lg:block" />

                    {order.steps.map((step, index) => {
                      const Icon = step.icon;
                      const isLeft = index % 2 === 0;

                      return (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className={`relative flex items-center justify-center mb-32 lg:mb-0 ${isLeft ? "lg:justify-end" : "lg:justify-start"}`}
                        >
                          <div className={`w-full lg:w-1/2 ${isLeft ? "lg:pr-20" : "lg:pl-20"}`}>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setSelectedOrder({ ...order, selectedStep: step })}
                              className={`relative p-8 rounded-3xl backdrop-blur-xl border cursor-pointer transition-all duration-500 ${
                                step.completed
                                  ? "bg-white/20 border-white/40 shadow-2xl shadow-purple-500/50"
                                  : step.active
                                  ? "bg-gradient-to-br from-pink-500/30 to-purple-600/30 border-pink-500 shadow-2xl shadow-pink-500/80"
                                  : "bg-white/5 border-white/10"
                              }`}
                            >
                              {step.active && (
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-50 blur-xl animate-pulse" />
                              )}

                              <div className="relative z-10 flex items-center gap-6">
                                <div className={`p-5 rounded-full ${step.completed ? "bg-green-500" : step.active ? "bg-gradient-to-br from-pink-500 to-purple-600" : "bg-gray-600"} shadow-xl`}>
                                  <Icon className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-2xl font-bold">{step.status}</h3>
                                  <p className="text-lg opacity-80">{step.date}</p>
                                  {step.time && <p className="text-sm opacity-60">{step.time}</p>}
                                </div>
                              </div>
                            </motion.div>
                          </div>

                          {/* Mobile */}
                          <div className="lg:hidden w-full text-center mt-8">
                            <motion.div
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setSelectedOrder({ ...order, selectedStep: step })}
                              className="inline-flex flex-col items-center gap-4 cursor-pointer"
                            >
                              <div className={`p-6 rounded-full ${step.active ? "bg-gradient-to-br from-pink-500 to-purple-600 shadow-2xl shadow-pink-500/80" : "bg-white/20"}`}>
                                <Icon className="w-12 h-12" />
                              </div>
                              <div>
                                <p className="text-xl font-bold">{step.status}</p>
                                <p className="text-sm opacity-70">{step.date} • {step.time}</p>
                              </div>
                            </motion.div>
                          </div>

                          {/* Dot */}
                          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                            <motion.div
                              animate={step.active ? { scale: [1, 1.5, 1] } : {}}
                              transition={{ repeat: Infinity, duration: 2 }}
                              className={`w-16 h-16 rounded-full border-4 border-white flex items-center justify-center shadow-2xl ${
                                step.completed ? "bg-green-500" : step.active ? "bg-gradient-to-br from-pink-500 to-purple-600" : "bg-gray-700"
                              }`}
                            >
                              {step.completed && <CheckCircle className="w-8 h-8 text-white" />}
                            </motion.div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Status Banner */}
                  <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="mt-20 text-center">
                    <div className="inline-block px-12 py-8 rounded-3xl bg-gradient-to-r from-pink-600 to-purple-700 shadow-2xl">
                      <p className="text-3xl font-bold">{order.currentStatus}</p>
                      <p className="text-xl mt-2 opacity-90">
                        {order.currentStatus === "Delivered" ? "Thank you for shopping!" : countdown[order.orderId] || "Calculating..."}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))
            )}
          </div>

          {/* Same Modal */}
          <AnimatePresence>
            {selectedOrder && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                onClick={() => setSelectedOrder(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl max-w-2xl w-full overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-pink-600 to-purple-700 p-6 text-center">
                    <h2 className="text-3xl font-bold">Order {selectedOrder.orderId}</h2>
                    <p className="text-xl mt-2">{selectedOrder.selectedStep.status}</p>
                  </div>

                  <div className="p-8 text-white">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Order Items</h3>
                        {selectedOrder.items.map((item, i) => (
                          <div key={i} className="flex justify-between py-2 border-b border-white/10">
                            <span>{item.name} × {item.qty}</span>
                            <span className="font-medium">{item.price}</span>
                          </div>
                        ))}
                        <div className="flex justify-between mt-4 text-xl font-bold">
                          <span>Total</span>
                          <span className="text-green-400">{selectedOrder.total}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4">Delivery Details</h3>
                        <div className="space-y-3 text-lg">
                          <p><strong>Address:</strong> {selectedOrder.shippingAddress}</p>
                          <p><strong>Method:</strong> {selectedOrder.paymentMethod}</p>
                          <p><strong>Est. Delivery:</strong> {new Date(selectedOrder.estimatedDelivery).toLocaleDateString()}</p>
                          <p><strong>Status:</strong> <span className="text-pink-400">{selectedOrder.currentStatus}</span></p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedOrder(null)}
                      className="mt-8 w-full py-4 bg-white/20 hover:bg-white/30 rounded-2xl font-bold text-xl transition"
                    >
                      Close
                    </button>
                  </div>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/40 transition"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}