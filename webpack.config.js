var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [path.resolve(__dirname, 'main.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,         // Match both .js and .jsx files
      exclude: /node_modules/,
      loader: "babel",
      query:
      {
        presets:['react']
      }
    }]
  }
};

module.exports = config;
