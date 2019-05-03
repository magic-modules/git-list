const { is } = require('@magic/test')
const GitList = require('../src')

module.exports = [
  { fn: () => GitList, expect: is.function, info: 'expect a function' },
]
