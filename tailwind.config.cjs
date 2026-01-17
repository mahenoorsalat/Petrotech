/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-green': '#00D95F',
                'dark-bg': '#050505',
                'card-bg': '#0F0F0F',
                'surface': '#1A1A1A',
            },
            fontFamily: {
                'readex': ['"Readex Pro"', 'sans-serif'],
                'orbitron': ['"Orbitron"', 'sans-serif'],
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #050505 0%, #0a1f13 100%)',
                'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.0) 100%)',
            }
        },
    },
    plugins: [],
}
