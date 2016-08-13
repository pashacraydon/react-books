var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [
      'src',
      'node_modules'
    ]
  },

  entry: {
    app: ['./src/app.js'],
    common: [
      'lodash'
    ]
  },

  output: {
    path: path.resolve(__dirname, './build'),
    pathinfo: true,
    filename: '[name].js'
  },

  module: {
    loaders: [
      { 
        test: /\.json$/, 
        loader: "json-loader" 
      },
      {
        test: /\.js$/,
        exclude: /\/node_modules/,
        loader: 'babel'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"],
          plugins: ["add-module-exports"],
        }
      }
    ],
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    new CopyWebpackPlugin([
      { from: 'src/static/css/app.css', to: 'app.css' }
    ])
  ]
};

