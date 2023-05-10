import Vips from "gi://Vips";
import { vips_image_write_to_file } from "src/image";

import { initWrappers } from "src/wrapper";

initWrappers();

const image = Vips.Image.new_from_file_RW(
  "/home/alien/Pictures/Exports/6 April 2023/sdffff.jpg",
) as any;

const copy = image.colourspace(Vips.Interpretation.B_W) as Vips.Image;

// const copy = op.call([image, Vips.Interpretation.B_W]) as Vips.Image;

console.log(vips_image_write_to_file(copy, "test.jpg"));
