const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xxs': ['0.625rem', '.75rem'],
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      }
    },
    colors: {
      black: colors.black,
      white: colors.white,
      'dark-gray': '#6E7777',
      'pale-gray': '#F3F5F5',
      'black-olive': '#3F3F37',
      'tea-green': '#C1E8C3',
      'rain-forest': '#377B65',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      pointerEvents: ['disabled'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
