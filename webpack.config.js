const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {test: /\.css$/, use: ['style-loader', 'css-loader']}, 
      { test: /\.(png|jpg)$/,  use: ['url-loader']}
    ]
  },
  plugins: [HtmlWebpackPluginConfig, new OpenBrowserPlugin({ url: 'http://localhost:8080' })]
}
