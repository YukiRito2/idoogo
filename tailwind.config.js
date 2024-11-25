/** @type {import('tailwindcss').Config} */
/*const {nextui} = require("@nextui-org/react");*/

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "pink-primary": "#FD2B73",
        "purple-primary": "#7800C8",
        "purple-dark": "#350058",
      },
      fontFamily:{
        "mulish":["Mulish", "sans-serif"]
      }
    },
  },
  /*plugins: [nextui()],*/
}

