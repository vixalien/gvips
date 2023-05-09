import Vips from "gi://Vips";
import GObject from "gi://GObject";
import GvipsExt from "gi://GvipsExt";

import { at_least_libvips } from "./base";
import {
  get_blurb,
  get_typeof,
  vips_object_get,
  vips_object_set,
} from "./object";
import { vips_image_imageize } from "./image";

Vips.init("vips-test");

export interface ArgumentInfo {
  name: string;
  flags: Vips.ArgumentFlags;
  blurb: string;
  type: GObject.GType;
}

function _find_inside<T extends any>(
  cond: (x: T) => boolean,
  arg: T | T[],
): T | null {
  if (Array.isArray(arg)) {
    for (const x of arg) {
      const result = _find_inside(cond, x);

      if (result) {
        return result;
      }
    }
  } else if (cond(arg)) {
    return arg;
  }

  return null;
}

export function vips_operation_set(
  op: Vips.Operation,
  name: string,
  flags: Vips.ArgumentFlags,
  match_image: Vips.Image | null,
  value: any,
) {
  // if the object wants an image and we have a constant, _imageize it
  // if the objects wants an image array, _imageize each element
  if (match_image) {
    const gtype = get_typeof(op, name);

    if (gtype === Vips.Image.$gtype) {
      value = vips_image_imageize(match_image, value);
    } else if (gtype === Vips.ArrayImage.$gtype) {
      value = value.map((x: any) => vips_image_imageize(match_image, x));
    }
  }

  // modify args need to be copied before they are set
  if ((flags & Vips.ArgumentFlags.MODIFY) != 0) {
    // get a unique copy
    value = (value).copy().copy_memory();
  }

  vips_object_set(op, name, value);
}

export class Introspect {
  name: string;
  description: string;
  flags: Vips.OperationFlags;
  details: Map<string, ArgumentInfo>;

  required_input: string[];
  optional_input: string[];
  required_output: string[];
  optional_output: string[];
  doc_optional_input: string[];
  doc_optional_output: string[];

  member_x: string | null;

  method_args: string[];

  constructor(operation_name: string) {
    this.name = operation_name;

    const op = Vips.Operation.new(operation_name);

    this.description = op.get_description();
    this.flags = op.get_flags();

    // build a list of constructor arg [name, flags] pairs in arg order
    const args = new Map<string, Vips.ArgumentFlags>();

    function add_args(name: string, flags: Vips.ArgumentFlags) {
      if ((flags & Vips.ArgumentFlags.CONSTRUCT) !== 0) {
        // libvips uses '-' to separate parts of arg names, but we need '_'
        args.set(name, flags);
      }
    }

    if (at_least_libvips(8, 7)) {
      GvipsExt.object_args_map(op, (name, flags) => {
        add_args(name, flags);
      });
    } else {
      throw new Error("Requires libvips 8.7+");
    }

    // build a hash from arg name to detailed arg information
    this.details = new Map<string, ArgumentInfo>();

    args.forEach((value, name) => {
      const info = GvipsExt.object_get_argument(op, name);

      if (!info) return;

      this.details.set(name, {
        name: name,
        flags: value,
        blurb: get_blurb(op, name)!,
        type: get_typeof(op, name) as GObject.GType,
      });
    });

    // lists of arg names by category
    this.required_input = [];
    this.optional_input = [];
    this.required_output = [];
    this.optional_output = [];

    // same, but with deprecated args filtered out ... this is the list we
    // use for docs
    this.doc_optional_input = [];
    this.doc_optional_output = [];

    args.forEach((flags, name) => {
      if (
        ((flags & Vips.ArgumentFlags.INPUT) != 0) &&
        ((flags & Vips.ArgumentFlags.REQUIRED) != 0) &&
        ((flags & Vips.ArgumentFlags.DEPRECATED) == 0)
      ) {
        this.required_input.push(name);

        // required inputs which we MODIFY are also required outputs
        if ((flags & Vips.ArgumentFlags.MODIFY) != 0) {
          this.required_output.push(name);
        }
      }

      if (
        ((flags & Vips.ArgumentFlags.OUTPUT) != 0) &&
        ((flags & Vips.ArgumentFlags.REQUIRED) != 0) &&
        ((flags & Vips.ArgumentFlags.DEPRECATED) == 0)
      ) {
        this.required_output.push(name);
      }

      // deprecated optional args get on to the main list, but are not in the
      // doc list
      if (
        ((flags & Vips.ArgumentFlags.INPUT) != 0) &&
        ((flags & Vips.ArgumentFlags.REQUIRED) == 0)
      ) {
        this.optional_input.push(name);

        if ((flags & Vips.ArgumentFlags.DEPRECATED) == 0) {
          this.doc_optional_input.push(name);
        }
      }

      if (
        ((flags & Vips.ArgumentFlags.OUTPUT) != 0) &&
        ((flags & Vips.ArgumentFlags.REQUIRED) == 0)
      ) {
        this.optional_output.push(name);

        if ((flags & Vips.ArgumentFlags.DEPRECATED) == 0) {
          this.doc_optional_output.push(name);
        }
      }
    });

    // find the first required input image arg, if any ... that will be this
    this.member_x = null;

    for (const name of this.required_input) {
      const details = this.details.get(name)!;

      if (details.type === Vips.Image.$gtype) {
        this.member_x = name;
      }
    }

    // method args are required args, but without the image they are a method
    // on
    if (!this.member_x) {
      this.method_args = this.required_input
        .filter((name) => name === this.member_x);
    } else {
      this.method_args = this.required_input;
    }
  }

