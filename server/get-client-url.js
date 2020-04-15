/*
 * Given a relative filesystem path, get a url from which a client-side bundle will be served.
 * This will be different for production and dev since bundles are served from webpack-dev-server when deving.
 * For now these will just be hardcoded to localhost, but this can be changed for deployment.
 */
const path = require('path');
const isProduction = require('./is-production');
const {
  SERVER_PORT, WEBPACK_DEV_SERVER_PORT, FRONTEND_CLIENT_OUT_PATH, BASE_OUT_PATH,
} = require('../config');

module.exports = function getClientUrl(relativePath) {
  const clientUrlPrefix = path.relative(BASE_OUT_PATH, FRONTEND_CLIENT_OUT_PATH);
  return `http://localhost:${isProduction() ? SERVER_PORT : WEBPACK_DEV_SERVER_PORT}/${clientUrlPrefix}/${relativePath}`;
};
