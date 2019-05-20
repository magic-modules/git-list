import { is } from '@magic/test'
import * as GitList from '../src/index.mjs'

export default [{ fn: () => GitList.View, expect: is.function, info: 'expect GitList.View to be a function' }]
