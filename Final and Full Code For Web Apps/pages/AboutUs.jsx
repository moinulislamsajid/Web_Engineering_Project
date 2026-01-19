// src/pages/AboutUs.jsx
import { useEffect } from "react";
import {
  GraduationCap,
  Brain,
  Code2,
  Bot,
  Sparkles,
  Cpu,
  Zap,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardContainer, CardBody, CardItem } from "../components/3d-card";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Md Nahid Hasan",
    title: "Honorable Teacher & Mentor",
    role: "Lecturer, Dept. of CSE",
    uni: "Dhaka International University",
    former: "Ex-Lecturer, Daffodil International University",
    papers: "15+ Research & Conference Papers",
    quote: "Turning ideas into reality with knowledge and passion",
    image: "/images/aboutus/nahid-sir2.jpg",
    color: "from-purple-600 to-pink-600",
    icon: <GraduationCap className="w-10 h-10" />,
  },
  {
    name: "Ahasun mia",
    roll: "D-74-006",
    reg: "CS-D-74-21-118637",
    field: "Data Collection & Analysis",
    image: "/images/aboutus/ahsan.jpg",
    color: "from-blue-500 to-cyan-500",
    icon: <Brain className="w-10 h-10" />,
  },
  {
    name: "Md. Moinul Islam Sajid",
    roll: "D-74-019",
    reg: "CS-D-74-21-118831",
    field: "ML, Deep Learning & Research",
    image: "/images/aboutus/sajid.jpg",
    color: "from-orange-500 to-red-500",
    icon: <Code2 className="w-10 h-10" />,
  },
  {
    name: "Abdullah Al Noman",
    roll: "D-74-027",
    reg: "CS-D-74-21-118922",
    field: "React.js & Frontend Master",
    image: "/images/aboutus/noman.jpg",
    color: "from-pink-500 to-rose-500",
    icon: <Zap className="w-10 h-10" />,
  },
  {
    name: "Md Mahamudul Hasan",
    roll: "D-74-028",
    reg: "CS-D-74-21-118925",
    field: "ChatGPT, Grok & AI Integration",
    image: "/images/aboutus/mahamudul.jpg",
    color: "from-indigo-500 to-purple-600",
    icon: <Bot className="w-10 h-10" />,
  },
  {
    name: "Md. Riaz Hossain",
    roll: "D-74-0036",
    reg: "CS-D-74-21-119026",
    field: "Advanced Data Analytics",
    image: "/images/aboutus/riaz.jpg",
    color: "from-cyan-500 to-teal-500",
    icon: <Brain className="w-10 h-10" />,
  },
  {
    name: "Md. Shakib Hossain",
    roll: "D-74-043",
    reg: "CS-D-74-21-119250",
    field: "Generative AI & Deep Learning",
    image: "/images/aboutus/shakib.jpg",
    color: "from-green-500 to-emerald-600",
    icon: <Sparkles className="w-10 h-10" />,
  },
];

export default function AboutUs() {
  useEffect(() => {
    gsap.utils.toArray(".team-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 120, scale: 0.93 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.8,
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

    gsap.to(".floating", {
      y: -25,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900 via-purple-900 to-black opacity-60 animate-pulse" />
      </div>

      <div className="relative min-h-screen overflow-hidden">
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center text-center px-6">
          <div className="floating">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient">
                D-74 BATCH
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-white/90 font-light">
              Dhaka International University
            </p>
            <p className="text-xl text-white/70 mt-4">
              Under the guidance of Md Nahid Hasan Sir
            </p>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Cpu className="w-12 h-12 text-white/50" />
          </div>
        </section>

        {/* Team Members */}
        {team.map((member, index) => (
          <section
            key={index}
            className="min-h-screen flex items-center justify-center px-6 py-20"
          >
            <div className="team-card max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* 3D Card with ORIGINAL GLOW 100% BACK */}
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <CardContainer>
                  <CardBody className="relative group w-[450px] h-[450px] rounded-3xl bg-black/50 backdrop-blur-2xl border border-white/20 p-4">
                    {/* ORIGINAL GLOW EXACTLY AS BEFORE */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />

                    <CardItem translateZ={70} className="w-full h-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
                      />
                      <div
                        className={`absolute top-6 right-6 ${
                          member.color ? "bg-gradient-to-br " + member.color : "bg-black/60"
                        } backdrop-blur px-4 py-3 rounded-2xl border border-white/30`}
                      >
                        {member.icon}
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>

              {/* Text Side – 100% UNTOUCHED */}
              <div
                className={`text-white space-y-6 ${
                  index % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:text-right"
                }`}
              >
                {member.title ? (
                  <>
                    <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
                      {member.name}
                    </h2>
                    <p className="text-2xl font-bold text-cyan-300">
                      {member.title}
                    </p>
                    <p className="text-xl text-white/90">
                      {member.role}, {member.uni}
                    </p>
                    <p className="text-lg italic text-white/70">
                      "{member.quote}"
                    </p>
                    <div className="pt-4 space-y-3">
                      <p className="text-white/80">{member.former}</p>
                      <p className="text-yellow-400 font-bold text-lg">
                        {member.papers}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <h2
                      className={`text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r ${member.color}`}
                    >
                      {member.name}
                    </h2>
                    <p className="text-2xl font-semibold text-cyan-300">
                      Roll: {member.roll}
                    </p>
                    <p className="text-lg text-white/70">Reg: {member.reg}</p>
                    <p className="text-xl mt-6 font-medium">
                      D-74 Batch • CSE
                    </p>
                    <div className="mt-8 inline-block">
                      <p className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full border border-white/30 text-lg font-bold shadow-2xl">
                        {member.field}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Closing */}
        <section className="h-screen flex items-center justify-center text-center px-6 bg-black/50 backdrop-blur-2xl">
          <div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                We Don't Follow Trends
              </span>
            </h1>
            <p className="text-3xl md:text-5xl text-white/90 font-light">
              We Create The Future
            </p>
            <p className="text-xl text-cyan-400 mt-10">
              D-74 Batch • Under Md Nahid Hasan Sir
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
          background-size: 200% 200%;
          animation: gradient 12s ease infinite;
        }
      `}</style>
    </>
  );
}