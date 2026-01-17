import React from 'react';

const Contact = () => {
    return (
        <section className="px-6 py-20 md:px-12 relative z-10 bg-white" id="contact">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 bg-dark rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                {/* Left: Info */}
                <div className="space-y-8 z-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Get in <span className="text-primary">Touch</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Have questions about our enterprise solutions or need immediate assistance? Our support team is ready to help.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#222] rounded-full flex items-center justify-center text-primary shrink-0 border border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Call Us</h3>
                                <p className="text-gray-400 text-sm">Mon-Fri from 8am to 5pm.</p>
                                <p className="text-white font-bold mt-1">+1 (555) 000-0000</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#222] rounded-full flex items-center justify-center text-primary shrink-0 border border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Email Us</h3>
                                <p className="text-gray-400 text-sm">Speak to our friendly team.</p>
                                <p className="text-white font-bold mt-1">support@petrotech.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#222] rounded-full flex items-center justify-center text-primary shrink-0 border border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Visit Us</h3>
                                <p className="text-gray-400 text-sm">Visit our corporate office.</p>
                                <p className="text-white font-bold mt-1">123 Innovation Drive, Tech City</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="z-10 bg-[#1a1a1a] p-8 rounded-3xl border border-white/5">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition placeholder-gray-600" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition placeholder-gray-600" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                            <input type="email" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition placeholder-gray-600" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                            <textarea rows="4" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition placeholder-gray-600" placeholder="How can we help you?"></textarea>
                        </div>

                        <button className="w-full btn-primary hover:shadow-xl transition transform active:scale-95 mt-4">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
