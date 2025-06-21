import React from 'react';
import { Laptop, Users, Award, Briefcase } from 'lucide-react';

const InternshipFeatures = () => {
  const features = [
    {
      icon: Laptop,
      title: 'Real-World Projects',
      description: 'Gain hands-on experience with real industry projects and build a portfolio that stands out.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from seasoned professionals with years of industry experience and proven track records.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30'
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Earn recognized certifications that validate your skills and enhance your career prospects.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30'
    },
    {
      icon: Briefcase,
      title: 'Career Placement',
      description: 'Get dedicated placement support with interview preparation and direct connections to top companies.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'
    }
  ];

  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-400/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-6 py-2 rounded-full font-semibold text-sm mb-8 shadow-lg animate-fade-in">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            We Provide
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Best Internship For You
            </span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto animate-fade-in">
            At InLighn Tech, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-3xl border-2 ${feature.borderColor} ${feature.bgColor} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${feature.color.split('-')[1]}-500/20 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border ${feature.borderColor}`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold ${feature.color} mb-4 group-hover:text-white transition-colors duration-300`}>
                {feature.title}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-${feature.color.split('-')[1]}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              
              {/* Decorative corner elements */}
              <div className={`absolute top-4 right-4 w-2 h-2 ${feature.color.replace('text-', 'bg-')}/30 rounded-full group-hover:animate-pulse`}></div>
              <div className={`absolute bottom-4 left-4 w-1.5 h-1.5 ${feature.color.replace('text-', 'bg-')}/20 rounded-full group-hover:animate-bounce`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/25">
            Start Your Journey Today
          </button>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-purple-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-orange-400/15 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-400/25 rounded-full animate-bounce delay-300"></div>
    </div>
  );
};

export default InternshipFeatures;