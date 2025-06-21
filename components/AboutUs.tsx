"use client";
import { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award, 
  TrendingUp, 
  Globe, 
  Code, 
  Shield,
  Database,
  BarChart3,
  CheckCircle,
  ArrowRight,
  MapPin,
  ChevronDown,
  ChevronUp
} from 'lucide-react';


export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: '10,000+', label: 'Students Trained', icon: Users },
    { number: '95%', label: 'Job Placement Rate', icon: TrendingUp },
    { number: '4.8/5', label: 'Student Rating', icon: Award },
    { number: '500+', label: 'Industry Partners', icon: Globe },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from curriculum design to student support.',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving our teaching methods with cutting-edge technology and industry trends.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where learners and professionals grow together.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Delivering high-quality education that meets industry standards and exceeds expectations.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const programs = [
    { name: 'Cybersecurity', icon: Shield, color: 'text-red-400', students: '2,500+' },
    { name: 'FullStack Development', icon: Code, color: 'text-green-400', students: '3,200+' },
    { name: 'Data Science', icon: Database, color: 'text-blue-400', students: '2,800+' },
    { name: 'Data Analysis', icon: BarChart3, color: 'text-purple-400', students: '1,500+' },
  ];

  const offices = [
    {
      title: 'Visit Our Office',
      address: 'Corporate Office- Office No: VO-301, WeWork Prestige Central, Ground Floor, 36, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Registered Office',
      address: 'Opposite swasti hospital anupam nagar badaun road bareilly uttar pradesh 243001',
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  const faqs = [
    {
      question: 'What makes Inlighn Tech different from other learning platforms?',
      answer: 'Inlighn Tech provides top-quality learning modules and projects based on the latest industry technologies and trends.'
    },
    {
      question: 'How can I register for an internship?',
      answer: 'You can register for internships through our online portal. Simply create an account, browse available positions, and submit your application along with your resume and portfolio.'
    },
    {
      question: 'After filling out the registration form, whom should I contact?',
      answer: 'After registration, our student support team will contact you within 24-48 hours. You can also reach out directly via email or phone for immediate assistance.'
    },
    {
      question: 'What is the project submission deadline?',
      answer: 'Project submission deadlines vary by program. Typically, you will have 4-6 weeks to complete your project after enrollment. Specific deadlines are provided in your program dashboard.'
    },
    {
      question: 'Is it mandatory to submit a project only from the available options on the portal?',
      answer: 'While we provide curated project options, you can also propose custom projects related to your program track. All projects must be approved by your mentor before you begin.'
    },
    {
      question: 'How can I proceed with signing up at Inlighn Tech?',
      answer: 'Visit our website, click on "Get Started", choose your preferred program, complete the registration form, and make the payment. You will receive access credentials within 24 hours.'
    }
  ];

  const achievements = [
    'Industry-leading curriculum designed by experts',
    'Hands-on projects with real-world applications',
    '24/7 student support and mentorship',
    'Career placement assistance and networking',
    'Internationally recognized certifications',
    'Flexible learning schedules for working professionals'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-3xl"></div>
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              About Inlighn Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering the next generation of tech professionals through innovative education, 
              cutting-edge curriculum, and industry-focused training programs.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transform transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Inlighn Tech, we bridge the gap between traditional education and industry demands. 
                Our mission is to create a world where technology education is accessible, practical, 
                and transformative.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe in nurturing not just technical skills, but also critical thinking, 
                problem-solving abilities, and professional ethics that make our graduates stand out 
                in the competitive tech landscape.
              </p>
            </div>
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-800/50 border border-cyan-500/20 rounded-3xl backdrop-blur-sm p-8">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-6">Why Choose Us?</h3>
                    <div className="space-y-4">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{achievement}</span>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to education
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`transform transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300 group h-full rounded-2xl shadow-lg">
                    <div className="p-6 text-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <value.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Office Locations Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Locations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visit us at our offices for consultations and support
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
            <div
                key={office.title}
                className={`bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300 group transform transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } rounded-2xl shadow-lg`}
            >
                <div className="p-8 text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${office.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{office.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{office.address}</p>
                </div>
            </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FAQ's</span>
            </h2>
            <p className="text-xl text-gray-300">
              Frequently asked questions about our programs and services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-400/30 transition-all duration-300 group cursor-pointer"
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? null : index)
                }
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </span>
                </div>
                {openFaqIndex === index && (
                  <div className="pt-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training programs designed to meet industry demands
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={program.name}
                className={`bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300 group cursor-pointer transform transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } rounded-2xl shadow-lg`}
              >
                <div className="p-6 text-center">
                  <program.icon className={`w-12 h-12 ${program.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-lg font-bold text-white mb-2">{program.name}</h3>
                  <p className="text-cyan-400 text-sm mb-4">{program.students} students</p>
                  <button className="flex items-center justify-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 mx-auto">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who have transformed their careers with Inlighn Tech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
              Explore Programs
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

