const webpack = require('webpack');
const path = require('path');

const mainPath = path.resolve(__dirname, 'src/scripts', 'main.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    cache: true,
    // mode: 'production',
    entry: {
      app: mainPath
    },
    output: {
      filename: 'app.bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    optimization: {
      minimize: true
    }
};
