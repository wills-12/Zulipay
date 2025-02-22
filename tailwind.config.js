/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    screens: {
      sm: "567px",
      md: "900px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        custom: ["Custom", "sans-serif"],
      },
      colors: {
        darkBlue: "rgb(52, 114, 172)",
        lightBlue: "rgb(105, 159, 209)",
        lightGray: "rgb(179, 184, 190)",
        veryLightGray: "rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
};
