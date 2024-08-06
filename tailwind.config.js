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
          sm: "640px",
          md: "768px",
          lg: "992px",
          xl: "1184px",
        },
        padding: {
          DEFAULT: "24px",
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
        primary: "#5757571A",
        red: "#FF0000",
        offRed: "#FF0000BF",
        gray: "#14141426",
        lightBlack: "#141414",
        offBlack: "#0000001F",
        lightBlack: "#141414",
        lightPink: "#FFEBEB",
        offPink: "#B400011A",
        lightGray: "#B6B6B640",
      },
      backgroundSize: {
        "full": "100% 100%",
      },
      fontSize: {
        "custom-2xl": "32px",
        "custom-3xl": "56px",
        "custom-4xl": "64px",
      },
      backgroundImage: {
        'hero_bg': 'url(./assets/images/webp/hero_bg.webp)',
        'touch_bg':'url(./assets/images/webp/touch_bg.webp)',
      },
      boxShadow: {
        "3xl": "0px 0px 12px 3px #B6B6B640",
        '4xl': '0px 2px 44px 3px #5757571A',
        '5xl': '0px 1px 28px 1px #4747471A',
        '6xl': '0px 2px 17px 3px #5757571A',
        '7xl': '0px 0px 12px 0px #FF0000 inset',
        '8xl': '0px 0px 12px 0px #FF0000',
      },

    }
  },
  plugins: [],
}

