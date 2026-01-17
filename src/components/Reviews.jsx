import React from 'react';

const Reviews = () => {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">

            {/* Client Logos */}
            <div className="text-center mb-20 reveal">
                <h3 className="text-text-muted font-bold tracking-widest uppercase mb-8 text-sm">Trusted By Industry Leaders</h3>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                    {/* Placeholders for logos */}
                    {['Amazon', 'Uber', 'FedEx', 'DHL', 'Maersk'].map((brand, i) => (
                        <span key={i} className="text-2xl font-bold text-dark font-readex hover:text-primary hover:scale-110 transition duration-300 cursor-default">{brand}</span>
                    ))}
                </div>
            </div>

            {/* Stat Graphic */}
            <div className="max-w-7xl mx-auto bg-light rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between reveal">
                <div className="mb-8 md:mb-0">
                    <div className="text-6xl md:text-8xl font-bold text-primary mb-2 count-up">98%</div>
                    <p className="text-xl font-bold text-dark">Customer Satisfaction</p>
                    <p className="text-text-muted">Based on 15,000+ reviews across platforms.</p>
                </div>

                {/* App Promo */}
                <div className="flex items-center gap-12">
                    <div className="space-y-4">
                        <p className="font-bold text-lg text-dark">Upgrade your refuelling <br /> experience!</p>
                        <div className="flex gap-4">
                            <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm hover:bg-gray-800 transition hover:-translate-y-1 shadow-lg">
                                <span></span> App Store
                            </button>
                            <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm hover:bg-gray-800 transition hover:-translate-y-1 shadow-lg">
                                <span>▶</span> Google Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
