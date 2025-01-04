/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#1f2937'
      }
    },
  },
  plugins: [require("daisyui")],
}