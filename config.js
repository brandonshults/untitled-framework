const path = require('path');

// The root of the project
const BASE_PATH = path.resolve(__dirname);

// The root of generated javascript
const BASE_OUT_PATH = path.resolve(BASE_PATH, 'dist');

module.exports = Object.freeze({
  BASE_PATH,
  BASE_OUT_PATH,

  // Where the source of javascript that is served to the user or server-side rendered lives.
  FRONTEND_SRC_PATH: path.resolve(BASE_PATH, './src'),

  // Where webpack generated frontend javascript that is served to the client lives.
  FRONTEND_CLIENT_OUT_PATH: path.resolve(BASE_OUT_PATH, 'client'),

  // Where webpack generated frontend javascript that is server-side rendered lives.
  FRONTEND_SERVER_OUT_PATH: path.resolve(BASE_OUT_PATH, 'server'),

  SERVER_PORT: 8080,
  WEBPACK_DEV_SERVER_PORT: 8081,
});
