/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "browsers-gradient":
          "linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
        "heading-gradient": "linear-gradient(90deg, #F87516 16%, #5E11FF 43%);",
      },
      screens: {
        'tablet': {'min': '768px', 'max': '1024px'},
      },

      fontFamily: {
        sora: ["Sora", "Sans-serif"],
        outfit: ["Outfit", "Sans-serif"],
      },
      colors: {
        starScoreColor: "#EEE5FFBD",
        testHead: "#EEE5FF",
      },

      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
};
