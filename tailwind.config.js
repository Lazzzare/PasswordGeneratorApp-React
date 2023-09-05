/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlack: "#24232C",
        grey: "#817D92",
        white: "#E6E5EA",
        darkBlack: "#18171F",
        green: "#A4FFAF",
        red: "#F64A4A",
        orange: "#FB7C58",
        yellow: "#F8CD65",
        bgColor: "#14131B",
      },
    },
  },
  plugins: [],
};
