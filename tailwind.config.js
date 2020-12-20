module.exports = {
  future: {},
  purge: ['./pages/**/*.ts', './components/**/*.ts'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
