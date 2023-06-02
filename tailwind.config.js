module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
      extend: {
        colors: {
          'primary' : '#f3c614',
          'secundary': '#353535'
        },

        height: {
          '100': '25rem'
        }
      },
  },
  plugins: [],
};
