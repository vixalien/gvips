# GVIPS: libvips for GJS

This is a GJS binding for [libvips]. It allows running the highly performant
image processing library under GJS.

> Note: This is a work in progress. It is not ready for use.

## Installation

### From NPM

```bash
npm install gvips
```

### From Source

- [libvips] and make sure you also have the development files (e.g.
  `libvips-dev` on Debian/Ubuntu or `vips-devel` on Fedora/CentOS).
- GJS
- Meson and Ninja
- Yarn

### Building

The build system relies on Meson (and ninja) and Yarn. By building GVIPS, you
also build **Gvips-Ext**, which is a thin wrapper that provides functions that
are not exposed by libvips' GObject Introspection data.

```sh
meson setup build
ninja -C build
ninja yarn_build -C build
```

## Usage

To use the library, do:

```js
import Vips from "gi://Vips";
import { initWrappers } from "gvips/dist/wrapper";
import { vips_image_write_to_file } from "gvips/dist/image";

// convenience wrappers for vips operations
initWrappers();

const image = Vips.Image.black(100, 100);
const [output, meta] = image.autorot({
  output: ["angle", "flip"],
});

console.log(
  "image was rotated " + meta.angle + " degrees. flipped: " + meta.flip,
);

vips_image_write_to_file(output, "test.png");
```

or you can let gvips initialise the wrappers for you by directly importing from
`gvips`.

```js
import Vips from "gvips";

const image = Vips.Image.black(100, 100);
// ...
```

## Testing your code

You can use the file `test/main.ts` to write test code, then run the following
file to compile and execute the code.

```sh
yarn test
```

## License

This project is licensed under the MIT Licence - see the [LICENCE](LICENCE) file
for details.

[libvips]: https://libvips.org/
[LICENCE]: ./LICENCE
