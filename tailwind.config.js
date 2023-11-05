/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      CormorantGaramond: ["Cormorant Garamond"],
    },
    colors: {
      primary: "#F5F2EB",
      secondary: "#1B1B1B",
      white: "#ffffff",
      black: "#000000",
      third: "#ECE8DD",
      border: "#BC9559",
      button: "#BF954D",
    },
    extend: {},
  },
  plugins: [],
};
