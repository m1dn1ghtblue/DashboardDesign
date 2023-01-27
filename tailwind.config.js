/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'black': '#1E1E24',
        'white': '#FFFFFF',
        'grey': '#EEEEEE',
        'dark-grey': '#999999',
        'blue-green': '#16BAC5',
        'orange': '#FB5012',
      },
      fontFamily: {
      },
      extend: {
        gridTemplateColumns: {
          'layout': '256px 1fr',
        }
      }
  },
  plugins: [],
}
