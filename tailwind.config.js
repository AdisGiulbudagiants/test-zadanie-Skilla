/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    colors: {
      lightBlue: "#F1F4F9",
      darkBlue: "#091336",
      blue: "#005FF8",
      yellow: "#FFD500",
      green: "#28A879",
      lightGreen: "#00A775",
      doubleLightGreen: "#DBF8EF",
      grey: "#D8E4FB",
      lightGrey: "#ADBFDF",
      black: "#122945",
      lightBlack: "#899CB1",
      red: "#EA1A4F",
      lightred: "#FEE9EF",
      white: "#fff",
    },
    textColor: {
      white: "#fff",
      grey: "#5E7793",
      lightGrey: "#899CB1",
      green: "#00A775",
      black: "#122945",
      red: "#EA1A4F",
      yellow: "#FFB800",
      blue: "#002CFB",
    },
    fontFamily: {
      Regular: ["SfRegular"],
      Medium: ["SfMedium"],
    },
    extend: {},
  },
  plugins: [],
})
