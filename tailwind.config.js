/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'fundo': "url('/src/screens/FilmsScreem/fundoHome.png')"
      }
    },
  },
  plugins: [],
}