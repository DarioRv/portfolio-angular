/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FBE9EB",
          100: "#F8D8DB",
          200: "#F1ACB3",
          300: "#EA858F",
          400: "#E35E6B",
          500: "#DD0031",
          600: "#BB2030",
          700: "#8B1824",
          800: "#5B1017",
          900: "#30080C",
          950: "#160406",
        },
      },
      className: {
        "bg-primary": "bg-primary-500",
        "text-primary": "text-gray-600",
        "text-secondary": "text-gray-700",
        "border-primary": "border-primary-500",
      },
    },
  },
  plugins: [],
};
