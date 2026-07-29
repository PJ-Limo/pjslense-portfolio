/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1C1B1A",
        surface: "#242321",
        surface2: "#2E2D2B",
        border: "#3A3937",
        amber: "#FFBF00",
        "amber-light": "#FFEEDA",
        "amber-dim": "#A67C00",
        snow: "#F0EDE8",
        muted: "#A8A49D",
        faint: "#A8A49D",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
