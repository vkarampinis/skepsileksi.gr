const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        removeOriginalExtension: true,
        optimizeImagesInDev: true,
        // defaultImageLoader: "responsive-loader",
        responsive: {
          adapter: require("responsive-loader/sharp"),
          sizes: [640, 786, 1024, 1280, 1536],
          placeholder: false,
        },
      },
    ],
  ],
  {
    /* gerneral config of nextjs */
    reactStrictMode: true,
    images: {
      disableStaticImages: true,
    },
    async rewrites() {
      return [
        {
          source: "/js/script.js",
          destination: "https://microanalytics.io/js/script.js",
        },
        {
          source: "/api/event", // Or '/api/event/' if you have `trailingSlash: true` in this config
          destination: "https://microanalytics.io/api/event",
        },
        {
          source: "/logotherapeia",
          destination: "/logotherapia",
        },
      ];
    },
    async redirects() {
      return [
        {
          source: "/logotherapeia",
          destination: "/logotherapia",
          permanent: false,
        },
      ];
    },
  }
);
