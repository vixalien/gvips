version = meson.project_version()

gvips_lib = library(
  'gvips-ext',
  'gvips-ext.c',
  version: version,
  dependencies: [
    dependency('vips'),
  ],
)

gnome = import('gnome')

gvips_gir = gnome.generate_gir(
  gvips_lib,
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