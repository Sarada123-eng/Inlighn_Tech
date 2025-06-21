"use client";
import { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  description: string;
}

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const videos: VideoData[] = [
    {
      id: "1",
      title: "LMS Setup & Access: A Step-by-Step Guide",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      duration: "12:45",
      description: "Learn how to set up and access your Learning Management System"
    },
    {
      id: "2",
      title: "Introduction to Full Stack Development",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      duration: "15:20",
      description: "Complete guide to becoming a full stack developer"
    },
    {
      id: "3",
      title: "Data Science Fundamentals",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      duration: "18:30",
      description: "Master the basics of data science and analytics"
    },
    {
      id: "4",
      title: "Cybersecurity Best Practices",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      duration: "14:15",
      description: "Essential security practices for modern applications"
    },
    {
      id: "5",
      title: "AI & Machine Learning Overview",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      duration: "20:00",
      description: "Introduction to artificial intelligence and ML concepts"
    }
  ];

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextVideo();
      } else if (event.key === 'ArrowLeft') {
        prevVideo();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleVideoClick = (videoId: string) => {
    setIsPlaying(isPlaying === videoId ? null : videoId);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Knowledge Through <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Videos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in delay-200">
            Learn from industry experts through our comprehensive video tutorials and masterclasses
          </p>
        </div>

        {/* Main Video Display */}
        <div className="relative mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative">
              <img 
                src={videos[currentIndex].thumbnail} 
                alt={videos[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Play Button Overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-black/40"
                onClick={() => handleVideoClick(videos[currentIndex].id)}
              >
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110 hover:bg-white">
                  <Play className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{videos[currentIndex].title}</h3>
                    <p className="text-gray-300">{videos[currentIndex].description}</p>
                  </div>
                  <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {videos[currentIndex].duration}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevVideo}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextVideo}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Video Thumbnails */}
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                index === currentIndex 
                  ? 'scale-110 ring-4 ring-cyan-400 ring-opacity-50' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="w-48 h-28 rounded-xl overflow-hidden bg-slate-800 relative group">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h4 className="text-white text-sm font-medium mt-2 truncate">{video.title}</h4>
            </div>
          ))}
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Use <kbd className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">←</kbd> and <kbd className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">→</kbd> arrow keys to navigate
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;