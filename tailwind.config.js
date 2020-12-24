module.exports = {
  future: {},
  purge: ['./pages/**/*.ts', './components/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['nunito', 'ui-sans-serif'],
      },
      scale: {
        101: '1.01',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
