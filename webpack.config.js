const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    SharePlace: './src/SharePlace.js',
    MyPlace: './src/MyPlace.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: '/assets/scripts/',
    clean: true
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist') 
    },
    devMiddleware: {
      publicPath: '/assets/scripts/',
      writeToDisk: false 
    }
  }
};
