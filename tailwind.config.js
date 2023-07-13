/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#8ae234',
        secondary: '#729fcf',
      },
      fontFamily: {
        primary: ['Inter'],
      },
    },
  },
  daisyui: {},
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries',
    '@tailwindcss/typography',
    require('daisyui'),
  ],
};
