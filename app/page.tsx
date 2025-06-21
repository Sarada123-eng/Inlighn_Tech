import AppBar from "@/components/AppBar";
import InternshipFeatures from "@/components/InternShipFeatures";
import InternTestimonials from "@/components/InternTestimony";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <AppBar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your <br />
                Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500">INLIGHN</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500">TECH</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Gain real-world experience with our immersive internship programs in Cyber Security, Full Stack Development, Data Science, Data Analyst and in various tech domains. Learn today, lead tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button className="group relative bg-gradient-to-r from-green-400 to-cyan-500 hover:from-green-500 hover:to-cyan-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  Explore Internships
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Login to Portal
                </button>
              </div>
            </div>

            {/* Right - 3D Animated Structure */}
            <div className="relative flex justify-center items-center h-96 lg:h-[500px]">
              {/* Central glowing orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse shadow-2xl shadow-cyan-500/50 relative">
                  <div className="absolute inset-2 bg-white rounded-full opacity-30 animate-ping"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full"></div>
                </div>
              </div>

              {/* Orbital Ring 1 */}
              <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
                <div className="w-80 h-80 border-2 border-cyan-400/30 rounded-full relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50 animate-bounce"></div>
                  <div className="absolute top-1/2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                </div>
              </div>

              {/* Orbital Ring 2 */}
              <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="w-64 h-64 border-2 border-purple-400/20 rounded-full relative transform rotate-45">
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full shadow-lg shadow-orange-500/50"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"></div>
                </div>
              </div>

              {/* Orbital Ring 3 */}
              <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '25s' }}>
                <div className="w-96 h-96 border border-blue-300/20 rounded-full relative transform -rotate-12">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full shadow-lg shadow-cyan-400/50 animate-ping"></div>
                  <div className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-20 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-32 right-24 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-24 left-32 w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-32 right-20 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

              {/* Connecting lines with gradient */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-40 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent transform rotate-45 animate-pulse"></div>
                <div className="w-1 h-40 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent transform -rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-purple-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-orange-400/20 rounded-full animate-bounce"></div>
      </div>
      <InternshipFeatures/>
      <WhoWeAre/>
      <WhyChooseUs/>
      <InternTestimonials/>
    </div>
  );
}
