"use client";
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Shield, Code, Database, BarChart3 } from 'lucide-react';
import Logo from './Logo';
import { useRouter } from 'next/navigation';

const AppBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const programs = [
        { name: 'Cybersecurity', icon: Shield, color: 'text-red-400' },
        { name: 'FullStack Development', icon: Code, color: 'text-green-400' },
        { name: 'Data Science', icon: Database, color: 'text-blue-400' },
        { name: 'Data Analysis', icon: BarChart3, color: 'text-purple-400' },
    ];

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Programs', href: '/programs', hasDropdown: true },
        { name: 'Verify Certificate', href: '/verify' },
        { name: "What's Special", href: '/special' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20' 
                    : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0" onClick={() => {
                            router.push('/');
                            setIsMobileMenuOpen(false);
                            setActiveDropdown(null);
                        }}>
                            <Logo />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative group ">
                                    <button
                                        className={`flex items-center cursor-pointer space-x-1 text-white hover:text-cyan-400 transition-all duration-300 font-medium text-lg relative ${
                                            item.name === 'Home' ? 'text-cyan-400' : ''
                                        }`}
                                        onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        onClick={() => {
                                            router.push(item.href);
                                        }}
                                    >
                                        <span className="relative">
                                            {item.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                        {item.hasDropdown && (
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                                activeDropdown === item.name ? 'rotate-180' : ''
                                            }`} />
                                        )}
                                    </button>

                                    {/* Programs Dropdown */}
                                    {item.hasDropdown && activeDropdown === item.name && (
                                        <div 
                                            className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 animate-scale-in"
                                            onMouseEnter={() => setActiveDropdown(item.name)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <div className="p-6">
                                                <h3 className="text-cyan-400 font-semibold text-lg mb-4">Our Programs</h3>
                                                <div className="space-y-3">
                                                    {programs.map((program) => (
                                                        <button
                                                            key={program.name}
                                                            className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                                                        >
                                                            <program.icon className={`w-5 h-5 ${program.color} group-hover:scale-110 transition-transform duration-300`} />
                                                            <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">
                                                                {program.name}
                                                            </span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Login Button */}
                        <div className="hidden lg:block" onClick={() => router.push('/login')}>
                            <button  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                                Login to Portal
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-white hover:text-cyan-400 transition-colors duration-300 p-2"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20 animate-slide-in-right">
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    <button className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-300 py-2 text-lg">
                                        {item.name}
                                        {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                    </button>
                                </div>
                            ))}
                            <div className="pt-4 border-t border-slate-700">
                                <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                                    Login to Portal
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default AppBar;