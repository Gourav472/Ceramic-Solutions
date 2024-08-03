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
          sm: "580px",
          md: "800px",
          lg: "1000px",
          xl: "1180px",
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
        lightGray: "#B6B6B640",
      },
      backgroundSize: {
        "full": "100% 100%",
      },
      fontSize: {
        "custom-3xl": "56px",
        "custom-4xl": "64px",
      },
      backgroundImage: {
        'hero_bg': 'url(./assets/images/webp/hero_bg.webp)',
      }
    },
  },
  plugins: [],
}

