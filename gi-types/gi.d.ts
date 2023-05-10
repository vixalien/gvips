declare module "gi://VipsMerged" {
  export * from "gi-types/vips8";
  export { Image } from "dist/types";
}

declare module "gi://Vips" {
  export * as default from "gi://VipsMerged";
}
declare module "gi://Vips?version=8" {
  export * as default from "gi://VipsMerged";
}

declare module "gi://GObject" {
  export * as default from "gi-types/gobject2";
}
declare module "gi://GObject?version=2" {
  export * as default from "gi-types/gobject2";
}

declare module "gi://GLib" {
  export * as default from "gi-types/glib2";
}
declare module "gi://GLib?version=2" {
  export * as default from "gi-types/glib2";
}

declare module "gi://GvipsExt" {
  export * as default from "gi-types/gvipsext1";
}
declare module "gi://GvipsExt?version=1" {
  export * as default from "gi-types/gvipsext1";
}

declare module "gi://Gio" {
  export * as default from "gi-types/gio2";
}
declare module "gi://Gio?version=2" {
  export * as default from "gi-types/gio2";
}
