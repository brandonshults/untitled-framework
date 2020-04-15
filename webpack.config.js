const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const {
  WEBPACK_DEV_SERVER_PORT, FRONTEND_SRC_PATH, FRONTEND_SERVER_OUT_PATH, FRONTEND_CLIENT_OUT_PATH,
} = require('./config');

const baseConfig = {
  entry: {
    'pages/main': path.resolve(FRONTEND_SRC_PATH, 'pages/main.jsx'),
    'common/shell': path.resolve(FRONTEND_SRC_PATH, 'common/shell.jsx'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

const serverConfig = {
  ...baseConfig,
  target: 'node',
  externals: webpackNodeExternals(),
  output: {
    filename: '[name].js',
    path: FRONTEND_SERVER_OUT_PATH,
    libraryTarget: 'commonjs2',
  },
  devServer: {
    contentBase: './dist',
    port: WEBPACK_DEV_SERVER_PORT,
    writeToDisk: true,
  },
};

const clientConfig = {
  ...baseConfig,
  output: {
    filename: '[name].js',
    path: FRONTEND_CLIENT_OUT_PATH,
  },
  devServer: {
    contentBase: FRONTEND_CLIENT_OUT_PATH,
    port: WEBPACK_DEV_SERVER_PORT,
  },
};

module.exports = [serverConfig, clientConfig];
