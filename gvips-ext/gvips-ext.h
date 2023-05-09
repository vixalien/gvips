#pragma once

#include <vips/vips.h>

G_BEGIN_DECLS

#define GVIPS_EXT_ARGUMENT_INFO (gvips_ext_argument_info_get_type())

typedef struct
{
  GParamSpec *pspec;
  VipsArgumentClass *argument_class;
  VipsArgumentInstance *argument_instance;
} GvipsExtArgumentInfo;

GType
gvips_ext_argument_info_get_type (void);

GvipsExtArgumentInfo *
gvips_ext_argument_info_copy (GvipsExtArgumentInfo *r);

void
gvips_ext_argument_info_free (GvipsExtArgumentInfo *r);

/**
 * gvips_ext_object_get_argument:
 * 
 * Returns: (nullable)
*/
GvipsExtArgumentInfo* gvips_ext_object_get_argument(VipsObject *object, const char *name);

typedef void (*GvipsExtArgsMapFunc)(const gchar *name, gint flags);

/**
 * gvips_ext_object_args_map:
 * @fn: (scope call):
 */
void gvips_ext_object_args_map(VipsObject *object, GvipsExtArgsMapFunc fn);

/**
 * gvips_ext_type_map:
 * @fn: (scope call): function to call for each type
 */
void *gvips_ext_type_map(GType base, VipsTypeMap2Fn fn, void *a, void *b);

GType gvips_ext_value_get_type(GValue* value);

G_END_DECLS
