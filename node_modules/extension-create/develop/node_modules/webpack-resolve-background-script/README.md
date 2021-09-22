[action-image]: https://github.com/cezaraugusto/webpack-resolve-background-script/workflows/CI/badge.svg
[action-url]: https://github.com/cezaraugusto/webpack-resolve-background-script/actions
[npm-image]: https://img.shields.io/npm/v/webpack-resolve-background-script.svg
[npm-url]: https://npmjs.org/package/webpack-resolve-background-script

# webpack-resolve-background-script [![workflow][action-image]][action-url] [![npm][npm-image]][npm-url]

> Resolve background scripts defined in a WebExtension manifest file

Allows a WebExtension to link to background scripts defined the manifest file even after compilation. If your webpack config needs to copy the extension manifest to the output folder, this plugin ensures background scripts point to the right path.

## How it works

### Before compilation

#### Directory

```
./yourWebExtension/
├── public
│   └── manifest.json
└── src
    └── background.js
```

#### Manifest

```json
{
  "manifest_version": 2,
  "name": "Your browser extension",
  "version": "1.0",
  "background": {
    "scripts": [ "../src/background.js" ]
  }
}
```

### After compilation

#### Directory

```
./yourWebExtension
├── background.js
└── manifest.json
```

#### Manifest

```json
{
  "manifest_version": 2,
  "name": "Your browser extension",
  "version": "1.0",
  "background": {
    "scripts": [ "./background.js" ]
  }
}
```

## Usage

See [webpack.config.js example](./fixtures/webpack.config.js).

```js
const WebpackResolveBackgroundScript = require('webpack-resolve-background-script')

module.exports {
  plugins: [
    new WebpackResolveBackgroundScript(/* <path-to-dist-manifest-file> */)
  ]
}

```
## API

### new WebpackResolveBackgroundScript(manifestDistFilePath)

#### manifestDistFilePath

Type: `string`

Path to your webExtension manifest file after compilation.

## License

MIT (c) Cezar Augusto.
