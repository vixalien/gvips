import { build } from "esbuild";

await build({
  entryPoints: ["test/main.ts"],
  bundle: true,
  format: "esm",
  outdir: "_build",
  external: ["gi://*"],
  treeShaking: true,
})
  .then(() => build({
    entryPoints: ["test/runner.ts"],
    bundle: false,
    format: "esm",
    outdir: "_build",
    // external: ["gi://*", "system"],
  }))
  .then(() => console.log("Build complete"))
  .catch(e => console.log("Build failed: ", e));
