[action-image]: https://github.com/cezaraugusto/fancy-json-stringify/workflows/CI/badge.svg
[action-url]: https://github.com/cezaraugusto/fancy-json-stringify/actions
[npm-image]: https://img.shields.io/npm/v/fancy-json-stringify.svg
[npm-url]: https://npmjs.org/package/fancy-json-stringify

# fancy-json-stringify [![workflow][action-image]][action-url] [![npm][npm-image]][npm-url]

> A fancy way to convert a JavaScript value to JSON

This module is a wrapper around [JSON.strigify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringifyv) with an EOL. Defaults to no replacer and white space identation of 2.

## Installation

```
npm install fancy-json-stringify
```

## Usage

```js
const fancyJsonStringify = require('fancy-json-stringify')

fancyJsonStringify({hello:'world'})
```

Above results with appropriate EOL, which is why it's fancy :P

```json
{
  "hello": "world"
}

```

## API

### fancyJsonStringify(value, replacer, space)

#### value

A JavaScript value to be converted.

#### replacer

A function that transforms the results. Defaults to `null`.

#### space

Adds indentation, white space, and line breaks to the return-value. Defaults to `2`.

## License

MIT (c) Cezar Augusto.
