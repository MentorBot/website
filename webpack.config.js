let path = require('path');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
let OpenBrowserPlugin = require('open-browser-webpack-plugin');
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
      { test: /\.(png|jpg|)$/, loader: 'url-loader?limit=200000'}
    ]
  },
  plugins: [HtmlWebpackPluginConfig, new OpenBrowserPlugin({ url: 'http://localhost:8080' })]
}
