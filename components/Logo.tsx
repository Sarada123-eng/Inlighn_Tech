import { useState } from 'react';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center space-x-3 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Logo Icon */}
      <div className="relative">
        <div className={`w-14 h-14 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'transform rotate-12 scale-110 shadow-lg shadow-cyan-500/50' : ''
        }`}>
          {/* Circuit pattern */}
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-2 h-2 bg-white rounded-full transition-all duration-300 ${
                isHovered ? 'animate-pulse' : ''
              }`}></div>
            </div>
            {/* Circuit lines */}
            <div className={`absolute top-0 left-1/2 w-0.5 h-3 bg-white transform -translate-x-1/2 transition-all duration-500 ${
              isHovered ? 'h-4 bg-cyan-300' : ''
            }`}></div>
            <div className={`absolute bottom-0 left-1/2 w-0.5 h-3 bg-white transform -translate-x-1/2 transition-all duration-500 ${
              isHovered ? 'h-4 bg-cyan-300' : ''
            }`}></div>
            <div className={`absolute left-0 top-1/2 w-3 h-0.5 bg-white transform -translate-y-1/2 transition-all duration-500 ${
              isHovered ? 'w-4 bg-cyan-300' : ''
            }`}></div>
            <div className={`absolute right-0 top-1/2 w-3 h-0.5 bg-white transform -translate-y-1/2 transition-all duration-500 ${
              isHovered ? 'w-4 bg-cyan-300' : ''
            }`}></div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className={`absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full transition-all duration-700 ${
          isHovered ? 'animate-bounce' : 'opacity-70'
        }`}></div>
        <div className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full transition-all duration-700 delay-150 ${
          isHovered ? 'animate-bounce' : 'opacity-50'
        }`}></div>
      </div>

      {/* Company Name */}
      <div className="flex flex-col">
        <h1 className={`text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 ${
          isHovered ? 'tracking-wider' : ''
        }`}>
          InLighn Tech
        </h1>
        <p className={`text-xs text-slate-400 font-medium transition-all duration-300 ${
          isHovered ? 'text-cyan-300 tracking-wide' : ''
        }`}>
          Experience. Learn. Thrive.
        </p>
      </div>
    </div>
  );
};

export default Logo;