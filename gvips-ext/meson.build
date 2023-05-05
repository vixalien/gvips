project(
  'gvips-ext',
  'c',
  version: '0.0.1',
  license: 'MIT',
)

version = meson.project_version()

lib = library(
  'gvips-ext',
  'gvips-ext.c',
  version: version,
  dependencies: [
    dependency('vips'),
  ],
)

gnome = import('gnome')

gnome.generate_gir(
  lib,
  sources: [
    'gvips-ext.c',
    'gvips-ext.h',
  ],
  namespace: 'GvipsExt',
  nsversion: version,
  identifier_prefix: 'GvipsExt',
  symbol_prefix: 'gvips_ext',
  includes: [
    'Vips-8.0'
  ],
  install: true,
)