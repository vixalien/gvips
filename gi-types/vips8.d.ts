/**
 * Vips 8.0
 *
 * Generated from 8.14.2
 */

import * as GObject from "./gobject2";
import * as GLib from "./glib2";

export const ARGUMENT_OPTIONAL_INPUT: number;
export const ARGUMENT_OPTIONAL_OUTPUT: number;
export const ARGUMENT_REQUIRED_INPUT: number;
export const ARGUMENT_REQUIRED_OUTPUT: number;
export const A_X0: number;
export const A_Y0: number;
export const A_Z0: number;
export const B_X0: number;
export const B_Y0: number;
export const B_Z0: number;
export const CONFIG: string;
export const C_X0: number;
export const C_Y0: number;
export const C_Z0: number;
export const D3250_X0: number;
export const D3250_Y0: number;
export const D3250_Z0: number;
export const D50_X0: number;
export const D50_Y0: number;
export const D50_Z0: number;
export const D55_X0: number;
export const D55_Y0: number;
export const D55_Z0: number;
export const D65_X0: number;
export const D65_Y0: number;
export const D65_Z0: number;
export const D75_X0: number;
export const D75_Y0: number;
export const D75_Z0: number;
export const D93_X0: number;
export const D93_Y0: number;
export const D93_Z0: number;
export const ENABLE_DEPRECATED: number;
export const E_X0: number;
export const E_Y0: number;
export const E_Z0: number;
export const INTERPOLATE_SCALE: number;
export const INTERPOLATE_SHIFT: number;
export const LIBRARY_AGE: number;
export const LIBRARY_CURRENT: number;
export const LIBRARY_REVISION: number;
export const MAGIC_INTEL: number;
export const MAGIC_SPARC: number;
export const MAJOR_VERSION: number;
export const MAX_COORD: number;
export const META_CONCURRENCY: string;
export const META_EXIF_NAME: string;
export const META_ICC_NAME: string;
export const META_IMAGEDESCRIPTION: string;
export const META_IPTC_NAME: string;
export const META_LOADER: string;
export const META_N_PAGES: string;
export const META_N_SUBIFDS: string;
export const META_ORIENTATION: string;
export const META_PAGE_HEIGHT: string;
export const META_PHOTOSHOP_NAME: string;
export const META_RESOLUTION_UNIT: string;
export const META_SEQUENTIAL: string;
export const META_XMP_NAME: string;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const TRANSFORM_SCALE: number;
export const TRANSFORM_SHIFT: number;
export const VERSION: string;
export const VERSION_STRING: string;
export function _object_set_member(
    object: Object,
    pspec: GObject.ParamSpec,
    member: GObject.Object,
    argument: GObject.Object
): void;
export function add_option_entries(option_group: GLib.OptionGroup): void;
export function area_free_cb(mem: any | null, area: Area): number;
export function band_format_is8bit(format: BandFormat): boolean;
export function band_format_iscomplex(format: BandFormat): boolean;
export function band_format_isfloat(format: BandFormat): boolean;
export function band_format_isint(format: BandFormat): boolean;
export function band_format_isuint(format: BandFormat): boolean;
export function blob_copy(data: Uint8Array | string): Blob;
export function block_untrusted_set(state: boolean): void;
export function cache_drop_all(): void;
export function cache_get_max(): number;
export function cache_get_max_files(): number;
export function cache_get_max_mem(): number;
export function cache_get_size(): number;
export function cache_operation_add(operation: Operation): void;
export function cache_operation_build(operation: Operation): Operation;
export function cache_operation_lookup(operation: Operation): Operation;
export function cache_print(): void;
export function cache_set_dump(dump: boolean): void;
export function cache_set_max(max: number): void;
export function cache_set_max_files(max_files: number): void;
export function cache_set_max_mem(max_mem: number): void;
export function cache_set_trace(trace: boolean): void;
export function call_argv(operation: Operation, argc: number, argv: string): number;
export function call_options(group: GLib.OptionGroup, operation: Operation): void;
export function check_8or16(domain: string, im: Image): number;
export function check_bandno(domain: string, im: Image, bandno: number): number;
export function check_bands(domain: string, im: Image, bands: number): number;
export function check_bands_1or3(domain: string, im: Image): number;
export function check_bands_1orn(domain: string, im1: Image, im2: Image): number;
export function check_bands_1orn_unary(domain: string, im: Image, n: number): number;
export function check_bands_atleast(domain: string, im: Image, bands: number): number;
export function check_bands_same(domain: string, im1: Image, im2: Image): number;
export function check_coding(domain: string, im: Image, coding: Coding): number;
export function check_coding_known(domain: string, im: Image): number;
export function check_coding_noneorlabq(domain: string, im: Image): number;
export function check_coding_same(domain: string, im1: Image, im2: Image): number;
export function check_complex(domain: string, im: Image): number;
export function check_format(domain: string, im: Image, fmt: BandFormat): number;
export function check_format_same(domain: string, im1: Image, im2: Image): number;
export function check_hist(domain: string, im: Image): number;
export function check_int(domain: string, im: Image): number;
export function check_matrix(domain: string, im: Image): [number, Image];
export function check_mono(domain: string, im: Image): number;
export function check_noncomplex(domain: string, im: Image): number;
export function check_oddsquare(domain: string, im: Image): number;
export function check_precision_intfloat(domain: string, precision: Precision): number;
export function check_separable(domain: string, im: Image): number;
export function check_size_same(domain: string, im1: Image, im2: Image): number;
export function check_twocomponents(domain: string, im: Image): number;
export function check_u8or16(domain: string, im: Image): number;
export function check_u8or16orf(domain: string, im: Image): number;
export function check_uint(domain: string, im: Image): number;
export function check_uintorf(domain: string, im: Image): number;
export function check_uncoded(domain: string, im: Image): number;
export function check_vector(domain: string, n: number, im: Image): number;
export function check_vector_length(domain: string, n: number, len: number): number;
export function class_find(basename: string, nickname: string): Object;
export function col_C2Ccmc(C: number): number;
export function col_Ccmc2C(Ccmc: number): number;
export function col_Ch2ab(C: number, h: number, a: number, b: number): void;
export function col_Ch2hcmc(C: number, h: number): number;
export function col_Chcmc2h(C: number, hcmc: number): number;
export function col_L2Lcmc(L: number): number;
export function col_Lab2XYZ(L: number, a: number, b: number): [number, number, number];
export function col_Lcmc2L(Lcmc: number): number;
export function col_XYZ2Lab(X: number, Y: number, Z: number): [number, number, number];
export function col_XYZ2scRGB(X: number, Y: number, Z: number): [number, number, number, number];
export function col_ab2Ch(a: number, b: number, C: number, h: number): void;
export function col_ab2h(a: number, b: number): number;
export function col_dE00(L1: number, a1: number, b1: number, L2: number, a2: number, b2: number): number;
export function col_make_tables_CMC(): void;
export function col_sRGB2scRGB_16(r: number, g: number, b: number, R: number, G: number, B: number): number;
export function col_sRGB2scRGB_16_noclip(r: number, g: number, b: number, R: number, G: number, B: number): number;
export function col_sRGB2scRGB_8(r: number, g: number, b: number, R: number, G: number, B: number): number;
export function col_sRGB2scRGB_8_noclip(r: number, g: number, b: number, R: number, G: number, B: number): number;
export function col_scRGB2BW_16(R: number, G: number, B: number, g: number, og: number): number;
export function col_scRGB2BW_8(R: number, G: number, B: number, g: number, og: number): number;
export function col_scRGB2XYZ(R: number, G: number, B: number): [number, number, number, number];
export function col_scRGB2sRGB_16(R: number, G: number, B: number, r: number, g: number, b: number, og: number): number;
export function col_scRGB2sRGB_8(R: number, G: number, B: number, r: number, g: number, b: number, og: number): number;
export function concurrency_get(): number;
export function concurrency_set(concurrency: number): void;
export function error_buffer(): string;
export function error_buffer_copy(): string;
export function error_clear(): void;
export function error_freeze(): void;
export function error_g(): void;
export function error_thaw(): void;
export function filename_get_filename(vips_filename: string): string;
export function filename_get_options(vips_filename: string): string;
export function foreign_flags(loader: string, filename: string): ForeignFlags;
export function format_sizeof(format: BandFormat): number;
export function g_error(): void;
export function get_argv0(): string;
export function get_disc_threshold(): number;
export function get_prgname(): string;
export function guess_libdir(argv0: string, env_name: string): string;
export function guess_prefix(argv0: string, env_name: string): string;
export function icc_is_compatible_profile(image: Image, data: any | null, data_length: number): boolean;
export function icc_present(): number;
export function init(argv0: string): number;
export function leak_set(leak: boolean): void;
export function malloc(object: Object | null, size: number): any | null;
export function nickname_find(type: GObject.GType): string;
export function path_filename7(path: string): string;
export function path_mode7(path: string): string;
export function progress_set(progress: boolean): void;
export function pythagoras(L1: number, a1: number, b1: number, L2: number, a2: number, b2: number): number;
export function shutdown(): void;
export function strdup(object: Object | null, str: string): string;
export function thread_shutdown(): void;
export function tracked_close(fd: number): number;
export function tracked_free(s?: any | null): void;
export function tracked_get_allocs(): number;
export function tracked_get_files(): number;
export function tracked_get_mem(): number;
export function tracked_get_mem_highwater(): number;
export function tracked_malloc(size: number): any | null;
export function tracked_open(pathname: string, flags: number, mode: number): number;
export function type_depth(type: GObject.GType): number;
export function type_find(basename: string, nickname: string): GObject.GType;
export function value_get_area(value: GObject.Value | any): [any | null, number];
export function value_get_array(value: GObject.Value | any): [any | null, number, GObject.GType | null, number];
export function value_get_array_double(value: GObject.Value | any): number[];
export function value_get_array_image(value: GObject.Value | any): Image[];
export function value_get_array_int(value: GObject.Value | any): number[];
export function value_get_blob(value: GObject.Value | any): Uint8Array;
export function value_get_ref_string(value: GObject.Value | any): [string, number];
export function value_get_save_string(value: GObject.Value | any): string;
export function value_is_null(psoec: GObject.ParamSpec, value: GObject.Value | any): boolean;
export function value_set_area(value: GObject.Value | any, free_fn?: CallbackFn | null): void;
export function value_set_array(n: number, type: GObject.GType, sizeof_type: number): unknown;
export function value_set_array_double(value: GObject.Value | any, array?: number[] | null): void;
export function value_set_array_image(value: GObject.Value | any, n: number): void;
export function value_set_array_int(value: GObject.Value | any, array?: number[] | null): void;
export function value_set_array_object(n: number): unknown;
export function value_set_blob(free_fn: CallbackFn | null, data: Uint8Array | string): unknown;
export function value_set_blob_free(value: GObject.Value | any, data: Uint8Array | string): void;
export function value_set_ref_string(str: string): unknown;
export function value_set_save_string(str: string): unknown;
export function version(flag: number): number;
export function version_string(): string;
export type ArgumentClassMapFn = (
    object_class: Object,
    pspec: GObject.ParamSpec,
    argument_class: ArgumentClass,
    a?: any | null,
    b?: any | null
) => any | null;
export type ArgumentMapFn = (
    object: Object,
    pspec: GObject.ParamSpec,
    argument_class: ArgumentClass,
    argument_instance: ArgumentInstance,
    a?: any | null,
    b?: any | null
) => any | null;
export type CallbackFn = (a?: any | null, b?: any | null) => number;
export type ClassMapFn = (cls: Object, a?: any | null) => any | null;
export type GenerateFn = (out: Region, seq: any | null, a: any | null, b: any | null, stop: boolean) => number;
export type ImageMapFn = (image: Image, name: string, value: GObject.Value | any, a?: any | null) => any | null;
export type InterpolateMethod = (interpolate: Interpolate, out: any | null, _in: Region, x: number, y: number) => void;
export type ObjectSetArguments = (object: Object, a?: any | null, b?: any | null) => any | null;
export type OperationBuildFn = (object: Object) => boolean;
export type SListFold2Fn = (item?: any | null, a?: any | null, b?: any | null, c?: any | null) => any | null;
export type SListMap2Fn = (item?: any | null, a?: any | null, b?: any | null) => any | null;
export type SListMap4Fn = (
    item?: any | null,
    a?: any | null,
    b?: any | null,
    c?: any | null,
    d?: any | null
) => any | null;
export type StartFn = (out: Image, a?: any | null, b?: any | null) => any | null;
export type StopFn = (seq?: any | null, a?: any | null, b?: any | null) => number;
export type TypeMap2Fn = (type: GObject.GType, a?: any | null, b?: any | null) => any | null;
export type TypeMapFn = (type: GObject.GType, a?: any | null) => any | null;
export type SaveString = object | null;

