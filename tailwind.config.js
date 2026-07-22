/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm darks — your original greys, now properly named
        // These are the backbone of the dark theme
        'charcoal':    '#1C1B1A',   // page background — warm dark, not cold black
        'surface': '#242321',   // cards, navbar — slightly lighter than base
        'surface2': '#2E2D2B',  // hover states, subtle elevation
        'border':  '#3A3937',   // your grey2 — dividers, input borders

        // Your original amber — richer and more golden than what I had
        'amber':       '#FFBF00',
        'amber-light': '#FFEEDA',
        'amber-dim':   '#A67C00', // darker amber for hover states on light surfaces

        // Text
        'snow':  '#F0EDE8',  // primary text — warm white, not pure white
        'muted': '#8C8A86',  // secondary text — warm gray
        'faint': '#5C5A57',  // disabled, placeholder text
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter':    ['Inter', 'sans-serif'],
        'jakarta':  ['"Plus Jakarta Sans"', 'sans-serif'],
        handwritten: ['Nothing You Could Do', 'cursive'],
        'cormorant':   ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}