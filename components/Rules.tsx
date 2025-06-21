import { Calendar, Award, Lightbulb } from 'lucide-react';

const RulesSelectionProcess = () => {
    const rules = [
        {
            icon: Calendar,
            title: "Each intern can apply only ONCE in their final month.",
            color: "from-blue-700 to-blue-900",
            bgColor: "bg-blue-50",
            iconBg: "bg-gradient-to-br from-blue-600 to-blue-800"
        },
        {
            icon: Award,
            title: "Winners will be announced on the last day of every month! 🎉",
            color: "from-blue-800 to-indigo-900",
            bgColor: "bg-blue-100",
            iconBg: "bg-gradient-to-br from-blue-700 to-indigo-900"
        },
        {
            icon: Lightbulb,
            title: "Top 10 interns will be celebrated with amazing rewards & recognition!",
            color: "from-indigo-700 to-blue-900",
            bgColor: "bg-indigo-50",
            iconBg: "bg-gradient-to-br from-indigo-700 to-blue-900"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        PROCESS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">
                            Rules & Selection
                        </span>
                        <br />
                        <span className="text-gray-800">Process</span>
                    </h2>
                </div>

                {/* Rules Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {rules.map((rule, index) => (
                        <div
                                key={index}
                                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-200 overflow-hidden ${rule.bgColor} hover:scale-105 rounded-2xl`}
                        >
                                <div className="p-8 text-center relative h-full flex flex-col items-center justify-center">
                                        {/* Icon Circle */}
                                        <div className={`w-20 h-20 mx-auto mb-8 rounded-full ${rule.iconBg} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                                                <rule.icon className="w-10 h-10 text-white" />
                                        </div>
                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 leading-relaxed">
                                                {rule.title}
                                        </h3>
                                        {/* Decorative gradient line */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${rule.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                                        {/* Floating decorative elements */}
                                        <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${rule.color} opacity-20 animate-pulse`}></div>
                                        <div className={`absolute bottom-8 left-4 w-2 h-2 rounded-full bg-gradient-to-r ${rule.color} opacity-30 animate-float`} style={{animationDelay: `${index * 0.5}s`}}></div>
                                </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                        Ready to showcase your exceptional skills and join our elite community of top performers?
                    </p>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-medium animate-pulse">
                        <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                        Applications Open Now!
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RulesSelectionProcess;
