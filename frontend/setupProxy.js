const { createProxyMiddleware } = require('http-proxy-middleware');
const { API_URL } = require('@env');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      secure: false,
    })
  );
};
