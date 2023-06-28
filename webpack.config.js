const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		main: { import: "./src/index.js", dependOn: "assets" },
		assets: "./src/import_assets.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: "nhat mong",
			template: "./src/index.ejs",
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
		}),
	],
	devServer: {
		static: "./dist",
		port: 3000,
	},
	optimization: {
		runtimeChunk: "single",
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.ejs$/,
				use: ["html-loader", "template-ejs-loader"],
			},
			{
				// css
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				// images
				test: /.(png|jpg|jpeg|svg|gif)$/,
				type: "asset/resource",
				generator: {
					filename: "images/[name][ext]",
				},
			},
			{
				// videos
				test: /\.mp4$/,
				type: "asset/resource",
				generator: {
					filename: "videos/[name][ext]",
				},
			},
			{
				// audio
				test: /\.(mp3|wav)$/,
				type: "asset/resource",
				generator: {
					filename: "sound/[name][ext]",
				},
			},
		],
	},
};
