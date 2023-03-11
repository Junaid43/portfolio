/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // => media(min-width:640px)
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"

      }
    },
    colors: {
      black: "#191a19",
      yellow: "#fff734",
      green: "#68f590",
      grey: "#f3f3f3",
      "grey-light": "#fafafa",
      "green-light": "#d2eff1",
      white: "#fff",
    },
    fontFamily: {
      sans: [
        "Georgia", "sans-serif"
      ],
      serif: ["Merriweather", "serif"],
      display: [
        "Oswald"
      ]
    },

    fontSize: {
      sm: "o.8rem",
      base: "1rem",
      lg: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.5rem",
    }
  },
  plugins: [],
}
