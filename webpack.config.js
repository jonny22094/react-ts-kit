const path = require('path')
const {CheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/bootstrap.tsx',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, '/build'),
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
    new CheckerPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
}
