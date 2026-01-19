// src/pages/Blogs.jsx
import { useEffect } from "react";
import { MessageSquare, Calendar, User, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardContainer, CardBody, CardItem } from "../components/3d-card";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    id: 1,
    title: "AI in Ecommerce: The Complete Revolution",
    excerpt: "How artificial intelligence is reshaping online shopping from search to checkout and beyond.",
    author: "Moinul Islam Sajid",
    date: "November 28, 2025",
    readTime: "12 min read",
    category: "AI Revolution",
    image: "/images/blogs/ai-ecommerce.jpg",
  },
  {
    id: 2,
    title: "AI Agents in Ecommerce: Your 24/7 Digital Sales Team",
    excerpt: "From chatbots to autonomous shopping assistants — the rise of intelligent agents that never sleep.",
    author: "Md Mahamudul Hasan",
    date: "November 26, 2025",
    readTime: "10 min read",
    category: "AI Agents",
    image: "/images/blogs/ai-agents.png",
  },
  {
    id: 3,
    title: "7 Game-Changing Benefits of AI in Ecommerce (2025 Edition)",
    excerpt: "Personalization, automation, fraud detection, and more — why AI is no longer optional.",
    author: "Md Shakib Hossain",
    date: "November 24, 2025",
    readTime: "9 min read",
    category: "Business Impact",
    image: "/images/blogs/ai-benefits.png",
  },
  {
    id: 4,
    title: "Generative AI in Ecommerce: Creating Products That Don’t Exist Yet",
    excerpt: "Using Stable Diffusion and custom models to generate product images, designs, and variations instantly.",
    author: "Abdullah Al Noman",
    date: "November 22, 2025",
    readTime: "11 min read",
    category: "Generative AI",
    image: "/images/blogs/generative-ai-ecom.png",
  },
  {
    id: 5,
    title: "Traditional Ecommerce vs AI-Powered Ecommerce: The Real Difference",
    excerpt: "Side-by-side comparison: Why old-school stores are losing to intelligent platforms in 2025.",
    author: "Md Ahsan & Md Riaz",
    date: "November 20, 2025",
    readTime: "8 min read",
    category: "Comparison",
    image: "/images/blogs/traditional-vs-ai.jpg",
  },
  {
    id: 6,
    title: "Top 10 AI Ecommerce Trends That Will Dominate 2025",
    excerpt: "Voice commerce, predictive inventory, hyper-personalization, and the future of online retail.",
    author: "D-74 Batch Team",
    date: "November 18, 2025",
    readTime: "15 min read",
    category: "Future Trends",
    image: "/images/blogs/ai-trends-2025.avif",
  },
];

export default function Blogs() {
  useEffect(() => {
    gsap.utils.toArray(".blog-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "power4.out",
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Background - Same as AboutUs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900 via-purple-900 to-black opacity-60 animate-pulse" />
      </div>

      <div className="relative min-h-screen py-20 px-6">
        {/* Hero Section */}
        <section className="text-center py-24">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">
              D-74 Blogs
            </span>
          </h1>
          <p className="text-2xl md:text-4xl text-white/90 font-light max-w-4xl mx-auto">
            Insights, Tutorials & Behind-the-Scenes from the Future Builders
          </p>
          <p className="text-xl text-cyan-400 mt-6">Powered by Passion • Built by D-74 Batch</p>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogs.map((blog, index) => (
              <div key={blog.id} className="blog-card">
                <CardContainer>
                  <CardBody className="group relative w-full h-full bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/20 overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />

                    <CardItem translateZ={60}>
                      <div className="relative">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-64 object-cover rounded-t-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/30 text-sm font-bold text-cyan-300">
                          {blog.category}
                        </div>
                      </div>

                      <div className="p-8 space-y-4">
                        <h3 className="text-3xl font-bold text-white line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-lg text-white/70 line-clamp-3">
                          {blog.excerpt}
                        </p>

                        {/* Author & Meta */}
                        <div className="flex items-center justify-between text-sm text-white/60">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{blog.date}</span>
                            </div>
                          </div>
                          <span className="text-cyan-400">{blog.readTime}</span>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <a
                            href={`/blog/${blog.id}`}
                            className="inline-flex items-center gap-3 text-cyan-400 font-bold hover:gap-5 transition-all duration-300"
                          >
                            Read More
                            <ArrowRight className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <section className="text-center py-24 mt-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Want to Write for Us?
            </span>
          </h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            Share your knowledge with the D-74 community. We're always looking for passionate writers.
          </p>
          <button className="mt-10 px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xl rounded-full hover:scale-110 transition duration-500 shadow-2xl">
            Submit a Post
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
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </>
  );
}