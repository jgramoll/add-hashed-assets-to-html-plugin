const files = require.context('./src', true, /\.test\.js$/)

files.keys().forEach(x => {
  files(x)
})
