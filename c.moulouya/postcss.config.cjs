module.exports = {
  plugins: [
    require('postcss-rtlcss')({
      mode: 'combined', // Creates a combined output with [dir="rtl"] selectors
    }),
  ],
};
