import Gio from "gi://Gio";
import { generateDocs } from "../dist/docs.js";

const path = ARGV[0] || "dist/types.d.ts";

const file = Gio.File.new_for_path(path);

file.replace_contents(
  generateDocs(),
  // "sd",
  null,
  false,
  Gio.FileCreateFlags.NONE,
  null,
);
