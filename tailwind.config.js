/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const special = plugin(function ({ addUtilities }) {
  addUtilities({
  })
})

module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes : {
        floating1 : {
          '0%': {transform: 'translate(0, 0px) rotate(0.0deg)'},
          '50%' : {transform: 'translate(0,10px) rotate(0deg)'},
          '100%' : {transform: 'translate(0, -0px) rotate(0.0deg)'},
        },
        floating2: {
          '0%': {transform: 'translate(0, 0px) rotate(0.0deg)'},
          '50%' : {transform: 'translate(5px,-15px) rotate(3deg)'},
          '100%' : {transform: 'translate(0, -0px) rotate(0deg)'},
        },
        floating3: {
          '0%': {transform: 'translate(0, 0px) rotate(0.0deg)'},
          '50%' : {transform: 'translate(-15px,-15px) rotate(-5deg)'},
          '100%' : {transform: 'translate(0, -0px) rotate(0deg)'},
        },
        floating4: {
          '0%': {transform: 'translate(0, 0px) rotate(0.0deg)'},
          '50%' : {transform: 'translate(20px,45px) rotate(10deg)'},
          '100%' : {transform: 'translate(0, -0px) rotate(0deg)'},
        }
      },
      animation : {
        'floating1' : 'floating1 6s infinite ease-in-out',
        'floating2' : 'floating2 5s infinite ease-in-out',
        'floating3' : 'floating3 7s infinite ease-in-out',
        'floating4' : 'floating4 17s infinite ease-in-out'
      }
    },
  },
  plugins: [
    special,
    require("@xpd/tailwind-3dtransforms"),
    
  ],
};
