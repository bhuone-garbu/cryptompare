module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
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
};
