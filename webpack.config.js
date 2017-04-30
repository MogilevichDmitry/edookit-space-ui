const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  devtool: 'eval-source-map',
  entry: './public/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url-loader?limit=10000000' },
      { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'] }
    ]
  },

  resolve: {
    alias: {
      config: path.resolve('public/config.less')
    }
  },

  devServer: {
    hot: true,
    historyApiFallback: true
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ]
       }
    })
  ],
}
