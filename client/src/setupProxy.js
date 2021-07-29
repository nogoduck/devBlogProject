const { createProxyMiddleware } = require('http-proxy-middleware');

const staticURI = process.env.STATIC_URI || 'http://localhost:5050/';

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: staticURI,
      changeOrigin: true,
    })
  );
};
