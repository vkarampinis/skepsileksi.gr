const theme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");

//const colorBrand = 'var(--color-pretty)';

// Utils
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const px = (px) => `${px}px`;

module.exports = {
  important: true, // See https://tailwindcss.com/docs/configuration#important
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./hugo_stats.json"],
    mode: "all",
    options: {
      //whitelist: [ 'pl-1', 'pl-3' ],
      defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        els = els.tags.concat(els.classes, els.ids);
        return els;
      },
    },
  },
  plugins: [typography],
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
            h2: {
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
};
