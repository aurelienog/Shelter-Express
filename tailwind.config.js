const { urlencoded } = require('express')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.hbs", "./public/scripts/**/*.js"]
,
  theme: {
    extend: {
      colors: {
        "primary-color": "#11121a",
        "hover-color": "#272832",
        "accent-color": "#0071FF",
        "text-color": "#c9c9c9",
        },
      
        backgroundImage: {
          "bg-open-menu": "url('../images/bg-open-menu.png')",
          "bg-topo-image": "url('../images/topo.jpeg')"
        }
    },
  },
  plugins: [],
}

