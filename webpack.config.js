const path = require('path');

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    proxy: {
      '/api': {
        target: 'http://localhost:3000/'
      }

    },
    compress: true,
    port: 8080,
    publicPath: '/dist',
    historyApiFallback: true
  },
  module:{
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
