// src/pages/ShoppingInfo.jsx
import { useEffect } from "react";
import {
  Truck,
  Shield,
  CreditCard,
  Package,
  RefreshCw,
  HeadphonesIcon,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardContainer, CardBody, CardItem } from "../components/3d-card";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function ShoppingInfo() {
    const navigate = useNavigate();
  useEffect(() => {
    gsap.utils.toArray(".info-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "power4.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const features = [
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Free Shipping Nationwide",
      desc: "Enjoy free delivery on all orders above ৳2000 across Bangladesh",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "100% Secure Payment",
      desc: "SSL encrypted checkout with bKash, Nagad, Rocket, Card & COD",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: "7 Days Easy Return",
      desc: "Hassle-free returns within 7 days if you're not satisfied",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Cash On Delivery Available",
      desc: "Pay when you receive your product — trusted & safe",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Express Delivery",
      desc: "Dhaka: 24-48 hrs | Outside Dhaka: 2-4 days",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10" />,
      title: "24/7 Customer Support",
      desc: "Live chat, WhatsApp & call — we're always here for you",
      gradient: "from-pink-500 to-rose-600",
    },
  ];
    const handleshopping = () => {
    navigate("/products", {
    });
  };

  return (
    <>
      {/* Background - Same as rest of site */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900 via-purple-900 to-black opacity-60 animate-pulse" />
      </div>

      <div className="relative min-h-screen py-20 px-6">
        {/* Hero */}
        <section className="text-center py-24">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">
              Shopping Information
            </span>
          </h1>
          <p className="text-2xl md:text-4xl text-white/90 font-light max-w-5xl mx-auto">
            Everything you need to know before, during, and after your purchase
          </p>
          <p className="text-xl text-cyan-400 mt-6">
            Shop with Confidence • Powered by D-74 Batch AI Engine
          </p>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="info-card">
                <CardContainer>
                  <CardBody className="group relative h-full bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 hover:border-white/40 transition">
                    {/* Glow */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000`} />

                    <CardItem translateZ={70} className="relative z-10">
                      <div className={`p-5 w-fit rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-white/70 leading-relaxed">
                        {feature.desc}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-cyan-400">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="text-sm font-medium">Guaranteed</span>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info Sections */}
        <section className="max-w-5xl mx-auto mt-32 space-y-20">
          {/* Payment Methods */}
          <div className="reveal text-center">
            <h2 className="text-5xl font-black text-white mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Payment Methods
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["bKash", "Nagad", "Rocket", "Visa/MasterCard", "Amex", "DBBL Nexus", "Upay", "Cash on Delivery"].map((method) => (
                <div
                  key={method}
                  className="py-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:scale-110 hover:bg-white/20 transition duration-500"
                >
                  <p className="text-xl font-bold text-white">{method}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Partners */}
          <div className="reveal text-center">
            <h2 className="text-5xl font-black text-white mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
                Trusted Delivery Partners
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["Pathao", "RedX", "Sundarban", "SA Paribahan", "Janani", "E-Courier", "Paperfly", "Steadfast"].map((partner) => (
                <div
                  key={partner}
                  className="py-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400 hover:bg-white/10 transition duration-500"
                >
                  <p className="text-xl font-semibold text-white/90">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-32">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Ready to Shop?
            </span>
          </h2>
          <p className="text-2xl text-white/80 mb-12">
            Experience the future of ecommerce — built by D-74 Batch
          </p>
          <button onClick={handleshopping} className="px-16 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-2xl font-bold rounded-full hover:scale-110 transition duration-500 shadow-2xl">
            Start Shopping Now
          </button>
        </section>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 12s ease infinite;
        }
      `}</style>
    </>
  );
}