export namespace Access {
    export const $gtype: GObject.GType<Access>;
}

export enum Access {
    RANDOM = 0,
    SEQUENTIAL = 1,
    SEQUENTIAL_UNBUFFERED = 2,
    LAST = 3,
}

export namespace Align {
    export const $gtype: GObject.GType<Align>;
}

export enum Align {
    LOW = 0,
    CENTRE = 1,
    HIGH = 2,
    LAST = 3,
}

export namespace Angle {
    export const $gtype: GObject.GType<Angle>;
}

export enum Angle {
    D0 = 0,
    D90 = 1,
    D180 = 2,
    D270 = 3,
    LAST = 4,
}

export namespace Angle45 {
    export const $gtype: GObject.GType<Angle45>;
}

export enum Angle45 {
    D0 = 0,
    D45 = 1,
    D90 = 2,
    D135 = 3,
    D180 = 4,
    D225 = 5,
    D270 = 6,
    D315 = 7,
    LAST = 8,
}

export namespace BandFormat {
    export const $gtype: GObject.GType<BandFormat>;
}

export enum BandFormat {
    NOTSET = -1,
    UCHAR = 0,
    CHAR = 1,
    USHORT = 2,
    SHORT = 3,
    UINT = 4,
    INT = 5,
    FLOAT = 6,
    COMPLEX = 7,
    DOUBLE = 8,
    DPCOMPLEX = 9,
    LAST = 10,
}

