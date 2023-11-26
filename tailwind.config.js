module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green: { 300: "#6eeb83" },
        gray: {
          500: "#a5a5a5",
          900: "#272727",
          "900_47": "#27272747",
          "900_01": "#1c1b1f",
        },
        black: { 900: "#000000" },
        red: { A200: "#ff5e5b" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        lexenddeca: "Lexend Deca",
        dmserifdisplay: "DM Serif Display",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
