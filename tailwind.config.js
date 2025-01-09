/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'zen':['Zen Dots', 'serif'],
        'interr':['Inter', 'serif'],
      },
      keyframes: {
        marqueeRtl: {
          '0%': { transform: 'translateX(100%)' }, // Start off-screen to the right
          '100%': { transform: 'translateX(-100%)' }, // Move off-screen to the left
        },
        marqueeLtr: {
          '0%': { transform: 'translateX(-100%)' }, // Start off-screen to the left
          '100%': { transform: 'translateX(100%)' }, // Move off-screen to the right
        },
      },
      animation: {
        'marquee-rtl': 'marqueeRtl 10s linear infinite', // Fast right-to-left
        'marquee-ltr': 'marqueeLtr 10s linear infinite', // Fast left-to-right
      },
      colors:{
        'pink':'#ff3655'
      },
      
    },
  },
  plugins: [],
}

