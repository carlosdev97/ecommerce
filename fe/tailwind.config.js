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
    },
  },
  plugins: [],
};
