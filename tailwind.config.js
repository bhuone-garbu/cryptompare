module.exports = {
  future: {},
  purge: ['./pages/**/*.ts', './components/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['nunito', 'ui-sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
