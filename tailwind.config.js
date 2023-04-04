/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#1db954',
        'black-1': '#121212',
        'black-2': '#212121',
        'black-3': '#535353',
        'gray': '#b3b3b3'
      },
    },
    fontFamily: {
      'sans-light': ['spotify-light'],
      'sans': ['spotify'],
      'sans-bold': ['spotify-bold'],
      'sans-black': ['spotify-black'],
    }
  },
  plugins: [],
}

