/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "ui-sans-serif", "system-ui"],
        lilita: ["Lilita One", "ui-sans-serif", "system-ui"],
        nunito: ["Nunito", "ui-sans-serif", "system-ui"],
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
        ubuntu: ["Ubuntu", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brown: {
          100: "#EEE2D1",
          200: "#D9C2A2",
          300: "#C5A471",
          400: "#B0833F",
          500: "#9C6C25",
          600: "#8B621F",
          700: "#774E19",
          800: "#5F3F14",
          900: "#4B3210",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
