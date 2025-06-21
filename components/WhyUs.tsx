import React from 'react';
import { Lightbulb, Users, Award, TrendingUp, Shield, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Career Support',
      description: 'We go beyond training. Our career services include portfolio reviews, interview prep, and connections with industry professionals to help you land your dream job.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30'
    },
    {
      icon: Users,
      title: 'Industry Network',
      description: 'Connect with a vast network of industry professionals, alumni, and peers. Build relationships that will accelerate your career growth.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'
    },
    {
      icon: Award,
      title: 'Recognized Certifications',
      description: 'Earn industry-recognized certifications that are valued by top employers. Stand out in the competitive job market with verified skills.',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'
    },
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Comprehensive skill development programs designed to keep you ahead of industry trends and technological advancements.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Our programs are continuously updated and quality-assured to meet the highest industry standards and employer expectations.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30'
    },
    {
      icon: Zap,
      title: 'Fast-Track Learning',
      description: 'Accelerated learning paths designed to get you job-ready faster without compromising on the depth and quality of education.',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/30'
    }
  ];

  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Why Choose Us?
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative p-6 rounded-2xl border-2 ${feature.borderColor} ${feature.bgColor} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border ${feature.borderColor} flex-shrink-0`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${feature.color} mb-2 group-hover:text-white transition-colors duration-300`}>
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${feature.color.split('-')[1]}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border-2 border-cyan-400/30">
              {/* Placeholder for woman image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <img src="/images/woman.png" alt="Woman" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-6 w-2 h-2 bg-purple-400/30 rounded-full animate-ping"></div>
            </div>

            {/* Floating decorative elements around the image */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400/20 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 -right-6 w-4 h-4 bg-purple-400/20 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25">
            Join Our Community
          </button>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-purple-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-cyan-400/15 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400/25 rounded-full animate-bounce delay-300"></div>
    </div>
  );
};

export default WhyChooseUs;