const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ],
  },
};
