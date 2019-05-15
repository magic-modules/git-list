export const GitList = props => {
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
  } else {
    p.id = org
  }
  if (!p.id.startsWith('gl')) {
    p.id = `gl-${p.id}`
  }

  return div(p, [
    header && h2(header),
    desc && div({ class: 'description' }, desc),
    ul({ id: `${p.id}-ul` }, [
      items.map(i => GitListItem({ org, id: `${p.id}-li`, host, ...i })),
    ]),
  ])
}

GitList.style = {
  '.GitList': {
    h3: {
      margin: '0',
    },
    li: {
      padding: '1.5em 0 0',

      li: {
        padding: '0.2em 0 0',
      },

      a: {
        display: 'block',
      },
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

export const GitListItem = props => {
  const { name, org, id, host } = props
  CHECK_PROPS(props, GitList.Item.props, 'GitList.Item')
  const desc = props.desc || props.description

  return li({ id: `${id}-${name}`, class: 'GitListItem' }, [
    h3([Link({ to: `https://${host}.com/${org}/${name}` }, `@${org}/${name}`)]),
    desc && p(desc),
    GitBadges(`${org}/${name}`),
    Link({ to: `https://${org}.${host}.io/${name}` }, 'docs / demo'),
  ])
}

GitListItem.props = [
  { key: 'org', type: 'string', required: true },
  { key: 'name', type: 'string', required: true },
  { key: 'desc', type: ['string', 'array'], alias: 'description' },
]

export default GitList