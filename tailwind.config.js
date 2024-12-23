const { urlencoded } = require('express')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.hbs", "./public/scripts/**/*.js"]
,
  theme: {
    extend: {
      colors: {
        "primary-color": "#588157",
        "hover-color": "#fffdd0",
        "accent-color": "#f9e2dc", 
        "text-color": "#cfc0bd",
        },
      
        backgroundImage: {
          "open-menu": "url('../assets/bg-open-menu.png')",
          "close-menu": "url('../assets/bg-close-menu.svg')",
          "bg-topo-image": "url('../assets/topo.jpeg')",
          
        }
    },
  },
  plugins: [],
}

