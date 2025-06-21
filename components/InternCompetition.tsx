"use client";
import { useState, useEffect } from 'react';
import { Award, Trophy, Gift, Star, ArrowRight, Users, Target, Zap } from 'lucide-react';

export const InternComp = () => {
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const now = new Date();
        setCurrentMonth(now.toLocaleString('default', { month: 'long', year: 'numeric' }));
    }, []);

    const rewards = [
        {
            icon: Trophy,
            title: 'Stipend Reward',
            amount: '₹15,000',
            description: 'Monthly cash reward for outstanding performance',
            gradient: 'from-blue-600 to-indigo-700'
        },
        {
            icon: Gift,
            title: 'Welcome Kit & Swag',
            description: 'Exclusive Inlighn Tech branded merchandise and goodies',
            gradient: 'from-indigo-500 to-blue-700'
        },
        {
            icon: Star,
            title: 'Platform Recognition',
            description: 'Special spotlight on our official platform and social media',
            gradient: 'from-blue-500 to-indigo-600'
        }
    ];

    const stats = [
        { icon: Users, value: '500+', label: 'Active Interns' },
        { icon: Trophy, value: '120', label: 'Winners So Far' },
        { icon: Target, value: '10', label: 'Monthly Winners' },
        { icon: Zap, value: '95%', label: 'Satisfaction Rate' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
            {/* Hero Section */}
            <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-800 rounded-full opacity-20 animate-float"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-700 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-700 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
                </div>

                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse-glow">
                            <Zap className="w-4 h-4" />
                            EPIC OPPORTUNITY
                            <Zap className="w-4 h-4" />
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Interns of the Month
                            </span>
                            <br />
                            <span className="text-blue-100">Challenge</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Inlighn Tech is bringing you an <span className="font-semibold text-blue-400">EPIC opportunity</span> with the "Interns of the Month Challenge"! 🎉✨
                        </p>
                        
                        <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
                            Every single month, we're recognizing <span className="font-bold text-blue-400">10 OUTSTANDING</span> interns who have shown exceptional dedication, innovation, and top-tier performance! 🏆
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/programs">
                                <button
                                    type="button"
                                    className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                                >
                                    Apply Now
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                            </a>
                            <a href="/about">
                                <button
                                    type="button"
                                    className="border border-blue-400 text-blue-300 hover:bg-blue-900 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                                >
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Current Month Badge */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-blue-950 rounded-xl shadow-lg p-6 border border-blue-800">
                            <p className="text-sm text-blue-300 uppercase tracking-wide">Current Challenge</p>
                            <p className="text-2xl font-bold text-blue-400">{currentMonth}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rewards Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Amazing <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Rewards</span> Await
                        </h2>
                        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                            Outstanding performance deserves outstanding recognition
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {rewards.map((reward, index) => (
                            <div
                                key={index}
                                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-800 rounded-xl overflow-hidden bg-blue-900"
                            >
                                <div className="p-8 text-center relative">
                                    <div
                                        className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${reward.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <reward.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{reward.title}</h3>
                                    {reward.amount && (
                                        <p className="text-3xl font-bold text-blue-400 mb-4">{reward.amount}</p>
                                    )}
                                    <p className="text-blue-200 leading-relaxed">{reward.description}</p>
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reward.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-800 to-indigo-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Challenge by the Numbers
                        </h2>
                        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                            Join a thriving community of ambitious interns
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                                <p className="text-blue-200 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-indigo-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Show Your <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Exceptional Skills</span>?
                    </h2>
                    <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                        Don't miss out on this incredible opportunity to be recognized and rewarded for your outstanding performance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/programs">
                            <button
                                type="button"
                                className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                            >
                                Start Your Journey
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </a>
                        <a href="/contact">
                            <button
                                type="button"
                                className="border border-blue-400 text-blue-300 hover:bg-blue-900 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                            >
                                Get Support
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
