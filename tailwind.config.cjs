/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage:{
        banner:'url(/src/assets/Banner.png)',
        HandBg:'url(/src/assets/HandBg.png)'
      },
    },
  },
  plugins: [],
}
