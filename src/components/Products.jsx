import React from 'react';

const Products = () => {
    const products = [
        {
            title: "Petrotech SmartBox",
            desc: "Industrial-grade IoT controller for stationary fuel tanks. Real-time level monitoring.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
            tag: "Hardware"
        },
        {
            title: "Corporate Fleet Card",
            desc: "Unified expense management for fuel and EV charging across 5000+ stations.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
            tag: "Fintech"
        },
        {
            title: "DC Fast Charger",
            desc: "High-capacity 240kW output chargers for heavy commercial electric vehicles.",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
            tag: "EV Infra"
        }
    ];

    return (
        <section id="hardware" className="py-24 px-6 md:px-12 bg-dark text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Proprietary Hardware & Tech</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Robust engineering designed for harsh industrial environments and high-volume logistics.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="bg-[#222] rounded-3xl p-2 pb-8 hover:-translate-y-2 transition duration-300 border border-white/5 shadow-xl group reveal" style={{ transitionDelay: `${index * 150}ms` }}>
                            <div className="bg-[#2a2a2a] rounded-2xl h-64 overflow-hidden mb-6 relative">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-500 grayscale group-hover:grayscale-0" />
                                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {product.tag}
                                </div>
                            </div>
                            <div className="px-6">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition">{product.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{product.desc}</p>
                                <button className="text-primary font-bold text-sm hover:text-white transition flex items-center gap-2 group-hover:translate-x-2 uppercase tracking-wider">
                                    Tech Specs <span>→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
