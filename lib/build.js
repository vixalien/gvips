import { build } from "esbuild";
import { glob } from "glob";

await build({
  entryPoints: await glob("src/**/*.ts"),
  bundle: true,
  format: "esm",
  outdir: "dist",
  external: ["gi://*"],
  treeShaking: true,
  splitting: true
})
  .then(() => console.log("Build complete"))
  .catch((e) => console.log("Build failed: ", e));
