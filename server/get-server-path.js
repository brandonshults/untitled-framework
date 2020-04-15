/*
 * Given a relative filesystem path, get a path to a server-side bundle.
 * This is a string representing a file that has been generated by webpack that lives on the local file system.
 */
const path = require('path');
const { FRONTEND_SERVER_OUT_PATH } = require('../config');

module.exports = function getServerPath(relativePath) {
  return path.resolve(path.join(FRONTEND_SERVER_OUT_PATH, relativePath));
};
