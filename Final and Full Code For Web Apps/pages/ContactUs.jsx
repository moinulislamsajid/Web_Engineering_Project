// src/pages/ContactUs.jsx
import { useEffect } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardContainer, CardBody, CardItem } from "../components/3d-card";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          ease: "power4.out",
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Background - Same as AboutUs & Blogs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900 via-purple-900 to-black opacity-60 animate-pulse" />
      </div>

      <div className="relative min-h-screen py-20 px-6">
        {/* Hero */}
        <section className="text-center py-24 reveal">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">
              Get In Touch
            </span>
          </h1>
          <p className="text-2xl md:text-4xl text-white/90 font-light max-w-4xl mx-auto">
            Have a project? Question? Collaboration idea?
          </p>
          <p className="text-xl text-cyan-400 mt-6">
            D-74 Batch is always ready to build the future together
          </p>
        </section>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
          {/* Contact Form Card */}
          <div className="reveal">
            <CardContainer>
              <CardBody className="group relative bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/20 p-10 h-[750px]">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 h-[750px]" />

                <CardItem translateZ={60}>
                  <h2 className="text-4xl font-bold text-white mb-8 text-center">
                    Send Us a Message
                  </h2>

                  <form className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={6}
                        placeholder="Your Message..."
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xl rounded-2xl hover:scale-105 transition duration-500 shadow-2xl flex items-center justify-center gap-3"
                    >
                      Send Message
                      <Send className="w-6 h-6" />
                    </button>
                  </form>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-10 reveal">
            {/* Info Cards */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email Us</p>
                  <p className="text-xl text-white font-semibold">d74batch@diu.edu.bd</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Call Us</p>
                  <p className="text-xl text-white font-semibold">+880 1700-000074</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="p-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Location</p>
                  <p className="text-xl text-white font-semibold">
                    Dhaka International University, Badda, Dhaka
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-10">
              <h3 className="text-3xl font-bold text-white mb-8">Connect With Us</h3>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="p-5 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/30 hover:scale-110 hover:bg-white/20 transition duration-500"
                >
                  <Github className="w-8 h-8 text-white" />
                </a>
                <a
                  href="#"
                  className="p-5 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/30 hover:scale-110 hover:bg-white/20 transition duration-500"
                >
                  <Linkedin className="w-8 h-8 text-white" />
                </a>
                <a
                  href="#"
                  className="p-5 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/30 hover:scale-110 hover:bg-white/20 transition duration-500"
                >
                  <Twitter className="w-8 h-8 text-white" />
                </a>
              </div>
            </div>

            {/* Final Quote */}
            <div className="mt-16 p-10 bg-black/30 backdrop-blur-2xl rounded-3xl border border-white/20 text-center">
                <div className="flex flex-col justify-center min-h-[250px]">
                    <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 leading-tight md:leading-tight">
                    "Let’s Build Something<br className="hidden md:block" /> Legendary Together"
                    </p>
                    <p className="text-xl text-cyan-400 mt-10">— D-74 Batch</p>
                </div>
            </div>
          </div>
        </div>
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