/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos React
    "./public/index.html", // Archivo HTML principal
  ],
  theme: {
    extend: {
      fontFamily: {
        homemade: ["Homemade Apple", "serif"], // Define el nombre y la familia
      },
      colors: {
        customGray: "#D8D8D8",
        lightGray: "#F0F0F0",
        limeGreen: "#8DBC25",
        gainsboro: "#DCDCDC",
        smokeGray: "#979899",
        oliveGray: "#3A4132",
      },
    },
  },
  plugins: [],
};
