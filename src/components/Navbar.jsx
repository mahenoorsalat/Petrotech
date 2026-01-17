import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

                {/* Logo */}
                <a href="#" className={`text-2xl font-bold font-orbitron tracking-widest transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}>
                    PETRO<span className="text-primary">TECH</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['Solutions', 'Hardware', 'About Us', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className={`text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="btn-primary">
                        Client Portal
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl z-50">
                    <span className={`${(scrolled || isOpen) ? 'text-dark' : 'text-white'}`}>
                        {isOpen ? '✕' : '☰'}
                    </span>
                </button>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {['Solutions', 'Hardware', 'About Us', 'Contact'].map((item) => (
                        <a key={item} href="#" className="text-2xl font-bold text-dark hover:text-primary uppercase" onClick={() => setIsOpen(false)}>
                            {item}
                        </a>
                    ))}
                    <button className="btn-primary w-48">Client Portal</button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
