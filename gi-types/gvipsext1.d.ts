/**
 * GvipsExt 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "./gobject2";
import * as Vips from "./vips8";

export function object_args_map(object: Vips.Object, fn: ArgsMapFunc): void;
export function object_get_argument(object: Vips.Object, name: string): ArgumentInfo | null;
export function value_get_type(value: GObject.Value | any): GObject.GType;
export type ArgsMapFunc = (name: string, flags: number) => void;

export class ArgumentInfo {
    static $gtype: GObject.GType<ArgumentInfo>;

    constructor(copy: ArgumentInfo);

    // Fields
    pspec: GObject.ParamSpec;
    argument_class: Vips.ArgumentClass;
    argument_instance: Vips.ArgumentInstance;

    // Members
    copy(): ArgumentInfo;
    free(): void;
}
