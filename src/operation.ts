import Vips from "gi://Vips";
import GObject from "gi://GObject";

export function generate_docs(name: string) {
  console.log("generate_docs", name);
}

export function generate_docs_all() {
  // these names are aliased
  const alias = ["crop"];
  const alias_gtypes = new Map<GObject.GType, string>();

  for (const name of alias) {
    alias_gtypes.set(Vips.type_find("VipsOperation", name), name);
  }

  // all names we can generate documentation for
  const all_names = [];

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
  }
}
