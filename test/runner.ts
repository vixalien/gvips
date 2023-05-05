#!/usr/bin/gjs -m
///@ts-nocheck
import GLib from "gi://GLib";
import System from "system";

imports.package.init({
  name: "com.vixalien.GVips",
  version: "42",
  prefix: "/usr/local",
  libdir: "/usr/local/lib",
});

pkg.initGettext();
pkg.initFormat();

const loop = new GLib.MainLoop(null, false);

import("./main.js")
  .then((_main) => {
    GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
      loop.quit();
      // const exitCode = imports.package.run(main);
      System.exit(0);
      return GLib.SOURCE_REMOVE;
    });
  })
  .catch(console.error);

loop.run();
