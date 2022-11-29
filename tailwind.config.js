/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'GhibliNormal': ['Ghibli'],
      'GhibliBold': ['GhibliBold']
    },
    extend: {
      boxShadow: {
      '3xl': '3px 2px 1px 0px rgb(0,0,0)',
      'greenxl': '3px 2px 1px 0px rgb(16, 179, 168)'
    },
      backgroundImage: {
        'fundo': "url('/src/screens/FilmsScreem/fundoHome.png')"
      },
      margin: {
        '1p': '1%',
        '5p': '5%',
        '65p': '65%',
        '100p': '100%',
        '75p': '-75%',
        '5': '5%',
        '25': '25%',
        '15':'15%',
        '40': '40%',
        '20': '20px',
        '70': '70%',
        '3': '3vh',
        '50': '50px',
      },
      width:{
        '70': '70%'
      }
    },
  },
  plugins: [],
}