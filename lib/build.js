import { build } from "esbuild";

await build({
  entryPoints: ["src/index.ts", "src/docs.ts", "src/wrapper.ts"],
  bundle: true,
  format: "esm",
  outdir: "dist",
  external: ["gi://*"],
  treeShaking: true,
  splitting: true
})
  .then(() => console.log("Build complete"))
  .catch((e) => console.log("Build failed: ", e));
