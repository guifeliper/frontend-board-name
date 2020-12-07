const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'inline-source-map',
  output: {
    publicPath: 'docs',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [
    new CheckerPlugin()
  ]
};
