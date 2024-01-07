/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      h2Title: ['Chakra Petch', 'sans-serif'],
    },
    extend:{
      colors: {
        'firstColor': '#35aae5',
        'secondColor': '#b83e3c',
        'mainColor': '#5b7208',
        'contentColor': '#5b7208c0',
        'formColor': 'hwb(141 13% 58% / 0.22)',
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const myUtilities = {
          ".bg-secondary-color": { background: "#F0F0F0"},
          ".list_item": { 'counter-increment': 'step-counter'},
          ".list_item::before": {
                content: 'counter(step-counter)',
                display: 'inline-block',
                width: '1.5em',
                height: '1.5em', 
                color: '#5b7208',
                'text-align': 'center',
                'line-height': '1.5em',
                'border-radius': '50%',
                border: '1px solid #5b7208',
                'font-weight': 'bold', 
                'margin-right': '30px'
          }
        };
      addUtilities(myUtilities);
    }),
  ],
 }

