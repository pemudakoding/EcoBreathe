const path = require('path');
module.exports = {
  mode: 'production',
  entry: './resources/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'resources'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'resources/css'),
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.scss$/i,
        include: path.resolve(__dirname, 'resources/css'),
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    open: true,
    hot: true
  },
};