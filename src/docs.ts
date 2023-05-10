import GObject from "gi://GObject";
import Vips from "gi://Vips";

import { Introspect } from "./operation";
import { _snake_case, banned } from "./wrapper";
import { gtype_to_typescript } from "./value";

export function indent(string: string, n = 1) {
  return string
    .split("\n")
    .map((x) => `${"  ".repeat(n)}${x}`)
    .join("\n");
}

export function generateDoc(nickname: string) {
  const intro = Introspect.get(nickname);

  function object_string(params: string[], n = 1, optional = false) {
    return params
      .map((x, i) => {
        const type = intro.details.get(x)?.type;

        if (!type) return;

        return indent(
          `${_snake_case(x)}${optional ? "?" : ""}: ${
            gtype_to_typescript(type)
          },`,
          n,
        );
      })
      .filter((x) => x)
      .join("\n");
  }

  if ((intro.flags & Vips.OperationFlags.DEPRECATED) !== 0) {
    return null;
  }

  /** */

  const js_name = _snake_case(nickname);

  let result = `/**
 * ${intro.description}\n`;

  result += intro.method_args
    .map((x) => {
      const details = intro.details.get(x);

      if (!details) return;
      return ` * @param ${_snake_case(x)} - ${details.blurb}`;
    })
    .filter((x) => x)
    .join("\n");

  if (intro.doc_optional_input.length > 0) {
    result += `\n * @param [options] - optional parameters\n`;

    result += intro.doc_optional_input
      .map((x) => {
        const details = intro.details.get(x);

        if (!details) return;
        return ` * @param [options.${_snake_case(x)}] - ${details.blurb}`;
      })
      .filter((x) => x)
      .join("\n");
  }

  result += `\n */
${intro.member_x ? "" : "static "}${js_name}(\n`;

  result += object_string(intro.method_args);

  if (intro.doc_optional_input.length > 0) {
    if (!result.endsWith("\n")) result += "\n";

    result += indent("options?: {");
    result += "\n";

    result += object_string(intro.doc_optional_input, 2, true);

    result += indent("\n}");
  }

  result += `\n): `;

  if (
    intro.optional_output.length > 0 ||
    intro.required_output.length > 1
  ) {
    result += "[\n";

    result += object_string(intro.required_output);

    if (intro.optional_output.length > 0) {
      if (!result.endsWith("\n")) result += "\n";

      result += indent("optional_output?: {");
      result += "\n";

      result += object_string(intro.optional_output, 2, true);

      result += indent("\n}");
      result += "\n";
    }

    result += "]";
  } else if (intro.required_output.length === 1) {
    const type = intro.details.get(intro.required_output[0])!.type;
    result += `${gtype_to_typescript(type)}`;
  } else {
    result += "void";
  }

  return result;
}

export function generateDocs() {
  const header = `// this file is generated automatically -- do not edit!

import Vips from "gi://Vips";

export class Image extends Vips.Image {
`;

  const footer = `
}
`;

  let operations: (string | null)[] = [];

  function add_docs(gtype: GObject.GType) {
    const nickname = Vips.nickname_find(gtype);

    if (banned.includes(nickname)) {
      return;
    }

    try {
      operations.push(generateDoc(nickname));
    } catch {}

    GObject
      .type_children(gtype)
      .map(add_docs);
  }

  GObject
    .type_children(GObject.type_from_name("VipsOperation"))
    .map(add_docs);

  let string = "";

  string += operations
    .filter((x) => x)
    .map((x) => indent(x!))
    .join("\n\n");

  return `${header}${string}${footer}`;
}
