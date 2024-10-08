/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{vue ,html , js}'],
  theme: {
    extend: {
      backgroundColor: ['even', 'odd'],
      colors: {
        customColor: '#5c2c9e',
      },
    },
  },
  plugins: [],
};