export namespace BlendMode {
    export const $gtype: GObject.GType<BlendMode>;
}

export enum BlendMode {
    CLEAR = 0,
    SOURCE = 1,
    OVER = 2,
    IN = 3,
    OUT = 4,
    ATOP = 5,
    DEST = 6,
    DEST_OVER = 7,
    DEST_IN = 8,
    DEST_OUT = 9,
    DEST_ATOP = 10,
    XOR = 11,
    ADD = 12,
    SATURATE = 13,
    MULTIPLY = 14,
    SCREEN = 15,
    OVERLAY = 16,
    DARKEN = 17,
    LIGHTEN = 18,
    COLOUR_DODGE = 19,
    COLOUR_BURN = 20,
    HARD_LIGHT = 21,
    SOFT_LIGHT = 22,
    DIFFERENCE = 23,
    EXCLUSION = 24,
    LAST = 25,
}

export namespace Coding {
    export const $gtype: GObject.GType<Coding>;
}

export enum Coding {
    ERROR = -1,
    NONE = 0,
    LABQ = 2,
    RAD = 6,
    LAST = 7,
}

export namespace Combine {
    export const $gtype: GObject.GType<Combine>;
}

export enum Combine {
    MAX = 0,
    SUM = 1,
    MIN = 2,
    LAST = 3,
}

export namespace CombineMode {
    export const $gtype: GObject.GType<CombineMode>;
}

export enum CombineMode {
    SET = 0,
    ADD = 1,
    LAST = 2,
}

export namespace CompassDirection {
    export const $gtype: GObject.GType<CompassDirection>;
}

export enum CompassDirection {
    CENTRE = 0,
    NORTH = 1,
    EAST = 2,
    SOUTH = 3,
    WEST = 4,
    NORTH_EAST = 5,
    SOUTH_EAST = 6,
    SOUTH_WEST = 7,
    NORTH_WEST = 8,
    LAST = 9,
}

export namespace DemandStyle {
    export const $gtype: GObject.GType<DemandStyle>;
}

export enum DemandStyle {
    ERROR = -1,
    SMALLTILE = 0,
    FATSTRIP = 1,
    THINSTRIP = 2,
    ANY = 3,
}

export namespace Direction {
    export const $gtype: GObject.GType<Direction>;
}

export enum Direction {
    HORIZONTAL = 0,
    VERTICAL = 1,
    LAST = 2,
}

export namespace Extend {
    export const $gtype: GObject.GType<Extend>;
}

export enum Extend {
    BLACK = 0,
    COPY = 1,
    REPEAT = 2,
    MIRROR = 3,
    WHITE = 4,
    BACKGROUND = 5,
    LAST = 6,
}

export namespace FailOn {
    export const $gtype: GObject.GType<FailOn>;
}

export enum FailOn {
    NONE = 0,
    TRUNCATED = 1,
    ERROR = 2,
    WARNING = 3,
    LAST = 4,
}

export namespace ForeignDzContainer {
    export const $gtype: GObject.GType<ForeignDzContainer>;
}

export enum ForeignDzContainer {
    FS = 0,
    ZIP = 1,
    SZI = 2,
    LAST = 3,
}

export namespace ForeignDzDepth {
    export const $gtype: GObject.GType<ForeignDzDepth>;
}

export enum ForeignDzDepth {
    ONEPIXEL = 0,
    ONETILE = 1,
    ONE = 2,
    LAST = 3,
}

export namespace ForeignDzLayout {
    export const $gtype: GObject.GType<ForeignDzLayout>;
}

export enum ForeignDzLayout {
    DZ = 0,
    ZOOMIFY = 1,
    GOOGLE = 2,
    IIIF = 3,
    IIIF3 = 4,
    LAST = 5,
}

export namespace ForeignHeifCompression {
    export const $gtype: GObject.GType<ForeignHeifCompression>;
}

