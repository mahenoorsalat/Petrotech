import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#111111] pt-20 pb-10 text-white relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                {/* Brand */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-readex">EV <span className="text-neon-green">Auto</span></h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Empowering your journey with smart energy solutions. From instant fuel delivery to a vast EV charging network, we are your partner in mobility.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholders */}
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-green hover:text-black transition">𝕏</a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-green hover:text-black transition">In</a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-green hover:text-black transition">Ig</a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Company</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-neon-green transition">About Us</a></li>
                        <li><a href="#" className="hover:text-neon-green transition">Careers</a></li>
                        <li><a href="#" className="hover:text-neon-green transition">Blog</a></li>
                        <li><a href="#" className="hover:text-neon-green transition">Press</a></li>
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Services</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-neon-green transition">Fuel Delivery</a></li>
                        <li><a href="#" className="hover:text-neon-green transition">EV Charging</a></li>
                        <li><a href="#" className="hover:text-neon-green transition">Fleet Solutions</a></li>
                        <li><a href="#" className="hover:text-neon-green transition">Pricing</a></li>
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-neon-green transition">Help Center</a></li>
                        <li><a href="#" className="hover:text-neon-green transition">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-neon-green transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-neon-green transition">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; 2026 EV Auto Inc. All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Security</a>
                    <a href="#" className="hover:text-white">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
