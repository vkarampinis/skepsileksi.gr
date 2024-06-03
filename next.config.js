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
    i18n: {
      locales: ["el"],
      defaultLocale: "el",
    },
    async rewrites() {
      return [
        {
          source: "/ingest/static/:path*",
          destination: "https://eu-assets.i.posthog.com/static/:path*",
        },
        {
          source: "/ingest/:path*",
          destination: "https://eu.i.posthog.com/:path*",
        },
        {
          source: "/js/script.js",
          destination: "https://app.microanalytics.io/js/script.js",
        },
        {
          source: "/api/event", // Or '/api/event/' if you have `trailingSlash: true` in this config
          destination: "https://app.microanalytics.io/api/event",
        },
        {
          source: "/logotherapeia",
          destination: "/logotherapia",
        },
      ];
    },
    skipTrailingSlashRedirect: true,
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
