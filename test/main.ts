import Vips from "gi://Vips";
import { initWrappers } from "src/wrapper";
import { vips_image_write_to_file } from "src/image";

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
