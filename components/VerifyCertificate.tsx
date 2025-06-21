"use client";
import { useState } from 'react';
import { Shield, Search, CheckCircle, XCircle, Award, FileText } from 'lucide-react';

interface CertificateData {
  name: string;
  program: string;
  completionDate: string;
  grade: string;
  skills: string[];
}

export const VerifyCertificate = () => {
  const [internId, setInternId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'valid' | 'invalid' | null>(null);
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null);

  const handleVerify = async () => {
    setIsVerifying(true);
    // Simulate verification process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (internId.toLowerCase().includes('itid') && internId.length >= 6) {
      setVerificationResult('valid');
      setCertificateData({
        name: 'John Doe',
        program: 'Full Stack Development',
        completionDate: '2024-01-15',
        grade: 'A+',
        skills: ['React', 'Node.js', 'MongoDB', 'Express.js']
      });
    } else {
      setVerificationResult('invalid');
      setCertificateData(null);
    }
    setIsVerifying(false);
  };

return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6 animate-bounce">
                        <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Verify <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Certificate</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Authenticate your internship certificate with our secure verification system
                    </p>
                </div>

                {/* Verification Form */}
                <div className="bg-white/10 backdrop-blur-md border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 mb-8 rounded-2xl">
                    <div className="p-8">
                        <div className="flex flex-col items-center space-y-6">
                            <div className="w-full max-w-md">
                                <label className="block text-cyan-300 text-lg font-semibold mb-3">
                                    Enter Intern ID:
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={internId}
                                        onChange={(e) => setInternId(e.target.value)}
                                        placeholder="e.g., ITID0000"
                                        className="w-full h-14 text-lg bg-white/20 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400 rounded-xl px-4"
                                    />
                                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                </div>
                            </div>
                            
                            <button
                                onClick={handleVerify}
                                disabled={!internId || isVerifying}
                                className="w-full max-w-md h-14 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                            >
                                {isVerifying ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Verifying...</span>
                                    </div>
                                ) : (
                                    'Verify Certificate'
                                )}
                            </button>
                        </div>
                        
                        <p className="text-gray-400 text-center mt-6">
                            Enter your Intern ID (e.g., ITID0000) to verify your internship certificate. 
                            You can find your Intern ID on your offer letter or experience letter.
                        </p>
                    </div>
                </div>

                {/* Verification Result */}
                {verificationResult && (
                    <div className={`bg-white/10 backdrop-blur-md border shadow-2xl animate-scale-in rounded-2xl ${
                        verificationResult === 'valid' 
                            ? 'border-green-500/50 shadow-green-500/10' 
                            : 'border-red-500/50 shadow-red-500/10'
                    }`}>
                        <div className="p-8">
                            <div className="text-center">
                                {verificationResult === 'valid' ? (
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full animate-bounce">
                                            <CheckCircle className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-green-400">Certificate Verified!</h3>
                                        
                                        {certificateData && (
                                            <div className="bg-white/5 rounded-xl p-6 space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="text-left">
                                                        <p className="text-gray-400 text-sm">Student Name</p>
                                                        <p className="text-white font-semibold">{certificateData.name}</p>
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="text-gray-400 text-sm">Program</p>
                                                        <p className="text-white font-semibold">{certificateData.program}</p>
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="text-gray-400 text-sm">Completion Date</p>
                                                        <p className="text-white font-semibold">{certificateData.completionDate}</p>
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="text-gray-400 text-sm">Grade</p>
                                                        <p className="text-white font-semibold">{certificateData.grade}</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="text-left">
                                                    <p className="text-gray-400 text-sm mb-2">Skills Acquired</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {certificateData.skills.map((skill: string, index: number) => (
                                                            <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full animate-bounce">
                                            <XCircle className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-red-400">Certificate Not Found</h3>
                                        <p className="text-gray-300">
                                            The Intern ID you entered could not be verified. Please check your ID and try again.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {[
                        {
                            icon: Award,
                            title: 'Secure Verification',
                            description: 'Advanced encryption ensures certificate authenticity'
                        },
                        {
                            icon: FileText,
                            title: 'Instant Results',
                            description: 'Get verification results in real-time'
                        },
                        {
                            icon: Shield,
                            title: 'Fraud Protection',
                            description: 'Blockchain-secured certificate validation'
                        }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 rounded-2xl">
                            <div className="p-6 text-center">
                                <feature.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 left-6 z-50">
            <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
            </button>
        </div>
    </div>
)}
