import Vips from "gi://Vips";
import { vips_image_write_to_file } from "src/image";

import { Introspect } from "src/operation";

const image = Vips.Image.new_from_file_RW(
  "/home/alien/Pictures/Exports/6 April 2023/sdffff.jpg",
);

const op = Introspect.get("colourspace");

const copy = op.call([image, Vips.Interpretation.B_W]) as Vips.Image;

console.log(vips_image_write_to_file(copy, "test.jpg"));
