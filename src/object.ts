import GObject from "gi://GObject";
import Vips from "gi://Vips";
import GvipsExt from "gi://GvipsExt";
import { gvalue_get, gvalue_set } from "./value";

export const pspec_class_cache = new Map<string, GObject.ParamSpec>();
export const pspec_cache = new Map<Vips.Object, typeof pspec_class_cache>();

/**
 * this is pretty slow, and used a lot, so we cache results
 */
export function get_pspec(obj: Vips.Object, name: string) {
  if (!pspec_cache.has(obj)) {
    pspec_cache.set(obj, new Map());
  }

  const cache = pspec_cache.get(obj)!;

  if (!cache.has(name)) {
    const result = GvipsExt.object_get_argument(obj, name);

    if (!result) {
      return null;
    }

    cache.set(name, result.pspec);
  }

  return cache.get(name)!;
}

/**
 * Get the GType of a GObject property.
 *
 * This function returns 0 if the property does not exist.
 */
export function get_typeof(obj: Vips.Object, name: string) {
  const pspec = get_pspec(obj, name);

  if (!pspec) {
    throw new Error("");
  }

  return pspec.value_type;
}

/**
 * Get the blurb for a GObject property.
 */
export function get_blurb(obj: Vips.Object, name: string) {
  const pspec = get_pspec(obj, name);

  if (!pspec) {
    return null;
  }

  return pspec.get_blurb();
}

export function vips_object_get(obj: Vips.Object, name: string) {
  const pspec = get_pspec(obj, name);

  if (!pspec) {
    throw new Error("Property not found");
  }

  const gtype = pspec.value_type;

  /// @ts-ignore - no need for copy
  const gvalue = new GObject.Value();
  gvalue.init(gtype);
  /// @ts-ignore - wrong types, again
  obj.get_property(name, gvalue);

  return gvalue_get(gvalue);
}

export function vips_object_set(obj: Vips.Object, name: string, value: any) {
  const gtype = get_typeof(obj, name);

  /// @ts-ignore - no need for copy
  const gvalue = new GObject.Value();
  gvalue.init(gtype);
  gvalue_set(gvalue, value);
  obj.set_property(name, gvalue);
}
