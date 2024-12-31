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
        "primary-color": "#a7e7da", 
        "hover-color": "rgba(255,223,209,1)",
        "accent-color": "#fffdd0",
        "cta-color": "#11115b", 
        "text-color": "#cfc0bd",
        },
      
        backgroundImage: {
          "open-menu": "url('../assets/bg-open-menu.png')",
          "close-menu": "url('../assets/bg-close-menu.svg')",
          "bg-topo-image": "url('../assets/topo.jpeg')",
          "bg-icons": "url('../assets/bg-icons.png')",
          "dog-shape": "url('../assets/dog-shape.jpg')",
          "paper": "url('../assets/paper-textured.png')"
        }
    },
  },
  plugins: [],
}

