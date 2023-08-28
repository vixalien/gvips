/// <reference path="./vips8.d.ts" />
/// <reference path="./gobject2.d.ts" />

/**
 * GvipsExt 1.0
 *
 * Generated from 1.0
 */

declare module "gi://GvipsExt?version=1.0" {
    import Vips from "gi://Vips?version=8.0";
    import GObject from "gi://GObject?version=2.0";

    namespace GvipsExt1 {
        export function enum_from_nick(domain: string, type: GObject.GType, str: string): number;
        export function enum_nick(enm: GObject.GType, value: number): string;
        export function object_args_map(object: Vips.Object, fn: ArgsMapFunc): void;
        export function object_get_argument(object: Vips.Object, name: string): ArgumentInfo | null;
        export function value_get_type(value: GObject.Value | any): GObject.GType;
        export type ArgsMapFunc = (name: string, flags: number) => void;

        export class ArgumentInfo {
            static $gtype: GObject.GType<ArgumentInfo>;

            constructor(copy: ArgumentInfo);

            // Fields
            pspec: GObject.ParamSpec;

            // Members
            copy(): ArgumentInfo;
            free(): void;
        }

        /**
         * Name of the imported GIR library
         * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
         */
        export const __name__: string;
        /**
         * Version of the imported GIR library
         * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
         */
        export const __version__: string;
    }

    export default GvipsExt1;
}

declare module "gi://GvipsExt" {
    export { default } from "gi://GvipsExt?version=1.0";
}
