"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const InternTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Arjun Sharma",
      program: "Full-Stack Development",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "At INLIGHN TECH, I completed my Full-Stack Development internship, where I gained hands-on experience with Django, Flask, Web Scraping, and Automation. I worked on projects that enhanced my programming skills and helped me understand backend development better. The structured learning path made a big difference in my confidence and abilities.",
      rating: 5,
      technologies: ["React", "Node.js", "MongoDB", "API Development"]
    },
    {
      id: 2,
      name: "Priya Patel",
      program: "Data Science",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "During my Data Science internship at INLIGHN TECH, I worked extensively with Python, SQL, PowerBI, and machine learning algorithms. The hands-on projects focused on real-world data analysis helped me develop strong analytical skills. The mentorship and guidance I received significantly boosted my career prospects.",
      rating: 5,
      technologies: ["Python", "SQL", "PowerBI", "Machine Learning"]
    },
    {
      id: 3,
      name: "Rohit Kumar",
      program: "Cybersecurity",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "The Cybersecurity program at INLIGHN TECH provided me with comprehensive knowledge of network security, ethical hacking, and threat analysis. The practical labs and real-world scenarios helped me understand security vulnerabilities and defense mechanisms. I'm now confident in pursuing a career in cybersecurity.",
      rating: 5,
      technologies: ["Network Security", "Ethical Hacking", "Penetration Testing", "Security Analysis"]
    },
    {
      id: 4,
      name: "Sneha Reddy",
      program: "Data Analysis",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "My experience with the Data Analysis program was exceptional. I learned advanced Excel techniques, statistical analysis, and data visualization tools like Tableau. The project-based learning approach helped me build a strong portfolio that impressed potential employers. The career support team was incredibly helpful.",
      rating: 5,
      technologies: ["Excel", "Tableau", "Statistical Analysis", "Data Visualization"]
    },
    {
      id: 5,
      name: "Vikash Singh",
      program: "DevOps",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "The DevOps internship at INLIGHN TECH introduced me to containerization, CI/CD pipelines, and cloud platforms. Working with Docker, Kubernetes, and AWS gave me practical experience in modern deployment practices. The industry-relevant curriculum prepared me well for my current role.",
      rating: 5,
      technologies: ["Docker", "Kubernetes", "AWS", "CI/CD"]
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-slate-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-400/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-6 py-2 rounded-full font-semibold text-sm mb-6 shadow-lg">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            What Our Interns Say
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hear from our successful graduates who transformed their careers through our programs
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-3xl border border-cyan-500/20 p-8 md:p-12 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Left Side - Content */}
                      <div className="space-y-6">
                        {/* Quote Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6">
                          <Quote className="w-8 h-8 text-white" />
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-slate-200 text-lg leading-relaxed">
                          "{testimonial.testimonial}"
                        </p>

                        {/* Rating */}
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {renderStars(testimonial.rating)}
                          </div>
                          <span className="text-slate-400 text-sm">({testimonial.rating}/5)</span>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {testimonial.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full text-sm border border-cyan-400/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Side - Profile */}
                      <div className="text-center lg:text-left">
                        <div className="relative inline-block mb-6">
                          <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-gradient-to-br from-cyan-400 to-blue-500 shadow-2xl">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Decorative ring */}
                          <div className="absolute -inset-2 rounded-full border-2 border-cyan-400/30 animate-pulse"></div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-cyan-400 font-semibold text-lg">
                            {testimonial.program} Intern
                          </p>
                          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto lg:mx-0 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-cyan-400/50 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-cyan-400/50 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-slate-600 hover:bg-slate-500'
              } disabled:cursor-not-allowed`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="w-full bg-slate-700 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>{currentIndex + 1} of {testimonials.length}</span>
            <span>Testimonials</span>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-16 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-orange-400/30 rounded-full animate-bounce delay-300"></div>
    </div>
  );
};

export default InternTestimonials;