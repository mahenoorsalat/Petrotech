/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#00A651', // Corporate FuelBuddy-like Green
                'secondary': '#00543D', // Darker Green for depth
                'dark': '#1A1A1A', // Deep Slate for dark sections
                'light': '#F8F9FA', // Very light gray for backgrounds
                'text-main': '#333333', // Standard dark text
                'text-muted': '#666666', // Muted text
            },
            fontFamily: {
                'readex': ['"Readex Pro"', 'sans-serif'],
                'orbitron': ['"Orbitron"', 'sans-serif'], // Keep for Logo only
            },
            backgroundImage: {
                'industrial-hero': "url('https://placehold.co/1920x1080/1a1a1a/FFF?text=Industrial+Refinery+Background')",
            }
        },
    },
    plugins: [],
}