export enum ForeignHeifCompression {
    HEVC = 1,
    AVC = 2,
    JPEG = 3,
    AV1 = 4,
    LAST = 5,
}

export namespace ForeignHeifEncoder {
    export const $gtype: GObject.GType<ForeignHeifEncoder>;
}

export enum ForeignHeifEncoder {
    AUTO = 0,
    AOM = 1,
    RAV1E = 2,
    SVT = 3,
    X265 = 4,
    LAST = 5,
}

export namespace ForeignJpegSubsample {
    export const $gtype: GObject.GType<ForeignJpegSubsample>;
}

export enum ForeignJpegSubsample {
    AUTO = 0,
    ON = 1,
    OFF = 2,
    LAST = 3,
}

export namespace ForeignPpmFormat {
    export const $gtype: GObject.GType<ForeignPpmFormat>;
}

export enum ForeignPpmFormat {
    PBM = 0,
    PGM = 1,
    PPM = 2,
    PFM = 3,
    PNM = 4,
    LAST = 5,
}

export namespace ForeignSubsample {
    export const $gtype: GObject.GType<ForeignSubsample>;
}

export enum ForeignSubsample {
    AUTO = 0,
    ON = 1,
    OFF = 2,
    LAST = 3,
}

export namespace ForeignTiffCompression {
    export const $gtype: GObject.GType<ForeignTiffCompression>;
}

export enum ForeignTiffCompression {
    NONE = 0,
    JPEG = 1,
    DEFLATE = 2,
    PACKBITS = 3,
    CCITTFAX4 = 4,
    LZW = 5,
    WEBP = 6,
    ZSTD = 7,
    JP2K = 8,
    LAST = 9,
}

export namespace ForeignTiffPredictor {
    export const $gtype: GObject.GType<ForeignTiffPredictor>;
}

export enum ForeignTiffPredictor {
    NONE = 1,
    HORIZONTAL = 2,
    FLOAT = 3,
    LAST = 4,
}

export namespace ForeignTiffResunit {
    export const $gtype: GObject.GType<ForeignTiffResunit>;
}

export enum ForeignTiffResunit {
    CM = 0,
    INCH = 1,
    LAST = 2,
}

export namespace ForeignWebpPreset {
    export const $gtype: GObject.GType<ForeignWebpPreset>;
}

export enum ForeignWebpPreset {
    DEFAULT = 0,
    PICTURE = 1,
    PHOTO = 2,
    DRAWING = 3,
    ICON = 4,
    TEXT = 5,
    LAST = 6,
}

export namespace ImageType {
    export const $gtype: GObject.GType<ImageType>;
}

export enum ImageType {
    ERROR = -1,
    NONE = 0,
    SETBUF = 1,
    SETBUF_FOREIGN = 2,
    OPENIN = 3,
    MMAPIN = 4,
    MMAPINRW = 5,
    OPENOUT = 6,
    PARTIAL = 7,
}

export namespace Intent {
    export const $gtype: GObject.GType<Intent>;
}

export enum Intent {
    PERCEPTUAL = 0,
    RELATIVE = 1,
    SATURATION = 2,
    ABSOLUTE = 3,
    LAST = 4,
}

export namespace Interesting {
    export const $gtype: GObject.GType<Interesting>;
}

export enum Interesting {
    NONE = 0,
    CENTRE = 1,
    ENTROPY = 2,
    ATTENTION = 3,
    LOW = 4,
    HIGH = 5,
    ALL = 6,
    LAST = 7,
}

export namespace Interpretation {
    export const $gtype: GObject.GType<Interpretation>;
}

export enum Interpretation {
    ERROR = -1,
    MULTIBAND = 0,
    B_W = 1,
    HISTOGRAM = 10,
    XYZ = 12,
    LAB = 13,
    CMYK = 15,
    LABQ = 16,
    RGB = 17,
    CMC = 18,
    LCH = 19,
    LABS = 21,
    SRGB = 22,
    YXY = 23,
    FOURIER = 24,
    RGB16 = 25,
    GREY16 = 26,
    MATRIX = 27,
    SCRGB = 28,
    HSV = 29,
    LAST = 30,
}

export namespace Kernel {
    export const $gtype: GObject.GType<Kernel>;
}

export enum Kernel {
    NEAREST = 0,
    LINEAR = 1,
    CUBIC = 2,
    MITCHELL = 3,
    LANCZOS2 = 4,
    LANCZOS3 = 5,
    LAST = 6,
}

export namespace OperationBoolean {
    export const $gtype: GObject.GType<OperationBoolean>;
}

export enum OperationBoolean {
    AND = 0,
    OR = 1,
    EOR = 2,
    LSHIFT = 3,
    RSHIFT = 4,
    LAST = 5,
}

export namespace OperationComplex {
    export const $gtype: GObject.GType<OperationComplex>;
}

export enum OperationComplex {
    POLAR = 0,
    RECT = 1,
    CONJ = 2,
    LAST = 3,
}

export namespace OperationComplex2 {
    export const $gtype: GObject.GType<OperationComplex2>;
}

export enum OperationComplex2 {
    CROSS_PHASE = 0,
    LAST = 1,
}

export namespace OperationComplexget {
    export const $gtype: GObject.GType<OperationComplexget>;
}

export enum OperationComplexget {
    REAL = 0,
    IMAG = 1,
    LAST = 2,
}

export namespace OperationMath {
    export const $gtype: GObject.GType<OperationMath>;
}

export enum OperationMath {
    SIN = 0,
    COS = 1,
    TAN = 2,
    ASIN = 3,
    ACOS = 4,
    ATAN = 5,
    LOG = 6,
    LOG10 = 7,
    EXP = 8,
    EXP10 = 9,
    SINH = 10,
    COSH = 11,
    TANH = 12,
    ASINH = 13,
    ACOSH = 14,
    ATANH = 15,
    LAST = 16,
}

export namespace OperationMath2 {
    export const $gtype: GObject.GType<OperationMath2>;
}

export enum OperationMath2 {
    POW = 0,
    WOP = 1,
    ATAN2 = 2,
    LAST = 3,
}

