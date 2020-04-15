const React = require('react');
const { renderToString } = require('react-dom/server');
const isProduction = require('./is-production');
const shellComponent = require('../dist/server/common/shell').default;

module.exports = function renderReactPageToString(page, pageProps, shellProps) {
  let pageComponent;
  if (isProduction()) {
    pageComponent = require(page.serverPath).default;
  } else {
    delete require.cache[require.resolve(page.serverPath)];
    pageComponent = require(page.serverPath).default;
  }

  const pageElement = React.createElement(pageComponent, pageProps);
  const pageWithShell = React.createElement(shellComponent, { ...shellProps, pageElement, clientUrl: page.clientUrl });

  return `
    <!doctype html>
    ${renderToString(pageWithShell)}
  `;
};
