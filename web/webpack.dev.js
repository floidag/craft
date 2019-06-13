const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  output: {
    publicPath: 'http://localhost:8282/',
  },
  devServer: {
    // https://webpack.js.org/configuration/dev-server/
    hot: true,
    hotOnly: false,
    inline: true,
    clientLogLevel: 'warning',
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    host: 'localhost',
    port: 8282,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    publicPath: 'http://localhost:8282/',
  },
})
