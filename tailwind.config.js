module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
    },
    minHeight: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      colorPrimary: "#FF498B",
    }),
    textColor: (theme) => theme("colors"),
    textColor: {
      colorPrimary: "#152C5B",
      colorSecondary: "#3252DF",
      colorText: "#B0B0B0",
      colorTextWhite: "#FFFFFF",
    },
    ripple: (theme) => ({
      colors: theme("colors"),
      darken: 0.1,
    }),
  },
  variants: {
    extend: { backgroundColor: ["disabled"], textColor: ["disabled"] },
  },
  plugins: [require("tailwindcss-ripple")()],
};
