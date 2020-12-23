module.exports = {
  future: {},
  purge: ['./pages/**/*.ts', './components/**/*.ts'],
  theme: {
    extend: {
      flex: {
        2: '2 1 auto',
        3: '3 1 auto',
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
