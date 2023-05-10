import GObject from "gi://GObject";
import Vips from "gi://Vips";

import { call, Introspect } from "./operation";
import { vips_image_imageize } from "./image";
import { gvalue_to_enum } from "./value";

// Run a complex function on a non-complex image.
//
// The image needs to be complex, or have an even number of bands.
// The input can be int, the output is always float or double.
function runCmplx<
  Image extends Vips.Image & Record<string, any> =
    & Vips.Image
    & Record<string, any>,
>(image: Image, fn: (x: Image) => any) {
  var originalFormat = image.format;
  var newFormat;

  if (
    image.format !== Vips.BandFormat.COMPLEX &&
    image.format !== Vips.BandFormat.DPCOMPLEX
  ) {
    if (image.bands % 2 !== 0) {
      throw new Error("not an even number of bands");
    }

    if (
      image.format !== Vips.BandFormat.FLOAT &&
      image.format !== Vips.BandFormat.DOUBLE
    ) {
      image = image.cast("float");
    }

    newFormat = (image.format === Vips.BandFormat.DOUBLE)
      ? Vips.BandFormat.DPCOMPLEX
      : Vips.BandFormat.COMPLEX;

    image = image.copy({ format: newFormat, bands: image.bands / 2 });
  }

  image = fn(image);

  if (
    originalFormat !== Vips.BandFormat.COMPLEX &&
    originalFormat !== Vips.BandFormat.DPCOMPLEX
  ) {
    newFormat = (image.format === Vips.BandFormat.DPCOMPLEX)
      ? Vips.BandFormat.DOUBLE
      : Vips.BandFormat.FLOAT;

    image = image.copy({ format: newFormat, bands: image.bands * 2 });
  }

  return image;
}

// either a single number, or a table of numbers
function isPixel(x: number[] | number) {
  return typeof x === "number" || Array.isArray(x);
}

function call_enum(
  image: Vips.Image,
  other: any,
  base: string,
  operation: string,
) {
  if (isPixel(other)) {
    return call(base, image, operation, other);
  } else {
    return call(base, image, other, operation);
  }
}

function smap<T extends any>(x: T | T[], fn: (item: T) => any) {
  if (Array.isArray(x)) {
    return x.map(fn);
  } else {
    return fn(x);
  }
}

