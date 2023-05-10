import GObject from "gi://GObject";
import Vips from "gi://Vips";

import { Introspect } from "./operation";

function _camelize(name: string) {
  return name.replace(/_([a-z])/g, (_m, p1) => p1.toUpperCase());
}

export function initWrapper(nickname: string) {
  const intro = Introspect.get(nickname);

  if ((intro.flags & Vips.OperationFlags.DEPRECATED) !== 0) {
    return;
  }

  const js_name = _camelize(nickname);

  if (intro.member_x) {
    /// @ts-expect-error
    Vips.Image.prototype[js_name] = function (...args: any[]) {
      return intro.call(this, ...args);
    };
  } else {
    /// @ts-expect-error
    Vips.Image[js_name] = function (...args: any[]) {
      return intro.call(...args);
    };
  }
}

function add_docs(gtype: GObject.GType) {
  // various operators need hand-written bindings to be convenient to use
  const banned = [
    "bandrank",
    "bandjoin",
    "ifthenelse",
    "add",
    "subtract",
    "multiply",
    "divide",
  ];

  const nickname = Vips.nickname_find(gtype);

  if (banned.includes(nickname)) {
    return;
  }

  try {
    initWrapper(nickname);
  } catch {}

  GObject
    .type_children(gtype)
    .map(add_docs);
}

export function initWrappers() {
  GObject
    .type_children(GObject.type_from_name("VipsOperation"))
    .map(add_docs);
}
