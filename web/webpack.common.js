const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // entry: ['babel-polyfill', './js/index.js'],
  entry: ['./js/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'assets')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        // https://webpack.js.org/loaders/sass-loader/
        test: /\.(css|scss)$/,
        include: [
          path.resolve(__dirname, 'css'),
        ],
        use: [
          'style-loader',
          'css-loader',
          {
            // Auto prefix.
            // https://webpack.js.org/loaders/postcss-loader/
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [require('autoprefixer')()],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    // Write out style and script include tag for PHP.
    new HtmlWebpackPlugin({
      filename: 'assets.twig',
      inject: false,
      minify: {},
      path: path.resolve(__dirname, './assets'),
      template: 'HtmlWebpackPluginTemplate.html',
    }),
  ],
  stats: {
    colors: true,
  },
};
