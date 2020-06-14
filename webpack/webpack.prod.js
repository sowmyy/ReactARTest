const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = env => merge(common, {
  mode: 'production',
  // externals: {
  //   config:
  //   JSON.stringify(
  //     merge(
  //       require('../app/config/base.json'),
  //       env.deploy === 'prod' ? require('../app/config/prod.json') : require('../app/config/dev.json'),
  //     ),
  //   ),
  // },
  module: {
    rules: [
      {
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				],
			},
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
    new webpack.DefinePlugin({
      PRODBUILD: JSON.stringify(env.deploy === 'prod'),
      // DEVBUILD: JSON.stringify(env.deploy === 'dev'),
      LOCAL: JSON.stringify(false)
    }),
    new CompressionPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
});
