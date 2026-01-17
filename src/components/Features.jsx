import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Smart Metering",
            desc: "IoT-enabled precision dispensing ensures every drop is accounted for, eliminating pilferage.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
            )
        },
        {
            title: "Automated Supply Chain",
            desc: "AI-driven algorithms predict demand and schedule deliveries to prevent dry-outs.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: "Hybrid Fleet Support",
            desc: "Unified platform for managing both traditional fuel and EV charging expenses.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Safety Compliance",
            desc: "Adhering to global PESO and ISO safety standards for hazardous material handling.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Real-Time Analytics",
            desc: "Comprehensive dashboard for monitoring consumption, costs, and efficiency metrics.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="solutions" className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="section-title reveal">Enterprise-Grade Energy Ecosystem</h2>
                <p className="section-subtitle reveal">
                    We bridge the gap between traditional energy needs and modern technological efficiency.
                </p>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: List */}
                    <div className="space-y-8">
                        {features.map((item, index) => (
                            <div key={index} className="flex gap-6 group cursor-default reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                                <div className="w-16 h-16 bg-light flex-shrink-0 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition duration-300 shadow-sm border border-gray-100">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition">{item.title}</h3>
                                    <p className="text-text-muted leading-relaxed text-sm group-hover:text-gray-700">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Diagram / Image */}
                    <div className="relative flex justify-center items-center reveal delay-300">
                        <div className="w-[400px] h-[400px] bg-dark rounded-full flex items-center justify-center relative shadow-2xl hover:scale-105 transition duration-700 ring-8 ring-gray-100/50">
                            {/* Central Hub Graphic */}
                            <div className="w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center z-10 shadow-inner group relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition duration-500"></div>
                                <div className="text-center group-hover:scale-110 transition relative z-10">
                                    <p className="font-bold text-dark text-lg font-orbitron">PETRO</p>
                                    <p className="text-primary text-xs font-bold uppercase tracking-widest">Connect</p>
                                </div>
                            </div>

                            {/* Orbiting Satellites (simulated) */}
                            <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-lg animate-bounce duration-[3000ms] border-l-4 border-primary">
                                <span className="text-dark font-bold text-xs">IoT Cloud</span>
                            </div>
                            <div className="absolute bottom-16 left-4 bg-white p-4 rounded-xl shadow-lg animate-bounce duration-[4000ms] border-l-4 border-primary">
                                <span className="text-dark font-bold text-xs">Fleet API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
