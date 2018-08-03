import md5File from 'md5-file'

class AddHashedAssetsToHtmlPlugin {
  constructor({ assets }) {
    this.assets = assets
    this._onCompilation = this._onCompilation.bind(this)
    this._onBeforeHtmlGeneration = this._onBeforeHtmlGeneration.bind(this)
  }

  apply(compiler) {
    compiler.hooks.compilation
      .tap('htmlWebpackIncludeAssetsPlugin', this._onCompilation)
  }

  _onCompilation(compilation) {
    compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration
      .tapAsync('htmlWebpackIncludeAssetsPlugin', this._onBeforeHtmlGeneration);
  }

  _onBeforeHtmlGeneration(htmlPluginData, callback) {
    const cssAssets = this.assets
      .filter(a => a.src.endsWith('.css'))
      .map(this._injectAssetHash)

    const jsAssets = this.assets
      .filter(a => a.src.endsWith('.js'))
      .map(this._injectAssetHash)

    htmlPluginData.assets.js = htmlPluginData.assets.js.concat(jsAssets);
    htmlPluginData.assets.css = htmlPluginData.assets.css.concat(cssAssets);

    callback(null, htmlPluginData);
  }

  _injectAssetHash(asset) {
    const chunkHash = md5File.sync(asset.src)
    return asset.dest.replace('[hash]', chunkHash)
  }
}

export default AddHashedAssetsToHtmlPlugin
