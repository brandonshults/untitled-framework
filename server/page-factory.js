const getServerPath = require('./get-server-path');
const getClientUrl = require('./get-client-url');

module.exports = function pageFactory(relativePath, title) {
  return Object.freeze({
    serverPath: getServerPath(relativePath),
    clientUrl: getClientUrl(relativePath),
    title,
  });
};