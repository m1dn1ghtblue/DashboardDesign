/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./**/*.html"],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'black': '#1E1E24',
            'white': '#FFFFFF',
            'grey': '#F1F1F1',
            'dark-grey': '#999999',
            'blue-green': '#16BAC5',

            'dark-90': '#2E2E38',
            'dark-80': '#373743',
            'dark-70': '#40404F',
            'dark-60': '#49495A',
            'dark-50': '#535365',
            'dark-40': '#5C5C70',
            'dark-30': '#65657B',
            'dark-20': '#6E6E87',
            'dark-10': '#787891',
            'dark-0': '#B0B0BF',
        },
        fontFamily: {
            rubik : 'Rubik',
        },
        extend: {
            gridTemplateRows: {
                'layout': '96px 1fr',
                'project-card': '64px 1fr 36px 24px'
            },
            gridTemplateColumns: {
                'layout': '256px 1fr',
                'content-layout': '1fr 300px',
                'project-grid': 'repeat(auto-fill, minmax(256px, 1fr))',
            },
            gridAutoRows: {
                'project-grid': '400px',
            }
        }
  },
  plugins: [],
}
