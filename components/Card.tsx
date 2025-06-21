"use client";
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  rating: number;
  tags: string[];
  color: string;
  duration?: string;
  price?: string;
  students?: number;
}

const Card = ({ title, description, image, rating, tags, color, duration = "3 months", price = "Free", students = 1000 }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 group max-w-sm border border-white/20 hover:border-cyan-400/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Image Header with 3D Effect */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Floating Icon with Animation */}
        <div className={`absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 ${
          isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
        }`}>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold rounded-full">
          {price}
        </div>

        {/* Students Count */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-white text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
          </svg>
          <span>{students}+ enrolled</span>
        </div>
      </div>

      {/* Content with Enhanced Styling */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Duration */}
          <p className="text-cyan-400 text-sm font-semibold">Duration: {duration}</p>
        </div>

        {/* Enhanced Rating with Animation */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-lg transition-all duration-300 ${
                  i < rating ? 'text-yellow-400 scale-110' : 'text-gray-500'
                } ${isHovered && i < rating ? 'animate-pulse' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-gray-300 text-sm">({rating}.0)</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Enhanced Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
              +{tags.length - 3} more
            </span>
          )}
        </div>

        {/* Enhanced Learn More Button */}
        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center space-x-2 group">
          <span>Learn More</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 transition-opacity duration-300 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default Card;
