project(
  'gvips',
  'c',
  version: '0.0.1',
  license: 'MIT',
)

subdir('gvips-ext')

yarn = find_program('yarn', required: true)

custom_target(
  'build',
  command: [yarn, 'prepack'],
  output: ['yarn-build']
)
