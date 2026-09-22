/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#243B53",      // deep cool navy, primary
        alabaster: "#F5F8FC", // cool, light background
        clay: "#6E93C4",      // soft cool blue accent
        sage: "#D3DEF0",      // pale periwinkle secondary
        stone: "#5B6B7D",     // cool slate body text
      },
      fontFamily: {
        serif: ["var(--font-fraunces)"],
        sans: ["var(--font-inter)"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
