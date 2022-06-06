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
  }
);
