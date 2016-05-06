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
      stylelint(require('../stylelint.config.js')),
    ];
  },
  module: {
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
