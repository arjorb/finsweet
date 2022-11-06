/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './pages/*.html'],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle at 45%, #D7ECF5 10%, #DCF3F2 20%, white 60%)',

        'gradient-radial-second':
          'radial-gradient(at 40% bottom,#D7ECF5 20%, #DCF3F2 30%,white 60%);',

        'gradient-radial-product':
          'radial-gradient(at 90% top,#D7ECF5 15%, #DCF3F2 30%,white 50%);',

        'gradient-radial-feedback':
          'radial-gradient(circle at 1%, #D7ECF5 5%, #DCF3F2 10%, white 20%);',

        'gradient-radial-generation':
          'radial-gradient(circle at 70%, #D7ECF5 10%, #DCF3F2 12%, white 23%);',

        'gradient-radial-about':
          'radial-gradient(at 10% top,#D7ECF5 10%, #DCF3F2 20%,white 30%);',

        'gradient-radial-blog':
          'radial-gradient(circle at 30%, #D7ECF5 10%, #DCF3F2 20%, white 35%)',
      },
      colors: {
        'dark-200': '#1D2130',
        'dark-100': '#313852',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
