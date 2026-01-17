import React from 'react';

const AppDownload = () => {
    return (
        <section className="px-6 py-20 md:px-12 relative z-10">
            <div className="glass-card p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between border border-white/10">

                {/* Background Image Sim */}
                <div className="absolute inset-0 bg-black z-0">
                    <img src="https://placehold.co/1400x500/111/444?text=Background" alt="bg" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
                </div>

                <div className="relative z-10 md:w-1/2 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                        Scan to <span className="text-neon-green">Download</span> App
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Available on your favorite store. Start your premium experience now.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <button className="bg-black border border-gray-600 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-neon-green transition">
                            <div className="w-6 h-6 bg-white rounded-full"></div> {/* Logo Placeholder */}
                            <div className="text-left">
                                <p className="text-xs text-gray-400">Available on</p>
                                <p className="text-white font-bold">App Store</p>
                            </div>
                        </button>
                        <button className="bg-black border border-gray-600 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-neon-green transition">
                            <div className="w-6 h-6 bg-white rounded-full"></div> {/* Logo Placeholder */}
                            <div className="text-left">
                                <p className="text-xs text-gray-400">Available on</p>
                                <p className="text-white font-bold">Google Play</p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Phone Mockups Placeholder */}
                <div className="relative z-10 mt-10 md:mt-0 md:w-1/2 flex justify-center gap-6">
                    <div className="w-40 h-80 bg-gray-800 rounded-3xl border-4 border-gray-600 shadow-2xl rotate-[-10deg]"></div>
                    <div className="w-40 h-80 bg-gray-800 rounded-3xl border-4 border-gray-600 shadow-2xl rotate-[5deg] translate-y-8"></div>
                </div>
            </div>
        </section>
    );
};

export default AppDownload;
