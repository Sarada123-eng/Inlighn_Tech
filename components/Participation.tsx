"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FileText, Code, CheckCircle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Raw Button component
const Button = ({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
    <button className={`focus:outline-none ${className}`} {...props}>
        {children}
    </button>
);

// Raw Card component
const Card = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) => (
    <div className={`rounded-2xl shadow-lg relative overflow-visible ${className}`} {...props}>
        {children}
    </div>
);

// Raw CardContent component
const CardContent = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) => (
    <div className={`relative ${className}`} {...props}>
        {children}
    </div>
);

export const Participation = () => {
    const [activeStep, setActiveStep] = useState(0);
    const participationRef = useRef<HTMLDivElement>(null);

    const participationSteps = [
        {
            icon: FileText,
            title: 'Eligibility Check',
            description: "If you're in your last month of internship, you're eligible!",
            details: "You'll receive a Google Form to apply for this prestigious title!",
            color: 'cyan'
        },
        {
            icon: Code,
            title: 'Submit Projects',
            description: 'Submit your best projects related to your domain!',
            details: 'Showcase your technical skills and innovative solutions.',
            color: 'orange'
        },
        {
            icon: CheckCircle,
            title: 'Skill Assessment Test',
            description: 'Take a skill assessment test to prove your expertise!',
            details: 'Demonstrate your knowledge and problem-solving abilities.',
            color: 'cyan'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (participationRef.current) {
                const rect = participationRef.current.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionHeight = rect.height;
                const viewportHeight = window.innerHeight;

                if (sectionTop < viewportHeight && sectionTop + sectionHeight > 0) {
                    const progress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight * 0.5)));
                    const newActiveStep = Math.floor(progress * 3);
                    setActiveStep(newActiveStep);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // How to Participate Section
        <section ref={participationRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        PARTICIPATION
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        How to <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Participate?</span>
                    </h2>
                </div>

                {/* Participation Timeline */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-orange-400 to-cyan-400"></div>

                    {/* Steps */}
                    <div className="space-y-32">
                        {participationSteps.map((step, index) => (
                            <div key={index} className={`relative transition-all duration-1000 ${
                                activeStep > index 
                                    ? 'opacity-30 transform -translate-y-[100px] scale-75' 
                                    : activeStep === index 
                                    ? 'opacity-100 transform translate-y-0 scale-100' 
                                    : 'opacity-50 transform translate-y-10 scale-95'
                            }`}>
                                {/* Step Number Circle */}
                                <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-500 ${
                                    step.color === 'cyan' 
                                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50' 
                                        : 'bg-gradient-to-r from-orange-400 to-yellow-500 shadow-lg shadow-orange-400/50'
                                } ${activeStep >= index ? 'scale-110' : 'scale-100'}`}>
                                    <step.icon className="w-8 h-8" />
                                </div>

                                {/* Content Card */}
                                <div className={`${index % 2 === 0 ? 'ml-auto mr-8 text-right' : 'mr-auto ml-8 text-left'} w-1/2 max-w-lg`}>
                                    <Card className={`bg-slate-800/80 backdrop-blur-md border transition-all duration-500 ${
                                        step.color === 'cyan' 
                                            ? 'border-cyan-400/30 hover:border-cyan-400/50' 
                                            : 'border-orange-400/30 hover:border-orange-400/50'
                                    } transform hover:scale-105`}>
                                        <CardContent className="p-8">
                                            <h3 className={`text-2xl font-bold mb-4 ${
                                                step.color === 'cyan' ? 'text-cyan-400' : 'text-orange-400'
                                            }`}>
                                                {step.title}
                                            </h3>
                                            <p className="text-white text-lg mb-4 font-medium">
                                                {step.description}
                                            </p>
                                            <p className="text-gray-300 leading-relaxed">
                                                {step.details}
                                            </p>
                                            
                                            {/* Decorative Elements */}
                                            <div className={`absolute ${index % 2 === 0 ? '-left-4' : '-right-4'} top-8 w-2 h-16 rounded-full ${
                                                step.color === 'cyan' 
                                                    ? 'bg-gradient-to-b from-cyan-400 to-blue-500' 
                                                    : 'bg-gradient-to-b from-orange-400 to-yellow-500'
                                            }`}></div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Floating decorative circles */}
                                <div className={`absolute ${index % 2 === 0 ? 'left-1/4' : 'right-1/4'} top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full ${
                                    step.color === 'cyan' ? 'bg-cyan-400/30' : 'bg-orange-400/30'
                                } animate-pulse`}></div>
                                <div className={`absolute ${index % 2 === 0 ? 'left-1/3' : 'right-1/3'} top-1/3 w-4 h-4 rounded-full ${
                                    step.color === 'cyan' ? 'bg-blue-400/20' : 'bg-yellow-400/20'
                                } animate-float`} style={{animationDelay: `${index * 0.5}s`}}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <Link href="/programs" passHref legacyBehavior>
                        <a>
                            <Button className="bg-gradient-to-r from-cyan-400 to-orange-400 hover:from-cyan-500 hover:to-orange-500 text-white px-12 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-400/25">
                                Start Your Journey
                                <ArrowRight className="ml-3 w-6 h-6" />
                            </Button>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};