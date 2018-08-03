const webpackBase = require('./webpack.config')
const path = require('path')

module.exports = Object.assign({}, webpackBase, {
  entry: path.resolve(__dirname, 'test.js'),
  output: {
    path: path.resolve(__dirname, 'test-runner'),
    filename: 'index.js'
  },
})
