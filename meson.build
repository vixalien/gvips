project(
  'gvips',
  'c',
  version: '0.0.1',
  license: 'MIT',
)

subdir('gvips-ext')

yarn = find_program('yarn', required: true)

yarn_install = custom_target(
  'yarn install',
  command: [yarn, 'install'],
  output: ['yarn_install']
)

custom_target(
  'yarn prepack',
  command: [yarn, 'prepack'],
  depends: [yarn_install],
  output: ['yarn_build']
)
