/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          base: '#1A0F0A', // Deep Brown
          surface: '#251A15', // Slightly lighter brown
          cream: '#E8DCC4', // Text color
          gold: '#C5A880', // Accents
          muted: '#8A7E78', // Muted text
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'steam': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    }
  },
  plugins: [],
}