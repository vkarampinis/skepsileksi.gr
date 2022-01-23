const theme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        my: {
          blue: "#2796d8",
          green: "#93ad42",
        },
      },
      typography: (t) => ({
        DEFAULT: {
          css: {
            color: "#333",
            "h1, h2, h3, h4, h5, h6": {
              color: t("colors.pink.600"),
            },
            a: {
              color: t("colors.pink.600"),
              "&:hover": {
                color: t("colors.my.blue"),
              },
            },
          },
        },
      }),
      fontFamily: {
        body: [...theme.fontFamily.sans],
        header: ["IEP Comic", ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
