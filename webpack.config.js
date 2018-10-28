const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const htmlWebpack = require('html-webpack-plugin');
const path = require('path');

module.exports =  function (env = {}) {
	return {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
			filename: 'main.js',
			path: path.join(__dirname, 'dist')
		},
	devtool: '#source-map',
	devServer: {
			port: 3000,
			contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true
		},
	module: {
      rules: [
        { test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/ },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.(scss|sass)?$/, use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        },
      ]
    },
    node: {
      __dirname: true,
      net: "empty",
      dns: "empty",
      fs: "empty"
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '~': path.join(__dirname, 'src'),
      }
    },
    plugins: [
      new htmlWebpack({template: path.join(__dirname, 'public', 'index.html')}),
      new dotenv()
    ]
  }
}