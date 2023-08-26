/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: "300px",
      phone: "480px",
      tablet: "768px",
      desktopMini: "992px",
      desktop: "1024px",
      large: "1260px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 5px 25px #00000040",
        "4xl": "0px 3px 15px #6B6B6B1A",
      },
      colors: {
        primaryGreen: "#015249",
        secondaryGreen: "#043933",
        darkGray: "#00000040",
        lightGreen: "#39B54A",
        danger: "#D80000",
        silverTree: "#57BC90",
        sherphaBlue: "#004B40",
      },
      width: {
        400: "25rem",
        26: "6.813rem",
      },
      height: {
        38: "9.375rem",
        25: "6.563rem",
      },
      borderRadius: {
        md: "1.25rem",
      },
      padding: {
        17: "4.375rem",
        18: "4.688rem",
        52: "3.25rem",
      },
      margin: {
        17: "4.375rem",
        18: "4.688rem",
      },
      fontSize: {
        40: "2.5rem",
        22: "1.375rem",
      },
      flex: {
        0.3: "0.3",
        0.4: "0.4",
        0.6: "0.6",
      },
    },
  },
  plugins: [],
};
