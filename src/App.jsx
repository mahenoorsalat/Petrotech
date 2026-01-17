import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const items = document.querySelectorAll('.reveal');
        items.forEach(item => observer.observe(item));

        return () => items.forEach(item => observer.disconnect());
    }, []);

    return (
        <div className="bg-white min-h-screen text-text-main selection:bg-primary selection:text-white pb-0">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <About />
                <Products />
                <Reviews />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