// MANUAL WRAPPERS
function initManualWrappers() {
  const Image = Vips.Image as unknown as
    & Vips.Image
    & {
      prototype:
        & typeof Vips.Image.prototype
        & Record<string, (...args: any) => any>;
    }
    & Record<string, (...args: any) => any>;

  type Options = Record<string, any>;

  Image.prototype.add = function (
    value: Vips.Image | number | number[],
    options: Options = {},
  ) {
    if (value instanceof Vips.Image) {
      return call("add", this, value, options);
    } else {
      return call("linear", this, 1, value, options);
    }
  };

  Image.prototype.subtract = function (
    value: Vips.Image | number | number[],
    options: Options = {},
  ) {
    if (value instanceof Vips.Image) {
      return call("subtract", this, value, options);
    } else {
      return call("linear", this, 1, smap(value, (x) => -1 * x), options);
    }
  };

  Image.prototype.rsubtract = function (
    value: Vips.Image | number | number[],
    options: Options = {},
  ) {
    if (value instanceof Vips.Image) {
      return (call("linear", this, -1, 0, options) as typeof Image).add(value);
    } else {
      return call("linear", this, -1, value, options);
    }
  };

  Image.prototype.multiply = function (
    value: Vips.Image | number | number[],
    options: Options = {},
  ) {
    if (value instanceof Vips.Image) {
      return call("multiply", this, value, options);
    } else {
      return call("linear", this, value, 0, options);
    }
  };

  Image.prototype.divide = function (
    value: Vips.Image | number | number[],
    options: Options = {},
  ) {
    if (value instanceof Vips.Image) {
      return call("divide", this, value, options);
    } else {
      return call(
        "linear",
        this,
        smap(value, (x) => Math.pow(x, -1)),
        0,
        options,
      );
    }
  };

  Image.prototype.rdivide = function (
    value: Vips.Image | number | number[],
  ) {
    return this.pow(-1).multiply(value);
  };

  Image.prototype.remainder = function (
    value: Vips.Image | number | number[],
    options: Options = {},
  ) {
    if (value instanceof Vips.Image) {
      return call("remainder", this, value, options);
    } else {
      return call("remainder_const", this, value, options);
    }
  };

  Image.prototype.ifthenelse = function (
    then_image: Vips.Image | number | number[],
    else_image: Vips.Image | number | number[],
    options: Options = {},
  ) {
    let match_image: Vips.Image;

    for (const x of [then_image, else_image]) {
      if (x instanceof Vips.Image) {
        match_image = x;
        break;
      }
    }

    match_image ??= this;

    if (!(then_image instanceof Vips.Image)) {
      then_image = vips_image_imageize(match_image, then_image);
    }
    if (!(else_image instanceof Vips.Image)) {
      else_image = vips_image_imageize(match_image, else_image);
    }

    return call("ifthenelse", this, then_image, else_image, options);
  };

  // renamed operators

  // "scale" operator renamed to avoid a clash with the "scale" attribute
  Image.prototype.scaleimage = function (options: Options = {}) {
    return call("scale", this, options);
  };

  // "crop" as a synonym for extractArea
  Image.prototype.crop = function (...args: any[]) {
    return call("extractArea", this, ...args);
  };

  // "band" as a synonym for extractBand
  Image.prototype.band = function (...args: any[]) {
    return call("extractBand", this, ...args);
  };

  // convenience methods
  Image.prototype.bandsplit = function (options: Options) {
    var result = [];
    for (let i = 0; i < this.bands; i++) {
      result.push(this.extractBand(i, options));
    }

    return result;
  };

  // Append a set of images or constants bandwise.
  Image.prototype.bandjoin = function (
    other: (Vips.Image | number)[],
    options,
  ) {
    if (!Array.isArray(other)) {
      other = [other];
    }

    // if [other] is all numbers, we can use bandjoinConst
    if (other.every((x) => typeof x === "number")) {
      return this.bandjoin_const(other, options);
    } else {
      other.unshift(this);
      return call("bandjoin", other, options);
    }
  };

  // Composite a set of images with a set of modes.
  Image.prototype.composite = function (
    other: Vips.Image[],
    modes: Vips.BlendMode[],
    options: Options = {},
  ) {
    if (!Array.isArray(other)) {
      other = [other];
    }
    if (!Array.isArray(modes)) {
      modes = [modes];
    }

    // we have to do string->int by hand, since we are actually passing an array
    // of int
    modes = modes.map((x) => {
      if (typeof x !== "number") {
        x = gvalue_to_enum(Vips.BlendMode.$gtype, x);
      }
      return x;
    });

    other.unshift(this);
    return call("composite", other, modes, options);
  };

  // return [max_x, max_y, max_value]
  Image.prototype.maxpos = function (options: Options = {}) {
    options = Object.assign({}, options);
    options.x = true;
    options.y = true;

    var result = this.max(options);

    return [result[1]["x"], result[1]["y"], result[0]];
  };

  // return [min_x, min_y, min_value]
  Image.prototype.minpos = function (options: Options = {}) {
    options = Object.assign({}, options);
    options.x = true;
    options.y = true;

    var result = this.min(options);

    return [result[1]["x"], result[1]["y"], result[0]];
  };

  // enum expansions

  Image.prototype.pow = function (value) {
    return call_enum(this, value, "math2", "pow");
  };

  Image.prototype.wop = function (value) {
    return call_enum(this, value, "math2", "wop");
  };

  Image.prototype.lshift = function (value) {
    return call_enum(this, value, "boolean", "lshift");
  };

  Image.prototype.rshift = function (value) {
    return call_enum(this, value, "boolean", "rshift");
  };

  Image.prototype.and = function (value) {
    return call_enum(this, value, "boolean", "and");
  };

  Image.prototype.or = function (value) {
    return call_enum(this, value, "boolean", "or");
  };

  Image.prototype.eor = function (value) {
    return call_enum(this, value, "boolean", "eor");
  };

  Image.prototype.more = function (value) {
    return call_enum(this, value, "relational", "more");
  };

  Image.prototype.moreeq = function (value) {
    return call_enum(this, value, "relational", "moreeq");
  };

  Image.prototype.less = function (value) {
    return call_enum(this, value, "relational", "less");
  };

  Image.prototype.lesseq = function (value) {
    return call_enum(this, value, "relational", "lesseq");
  };

  Image.prototype.equal = function (value) {
    return call_enum(this, value, "relational", "equal");
  };

  Image.prototype.noteq = function (value) {
    return call_enum(this, value, "relational", "noteq");
  };

  Image.prototype.floor = function (value) {
    return call_enum(this, value, "round", "floor");
  };

  Image.prototype.ceil = function (value) {
    return call_enum(this, value, "round", "ceil");
  };

  Image.prototype.rint = function (value) {
    return call_enum(this, value, "round", "rint");
  };

  Image.prototype.bandand = function (value) {
    return call_enum(this, value, "bandbool", "and");
  };

  Image.prototype.bandor = function (value) {
    return call_enum(this, value, "bandbool", "or");
  };

  Image.prototype.bandeor = function (value) {
    return call_enum(this, value, "bandbool", "eor");
  };

  Image.prototype.real = function (value, options) {
    return this.complexget("real", options);
  };

  Image.prototype.imag = function (value, options) {
    return this.complexget("imag", options);
  };

  Image.prototype.polar = function (options) {
    return runCmplx(this, (x) => x.complex("polar", options));
  };

  Image.prototype.rect = function (options) {
    return runCmplx(this, (x) => x.complex("rect", options));
  };

  Image.prototype.conj = function (options) {
    return this.complex("conj", options);
  };

  Image.prototype.sin = function (options) {
    return this.math("sin", options);
  };

  Image.prototype.cos = function (options) {
    return this.math("cos", options);
  };

  Image.prototype.tan = function (options) {
    return this.math("tan", options);
  };

  Image.prototype.asin = function (options) {
    return this.math("asin", options);
  };

  Image.prototype.acos = function (options) {
    return this.math("acos", options);
  };

  Image.prototype.atan = function (options) {
    return this.math("atan", options);
  };

  Image.prototype.log = function (options) {
    return this.math("log", options);
  };

  Image.prototype.log10 = function (options) {
    return this.math("log10", options);
  };

  Image.prototype.exp = function (options) {
    return this.math("exp", options);
  };

  Image.prototype.exp10 = function (options) {
    return this.math("exp10", options);
  };

  Image.prototype.erode = function (mask, options) {
    return this.morph(mask, "erode", options);
  };

  Image.prototype.dilate = function (mask, options) {
    return this.morph(mask, "dilate", options);
  };

  Image.prototype.median = function (size, options) {
    return this.rank(size, size, (size * size) / 2, options);
  };

  Image.prototype.fliphor = function (options) {
    return this.flip("horizontal", options);
  };

  Image.prototype.flipver = function (options) {
    return this.flip("vertical", options);
  };

  Image.prototype.rot90 = function (options) {
    return this.rot("d90", options);
  };

  Image.prototype.rot180 = function (options) {
    return this.rot("d180", options);
  };

  Image.prototype.rot270 = function (options) {
    return this.rot("d270", options);
  };
}

function _snake_case(name: string) {
  return name.replace(/([A-Z])/g, "_$1").toLowerCase();
}

export function initWrapper(nickname: string) {
  const intro = Introspect.get(nickname);

  if ((intro.flags & Vips.OperationFlags.DEPRECATED) !== 0) {
    return;
  }

  const js_name = _snake_case(nickname);

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
  initManualWrappers();

  GObject
    .type_children(GObject.type_from_name("VipsOperation"))
    .map(add_docs);
}
