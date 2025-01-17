const withOptimizedImages = require("next-optimized-images");
const withProgressBar = require("next-progressbar");
const withOffline = require("next-offline");
const path = require("path");

module.exports = withProgressBar(
  withOptimizedImages({
    webpack(config) {
      config.resolve.alias.images = path.join(__dirname, "images");
      return config;
    },
  })
);

// [
//   offline,
//   {
//     generateInDevMode: false,
//     workboxOpts: {
//       swDest: "static/service-worker.js",
//       cacheId: "iot-toolkit",
//       cleanupOutdatedCaches: true,
//       runtimeCaching: [
//         {
//           urlPattern: /^https?.*/,
//           handler: "NetworkFirst",
//           options: {
//             cacheName: "offlineCache",
//             networkTimeoutSeconds: 10,
//             expiration: {
//               maxEntries: 200,
//             },
//             cacheableResponse: {
//               statuses: [0, 200],
//               headers: {
//                 "x-test": "true",
//               },
//             },
//           },
//         },
//         {
//           urlPattern: /.jpg$/,
//           handler: "CacheFirst",
//           options: {
//             cacheName: "static-resources",
//             cacheableResponse: { statuses: [0, 200] },
//           },
//         },
//         {
//           urlPattern: /.png$/,
//           handler: "CacheFirst",
//           options: {
//             cacheName: "static-resources",
//             cacheableResponse: { statuses: [0, 200] },
//           },
//         },
//         {
//           urlPattern: /.svg$/,
//           handler: "CacheFirst",
//           options: {
//             cacheName: "static-resources",
//             cacheableResponse: { statuses: [0, 200] },
//           },
//         },
//         {
//           urlPattern: /.min.js$/,
//           handler: "CacheFirst",
//           options: {
//             cacheName: "static-resources",
//             cacheableResponse: { statuses: [0, 200] },
//           },
//         },
//       ],
//     },
//   },
// ],
