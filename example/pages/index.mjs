export const View = state => [
  h1(state.title),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' GitList module. ',
    state.description,
  ]),

  GitBadges('magic-modules/module-list'),

  h2({ id: 'installation' }, 'installation'),
  Pre('npm install magic-modules/module-list'),

  h2({ id: 'usage' }, 'usage'),
  p('in a page or module View'),
  Pre(`
module.exports = () =>
  GitList({
    header: 'magic',
    desc: [ // also accepts longer key: description
      'magic static page and serverless webapp generator.',
      'client html/css/js size ~5kb.',
    ],

    // set id prefix for both list as well as items to allow hash navigation
    // container id will be set to \`gl-\${id}\`,
    // ul id will be set to \`gl-\${id}-ul\`
    // list item id will be set to \`gl-\${id}-li-\${org}-\${name}\`
    id: 'magic',          // falls back to org if not set
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
    id: 'gl-magic',
    header: 'magic',
    org: 'magic',
    description: [
      Link({ to: 'https://magic.github.io' }, '@magic'),
      ' static and serverless webapp generator.',
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
