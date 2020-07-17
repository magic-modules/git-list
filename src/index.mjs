export const View = props => {
  let { badges = true, items = [], org, host = 'github', header, desc = props.description } = props
  CHECK_PROPS(props, propTypes, 'GitList')

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
      items.map(i => GitList.Item({ badges, org, id: `${p.id}-li`, host, ...i })),
    ]),
  ])
}

export const style = {
  h3: {
    margin: '0',
  },
  li: {
    padding: '1.5em 0 0',

    li: {
      padding: '0.2em 0 0',
    },
  },
}

export const propTypes = {
  GitList: [
    { key: 'id', type: 'string' },
    { key: 'class', type: 'string', selector: true },
    { key: 'desc', type: ['string', 'array'], alias: 'description' },
    { key: 'items', type: 'array', required: true },
    { key: 'org', type: 'string', required: true },
    { key: 'host', type: 'string', default: 'github' },
    { key: 'header', type: ['string', 'array'] },
    { key: 'badges', type: 'boolean' },
  ],
  GitListItem: [
    { key: 'org', type: 'string', required: true },
    { key: 'name', type: 'string', required: true },
    { key: 'desc', type: ['string', 'array'], alias: 'description' },
    { key: 'badges', type: 'boolean' },
  ],
}

export const Item = props => {
  const { name, org, id, host, badges = true } = props
  CHECK_PROPS(props, propTypes, 'GitListItem')
  const desc = props.desc || props.description

  return li({ id: `${id}-${name}`, class: 'GitListItem' }, [
    h3([Link({ to: `https://${org}.${host}.io/${name}` }, `@${org}/${name} demo`)]),
    desc && p(desc),
    p(Link({ to: `https://${host}.com/${org}/${name}` }, 'git repositoriy')),
    badges && GitBadges(`@${org}/${name}`),
  ])
}

const GitList = { Item }
