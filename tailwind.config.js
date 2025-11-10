/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This makes 'Inter' the default font, matching the index.html
        sans: ['Inter', 'sans-serif'],
      },
      // ADDED ANIMATIONS AND KEYFRAMES FROM YOUR CSS
      animation: {
        'blob': 'blob 7s infinite',
        'pulse-slow': 'pulse-slow 5s infinite ease-in-out',
        'spin-slow': 'spin-slow 15s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.1)', opacity: '0.4' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      // ADDED ANIMATION DELAYS
      // You can now use classes like `delay-2000` and `delay-4000`
      animationDelay: {
        '2000': '2s',
        '4000': '4s',
      },
    },
  },
  plugins: [],
}
