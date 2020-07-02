const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    entry: './src/public_api.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
  };