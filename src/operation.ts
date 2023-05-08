import Vips from "gi://Vips";
import GObject from "gi://GObject";
import GvipsExt from "gi://GvipsExt";

import { at_least_libvips } from "./base";
import { get_blurb, get_typeof } from "./object";

Vips.init("vips-test");

export interface ArgumentInfo {
  name: string;
  flags: Vips.ArgumentFlags;
  blurb: string;
  type: GObject.GType;
}

export class Introspect {
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
