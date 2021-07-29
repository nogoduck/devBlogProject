const { createProxyMiddleware } = require("http-proxy-middleware");
// const express = require("express");
// const app = express();

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://devlog-ad.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
// const proxy = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api",
//     proxy({
//       target: "https://devlog-ad.herokuapp.com",
//       changeOrigin: true,
//     })
//   );
// };
