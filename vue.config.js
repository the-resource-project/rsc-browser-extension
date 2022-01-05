const { join } = require('path')

const resolve = filepath => join(__dirname, filepath)

module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
          entries: {
            'content-script': [
              'src/content-scripts/content-script.js'
            ]
          }
        }
      }
    }
  },
  chainWebpack: config => {
    // Resource loader configuration:
    // 4 named rules must include this loader
    ['vue', 'vue-modules', 'normal', 'normal-modules'].forEach(rule => {
      config.module.rule('scss')
        .oneOf(rule)
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            resolve('src/popup/utils/_settings.scss')
          ]
        })
    })

    // Aliases configuration
    config.resolve.alias
      .set('node_modules', resolve('node_modules'))
      .set('__STATIC__', 'static')
  }
}
