const { createProxyMiddleware } = require('http-proxy-middleware');

const staticURI =
  process.env.NODE_ENV === 'production'
    ? 'https://devlog-ad.herokuapp.com'
    : 'http://localhost:5050/';

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: staticURI,
      changeOrigin: true,
    })
  );
};
