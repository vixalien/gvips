#pragma once

#include <vips/vips.h>

G_BEGIN_DECLS

/**
 * gvips_ext_type_map:
 * @fn: (scope call): function to call for each type
*/
void *gvips_ext_type_map(GType base, VipsTypeMap2Fn fn, void *a, void *b);

G_END_DECLS