export namespace OperationMorphology {
    export const $gtype: GObject.GType<OperationMorphology>;
}

export enum OperationMorphology {
    ERODE = 0,
    DILATE = 1,
    LAST = 2,
}

export namespace OperationRelational {
    export const $gtype: GObject.GType<OperationRelational>;
}

export enum OperationRelational {
    EQUAL = 0,
    NOTEQ = 1,
    LESS = 2,
    LESSEQ = 3,
    MORE = 4,
    MOREEQ = 5,
    LAST = 6,
}

export namespace OperationRound {
    export const $gtype: GObject.GType<OperationRound>;
}

export enum OperationRound {
    RINT = 0,
    CEIL = 1,
    FLOOR = 2,
    LAST = 3,
}

export namespace PCS {
    export const $gtype: GObject.GType<PCS>;
}

export enum PCS {
    LAB = 0,
    XYZ = 1,
    LAST = 2,
}

export namespace Precision {
    export const $gtype: GObject.GType<Precision>;
}

export enum Precision {
    INTEGER = 0,
    FLOAT = 1,
    APPROXIMATE = 2,
    LAST = 3,
}

export namespace RegionShrink {
    export const $gtype: GObject.GType<RegionShrink>;
}

export enum RegionShrink {
    MEAN = 0,
    MEDIAN = 1,
    MODE = 2,
    MAX = 3,
    MIN = 4,
    NEAREST = 5,
    LAST = 6,
}

export namespace Saveable {
    export const $gtype: GObject.GType<Saveable>;
}

export enum Saveable {
    MONO = 0,
    RGB = 1,
    RGBA = 2,
    RGBA_ONLY = 3,
    RGB_CMYK = 4,
    ANY = 5,
    LAST = 6,
}

export namespace Size {
    export const $gtype: GObject.GType<Size>;
}

export enum Size {
    BOTH = 0,
    UP = 1,
    DOWN = 2,
    FORCE = 3,
    LAST = 4,
}

export namespace TextWrap {
    export const $gtype: GObject.GType<TextWrap>;
}

export enum TextWrap {
    WORD = 0,
    CHAR = 1,
    WORD_CHAR = 2,
    NONE = 3,
    LAST = 4,
}

export namespace Token {
    export const $gtype: GObject.GType<Token>;
}

export enum Token {
    LEFT = 1,
    RIGHT = 2,
    STRING = 3,
    EQUALS = 4,
    COMMA = 5,
}

export namespace ArgumentFlags {
    export const $gtype: GObject.GType<ArgumentFlags>;
}

export enum ArgumentFlags {
    NONE = 0,
    REQUIRED = 1,
    CONSTRUCT = 2,
    SET_ONCE = 4,
    SET_ALWAYS = 8,
    INPUT = 16,
    OUTPUT = 32,
    DEPRECATED = 64,
    MODIFY = 128,
}

export namespace ForeignFlags {
    export const $gtype: GObject.GType<ForeignFlags>;
}

export enum ForeignFlags {
    NONE = 0,
    PARTIAL = 1,
    BIGENDIAN = 2,
    SEQUENTIAL = 4,
    ALL = 7,
}

export namespace ForeignPngFilter {
    export const $gtype: GObject.GType<ForeignPngFilter>;
}

export enum ForeignPngFilter {
    NONE = 8,
    SUB = 16,
    UP = 32,
    AVG = 64,
    PAETH = 128,
    ALL = 248,
}

export namespace OperationFlags {
    export const $gtype: GObject.GType<OperationFlags>;
}

export enum OperationFlags {
    NONE = 0,
    SEQUENTIAL = 1,
    SEQUENTIAL_UNBUFFERED = 2,
    NOCACHE = 4,
    DEPRECATED = 8,
    UNTRUSTED = 16,
    BLOCKED = 32,
}
export module Foreign {
    export interface ConstructorProperties extends Operation.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Foreign extends Operation {
    static $gtype: GObject.GType<Foreign>;

    constructor(properties?: Partial<Foreign.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Foreign.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Operation;

    // Members

    static find_load(filename: string): string;
    static find_load_buffer(data: Uint8Array | string): string;
    static find_load_source(source: Source): string;
    static find_save(filename: string): string | null;
    static find_save_buffer(suffix: string): string | null;
    static find_save_target(suffix: string): string | null;
    static get_suffixes(): string[];
    static is_a(loader: string, filename: string): boolean;
    static is_a_buffer(loader: string, data: Uint8Array | string): boolean;
    static is_a_source(loader: string, source: Source): boolean;
    static map(base: string, fn: SListMap2Fn, a?: any | null, b?: any | null): any | null;
}
export module ForeignLoad {
    export interface ConstructorProperties extends Foreign.ConstructorProperties {
        [key: string]: any;
        access: Access;
        disc: boolean;
        fail: boolean;
        fail_on: FailOn;
        failOn: FailOn;
        flags: ForeignFlags;
        memory: boolean;
        out: Image;
        sequential: boolean;
    }
}
export abstract class ForeignLoad extends Foreign {
    static $gtype: GObject.GType<ForeignLoad>;

    constructor(properties?: Partial<ForeignLoad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ForeignLoad.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get access(): Access;
    set access(val: Access);
    get disc(): boolean;
    set disc(val: boolean);
    get fail(): boolean;
    set fail(val: boolean);
    get fail_on(): FailOn;
    set fail_on(val: FailOn);
    get failOn(): FailOn;
    set failOn(val: FailOn);
    get flags(): ForeignFlags;
    set flags(val: ForeignFlags);
    get memory(): boolean;
    set memory(val: boolean);
    get out(): Image;
    set out(val: Image);
    get sequential(): boolean;
    set sequential(val: boolean);

    // Fields
    parent_object: Foreign;
    real: Image;
    nocache: boolean;
    error: boolean;

    // Members

    vfunc_get_flags(): ForeignFlags;
    // Conflicted with Vips.Operation.vfunc_get_flags
    vfunc_get_flags(...args: never[]): any;
    vfunc_header(): number;
    vfunc_load(): number;
}
export module ForeignSave {
    export interface ConstructorProperties extends Foreign.ConstructorProperties {
        [key: string]: any;
        background: ArrayDouble;
        in: Image;
        page_height: number;
        pageHeight: number;
        strip: boolean;
    }
}
export abstract class ForeignSave extends Foreign {
    static $gtype: GObject.GType<ForeignSave>;

