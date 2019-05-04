const GitList = props => {
  let { items = [], org, host = 'github', header, desc = props.description } = props
  CHECK_PROPS(props, GitList.props, 'GitList')

  const p = {}
  if (!props.class) {
    p.class = 'GitList'
  } else if (!props.class.includes('GitList')) {
    p.class = `GitList ${props.class}`
  }
  if (props.id) {
    p.id = props.id
  }

  return div(p, [
    header && h2(header),
    desc && div({ class: 'description' }, desc),
    ul({ id: `${org}-list` }, [items.map(i => GitList.Item({ org, host, ...i }))]),
  ])
}

GitList.style = {
  '.GitList': {
    h3: {
      margin: '0',
    },
    li: {
      padding: '1.5em 0 0',
    },
  },
}

GitList.props = [
  { key: 'id', type: 'string' },
  { key: 'class', type: 'string', selector: true },
  { key: 'desc', type: ['string', 'array'], alias: 'description' },
  { key: 'items', type: 'array', required: true },
  { key: 'org', type: 'string', required: true },
  { key: 'host', type: 'string', default: 'github' },
  { key: 'header', type: ['string', 'array'] },
]

GitList.Item = props => {
  const { name, org, host } = props
  CHECK_PROPS(props, GitList.Item.props, 'GitList.Item')
  const desc = props.desc || props.description

  return li({ id: `${org}-${name}`, class: 'GitListItem' }, [
    h3([Link({ to: `https://${host}.com/${org}/${name}` }, `@${org}/${name}`)]),
    desc && p(desc),
    GitBadges(`${org}/${name}`),
    p([Link({ to: `https://${org}.${host}.io/${name}` }, 'docs / demo')]),
  ])
}

GitList.Item.style = {
  '.GitListItem': {
    a: {
      display: 'block',
      lineHeight: 1.8,
    },
  },
}

GitList.Item.dependencies = {
  GitBadges: require('@magic-modules/git-badges'),
}

GitList.Item.props = [
  { key: 'org', type: 'string', required: true },
  { key: 'name', type: 'string', required: true },
  { key: 'desc', type: ['string', 'array'], alias: 'description' },
]

module.exports = GitList
