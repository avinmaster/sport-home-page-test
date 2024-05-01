/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-gradient': 'linear-gradient(156.57deg, #EF33F2 -18.35%, #3544DC 117.49%)',
        'card-pattern': 'url("/public/Mask Copy.png")',
      },
      backgroundColor: {
        'icon-pattern': '#00A2FF',
        'dark-opacity': '#000000B0',
        'button-purple': '#CB37EE',
        'white-pattern': '#F5F6FA',
        'circle-pattern': '#D8D8D8',
        'footer-pattern': '#7C3DE4',
      },
      textColor: {
        't-gray': '#3E4E5E'
      },
      fontFamily: {
        'roboto-condensed': ['RobotoCondensed', 'Segoe UI', 'serif'],
        'roboto': ['Roboto', 'Segoe UI', 'serif'],
        'bebas-neue': ['BebasNeue', 'Segoe UI', 'serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}