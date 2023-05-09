# Gvips: libvips for GJS

This is a GJS binding for [libvips].

> Note: This is a work in progress. It is not ready for use.

## Installation

### Prerequisites

* [libvips] and make sure you also have the development files (e.g. `libvips-dev` on Debian/Ubuntu or `vips-devel` on Fedora/CentOS).
* GJS
* Meson and Ninja
* Yarn

### Building

Install JS dependencies

```sh
yarn install
```

Then build **Gvips-Ext**, which is a thin wrapper that provides functions that are not exposed by libvips' GObject Introspection data.

```sh
meson setup build
ninja -C build
```

## Usage

You can use the file `test/main.ts` to write test code, then run the following file to compile and execute the code.

```sh
yarn test
```

## License

This project is licensed under the MIT Licence - see the [LICENCE](LICENCE) file for details.

[libvips]: https://libvips.org/
[LICENCE]: ./LICENCE