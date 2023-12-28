/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
        colors: {
            dark: "#202023",
            light: "#f1e7db",
            primary: "#319795",
            primaryDark: "#81e6d9"
        }
    },
    screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" }, 
        sm: { max: "639px" },
        xs: { max: "479px" },
    }
  },
  plugins: [],
}