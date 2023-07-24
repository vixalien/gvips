import Vips from "../src/index";
import GObject from "gi://GObject";
import { vips_image_write_to_file } from "src/image";

const image = Vips.Image.new_from_file_RW(
  "/home/alien/Pictures/Screenshot.png",
);

// free form crop
const result = image.extract_area(0, 0, 500, 400);

console.log("typeof result", result);

result.pngsave("test.png");

// console.log(vips_image_write_to_file(result, "test.png"));
