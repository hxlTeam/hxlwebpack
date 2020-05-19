const path = require('path');
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  plugins: [
    new CopyrightWebpackPlugin({
      name: '传递参数'
    })
  ],
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