  call(__args: any[] | [...any[], Record<string, string>][]) {
    const op = Vips.Operation.new(this.name);

    const options = typeof __args[__args.length - 1] === "object"
      ? __args.pop()
      : {};
    const args = __args as any[];

    if (args.length !== this.required_input.length) {
      throw new Error(
        `${this.name} needs ${this.required_input.length} arguments, but ${args.length} were given`,
      );
    }

    if ("string_options" in options) {
      if (!op.set_from_string(options.string_options)) {
        throw new Error(`unable to call ${this.name}`);
      }
    }

    // the first image argument is the thing we expand constants to match
    // look inside arrays for images, since we may be passing an array of images
    // as a single param
    const match_image = _find_inside((x) => x instanceof Vips.Image, args);

    // collect a list of all input references here
    const references = [];

    function add_reference(x: any) {
      if (x instanceof Vips.Image) {
        references.push(x);
      }
    }

    const obj: Vips.Object = {} as any;

    this.required_input.forEach((name, i) => {
      const value = args[i];
      vips_operation_set(
        op,
        name,
        this.details.get(name)!.flags,
        match_image,
        value,
      );
    });

    // set any optional args
    for (const name of Object.keys(options)) {
      const value = options[name];
      const details = this.details.get(name)!;

      if (
        (!this.optional_input.includes(name) &&
          !this.optional_output.includes(name)) ||
        (details === undefined)
      ) {
        throw new Error(
          `${this.name} does not support optional argument ${name}`,
        );
      }

      if ((details.flags & Vips.ArgumentFlags.DEPRECATED) != 0) {
        console.warn(`argument ${name} is deprecated for ${this.name}`);
      }

      vips_operation_set(
        op,
        name,
        details.flags,
        match_image,
        value,
      );
    }

    // build operation
    const operation = Vips.cache_operation_build(op);

    if (!operation) {
      throw new Error(`unable to call ${this.name}`);
    }

    const result = [];

    // fetch required output args (plus modified input images)
    this.required_output.forEach((name) => {
      const value = vips_object_get(operation, name);
      result.push(value);
    });

    // fetch optional output args
    const opts: Record<string, any> = {};
    this.optional_output.forEach((name) => {
      if (options.hasOwnProperty(name)) {
        const value = vips_object_get(operation, name);
        opts[name] = value;
      }
    });

    if (Object.keys(opts).length > 0) {
      result.push(opts);
    }

    operation.unref_outputs();

    if (result.length == 0) {
      return null;
    } else if (result.length == 1) {
      return result[0];
    }

    return result;
  }

  private static introspect_cache = new Map<string, Introspect>();

  static get(name: string) {
    if (!this.introspect_cache.has(name)) {
      this.introspect_cache.set(name, new Introspect(name));
    }

    return this.introspect_cache.get(name)!;
  }
}

export function generate_docs(name: string) {
  const intro = Introspect.get(name);
  console.log("generate_docs", name);
}

export function generate_docs_all() {
  // these names are aliased
  const alias: string[] = ["crop"];
  const alias_gtypes = new Map<GObject.GType, string>();

  for (const name of alias) {
    alias_gtypes.set(Vips.type_find("VipsOperation", name), name);
  }

  // all names we can generate documentation for
  let all_names: string[] = [];

  function add_name(gtype: GObject.GType, a: string, b: string) {
    let name: string;

    if (alias_gtypes.has(gtype)) {
      name = alias_gtypes.get(gtype)!;
    } else {
      name = Vips.nickname_find(gtype);
    }

    try {
      generate_docs(name);
      all_names.push(name);
    } catch {
      // ignore
    }

    GvipsExt.type_map(gtype, add_name, null, null);
  }

  GvipsExt.type_map(
    GObject.type_from_name("VipsOperation"),
    add_name,
    null,
    null,
  );

  all_names = all_names.sort();

  // remove operations we have to wrap by hand
  const exclude = ["scale", "ifthenelse", "bandjoin", "bandrank"];
  all_names = all_names.filter((name) => !exclude.includes(name));
}
