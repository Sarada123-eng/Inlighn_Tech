import React from 'react';
import { Sparkles } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Circuit pattern loader */}
      <div className="relative">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 flex items-center justify-center animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-spin">
              <div className="w-3 h-3 bg-cyan-400 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDelay: '0.5s', animationDirection: 'reverse' }}>
              <div className="w-2 h-2 bg-orange-400 rounded-full absolute top-1/2 -right-1 transform -translate-y-1/2 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDelay: '1s' }}>
              <div className="w-2.5 h-2.5 bg-purple-400 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Inlighn Tech
            </h2>
            <div className="flex items-center space-x-1 mt-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
