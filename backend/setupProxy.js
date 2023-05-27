const { createProxyMiddleware } = require('http-proxy-middleware');
const { PORT } = process.env

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: PORT,
      changeOrigin: true,
    })
  );
};