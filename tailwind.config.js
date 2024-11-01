/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBF0FF",
          100: "#D6E0FF",
          200: "#A9BEFF",
          300: "#80A0FE",
          400: "#527DFE",
          500: "#285FFE",
          600: "#013BEA",
          700: "#012DB2",
          800: "#011E75",
          900: "#000F3D",
          950: "#00081E",
        },
      },
    },
  },
  plugins: [],
};
