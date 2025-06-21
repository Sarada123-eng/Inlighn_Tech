import React from 'react';
import { CheckCircle, Users, Target, Lightbulb, Award, BookOpen, Zap } from 'lucide-react';

const SaveTimeSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Our Vision",
      description: "To be a leading EdTech platform that bridges the gap between academic knowledge and industry demands, shaping the next generation of tech innovators and leaders through hands-on, practical learning.",
      color: "bg-teal-500"
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "Empowering students with industry-relevant skills through comprehensive internship programs, mentorship, and real-world project experience that prepares them for successful tech careers.",
      color: "bg-green-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "We constantly evolve our curriculum and teaching methods to stay ahead of industry trends, ensuring our students learn the latest technologies and best practices.",
      color: "bg-yellow-500"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a strong community of learners, mentors, and industry professionals who support each other's growth and success throughout their journey.",
      color: "bg-blue-500"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "ISO-certified programs with rigorous quality standards, ensuring every student receives world-class education and recognized certifications.",
      color: "bg-purple-500"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Learning",
      description: "From theoretical foundations to practical implementation, our holistic approach ensures students master both concepts and real-world applications.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Wavy Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Top wavy shape */}
          <path
            d="M0,0 C480,120 960,40 1440,80 L1440,0 Z"
            fill="url(#waveGradient1)"
          />
          
          {/* Bottom wavy shape */}
          <path
            d="M0,800 C480,680 960,760 1440,720 L1440,800 Z"
            fill="url(#waveGradient2)"
          />
          
          {/* Middle decorative wave */}
          <path
            d="M0,400 C360,320 720,480 1080,400 C1200,380 1320,420 1440,400 L1440,500 C1320,520 1200,480 1080,500 C720,580 360,420 0,500 Z"
            fill="url(#waveGradient1)"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-teal-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-400/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-cyan-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-400/20 rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Save Time and Effort
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              with INLIGHN TECH
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start space-x-4 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Cartoon Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full w-96 h-96 mx-auto relative overflow-hidden backdrop-blur-sm border border-teal-400/30">
              {/* Cartoon-style illustration using CSS and icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Main character representation */}
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full relative mx-auto mb-4">
                    {/* Face */}
                    <div className="absolute top-8 left-8 w-4 h-4 bg-white rounded-full"></div>
                    <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full"></div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Laptop representation */}
                  <div className="w-24 h-16 bg-gray-700 rounded-lg mx-auto relative">
                    <div className="w-20 h-12 bg-teal-400 rounded-sm absolute top-1 left-2 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around the illustration */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center animate-bounce">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <Zap className="w-5 h-5 text-white" />
              </div>
              
              <div className="absolute top-1/2 left-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-ping">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              
              <div className="absolute top-1/3 right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center animate-pulse">
                <Award className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Additional floating icons */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center animate-float shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1s' }}>
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default SaveTimeSection;