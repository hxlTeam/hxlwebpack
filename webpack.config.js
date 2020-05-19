const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          path.resolve(__dirname,'./loaders/replaceLoader.js'),
          {
            loader: path.resolve(__dirname,'./loaders/replaceLoaderAsync.js'),
            options: {
              name: 'xl'
            }
          }
        ]
      }
    ]
  }
}