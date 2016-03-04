'use strict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src/app');
const BUILD_DIR = path.resolve(__dirname, 'src/build');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: APP_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  //  entry: [
  //    'babel-polyfill',
  //    './src/main',
  //    'webpack-dev-server/client?http://localhost:8080'
  //  ],
  //  output: {
  //    publicPath: '/',
  //    filename: 'main.js'
  //  },

  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
  //  devtool: 'source-map',
  //  module: {
  //    loaders: [
  //      {
  //        test: /\.js$/,
  //        include: APP_DIR,
  //        loader: 'babel-loader',
  //        query: {
  //          presets: ["es2015"],
  //        }
  //      }
  //    ]
  //  },
  //  devServer: {
  //    contentBase: './src'
  //  },
  //  debug: true
};
