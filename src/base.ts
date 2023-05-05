import Vips from "gi://Vips";

/**
 * Is this atleast libvips x.y?
 */
export function at_least_libvips(major: number, minor: number) {
  return (Vips.MAJOR_VERSION > major) ||
    (Vips.MAJOR_VERSION === major && Vips.MINOR_VERSION >= minor);
}
