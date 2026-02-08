/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cafe: {
          base: '#1A0F0A',
          surface: '#251A15',
          cream: '#E8DCC4',
          gold: '#C5A880',
          muted: '#8A7E78',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'steam': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
}
