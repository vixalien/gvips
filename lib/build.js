import { build } from "esbuild";
import { join, resolve } from "node:path";
import { cwd } from "node:process";

const CONSTANTS_PATH = join(cwd(), "node_modules", "excalidraw", "src", "constants");
const CONSTANTS_SHIM = join(cwd(), "src", "shim", "esbuild-constants.ts");

const constants_shim = () => {
  return {
    name: 'contants-shim',
    setup(build) {
      build.onResolve({ filter: /constants/ }, args => {
        const path = resolve(args.resolveDir, args.path);
        if (path === CONSTANTS_PATH) {
          return {
            path: CONSTANTS_SHIM,
            sideEffects: false,
            external: false,
          }
        }
        return undefined;
      });
      build.onResolve({ filter: /.*/, namespace: "file" }, async ({ path, ...options }) => {
        const result = await build.resolve(path, { ...options, namespace: "noRecurse" })
        // console.log(result);
        return { ...result, sideEffects: false }
      })
    },
  };
};

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
