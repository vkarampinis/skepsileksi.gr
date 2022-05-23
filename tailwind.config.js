const theme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          black: "#333",
          white: "#fff",
          1: "#017DBB",
          2: "#0FD0FF",
          3: "#EC72DA",
          4: "#F7AEF8",
        },
      },
      typography: (t) => ({
        DEFAULT: {
          css: {
            color: "#333",
            "h1, h2, h3, h4, h5, h6": {
              color: t("colors.color.black"),
            },
            a: {
              color: t("colors.color.3"),
              "&:hover": {
                color: t("colors.color.1"),
              },
            },
          },
        },
      }),
      fontFamily: {
        body: [...theme.fontFamily.sans],
        header: ["Ubuntu", "IEP Comic", ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
