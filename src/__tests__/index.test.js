import Subject from '../index'
import { assert } from 'chai'

describe('add-hashed-assets-to-html-plugin', function() {
  function compile(subject) {
    let pluginResult
    const htmlPluginData = {
      assets: {
        js: ['original.js'],
        css: ['original.css']
      }
    }
    const mockCompilation = {
      hooks: {
        htmlWebpackPluginBeforeHtmlGeneration: {
          tapAsync(_name, callback) {
            callback(htmlPluginData, (_error, result) => {
              pluginResult = result
            })
          }
        }
      }
    }
    subject.apply({
      hooks: {
        compilation: {
          tap(_name, callback) {
            callback(mockCompilation)
          }
        }
      }
    })
    return pluginResult
  }

  describe('css assets', function() {
    const subject = new Subject({
      assets: [
        {
          src: 'src/__tests__/fixtures/test-source.css',
          dest: 'test-dest.[hash].css'
        }
      ]
    })

    it('adds to html plugin', function() {
      assert.deepEqual(compile(subject).assets.css, [
        'original.css',
        'test-dest.d41d8cd98f00b204e9800998ecf8427e.css'
      ])
    })
  })

  describe('js assets', function() {
    const subject = new Subject({
      assets: [
        {
          src: 'src/__tests__/fixtures/test-source.js',
          dest: 'test-dest.[hash].js'
        }
      ]
    })

    it('adds to html plugin', function() {
      assert.deepEqual(compile(subject).assets.js, [
        'original.js',
        'test-dest.d41d8cd98f00b204e9800998ecf8427e.js'
      ])
    })
  })
})
