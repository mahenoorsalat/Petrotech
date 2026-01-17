import React from 'react';

const About = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-light">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Left: Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] reveal group">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                        alt="Delivery Driver"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 hover:-translate-y-1 transition duration-300">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xl">
                            ⭐
                        </div>
                        <div>
                            <p className="font-bold text-dark">Top Rated</p>
                            <p className="text-xs text-text-muted">Most Trusted Service</p>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="space-y-8 reveal delay-200">
                    <h2 className="text-3xl md:text-5xl font-bold text-dark leading-tight">
                        Trusted Doorstep <br />
                        <span className="text-primary">Fuel Delivery</span> Service
                    </h2>
                    <p className="text-text-muted text-lg leading-relaxed">
                        Say goodbye to queues and pilferage. We bring high-quality fuel directly to your generators, fleets, and heavy machinery. Experience efficiency like never before.
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Zero Pilferage Assurance",
                            "Automated Digital Billing",
                            "24/7 Delivery Slots",
                            "IOT Enabled Smart Tankers"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                                <span className="font-medium text-dark">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="btn-primary">
                        Book a Delivery
                    </button>
                </div>

            </div>
        </section>
    );
};

export default About;
