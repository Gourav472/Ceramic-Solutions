/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: "Plus Jakarta Sans, sans-serif",
        manrope: "Manrope, sans-serif",
      },
      container: {
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
        },
        padding: {
          DEFAULT: "20px",
        }
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        '2xl': "1400px",
      },
      colors: {
        red: "#FF0000",
        offRed: "#FF0000BF",
        gray: "#14141426",
        offBlack: "#0000001F",
        lightPink: "#FFEBEB",
        offPink: "#B400011A",
      },
      backgroundSize: {
        "full": "100% 100%",
      },
      fontSize: {
        "custom-3xl": "56px",
        "custom-4xl": "64px",
      }
    },
  },
  plugins: [],
}

