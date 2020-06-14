const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = env => merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
    stats: 'errors-warnings',
  },
  externals: {
    config:
    JSON.stringify(
      merge(
        require('../app/config/base.json'),
        require('../app/config/dev.json'),
      ),
    ),
  },
  module: {
    rules: [
      {
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				],
			},
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODBUILD: JSON.stringify(false),
      LOCAL: JSON.stringify(true)
    }),
  ]
});
