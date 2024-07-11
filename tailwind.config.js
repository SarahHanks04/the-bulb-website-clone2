/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'zoom-in-out': {
          '0%, 100%': {transform: 'scale(1)' },
          '50%': {transform: 'scale(1.1)' },
        },
        marquee: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(-100%)'},
        },
      },
      animation: {
          'zoom-in-out': 'zoom-in-out 3s ease-in-out infinite',
          marquee: 'zoom-in-out 3s linear infinite',
      },

      fontFamily: {
        gothic: ["Gothic A1", "sans-serif"],
      }
    },
  },
  plugins: [],
}


