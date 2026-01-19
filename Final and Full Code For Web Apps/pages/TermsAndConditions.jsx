// src/pages/TermsAndConditions.jsx — FINAL CLEAN & PERFECT
import { useEffect } from "react";
import { Shield, FileText, Scale, Lock, CheckCircle2, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardContainer, CardBody, CardItem } from "../components/3d-card";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    icon: Shield,
    title: "Our Commitment",
    content: "We are committed to providing a safe, transparent, and exceptional shopping experience. All terms are designed to protect both you and us.",
  },
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: "By accessing or placing an order with D-74 Shop, you agree to be bound by these Terms and Conditions and our Privacy Policy.",
  },
  {
    icon: Scale,
    title: "Product Accuracy",
    content: "We make every effort to display accurate product images, descriptions, and pricing. Slight variations may occur due to lighting or screen settings.",
  },
  {
    icon: Lock,
    title: "Secure Transactions",
    content: "All payments are processed through encrypted SSL connections. We never store your card details. Your data is safe with us.",
  },
  {
    icon: CheckCircle2,
    title: "Order Confirmation",
    content: "You will receive an order confirmation via SMS and email. Orders are only final once payment is confirmed.",
  },
];

export default function TermsAndConditions() {
  useEffect(() => {
    gsap.fromTo(".hero-title",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.8, ease: "power4.out" }
    );

    gsap.utils.toArray(".term-card").forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 100, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.4,
          delay: i * 0.2,
          ease: "power4.out",
          scrollTrigger: { trigger: card, start: "top 80%" }
        }
      );
    });
  }, []);

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-black to-cyan-900/20" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
      </div>

      <div className="relative min-h-screen py-24 px-6">
        {/* Hero */}
        <section className="text-center max-w-6xl mx-auto mb-24">
          <div className="hero-title">
            <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl mb-8">
              <FileText className="w-14 h-14 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 animate-gradient">
                Terms &
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 animate-gradient">
                Conditions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mt-8 font-light max-w-3xl mx-auto">
              Transparent. Fair. Built on Trust.
            </p>
          </div>
        </section>

        {/* Main Terms Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sections.map((section, i) => (
              <div key={i} className="term-card group">
                <CardContainer>
                  <CardBody className="relative h-full bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 p-8 overflow-hidden transition-all duration-500 hover:border-purple-400/50 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition duration-700" />

                    <CardItem translateZ={80}>
                      <div className="relative z-10">
                        <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${
                          i % 2 === 0 ? "from-purple-500 to-pink-600" : "from-cyan-500 to-purple-600"
                        } shadow-2xl mb-6 group-hover:scale-110 transition`}>
                          <section.icon className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {section.title}
                        </h3>
                        <p className="text-base md:text-lg text-white/80 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>
        </section>

        {/* TWO 500×500 CARDS — PERFECT & CLEAN */}
        <section className="max-w-7xl mx-auto mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Full Terms of Service - 500×500 */}
            <div className="term-card">
              <CardContainer>
                <CardBody className="h-[650px] w-full bg-black/30 backdrop-blur-3xl rounded-3xl border border-white/10 p-10 flex flex-col">
                  <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                      Full Terms of Service
                    </span>
                  </h2>
                  <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 pr-4">
                    <div className="space-y-5 text-white/80 text-lg leading-relaxed">
                      <p>• All sales are final once delivered, except under our 7-day return policy.</p>
                      <p>• We reserve the right to cancel orders due to pricing errors or stock issues.</p>
                      <p>• Product colors may vary slightly due to lighting or screen settings.</p>
                      <p>• COD orders require verification call. Unverified orders may be cancelled.</p>
                      <p>• These terms may be updated. Continued use = acceptance of new terms.</p>
                      <p>• We use cookies to improve your experience.</p>
                      <p>• All content © 2025 D-74 Shop. All rights reserved.</p>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>

            {/* Trust Is Everything - 500×500 */}
            <div className="term-card">
              <CardContainer>
                <CardBody className="h-[500px] w-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-3xl rounded-3xl border border-white/20 flex flex-col items-center justify-center text-center p-12">
                  <Sparkles className="w-24 h-24 text-purple-400 mb-10 animate-pulse" />
                  <p className="text-5xl md:text-6xl font-black text-white leading-tight">
                    Trust Is
                  </p>
                  <p className="text-5xl md:text-6xl font-black text-white mt-2">
                    Everything
                  </p>
                  <p className="text-2xl md:text-3xl text-cyan-300 mt-10 font-medium">
                    — Built with Love by D-74 Batch
                  </p>
                </CardBody>
              </CardContainer>
            </div>
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