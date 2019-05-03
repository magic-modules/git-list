const GitList = ({
  items,
  prefix = 'gitlist-item',
  org,
  host = 'github.com',
  header,
  ...props
}) => {
  if (!props.class) {
    props.class = 'GitList'
  } else if (!props.class.includes('GitList')) {
    props.class = `GitList ${props.class}`
  }

  return [
    header && h2(header),
    ul(props, items.map(i => GitList.Item({ org, host, prefix, ...i }))),
  ]
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
    h3([Link({ to: `https://${host}/${org}/${name}` }, `@${org}/${name}`)]),
    p(description),
    GitBadges(`${org}/${name}`),
    p([Link({ to: `https://${org}.${host}/${name}` }, 'docs / demo')]),
  ])

GitList.dependencies = {
  GitBadges: require('@magic-modules/git-badges'),
}

module.exports = GitList
