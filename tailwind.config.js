/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "serif"],
        body: ["Inter", "serif"],
      },
      colors: {
        primary: {
          50: "#ff007f",
          100: "#00ff7f",
        },
        secondary: {
          50: "#0d1625",
          100: "#0c1320",
        },
      },
    },
  },
  plugins: [],
};
