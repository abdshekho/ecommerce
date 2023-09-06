/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });
module.exports = withMT({
  //to convert code tailwind to css 
  // mod: 'jit',
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        
      },
      colors: {
        bg: {
          default: "#f8f9ff",
          cared: "#f1f3fa",
        },
        darkbg:{
          default:"#20222f",
          card:"#252b43",
          dark:"#1d2029",
        },
        mainBlue: "#2196f3",
        mainGray: "#474751",
        tooltip: "#000000c2",
        facebook: "#1791f0",
        twitter: "#1da1f5",
        mainGreen: "#3fac8e"
      }
    },
  },
  plugins: [],
});