    constructor(properties?: Partial<ForeignSave.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ForeignSave.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get background(): ArrayDouble;
    set background(val: ArrayDouble);
    get in(): Image;
    set in(val: Image);
    get page_height(): number;
    set page_height(val: number);
    get pageHeight(): number;
    set pageHeight(val: number);
    get strip(): boolean;
    set strip(val: boolean);

    // Fields
    parent_object: Foreign;
    ready: Image;
}
export module Image {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        bands: number;
        coding: Coding;
        demand: DemandStyle;
        filename: string;
        foreign_buffer: any;
        foreignBuffer: any;
        format: BandFormat;
        height: number;
        interpretation: Interpretation;
        kill: boolean;
        mode: string;
        sizeof_header: number;
        sizeofHeader: number;
        width: number;
        xoffset: number;
        xres: number;
        yoffset: number;
        yres: number;
    }
}
export class Image extends Object {
    static $gtype: GObject.GType<Image>;

    constructor(properties?: Partial<Image.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Image.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get bands(): number;
    set bands(val: number);
    get coding(): Coding;
    set coding(val: Coding);
    get demand(): DemandStyle;
    set demand(val: DemandStyle);
    get filename(): string;
    set filename(val: string);
    get foreign_buffer(): any;
    set foreign_buffer(val: any);
    get foreignBuffer(): any;
    set foreignBuffer(val: any);
    get format(): BandFormat;
    set format(val: BandFormat);
    get height(): number;
    set height(val: number);
    get interpretation(): Interpretation;
    set interpretation(val: Interpretation);
    get kill(): boolean;
    set kill(val: boolean);
    get mode(): string;
    set mode(val: string);
    get sizeof_header(): number;
    set sizeof_header(val: number);
    get sizeofHeader(): number;
    set sizeofHeader(val: number);
    get width(): number;
    set width(val: number);
    get xoffset(): number;
    set xoffset(val: number);
    get xres(): number;
    set xres(val: number);
    get yoffset(): number;
    set yoffset(val: number);
    get yres(): number;
    set yres(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "eval", callback: (_source: this, progress: Progress) => void): number;
    connect_after(signal: "eval", callback: (_source: this, progress: Progress) => void): number;
    emit(signal: "eval", progress: Progress): void;
    connect(signal: "invalidate", callback: (_source: this) => void): number;
    connect_after(signal: "invalidate", callback: (_source: this) => void): number;
    emit(signal: "invalidate"): void;
    connect(signal: "minimise", callback: (_source: this) => void): number;
    connect_after(signal: "minimise", callback: (_source: this) => void): number;
    emit(signal: "minimise"): void;
    connect(signal: "posteval", callback: (_source: this, progress: Progress) => void): number;
    connect_after(signal: "posteval", callback: (_source: this, progress: Progress) => void): number;
    emit(signal: "posteval", progress: Progress): void;
    connect(signal: "preeval", callback: (_source: this, progress: Progress) => void): number;
    connect_after(signal: "preeval", callback: (_source: this, progress: Progress) => void): number;
    emit(signal: "preeval", progress: Progress): void;
    connect(signal: "written", callback: (_source: this, result: number) => void): number;
    connect_after(signal: "written", callback: (_source: this, result: number) => void): number;
    emit(signal: "written", result: number): void;

    // Constructors

    static memory(): Image;
    static ["new"](): Image;
    static new_from_file_RW(filename: string): Image;
    static new_from_file_raw(filename: string, xsize: number, ysize: number, bands: number, offset: number): Image;
    static new_from_image(image: Image, c: number[]): Image;
    static new_from_image1(image: Image, c: number): Image;
    static new_from_memory(
        data: Uint8Array | string,
        width: number,
        height: number,
        bands: number,
        format: BandFormat
    ): Image;
    static new_from_memory_copy(
        data: Uint8Array | string,
        width: number,
        height: number,
        bands: number,
        format: BandFormat
    ): Image;
    static new_matrix(width: number, height: number): Image;
    static new_matrix_from_array(width: number, height: number, array: number[]): Image;
    static new_temp_file(format: string): Image;

    // Members

    autorot_remove_angle(): void;
    colourspace_issupported(): boolean;
    copy_memory(): Image;
    decode(): [number, Image];
    decode_predict(): [number, number, BandFormat];
    encode(coding: Coding): [number, Image];
    foreign_load_invalidate(): void;
    free_buffer(buffer?: any | null): void;
    get(name: string): [number, unknown];
    get_area(name: string): [number, any];
    get_array_double(name: string): [number, number[]];
    get_array_int(name: string): [number, number[]];
    get_as_string(name: string): [number, string];
    get_bands(): number;
    get_blob(name: string): [number, Uint8Array];
    get_coding(): Coding;
    get_concurrency(default_concurrency: number): number;
    get_data(): any | null;
    get_double(name: string): [number, number];
    get_fields(): string[];
    get_filename(): string;
    get_format(): BandFormat;
    get_height(): number;
    get_history(): string;
    get_image(name: string): [number, Image];
    get_int(name: string): [number, number];
    get_interpretation(): Interpretation;
    get_mode(): string;
    get_n_pages(): number;
    get_n_subifds(): number;
    get_offset(): number;
    get_orientation(): number;
    get_orientation_swap(): boolean;
    get_page_height(): number;
    get_scale(): number;
    get_string(name: string): [number, string];
    get_typeof(name: string): GObject.GType;
    get_width(): number;
    get_xoffset(): number;
    get_xres(): number;
    get_yoffset(): number;
    get_yres(): number;
    guess_format(): BandFormat;
    guess_interpretation(): Interpretation;
    hasalpha(): boolean;
    history_args(name: string, argv: string[]): number;
    icc_ac2rc(profile_filename: string): [number, Image];
    init_fields(
        xsize: number,
        ysize: number,
        bands: number,
        format: BandFormat,
        coding: Coding,
        interpretation: Interpretation,
        xres: number,
        yres: number
    ): void;
    inplace(): number;
    invalidate_all(): void;
    isMSBfirst(): boolean;
    is_sequential(): boolean;
    isfile(): boolean;
    iskilled(): boolean;
    ispartial(): boolean;
    map(a?: any | null): any | null;
    minimise_all(): void;
    pio_input(): number;
    pio_output(): number;
    print_field(name: string): void;
    remove(name: string): boolean;
    reorder_margin_hint(margin: number): void;
    reorder_prepare_many(regions: Region[], r: Rect): number;
    set(name: string, value: GObject.Value | any): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    set_area(name: string, free_fn?: CallbackFn | null): void;
    set_array_double(name: string, array?: number[] | null): void;
    set_array_int(name: string, array?: number[] | null): void;
    set_blob(name: string, free_fn: CallbackFn | null, data: Uint8Array | string): void;
    set_blob_copy(name: string, data: Uint8Array | string): void;
    set_delete_on_close(delete_on_close: boolean): void;
    set_double(name: string, d: number): void;
    set_image(name: string, im: Image): void;
    set_int(name: string, i: number): void;
    set_kill(kill: boolean): void;
    set_progress(progress: boolean): void;
    set_string(name: string, str: string): void;
    wio_input(): number;
    write(): [number, Image];
    write_line(ypos: number, linebuffer: Pel): number;
    write_prepare(): number;
    write_to_memory(): Uint8Array;
    vfunc_eval(progress: Progress, data?: any | null): void;
    vfunc_invalidate(data?: any | null): void;
    vfunc_minimise(data?: any | null): void;
    vfunc_posteval(progress: Progress, data?: any | null): void;
    vfunc_preeval(progress: Progress, data?: any | null): void;
    vfunc_written(result: number, data?: any | null): void;
    static get_format_max(format: BandFormat): number;
}
export module Interpolate {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Interpolate extends Object {
    static $gtype: GObject.GType<Interpolate>;

