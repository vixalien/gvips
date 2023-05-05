// This utility generates gi.d.ts file from docs-lock.json file and types folder.

import fs from "node:fs";
import { join } from "node:path";

import lockfile from "../docs-lock.json" assert { type: "json" };
import docs from "../docs.json" assert { type: "json" };

fs.writeFileSync(
  join(process.cwd(), "gi-types", "gi.d.ts"),
  Object.keys(docs.libraries).map(name => {
    const installed_versions = lockfile.filter(item => item.name === name);
    const version = installed_versions ? docs.libraries[name][0] || lockfile.filter(item => item.name === name, e)[0].api_version : null;

    const path = `gi-types/${name.toLocaleLowerCase()}${version}`;

    if (installed_versions.length === 0) {
      return null;
    } else if (installed_versions.length === 1) {

      return [
        name,
        `declare module "gi://${name}" {
  export * as default from "${path}";
}
declare module "gi://${name}?version=${version}" {
  export * as default from "${path}";
}
`
      ]
    } else {
      // Enforce specifying required version if many versions of same library are installed
      return [
        name,
        `declare module "gi://${name}?version=${version}" {
  export * as default from "${path}";
}
`
      ]
    }
  })
    .filter((item, index, items) => item && items.findIndex(i => i?.[0] === item[0]) === index)
    .map(item => item[1])
    .join("\n")
)

// fs.writeFileSync(
//   join(process.cwd(), "types", "gi.d.ts"),
//   lockfile.map(item => {
//     if (types.includes(item.name.toLocaleLowerCase())) {
//       const version = docs.libraries[item.name][0] || item.api_version;
//       const how_many_versions = lockfile.filter(i => i.name === item.name).length;
//       return [
//         item.name,
//         `declare module "gi://${item.name}" {
//   export * as default from "./${item.name.toLocaleLowerCase()}";
// }
// declare module "gi://${item.name}?version=${version}" {
//   export * as default from "./${item.name.toLocaleLowerCase()}";
// }
// `];
//     }
//   })
//     .filter((item, index, items) => item && items.findIndex(i => i?.[0] === item[0]) === index)
//     .map(item => item[1])
//     .join("\n")
// );

console.log("Done!");
