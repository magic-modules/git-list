# ${state.title}

this is the
[@magic-modules](https://github.com/magic-modules)
GitList module.

${state.description}

<GitBadges>magic-modules/module-list</GitBadges>

## installation

`npm install --save-exact @magic-modules/git-list`

## usage

in a page or module View

```
&lt;GitList
  header="magic"
  // also accepts longer key: description
  desc="[
    'magic static page and serverless webapp generator.',
    'client html/css/js size ~5kb.',
  ]"

  // set id prefix for both list as well as items to allow hash navigation
  // container id will be set to \`gl-\{id}\`,
  // ul id will be set to \`gl-\{id}-ul\`
  // list item id will be set to \`gl-\{id}-li-\{org}-\{name}\`
  id="magic"          // falls back to org if not set
  org="magic"
  host="github"       // github is default, gitlab works too.
  class="custom-class"
  items="[
    { name: 'core', description: '@magic/core library. grundstein.' },
  ]">
&lt;GitList>
```

## demo

this is what it looks like

<GitList
  id="gl-magic"
  header="magic"
  org="magic"
  description="static and serverless webapp generator. client html/css/js size ~5kb."
  class="custom-class"
  items="[{ name: 'core', description: '@magic/core library. grundstein.' }]">
</GitList>

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/module-list/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)


