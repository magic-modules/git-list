## @magic-modules/git-list
this is the [@magic-modules](https://github.com/magic-modules/)
GitList module.

shows a list of git repositories belonging to a github/gitlab org.

[html docs / demo](https://magic-modules.github.io/git-list/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/git-list.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/git-list
[travis-image]: https://api.travis-ci.org/magic-modules/git-list.svg?branch=master
[travis-url]: https://travis-ci.org/magic-modules/git-list
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/git-list/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/git-list/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/git-list/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/git-list
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/git-list.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/git-list.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/git-list/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/git-list

#### install:
```bash
npm install --save-exact @magic-modules/git-list
```

#### usage:
```javascript
// in any component view
module.exports = () =>
  GitList({
    header: 'magic',
    desc: [ // also accepts longer key: description
      'magic static and serverless webapp generator.',
      'client html/css/js size ~5kb.',
    ],
    org: 'magic',
    host: 'gitlab', // github is default and can be omitted
    class: 'custom-container-class',
    items: [
      {
        name: 'core',
        desc: '@magic/core library. grundstein.' // also accepts longer key: description
      },
    ],
  })
```

thats it.

