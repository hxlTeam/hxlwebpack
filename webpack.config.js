const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules','./loaders']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // path.resolve(__dirname,'./loaders/replaceLoader.js'),
          'replaceLoader',
          {
            loader: 'replaceLoaderAsync',
            options: {
              name: 'xl'
            }
          }
        ]
      }
    ]
  }
}