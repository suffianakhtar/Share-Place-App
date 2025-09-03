const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'SharePlace': './src/SharePlace.js',
    'MyPlace': './src/MyPlace.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/',
    clean: true
  },
  devtool: false
};