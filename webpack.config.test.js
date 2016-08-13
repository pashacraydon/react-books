var path = require('path');
var webpack = require('webpack');

config = require('./webpack.config.js');

config.entry = {
  testExamplePage: ['./test/testExamplePage']
};

config.output = {
  path: path.resolve(__dirname, './test/build'),
  pathinfo: true,
  filename: '[name].js'
};

module.exports = config;