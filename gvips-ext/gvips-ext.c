
#include "gvips-ext.h"

G_DEFINE_BOXED_TYPE(GvipsExtArgumentInfo, gvips_ext_argument_info,
                    gvips_ext_argument_info_copy,
                    gvips_ext_argument_info_free);

GvipsExtArgumentInfo *gvips_ext_argument_info_copy(GvipsExtArgumentInfo *r)
{
  GvipsExtArgumentInfo *copy = g_new(GvipsExtArgumentInfo, 1);

  copy->pspec = r->pspec;
  copy->argument_class = r->argument_class;
  copy->argument_instance = r->argument_instance;

  return copy;
}

void gvips_ext_argument_info_free(GvipsExtArgumentInfo *r)
{
  g_free(r);
}

GvipsExtArgumentInfo *gvips_ext_object_get_argument(VipsObject *object, const char *name)
{
  GvipsExtArgumentInfo *info = g_new(GvipsExtArgumentInfo, 1);

  if (vips_object_get_argument(object, name, &info->pspec, &info->argument_class, &info->argument_instance) != 0)
  {
    g_free(info);
    return NULL;
  }

  return info;
}

void gvips_ext_object_args_map(VipsObject *object, GvipsExtArgsMapFunc fn)
{
  const char **names;
  int *flags, n_args;

  if (vips_object_get_args(object, &names, &flags, &n_args))
  {
    return;
  }

  for (int i = 0; i < n_args; i++)
  {
    fn(names[i], flags[i]);
  }

  g_free(names);
  g_free(flags);
}

GType gvips_ext_value_get_type(GValue *value)
{
  return G_VALUE_TYPE(value);
}