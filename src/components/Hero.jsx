import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                    alt="Petrotech Industrial Background"
                    className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full text-white mt-16">
                <div className="reveal">
                    <span className="uppercase tracking-[0.2em] text-primary font-bold text-sm mb-4 block">
                        Integrated Energy Solutions
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl mb-6 font-orbitron">
                        Powering the <br />
                        <span className="text-primary">Future of Logistics</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed border-l-4 border-primary pl-6">
                        From automated fuel delivery to enterprise EV charging infrastructure, Petrotech streamlines your energy supply chain with AI-driven precision.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 reveal delay-200">
                    <button className="btn-primary hover:scale-105 transition-transform">
                        Explore Solutions →
                    </button>
                    <button className="px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-dark transition-all duration-300 font-bold uppercase text-sm tracking-wide backdrop-blur-sm">
                        Partner With Us
                    </button>
                </div>

                {/* Stats / Trust Markers */}
                <div className="absolute bottom-12 left-6 md:left-12 flex gap-12 text-white/80 reveal delay-500">
                    <div>
                        <p className="text-3xl font-bold text-white">500+</p>
                        <p className="text-xs uppercase tracking-wider">Enterprise Clients</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white">12M+</p>
                        <p className="text-xs uppercase tracking-wider">Litres Delivered</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white">99.9%</p>
                        <p className="text-xs uppercase tracking-wider">Uptime Guaranteed</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