    constructor(properties?: Partial<Interpolate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Interpolate.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Object;

    // Constructors

    static ["new"](nickname: string): Interpolate;

    // Members

    get_window_offset(): number;
    get_window_size(): number;
    vfunc_get_window_offset(): number;
    vfunc_get_window_size(): number;
    vfunc_interpolate(out: any | null, _in: Region, x: number, y: number): void;
    static bilinear_static(): Interpolate;
    static nearest_static(): Interpolate;
}
export module Object {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        description: string;
        nickname: string;
    }
}
export abstract class Object extends GObject.Object {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get description(): string;
    set description(val: string);
    get nickname(): string;
    set nickname(val: string);

    // Fields
    constructed: boolean;
    static_object: boolean;
    argument_table: ArgumentTable;
    close: boolean;
    postclose: boolean;
    local_memory: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "close", callback: (_source: this) => void): number;
    connect_after(signal: "close", callback: (_source: this) => void): number;
    emit(signal: "close"): void;
    connect(signal: "postbuild", callback: (_source: this) => number): number;
    connect_after(signal: "postbuild", callback: (_source: this) => number): number;
    emit(signal: "postbuild"): void;
    connect(signal: "postclose", callback: (_source: this) => void): number;
    connect_after(signal: "postclose", callback: (_source: this) => void): number;
    emit(signal: "postclose"): void;
    connect(signal: "preclose", callback: (_source: this) => void): number;
    connect_after(signal: "preclose", callback: (_source: this) => void): number;
    emit(signal: "preclose"): void;

    // Constructors

    static new_from_string(object_class: Object, p: string): Object;

    // Members

    argument_isset(name: string): boolean;
    argument_needsstring(name: string): boolean;
    build(): number;
    get_argument_flags(name: string): ArgumentFlags;
    get_argument_priority(name: string): number;
    get_argument_to_string(name: string, arg: string): number;
    get_description(): string;
    local_cb(gobject: GObject.Object): void;
    preclose(): void;
    print_dump(): void;
    print_name(): void;
    print_summary(): void;
    rewind(): void;
    sanity(): boolean;
    set_argument_from_string(name: string, value: string): number;
    set_from_string(string: string): number;
    set_required(value: string): number;
    set_static(static_object: boolean): void;
    to_string(buf: Buf): void;
    unref_outputs(): void;
    vfunc_build(): number;
    vfunc_close(): void;
    vfunc_output_to_arg(string: string): number;
    vfunc_postbuild(data?: any | null): number;
    vfunc_postclose(): void;
    vfunc_preclose(): void;
    vfunc_rewind(): void;
    vfunc_sanity(buf: Buf): void;
    vfunc_to_string(buf: Buf): void;
    static get_property(
        gobject: GObject.Object,
        property_id: number,
        value: GObject.Value | any,
        pspec: GObject.ParamSpec
    ): void;
    static print_all(): void;
    static print_summary_class(klass: Object): void;
    static sanity_all(): void;
    static set_property(
        gobject: GObject.Object,
        property_id: number,
        value: GObject.Value | any,
        pspec: GObject.ParamSpec
    ): void;
    static install_argument(pspec: GObject.ParamSpec, flags: ArgumentFlags, priority: number, offset: number): void;
}
export module Operation {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Operation extends Object {
    static $gtype: GObject.GType<Operation>;

    constructor(properties?: Partial<Operation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Operation.ConstructorProperties>, ...args: any[]): void;

    // Fields
    hash: number;
    found_hash: boolean;
    pixels: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "invalidate", callback: (_source: this) => void): number;
    connect_after(signal: "invalidate", callback: (_source: this) => void): number;
    emit(signal: "invalidate"): void;

    // Constructors

    static ["new"](name: string): Operation;

    // Members

    get_flags(): OperationFlags;
    invalidate(): void;
    vfunc_get_flags(): OperationFlags;
    vfunc_invalidate(): void;
    static block_set(name: string, state: boolean): void;
}
export module Region {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Region extends Object {
    static $gtype: GObject.GType<Region>;

