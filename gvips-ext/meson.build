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
  nsversion: '1.0',
  identifier_prefix: 'GvipsExt',
  symbol_prefix: 'gvips_ext',
  includes: [
    'Vips-8.0'
  ],
  install: true,
)