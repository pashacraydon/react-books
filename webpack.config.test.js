var path = require('path');
var webpack = require('webpack');

config = require('./webpack.config.js');

config.entry = {
  modulesBooksApiTests: ['./tests/modules/books/api.tests'],
  modulesBooksActionsTests: ['./tests/modules/books/actions.tests'],
  modulesBooksReducerTests: ['./tests/modules/books/reducer.tests'],
  modulesBookDetailActionsTests: ['./tests/modules/book-detail/actions.tests'],
  modulesBookDetailApiTests: ['./tests/modules/book-detail/api.tests'],
  modulesBookDetailReducerTests: ['./tests/modules/book-detail/reducer.tests']
};

config.output = {
  path: path.resolve(__dirname, './tests/build'),
  pathinfo: true,
  filename: '[name].js'
};

module.exports = config;