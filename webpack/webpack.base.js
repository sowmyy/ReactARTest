const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		bundle: ['./app/index.js']
	},
	resolve: {
		modules: [path.resolve(process.cwd(), 'node_modules'), path.resolve(process.cwd(), 'app')],
		extensions: ['.mjs', '.js', '.jsx'],
		mainFields: ['browser', 'module', 'main']
	},
	output: {
		path: path.resolve(process.cwd(), 'build'),
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[name].[hash].chunk.js'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				use: ['babel-loader'],
			},
			{
				test: /\.(bin|jpg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
					}
				],
				include: /(models)/,
			},
			{
				test: /\.(mp4|png|svg|gif|woff|woff2|eot|ttf|otf|gltf|glb)$/,
				use: [
					'file-loader',
				],
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			minChunks: 1,
			automaticNameDelimiter: '~',
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'app/index.html',
			// favicon: 'public/assets/favicon.ico',
		}),
	],
};
