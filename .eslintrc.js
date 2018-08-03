module.exports = {
  extends: 'standard',
  rules: {
    'space-before-function-paren': 'off'
  },
  overrides: [
    {
      files: [ '**/*.test.js' ],
      env: {
        mocha: true
      }
    }
  ]
}
