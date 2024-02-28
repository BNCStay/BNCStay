const colors = require('tailwindcss/colors')

module.exports = {
  screens: {
    xxs: "0",
    xs: "249px",
    sm: "599px",
    md: "959px",
    lg: "1279px",
    xl: "1919px",
  },
  colors: {
    black: "#000",
    white: "#fff",
    primary: '#007bff'
  },
  fontFamily: {
    sans: ["Noto sans display", "sans-serif"],
  },
  extend: {
    spacing: {
      128: "32rem",
      144: "36rem",
    },
    borderRadius: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
    },
  },
};
