const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env', ],
            env: {
              test: {
                plugins: [
                  'istanbul'
                ]
              }
            }
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  target: 'node'
}
