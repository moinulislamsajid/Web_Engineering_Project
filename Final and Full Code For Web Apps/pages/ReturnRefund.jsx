// src/pages/ReturnRefund.jsx
import { useEffect } from "react";
import {
  RefreshCw,
  Package,
  MessageSquare,
  ArrowRight,
  Sparkles,
  ShieldCheck,   
  Clock,        
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardContainer, CardBody, CardItem } from "../components/3d-card";

gsap.registerPlugin(ScrollTrigger);

export default function ReturnRefund() {
  useEffect(() => {
    gsap.fromTo(".hero-title", 
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" }
    );

    gsap.utils.toArray(".float-card").forEach((card, i) => {
      gsap.fromTo(card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          delay: i * 0.15,
          ease: "power4.out",
          scrollTrigger: { trigger: card, start: "top 82%" }
        }
      );
    });
    gsap.fromTo(
    ".trust-card",
    { 
      y: 100, 
      opacity: 0, 
      scale: 0.9 
    },
    { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      duration: 1.6,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".trust-card",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30" />
        <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(139,92,246,0.25),_transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_rgba(236,72,153,0.25),_transparent_60%)]" />
      </div>

      <div className="relative min-h-screen py-24 px-6">
        {/* Hero */}
        <section className="text-center max-w-5xl mx-auto mb-24">
          <div className="hero-title">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 animate-gradient">
                Return & Refund
              </span>
            </h1>
            <p className="text-2xl md:text-4xl font-light text-white/90 mt-6">
              Zero Risk. Full Confidence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
              <p className="text-xl md:text-2xl text-cyan-300 font-medium">7-Day Happiness Guarantee</p>
              <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
            </div>
          </div>
        </section>

      {/* 7 Days Return Window — MODERN MULTI-CARD DESIGN (2025 Edition) */}
        <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16 float-card">
            <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 shadow-2xl">
            <RefreshCw className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-8">
            7 Days Return Window
            </h2>
            <p className="text-2xl md:text-3xl text-cyan-300 font-semibold mt-4">
            100% Money Back • Zero Hassle
            </p>
        </div>

        {/* 4 Modern Floating Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
                icon: ShieldCheck,
                title: "Full Refund",
                desc: "100% money back to your original payment method",
                gradient: "from-emerald-500 to-teal-600",
                delay: 0,
            },
            {
                icon: Clock,
                title: "Fast Processing",
                desc: "Refund processed within 3–5 business days",
                gradient: "from-cyan-500 to-blue-600",
                delay: 0.1,
            },
            {
                icon: Package,
                title: "Free Return Pickup",
                desc: "Complimentary pickup inside Dhaka city",
                gradient: "from-purple-500 to-pink-600",
                delay: 0.2,
            },
            {
                icon: MessageSquare,
                title: "24/7 Dedicated Support",
                desc: "Instant help via WhatsApp, Call & Email",
                gradient: "from-pink-500 to-rose-600",
                delay: 0.3,
            },
            ].map((item, i) => (
            <div
                key={i}
                className={`float-card group relative ${
                i % 2 === 1 ? "lg:mt-12" : ""
                }`} // Staggered height for modern look
            >
                <CardContainer>
                <CardBody className="relative h-full bg-black/30 backdrop-blur-3xl rounded-3xl border border-white/10 p-8 overflow-hidden transition-all duration-500 group-hover:border-white/40 group-hover:bg-black/50">
                    {/* Dynamic Glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700`} />
                    
                    {/* Content */}
                    <CardItem translateZ={80} className="relative z-10">
                    <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-2xl mb-6`}>
                        <item.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/80 leading-relaxed">
                        {item.desc}
                    </p>
                    </CardItem>
                </CardBody>
                </CardContainer>
            </div>
            ))}
        </div>
        </section>

        {/* 3 Steps */}
        <section className="max-w-7xl mx-auto mb-32">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16 float-card">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400">
              Return in 3 Easy Steps
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: MessageSquare, title: "Tell Us", desc: "Message us on WhatsApp or email" },
              { icon: Package, title: "Pack It", desc: "Original condition with tags & invoice" },
              { icon: RefreshCw, title: "Get Refund", desc: "Money back in your account — fast!" },
            ].map((step, i) => (
              <div key={i} className="float-card group">
                <CardContainer>
                  <CardBody className="h-full bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-10 text-center hover:border-cyan-400/50 transition">
                    <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-600 mb-6 shadow-xl group-hover:scale-110 transition">
                      <step.icon className="w-14 h-14 text-white" />
                    </div>
                    <p className="text-5xl font-black text-white/10 mb-3">0{i + 1}</p>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-lg text-white/70">{step.desc}</p>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>
        </section>

        {/* Final Trust Message — WITH ANIMATION + BETTER TEXT COLORS */}
<section className="text-center py-24 md:py-32">
  <div 
    className="trust-card inline-block px-8 py-12 md:px-12 md:py-16 rounded-3xl shadow-2xl bg-gradient-to-r from-pink-600 to-purple-600"
    style={{ transform: "translateZ(0)" }} // Helps with animation smoothness
  >
    <p className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl">
      Your Satisfaction
    </p>
    <p className="text-4xl md:text-6xl font-black text-white mt-2 md:mt-4 leading-tight drop-shadow-2xl">
      Is Our Success
    </p>
    <p className="text-lg md:text-2xl text-cyan-200 mt-8 md:mt-12 font-medium tracking-wider opacity-90">
      — Built with Love by D-74 Batch
    </p>
  </div>
</section>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 10s ease infinite;
        }
      `}</style>
    </>
  );
}