import Vips from "gi://Vips";
import GObject from "gi://GObject";
import GLib from "gi://GLib";
import GvipsExt from "gi://GvipsExt";

export const types = {
  bool: GObject.TYPE_BOOLEAN,
  int: GObject.TYPE_INT,
  uint64: GObject.TYPE_UINT64,
  double: GObject.TYPE_DOUBLE,
  string: GObject.TYPE_STRING,
  enum: GObject.TYPE_ENUM,
  flags: GObject.TYPE_FLAGS,
  object: GObject.TYPE_OBJECT,
  image: Vips.Image.$gtype,
  array_int: Vips.ArrayInt.$gtype,
  array_double: Vips.ArrayDouble.$gtype,
  array_image: Vips.ArrayImage.$gtype,
  refstr: Vips.RefString.$gtype,
  blob: Vips.Blob.$gtype,
  source: Vips.Source.$gtype,
  target: Vips.Target.$gtype,
  format: Vips.BandFormat.$gtype,
  blend_mode: Vips.BlendMode.$gtype,
};

export function gvalue_set(gvalue: GObject.Value, value: any) {
  const gtype = GvipsExt.value_get_type(gvalue);
  const fundamental = GObject.type_fundamental(gtype);

  if (gtype === types.bool) {
    gvalue.set_boolean(value);
  } else if (gtype === types.int) {
    gvalue.set_int(Number(value));
  } else if (gtype === types.uint64) {
    gvalue.set_uint64(value);
  } else if (gtype === types.double) {
    gvalue.set_double(value);
  } else if (fundamental === types.enum) {
    gvalue.set_enum(value);
  } else if (fundamental === types.flags) {
    gvalue.set_flags(value);
  } else if (gtype === types.string) {
    gvalue.set_string(value);
  } else if (gtype === types.refstr) {
    // @ts-ignore wrong types maybe?
    Vips.value_set_ref_string(gvalue, value);
  } else if (fundamental === types.object) {
    gvalue.set_object(value);
  } else if (gtype === types.array_int) {
    if (typeof value === "number") {
      value = [value];
    }

    Vips.value_set_array_int(gvalue, value);
  } else if (gtype === types.array_double) {
    if (typeof value === "number") {
      value = [value];
    }

    Vips.value_set_array_double(gvalue, value);
  } else if (gtype === types.array_image) {
    if (value instanceof Vips.Image) {
      value = [value];
    }

    Vips.value_set_array_image(gvalue, value.length);
    const array = Vips.value_get_array_image(gvalue);

    value.forEach((image: Vips.Image, i: number) => {
      image.ref();
      array[i] = image;
    });
  } else if (gtype === types.blob) {
    // not sure how to handle this
    // @ts-expect-error wrong types
    Vips.value_set_blob(gvalue, GLib.free, value);
  } else {
    throw new Error(
      `Unsupported gtype for set ${GObject.type_name(gtype)}, fundamental ${
        GObject.type_name(fundamental)
      }`,
    );
  }
}

export function gvalue_get(gvalue: GObject.Value) {
  const gtype = GvipsExt.value_get_type(gvalue);
  const fundamental = GObject.type_fundamental(gtype);

  if (gtype === types.bool) {
    return gvalue.get_boolean();
  } else if (gtype === types.int) {
    return gvalue.get_int();
  } else if (gtype === types.uint64) {
    return gvalue.get_uint64();
  } else if (gtype === types.double) {
    return gvalue.get_double();
  } else if (fundamental === types.enum) {
    return gvalue.get_enum();
  } else if (fundamental === types.flags) {
    return gvalue.get_flags();
  } else if (gtype === types.string) {
    return gvalue.get_string();
  } else if (gtype === types.refstr) {
    return Vips.value_get_ref_string(gvalue)[0];
  } else if (gtype === types.image) {
    const object = gvalue.get_object();
    object.ref();
    return object;
  } else if (gtype === types.array_int) {
    return Vips.value_get_array_int(gvalue);
  } else if (gtype === types.array_double) {
    return Vips.value_get_array_double(gvalue);
  } else if (gtype === types.image) {
    return Vips.value_get_array_image(gvalue);
  } else if (gtype === types.blob) {
    return Vips.value_get_blob(gvalue);
  } else {
    throw new Error(`Unsupported gtype for get ${GObject.type_name(gtype)}`);
  }
}

export function gvalue_to_enum(gtype: GObject.GType, value: number | string) {
  let enum_value;

  if (typeof value === "string") {
    enum_value = GvipsExt.enum_from_nick("node-vips", gtype, value);

    if (enum_value === -1) {
      throw new Error(`Invalid enum value ${value}`);
    }
  } else {
    enum_value = value;
  }

  return enum_value;
}

export function gvalue_from_enum(gtype: GObject.GType, enum_value: number) {
  const value = GvipsExt.enum_nick(gtype, enum_value);

  if (!value) {
    throw new Error(`value not in enum`);
  }

  return value;
}

const type_map = new Map<GObject.GType, string>([
  [GObject.TYPE_BOOLEAN, "boolean"],
  [GObject.TYPE_INT, "number"],
  [GObject.TYPE_UINT64, "number"],
  [GObject.TYPE_DOUBLE, "number"],
  [GObject.TYPE_STRING, "string"],
  [Vips.ArrayDouble.$gtype, "number[]"],
  [Vips.ArrayInt.$gtype, "number[]"],
  [Vips.ArrayImage.$gtype, "Vips.Image[]"],
  [Vips.Blob.$gtype, "Vips.Blob"],
]);

export function pretty_case(string: string) {
  return string.replace(/([a-z])([A-Z])/, "$1.$2");
}

export function gtype_to_typescript(type: GObject.GType) {
  if (type_map.has(type)) {
    return type_map.get(type);
  }

  const fundamental = GObject.type_fundamental(type);

  switch (fundamental) {
    case GObject.TYPE_ENUM:
    case GObject.TYPE_FLAGS:
    case GObject.TYPE_OBJECT:
      return pretty_case(GObject.type_name(type) ?? "unknown");
    default:
      return `unknown ${GObject.type_name(type)}`;
  }
}
