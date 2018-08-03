# add-hashed-assets-to-html-plugin
[![Build Status](https://travis-ci.org/jgramoll/add-hashed-assets-to-html-plugin.svg?branch=master)](https://travis-ci.org/jgramoll/add-hashed-assets-to-html-plugin)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a8177620695f401b93c393e42158e9c2)](https://www.codacy.com/project/jgramoll/add-hashed-assets-to-html-plugin/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jgramoll/add-hashed-assets-to-html-plugin&amp;utm_campaign=Badge_Grade_Dashboard)
[![Coverage Status](https://coveralls.io/repos/github/jgramoll/add-hashed-assets-to-html-plugin/badge.svg?branch=master)](https://coveralls.io/github/jgramoll/add-hashed-assets-to-html-plugin?branch=master)

## About

Add a JavaScript or CSS asset with chunk hash into the HTML generated by html-webpack-plugin. 

## Usage

In your webpack.config add AddHashedAssetsToHtmlPlugin with
the list of assets you want to add to your index.html

```js
plugins: [
  new CopyWebpackPlugin([
    {
      from: path.join(root, 'src/dependencies.css'),
      to:   path.join(root, 'dist/dependencies.[hash].css'),
    },
    {
      from: path.join(root, 'src/dependencies.js'),
      to:   path.join(root, 'dist/dependencies.[hash].js'),
    },
  ]),
  new HtmlWebpackPlugin(),
  new AddHashedAssetsToHtmlPlugin({
    assets: [
      {
        from: path.join(root, 'src/dependencies.css'),
        to:   path.join(root, 'dependencies.[hash].css'),
      },
      {
        from: path.join(root, 'src/dependencies.js'),
        to:   path.join(root, 'dependencies.[hash].js'),
      }
    ]
  })
]
```

### Output

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  <link href="/dependencies.ceb361c93fdb60f8a5139da1d8ba8947.css" rel="stylesheet"></head>
  <body>
  <script type="text/javascript" src="/dependencies.c21ffaef5051ba8a9a5104c7c850bd7b.js"></script></body>
</html>
```
