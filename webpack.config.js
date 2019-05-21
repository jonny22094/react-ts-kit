const path = require('path')
const {TsConfigPathsPlugin} = require('awesome-typescript-loader')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/bootstrap.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsConfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
}
