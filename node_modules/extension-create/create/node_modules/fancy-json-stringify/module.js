const os = require('os')

function fancyJsonStringify (value, replacer, space) {
  return JSON.stringify(value, replacer || null, space || 2) + os.EOL
}

module.exports = fancyJsonStringify
