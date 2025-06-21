"use client"
import React, { useState } from 'react';
import { Plus, X, Award, Shield, Star, CheckCircle } from 'lucide-react';

const RecognitionsSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

const certificates = [
    {
        id: 1,
        title: "Government of India Certificate of Incorporation",
        description: "Ministry of Corporate Affairs - Central Registration Centre",
        image: "/images/certificate.png",
        type: "Government Recognition",
        date: "2023",
        details: "INLIGHN GLOBAL PRIVATE LIMITED is incorporated as a Private Limited Company by the Department for Promotion of Industry and Internal Trade."
    },
    {
        id: 2,
        title: "ISO 9001:2015 Certification",
        description: "Quality Management System Certification",
        image: "/images/certificate.png",
        type: "Quality Assurance",
        date: "2024",
        details: "Certified for maintaining international standards in educational services and training programs."
    },
    {
        id: 3,
        title: "MSME Registration",
        description: "Micro, Small & Medium Enterprises Registration",
        image: "/images/certificate.png",
        type: "Business Registration",
        date: "2023",
        details: "Registered under the MSME Development Act for promoting entrepreneurship and skill development."
    },
    {
        id: 4,
        title: "Educational Excellence Award",
        description: "Recognition for Outstanding Contribution to EdTech",
        image: "/images/certificate.png",
        type: "Industry Recognition",
        date: "2024",
        details: "Awarded for innovative approach in bridging the gap between academic learning and industry requirements."
    }
];

  const achievements = [
    { icon: Award, title: "500+ Students Certified", color: "text-yellow-500" },
    { icon: Shield, title: "ISO 9001:2015 Certified", color: "text-blue-500" },
    { icon: Star, title: "95% Success Rate", color: "text-green-500" },
    { icon: CheckCircle, title: "Government Recognized", color: "text-purple-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-30 transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 transform -translate-x-24 translate-y-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-pink-100 to-orange-100 px-6 py-2 rounded-full mb-4">
            <span className="text-pink-600 font-semibold text-lg">Our Recognitions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are proud to be recognized by government bodies and industry leaders for our commitment to quality education and innovation in the EdTech space.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 mx-auto`}>
                <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
              </div>
              <h3 className="font-bold text-gray-800 text-center text-sm leading-tight">
                {achievement.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                

                <button
                  onClick={() => setSelectedCertificate(certificate.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 hover:bg-white hover:shadow-xl"
                >
                  <Plus className="w-5 h-5 text-gray-700" />
                </button>


                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {certificate.type}
                </div>
              </div>

  
              <div className="p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-2 leading-tight">
                  {certificate.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {certificate.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {certificate.date}
                  </span>
                  <button
                    onClick={() => setSelectedCertificate(certificate.id)}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-300"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800">
                  {certificates.find(cert => cert.id === selectedCertificate)?.title}
                </h3>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Certificate Image */}
                  <div className="aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden">
                    <img
                      src={certificates.find(cert => cert.id === selectedCertificate)?.image}
                      alt="Certificate"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {certificates.find(cert => cert.id === selectedCertificate)?.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Details</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {certificates.find(cert => cert.id === selectedCertificate)?.details}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 px-4 py-2 rounded-lg">
                        <span className="text-blue-800 font-semibold text-sm">
                          {certificates.find(cert => cert.id === selectedCertificate)?.type}
                        </span>
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded-lg">
                        <span className="text-gray-700 font-semibold text-sm">
                          {certificates.find(cert => cert.id === selectedCertificate)?.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecognitionsSection;