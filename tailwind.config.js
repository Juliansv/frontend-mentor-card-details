/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["."],
  theme: {
    fontFamily: {
      hanken: ["'Hanken Grotesk'"],
      space: ["'Space Grotesk'"],
    },
    extend: {
      screens: {
        xs: "375px",
        xxs: "341px",
      },
    },
  },
  plugins: [],
}

