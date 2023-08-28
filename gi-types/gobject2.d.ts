/// <reference path="./glib2.d.ts" />

/**
 * GObject 2.0
 *
 * Generated from 2.76.2
 */

declare module "gi://GObject?version=2.0" {
    import GLib from "gi://GLib?version=2.0";

    namespace GObject2 {
        /**
         * Mask containing the bits of #GParamSpec.flags which are reserved for GLib.
         */
        export const PARAM_MASK: number;
        /**
         * #GParamFlags value alias for %G_PARAM_STATIC_NAME | %G_PARAM_STATIC_NICK | %G_PARAM_STATIC_BLURB.
         *
         * It is recommended to use this for all properties by default, as it allows for
         * internal performance improvements in GObject.
         *
         * It is very rare that a property would have a dynamically constructed name,
         * nickname or blurb.
         *
         * Since 2.13.0
         */
        export const PARAM_STATIC_STRINGS: number;
        /**
         * Minimum shift count to be used for user defined flags, to be stored in
         * #GParamSpec.flags. The maximum allowed is 10.
         */
        export const PARAM_USER_SHIFT: number;
        /**
         * A mask for all #GSignalFlags bits.
         */
        export const SIGNAL_FLAGS_MASK: number;
        /**
         * A mask for all #GSignalMatchType bits.
         */
        export const SIGNAL_MATCH_MASK: number;
        /**
         * A bit in the type number that's supposed to be left untouched.
         */
        export const TYPE_FLAG_RESERVED_ID_BIT: GLib.Type;
        /**
         * An integer constant that represents the number of identifiers reserved
         * for types that are assigned at compile-time.
         */
        export const TYPE_FUNDAMENTAL_MAX: number;
        /**
         * Shift value used in converting numbers to type IDs.
         */
        export const TYPE_FUNDAMENTAL_SHIFT: number;
        /**
         * First fundamental type number to create a new fundamental type id with
         * G_TYPE_MAKE_FUNDAMENTAL() reserved for BSE.
         */
        export const TYPE_RESERVED_BSE_FIRST: number;
        /**
         * Last fundamental type number reserved for BSE.
         */
        export const TYPE_RESERVED_BSE_LAST: number;
        /**
         * First fundamental type number to create a new fundamental type id with
         * G_TYPE_MAKE_FUNDAMENTAL() reserved for GLib.
         */
        export const TYPE_RESERVED_GLIB_FIRST: number;
        /**
         * Last fundamental type number reserved for GLib.
         */
        export const TYPE_RESERVED_GLIB_LAST: number;
        /**
         * First available fundamental type number to create new fundamental
         * type id with G_TYPE_MAKE_FUNDAMENTAL().
         */
        export const TYPE_RESERVED_USER_FIRST: number;
        /**
         * For string values, indicates that the string contained is canonical and will
         * exist for the duration of the process. See g_value_set_interned_string().
         */
        export const VALUE_INTERNED_STRING: number;
        /**
         * If passed to G_VALUE_COLLECT(), allocated data won't be copied
         * but used verbatim. This does not affect ref-counted types like
         * objects. This does not affect usage of g_value_copy(), the data will
         * be copied if it is not ref-counted.
         */
        export const VALUE_NOCOPY_CONTENTS: number;
        /**
         * Provide a copy of a boxed structure `src_boxed `which is of type `boxed_type.`
         */
        export function boxed_copy(boxed_type: GType, src_boxed: any): any;
        /**
         * Free the boxed structure `boxed `which is of type `boxed_type.`
         */
        export function boxed_free(boxed_type: GType, boxed: any): void;
        /**
         * A #GClosureMarshal function for use with signals with handlers that
         * take two boxed pointers as arguments and return a boolean.  If you
         * have such a signal, you will probably also need to use an
         * accumulator, such as g_signal_accumulator_true_handled().
         */
        export function cclosure_marshal_BOOLEAN__BOXED_BOXED(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `gboolean (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter
         * denotes a flags type.
         */
        export function cclosure_marshal_BOOLEAN__FLAGS(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `gchar* (*callback) (gpointer instance, GObject *arg1, gpointer arg2, gpointer user_data)`.
         */
        export function cclosure_marshal_STRING__OBJECT_POINTER(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gboolean arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__BOOLEAN(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, GBoxed *arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__BOXED(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gchar arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__CHAR(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gdouble arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__DOUBLE(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes an enumeration type..
         */
        export function cclosure_marshal_VOID__ENUM(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes a flags type.
         */
        export function cclosure_marshal_VOID__FLAGS(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gfloat arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__FLOAT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__INT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, glong arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__LONG(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, GObject *arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__OBJECT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, GParamSpec *arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__PARAM(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gpointer arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__POINTER(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, const gchar *arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__STRING(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, guchar arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__UCHAR(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, guint arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__UINT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, guint arg1, gpointer arg2, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__UINT_POINTER(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gulong arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__ULONG(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, GVariant *arg1, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__VARIANT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gpointer user_data)`.
         */
        export function cclosure_marshal_VOID__VOID(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * A generic marshaller function implemented via
         * [libffi](http://sourceware.org/libffi/).
         *
         * Normally this function is not passed explicitly to g_signal_new(),
         * but used automatically by GLib when specifying a %NULL marshaller.
         */
        export function cclosure_marshal_generic(
            closure: Closure,
            return_gvalue: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null
        ): void;
        /**
         * Disconnects a handler from `instance `so it will not be called during
         * any future or currently ongoing emissions of the signal it has been
         * connected to. The `handler_id_ptr `is then set to zero, which is never a valid handler ID value (see g_signal_connect()).
         *
         * If the handler ID is 0 then this function does nothing.
         *
         * There is also a macro version of this function so that the code
         * will be inlined.
         */
        export function clear_signal_handler(handler_id_ptr: number, instance: Object): void;
        /**
         * This function is meant to be called from the `complete_type_info`
         * function of a #GTypePlugin implementation, as in the following
         * example:
         *
         * |[&lt;!-- language="C" --&gt;
         * static void
         * my_enum_complete_type_info (GTypePlugin     *plugin,
         * GType            g_type,
         * GTypeInfo       *info,
         * GTypeValueTable *value_table)
         * {
         * static const GEnumValue values[] = {
         * { MY_ENUM_FOO, "MY_ENUM_FOO", "foo" },
         * { MY_ENUM_BAR, "MY_ENUM_BAR", "bar" },
         * { 0, NULL, NULL }
         * };
         *
         * g_enum_complete_type_info (type, info, values);
         * }
         * ]|
         */
        export function enum_complete_type_info(g_enum_type: GType, const_values: EnumValue): TypeInfo;
        /**
         * Returns the #GEnumValue for a value.
         */
        export function enum_get_value(enum_class: EnumClass, value: number): EnumValue | null;
        /**
         * Looks up a #GEnumValue by name.
         */
        export function enum_get_value_by_name(enum_class: EnumClass, name: string): EnumValue | null;
        /**
         * Looks up a #GEnumValue by nickname.
         */
        export function enum_get_value_by_nick(enum_class: EnumClass, nick: string): EnumValue | null;
        /**
         * Registers a new static enumeration type with the name `name.`
         *
         * It is normally more convenient to let [glib-mkenums][glib-mkenums],
         * generate a my_enum_get_type() function from a usual C enumeration
         * definition  than to write one yourself using g_enum_register_static().
         */
        export function enum_register_static(name: string, const_static_values: EnumValue): GType;
        /**
         * Pretty-prints `value `in the form of the enum’s name.
         *
         * This is intended to be used for debugging purposes. The format of the output
         * may change in the future.
         */
        export function enum_to_string(g_enum_type: GType, value: number): string;
        /**
         * This function is meant to be called from the complete_type_info()
         * function of a #GTypePlugin implementation, see the example for
         * g_enum_complete_type_info() above.
         */
        export function flags_complete_type_info(g_flags_type: GType, const_values: FlagsValue): TypeInfo;
        /**
         * Returns the first #GFlagsValue which is set in `value.`
         */
        export function flags_get_first_value(flags_class: FlagsClass, value: number): FlagsValue | null;
        /**
         * Looks up a #GFlagsValue by name.
         */
        export function flags_get_value_by_name(flags_class: FlagsClass, name: string): FlagsValue | null;
        /**
         * Looks up a #GFlagsValue by nickname.
         */
        export function flags_get_value_by_nick(flags_class: FlagsClass, nick: string): FlagsValue | null;
        /**
         * Registers a new static flags type with the name `name.`
         *
         * It is normally more convenient to let [glib-mkenums][glib-mkenums]
         * generate a my_flags_get_type() function from a usual C enumeration
         * definition than to write one yourself using g_flags_register_static().
         */
        export function flags_register_static(name: string, const_static_values: FlagsValue): GType;
        /**
         * Pretty-prints `value `in the form of the flag names separated by ` | ` and
         * sorted. Any extra bits will be shown at the end as a hexadecimal number.
         *
         * This is intended to be used for debugging purposes. The format of the output
         * may change in the future.
         */
        export function flags_to_string(flags_type: GType, value: number): string;
        export function gtype_get_type(): GType;
        /**
         * Creates a new #GParamSpecBoolean instance specifying a %G_TYPE_BOOLEAN
         * property. In many cases, it may be more appropriate to use an enum with
         * g_param_spec_enum(), both to improve code clarity by using explicitly named
         * values, and to allow for more values to be added in future without breaking
         * API.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_boolean(
            name: string,
            nick: string | null,
            blurb: string | null,
            default_value: boolean,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecBoxed instance specifying a %G_TYPE_BOXED
         * derived property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_boxed(
            name: string,
            nick: string | null,
            blurb: string | null,
            boxed_type: GType,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecChar instance specifying a %G_TYPE_CHAR property.
         */
        export function param_spec_char(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecDouble instance specifying a %G_TYPE_DOUBLE
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_double(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecEnum instance specifying a %G_TYPE_ENUM
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_enum(
            name: string,
            nick: string | null,
            blurb: string | null,
            enum_type: GType,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecFlags instance specifying a %G_TYPE_FLAGS
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_flags(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags_type: GType,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecFloat instance specifying a %G_TYPE_FLOAT property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_float(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecGType instance specifying a
         * %G_TYPE_GTYPE property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_gtype(
            name: string,
            nick: string | null,
            blurb: string | null,
            is_a_type: GType,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecInt instance specifying a %G_TYPE_INT property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_int(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecInt64 instance specifying a %G_TYPE_INT64 property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_int64(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecLong instance specifying a %G_TYPE_LONG property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_long(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecBoxed instance specifying a %G_TYPE_OBJECT
         * derived property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_object(
            name: string,
            nick: string | null,
            blurb: string | null,
            object_type: GType,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecParam instance specifying a %G_TYPE_PARAM
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_param(
            name: string,
            nick: string | null,
            blurb: string | null,
            param_type: GType,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecPointer instance specifying a pointer property.
         * Where possible, it is better to use g_param_spec_object() or
         * g_param_spec_boxed() to expose memory management information.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_pointer(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecString instance.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_string(
            name: string,
            nick: string | null,
            blurb: string | null,
            default_value: string | null,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecUChar instance specifying a %G_TYPE_UCHAR property.
         */
        export function param_spec_uchar(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecUInt instance specifying a %G_TYPE_UINT property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_uint(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecUInt64 instance specifying a %G_TYPE_UINT64
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_uint64(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecULong instance specifying a %G_TYPE_ULONG
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_ulong(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecUnichar instance specifying a %G_TYPE_UINT
         * property. #GValue structures for this property can be accessed with
         * g_value_set_uint() and g_value_get_uint().
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_unichar(
            name: string,
            nick: string | null,
            blurb: string | null,
            default_value: number,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecVariant instance specifying a #GVariant
         * property.
         *
         * If `default_value `is floating, it is consumed.
         *
         * See g_param_spec_internal() for details on property names.
         */
        export function param_spec_variant(
            name: string,
            nick: string | null,
            blurb: string | null,
            type: GLib.VariantType,
            default_value: GLib.Variant | null,
            flags: ParamFlags
        ): ParamSpec;
        /**
         * Registers `name `as the name of a new static type derived
         * from %G_TYPE_PARAM.
         *
         * The type system uses the information contained in the #GParamSpecTypeInfo
         * structure pointed to by `info `to manage the #GParamSpec type and its
         * instances.
         */
        export function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo): GType;
        /**
         * Transforms `src_value `into `dest_value `if possible, and then
         * validates dest_value, in order for it to conform to `pspec.`  If
         * `strict_validation `is %TRUE this function will only succeed if the
         * transformed `dest_value `complied to `pspec `without modifications.
         *
         * See also g_value_type_transformable(), g_value_transform() and
         * g_param_value_validate().
         */
        export function param_value_convert(
            pspec: ParamSpec,
            src_value: Value | any,
            dest_value: Value | any,
            strict_validation: boolean
        ): boolean;
        /**
         * Checks whether `value `contains the default value as specified in `pspec.`
         */
        export function param_value_defaults(pspec: ParamSpec, value: Value | any): boolean;
        /**
         * Return whether the contents of `value `comply with the specifications
         * set out by `pspec.`
         */
        export function param_value_is_valid(pspec: ParamSpec, value: Value | any): boolean;
        /**
         * Sets `value `to its default value as specified in `pspec.`
         */
        export function param_value_set_default(pspec: ParamSpec, value: Value | any): void;
        /**
         * Ensures that the contents of `value `comply with the specifications
         * set out by `pspec.` For example, a #GParamSpecInt might require
         * that integers stored in `value `may not be smaller than -42 and not be
         * greater than +42. If `value `contains an integer outside of this range,
         * it is modified accordingly, so the resulting value will fit into the
         * range -42 .. +42.
         */
        export function param_value_validate(pspec: ParamSpec, value: Value | any): boolean;
        /**
         * Compares value1 with value2 according to pspec, and return -1, 0 or +1,
         * if value1 is found to be less than, equal to or greater than value2,
         * respectively.
         */
        export function param_values_cmp(pspec: ParamSpec, value1: Value | any, value2: Value | any): number;
        /**
         * Creates a new %G_TYPE_POINTER derived type id for a new
         * pointer type with name `name.`
         */
        export function pointer_type_register_static(name: string): GType;
        /**
         * A predefined #GSignalAccumulator for signals intended to be used as a
         * hook for application code to provide a particular value.  Usually
         * only one such value is desired and multiple handlers for the same
         * signal don't make much sense (except for the case of the default
         * handler defined in the class structure, in which case you will
         * usually want the signal connection to override the class handler).
         *
         * This accumulator will use the return value from the first signal
         * handler that is run as the return value for the signal and not run
         * any further handlers (ie: the first handler "wins").
         */
        export function signal_accumulator_first_wins(
            ihint: SignalInvocationHint,
            return_accu: Value | any,
            handler_return: Value | any,
            dummy?: any | null
        ): boolean;
        /**
         * A predefined #GSignalAccumulator for signals that return a
         * boolean values. The behavior that this accumulator gives is
         * that a return of %TRUE stops the signal emission: no further
         * callbacks will be invoked, while a return of %FALSE allows
         * the emission to continue. The idea here is that a %TRUE return
         * indicates that the callback handled the signal, and no further
         * handling is needed.
         */
        export function signal_accumulator_true_handled(
            ihint: SignalInvocationHint,
            return_accu: Value | any,
            handler_return: Value | any,
            dummy?: any | null
        ): boolean;
        /**
         * Adds an emission hook for a signal, which will get called for any emission
         * of that signal, independent of the instance. This is possible only
         * for signals which don't have %G_SIGNAL_NO_HOOKS flag set.
         */
        export function signal_add_emission_hook(
            signal_id: number,
            detail: GLib.Quark,
            data_destroy?: GLib.DestroyNotify | null
        ): number;
        /**
         * Calls the original class closure of a signal. This function should only
         * be called from an overridden class closure; see
         * g_signal_override_class_closure() and
         * g_signal_override_class_handler().
         */
        export function signal_chain_from_overridden(instance_and_params: Value[], return_value: Value | any): void;
        /**
         * Connects a closure to a signal for a particular object.
         *
         * If `closure `is a floating reference (see g_closure_sink()), this function
         * takes ownership of `closure.`
         */
        export function signal_connect_closure(
            instance: Object,
            detailed_signal: string,
            closure: Closure,
            after: boolean
        ): number;
        /**
         * Connects a closure to a signal for a particular object.
         *
         * If `closure `is a floating reference (see g_closure_sink()), this function
         * takes ownership of `closure.`
         */
        export function signal_connect_closure_by_id(
            instance: Object,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure,
            after: boolean
        ): number;
        /**
         * Emits a signal. Signal emission is done synchronously.
         * The method will only return control after all handlers are called or signal emission was stopped.
         *
         * Note that g_signal_emitv() doesn't change `return_value `if no handlers are
         * connected, in contrast to g_signal_emit() and g_signal_emit_valist().
         */
        export function signal_emitv(
            instance_and_params: Value[],
            signal_id: number,
            detail: GLib.Quark,
            return_value?: Value | any
        ): unknown;
        /**
         * Returns the invocation hint of the innermost signal emission of instance.
         */
        export function signal_get_invocation_hint(instance: Object): SignalInvocationHint | null;
        /**
         * Blocks a handler of an instance so it will not be called during any
         * signal emissions unless it is unblocked again. Thus "blocking" a
         * signal handler means to temporarily deactivate it, a signal handler
         * has to be unblocked exactly the same amount of times it has been
         * blocked before to become active again.
         *
         * The `handler_id `has to be a valid signal handler id, connected to a
         * signal of `instance.`
         */
        export function signal_handler_block(instance: Object, handler_id: number): void;
        /**
         * Disconnects a handler from an instance so it will not be called during
         * any future or currently ongoing emissions of the signal it has been
         * connected to. The `handler_id `becomes invalid and may be reused.
         *
         * The `handler_id `has to be a valid signal handler id, connected to a
         * signal of `instance.`
         */
        export function signal_handler_disconnect(instance: Object, handler_id: number): void;
        /**
         * Returns whether `handler_id `is the ID of a handler connected to `instance.`
         */
        export function signal_handler_is_connected(instance: Object, handler_id: number): boolean;
        /**
         * Undoes the effect of a previous g_signal_handler_block() call.  A
         * blocked handler is skipped during signal emissions and will not be
         * invoked, unblocking it (for exactly the amount of times it has been
         * blocked before) reverts its "blocked" state, so the handler will be
         * recognized by the signal system and is called upon future or
         * currently ongoing signal emissions (since the order in which
         * handlers are called during signal emissions is deterministic,
         * whether the unblocked handler in question is called as part of a
         * currently ongoing emission depends on how far that emission has
         * proceeded yet).
         *
         * The `handler_id `has to be a valid id of a signal handler that is
         * connected to a signal of `instance `and is currently blocked.
         */
        export function signal_handler_unblock(instance: Object, handler_id: number): void;
        /**
         * Blocks all handlers on an instance that match a certain selection criteria.
         * The criteria mask is passed as an OR-ed combination of #GSignalMatchType
         * flags, and the criteria values are passed as arguments.
         * Passing at least one of the %G_SIGNAL_MATCH_CLOSURE, %G_SIGNAL_MATCH_FUNC
         * or %G_SIGNAL_MATCH_DATA match flags is required for successful matches.
         * If no handlers were found, 0 is returned, the number of blocked handlers
         * otherwise.
         */
        export function signal_handlers_block_matched(
            instance: Object,
            mask: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            func?: any | null,
            data?: any | null
        ): number;
        /**
         * Destroy all signal handlers of a type instance. This function is
         * an implementation detail of the #GObject dispose implementation,
         * and should not be used outside of the type system.
         */
        export function signal_handlers_destroy(instance: Object): void;
        /**
         * Disconnects all handlers on an instance that match a certain
         * selection criteria. The criteria mask is passed as an OR-ed
         * combination of #GSignalMatchType flags, and the criteria values are
         * passed as arguments.  Passing at least one of the
         * %G_SIGNAL_MATCH_CLOSURE, %G_SIGNAL_MATCH_FUNC or
         * %G_SIGNAL_MATCH_DATA match flags is required for successful
         * matches.  If no handlers were found, 0 is returned, the number of
         * disconnected handlers otherwise.
         */
        export function signal_handlers_disconnect_matched(
            instance: Object,
            mask: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            func?: any | null,
            data?: any | null
        ): number;
        /**
         * Unblocks all handlers on an instance that match a certain selection
         * criteria. The criteria mask is passed as an OR-ed combination of
         * #GSignalMatchType flags, and the criteria values are passed as arguments.
         * Passing at least one of the %G_SIGNAL_MATCH_CLOSURE, %G_SIGNAL_MATCH_FUNC
         * or %G_SIGNAL_MATCH_DATA match flags is required for successful matches.
         * If no handlers were found, 0 is returned, the number of unblocked handlers
         * otherwise. The match criteria should not apply to any handlers that are
         * not currently blocked.
         */
        export function signal_handlers_unblock_matched(
            instance: Object,
            mask: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            func?: any | null,
            data?: any | null
        ): number;
        /**
         * Returns whether there are any handlers connected to `instance `for the
         * given signal id and detail.
         *
         * If `detail `is 0 then it will only match handlers that were connected
         * without detail.  If `detail `is non-zero then it will match handlers
         * connected both without detail and with the given detail.  This is
         * consistent with how a signal emitted with `detail `would be delivered
         * to those handlers.
         *
         * Since 2.46 this also checks for a non-default class closure being
         * installed, as this is basically always what you want.
         *
         * One example of when you might use this is when the arguments to the
         * signal are difficult to compute. A class implementor may opt to not
         * emit the signal if no one is attached anyway, thus saving the cost
         * of building the arguments.
         */
        export function signal_has_handler_pending(
            instance: Object,
            signal_id: number,
            detail: GLib.Quark,
            may_be_blocked: boolean
        ): boolean;
        /**
         * Validate a signal name. This can be useful for dynamically-generated signals
         * which need to be validated at run-time before actually trying to create them.
         *
         * See [canonical parameter names][canonical-parameter-names] for details of
         * the rules for valid names. The rules for signal names are the same as those
         * for property names.
         */
        export function signal_is_valid_name(name: string): boolean;
        /**
         * Lists the signals by id that a certain instance or interface type
         * created. Further information about the signals can be acquired through
         * g_signal_query().
         */
        export function signal_list_ids(itype: GType): number[];
        /**
         * Given the name of the signal and the type of object it connects to, gets
         * the signal's identifying integer. Emitting the signal by number is
         * somewhat faster than using the name each time.
         *
         * Also tries the ancestors of the given type.
         *
         * The type class passed as `itype `must already have been instantiated (for
         * example, using g_type_class_ref()) for this function to work, as signals are
         * always installed during class initialization.
         *
         * See g_signal_new() for details on allowed signal names.
         */
        export function signal_lookup(name: string, itype: GType): number;
        /**
         * Given the signal's identifier, finds its name.
         *
         * Two different signals may have the same name, if they have differing types.
         */
        export function signal_name(signal_id: number): string | null;
        /**
         * Overrides the class closure (i.e. the default handler) for the given signal
         * for emissions on instances of `instance_type.` `instance_type `must be derived
         * from the type to which the signal belongs.
         *
         * See g_signal_chain_from_overridden() and
         * g_signal_chain_from_overridden_handler() for how to chain up to the
         * parent class closure from inside the overridden one.
         */
        export function signal_override_class_closure(
            signal_id: number,
            instance_type: GType,
            class_closure: Closure
        ): void;
        /**
         * Internal function to parse a signal name into its signal_id
         * and `detail `quark.
         */
        export function signal_parse_name(
            detailed_signal: string,
            itype: GType,
            force_detail_quark: boolean
        ): [boolean, number, GLib.Quark];
        /**
         * Queries the signal system for in-depth information about a
         * specific signal. This function will fill in a user-provided
         * structure to hold signal-specific information. If an invalid
         * signal id is passed in, the `signal_id `member of the #GSignalQuery
         * is 0. All members filled into the #GSignalQuery structure should
         * be considered constant and have to be left untouched.
         */
        export function signal_query(signal_id: number): SignalQuery;
        /**
         * Deletes an emission hook.
         */
        export function signal_remove_emission_hook(signal_id: number, hook_id: number): void;
        /**
         * Change the #GSignalCVaMarshaller used for a given signal.  This is a
         * specialised form of the marshaller that can often be used for the
         * common case of a single connected signal handler and avoids the
         * overhead of #GValue.  Its use is optional.
         */
        export function signal_set_va_marshaller(
            signal_id: number,
            instance_type: GType,
            va_marshaller: SignalCVaMarshaller
        ): void;
        /**
         * Stops a signal's current emission.
         *
         * This will prevent the default method from running, if the signal was
         * %G_SIGNAL_RUN_LAST and you connected normally (i.e. without the "after"
         * flag).
         *
         * Prints a warning if used on a signal which isn't being emitted.
         */
        export function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark): void;
        /**
         * Stops a signal's current emission.
         *
         * This is just like g_signal_stop_emission() except it will look up the
         * signal id for you.
         */
        export function signal_stop_emission_by_name(instance: Object, detailed_signal: string): void;
        /**
         * Creates a new closure which invokes the function found at the offset
         * `struct_offset `in the class structure of the interface or classed type
         * identified by `itype.`
         */
        export function signal_type_cclosure_new(itype: GType, struct_offset: number): Closure;
        /**
         * Set the callback for a source as a #GClosure.
         *
         * If the source is not one of the standard GLib types, the closure_callback
         * and `closure_marshal `fields of the #GSourceFuncs structure must have been
         * filled in with pointers to appropriate functions.
         */
        export function source_set_closure(source: GLib.Source, closure: Closure): void;
        /**
         * Sets a dummy callback for `source.` The callback will do nothing, and
         * if the source expects a #gboolean return value, it will return %TRUE.
         * (If the source expects any other type of return value, it will return
         * a 0/%NULL value; whatever g_value_init() initializes a #GValue to for
         * that type.)
         *
         * If the source is not one of the standard GLib types, the
         * `closure_callback `and `closure_marshal `fields of the #GSourceFuncs
         * structure must have been filled in with pointers to appropriate
         * functions.
         */
        export function source_set_dummy_callback(source: GLib.Source): void;
        /**
         * Return a newly allocated string, which describes the contents of a
         * #GValue.  The main purpose of this function is to describe #GValue
         * contents for debugging output, the way in which the contents are
         * described may change between different GLib versions.
         */
        export function strdup_value_contents(value: Value | any): string;
        /**
         * Registers a private class structure for a classed type;
         * when the class is allocated, the private structures for
         * the class and all of its parent types are allocated
         * sequentially in the same memory block as the public
         * structures, and are zero-filled.
         *
         * This function should be called in the
         * type's get_type() function after the type is registered.
         * The private structure can be retrieved using the
         * G_TYPE_CLASS_GET_PRIVATE() macro.
         */
        export function type_add_class_private(class_type: GType, private_size: number): void;
        export function type_add_instance_private(class_type: GType, private_size: number): number;
        /**
         * Adds `interface_type `to the dynamic `instance_type.` The information
         * contained in the #GTypePlugin structure pointed to by plugin
         * is used to manage the relationship.
         */
        export function type_add_interface_dynamic(
            instance_type: GType,
            interface_type: GType,
            plugin: TypePlugin
        ): void;
        /**
         * Adds `interface_type `to the static `instance_type.`
         * The information contained in the #GInterfaceInfo structure
         * pointed to by `info `is used to manage the relationship.
         */
        export function type_add_interface_static(
            instance_type: GType,
            interface_type: GType,
            info: InterfaceInfo
        ): void;
        export function type_check_class_is_a(g_class: TypeClass, is_a_type: GType): boolean;
        /**
         * Private helper function to aid implementation of the
         * G_TYPE_CHECK_INSTANCE() macro.
         */
        export function type_check_instance(instance: TypeInstance): boolean;
        export function type_check_instance_is_a(instance: TypeInstance, iface_type: GType): boolean;
        export function type_check_instance_is_fundamentally_a(
            instance: TypeInstance,
            fundamental_type: GType
        ): boolean;
        export function type_check_is_value_type(type: GType): boolean;
        export function type_check_value(value: Value | any): boolean;
        export function type_check_value_holds(value: Value | any, type: GType): boolean;
        /**
         * Return a newly allocated and 0-terminated array of type IDs, listing
         * the child types of `type.`
         */
        export function type_children(type: GType): GType[];
        export function type_class_adjust_private_offset(g_class: any | null, private_size_or_offset: number): void;
        /**
         * This function is essentially the same as g_type_class_ref(),
         * except that the classes reference count isn't incremented.
         * As a consequence, this function may return %NULL if the class
         * of the type passed in does not currently exist (hasn't been
         * referenced before).
         */
        export function type_class_peek(type: GType): TypeClass;
        /**
         * A more efficient version of g_type_class_peek() which works only for
         * static types.
         */
        export function type_class_peek_static(type: GType): TypeClass;
        /**
         * Increments the reference count of the class structure belonging to
         * `type.` This function will demand-create the class if it doesn't
         * exist already.
         */
        export function type_class_ref(type: GType): TypeClass;
        /**
         * If the interface type `g_type `is currently in use, returns its
         * default interface vtable.
         */
        export function type_default_interface_peek(g_type: GType): TypeInterface;
        /**
         * Increments the reference count for the interface type g_type,
         * and returns the default interface vtable for the type.
         *
         * If the type is not currently in use, then the default vtable
         * for the type will be created and initialized by calling
         * the base interface init and default vtable init functions for
         * the type (the `base_init `and `class_init `members of #GTypeInfo).
         * Calling g_type_default_interface_ref() is useful when you
         * want to make sure that signals and properties for an interface
         * have been installed.
         */
        export function type_default_interface_ref(g_type: GType): TypeInterface;
        /**
         * Decrements the reference count for the type corresponding to the
         * interface default vtable `g_iface.` If the type is dynamic, then
         * when no one is using the interface and all references have
         * been released, the finalize function for the interface's default
         * vtable (the `class_finalize `member of #GTypeInfo) will be called.
         */
        export function type_default_interface_unref(g_iface: TypeInterface): void;
        /**
         * Returns the length of the ancestry of the passed in type. This
         * includes the type itself, so that e.g. a fundamental type has depth 1.
         */
        export function type_depth(type: GType): number;
        /**
         * Ensures that the indicated `type `has been registered with the
         * type system, and its _class_init() method has been run.
         *
         * In theory, simply calling the type's _get_type() method (or using
         * the corresponding macro) is supposed take care of this. However,
         * _get_type() methods are often marked %G_GNUC_CONST for performance
         * reasons, even though this is technically incorrect (since
         * %G_GNUC_CONST requires that the function not have side effects,
         * which _get_type() methods do on the first call). As a result, if
         * you write a bare call to a _get_type() macro, it may get optimized
         * out by the compiler. Using g_type_ensure() guarantees that the
         * type's _get_type() method is called.
         */
        export function type_ensure(type: GType): void;
        /**
         * Frees an instance of a type, returning it to the instance pool for
         * the type, if there is one.
         *
         * Like g_type_create_instance(), this function is reserved for
         * implementors of fundamental types.
         */
        export function type_free_instance(instance: TypeInstance): void;
        /**
         * Look up the type ID from a given type name, returning 0 if no type
         * has been registered under this name (this is the preferred method
         * to find out by name whether a specific type has been registered
         * yet).
         */
        export function type_from_name(name: string): GType;
        /**
         * Internal function, used to extract the fundamental type ID portion.
         * Use G_TYPE_FUNDAMENTAL() instead.
         */
        export function type_fundamental(type_id: GType): GType;
        /**
         * Returns the next free fundamental type id which can be used to
         * register a new fundamental type with g_type_register_fundamental().
         * The returned type ID represents the highest currently registered
         * fundamental type identifier.
         */
        export function type_fundamental_next(): GType;
        /**
         * Returns the number of instances allocated of the particular type;
         * this is only available if GLib is built with debugging support and
         * the instance_count debug flag is set (by setting the GOBJECT_DEBUG
         * variable to include instance-count).
         */
        export function type_get_instance_count(type: GType): number;
        /**
         * Returns the #GTypePlugin structure for `type.`
         */
        export function type_get_plugin(type: GType): TypePlugin;
        /**
         * Obtains data which has previously been attached to type
         * with g_type_set_qdata().
         *
         * Note that this does not take subtyping into account; data
         * attached to one type with g_type_set_qdata() cannot
         * be retrieved from a subtype using g_type_get_qdata().
         */
        export function type_get_qdata(type: GType, quark: GLib.Quark): any | null;
        /**
         * Returns an opaque serial number that represents the state of the set
         * of registered types. Any time a type is registered this serial changes,
         * which means you can cache information based on type lookups (such as
         * g_type_from_name()) and know if the cache is still valid at a later
         * time by comparing the current serial with the one at the type lookup.
         */
        export function type_get_type_registration_serial(): number;
        /**
         * This function used to initialise the type system.  Since GLib 2.36,
         * the type system is initialised automatically and this function does
         * nothing.
         */
        export function type_init(): void;
        /**
         * This function used to initialise the type system with debugging
         * flags.  Since GLib 2.36, the type system is initialised automatically
         * and this function does nothing.
         *
         * If you need to enable debugging features, use the GOBJECT_DEBUG
         * environment variable.
         */
        export function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void;
        /**
         * Adds `prerequisite_type `to the list of prerequisites of `interface_type.`
         * This means that any type implementing `interface_type `must also implement
         * `prerequisite_type.` Prerequisites can be thought of as an alternative to
         * interface derivation (which GType doesn't support). An interface can have
         * at most one instantiatable prerequisite type.
         */
        export function type_interface_add_prerequisite(interface_type: GType, prerequisite_type: GType): void;
        /**
         * Returns the #GTypePlugin structure for the dynamic interface
         * `interface_type `which has been added to instance_type, or %NULL
         * if `interface_type `has not been added to `instance_type `or does
         * not have a #GTypePlugin structure. See g_type_add_interface_dynamic().
         */
        export function type_interface_get_plugin(instance_type: GType, interface_type: GType): TypePlugin;
        /**
         * Returns the most specific instantiatable prerequisite of an
         * interface type. If the interface type has no instantiatable
         * prerequisite, %G_TYPE_INVALID is returned.
         *
         * See g_type_interface_add_prerequisite() for more information
         * about prerequisites.
         */
        export function type_interface_instantiatable_prerequisite(interface_type: GType): GType;
        /**
         * Returns the #GTypeInterface structure of an interface to which the
         * passed in class conforms.
         */
        export function type_interface_peek(instance_class: TypeClass, iface_type: GType): TypeInterface;
        /**
         * Returns the prerequisites of an interfaces type.
         */
        export function type_interface_prerequisites(interface_type: GType): GType[];
        /**
         * Return a newly allocated and 0-terminated array of type IDs, listing
         * the interface types that `type `conforms to.
         */
        export function type_interfaces(type: GType): GType[];
        /**
         * If `is_a_type `is a derivable type, check whether `type `is a
         * descendant of `is_a_type.` If `is_a_type `is an interface, check
         * whether `type `conforms to it.
         */
        export function type_is_a(type: GType, is_a_type: GType): boolean;
        /**
         * Get the unique name that is assigned to a type ID.  Note that this
         * function (like all other GType API) cannot cope with invalid type
         * IDs. %G_TYPE_INVALID may be passed to this function, as may be any
         * other validly registered type ID, but randomized type IDs should
         * not be passed in and will most likely lead to a crash.
         */
        export function type_name(type: GType): string | null;
        export function type_name_from_class(g_class: TypeClass): string;
        export function type_name_from_instance(instance: TypeInstance): string;
        /**
         * Given a `leaf_type `and a `root_type `which is contained in its
         * ancestry, return the type that `root_type `is the immediate parent
         * of. In other words, this function determines the type that is
         * derived directly from `root_type `which is also a base class of
         * `leaf_type.`  Given a root type and a leaf type, this function can
         * be used to determine the types and order in which the leaf type is
         * descended from the root type.
         */
        export function type_next_base(leaf_type: GType, root_type: GType): GType;
        /**
         * Return the direct parent type of the passed in type. If the passed
         * in type has no parent, i.e. is a fundamental type, 0 is returned.
         */
        export function type_parent(type: GType): GType;
        /**
         * Get the corresponding quark of the type IDs name.
         */
        export function type_qname(type: GType): GLib.Quark;
        /**
         * Queries the type system for information about a specific type.
         * This function will fill in a user-provided structure to hold
         * type-specific information. If an invalid #GType is passed in, the
         * `type `member of the #GTypeQuery is 0. All members filled into the
         * #GTypeQuery structure should be considered constant and have to be
         * left untouched.
         */
        export function type_query(type: GType): TypeQuery;
        /**
         * Registers `type_name `as the name of a new dynamic type derived from
         * `parent_type.`  The type system uses the information contained in the
         * #GTypePlugin structure pointed to by `plugin `to manage the type and its
         * instances (if not abstract).  The value of `flags `determines the nature
         * (e.g. abstract or not) of the type.
         */
        export function type_register_dynamic(
            parent_type: GType,
            type_name: string,
            plugin: TypePlugin,
            flags: TypeFlags
        ): GType;
        /**
         * Registers `type_id `as the predefined identifier and `type_name `as the
         * name of a fundamental type. If `type_id `is already registered, or a
         * type named `type_name `is already registered, the behaviour is undefined.
         * The type system uses the information contained in the #GTypeInfo structure
         * pointed to by `info `and the #GTypeFundamentalInfo structure pointed to by
         * `finfo `to manage the type and its instances. The value of `flags `determines
         * additional characteristics of the fundamental type.
         */
        export function type_register_fundamental(
            type_id: GType,
            type_name: string,
            info: TypeInfo,
            finfo: TypeFundamentalInfo,
            flags: TypeFlags
        ): GType;
        /**
         * Registers `type_name `as the name of a new static type derived from
         * `parent_type.` The type system uses the information contained in the
         * #GTypeInfo structure pointed to by `info `to manage the type and its
         * instances (if not abstract). The value of `flags `determines the nature
         * (e.g. abstract or not) of the type.
         */
        export function type_register_static(
            parent_type: GType,
            type_name: string,
            info: TypeInfo,
            flags: TypeFlags
        ): GType;
        /**
         * Attaches arbitrary data to a type.
         */
        export function type_set_qdata(type: GType, quark: GLib.Quark, data?: any | null): void;
        export function type_test_flags(type: GType, flags: number): boolean;
        /**
         * Returns whether a #GValue of type `src_type `can be copied into
         * a #GValue of type `dest_type.`
         */
        export function value_type_compatible(src_type: GType, dest_type: GType): boolean;
        /**
         * Check whether g_value_transform() is able to transform values
         * of type `src_type `into values of type `dest_type.` Note that for
         * the types to be transformable, they must be compatible or a
         * transformation function must be registered.
         */
        export function value_type_transformable(src_type: GType, dest_type: GType): boolean;
        export type BaseFinalizeFunc = (g_class: TypeClass) => void;
        export type BaseInitFunc = (g_class: TypeClass) => void;
        export type BindingTransformFunc = (
            binding: Binding,
            from_value: Value | any,
            to_value: Value | any
        ) => boolean;
        export type BoxedCopyFunc = (boxed: any) => any;
        export type BoxedFreeFunc = (boxed: any) => void;
        export type Callback = () => void;
        export type ClassFinalizeFunc = (g_class: TypeClass, class_data?: any | null) => void;
        export type ClassInitFunc = (g_class: TypeClass, class_data?: any | null) => void;
        export type ClosureMarshal = (
            closure: Closure,
            return_value: Value | null,
            param_values: Value[],
            invocation_hint?: any | null,
            marshal_data?: any | null
        ) => void;
        export type ClosureNotify = (data: any | null, closure: Closure) => void;
        export type InstanceInitFunc = (instance: TypeInstance, g_class: TypeClass) => void;
        export type InterfaceFinalizeFunc = (g_iface: TypeInterface, iface_data?: any | null) => void;
        export type InterfaceInitFunc = (g_iface: TypeInterface, iface_data?: any | null) => void;
        export type ObjectFinalizeFunc<A = Object> = (object: A) => void;
        export type ObjectGetPropertyFunc<A = Object> = (
            object: A,
            property_id: number,
            value: Value | any,
            pspec: ParamSpec
        ) => void;
        export type ObjectSetPropertyFunc<A = Object> = (
            object: A,
            property_id: number,
            value: Value | any,
            pspec: ParamSpec
        ) => void;
        export type SignalAccumulator = (
            ihint: SignalInvocationHint,
            return_accu: Value | any,
            handler_return: Value | any,
            data?: any | null
        ) => boolean;
        export type SignalEmissionHook = (
            ihint: SignalInvocationHint,
            param_values: Value[],
            data?: any | null
        ) => boolean;
        export type ToggleNotify<A = Object> = (data: any | null, object: A, is_last_ref: boolean) => void;
        export type TypeClassCacheFunc = (cache_data: any | null, g_class: TypeClass) => boolean;
        export type TypeInterfaceCheckFunc = (check_data: any | null, g_iface: TypeInterface) => void;
        export type TypePluginCompleteInterfaceInfo = (
            plugin: TypePlugin,
            instance_type: GType,
            interface_type: GType,
            info: InterfaceInfo
        ) => void;
        export type TypePluginCompleteTypeInfo = (
            plugin: TypePlugin,
            g_type: GType,
            info: TypeInfo,
            value_table: TypeValueTable
        ) => void;
        export type TypePluginUnuse = (plugin: TypePlugin) => void;
        export type TypePluginUse = (plugin: TypePlugin) => void;
        export type ValueTransform = (src_value: Value | any, dest_value: Value | any) => void;
        export type WeakNotify<A = Object> = (data: any | null, where_the_object_was: A) => void;

        export namespace BindingFlags {
            export const $gtype: GType<BindingFlags>;
        }

        /**
         * Flags to be passed to g_object_bind_property() or
         * g_object_bind_property_full().
         *
         * This enumeration can be extended at later date.
         */
        export enum BindingFlags {
            /**
             * The default binding; if the source property
             * changes, the target property is updated with its value.
             */
            DEFAULT = 0,
            /**
             * Bidirectional binding; if either the
             * property of the source or the property of the target changes,
             * the other is updated.
             */
            BIDIRECTIONAL = 1,
            /**
             * Synchronize the values of the source and
             * target properties when creating the binding; the direction of
             * the synchronization is always from the source to the target.
             */
            SYNC_CREATE = 2,
            /**
             * If the two properties being bound are
             * booleans, setting one to %TRUE will result in the other being
             * set to %FALSE and vice versa. This flag will only work for
             * boolean properties, and cannot be used when passing custom
             * transformation functions to g_object_bind_property_full().
             */
            INVERT_BOOLEAN = 4,
        }

        export namespace ConnectFlags {
            export const $gtype: GType<ConnectFlags>;
        }

        /**
         * The connection flags are used to specify the behaviour of a signal's
         * connection.
         */
        export enum ConnectFlags {
            /**
             * Default behaviour (no special flags). Since: 2.74
             */
            DEFAULT = 0,
            /**
             * If set, the handler should be called after the
             * default handler of the signal. Normally, the handler is called before
             * the default handler.
             */
            AFTER = 1,
            /**
             * If set, the instance and data should be swapped when
             * calling the handler; see g_signal_connect_swapped() for an example.
             */
            SWAPPED = 2,
        }

        export namespace ParamFlags {
            export const $gtype: GType<ParamFlags>;
        }

        /**
         * Through the #GParamFlags flag values, certain aspects of parameters
         * can be configured.
         *
         * See also: %G_PARAM_STATIC_STRINGS
         */
        export enum ParamFlags {
            /**
             * the parameter is readable
             */
            READABLE = 1,
            /**
             * the parameter is writable
             */
            WRITABLE = 2,
            /**
             * alias for %G_PARAM_READABLE | %G_PARAM_WRITABLE
             */
            READWRITE = 3,
            /**
             * the parameter will be set upon object construction
             */
            CONSTRUCT = 4,
            /**
             * the parameter can only be set upon object construction
             */
            CONSTRUCT_ONLY = 8,
            /**
             * upon parameter conversion (see g_param_value_convert())
             * strict validation is not required
             */
            LAX_VALIDATION = 16,
            /**
             * the string used as name when constructing the
             * parameter is guaranteed to remain valid and
             * unmodified for the lifetime of the parameter.
             * Since 2.8
             */
            STATIC_NAME = 32,
            /**
             * internal
             */
            PRIVATE = 32,
            /**
             * the string used as nick when constructing the
             * parameter is guaranteed to remain valid and
             * unmmodified for the lifetime of the parameter.
             * Since 2.8
             */
            STATIC_NICK = 64,
            /**
             * the string used as blurb when constructing the
             * parameter is guaranteed to remain valid and
             * unmodified for the lifetime of the parameter.
             * Since 2.8
             */
            STATIC_BLURB = 128,
            /**
             * calls to g_object_set_property() for this
             * property will not automatically result in a "notify" signal being
             * emitted: the implementation must call g_object_notify() themselves
             * in case the property actually changes.  Since: 2.42.
             */
            EXPLICIT_NOTIFY = 1073741824,
            /**
             * the parameter is deprecated and will be removed
             * in a future version. A warning will be generated if it is used
             * while running with G_ENABLE_DIAGNOSTIC=1.
             * Since 2.26
             */
            DEPRECATED = 2147483648,
        }

        export namespace SignalFlags {
            export const $gtype: GType<SignalFlags>;
        }

        /**
         * The signal flags are used to specify a signal's behaviour.
         */
        export enum SignalFlags {
            /**
             * Invoke the object method handler in the first emission stage.
             */
            RUN_FIRST = 1,
            /**
             * Invoke the object method handler in the third emission stage.
             */
            RUN_LAST = 2,
            /**
             * Invoke the object method handler in the last emission stage.
             */
            RUN_CLEANUP = 4,
            /**
             * Signals being emitted for an object while currently being in
             * emission for this very object will not be emitted recursively,
             * but instead cause the first emission to be restarted.
             */
            NO_RECURSE = 8,
            /**
             * This signal supports "::detail" appendices to the signal name
             * upon handler connections and emissions.
             */
            DETAILED = 16,
            /**
             * Action signals are signals that may freely be emitted on alive
             * objects from user code via g_signal_emit() and friends, without
             * the need of being embedded into extra code that performs pre or
             * post emission adjustments on the object. They can also be thought
             * of as object methods which can be called generically by
             * third-party code.
             */
            ACTION = 32,
            /**
             * No emissions hooks are supported for this signal.
             */
            NO_HOOKS = 64,
            /**
             * Varargs signal emission will always collect the
             * arguments, even if there are no signal handlers connected.  Since 2.30.
             */
            MUST_COLLECT = 128,
            /**
             * The signal is deprecated and will be removed
             * in a future version. A warning will be generated if it is connected while
             * running with G_ENABLE_DIAGNOSTIC=1.  Since 2.32.
             */
            DEPRECATED = 256,
            /**
             * Only used in #GSignalAccumulator accumulator
             * functions for the #GSignalInvocationHint::run_type field to mark the first
             * call to the accumulator function for a signal emission.  Since 2.68.
             */
            ACCUMULATOR_FIRST_RUN = 131072,
        }

        export namespace SignalMatchType {
            export const $gtype: GType<SignalMatchType>;
        }

        /**
         * The match types specify what g_signal_handlers_block_matched(),
         * g_signal_handlers_unblock_matched() and g_signal_handlers_disconnect_matched()
         * match signals by.
         */
        export enum SignalMatchType {
            /**
             * The signal id must be equal.
             */
            ID = 1,
            /**
             * The signal detail must be equal.
             */
            DETAIL = 2,
            /**
             * The closure must be the same.
             */
            CLOSURE = 4,
            /**
             * The C closure callback must be the same.
             */
            FUNC = 8,
            /**
             * The closure data must be the same.
             */
            DATA = 16,
            /**
             * Only unblocked signals may be matched.
             */
            UNBLOCKED = 32,
        }

        export namespace TypeDebugFlags {
            export const $gtype: GType<TypeDebugFlags>;
        }

        /**
         * These flags used to be passed to g_type_init_with_debug_flags() which
         * is now deprecated.
         *
         * If you need to enable debugging features, use the GOBJECT_DEBUG
         * environment variable.
         */
        export enum TypeDebugFlags {
            /**
             * Print no messages
             */
            NONE = 0,
            /**
             * Print messages about object bookkeeping
             */
            OBJECTS = 1,
            /**
             * Print messages about signal emissions
             */
            SIGNALS = 2,
            /**
             * Keep a count of instances of each type
             */
            INSTANCE_COUNT = 4,
            /**
             * Mask covering all debug flags
             */
            MASK = 7,
        }

        export namespace TypeFlags {
            export const $gtype: GType<TypeFlags>;
        }

        /**
         * Bit masks used to check or determine characteristics of a type.
         */
        export enum TypeFlags {
            /**
             * No special flags. Since: 2.74
             */
            NONE = 0,
            /**
             * Indicates an abstract type. No instances can be
             * created for an abstract type
             */
            ABSTRACT = 16,
            /**
             * Indicates an abstract value type, i.e. a type
             * that introduces a value table, but can't be used for
             * g_value_init()
             */
            VALUE_ABSTRACT = 32,
            /**
             * Indicates a final type. A final type is a non-derivable
             * leaf node in a deep derivable type hierarchy tree. Since: 2.70
             */
            FINAL = 64,
            /**
             * The type is deprecated and may be removed in a
             * future version. A warning will be emitted if it is instantiated while
             * running with `G_ENABLE_DIAGNOSTIC=1`. Since 2.76
             */
            DEPRECATED = 128,
        }

        export namespace TypeFundamentalFlags {
            export const $gtype: GType<TypeFundamentalFlags>;
        }

        /**
         * Bit masks used to check or determine specific characteristics of a
         * fundamental type.
         */
        export enum TypeFundamentalFlags {
            /**
             * Indicates a classed type
             */
            CLASSED = 1,
            /**
             * Indicates an instantiatable type (implies classed)
             */
            INSTANTIATABLE = 2,
            /**
             * Indicates a flat derivable type
             */
            DERIVABLE = 4,
            /**
             * Indicates a deep derivable type (implies derivable)
             */
            DEEP_DERIVABLE = 8,
        }
        export module Binding {
            export interface ConstructorProperties extends Object.ConstructorProperties {
                [key: string]: any;
                flags: BindingFlags;
                source: Object;
                source_property: string;
                sourceProperty: string;
                target: Object;
                target_property: string;
                targetProperty: string;
            }
        }
        export class Binding extends Object {
            static $gtype: GType<Binding>;

            constructor(properties?: Partial<Binding.ConstructorProperties>, ...args: any[]);
            _init(properties?: Partial<Binding.ConstructorProperties>, ...args: any[]): void;

            // Properties
            get flags(): BindingFlags;
            get source(): Object;
            get source_property(): string;
            get sourceProperty(): string;
            get target(): Object;
            get target_property(): string;
            get targetProperty(): string;

            // Members

            /**
             * Retrieves the #GObject instance used as the source of the binding.
             *
             * A #GBinding can outlive the source #GObject as the binding does not hold a
             * strong reference to the source. If the source is destroyed before the
             * binding then this function will return %NULL.
             */
            dup_source<T = Object>(): T;
            /**
             * Retrieves the #GObject instance used as the target of the binding.
             *
             * A #GBinding can outlive the target #GObject as the binding does not hold a
             * strong reference to the target. If the target is destroyed before the
             * binding then this function will return %NULL.
             */
            dup_target<T = Object>(): T;
            /**
             * Retrieves the flags passed when constructing the #GBinding.
             */
            get_flags(): BindingFlags;
            /**
             * Retrieves the #GObject instance used as the source of the binding.
             *
             * A #GBinding can outlive the source #GObject as the binding does not hold a
             * strong reference to the source. If the source is destroyed before the
             * binding then this function will return %NULL.
             *
             * Use g_binding_dup_source() if the source or binding are used from different
             * threads as otherwise the pointer returned from this function might become
             * invalid if the source is finalized from another thread in the meantime.
             */
            get_source<T = Object>(): T;
            /**
             * Retrieves the name of the property of #GBinding:source used as the source
             * of the binding.
             */
            get_source_property(): string;
            /**
             * Retrieves the #GObject instance used as the target of the binding.
             *
             * A #GBinding can outlive the target #GObject as the binding does not hold a
             * strong reference to the target. If the target is destroyed before the
             * binding then this function will return %NULL.
             *
             * Use g_binding_dup_target() if the target or binding are used from different
             * threads as otherwise the pointer returned from this function might become
             * invalid if the target is finalized from another thread in the meantime.
             */
            get_target<T = Object>(): T;
            /**
             * Retrieves the name of the property of #GBinding:target used as the target
             * of the binding.
             */
            get_target_property(): string;
            /**
             * Explicitly releases the binding between the source and the target
             * property expressed by `binding.`
             *
             * This function will release the reference that is being held on
             * the `binding `instance if the binding is still bound; if you want to hold on
             * to the #GBinding instance after calling g_binding_unbind(), you will need
             * to hold a reference to it.
             *
             * Note however that this function does not take ownership of binding, it
             * only unrefs the reference that was initially created by
             * g_object_bind_property() and is owned by the binding.
             */
            unbind(): void;
        }
        export module BindingGroup {
            export interface ConstructorProperties extends Object.ConstructorProperties {
                [key: string]: any;
                source: Object;
            }
        }
        export class BindingGroup extends Object {
            static $gtype: GType<BindingGroup>;

            constructor(properties?: Partial<BindingGroup.ConstructorProperties>, ...args: any[]);
            _init(properties?: Partial<BindingGroup.ConstructorProperties>, ...args: any[]): void;

            // Properties
            get source(): Object;
            set source(val: Object);

            // Constructors

            static ["new"](): BindingGroup;

            // Members

            /**
             * Creates a binding between `source_property `on the source object
             * and `target_property `on `target.` Whenever the source_property
             * is changed the `target_property `is updated using the same value.
             * The binding flag %G_BINDING_SYNC_CREATE is automatically specified.
             *
             * See g_object_bind_property() for more information.
             */
            bind(source_property: string, target: Object, target_property: string, flags: BindingFlags): void;
            /**
             * Creates a binding between `source_property `on the source object and
             * `target_property `on target, allowing you to set the transformation
             * functions to be used by the binding. The binding flag
             * %G_BINDING_SYNC_CREATE is automatically specified.
             *
             * See g_object_bind_property_full() for more information.
             */
            bind_full(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags,
                transform_to?: BindingTransformFunc | null,
                transform_from?: BindingTransformFunc | null
            ): void;
            /**
             * Creates a binding between `source_property `on the source object and
             * `target_property `on target, allowing you to set the transformation
             * functions to be used by the binding. The binding flag
             * %G_BINDING_SYNC_CREATE is automatically specified.
             *
             * This function is the language bindings friendly version of
             * g_binding_group_bind_property_full(), using #GClosures
             * instead of function pointers.
             *
             * See g_object_bind_property_with_closures() for more information.
             */
            bind_full(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags,
                transform_to?: Closure | null,
                transform_from?: Closure | null
            ): void;
            /**
             * Gets the source object used for binding properties.
             */
            dup_source<T = Object>(): T;
            /**
             * Sets `source `as the source object used for creating property
             * bindings. If there is already a source object all bindings from it
             * will be removed.
             *
             * Note that all properties that have been bound must exist on `source.`
             */
            set_source(source?: Object | null): void;
        }
        export module InitiallyUnowned {
            export interface ConstructorProperties extends Object.ConstructorProperties {
                [key: string]: any;
            }
        }
        export class InitiallyUnowned extends Object {
            static $gtype: GType<InitiallyUnowned>;

            constructor(properties?: Partial<InitiallyUnowned.ConstructorProperties>, ...args: any[]);
            _init(properties?: Partial<InitiallyUnowned.ConstructorProperties>, ...args: any[]): void;
        }
        export module Object {
            export interface ConstructorProperties {
                [key: string]: any;
            }
        }
        export class Object {
            static $gtype: GType<Object>;

            constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
            _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: "notify", callback: (_source: this, pspec: ParamSpec) => void): number;
            connect_after(signal: "notify", callback: (_source: this, pspec: ParamSpec) => void): number;
            emit(signal: "notify", pspec: ParamSpec): void;

            // Constructors

            static newv(object_type: GType, parameters: Parameter[]): Object;

            // Members

            /**
             * Creates a binding between `source_property `on `source `and target_property
             * on `target.`
             *
             * Whenever the `source_property `is changed the `target_property `is
             * updated using the same value. For instance:
             *
             * |[&lt;!-- language="C" --&gt;
             * g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ]|
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags `contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property `on `target `changes then the `source_property `on source
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source `or the
             * `target `instances are finalized. To remove the binding without affecting the
             * `source `and the `target `you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source `and `target `are only used from a single thread and it
             * is clear that both `source `and `target `outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source `or `target `can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             */
            bind_property(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags
            ): Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property `on `source `and target_property
             * on target, allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags `contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property `on `target `changes then the `source_property `on source
             * will be updated as well. The `transform_from `function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source `or the
             * `target `instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data `parameter will be used for both transform_to
             * and `transform_from `transformation functions; the `notify `function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             */
            bind_property_full(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags,
                transform_to?: BindingTransformFunc | null,
                transform_from?: BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null
            ): Binding;
            /**
             * Creates a binding between `source_property `on `source `and target_property
             * on target, allowing you to set the transformation functions to be used by
             * the binding.
             *
             * This function is the language bindings friendly version of
             * g_object_bind_property_full(), using #GClosures instead of
             * function pointers.
             */
            bind_property_full(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags,
                transform_to: Closure,
                transform_from: Closure
            ): Binding;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object.` If the freeze count is
             * non-zero, the emission of "notify" signals on `object `is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties `properties for an `object.`
             * Obtained properties will be set to `values.` All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             */
            getv(names: string[], values: Value[]): void;
            /**
             * Checks whether `object `has a [floating][floating-ref] reference.
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name `on `object.`
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec `on `object.`
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             * |[&lt;!-- language="C" --&gt;
             * typedef enum
             * {
             * PROP_FOO = 1,
             * PROP_LAST
             * } MyObjectProperty;
             *
             * static GParamSpec *properties[PROP_LAST];
             *
             * static void
             * my_object_class_init (MyObjectClass *klass)
             * {
             * properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
             * 0, 100,
             * 50,
             * G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             * g_object_class_install_property (gobject_class,
             * PROP_FOO,
             * properties[PROP_FOO]);
             * }
             * ]|
             *
             * and then notify a change on the "foo" property with:
             *
             * |[&lt;!-- language="C" --&gt;
             * g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ]|
             */
            notify_by_pspec(pspec: ParamSpec): void;
            /**
             * Increases the reference count of `object.`
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object `will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             */
            ref(): Object;
            /**
             * Increase the reference count of object, and possibly remove the
             * [floating][floating-ref] reference, if `object `has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object `will be propagated to the return type
             * under the same conditions as for g_object_ref().
             */
            ref_sink(): Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key `is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key `is kept permanently (even after `object `has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key `in your program, to avoid the #GQuark storage growing unbounded.
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data `from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             * |[&lt;!-- language="C" --&gt;
             * void
             * object_add_to_user_list (GObject     *object,
             * const gchar *new_string)
             * {
             * // the quark, naming the object data
             * GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             * // retrieve the old string list
             * GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             * // prepend new string
             * list = g_list_prepend (list, g_strdup (new_string));
             * // this changed 'list', so we need to set it again
             * g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             * GList *node, *list = data;
             *
             * for (node = list; node; node = node-&gt;next)
             * g_free (node-&gt;data);
             * g_list_free (list);
             * }
             * ]|
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on object
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object.` When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure `to
             * the life time of the object. That is, when the object is finalized,
             * the `closure `is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the closure, to ensure that an extra
             * reference count is held on `object `during invocation of the
             * `closure.`  Usually, this function will be called on closures that
             * use this `object `as closure data.
             */
            watch_closure(closure: Closure): void;
            vfunc_constructed(): void;
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void;
            vfunc_dispose(): void;
            vfunc_finalize(): void;
            vfunc_get_property(property_id: number, value: Value | any, pspec: ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name `on `object.`
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             */
            vfunc_notify(pspec: ParamSpec): void;
            vfunc_set_property(property_id: number, value: Value | any, pspec: ParamSpec): void;
            static compat_control(what: number, data?: any | null): number;
            /**
             * Find the #GParamSpec with the given name for an
             * interface. Generally, the interface vtable passed in as g_iface
             * will be the default vtable from g_type_default_interface_ref(), or,
             * if you know the interface has already been loaded,
             * g_type_default_interface_peek().
             */
            static interface_find_property(g_iface: TypeInterface, property_name: string): ParamSpec;
            /**
             * Add a property to an interface; this is only useful for interfaces
             * that are added to GObject-derived types. Adding a property to an
             * interface forces all objects classes with that interface to have a
             * compatible property. The compatible property could be a newly
             * created #GParamSpec, but normally
             * g_object_class_override_property() will be used so that the object
             * class only needs to provide an implementation and inherits the
             * property description, default value, bounds, and so forth from the
             * interface property.
             *
             * This function is meant to be called from the interface's default
             * vtable initialization function (the `class_init `member of
             * #GTypeInfo.) It must not be called after after `class_init `has
             * been called for any object types implementing this interface.
             *
             * If `pspec `is a floating reference, it will be consumed.
             */
            static interface_install_property(g_iface: TypeInterface, pspec: ParamSpec): void;
            /**
             * Lists the properties of an interface.Generally, the interface
             * vtable passed in as `g_iface `will be the default vtable from
             * g_type_default_interface_ref(), or, if you know the interface has
             * already been loaded, g_type_default_interface_peek().
             */
            static interface_list_properties(g_iface: TypeInterface): ParamSpec[];
            static find_property(property_name: string): ParamSpec;
            static install_properties(pspecs: ParamSpec[]): void;
            static install_property(property_id: number, pspec: ParamSpec): void;
            static list_properties(): ParamSpec[];
            static override_property(property_id: number, name: string): void;
            static _classInit(klass: any): any;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }
        export module ParamSpec {
            export interface ConstructorProperties<A = unknown> {
                [key: string]: any;
            }
        }
        export abstract class ParamSpec<A = unknown> {
            static $gtype: GType<ParamSpec>;

            constructor(properties?: Partial<ParamSpec.ConstructorProperties<A>>, ...args: any[]);
            _init(properties?: Partial<ParamSpec.ConstructorProperties<A>>, ...args: any[]): void;

            // Fields
            name: string;
            flags: ParamFlags;
            value_type: GType;
            owner_type: GType;
            static override: any;

            // Members

            /**
             * Get the short description of a #GParamSpec.
             */
            get_blurb(): string | null;
            /**
             * Gets the default value of `pspec `as a pointer to a #GValue.
             *
             * The #GValue will remain valid for the life of `pspec.`
             */
            get_default_value(): unknown;
            /**
             * Get the name of a #GParamSpec.
             *
             * The name is always an "interned" string (as per g_intern_string()).
             * This allows for pointer-value comparisons.
             */
            get_name(): string;
            /**
             * Gets the GQuark for the name.
             */
            get_name_quark(): GLib.Quark;
            /**
             * Get the nickname of a #GParamSpec.
             */
            get_nick(): string;
            /**
             * Gets back user data pointers stored via g_param_spec_set_qdata().
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * If the paramspec redirects operations to another paramspec,
             * returns that paramspec. Redirect is used typically for
             * providing a new implementation of a property in a derived
             * type while preserving all the properties from the parent
             * type. Redirection is established by creating a property
             * of type #GParamSpecOverride. See g_object_class_override_property()
             * for an example of the use of this capability.
             */
            get_redirect_target(): ParamSpec | null;
            /**
             * Sets an opaque, named pointer on a #GParamSpec. The name is
             * specified through a #GQuark (retrieved e.g. via
             * g_quark_from_static_string()), and the pointer can be gotten back
             * from the `pspec `with g_param_spec_get_qdata().  Setting a
             * previously set user data pointer, overrides (frees) the old pointer
             * set, using %NULL as pointer essentially removes the data stored.
             */
            set_qdata(quark: GLib.Quark, data?: any | null): void;
            /**
             * The initial reference count of a newly created #GParamSpec is 1,
             * even though no one has explicitly called g_param_spec_ref() on it
             * yet. So the initial reference count is flagged as "floating", until
             * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
             * (pspec);` in sequence on it, taking over the initial
             * reference count (thus ending up with a `pspec `that has a reference
             * count of 1 still, but is not flagged "floating" anymore).
             */
            sink(): void;
            /**
             * Gets back user data pointers stored via g_param_spec_set_qdata()
             * and removes the `data `from `pspec `without invoking its destroy()
             * function (if any was set).  Usually, calling this function is only
             * required to update user data pointers with a destroy notifier.
             */
            steal_qdata(quark: GLib.Quark): any | null;
            vfunc_finalize(): void;
            vfunc_value_is_valid(value: Value | any): boolean;
            vfunc_value_set_default(value: Value | any): void;
            vfunc_value_validate(value: Value | any): boolean;
            vfunc_values_cmp(value1: Value | any, value2: Value | any): number;
            /**
             * Validate a property name for a #GParamSpec. This can be useful for
             * dynamically-generated properties which need to be validated at run-time
             * before actually trying to create them.
             *
             * See [canonical parameter names][canonical-parameter-names] for details of
             * the rules for valid names.
             */
            static is_valid_name(name: string): boolean;
            static char(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number
            ): ParamSpec<number>;
            static uchar(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number
            ): ParamSpec<number>;
            static int(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number
            ): ParamSpec<number>;
            static uint(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number
            ): ParamSpec<number>;
            static long(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number
            ): ParamSpec<number>;
            static ulong(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number
            ): ParamSpec<number>;
            static int64(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number
            ): ParamSpec<number>;
            static uint64(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number
            ): ParamSpec<number>;
            static float(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number
            ): ParamSpec<number>;
            static boolean(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                defaultValue: boolean
            ): ParamSpec<boolean>;
            static flags(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                flagsType: any,
                defaultValue: any
            ): ParamSpec<number>;
            static enum<T>(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                enumType: GType<T> | { $gtype: GType<T> },
                defaultValue: any
            ): ParamSpec<T>;
            static double(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number
            ): ParamSpec<number>;
            static string(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                defaultValue: string
            ): ParamSpec<string>;
            static boxed<T>(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                boxedType: GType<T> | { $gtype: GType<T> }
            ): ParamSpec<T>;
            static object<T>(
                name: any,
                nick: any,
                blurb: any,
                flags: any,
                objectType: GType<T> | { $gtype: GType<T> }
            ): ParamSpec<T>;
            static param(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                paramType: any
            ): ParamSpec;
            __type__(arg: never): A;
        }

        export module SignalGroup {
            export interface ConstructorProperties extends Object.ConstructorProperties {
                [key: string]: any;
                target: Object;
                target_type: GType;
                targetType: GType;
            }
        }
        export class SignalGroup extends Object {
            static $gtype: GType<SignalGroup>;

            constructor(properties?: Partial<SignalGroup.ConstructorProperties>, ...args: any[]);
            _init(properties?: Partial<SignalGroup.ConstructorProperties>, ...args: any[]): void;

            // Properties
            get target(): Object;
            set target(val: Object);
            get target_type(): GType;
            get targetType(): GType;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: "bind", callback: (_source: this, instance: Object) => void): number;
            connect_after(signal: "bind", callback: (_source: this, instance: Object) => void): number;
            emit(signal: "bind", instance: Object): void;
            connect(signal: "unbind", callback: (_source: this) => void): number;
            connect_after(signal: "unbind", callback: (_source: this) => void): number;
            emit(signal: "unbind"): void;

            // Constructors

            static ["new"](target_type: GType): SignalGroup;

            // Members

            /**
             * Blocks all signal handlers managed by `self `so they will not
             * be called during any signal emissions. Must be unblocked exactly
             * the same number of times it has been blocked to become active again.
             *
             * This blocked state will be kept across changes of the target instance.
             */
            block(): void;
            /**
             * Connects `closure `to the signal `detailed_signal `on #GSignalGroup:target.
             *
             * You cannot connect a signal handler after #GSignalGroup:target has been set.
             */
            connect_closure(detailed_signal: string, closure: Closure, after: boolean): void;
            /**
             * Connects `c_handler `to the signal detailed_signal
             * on the target instance of `self.`
             *
             * You cannot connect a signal handler after #GSignalGroup:target has been set.
             */
            connect_data(
                detailed_signal: string,
                c_handler: Callback,
                notify: ClosureNotify,
                flags: ConnectFlags
            ): void;
            /**
             * Connects `c_handler `to the signal detailed_signal
             * on the target instance of `self.`
             *
             * The instance on which the signal is emitted and data
             * will be swapped when calling `c_handler.`
             *
             * You cannot connect a signal handler after #GSignalGroup:target has been set.
             */
            connect_swapped(detailed_signal: string, c_handler: Callback): void;
            /**
             * Gets the target instance used when connecting signals.
             */
            dup_target<T = Object>(): T;
            /**
             * Sets the target instance used when connecting signals. Any signal
             * that has been registered with g_signal_group_connect_object() or
             * similar functions will be connected to this object.
             *
             * If the target instance was previously set, signals will be
             * disconnected from that object prior to connecting to `target.`
             */
            set_target(target?: Object | null): void;
            /**
             * Unblocks all signal handlers managed by `self `so they will be
             * called again during any signal emissions unless it is blocked
             * again. Must be unblocked exactly the same number of times it
             * has been blocked to become active again.
             */
            unblock(): void;
        }
        export module TypeModule {
            export interface ConstructorProperties extends Object.ConstructorProperties {
                [key: string]: any;
            }
        }
        export abstract class TypeModule extends Object implements TypePlugin {
            static $gtype: GType<TypeModule>;

            constructor(properties?: Partial<TypeModule.ConstructorProperties>, ...args: any[]);
            _init(properties?: Partial<TypeModule.ConstructorProperties>, ...args: any[]): void;

            // Fields
            use_count: number;
            type_infos: any[];
            interface_infos: any[];
            name: string;

            // Members

            /**
             * Registers an additional interface for a type, whose interface lives
             * in the given type plugin. If the interface was already registered
             * for the type in this plugin, nothing will be done.
             *
             * As long as any instances of the type exist, the type plugin will
             * not be unloaded.
             *
             * Since 2.56 if `module `is %NULL this will call g_type_add_interface_static()
             * instead. This can be used when making a static build of the module.
             */
            add_interface(instance_type: GType, interface_type: GType, interface_info: InterfaceInfo): void;
            /**
             * Looks up or registers an enumeration that is implemented with a particular
             * type plugin. If a type with name `type_name `was previously registered,
             * the #GType identifier for the type is returned, otherwise the type
             * is newly registered, and the resulting #GType identifier returned.
             *
             * As long as any instances of the type exist, the type plugin will
             * not be unloaded.
             *
             * Since 2.56 if `module `is %NULL this will call g_type_register_static()
             * instead. This can be used when making a static build of the module.
             */
            register_enum(name: string, const_static_values: EnumValue): GType;
            /**
             * Looks up or registers a flags type that is implemented with a particular
             * type plugin. If a type with name `type_name `was previously registered,
             * the #GType identifier for the type is returned, otherwise the type
             * is newly registered, and the resulting #GType identifier returned.
             *
             * As long as any instances of the type exist, the type plugin will
             * not be unloaded.
             *
             * Since 2.56 if `module `is %NULL this will call g_type_register_static()
             * instead. This can be used when making a static build of the module.
             */
            register_flags(name: string, const_static_values: FlagsValue): GType;
            /**
             * Looks up or registers a type that is implemented with a particular
             * type plugin. If a type with name `type_name `was previously registered,
             * the #GType identifier for the type is returned, otherwise the type
             * is newly registered, and the resulting #GType identifier returned.
             *
             * When reregistering a type (typically because a module is unloaded
             * then reloaded, and reinitialized), `module `and `parent_type `must
             * be the same as they were previously.
             *
             * As long as any instances of the type exist, the type plugin will
             * not be unloaded.
             *
             * Since 2.56 if `module `is %NULL this will call g_type_register_static()
             * instead. This can be used when making a static build of the module.
             */
            register_type(parent_type: GType, type_name: string, type_info: TypeInfo, flags: TypeFlags): GType;
            /**
             * Sets the name for a #GTypeModule
             */
            set_name(name: string): void;
            /**
             * Decreases the use count of a #GTypeModule by one. If the
             * result is zero, the module will be unloaded. (However, the
             * #GTypeModule will not be freed, and types associated with the
             * #GTypeModule are not unregistered. Once a #GTypeModule is
             * initialized, it must exist forever.)
             */
            unuse(): void;
            /**
             * Increases the use count of a #GTypeModule by one. If the
             * use count was zero before, the plugin will be loaded.
             * If loading the plugin fails, the use count is reset to
             * its prior value.
             */
            use(): boolean;
            // Conflicted with GObject.TypePlugin.use
            use(...args: never[]): any;
            vfunc_load(): boolean;
            vfunc_unload(): void;

            // Implemented Members

            /**
             * Calls the `complete_interface_info `function from the
             * #GTypePluginClass of `plugin.` There should be no need to use this
             * function outside of the GObject type system itself.
             */
            complete_interface_info(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
            /**
             * Calls the `complete_type_info `function from the #GTypePluginClass of `plugin.`
             * There should be no need to use this function outside of the GObject
             * type system itself.
             */
            complete_type_info(g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
        }

        /**
         * A #GCClosure is a specialization of #GClosure for C function callbacks.
         */
        export class CClosure {
            static $gtype: GType<CClosure>;

            constructor(copy: CClosure);

            // Fields
            callback: any;

            // Members
            /**
             * A #GClosureMarshal function for use with signals with handlers that
             * take two boxed pointers as arguments and return a boolean.  If you
             * have such a signal, you will probably also need to use an
             * accumulator, such as g_signal_accumulator_true_handled().
             */
            static marshal_BOOLEAN__BOXED_BOXED(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `gboolean (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter
             * denotes a flags type.
             */
            static marshal_BOOLEAN__FLAGS(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `gchar* (*callback) (gpointer instance, GObject *arg1, gpointer arg2, gpointer user_data)`.
             */
            static marshal_STRING__OBJECT_POINTER(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, gboolean arg1, gpointer user_data)`.
             */
            static marshal_VOID__BOOLEAN(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, GBoxed *arg1, gpointer user_data)`.
             */
            static marshal_VOID__BOXED(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, gchar arg1, gpointer user_data)`.
             */
            static marshal_VOID__CHAR(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, gdouble arg1, gpointer user_data)`.
             */
            static marshal_VOID__DOUBLE(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes an enumeration type..
             */
            static marshal_VOID__ENUM(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes a flags type.
             */
            static marshal_VOID__FLAGS(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, gfloat arg1, gpointer user_data)`.
             */
            static marshal_VOID__FLOAT(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)`.
             */
            static marshal_VOID__INT(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, glong arg1, gpointer user_data)`.
             */
            static marshal_VOID__LONG(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, GObject *arg1, gpointer user_data)`.
             */
            static marshal_VOID__OBJECT(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, GParamSpec *arg1, gpointer user_data)`.
             */
            static marshal_VOID__PARAM(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, gpointer arg1, gpointer user_data)`.
             */
            static marshal_VOID__POINTER(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, const gchar *arg1, gpointer user_data)`.
             */
            static marshal_VOID__STRING(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, guchar arg1, gpointer user_data)`.
             */
            static marshal_VOID__UCHAR(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, guint arg1, gpointer user_data)`.
             */
            static marshal_VOID__UINT(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, guint arg1, gpointer arg2, gpointer user_data)`.
             */
            static marshal_VOID__UINT_POINTER(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, gulong arg1, gpointer user_data)`.
             */
            static marshal_VOID__ULONG(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, GVariant *arg1, gpointer user_data)`.
             */
            static marshal_VOID__VARIANT(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A marshaller for a #GCClosure with a callback of type
             * `void (*callback) (gpointer instance, gpointer user_data)`.
             */
            static marshal_VOID__VOID(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
            /**
             * A generic marshaller function implemented via
             * [libffi](http://sourceware.org/libffi/).
             *
             * Normally this function is not passed explicitly to g_signal_new(),
             * but used automatically by GLib when specifying a %NULL marshaller.
             */
            static marshal_generic(
                closure: Closure,
                return_gvalue: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null
            ): void;
        }

        export class ClosureNotifyData {
            static $gtype: GType<ClosureNotifyData>;

            constructor(copy: ClosureNotifyData);

            // Fields
            data: any;
            notify: ClosureNotify;
        }

        /**
         * The class of an enumeration type holds information about its
         * possible values.
         */
        export class EnumClass {
            static $gtype: GType<EnumClass>;

            constructor(copy: EnumClass);

            // Fields
            minimum: number;
            maximum: number;
            n_values: number;
            values: EnumValue;
        }

        /**
         * A structure which contains a single enum value, its name, and its
         * nickname.
         */
        export class EnumValue {
            static $gtype: GType<EnumValue>;

            constructor(
                properties?: Partial<{
                    value: number;
                    value_name: string;
                    value_nick: string;
                }>
            );
            constructor(copy: EnumValue);

            // Fields
            value: number;
            value_name: string;
            value_nick: string;
        }

        /**
         * The class of a flags type holds information about its
         * possible values.
         */
        export class FlagsClass {
            static $gtype: GType<FlagsClass>;

            constructor(copy: FlagsClass);

            // Fields
            mask: number;
            n_values: number;
            values: FlagsValue;
        }

        /**
         * A structure which contains a single flags value, its name, and its
         * nickname.
         */
        export class FlagsValue {
            static $gtype: GType<FlagsValue>;

            constructor(
                properties?: Partial<{
                    value: number;
                    value_name: string;
                    value_nick: string;
                }>
            );
            constructor(copy: FlagsValue);

            // Fields
            value: number;
            value_name: string;
            value_nick: string;
        }

        /**
         * A structure that provides information to the type system which is
         * used specifically for managing interface types.
         */
        export class InterfaceInfo {
            static $gtype: GType<InterfaceInfo>;

            constructor(copy: InterfaceInfo);

            // Fields
            interface_init: InterfaceInitFunc;
            interface_finalize: InterfaceFinalizeFunc;
            interface_data: any;
        }

        /**
         * The GObjectConstructParam struct is an auxiliary structure used to hand
         * #GParamSpec/#GValue pairs to the `constructor `of a #GObjectClass.
         */
        export class ObjectConstructParam {
            static $gtype: GType<ObjectConstructParam>;

            constructor(copy: ObjectConstructParam);

            // Fields
            pspec: ParamSpec;
        }

        /**
         * A #GParamSpecPool maintains a collection of #GParamSpecs which can be
         * quickly accessed by owner and name.
         *
         * The implementation of the #GObject property system uses such a pool to
         * store the #GParamSpecs of the properties all object types.
         */
        export class ParamSpecPool {
            static $gtype: GType<ParamSpecPool>;

            constructor(copy: ParamSpecPool);

            // Members
            /**
             * Inserts a #GParamSpec in the pool.
             */
            insert(pspec: ParamSpec, owner_type: GType): void;
            /**
             * Gets an array of all #GParamSpecs owned by `owner_type `in
             * the pool.
             */
            list(owner_type: GType): ParamSpec[];
            /**
             * Gets an #GList of all #GParamSpecs owned by `owner_type `in
             * the pool.
             */
            list_owned(owner_type: GType): ParamSpec[];
            /**
             * Looks up a #GParamSpec in the pool.
             */
            lookup(param_name: string, owner_type: GType, walk_ancestors: boolean): ParamSpec | null;
            /**
             * Removes a #GParamSpec from the pool.
             */
            remove(pspec: ParamSpec): void;
        }

        /**
         * This structure is used to provide the type system with the information
         * required to initialize and destruct (finalize) a parameter's class and
         * instances thereof.
         *
         * The initialized structure is passed to the g_param_type_register_static()
         * The type system will perform a deep copy of this structure, so its memory
         * does not need to be persistent across invocation of
         * g_param_type_register_static().
         */
        export class ParamSpecTypeInfo {
            static $gtype: GType<ParamSpecTypeInfo>;

            constructor(copy: ParamSpecTypeInfo);

            // Fields
            instance_size: number;
            n_preallocs: number;
            value_type: GType;
        }

        /**
         * The GParameter struct is an auxiliary structure used
         * to hand parameter name/value pairs to g_object_newv().
         */
        export class Parameter {
            static $gtype: GType<Parameter>;

            constructor(copy: Parameter);

            // Fields
            name: string;
        }

        /**
         * The #GSignalInvocationHint structure is used to pass on additional information
         * to callbacks during a signal emission.
         */
        export class SignalInvocationHint {
            static $gtype: GType<SignalInvocationHint>;

            constructor(copy: SignalInvocationHint);

            // Fields
            signal_id: number;
            detail: GLib.Quark;
            run_type: SignalFlags;
        }

        /**
         * A structure holding in-depth information for a specific signal.
         *
         * See also: g_signal_query()
         */
        export class SignalQuery {
            static $gtype: GType<SignalQuery>;

            constructor(copy: SignalQuery);

            // Fields
            signal_id: number;
            signal_name: string;
            itype: GType;
            signal_flags: SignalFlags;
            return_type: GType;
            n_params: number;
            param_types: GType[];
        }

        /**
         * An opaque structure used as the base of all classes.
         */
        export class TypeClass {
            static $gtype: GType<TypeClass>;

            constructor(copy: TypeClass);

            // Members
            /**
             * Registers a private structure for an instantiatable type.
             *
             * When an object is allocated, the private structures for
             * the type and all of its parent types are allocated
             * sequentially in the same memory block as the public
             * structures, and are zero-filled.
             *
             * Note that the accumulated size of the private structures of
             * a type and all its parent types cannot exceed 64 KiB.
             *
             * This function should be called in the type's class_init() function.
             * The private structure can be retrieved using the
             * G_TYPE_INSTANCE_GET_PRIVATE() macro.
             *
             * The following example shows attaching a private structure
             * MyObjectPrivate to an object MyObject defined in the standard
             * GObject fashion in the type's class_init() function.
             *
             * Note the use of a structure member "priv" to avoid the overhead
             * of repeatedly calling MY_OBJECT_GET_PRIVATE().
             *
             * |[&lt;!-- language="C" --&gt;
             * typedef struct _MyObject        MyObject;
             * typedef struct _MyObjectPrivate MyObjectPrivate;
             *
             * struct _MyObject {
             * GObject parent;
             *
             * MyObjectPrivate *priv;
             * };
             *
             * struct _MyObjectPrivate {
             * int some_field;
             * };
             *
             * static void
             * my_object_class_init (MyObjectClass *klass)
             * {
             * g_type_class_add_private (klass, sizeof (MyObjectPrivate));
             * }
             *
             * static void
             * my_object_init (MyObject *my_object)
             * {
             * my_object-&gt;priv = G_TYPE_INSTANCE_GET_PRIVATE (my_object,
             * MY_TYPE_OBJECT,
             * MyObjectPrivate);
             * // my_object-&gt;priv-&gt;some_field will be automatically initialised to 0
             * }
             *
             * static int
             * my_object_get_some_field (MyObject *my_object)
             * {
             * MyObjectPrivate *priv;
             *
             * g_return_val_if_fail (MY_IS_OBJECT (my_object), 0);
             *
             * priv = my_object-&gt;priv;
             *
             * return priv-&gt;some_field;
             * }
             * ]|
             */
            add_private(private_size: number): void;
            get_private(private_type: GType): any | null;
            /**
             * This is a convenience function often needed in class initializers.
             * It returns the class structure of the immediate parent type of the
             * class passed in.  Since derived classes hold a reference count on
             * their parent classes as long as they are instantiated, the returned
             * class will always exist.
             *
             * This function is essentially equivalent to:
             * g_type_class_peek (g_type_parent (G_TYPE_FROM_CLASS (g_class)))
             */
            peek_parent(): TypeClass;
            /**
             * Decrements the reference count of the class structure being passed in.
             * Once the last reference count of a class has been released, classes
             * may be finalized by the type system, so further dereferencing of a
             * class pointer after g_type_class_unref() are invalid.
             */
            unref(): void;
            static adjust_private_offset(g_class: any | null, private_size_or_offset: number): void;
            /**
             * This function is essentially the same as g_type_class_ref(),
             * except that the classes reference count isn't incremented.
             * As a consequence, this function may return %NULL if the class
             * of the type passed in does not currently exist (hasn't been
             * referenced before).
             */
            static peek(type: GType): TypeClass;
            /**
             * A more efficient version of g_type_class_peek() which works only for
             * static types.
             */
            static peek_static(type: GType): TypeClass;
            /**
             * Increments the reference count of the class structure belonging to
             * `type.` This function will demand-create the class if it doesn't
             * exist already.
             */
            static ref(type: GType): TypeClass;
        }

        /**
         * A structure that provides information to the type system which is
         * used specifically for managing fundamental types.
         */
        export class TypeFundamentalInfo {
            static $gtype: GType<TypeFundamentalInfo>;

            constructor(copy: TypeFundamentalInfo);

            // Fields
            type_flags: TypeFundamentalFlags;
        }

        /**
         * This structure is used to provide the type system with the information
         * required to initialize and destruct (finalize) a type's class and
         * its instances.
         *
         * The initialized structure is passed to the g_type_register_static() function
         * (or is copied into the provided #GTypeInfo structure in the
         * g_type_plugin_complete_type_info()). The type system will perform a deep
         * copy of this structure, so its memory does not need to be persistent
         * across invocation of g_type_register_static().
         */
        export class TypeInfo {
            static $gtype: GType<TypeInfo>;

            constructor(copy: TypeInfo);

            // Fields
            class_size: number;
            base_init: BaseInitFunc;
            base_finalize: BaseFinalizeFunc;
            class_init: ClassInitFunc;
            class_finalize: ClassFinalizeFunc;
            class_data: any;
            instance_size: number;
            n_preallocs: number;
            instance_init: InstanceInitFunc;
            value_table: TypeValueTable;
        }

        /**
         * An opaque structure used as the base of all type instances.
         */
        export class TypeInstance {
            static $gtype: GType<TypeInstance>;

            constructor(copy: TypeInstance);

            // Members
            get_private(private_type: GType): any | null;
        }

        /**
         * An opaque structure used as the base of all interface types.
         */
        export class TypeInterface {
            static $gtype: GType<TypeInterface>;

            constructor(copy: TypeInterface);

            // Members
            /**
             * Returns the corresponding #GTypeInterface structure of the parent type
             * of the instance type to which `g_iface `belongs. This is useful when
             * deriving the implementation of an interface from the parent type and
             * then possibly overriding some methods.
             */
            peek_parent(): TypeInterface;
            /**
             * Adds `prerequisite_type `to the list of prerequisites of `interface_type.`
             * This means that any type implementing `interface_type `must also implement
             * `prerequisite_type.` Prerequisites can be thought of as an alternative to
             * interface derivation (which GType doesn't support). An interface can have
             * at most one instantiatable prerequisite type.
             */
            static add_prerequisite(interface_type: GType, prerequisite_type: GType): void;
            /**
             * Returns the #GTypePlugin structure for the dynamic interface
             * `interface_type `which has been added to instance_type, or %NULL
             * if `interface_type `has not been added to `instance_type `or does
             * not have a #GTypePlugin structure. See g_type_add_interface_dynamic().
             */
            static get_plugin(instance_type: GType, interface_type: GType): TypePlugin;
            /**
             * Returns the most specific instantiatable prerequisite of an
             * interface type. If the interface type has no instantiatable
             * prerequisite, %G_TYPE_INVALID is returned.
             *
             * See g_type_interface_add_prerequisite() for more information
             * about prerequisites.
             */
            static instantiatable_prerequisite(interface_type: GType): GType;
            /**
             * Returns the #GTypeInterface structure of an interface to which the
             * passed in class conforms.
             */
            static peek(instance_class: TypeClass, iface_type: GType): TypeInterface;
            /**
             * Returns the prerequisites of an interfaces type.
             */
            static prerequisites(interface_type: GType): GType[];
        }

        /**
         * The #GTypePlugin interface is used by the type system in order to handle
         * the lifecycle of dynamically loaded types.
         */
        export class TypePluginClass {
            static $gtype: GType<TypePluginClass>;

            constructor(copy: TypePluginClass);

            // Fields
            use_plugin: TypePluginUse;
            unuse_plugin: TypePluginUnuse;
            complete_type_info: TypePluginCompleteTypeInfo;
            complete_interface_info: TypePluginCompleteInterfaceInfo;
        }

        /**
         * A structure holding information for a specific type.
         *
         * See also: g_type_query()
         */
        export class TypeQuery {
            static $gtype: GType<TypeQuery>;

            constructor(copy: TypeQuery);

            // Fields
            type: GType;
            type_name: string;
            class_size: number;
            instance_size: number;
        }

        /**
         * The #GTypeValueTable provides the functions required by the #GValue
         * implementation, to serve as a container for values of a type.
         */
        export class TypeValueTable {
            static $gtype: GType<TypeValueTable>;

            constructor(
                properties?: Partial<{
                    collect_format: string;
                    lcopy_format: string;
                }>
            );
            constructor(copy: TypeValueTable);

            // Fields
            collect_format: string;
            lcopy_format: string;
        }

        /**
         * An opaque structure used to hold different types of values.
         *
         * The data within the structure has protected scope: it is accessible only
         * to functions within a #GTypeValueTable structure, or implementations of
         * the g_value_*() API. That is, code portions which implement new fundamental
         * types.
         *
         * #GValue users cannot make any assumptions about how data is stored
         * within the 2 element `data `union, and the `g_type `member should
         * only be accessed through the G_VALUE_TYPE() macro.
         */
        export class Value {
            static $gtype: GType<Value>;

            constructor(copy: Value);

            // Members
            /**
             * Copies the value of `src_value `into `dest_value.`
             */
            copy(dest_value: Value | any): void;
            /**
             * Get the contents of a %G_TYPE_OBJECT derived #GValue, increasing
             * its reference count. If the contents of the #GValue are %NULL, then
             * %NULL will be returned.
             */
            dup_object<T = Object>(): T;
            /**
             * Get a copy the contents of a %G_TYPE_STRING #GValue.
             */
            dup_string(): string | null;
            /**
             * Get the contents of a variant #GValue, increasing its refcount. The returned
             * #GVariant is never floating.
             */
            dup_variant(): GLib.Variant | null;
            /**
             * Determines if `value `will fit inside the size of a pointer value.
             * This is an internal function introduced mainly for C marshallers.
             */
            fits_pointer(): boolean;
            /**
             * Get the contents of a %G_TYPE_BOOLEAN #GValue.
             */
            get_boolean(): boolean;
            /**
             * Get the contents of a %G_TYPE_BOXED derived #GValue.
             */
            get_boxed(): any | null;
            /**
             * Do not use this function; it is broken on platforms where the %char
             * type is unsigned, such as ARM and PowerPC.  See g_value_get_schar().
             *
             * Get the contents of a %G_TYPE_CHAR #GValue.
             */
            get_char(): number;
            /**
             * Get the contents of a %G_TYPE_DOUBLE #GValue.
             */
            get_double(): number;
            /**
             * Get the contents of a %G_TYPE_ENUM #GValue.
             */
            get_enum(): number;
            /**
             * Get the contents of a %G_TYPE_FLAGS #GValue.
             */
            get_flags(): number;
            /**
             * Get the contents of a %G_TYPE_FLOAT #GValue.
             */
            get_float(): number;
            /**
             * Get the contents of a %G_TYPE_GTYPE #GValue.
             */
            get_gtype(): GType;
            /**
             * Get the contents of a %G_TYPE_INT #GValue.
             */
            get_int(): number;
            /**
             * Get the contents of a %G_TYPE_INT64 #GValue.
             */
            get_int64(): number;
            /**
             * Get the contents of a %G_TYPE_LONG #GValue.
             */
            get_long(): number;
            /**
             * Get the contents of a %G_TYPE_OBJECT derived #GValue.
             */
            get_object<T = Object>(): T;
            /**
             * Get the contents of a %G_TYPE_PARAM #GValue.
             */
            get_param(): ParamSpec;
            /**
             * Get the contents of a pointer #GValue.
             */
            get_pointer(): any | null;
            /**
             * Get the contents of a %G_TYPE_CHAR #GValue.
             */
            get_schar(): number;
            /**
             * Get the contents of a %G_TYPE_STRING #GValue.
             */
            get_string(): string | null;
            /**
             * Get the contents of a %G_TYPE_UCHAR #GValue.
             */
            get_uchar(): number;
            /**
             * Get the contents of a %G_TYPE_UINT #GValue.
             */
            get_uint(): number;
            /**
             * Get the contents of a %G_TYPE_UINT64 #GValue.
             */
            get_uint64(): number;
            /**
             * Get the contents of a %G_TYPE_ULONG #GValue.
             */
            get_ulong(): number;
            /**
             * Get the contents of a variant #GValue.
             */
            get_variant(): GLib.Variant | null;
            /**
             * Initializes `value `with the default value of `type.`
             */
            init(g_type: GType): unknown;
            /**
             * Initializes and sets `value `from an instantiatable type via the
             * value_table's collect_value() function.
             *
             * Note: The `value `will be initialised with the exact type of
             * `instance.`  If you wish to set the value's type to a different GType
             * (such as a parent class GType), you need to manually call
             * g_value_init() and g_value_set_instance().
             */
            init_from_instance(instance: TypeInstance): void;
            /**
             * Returns the value contents as pointer. This function asserts that
             * g_value_fits_pointer() returned %TRUE for the passed in value.
             * This is an internal function introduced mainly for C marshallers.
             */
            peek_pointer(): any | null;
            /**
             * Clears the current value in `value `and resets it to the default value
             * (as if the value had just been initialized).
             */
            reset(): unknown;
            /**
             * Set the contents of a %G_TYPE_BOOLEAN #GValue to `v_boolean.`
             */
            set_boolean(v_boolean: boolean): void;
            /**
             * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed.`
             */
            set_boxed(v_boxed?: any | null): void;
            /**
             * This is an internal function introduced mainly for C marshallers.
             */
            set_boxed_take_ownership(v_boxed?: any | null): void;
            /**
             * Set the contents of a %G_TYPE_CHAR #GValue to `v_char.`
             */
            set_char(v_char: number): void;
            /**
             * Set the contents of a %G_TYPE_DOUBLE #GValue to `v_double.`
             */
            set_double(v_double: number): void;
            /**
             * Set the contents of a %G_TYPE_ENUM #GValue to `v_enum.`
             */
            set_enum(v_enum: number): void;
            /**
             * Set the contents of a %G_TYPE_FLAGS #GValue to `v_flags.`
             */
            set_flags(v_flags: number): void;
            /**
             * Set the contents of a %G_TYPE_FLOAT #GValue to `v_float.`
             */
            set_float(v_float: number): void;
            /**
             * Set the contents of a %G_TYPE_GTYPE #GValue to `v_gtype.`
             */
            set_gtype(v_gtype: GType): void;
            /**
             * Sets `value `from an instantiatable type via the
             * value_table's collect_value() function.
             */
            set_instance(instance?: any | null): void;
            /**
             * Set the contents of a %G_TYPE_INT #GValue to `v_int.`
             */
            set_int(v_int: number): void;
            /**
             * Set the contents of a %G_TYPE_INT64 #GValue to v_int64.
             */
            set_int64(v_int64: number): void;
            /**
             * Set the contents of a %G_TYPE_STRING #GValue to `v_string.`  The string is
             * assumed to be static and interned (canonical, for example from
             * g_intern_string()), and is thus not duplicated when setting the #GValue.
             */
            set_interned_string(v_string?: string | null): void;
            /**
             * Set the contents of a %G_TYPE_LONG #GValue to `v_long.`
             */
            set_long(v_long: number): void;
            /**
             * Set the contents of a %G_TYPE_OBJECT derived #GValue to `v_object.`
             *
             * g_value_set_object() increases the reference count of v_object
             * (the #GValue holds a reference to v_object).  If you do not wish
             * to increase the reference count of the object (i.e. you wish to
             * pass your current reference to the #GValue because you no longer
             * need it), use g_value_take_object() instead.
             *
             * It is important that your #GValue holds a reference to `v_object `(either its
             * own, or one it has taken) to ensure that the object won't be destroyed while
             * the #GValue still exists).
             */
            set_object(v_object?: Object | null): void;
            /**
             * Set the contents of a %G_TYPE_PARAM #GValue to `param.`
             */
            set_param(param?: ParamSpec | null): void;
            /**
             * Set the contents of a pointer #GValue to `v_pointer.`
             */
            set_pointer(v_pointer?: any | null): void;
            /**
             * Set the contents of a %G_TYPE_CHAR #GValue to `v_char.`
             */
            set_schar(v_char: number): void;
            /**
             * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed.`
             *
             * The boxed value is assumed to be static, and is thus not duplicated
             * when setting the #GValue.
             */
            set_static_boxed(v_boxed?: any | null): void;
            /**
             * Set the contents of a %G_TYPE_STRING #GValue to `v_string.`
             * The string is assumed to be static, and is thus not duplicated
             * when setting the #GValue.
             *
             * If the the string is a canonical string, using g_value_set_interned_string()
             * is more appropriate.
             */
            set_static_string(v_string?: string | null): void;
            /**
             * Set the contents of a %G_TYPE_STRING #GValue to a copy of `v_string.`
             */
            set_string(v_string?: string | null): void;
            /**
             * This is an internal function introduced mainly for C marshallers.
             */
            set_string_take_ownership(v_string?: string | null): void;
            /**
             * Set the contents of a %G_TYPE_UCHAR #GValue to `v_uchar.`
             */
            set_uchar(v_uchar: number): void;
            /**
             * Set the contents of a %G_TYPE_UINT #GValue to `v_uint.`
             */
            set_uint(v_uint: number): void;
            /**
             * Set the contents of a %G_TYPE_UINT64 #GValue to v_uint64.
             */
            set_uint64(v_uint64: number): void;
            /**
             * Set the contents of a %G_TYPE_ULONG #GValue to `v_ulong.`
             */
            set_ulong(v_ulong: number): void;
            /**
             * Set the contents of a variant #GValue to `variant.`
             * If the variant is floating, it is consumed.
             */
            set_variant(variant?: GLib.Variant | null): void;
            /**
             * Sets the contents of a %G_TYPE_BOXED derived #GValue to v_boxed
             * and takes over the ownership of the caller’s reference to v_boxed;
             * the caller doesn’t have to unref it any more.
             */
            take_boxed(v_boxed?: any | null): void;
            /**
             * Sets the contents of a %G_TYPE_STRING #GValue to `v_string.`
             */
            take_string(v_string?: string | null): void;
            /**
             * Set the contents of a variant #GValue to variant, and takes over
             * the ownership of the caller's reference to variant;
             * the caller doesn't have to unref it any more (i.e. the reference
             * count of the variant is not increased).
             *
             * If `variant `was floating then its floating reference is converted to
             * a hard reference.
             *
             * If you want the #GValue to hold its own reference to variant, use
             * g_value_set_variant() instead.
             *
             * This is an internal function introduced mainly for C marshallers.
             */
            take_variant(variant?: GLib.Variant | null): void;
            /**
             * Tries to cast the contents of `src_value `into a type appropriate
             * to store in dest_value, e.g. to transform a %G_TYPE_INT value
             * into a %G_TYPE_FLOAT value. Performing transformations between
             * value types might incur precision lossage. Especially
             * transformations into strings might reveal seemingly arbitrary
             * results and shouldn't be relied upon for production code (such
             * as rcfile value or object property serialization).
             */
            transform(dest_value: Value | any): boolean;
            /**
             * Clears the current value in `value `(if any) and "unsets" the type,
             * this releases all resources associated with this GValue. An unset
             * value is the same as an uninitialized (zero-filled) #GValue
             * structure.
             */
            unset(): void;
            /**
             * Returns whether a #GValue of type `src_type `can be copied into
             * a #GValue of type `dest_type.`
             */
            static type_compatible(src_type: GType, dest_type: GType): boolean;
            /**
             * Check whether g_value_transform() is able to transform values
             * of type `src_type `into values of type `dest_type.` Note that for
             * the types to be transformable, they must be compatible or a
             * transformation function must be registered.
             */
            static type_transformable(src_type: GType, dest_type: GType): boolean;
        }

        /**
         * A #GValueArray contains an array of #GValue elements.
         */
        export class ValueArray {
            static $gtype: GType<ValueArray>;

            constructor(n_prealloced: number);
            constructor(copy: ValueArray);

            // Fields
            n_values: number;

            // Constructors
            static ["new"](n_prealloced: number): ValueArray;

            // Members
            /**
             * Insert a copy of `value `as last element of `value_array.` If `value `is
             * %NULL, an uninitialized value is appended.
             */
            append(value?: Value | null): ValueArray;
            /**
             * Construct an exact copy of a #GValueArray by duplicating all its
             * contents.
             */
            copy(): ValueArray;
            /**
             * Return a pointer to the value at `index_ `containd in `value_array.`
             */
            get_nth(index_: number): unknown;
            /**
             * Insert a copy of `value `at specified position into `value_array.` If value
             * is %NULL, an uninitialized value is inserted.
             */
            insert(index_: number, value?: Value | null): ValueArray;
            /**
             * Insert a copy of `value `as first element of `value_array.` If `value `is
             * %NULL, an uninitialized value is prepended.
             */
            prepend(value?: Value | null): ValueArray;
            /**
             * Remove the value at position `index_ `from `value_array.`
             */
            remove(index_: number): ValueArray;
            /**
             * Sort `value_array `using `compare_func `to compare the elements according to
             * the semantics of #GCompareFunc.
             *
             * The current implementation uses the same sorting algorithm as standard
             * C qsort() function.
             */
            sort(compare_func: GLib.CompareFunc): ValueArray;
            /**
             * Sort `value_array `using `compare_func `to compare the elements according
             * to the semantics of #GCompareDataFunc.
             *
             * The current implementation uses the same sorting algorithm as standard
             * C qsort() function.
             */
            sort(compare_func: GLib.CompareDataFunc): ValueArray;
        }

        /**
         * A structure containing a weak reference to a #GObject.
         *
         * A `GWeakRef` can either be empty (i.e. point to %NULL), or point to an
         * object for as long as at least one "strong" reference to that object
         * exists. Before the object's #GObjectClass.dispose method is called,
         * every #GWeakRef associated with becomes empty (i.e. points to %NULL).
         *
         * Like #GValue, #GWeakRef can be statically allocated, stack- or
         * heap-allocated, or embedded in larger structures.
         *
         * Unlike g_object_weak_ref() and g_object_add_weak_pointer(), this weak
         * reference is thread-safe: converting a weak pointer to a reference is
         * atomic with respect to invalidation of weak pointers to destroyed
         * objects.
         *
         * If the object's #GObjectClass.dispose method results in additional
         * references to the object being held (‘re-referencing’), any #GWeakRefs taken
         * before it was disposed will continue to point to %NULL.  Any #GWeakRefs taken
         * during disposal and after re-referencing, or after disposal has returned due
         * to the re-referencing, will continue to point to the object until its refcount
         * goes back to zero, at which point they too will be invalidated.
         *
         * It is invalid to take a #GWeakRef on an object during #GObjectClass.dispose
         * without first having or creating a strong reference to the object.
         */
        export class WeakRef {
            static $gtype: GType<WeakRef>;

            constructor(copy: WeakRef);
        }

        export class TypeCValue {
            static $gtype: GType<TypeCValue>;

            constructor(copy: TypeCValue);
        }

        export class _Value__data__union {
            static $gtype: GType<_Value__data__union>;

            constructor(
                properties?: Partial<{
                    v_int: number;
                    v_uint: number;
                    v_long: number;
                    v_ulong: number;
                    v_int64: number;
                    v_uint64: number;
                    v_float: number;
                    v_double: number;
                    v_pointer: any;
                }>
            );
            constructor(copy: _Value__data__union);

            // Fields
            v_int: number;
            v_uint: number;
            v_long: number;
            v_ulong: number;
            v_int64: number;
            v_uint64: number;
            v_float: number;
            v_double: number;
            v_pointer: any;
        }

        /**
         * An interface that handles the lifecycle of dynamically loaded types.
         *
         * The GObject type system supports dynamic loading of types.
         * It goes as follows:
         *
         * 1. The type is initially introduced (usually upon loading the module
         * the first time, or by your main application that knows what modules
         * introduces what types), like this:
         * |[&lt;!-- language="C" --&gt;
         * new_type_id = g_type_register_dynamic (parent_type_id,
         * "TypeName",
         * new_type_plugin,
         * type_flags);
         * ]|
         * where `new_type_plugin `is an implementation of the
         * #GTypePlugin interface.
         *
         * 2. The type's implementation is referenced, e.g. through
         * g_type_class_ref() or through g_type_create_instance() (this is
         * being called by g_object_new()) or through one of the above done on
         * a type derived from `new_type_id.`
         *
         * 3. This causes the type system to load the type's implementation by
         * calling g_type_plugin_use() and g_type_plugin_complete_type_info()
         * on `new_type_plugin.`
         *
         * 4. At some point the type's implementation isn't required anymore,
         * e.g. after g_type_class_unref() or g_type_free_instance() (called
         * when the reference count of an instance drops to zero).
         *
         * 5. This causes the type system to throw away the information retrieved
         * from g_type_plugin_complete_type_info() and then it calls
         * g_type_plugin_unuse() on `new_type_plugin.`
         *
         * 6. Things may repeat from the second step.
         *
         * So basically, you need to implement a #GTypePlugin type that
         * carries a use_count, once use_count goes from zero to one, you need
         * to load the implementation to successfully handle the upcoming
         * g_type_plugin_complete_type_info() call. Later, maybe after
         * succeeding use/unuse calls, once use_count drops to zero, you can
         * unload the implementation again. The type system makes sure to call
         * g_type_plugin_use() and g_type_plugin_complete_type_info() again
         * when the type is needed again.
         *
         * #GTypeModule is an implementation of #GTypePlugin that already
         * implements most of this except for the actual module loading and
         * unloading. It even handles multiple registered types per module.
         */
        export interface TypePluginNamespace {
            $gtype: GType<TypePlugin>;
            prototype: TypePluginPrototype;
        }
        export type TypePlugin = TypePluginPrototype;
        export interface TypePluginPrototype extends Object {
            // Members

            /**
             * Calls the `complete_interface_info `function from the
             * #GTypePluginClass of `plugin.` There should be no need to use this
             * function outside of the GObject type system itself.
             */
            complete_interface_info(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
            /**
             * Calls the `complete_type_info `function from the #GTypePluginClass of `plugin.`
             * There should be no need to use this function outside of the GObject
             * type system itself.
             */
            complete_type_info(g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
            /**
             * Calls the `unuse_plugin `function from the #GTypePluginClass of
             * `plugin.`  There should be no need to use this function outside of
             * the GObject type system itself.
             */
            unuse(): void;
            /**
             * Calls the `use_plugin `function from the #GTypePluginClass of
             * `plugin.`  There should be no need to use this function outside of
             * the GObject type system itself.
             */
            use(): void;
        }

        export const TypePlugin: TypePluginNamespace;

        /**
         * This is the signature of marshaller functions, required to marshall
         * arrays of parameter values to signal emissions into C language callback
         * invocations.
         *
         * It is merely an alias to #GClosureMarshal since the #GClosure mechanism
         * takes over responsibility of actual function invocation for the signal
         * system.
         */
        export type SignalCMarshaller = ClosureMarshal;
        /**
         * This is the signature of va_list marshaller functions, an optional
         * marshaller that can be used in some situations to avoid
         * marshalling the signal argument into GValues.
         */
        export type SignalCVaMarshaller = unknown;
        /**
         * A numerical value which represents the unique identifier of a registered
         * type.
         */
        export type Type = number;

        export type SignalMatch = SignalMatchPrototype;
        export interface SignalMatchPrototype {
            // Fields
            signalId: string;
            detail: string;
            func: (...args: any[]) => any;
        }

        export type Closure<R = any, P = any> = (...args: P[]) => R;
        export function signal_handlers_block_by_func(instance: Object, func: (...args: any[]) => any): void;
        export function signal_handlers_unblock_by_func(instance: Object, func: (...args: any[]) => any): void;
        export function signal_handlers_disconnect_by_func(instance: Object, func: (...args: any[]) => any): void;
        export function signal_handler_find(
            ...args:
                | [Object, SignalMatch]
                | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
        ): number;
        export function signal_handler_find(instance: Object, match: SignalMatch): number;
        export function signal_handler_find(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null
        ): number;
        export function _real_signal_handler_find(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null
        ): number;
        export function signal_handler_block_matched(
            ...args:
                | [Object, SignalMatch]
                | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
        ): number;
        export function signal_handler_block_matched(instance: Object, match: SignalMatch): number;
        export function signal_handler_block_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null
        ): number;
        export function _real_signal_handler_block_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null
        ): number;
        export function signal_handler_block_disconnect_matched(
            ...args:
                | [Object, SignalMatch]
                | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
        ): number;
        export function signal_handler_block_disconnect_matched(instance: Object, match: SignalMatch): number;
        export function signal_handler_block_disconnect_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null
        ): number;
        export function _real_signal_handler_block_disconnect_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null
        ): number;
        export function signal_handler_block_unblock_matched(
            ...args:
                | [Object, SignalMatch]
                | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
        ): number;
        export function signal_handler_block_unblock_matched(instance: Object, match: SignalMatch): number;
        export function signal_handler_block_unblock_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null
        ): number;
        export function _real_signal_handler_block_unblock_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null
        ): number;

        // GJS OVERRIDES

        // __type__ forces all GTypes to not match structurally.

        export type GType<T = unknown> = { __type__(arg: never): T };

        // Correctly types interface checks.
        export function type_is_a<T extends Object>(obj: Object, is_a_type: { $gtype: GType<T> }): obj is T;

        export class Interface {
            static _classInit: (klass: any) => any;
            __name__: string;
            _construct: (params: any, ...otherArgs: any[]) => any;
            _init: (params: any) => void;
            $gtype?: GType;
        }

        export function signal_connect(object: Object, name: string, handler: Function): number;
        export function signal_connect_after(object: Object, name: string, handler: Function): number;
        export function signal_emit_by_name(object: Object, name: string, ...args: any[]): void;

        export const __gtkCssName__: unique symbol;
        export const __gtkTemplate__: unique symbol;
        export const __gtkChildren__: unique symbol;
        export const __gtkInternalChildren__: unique symbol;

        // Expose GObject static properties for ES6 classes

        export const GTypeName: unique symbol;
        export const requires: unique symbol;
        export const interfaces: unique symbol;
        export const properties: unique symbol;
        export const signals: unique symbol;

        export enum AccumulatorType {
            NONE,
            FIRST_WINS,
            TRUE_HANDLED,
        }

        export class NotImplementedError extends Error {}

        export let gtypeNameBasedOnJSPath: boolean;

        export let TYPE_BOOLEAN: GType<boolean>;
        export let Boolean: BooleanConstructor;

        export let TYPE_ENUM: GType<number>;
        export let TYPE_FLAGS: GType<number>;

        export let TYPE_DOUBLE: GType<number>;
        export let Double: NumberConstructor;

        export let TYPE_STRING: GType<string>;
        export let String: StringConstructor;

        declare global {
            interface BooleanConstructor {
                $gtype: GType<boolean>;
            }

            interface NumberConstructor {
                $gtype: GType<number>;
            }

            interface StringConstructor {
                $gtype: GType<string>;
            }
        }

        export let TYPE_NONE: GType<undefined>;
        export let TYPE_POINTER: GType<undefined>;
        export let TYPE_BOXED: GType<unknown>;
        export let TYPE_PARAM: GType<unknown>;
        export let TYPE_INTERFACE: GType<unknown>;
        export let TYPE_OBJECT: GType<object>;
        export let TYPE_VARIANT: GType<GLib.Variant>;
        export let TYPE_INT: GType<number>;
        export let TYPE_UINT: GType<number>;
        export let TYPE_INT64: GType<number>;
        export let TYPE_UINT64: GType<number>;

        export function registerClass<P extends {}, T extends new (...args: any[]) => P>(
            klass: T
        ): RegisteredClass<T, {}, []>;

        export type Property<K extends ParamSpec> = K extends ParamSpec<infer T> ? T : any;

        export type Properties<Prototype extends {}, Properties extends { [key: string]: ParamSpec }> = Omit<
            {
                [key in keyof Properties | keyof Prototype]: key extends keyof Prototype
                    ? never
                    : key extends keyof Properties
                    ? Property<Properties[key]>
                    : never;
            },
            keyof Prototype
        >;

        export type SignalDefinition = {
            param_types?: readonly GType[];
            [key: string]: any;
        };

        type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;

        type IFaces<Interfaces extends { $gtype: GType<any> }[]> = {
            [key in keyof Interfaces]: Interfaces[key] extends { $gtype: GType<infer I> } ? I : never;
        };

        export type RegisteredPrototype<
            P extends {},
            Props extends { [key: string]: ParamSpec },
            Interfaces extends any[]
        > = Properties<P, SnakeToCamel<Props> & SnakeToUnderscore<Props>> & UnionToIntersection<Interfaces[number]> & P;

        type SnakeToUnderscoreCase<S extends string> = S extends `${infer T}-${infer U}`
            ? `${T}_${SnakeToUnderscoreCase<U>}`
            : S extends `${infer T}`
            ? `${T}`
            : never;

        type SnakeToCamelCase<S extends string> = S extends `${infer T}-${infer U}`
            ? `${Lowercase<T>}${SnakeToPascalCase<U>}`
            : S extends `${infer T}`
            ? `${Lowercase<T>}`
            : SnakeToPascalCase<S>;

        type SnakeToPascalCase<S extends string> = string extends S
            ? string
            : S extends `${infer T}-${infer U}`
            ? `${Capitalize<Lowercase<T>>}${SnakeToPascalCase<U>}`
            : S extends `${infer T}`
            ? `${Capitalize<Lowercase<T>>}`
            : never;

        type SnakeToCamel<T> = { [P in keyof T as P extends string ? SnakeToCamelCase<P> : P]: T[P] };
        type SnakeToUnderscore<T> = { [P in keyof T as P extends string ? SnakeToUnderscoreCase<P> : P]: T[P] };

        type Ctor = new (...a: any[]) => object;

        type Init = { _init(...args: any[]): void };

        export type RegisteredClass<
            T extends Ctor,
            Props extends { [key: string]: ParamSpec },
            Interfaces extends { $gtype: GType<any> }[]
        > = T extends { prototype: infer P }
            ? {
                  $gtype: GType<RegisteredClass<T, Props, IFaces<Interfaces>>>;
                  new (...args: P extends Init ? Parameters<P["_init"]> : [void]): RegisteredPrototype<
                      P,
                      Props,
                      IFaces<Interfaces>
                  >;
                  prototype: RegisteredPrototype<P, Props, IFaces<Interfaces>>;
              }
            : never;

        export function registerClass<
            T extends Ctor,
            Props extends { [key: string]: ParamSpec },
            Interfaces extends { $gtype: GType }[],
            Sigs extends {
                [key: string]: {
                    param_types?: readonly GType[];
                    [key: string]: any;
                };
            }
        >(
            options: {
                GTypeName?: string;
                GTypeFlags?: TypeFlags;
                Properties?: Props;
                Signals?: Sigs;
                Implements?: Interfaces;
                CssName?: string;
                Template?: string;
                Children?: string[];
                InternalChildren?: string[];
            },
            klass: T
        ): RegisteredClass<T, Props, Interfaces>;

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

    export default GObject2;
}

declare module "gi://GObject" {
    export { default } from "gi://GObject?version=2.0";
}
