// src/pages/FAQ.jsx — 2025 ULTRA MODERN EDITION
import { useEffect, useState } from "react";
import { Plus, Minus, Sparkles, HelpCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardContainer, CardBody, CardItem } from "../components/3d-card";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What is your return policy?",
    a: "We offer a hassle-free 7-day return window. Items must be unused, in original packaging with tags attached. Full refund guaranteed.",
  },
  {
    q: "How long does delivery take?",
    a: "Inside Dhaka: 24–48 hours | Outside Dhaka: 2–4 business days. Express delivery available on selected items.",
  },
  {
    q: "Do you offer Cash on Delivery (COD)?",
    a: "Yes! COD is available nationwide with trusted partners. Pay only when you receive your product.",
  },
  {
    q: "Are the products original?",
    a: "100% authentic & sourced directly. Every product comes with original packaging and warranty where applicable.",
  },
  {
    q: "How can I track my order?",
    a: "You’ll receive a tracking link via SMS & email as soon as your order is shipped. Real-time updates guaranteed.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Yes, if the order hasn’t been processed yet. Contact support within 30 minutes of placing the order.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    gsap.utils.toArray(".faq-card").forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay: i * 0.15,
          ease: "power4.out",
          scrollTrigger: { trigger: card, start: "top 85%" }
        }
      );
    });
  }, []);

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="relative min-h-screen py-24 px-6">
        {/* Hero */}
        <section className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex p-5 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-8 animate-pulse">
            <HelpCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 animate-gradient">
              Frequently Asked
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 animate-gradient">
              Questions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light">
            Everything you need to know — answered by D-74 Batch
          </p>
        </section>

        {/* FAQ Cards */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-card group"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <CardContainer>
                <CardBody className="relative bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-cyan-400/50">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition duration-700" />
                  
                  <CardItem translateZ={60}>
                    <div className="p-6 md:p-8 cursor-pointer">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white flex-1 pr-4">
                          {faq.q}
                        </h3>
                        <div className={`p-3 rounded-full transition-all duration-500 ${
                          openIndex === i 
                            ? "bg-gradient-to-br from-pink-500 to-purple-600 rotate-90" 
                            : "bg-white/10"
                        }`}>
                          {openIndex === i ? (
                            <Minus className="w-6 h-6 text-white" />
                          ) : (
                            <Plus className="w-6 h-6 text-cyan-300" />
                          )}
                        </div>
                      </div>

                      {/* Answer — Animated Expand */}
                      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                        openIndex === i ? "max-h-96 mt-6" : "max-h-0"
                      }`}>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed pl-1">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </section>

        {/* Final CTA */}
        <section className="text-center mt-32">
          <div className="inline-block p-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-3xl rounded-3xl border border-white/20">
            <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6 animate-pulse" />
            <p className="text-3xl md:text-5xl font-black text-white mb-4">
              Still have questions?
            </p>
            <p className="text-xl md:text-2xl text-cyan-300">
              Our support team is here 24/7
            </p>
            <Link
            to="/contact-us"
            className="mt-8 px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xl font-bold rounded-full hover:scale-110 transition shadow-2xl inline-block"
            >
            Contact Us Now
            </Link>
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
          animation: gradient 12s ease infinite;
        }
      `}</style>
    </>
  );
}