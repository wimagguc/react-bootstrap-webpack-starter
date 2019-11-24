const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = require('./webpack.config');

config.mode = 'production';

config.plugins = (config.plugins || []).concat([
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../assets'),
      to: path.resolve(__dirname, '../dist/assets'),
    },
    {
      from: path.resolve(__dirname, '../index.html'),
      to: path.resolve(__dirname, '../dist/index.html'),
    },
  ]),
]);

module.exports = config;
