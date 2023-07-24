import Gio from "gi://Gio";
import { generateDocs } from "src/docs";

const path = Gio.File.new_for_path("dist/types.d.ts");

path.replace_contents(
  generateDocs(),
  // "sd",
  null,
  false,
  Gio.FileCreateFlags.NONE,
  null,
);
