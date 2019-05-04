const GitList = ({
  items = [],
  prefix = 'gitlist-item',
  org,
  host = 'github',
  header,
  description,
  ...props
}) => {
  if (!items.length) {
    // const stack = new Error().stack
    // console.error(`GitList called without items ${stack}`)
    return
  }

  if (!org) {
    // console.error('GitList called without org')
    return
  }

  if (!props.class) {
    props.class = 'GitList'
  } else if (!props.class.includes('GitList')) {
    props.class = `GitList ${props.class}`
  }

  return div(props, [
    header && h2(header),
    description && div({ class: 'description' }, description),
    ul(props, [
      items.map(i => GitList.Item({ org, host, prefix, ...i }))
    ]),
  ])
}

GitList.style = {
  '.GitList': {
    p: {
      margin: '0.5em 0',
    },
  },
}

GitList.Item = ({ name, description, prefix, org, host }) =>
  li({ id: `${prefix ? `${prefix}-` : ''}${org}-${name}` }, [
    h3([Link({ to: `https://${host}.com/${org}/${name}` }, `@${org}/${name}`)]),
    p(description),
    GitBadges(`${org}/${name}`),
    p([Link({ to: `https://${org}.${host}.io/${name}` }, 'docs / demo')]),
  ])

GitList.Item.dependencies = {
  GitBadges: require('@magic-modules/git-badges'),
}

module.exports = GitList
