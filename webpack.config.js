var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    "app": "./app/main.ts"
  },
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
    noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
  }

};
