/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    'site/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['JetBrainsMono']
      }
    },
  },
  plugins: [],
}
