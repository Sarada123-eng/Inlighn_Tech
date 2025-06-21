"use client";
import React, { useState } from 'react';
import { FileText, Target, Eye } from 'lucide-react';

const WhoWeAre = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const aboutCards = [
    {
      id: 'about',
      icon: FileText,
      title: 'About INLIGHN TECH',
      description: 'At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      hoverImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'mission',
      icon: Target,
      title: 'Our Mission',
      description: 'To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30',
      hoverImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'vision',
      icon: Eye,
      title: 'Our Vision',
      description: 'To empower students and young professionals by providing immersive, real-world learning experiences through tailored programs.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      hoverImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            WHO WE ARE
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aboutCards.map((card, index) => (
            <div
              key={card.id}
              className={`group relative p-8 rounded-3xl border-2 ${card.borderColor} ${card.bgColor} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image on Hover */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                hoveredCard === card.id ? 'opacity-20' : 'opacity-0'
              }`}>
                <img 
                  src={card.hoverImage} 
                  alt={card.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-slate-900/60 rounded-3xl"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border ${card.borderColor}`}>
                  <card.icon className={`w-8 h-8 ${card.color}`} />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold ${card.color} mb-4 group-hover:text-white transition-colors duration-300`}>
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  {card.description}
                </p>
              </div>

              {/* Decorative corner elements */}
              <div className={`absolute top-4 right-4 w-2 h-2 ${card.color.replace('text-', 'bg-')}/30 rounded-full group-hover:animate-pulse`}></div>
              <div className={`absolute bottom-4 left-4 w-1.5 h-1.5 ${card.color.replace('text-', 'bg-')}/20 rounded-full group-hover:animate-bounce`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-orange-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-cyan-400/15 rounded-full animate-pulse"></div>
    </div>
  );
};

export default WhoWeAre;