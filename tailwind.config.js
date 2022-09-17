/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      desktop: "992px",
      // => @media (min-width: 992px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
