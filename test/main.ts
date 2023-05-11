import GObject from "gi://GObject";
import Gio from "gi://Gio";
import Vips from "gi://Vips";
import { generateDocs } from "src/docs";
import { initWrappers } from "src/wrapper";
import { vips_image_write_to_file } from "src/image";

initWrappers();

const path = Gio.File.new_for_path("dist/types.d.ts");

path.replace_contents(
  generateDocs(),
  null,
  false,
  Gio.FileCreateFlags.NONE,
  null,
);

// const image = Vips.Image.new_from_file_RW(
//   "/home/alien/Pictures/Exports/6 April 2023/sdffff.jpg",
// ) as Vips.Image;

// console.log("width height", image.width, image.height);

// // const copy = image.smartcrop() as Vips.Image;

// // const copy = op.call([image, Vips.Interpretation.B_W]) as Vips.Image;

// console.log(vips_image_write_to_file(copy, "test.png"));
