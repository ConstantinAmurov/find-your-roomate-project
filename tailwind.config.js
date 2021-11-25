const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: colors.blue,
      red: colors.rose,
    },
    extend: {
      transitionProperty: {
        height: 'height'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderWidth: ['hover', 'focus'],
      transform: ['hover'],
      
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
