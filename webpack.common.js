const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack'); 
const path = require('path');

module.exports = {
    entry: './src/index.js',
    entry: {
             app: './src/app.js'
           },
    output: {
      filename: 'bundle.js',
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
   module: {
     rules: [
       {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
            loader: 'babel-loader',
            }
       }
     ]
   },
   plugins: [
         new CleanWebpackPlugin(),
         new HtmlWebpackPlugin()
       ]
  }
