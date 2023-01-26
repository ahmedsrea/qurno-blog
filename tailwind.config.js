/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      WorkSans: ["Work Sans", "sans-serif"],
      CreteRound: ["Crete Round", "sans-serif"],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
