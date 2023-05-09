import Vips from "gi://Vips";
import { vips_object_set } from "./object";

/** rectangular array */
export function _is_2D(array: any) {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const x of array) {
    if (!Array.isArray(x)) {
      return false;
    }

    if (x.length !== array[0].length) {
      return false;
    }
  }

  return true;
}

export function vips_image_new_from_array(
  array: number[][],
  scale = 1.0,
  offset = 0.0,
  interpretation?: Vips.Interpretation,
) {
  if (!Array.isArray(array)) {
    throw new Error("not an array");
  }

  if (!_is_2D(array)) {
    array = [array as any];
  }

  const height = array.length;
  const width = array[0].length;

  const a = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      a[i + j * width] = array[i][j];
    }
  }

  const vi = Vips.Image.new_matrix_from_array(width, height, a);

  vips_object_set(vi, "scale", scale);
  vips_object_set(vi, "offset", offset);

  return vi;
}

export function vips_image_imageize(image: Vips.Image, value: any) {
  if (value instanceof Vips.Image) {
    return value;
  } else if (_is_2D(value)) {
    return vips_image_new_from_array(value);
  } else if (Array.isArray(value)) {
    return Vips.Image.new_from_image(image, value);
  } else {
    return Vips.Image.new_from_image1(image, value);
  }
}
