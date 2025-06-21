"use client";
import { useState, useRef, useEffect } from 'react';
import { Gift, FileText, QrCode, Users } from 'lucide-react';


const PerksAndBenefits = () => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const viewportHeight = window.innerHeight;
        
        if (sectionTop < viewportHeight * 0.8 && sectionTop > -rect.height * 0.5) {
          const progress = Math.max(0, Math.min(1, (viewportHeight * 0.8 - sectionTop) / (viewportHeight * 0.6)));
          const newActiveCard = Math.floor(progress * 5);
          setActiveCard(newActiveCard);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    {
      icon: Gift,
      title: "Top 10 Intern Reward: ₹15,000 stipend + Welcome kit",
      gradient: "from-orange-400 to-yellow-500",
      bgGradient: "from-orange-100 to-yellow-100",
      shadowColor: "shadow-orange-400/30",
      delay: 0
    },
    {
      icon: FileText,
      title: "Offer Letter: Within 30 minutes",
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-100 to-blue-100",
      shadowColor: "shadow-cyan-400/30",
      delay: 0.2
    },
    {
      icon: QrCode,
      title: "Experience Letter: With QR Code",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-100 to-red-100",
      shadowColor: "shadow-orange-500/30",
      delay: 0.4
    },
    {
      title: "Exclusive Job Updates: Shared on WhatsApp",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-100 to-emerald-100",
      shadowColor: "shadow-green-400/30",
      delay: 0.6
    },
    {
      title: "Certificate Verification",
      gradient: "from-purple-400 to-indigo-500",
      bgGradient: "from-purple-100 to-indigo-100",
      shadowColor: "shadow-purple-400/30",
      delay: 0.8
    },
    {
      icon: Users,
      title: "Community Forum: Peer & mentor support",
      gradient: "from-cyan-500 to-teal-500",
      bgGradient: "from-cyan-100 to-teal-100",
      shadowColor: "shadow-cyan-500/30",
      delay: 1.0
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg animate-pulse-glow">
            BENEFITS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              PERKS & BENEFITS
            </span>
          </h2>
        </div>

        {/* Certificate Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group w-full max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 transform group-hover:scale-105 transition-all duration-500 w-full h-[36rem] flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl h-[32rem] w-[22rem] flex items-center justify-center">
                  <img
                    src="/images/recognisation.png"
                    alt="Recognition Certificate"
                    className="max-h-[30rem] max-w-full rounded-xl shadow-md object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
            <div
                key={index}
                className={`group relative overflow-hidden border-0 transform transition-all duration-700 ${
                    activeCard >= index 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-30 translate-y-8 scale-95'
                } hover:scale-105 ${benefit.shadowColor} hover:shadow-2xl`}
                style={{transitionDelay: `${benefit.delay}s`}}
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-80`}></div>
                <div className="relative p-6 h-full flex flex-col items-center justify-center text-center">
                    {/* Icon Circle */}
                    <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        {benefit.icon ? (
                            <benefit.icon className="w-8 h-8 text-white" />
                        ) : (
                            <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                        )}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                        {benefit.title}
                    </h3>
                    
                    {/* Animated border */}
                    <div className={`absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
                    
                    {/* Floating particles */}
                    <div className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r ${benefit.gradient} opacity-40 animate-pulse`}></div>
                    <div className={`absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${benefit.gradient} opacity-60 animate-float`} style={{animationDelay: `${index * 0.3}s`}}></div>
                </div>
            </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 cursor-pointer bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
            <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
            Ready to Unlock These Amazing Benefits?
            <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerksAndBenefits;