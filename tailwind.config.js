/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
console.log(colors)

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './formkit.config.js',
    './node_modules/vue-tailwind-datepicker/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "vtd-primary": colors.indigo, // Light mode Datepicker color
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}