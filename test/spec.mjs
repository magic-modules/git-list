import { is } from '@magic/test'
import { GitList } from '../src/index.mjs'

export default [{ fn: () => GitList, expect: is.function, info: 'expect a function' }]
