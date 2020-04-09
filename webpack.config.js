const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = require('./env.variables');


const buildPath = path.resolve(__dirname, 'public/build');
const publicPath = path.basename(require.main.filename).includes('dev-server') ?
    `http://localhost:${env.WEBPACK_PORT}/build/` :
    '/build/';

const polyfills = [];

function entryFile(fileName) {
  polyfills.forEach(function(pollyfill) {
    require(pollyfill);
  });

  return polyfills.concat([ fileName ]);
}

module.exports = function(environment, options) {
  const isDevMode = options.mode === 'development';

  const stats = {
    colors: true,
    hash: false,
    timings: true,
    assets: false,
    modules: false,
    children: false,
  };

  return {
    stats: stats,
    devtool: isDevMode ? 'source-map' : false,
    entry: {
      app: entryFile('./src/index.js'),
    },
    output: {
      path: buildPath,
      publicPath: publicPath,
      filename: isDevMode ? '[name].bundle.js' : '[name].[hash].bundle.js',
    },
    resolve: {
      modules: [
        path.resolve(__dirname, ''),
        path.resolve(__dirname, 'node_modules'),
      ],
    },
    module: {
      rules: [ {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [ {
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            outputPath: 'images/',
          },
        } ],
      },
      ],
    },
    devServer: {
      host: '0.0.0.0',
      headers: { 'Access-Control-Allow-Origin': '*' },
      port: env.WEBPACK_PORT,
      stats: stats,
      contentBase: path.resolve(__dirname, 'public'),
    },
    optimization: {
      minimize: !isDevMode,
      minimizer: [new TerserPlugin()],
    },
    plugins: [
      new webpack.DefinePlugin(env.variables),
      new CleanWebpackPlugin({verbose: true}),
      new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        template: path.resolve(__dirname, 'src/index.html'),
        filename: path.resolve(__dirname, 'public/index.html'),
      }),
      new HtmlWebpackHarddiskPlugin(),
    ],
  };
};
