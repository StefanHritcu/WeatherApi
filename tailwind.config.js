/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xs": "359px",
        tablet: "768px",
        tabletLarge: "800px",
        tabletExtra: "880px",
        laptop: "1200px",
      },
    },
  },
  plugins: [],
};
