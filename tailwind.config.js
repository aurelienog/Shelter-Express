const { urlencoded } = require('express')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.hbs", "./public/scripts/**/*.js"]
,
  theme: {
    extend: {

      fontFamily: {

      },

      colors: {
        "primary-color": "#05c3a3", 
        "hover-color": "#fffdd0",
        "accent-color": "#588157", 
        "text-color": "#cfc0bd",
        },
      
        backgroundImage: {
          "open-menu": "url('../assets/bg-open-menu.png')",
          "close-menu": "url('../assets/bg-close-menu.svg')",
          "bg-topo-image": "url('../assets/topo.jpeg')",
          "bg-icons": "url('../assets/bg-icons.png')",
          "dog-shape": "url('../assets/dog-shape.jpg')"
        }
    },
  },
  plugins: [],
}

