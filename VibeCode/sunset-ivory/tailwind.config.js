/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        porcelain: "rgb(var(--bg) / <alpha-value>)", // #FFFFFA
        ink: "rgb(var(--ink) / <alpha-value>)",      // #080705
        card: "rgb(var(--card) / <alpha-value>)",
        plum: "#702632",   // Wine Plum
        rose: "#912F40",   // Burnt Rose
        charcoal: "#40434E", // Charcoal Blue
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
