#include "gvips-ext.h"

void *gvips_ext_type_map(GType base, VipsTypeMap2Fn fn, void *a, void *b)
{
  return vips_type_map(base, fn, a, b);
}
