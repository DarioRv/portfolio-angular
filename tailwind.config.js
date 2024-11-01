/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBEDFE",
          100: "#DCE0FE",
          200: "#BAC1FD",
          300: "#929EFC",
          400: "#6F7FFB",
          500: "#4D62FA",
          600: "#0C28F8",
          700: "#051BBC",
          800: "#041281",
          900: "#020940",
          950: "#01041E",
        },
      },
    },
  },
  plugins: [],
};
