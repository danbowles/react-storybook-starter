var path = require('path');
var webpack = require('webpack');
var postcss = require('postcss');
var postcssImport = require('postcss-import');
var postcssNested = require('postcss-nested');
var postcssCustomProps = require('postcss-custom-properties');
var autoprefixer = require('autoprefixer');
var postcssCalc = require('postcss-calc');
var postcssLost = require('lost');
var stylelint = require('stylelint');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: function(webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack,
      }),
      postcssNested,
      postcssCustomProps,
      autoprefixer,
      postcssCalc,
      postcssLost,
      stylelint(require('./stylelint.config.js')),
    ];
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ },
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'app'),
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss',
      },
      {
        test: /\.csv$/,
        loader: 'dsv',
      },
    ]
  }
};
