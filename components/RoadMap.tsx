import React from 'react';
import { FileText, Calendar, Users, FolderOpen, Award, MessageCircle } from 'lucide-react';

const RoadmapSection = () => {
  const steps = [
    {
      id: 1,
      title: "Registration Form & Portal Access",
      description: "Register yourself at InLighnTech and get your portal access",
      icon: FileText,
      color: "bg-teal-500",
      position: "top-left"
    },
    {
      id: 2,
      title: "Interview Call - Next Day",
      description: "Schedule and attend your interview call",
      icon: Calendar,
      color: "bg-teal-400",
      position: "top-right"
    },
    {
      id: 3,
      title: "Offer Letter with Batch Group Link",
      description: "Once you receive Offer Letter, You will get access of WhatsApp Group",
      icon: Users,
      color: "bg-teal-600",
      position: "bottom-left"
    },
    {
      id: 4,
      title: "Select Your Project and Submit Work",
      description: "Select your project by on your own or select the project given in the portal and submit your work",
      icon: FolderOpen,
      color: "bg-green-500",
      position: "bottom-center"
    },
    {
      id: 5,
      title: "Experience Letter & Letter of completion",
      description: "Once you Submit your Project, You'll get ISO-Certified Completion Certificate and Letter of Completion",
      icon: Award,
      color: "bg-yellow-500",
      position: "top-center"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-teal-100 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-100 rounded-full opacity-20 translate-x-24 translate-y-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ROADMAP OF INTERNSHIP JOURNEY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Desktop Roadmap */}
        <div className="hidden lg:block relative">
          {/* Road Path SVG */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="800" height="400" viewBox="0 0 800 400" className="text-gray-300">
              <path
                d="M100 200 Q200 100 300 200 T500 200 Q600 300 700 200"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="20,10"
                fill="none"
                className="opacity-60"
              />
            </svg>
          </div>

          {/* Step Cards */}
          <div className="relative grid grid-cols-5 gap-8 items-center min-h-[400px]">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative ${
                  index % 2 === 0 ? 'mt-0' : 'mt-32'
                } transform hover:scale-105 transition-all duration-300`}
              >
                {/* Step Number Circle */}
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4 mx-auto relative z-10`}>
                  {step.id}
                </div>
                
                {/* Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-2 text-center leading-tight">
                    Step {step.id}: {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Roadmap */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start space-x-4">
              {/* Step Number and Line */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-gray-300 mt-4"></div>
                )}
              </div>
              
              {/* Card */}
              <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center mb-3`}>
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have successfully completed their internship journey with InLighn Tech
            </p>
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Begin your Journey →
            </button>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className="fixed bottom-6 left-6 z-40">
          <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;