    constructor(properties?: Partial<Region.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Region.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Object;
    im: Image;
    valid: Rect;

    // Constructors

    static ["new"](image: Image): Region;

    // Members

    black(): void;
    buffer(r: Rect): number;
    copy(dest: Region, r: Rect, x: number, y: number): Region;
    equalsregion(reg2: Region): number;
    fetch(left: number, top: number, width: number, height: number, len: number): Pel;
    height(): number;
    image(r: Rect): number;
    invalidate(): void;
    paint(r: Rect, value: number): void;
    paint_pel(r: Rect, ink: Pel): void;
    position(x: number, y: number): number;
    prepare(r: Rect): number;
    prepare_to(dest: Region, r: Rect, x: number, y: number): number;
    region(dest: Region, r: Rect, x: number, y: number): number;
    shrink_method(to: Region, target: Rect, method: RegionShrink): [number, Region];
    width(): number;
}

export class Area {
    static $gtype: GObject.GType<Area>;

    constructor(
        properties?: Partial<{
            data?: any;
            length?: number;
            n?: number;
        }>
    );
    constructor(copy: Area);

    // Fields
    data: any;
    length: number;
    n: number;

    // Constructors
    static ["new"](free_fn?: CallbackFn | null): Area;
    static new_array(type: GObject.GType, sizeof_type: number, n: number): Area;
    static new_array_object(n: number): Area;

    // Members
    copy(): Area;
    get_data(): [any | null, number, number, GObject.GType | null, number];
    unref(): void;
    static free_cb(mem: any | null, area: Area): number;
}

export class Argument {
    static $gtype: GObject.GType<Argument>;

    constructor(copy: Argument);

    // Fields
    pspec: GObject.ParamSpec;
}

export class ArgumentClass {
    static $gtype: GObject.GType<ArgumentClass>;

    constructor(copy: ArgumentClass);

    // Fields
    parent: Argument;
    object_class: Object;
    flags: ArgumentFlags;
    priority: number;
    offset: number;

    // Members
    needsstring(): boolean;
}

export class ArgumentInstance {
    static $gtype: GObject.GType<ArgumentInstance>;

    constructor(copy: ArgumentInstance);

    // Fields
    parent: Argument;
    argument_class: ArgumentClass;
    object: Object;
    assigned: boolean;
    close_id: number;
    invalidate_id: number;
}

export class ArrayDouble {
    static $gtype: GObject.GType<ArrayDouble>;

    constructor(
        properties?: Partial<{
            area?: Area;
        }>
    );
    constructor(copy: ArrayDouble);

    // Fields
    area: Area;

    // Constructors
    static ["new"](array: number[]): ArrayDouble;

    // Members
    get(): number[];
}

export class ArrayImage {
    static $gtype: GObject.GType<ArrayImage>;

    constructor();
    constructor(
        properties?: Partial<{
            area?: Area;
        }>
    );
    constructor(copy: ArrayImage);

    // Fields
    area: Area;

    // Constructors
    static empty(): ArrayImage;
    static ["new"](array: Image[]): ArrayImage;
    static new_from_string(string: string, flags: Access): ArrayImage;

    // Members
    append(image: Image): ArrayImage;
    get(): Image[];
}

export class ArrayInt {
    static $gtype: GObject.GType<ArrayInt>;

    constructor(
        properties?: Partial<{
            area?: Area;
        }>
    );
    constructor(copy: ArrayInt);

    // Fields
    area: Area;

    // Constructors
    static ["new"](array: number[]): ArrayInt;

    // Members
    get(): number[];
}

export class Blob {
    static $gtype: GObject.GType<Blob>;

    constructor(
        properties?: Partial<{
            area?: Area;
        }>
    );
    constructor(copy: Blob);

    // Fields
    area: Area;

    // Constructors
    static ["new"](free_fn: CallbackFn | null, data: Uint8Array | string): Blob;

    // Members
    get(): Uint8Array;
    set(free_fn: CallbackFn | null, data: Uint8Array | string): void;
    static copy(data: Uint8Array | string): Blob;
}

export class Buf {
    static $gtype: GObject.GType<Buf>;

    constructor(copy: Buf);
}

export class Progress {
    static $gtype: GObject.GType<Progress>;

    constructor(copy: Progress);

    // Fields
    run: number;
    eta: number;
    tpels: number;
    npels: number;
    percent: number;
    start: GLib.Timer;

    // Members
    static set(progress: boolean): void;
}

export class Rect {
    static $gtype: GObject.GType<Rect>;

    constructor(
        properties?: Partial<{
            left?: number;
            top?: number;
            width?: number;
            height?: number;
        }>
    );
    constructor(copy: Rect);

    // Fields
    left: number;
    top: number;
    width: number;
    height: number;

    // Members
    equalsrect(r2: Rect): boolean;
    includespoint(x: number, y: number): boolean;
    includesrect(r2: Rect): boolean;
    intersectrect(r2: Rect): Rect;
    isempty(): boolean;
    marginadjust(n: number): void;
    normalise(): void;
    overlapsrect(r2: Rect): boolean;
    unionrect(r2: Rect): Rect;
}

export class RefString {
    static $gtype: GObject.GType<RefString>;

    constructor(
        properties?: Partial<{
            area?: Area;
        }>
    );
    constructor(copy: RefString);

    // Fields
    area: Area;

    // Constructors
    static ["new"](str: string): RefString;

    // Members
    get(): [string, number];
}

export class Source {
    static $gtype: GObject.GType<Source>;

    constructor(copy: Source);
}

export class Target {
    static $gtype: GObject.GType<Target>;

    constructor(copy: Target);
}

export class Thing {
    static $gtype: GObject.GType<Thing>;

    constructor(
        properties?: Partial<{
            i?: number;
        }>
    );
    constructor(copy: Thing);

    // Fields
    i: number;

    // Constructors
    static ["new"](i: number): Thing;
}
export type ArgumentTable = GLib.HashTable;
export type Pel = number;
