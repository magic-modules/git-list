module.exports = state => [
  h1(state.title),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' GitList module.',
    state.description,
  ]),

  GitBadges({
    project: 'magic-modules/module-list',
    appveyor: 'jaeh/module-list',
  }),

  h2({ id: 'installation' }, 'installation'),
  Pre('npm install magic-modules/module-list'),

  h2({ id: 'require' }, 'require'),
  p('first add the component to the assets'),
  Pre(`
// assets/index.js
module.exports = {
//...other exports
GitList: require('@magic-modules/module-list'),
}`),

  h2({ id: 'usage' }, 'usage'),
  p('in a page or component'),
  Pre(`
module.exports = () =>
  GitList({
    header: 'magic',
    desc: [ // also accepts longer key: description
      'magic static page and serverless webapp generator.',
      'client html/css/js size ~5kb.',
    ],
    // set id prefix for both list as well as items to allow hash navigation
    // container id will be set to id,
    // list item id will be set to \`\${id}-item-\${org}-\${name}\`
    id: 'magic-list',
    org: 'magic',
    host: 'github',       // github is default, gitlab works too.
    class: 'custom-class',
    items: [
      { name: 'core', description: '@magic/core library. grundstein.' },
    ],
  })`),

  h2({ id: 'demo' }, 'demo'),
  p('this is what it looks like'),
  GitList({
    id: 'magic-list',
    header: 'magic',
    org: 'magic',
    description: [
      'magic static and serverless webapp generator.',
      ' client html/css/js size ~5kb.',
    ],
    class: 'custom-class',
    items: [{ name: 'core', description: '@magic/core library. grundstein.' }],
  }),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-modules/module-list/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
