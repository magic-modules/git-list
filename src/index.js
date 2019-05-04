const GitList = ({
  items = [],
  id = 'gitlist',
  org,
  host = 'github',
  header,
  description,
  desc,
  ...props
}) => {
  if (!items.length) {
    console.error('GitList called without items')
    return
  }

  if (!org) {
    console.error('GitList called without org')
    return
  }

  // fallbacks for shorter names
  if (!desc) {
    desc = description
  }

  if (!props.class) {
    props.class = 'GitList'
  } else if (!props.class.includes('GitList')) {
    props.class = `GitList ${props.class}`
  }

  return div(props, [
    header && h2(header),
    desc && div({ class: 'description' }, desc),
    ul(props, [
      items.map(i => GitList.Item({ org, host, id: props.id, ...i }))
    ]),
  ])
}

GitList.style = {
  '.GitList': {
    h3: {
      margin: '0',
    },
    li: {
      margin: '0.5em 0 0',
    },
    a: {
      display: 'block',
      lineHeight: 1.8,
    },
  },
}

GitList.Item = ({ name, description, desc, id, org, host }) => {
  if(!name) {
    console.error('GitList.Item called without a name property', pre, { org, host })
    return
  }
  if (!desc) {
    desc = description
  }
  return li({ id: `${id}-item-${org}-${name}` }, [
    h3([Link({ to: `https://${host}.com/${org}/${name}` }, `@${org}/${name}`)]),
    desc && p(desc),
    GitBadges(`${org}/${name}`),
    p([Link({ to: `https://${org}.${host}.io/${name}` }, 'docs / demo')]),
  ])
}

GitList.Item.dependencies = {
  GitBadges: require('@magic-modules/git-badges'),
}

module.exports = GitList
