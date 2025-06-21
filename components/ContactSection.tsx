"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    domainOfInternship: '',
    state: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const menuItems = [
    'Home',
    'About Us',
    'Programs',
    'Contact Us',
    'Login To Portal'
  ];

  const quickLinks = [
    'Privacy Policy',
    'Term & Conditions',
    'Disclaimer',
    "FAQ's"
  ];

  const domains = [
    'Cybersecurity',
    'Full Stack Development',
    'Data Science',
    'Data Analysis',
    'Machine Learning',
    'Cloud Computing',
    'DevOps',
    'Mobile Development'
  ];

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
    'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Contact Form Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-6 py-2 rounded-full font-semibold text-sm mb-6 shadow-lg">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Fill the form to contact us
            </h2>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
            {/* First Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/95 backdrop-blur-sm rounded-2xl border-0 text-slate-700 placeholder-slate-500 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-lg"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/95 backdrop-blur-sm rounded-2xl border-0 text-slate-700 placeholder-slate-500 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-lg"
                  required
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <select
                  name="domainOfInternship"
                  value={formData.domainOfInternship}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/95 backdrop-blur-sm rounded-2xl border-0 text-slate-700 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-lg appearance-none cursor-pointer"
                  required
                >
                  <option value="">Domain of Internship</option>
                  {domains.map((domain) => (
                    <option key={domain} value={domain}>{domain}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/95 backdrop-blur-sm rounded-2xl border-0 text-slate-700 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-lg appearance-none cursor-pointer"
                  required
                >
                  <option value="">State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-6 py-4 bg-white/95 backdrop-blur-sm rounded-2xl border-0 text-slate-700 placeholder-slate-500 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-lg resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-500/25"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-purple-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-orange-400/20 rounded-full animate-bounce"></div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gradient-to-br from-slate-800 to-slate-900 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center border-2 border-white/20">
                  <div className="relative w-10 h-10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-white transform -translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-0.5 h-4 bg-white transform -translate-x-1/2"></div>
                    <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-white transform -translate-y-1/2"></div>
                    <div className="absolute right-0 top-1/2 w-4 h-0.5 bg-white transform -translate-y-1/2"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    InLighn Tech
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Experience. Learn. Thrive.
                  </p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs.
              </p>
            </div>

            {/* Menu */}
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-6">Menu</h4>
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-lg"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-lg"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us & Contact */}
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-6">Follow Us</h4>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mb-8">
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <Linkedin className="w-6 h-6 text-slate-800" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <Instagram className="w-6 h-6 text-slate-800" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <Youtube className="w-6 h-6 text-slate-800" />
                </a>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div className="text-slate-300">
                    <p className="font-semibold">Corporate Office- Office No: VO-301, WeWork Prestige Central,</p>
                    <p>Ground Floor, 36, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+919368842663" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                    +91 9368842663
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:info@inlighntech.com" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                    info@inlighntech.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2024 InLighn Tech. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm mt-2 md:mt-0">
                Designed with ❤️ for the future of education
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;