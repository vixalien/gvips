/// <reference path="./gobject2.d.ts" />
/// <reference path="./glib2.d.ts" />

/**
 * Vips 8.0
 *
 * Generated from 8.14.2
 */

declare module "gi://Vips?version=8.0" {
    import GObject from "gi://GObject?version=2.0";
    import GLib from "gi://GLib?version=2.0";

    export namespace Vips8 {
        export namespace Access {
            export const $gtype: GObject.GType<Access>;
        }

        /**
         * The type of access an operation has to supply. See vips_tilecache()
         * and #VipsForeign.
         *
         * @VIPS_ACCESS_RANDOM means requests can come in any order.
         *
         * @VIPS_ACCESS_SEQUENTIAL means requests will be top-to-bottom, but with some
         * amount of buffering behind the read point for small non-local accesses.
         */
        export enum Access {
            /**
             * can read anywhere
             */
            RANDOM = 0,
            /**
             * top-to-bottom reading only, but with a small buffer
             */
            SEQUENTIAL = 1,
            SEQUENTIAL_UNBUFFERED = 2,
            LAST = 3,
        }

        export namespace Align {
            export const $gtype: GObject.GType<Align>;
        }

        /**
         * See vips_join() and so on.
         *
         * Operations like vips_join() need to be told whether to align images on the
         * low or high coordinate edge, or centre.
         *
         * See also: vips_join().
         */
        export enum Align {
            /**
             * align low coordinate edge
             */
            LOW = 0,
            /**
             * align centre
             */
            CENTRE = 1,
            /**
             * align high coordinate edge
             */
            HIGH = 2,
            LAST = 3,
        }

        export namespace Angle {
            export const $gtype: GObject.GType<Angle>;
        }

        /**
         * See vips_rot() and so on.
         *
         * Fixed rotate angles.
         *
         * See also: vips_rot().
         */
        export enum Angle {
            /**
             * no rotate
             */
            D0 = 0,
            /**
             * 90 degrees clockwise
             */
            D90 = 1,
            /**
             * 180 degree rotate
             */
            D180 = 2,
            /**
             * 90 degrees anti-clockwise
             */
            D270 = 3,
            LAST = 4,
        }

        export namespace Angle45 {
            export const $gtype: GObject.GType<Angle45>;
        }

        /**
         * See vips_rot45() and so on.
         *
         * Fixed rotate angles.
         *
         * See also: vips_rot45().
         */
        export enum Angle45 {
            /**
             * no rotate
             */
            D0 = 0,
            /**
             * 45 degrees clockwise
             */
            D45 = 1,
            /**
             * 90 degrees clockwise
             */
            D90 = 2,
            /**
             * 135 degrees clockwise
             */
            D135 = 3,
            /**
             * 180 degrees
             */
            D180 = 4,
            /**
             * 135 degrees anti-clockwise
             */
            D225 = 5,
            /**
             * 90 degrees anti-clockwise
             */
            D270 = 6,
            /**
             * 45 degrees anti-clockwise
             */
            D315 = 7,
            LAST = 8,
        }

        export namespace BandFormat {
            export const $gtype: GObject.GType<BandFormat>;
        }

        /**
         * The format used for each band element.
         *
         * Each corresponds to a native C type for the current machine. For example,
         * #VIPS_FORMAT_USHORT is &lt;type&gt;unsigned short&lt;/type&gt;.
         */
        export enum BandFormat {
            /**
             * invalid setting
             */
            NOTSET = -1,
            /**
             * unsigned char format
             */
            UCHAR = 0,
            /**
             * char format
             */
            CHAR = 1,
            /**
             * unsigned short format
             */
            USHORT = 2,
            /**
             * short format
             */
            SHORT = 3,
            /**
             * unsigned int format
             */
            UINT = 4,
            /**
             * int format
             */
            INT = 5,
            /**
             * float format
             */
            FLOAT = 6,
            /**
             * complex (two floats) format
             */
            COMPLEX = 7,
            /**
             * double float format
             */
            DOUBLE = 8,
            /**
             * double complex (two double) format
             */
            DPCOMPLEX = 9,
            LAST = 10,
        }

        export namespace BlendMode {
            export const $gtype: GObject.GType<BlendMode>;
        }

        /**
         * The various Porter-Duff and PDF blend modes. See vips_composite(),
         * for example.
         *
         * The Cairo docs have a nice explanation of all the blend modes:
         *
         * https://www.cairographics.org/operators
         *
         * The non-separable modes are not implemented.
         */
        export enum BlendMode {
            /**
             * where the second object is drawn, the first is removed
             */
            CLEAR = 0,
            /**
             * the second object is drawn as if nothing were below
             */
            SOURCE = 1,
            /**
             * the image shows what you would expect if you held two semi-transparent slides on top of each other
             */
            OVER = 2,
            /**
             * the first object is removed completely, the second is only drawn where the first was
             */
            IN = 3,
            /**
             * the second is drawn only where the first isn't
             */
            OUT = 4,
            /**
             * this leaves the first object mostly intact, but mixes both objects in the overlapping area
             */
            ATOP = 5,
            /**
             * leaves the first object untouched, the second is discarded completely
             */
            DEST = 6,
            /**
             * like OVER, but swaps the arguments
             */
            DEST_OVER = 7,
            /**
             * like IN, but swaps the arguments
             */
            DEST_IN = 8,
            /**
             * like OUT, but swaps the arguments
             */
            DEST_OUT = 9,
            /**
             * like ATOP, but swaps the arguments
             */
            DEST_ATOP = 10,
            /**
             * something like a difference operator
             */
            XOR = 11,
            /**
             * a bit like adding the two images
             */
            ADD = 12,
            /**
             * a bit like the darker of the two
             */
            SATURATE = 13,
            /**
             * at least as dark as the darker of the two inputs
             */
            MULTIPLY = 14,
            /**
             * at least as light as the lighter of the inputs
             */
            SCREEN = 15,
            /**
             * multiplies or screens colors, depending on the lightness
             */
            OVERLAY = 16,
            /**
             * the darker of each component
             */
            DARKEN = 17,
            /**
             * the lighter of each component
             */
            LIGHTEN = 18,
            /**
             * brighten first by a factor second
             */
            COLOUR_DODGE = 19,
            /**
             * darken first by a factor of second
             */
            COLOUR_BURN = 20,
            /**
             * multiply or screen, depending on lightness
             */
            HARD_LIGHT = 21,
            /**
             * darken or lighten, depending on lightness
             */
            SOFT_LIGHT = 22,
            /**
             * difference of the two
             */
            DIFFERENCE = 23,
            /**
             * somewhat like DIFFERENCE, but lower-contrast
             */
            EXCLUSION = 24,
            LAST = 25,
        }

        export namespace Coding {
            export const $gtype: GObject.GType<Coding>;
        }

        /**
         * How pixels are coded.
         *
         * Normally, pixels are uncoded and can be manipulated as you would expect.
         * However some file formats code pixels for compression, and sometimes it's
         * useful to be able to manipulate images in the coded format.
         *
         * The gaps in the numbering are historical and must be maintained. Allocate
         * new numbers from the end.
         */
        export enum Coding {
            ERROR = -1,
            /**
             * pixels are not coded
             */
            NONE = 0,
            /**
             * pixels encode 3 float CIELAB values as 4 uchar
             */
            LABQ = 2,
            /**
             * pixels encode 3 float RGB as 4 uchar (Radiance coding)
             */
            RAD = 6,
            LAST = 7,
        }

        export namespace Combine {
            export const $gtype: GObject.GType<Combine>;
        }

        /**
         * How to combine values. See vips_compass(), for example.
         */
        export enum Combine {
            /**
             * take the maximum of the possible values
             */
            MAX = 0,
            /**
             * sum all the values
             */
            SUM = 1,
            /**
             * take the minimum value
             */
            MIN = 2,
            LAST = 3,
        }

        export namespace CombineMode {
            export const $gtype: GObject.GType<CombineMode>;
        }

        /**
         * See vips_draw_image() and so on.
         *
         * Operations like vips_draw_image() need to be told how to combine images
         * from two sources.
         *
         * See also: vips_join().
         */
        export enum CombineMode {
            /**
             * set pixels to the new value
             */
            SET = 0,
            /**
             * add pixels
             */
            ADD = 1,
            LAST = 2,
        }

        export namespace CompassDirection {
            export const $gtype: GObject.GType<CompassDirection>;
        }

        /**
         * A direction on a compass. Used for vips_gravity(), for example.
         */
        export enum CompassDirection {
            /**
             * centre
             */
            CENTRE = 0,
            /**
             * north
             */
            NORTH = 1,
            /**
             * east
             */
            EAST = 2,
            /**
             * south
             */
            SOUTH = 3,
            /**
             * west
             */
            WEST = 4,
            /**
             * north-east
             */
            NORTH_EAST = 5,
            /**
             * south-east
             */
            SOUTH_EAST = 6,
            /**
             * south-west
             */
            SOUTH_WEST = 7,
            /**
             * north-west
             */
            NORTH_WEST = 8,
            LAST = 9,
        }

        export namespace DemandStyle {
            export const $gtype: GObject.GType<DemandStyle>;
        }

        /**
         * See vips_image_pipelinev(). Operations can hint to the VIPS image IO
         * system about the kind of demand geometry they prefer.
         *
         * These demand styles are given below in order of increasing
         * restrictiveness.  When demanding output from a pipeline,
         * vips_image_generate()
         * will use the most restrictive of the styles requested by the operations
         * in the pipeline.
         *
         * #VIPS_DEMAND_STYLE_THINSTRIP --- This operation would like to output strips
         * the width of the image and a few pels high. This is option suitable for
         * point-to-point operations, such as those in the arithmetic package.
         *
         * This option is only efficient for cases where each output pel depends
         * upon the pel in the corresponding position in the input image.
         *
         * #VIPS_DEMAND_STYLE_FATSTRIP --- This operation would like to output strips
         * the width of the image and as high as possible. This option is suitable
         * for area operations which do not violently transform coordinates, such
         * as vips_conv().
         *
         * #VIPS_DEMAND_STYLE_SMALLTILE --- This is the most general demand format.
         * Output is demanded in small (around 100x100 pel) sections. This style works
         * reasonably efficiently, even for bizzare operations like 45 degree rotate.
         *
         * #VIPS_DEMAND_STYLE_ANY --- This image is not being demand-read from a disc
         * file (even indirectly) so any demand style is OK. It's used for things like
         * vips_black() where the pixels are calculated.
         *
         * See also: vips_image_pipelinev().
         */
        export enum DemandStyle {
            ERROR = -1,
            /**
             * demand in small (typically 64x64 pixel) tiles
             */
            SMALLTILE = 0,
            /**
             * demand in fat (typically 10 pixel high) strips
             */
            FATSTRIP = 1,
            /**
             * demand in thin (typically 1 pixel high) strips
             */
            THINSTRIP = 2,
            /**
             * demand geometry does not matter
             */
            ANY = 3,
        }

        export namespace Direction {
            export const $gtype: GObject.GType<Direction>;
        }

        /**
         * See vips_flip(), vips_join() and so on.
         *
         * Operations like vips_flip() need to be told whether to flip left-right or
         * top-bottom.
         *
         * See also: vips_flip(), vips_join().
         */
        export enum Direction {
            /**
             * left-right
             */
            HORIZONTAL = 0,
            /**
             * top-bottom
             */
            VERTICAL = 1,
            LAST = 2,
        }

        export namespace Extend {
            export const $gtype: GObject.GType<Extend>;
        }

        /**
         * See vips_embed(), vips_conv(), vips_affine() and so on.
         *
         * When the edges of an image are extended, you can specify
         * how you want the extension done.
         *
         * #VIPS_EXTEND_BLACK --- new pixels are black, ie. all bits are zero.
         *
         * #VIPS_EXTEND_COPY --- each new pixel takes the value of the nearest edge
         * pixel
         *
         * #VIPS_EXTEND_REPEAT --- the image is tiled to fill the new area
         *
         * #VIPS_EXTEND_MIRROR --- the image is reflected and tiled to reduce hash
         * edges
         *
         * #VIPS_EXTEND_WHITE --- new pixels are white, ie. all bits are set
         *
         * #VIPS_EXTEND_BACKGROUND --- colour set from the `background `property
         *
         * We have to specify the exact value of each enum member since we have to
         * keep these frozen for back compat with vips7.
         *
         * See also: vips_embed().
         */
        export enum Extend {
            /**
             * extend with black (all 0) pixels
             */
            BLACK = 0,
            /**
             * copy the image edges
             */
            COPY = 1,
            /**
             * repeat the whole image
             */
            REPEAT = 2,
            /**
             * mirror the whole image
             */
            MIRROR = 3,
            /**
             * extend with white (all bits set) pixels
             */
            WHITE = 4,
            /**
             * extend with colour from the `background `property
             */
            BACKGROUND = 5,
            LAST = 6,
        }

        export namespace FailOn {
            export const $gtype: GObject.GType<FailOn>;
        }

        /**
         * How sensitive loaders are to errors, from never stop (very insensitive), to
         * stop on the smallest warning (very sensitive).
         *
         * Each one implies the ones before it, so #VIPS_FAIL_ON_ERROR implies
         * #VIPS_FAIL_ON_TRUNCATED.
         */
        export enum FailOn {
            /**
             * never stop
             */
            NONE = 0,
            /**
             * stop on image truncated, nothing else
             */
            TRUNCATED = 1,
            /**
             * stop on serious error or truncation
             */
            ERROR = 2,
            /**
             * stop on anything, even warnings
             */
            WARNING = 3,
            LAST = 4,
        }

        export namespace ForeignDzContainer {
            export const $gtype: GObject.GType<ForeignDzContainer>;
        }

        /**
         * How many pyramid layers to create.
         */
        export enum ForeignDzContainer {
            /**
             * write tiles to the filesystem
             */
            FS = 0,
            /**
             * write tiles to a zip file
             */
            ZIP = 1,
            /**
             * write to a szi file
             */
            SZI = 2,
            LAST = 3,
        }

        export namespace ForeignDzDepth {
            export const $gtype: GObject.GType<ForeignDzDepth>;
        }

        /**
         * How many pyramid layers to create.
         */
        export enum ForeignDzDepth {
            /**
             * create layers down to 1x1 pixel
             */
            ONEPIXEL = 0,
            /**
             * create layers down to 1x1 tile
             */
            ONETILE = 1,
            /**
             * only create a single layer
             */
            ONE = 2,
            LAST = 3,
        }

        export namespace ForeignDzLayout {
            export const $gtype: GObject.GType<ForeignDzLayout>;
        }

        /**
         * What directory layout and metadata standard to use.
         */
        export enum ForeignDzLayout {
            /**
             * use DeepZoom directory layout
             */
            DZ = 0,
            /**
             * use Zoomify directory layout
             */
            ZOOMIFY = 1,
            /**
             * use Google maps directory layout
             */
            GOOGLE = 2,
            /**
             * use IIIF v2 directory layout
             */
            IIIF = 3,
            /**
             * use IIIF v3 directory layout
             */
            IIIF3 = 4,
            LAST = 5,
        }

        export namespace ForeignHeifCompression {
            export const $gtype: GObject.GType<ForeignHeifCompression>;
        }

        /**
         * The compression format to use inside a HEIF container.
         *
         * This is assumed to use the same numbering as %heif_compression_format.
         */
        export enum ForeignHeifCompression {
            /**
             * x265
             */
            HEVC = 1,
            /**
             * x264
             */
            AVC = 2,
            /**
             * jpeg
             */
            JPEG = 3,
            /**
             * aom
             */
            AV1 = 4,
            LAST = 5,
        }

        export namespace ForeignHeifEncoder {
            export const $gtype: GObject.GType<ForeignHeifEncoder>;
        }

        /**
         * The selected encoder to use.
         * If libheif hasn't been compiled with the selected encoder,
         * we will fallback to the default encoder for the compression format.
         */
        export enum ForeignHeifEncoder {
            /**
             * auto
             */
            AUTO = 0,
            /**
             * aom
             */
            AOM = 1,
            /**
             * RAV1E
             */
            RAV1E = 2,
            /**
             * SVT-AV1
             */
            SVT = 3,
            /**
             * x265
             */
            X265 = 4,
            LAST = 5,
        }

        export namespace ForeignJpegSubsample {
            export const $gtype: GObject.GType<ForeignJpegSubsample>;
        }

        /**
         * Set jpeg subsampling mode.
         */
        export enum ForeignJpegSubsample {
            /**
             * default preset
             */
            AUTO = 0,
            /**
             * always perform subsampling
             */
            ON = 1,
            /**
             * never perform subsampling
             */
            OFF = 2,
            LAST = 3,
        }

        export namespace ForeignPpmFormat {
            export const $gtype: GObject.GType<ForeignPpmFormat>;
        }

        /**
         * The netpbm file format to save as.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PBM images are single bit.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PGM images are 8, 16, or 32-bits, one band.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PPM images are 8, 16, or 32-bits, three bands.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PFM images are 32-bit float pixels.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PNM images are anymap images -- the image format
         * is used to pick the saver.
         */
        export enum ForeignPpmFormat {
            /**
             * portable bitmap
             */
            PBM = 0,
            /**
             * portable greymap
             */
            PGM = 1,
            /**
             * portable pixmap
             */
            PPM = 2,
            /**
             * portable float map
             */
            PFM = 3,
            /**
             * portable anymap
             */
            PNM = 4,
            LAST = 5,
        }

        export namespace ForeignSubsample {
            export const $gtype: GObject.GType<ForeignSubsample>;
        }

        /**
         * Set subsampling mode.
         */
        export enum ForeignSubsample {
            /**
             * prevent subsampling when quality &gt;= 90
             */
            AUTO = 0,
            /**
             * always perform subsampling
             */
            ON = 1,
            /**
             * never perform subsampling
             */
            OFF = 2,
            LAST = 3,
        }

        export namespace ForeignTiffCompression {
            export const $gtype: GObject.GType<ForeignTiffCompression>;
        }

        /**
         * The compression types supported by the tiff writer.
         *
         * Use @Q to set the jpeg compression level, default 75.
         *
         * Use `predictor `to set the lzw or deflate prediction, default horizontal.
         *
         * Use `lossless `to set WEBP lossless compression.
         *
         * Use `level `to set webp and zstd compression level.
         */
        export enum ForeignTiffCompression {
            /**
             * no compression
             */
            NONE = 0,
            /**
             * jpeg compression
             */
            JPEG = 1,
            /**
             * deflate (zip) compression
             */
            DEFLATE = 2,
            /**
             * packbits compression
             */
            PACKBITS = 3,
            /**
             * fax4 compression
             */
            CCITTFAX4 = 4,
            /**
             * LZW compression
             */
            LZW = 5,
            /**
             * WEBP compression
             */
            WEBP = 6,
            /**
             * ZSTD compression
             */
            ZSTD = 7,
            /**
             * JP2K compression
             */
            JP2K = 8,
            LAST = 9,
        }

        export namespace ForeignTiffPredictor {
            export const $gtype: GObject.GType<ForeignTiffPredictor>;
        }

        /**
         * The predictor can help deflate and lzw compression. The values are fixed by
         * the tiff library.
         */
        export enum ForeignTiffPredictor {
            /**
             * no prediction
             */
            NONE = 1,
            /**
             * horizontal differencing
             */
            HORIZONTAL = 2,
            /**
             * float predictor
             */
            FLOAT = 3,
            LAST = 4,
        }

        export namespace ForeignTiffResunit {
            export const $gtype: GObject.GType<ForeignTiffResunit>;
        }

        /**
         * Use inches or centimeters as the resolution unit for a tiff file.
         */
        export enum ForeignTiffResunit {
            /**
             * use centimeters
             */
            CM = 0,
            /**
             * use inches
             */
            INCH = 1,
            LAST = 2,
        }

        export namespace ForeignWebpPreset {
            export const $gtype: GObject.GType<ForeignWebpPreset>;
        }

        /**
         * Tune lossy encoder settings for different image types.
         */
        export enum ForeignWebpPreset {
            /**
             * default preset
             */
            DEFAULT = 0,
            /**
             * digital picture, like portrait, inner shot
             */
            PICTURE = 1,
            /**
             * outdoor photograph, with natural lighting
             */
            PHOTO = 2,
            /**
             * hand or line drawing, with high-contrast details
             */
            DRAWING = 3,
            /**
             * small-sized colorful images
             */
            ICON = 4,
            /**
             * text-like
             */
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

        /**
         * The rendering intent. #VIPS_INTENT_ABSOLUTE is best for
         * scientific work, #VIPS_INTENT_RELATIVE is usually best for
         * accurate communication with other imaging libraries.
         */
        export enum Intent {
            /**
             * perceptual rendering intent
             */
            PERCEPTUAL = 0,
            /**
             * relative colorimetric rendering intent
             */
            RELATIVE = 1,
            /**
             * saturation rendering intent
             */
            SATURATION = 2,
            /**
             * absolute colorimetric rendering intent
             */
            ABSOLUTE = 3,
            LAST = 4,
        }

        export namespace Interesting {
            export const $gtype: GObject.GType<Interesting>;
        }

        /**
         * Pick the algorithm vips uses to decide image "interestingness". This is used
         * by vips_smartcrop(), for example, to decide what parts of the image to
         * keep.
         *
         * #VIPS_INTERESTING_NONE and #VIPS_INTERESTING_LOW mean the same -- the
         * crop is positioned at the top or left. #VIPS_INTERESTING_HIGH positions at
         * the bottom or right.
         *
         * See also: vips_smartcrop().
         */
        export enum Interesting {
            /**
             * do nothing
             */
            NONE = 0,
            /**
             * just take the centre
             */
            CENTRE = 1,
            /**
             * use an entropy measure
             */
            ENTROPY = 2,
            /**
             * look for features likely to draw human attention
             */
            ATTENTION = 3,
            /**
             * position the crop towards the low coordinate
             */
            LOW = 4,
            /**
             * position the crop towards the high coordinate
             */
            HIGH = 5,
            /**
             * everything is interesting
             */
            ALL = 6,
            LAST = 7,
        }

        export namespace Interpretation {
            export const $gtype: GObject.GType<Interpretation>;
        }

        /**
         * How the values in an image should be interpreted. For example, a
         * three-band float image of type #VIPS_INTERPRETATION_LAB should have its
         * pixels interpreted as coordinates in CIE Lab space.
         *
         * RGB and sRGB are treated in the same way. Use the colourspace functions if
         * you want some other behaviour.
         *
         * The gaps in numbering are historical and must be maintained. Allocate
         * new numbers from the end.
         */
        export enum Interpretation {
            ERROR = -1,
            /**
             * generic many-band image
             */
            MULTIBAND = 0,
            /**
             * some kind of single-band image
             */
            B_W = 1,
            /**
             * a 1D image, eg. histogram or lookup table
             */
            HISTOGRAM = 10,
            /**
             * the first three bands are CIE XYZ
             */
            XYZ = 12,
            /**
             * pixels are in CIE Lab space
             */
            LAB = 13,
            /**
             * the first four bands are in CMYK space
             */
            CMYK = 15,
            /**
             * implies #VIPS_CODING_LABQ
             */
            LABQ = 16,
            /**
             * generic RGB space
             */
            RGB = 17,
            /**
             * a uniform colourspace based on CMC(1:1)
             */
            CMC = 18,
            /**
             * pixels are in CIE LCh space
             */
            LCH = 19,
            /**
             * CIE LAB coded as three signed 16-bit values
             */
            LABS = 21,
            /**
             * pixels are sRGB
             */
            SRGB = 22,
            /**
             * pixels are CIE Yxy
             */
            YXY = 23,
            /**
             * image is in fourier space
             */
            FOURIER = 24,
            /**
             * generic 16-bit RGB
             */
            RGB16 = 25,
            /**
             * generic 16-bit mono
             */
            GREY16 = 26,
            /**
             * a matrix
             */
            MATRIX = 27,
            /**
             * pixels are scRGB
             */
            SCRGB = 28,
            /**
             * pixels are HSV
             */
            HSV = 29,
            LAST = 30,
        }

        export namespace Kernel {
            export const $gtype: GObject.GType<Kernel>;
        }

        /**
         * The resampling kernels vips supports. See vips_reduce(), for example.
         */
        export enum Kernel {
            /**
             * The nearest pixel to the point.
             */
            NEAREST = 0,
            /**
             * Convolve with a triangle filter.
             */
            LINEAR = 1,
            /**
             * Convolve with a cubic filter.
             */
            CUBIC = 2,
            /**
             * Convolve with a Mitchell kernel.
             */
            MITCHELL = 3,
            /**
             * Convolve with a two-lobe Lanczos kernel.
             */
            LANCZOS2 = 4,
            /**
             * Convolve with a three-lobe Lanczos kernel.
             */
            LANCZOS3 = 5,
            LAST = 6,
        }

        export namespace OperationBoolean {
            export const $gtype: GObject.GType<OperationBoolean>;
        }

        /**
         * See also: vips_boolean().
         */
        export enum OperationBoolean {
            /**
             * &amp;
             */
            AND = 0,
            /**
             * |
             */
            OR = 1,
            /**
             * ^
             */
            EOR = 2,
            /**
             * &gt;&gt;
             */
            LSHIFT = 3,
            /**
             * &lt;&lt;
             */
            RSHIFT = 4,
            LAST = 5,
        }

        export namespace OperationComplex {
            export const $gtype: GObject.GType<OperationComplex>;
        }

        /**
         * See also: vips_complex().
         */
        export enum OperationComplex {
            /**
             * convert to polar coordinates
             */
            POLAR = 0,
            /**
             * convert to rectangular coordinates
             */
            RECT = 1,
            /**
             * complex conjugate
             */
            CONJ = 2,
            LAST = 3,
        }

        export namespace OperationComplex2 {
            export const $gtype: GObject.GType<OperationComplex2>;
        }

        /**
         * See also: vips_complex2().
         */
        export enum OperationComplex2 {
            /**
             * convert to polar coordinates
             */
            CROSS_PHASE = 0,
            LAST = 1,
        }

        export namespace OperationComplexget {
            export const $gtype: GObject.GType<OperationComplexget>;
        }

        /**
         * See also: vips_complexget().
         */
        export enum OperationComplexget {
            /**
             * get real component
             */
            REAL = 0,
            /**
             * get imaginary component
             */
            IMAG = 1,
            LAST = 2,
        }

        export namespace OperationMath {
            export const $gtype: GObject.GType<OperationMath>;
        }

        /**
         * See also: vips_math().
         */
        export enum OperationMath {
            /**
             * sin(), angles in degrees
             */
            SIN = 0,
            /**
             * cos(), angles in degrees
             */
            COS = 1,
            /**
             * tan(), angles in degrees
             */
            TAN = 2,
            /**
             * asin(), angles in degrees
             */
            ASIN = 3,
            /**
             * acos(), angles in degrees
             */
            ACOS = 4,
            /**
             * atan(), angles in degrees
             */
            ATAN = 5,
            /**
             * log base e
             */
            LOG = 6,
            /**
             * log base 10
             */
            LOG10 = 7,
            /**
             * e to the something
             */
            EXP = 8,
            /**
             * 10 to the something
             */
            EXP10 = 9,
            /**
             * sinh(), angles in radians
             */
            SINH = 10,
            /**
             * cosh(), angles in radians
             */
            COSH = 11,
            /**
             * tanh(), angles in radians
             */
            TANH = 12,
            /**
             * asinh(), angles in radians
             */
            ASINH = 13,
            /**
             * acosh(), angles in radians
             */
            ACOSH = 14,
            /**
             * atanh(), angles in radians
             */
            ATANH = 15,
            LAST = 16,
        }

        export namespace OperationMath2 {
            export const $gtype: GObject.GType<OperationMath2>;
        }

        /**
         * See also: vips_math().
         */
        export enum OperationMath2 {
            /**
             * pow( left, right )
             */
            POW = 0,
            /**
             * pow( right, left )
             */
            WOP = 1,
            /**
             * atan2( left, right )
             */
            ATAN2 = 2,
            LAST = 3,
        }

        export namespace OperationMorphology {
            export const $gtype: GObject.GType<OperationMorphology>;
        }

        /**
         * More like hit-miss, really.
         *
         * See also: vips_morph().
         */
        export enum OperationMorphology {
            /**
             * true if all set
             */
            ERODE = 0,
            /**
             * true if one set
             */
            DILATE = 1,
            LAST = 2,
        }

        export namespace OperationRelational {
            export const $gtype: GObject.GType<OperationRelational>;
        }

        /**
         * See also: vips_relational().
         */
        export enum OperationRelational {
            /**
             * ==
             */
            EQUAL = 0,
            /**
             * !=
             */
            NOTEQ = 1,
            /**
             * &lt;
             */
            LESS = 2,
            /**
             * &lt;=
             */
            LESSEQ = 3,
            /**
             * &gt;
             */
            MORE = 4,
            /**
             * &gt;=
             */
            MOREEQ = 5,
            LAST = 6,
        }

        export namespace OperationRound {
            export const $gtype: GObject.GType<OperationRound>;
        }

        /**
         * See also: vips_round().
         */
        export enum OperationRound {
            /**
             * round to nearest
             */
            RINT = 0,
            /**
             * the smallest integral value not less than
             */
            CEIL = 1,
            /**
             * largest integral value not greater than
             */
            FLOOR = 2,
            LAST = 3,
        }

        export namespace PCS {
            export const $gtype: GObject.GType<PCS>;
        }

        /**
         * Pick a Profile Connection Space for vips_icc_import() and
         * vips_icc_export(). LAB is usually best, XYZ can be more convenient in some
         * cases.
         */
        export enum PCS {
            /**
             * use CIELAB D65 as the Profile Connection Space
             */
            LAB = 0,
            /**
             * use XYZ as the Profile Connection Space
             */
            XYZ = 1,
            LAST = 2,
        }

        export namespace Precision {
            export const $gtype: GObject.GType<Precision>;
        }

        /**
         * How accurate an operation should be.
         */
        export enum Precision {
            /**
             * int everywhere
             */
            INTEGER = 0,
            /**
             * float everywhere
             */
            FLOAT = 1,
            /**
             * approximate integer output
             */
            APPROXIMATE = 2,
            LAST = 3,
        }

        export namespace RegionShrink {
            export const $gtype: GObject.GType<RegionShrink>;
        }

        /**
         * How to calculate the output pixels when shrinking a 2x2 region.
         */
        export enum RegionShrink {
            /**
             * use the average
             */
            MEAN = 0,
            /**
             * use the median
             */
            MEDIAN = 1,
            /**
             * use the mode
             */
            MODE = 2,
            /**
             * use the maximum
             */
            MAX = 3,
            /**
             * use the minimum
             */
            MIN = 4,
            /**
             * use the top-left pixel
             */
            NEAREST = 5,
            LAST = 6,
        }

        export namespace Saveable {
            export const $gtype: GObject.GType<Saveable>;
        }

        /**
         * See also: #VipsForeignSave.
         */
        export enum Saveable {
            /**
             * 1 band (eg. CSV)
             */
            MONO = 0,
            /**
             * 1 or 3 bands (eg. PPM)
             */
            RGB = 1,
            /**
             * 1, 2, 3 or 4 bands (eg. PNG)
             */
            RGBA = 2,
            /**
             * 3 or 4 bands (eg. WEBP)
             */
            RGBA_ONLY = 3,
            /**
             * 1, 3 or 4 bands (eg. JPEG)
             */
            RGB_CMYK = 4,
            /**
             * any number of bands (eg. TIFF)
             */
            ANY = 5,
            LAST = 6,
        }

        export namespace Size {
            export const $gtype: GObject.GType<Size>;
        }

        /**
         * Controls whether an operation should upsize, downsize, both up and
         * downsize, or force a size.
         *
         * See also: vips_thumbnail().
         */
        export enum Size {
            /**
             * size both up and down
             */
            BOTH = 0,
            /**
             * only upsize
             */
            UP = 1,
            /**
             * only downsize
             */
            DOWN = 2,
            /**
             * force size, that is, break aspect ratio
             */
            FORCE = 3,
            LAST = 4,
        }

        export namespace TextWrap {
            export const $gtype: GObject.GType<TextWrap>;
        }

        /**
         * Sets the word wrapping style for vips_text() when used with a maximum
         * width.
         *
         * See also: vips_text().
         */
        export enum TextWrap {
            /**
             * wrap at word boundaries
             */
            WORD = 0,
            /**
             * wrap at character boundaries
             */
            CHAR = 1,
            /**
             * wrap at word boundaries, but fall back to character boundaries if there is not enough space for a full word
             */
            WORD_CHAR = 2,
            /**
             * no wrapping
             */
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
        export const ARGUMENT_OPTIONAL_INPUT: number;
        export const ARGUMENT_OPTIONAL_OUTPUT: number;
        export const ARGUMENT_REQUIRED_INPUT: number;
        export const ARGUMENT_REQUIRED_OUTPUT: number;
        /**
         * Areas under curves for illuminant A (2856K), 2 degree observer.
         */
        export const A_X0: number;
        export const A_Y0: number;
        export const A_Z0: number;
        /**
         * Areas under curves for illuminant B (4874K), 2 degree observer.
         */
        export const B_X0: number;
        export const B_Y0: number;
        export const B_Z0: number;
        export const CONFIG: string;
        /**
         * Areas under curves for illuminant C (6774K), 2 degree observer.
         */
        export const C_X0: number;
        export const C_Y0: number;
        export const C_Z0: number;
        /**
         * Areas under curves for black body at 3250K, 2 degree observer.
         */
        export const D3250_X0: number;
        export const D3250_Y0: number;
        export const D3250_Z0: number;
        /**
         * Areas under curves for D50, 2 degree observer.
         */
        export const D50_X0: number;
        export const D50_Y0: number;
        export const D50_Z0: number;
        /**
         * Areas under curves for D55, 2 degree observer.
         */
        export const D55_X0: number;
        export const D55_Y0: number;
        export const D55_Z0: number;
        /**
         * Areas under curves for D65, 2 degree observer.
         */
        export const D65_X0: number;
        export const D65_Y0: number;
        export const D65_Z0: number;
        /**
         * Areas under curves for D75, 2 degree observer.
         */
        export const D75_X0: number;
        export const D75_Y0: number;
        export const D75_Z0: number;
        /**
         * Areas under curves for D93, 2 degree observer.
         */
        export const D93_X0: number;
        export const D93_Y0: number;
        export const D93_Z0: number;
        export const ENABLE_DEPRECATED: number;
        /**
         * Areas under curves for equal energy illuminant E.
         */
        export const E_X0: number;
        export const E_Y0: number;
        export const E_Z0: number;
        /**
         * #VIPS_INTERPOLATE_SHIFT as a multiplicative constant.
         */
        export const INTERPOLATE_SCALE: number;
        /**
         * Many of the vips interpolators use fixed-point arithmetic for value
         * calcualtion. This is how many bits of precision they use.
         */
        export const INTERPOLATE_SHIFT: number;
        export const LIBRARY_AGE: number;
        export const LIBRARY_CURRENT: number;
        export const LIBRARY_REVISION: number;
        /**
         * The first four bytes of a VIPS file in Intel byte ordering.
         */
        export const MAGIC_INTEL: number;
        /**
         * The first four bytes of a VIPS file in SPARC byte ordering.
         */
        export const MAGIC_SPARC: number;
        export const MAJOR_VERSION: number;
        export const MAX_COORD: number;
        /**
         * If set, the suggested concurrency for this image.
         */
        export const META_CONCURRENCY: string;
        /**
         * The name that JPEG read and write operations use for the image's EXIF data.
         */
        export const META_EXIF_NAME: string;
        /**
         * The name we use to attach an ICC profile. The file read and write
         * operations for TIFF, JPEG, PNG and others use this item of metadata to
         * attach and save ICC profiles. The profile is updated by the
         * vips_icc_transform() operations.
         */
        export const META_ICC_NAME: string;
        /**
         * The IMAGEDESCRIPTION tag. Often has useful metadata.
         */
        export const META_IMAGEDESCRIPTION: string;
        /**
         * The name that read and write operations use for the image's IPTC data.
         */
        export const META_IPTC_NAME: string;
        /**
         * Record the name of the original loader here. Handy for hinting file formats
         * and for debugging.
         */
        export const META_LOADER: string;
        /**
         * If set, the number of pages in the original file.
         */
        export const META_N_PAGES: string;
        /**
         * If set, the number of subifds in the first page of the file.
         */
        export const META_N_SUBIFDS: string;
        /**
         * The orientation tag for this image. An int from 1 - 8 using the standard
         * exif/tiff meanings.
         *
         * * 1 - The 0th row represents the visual top of the image, and the 0th column
         * represents the visual left-hand side.
         * * 2 - The 0th row represents the visual top of the image, and the 0th column
         * represents the visual right-hand side.
         * * 3 - The 0th row represents the visual bottom of the image, and the 0th
         * column represents the visual right-hand side.
         * * 4 - The 0th row represents the visual bottom of the image, and the 0th
         * column represents the visual left-hand side.
         * * 5 - The 0th row represents the visual left-hand side of the image, and the
         * 0th column represents the visual top.
         * * 6 - The 0th row represents the visual right-hand side of the image, and the
         * 0th column represents the visual top.
         * * 7 - The 0th row represents the visual right-hand side of the image, and the
         * 0th column represents the visual bottom.
         * * 8 - The 0th row represents the visual left-hand side of the image, and the
         * 0th column represents the visual bottom.
         */
        export const META_ORIENTATION: string;
        /**
         * If set, the height of each page when this image was loaded. If you save an
         * image with "page-height" set to a format that supports multiple pages, such
         * as tiff, the image will be saved as a series of pages.
         */
        export const META_PAGE_HEIGHT: string;
        /**
         * The name that TIFF read and write operations use for the image's
         * TIFFTAG_PHOTOSHOP data.
         */
        export const META_PHOTOSHOP_NAME: string;
        /**
         * The JPEG and TIFF read and write operations use this to record the
         * file's preferred unit for resolution.
         */
        export const META_RESOLUTION_UNIT: string;
        /**
         * Images loaded via vips_sequential() have this int field defined. Some
         * operations (eg. vips_shrinkv()) add extra caches if they see it on their
         * input.
         */
        export const META_SEQUENTIAL: string;
        /**
         * The name that read and write operations use for the image's XMP data.
         */
        export const META_XMP_NAME: string;
        export const MICRO_VERSION: number;
        export const MINOR_VERSION: number;
        /**
         * #VIPS_TRANSFORM_SHIFT as a multiplicative constant.
         */
        export const TRANSFORM_SCALE: number;
        /**
         * Many of the vips interpolators use fixed-point arithmetic for coordinate
         * calculation. This is how many bits of precision they use.
         */
        export const TRANSFORM_SHIFT: number;
        export const VERSION: string;
        export const VERSION_STRING: string;
        export function _object_set_member(
            object: Object,
            pspec: GObject.ParamSpec,
            member: GObject.Object,
            argument: GObject.Object
        ): void;
        /**
         * Add the standard vips %GOptionEntry to a %GOptionGroup.
         *
         * See also: g_option_group_new().
         */
        export function add_option_entries(option_group: GLib.OptionGroup): void;
        export function area_free_cb(mem: any | null, area: Area): number;
        /**
         * Return %TRUE if `format `is uchar or schar.
         */
        export function band_format_is8bit(format: BandFormat): boolean;
        /**
         * Return %TRUE if `fmt `is one of the complex types.
         */
        export function band_format_iscomplex(format: BandFormat): boolean;
        /**
         * Return %TRUE if `format `is one of the float types.
         */
        export function band_format_isfloat(format: BandFormat): boolean;
        /**
         * Return %TRUE if `format `is one of the integer types.
         */
        export function band_format_isint(format: BandFormat): boolean;
        /**
         * Return %TRUE if `format `is one of the unsigned integer types.
         */
        export function band_format_isuint(format: BandFormat): boolean;
        /**
         * Like vips_blob_new(), but take a copy of the data. Useful for bindings
         * which struggle with callbacks.
         *
         * See also: vips_blob_new().
         */
        export function blob_copy(data: Uint8Array | string): Blob;
        /**
         * Set the block state on all untrusted operations.
         *
         * |[
         * vips_block_untrusted_set( TRUE );
         * ]|
         *
         * Will block all untrusted operations from running.
         *
         * Use `vips -l` at the command-line to see the class hierarchy and which
         * operations are marked as untrusted.
         *
         * Set the environment variable `VIPS_BLOCK_UNTRUSTED` to block all untrusted
         * operations on vips_init().
         */
        export function block_untrusted_set(state: boolean): void;
        /**
         * Drop the whole operation cache, handy for leak tracking. Also called
         * automatically on vips_shutdown().
         */
        export function cache_drop_all(): void;
        /**
         * Get the maximum number of operations we keep in cache.
         */
        export function cache_get_max(): number;
        /**
         * Get the maximum number of tracked files we allow before we start dropping
         * cached operations. See vips_tracked_get_files().
         *
         * libvips only tracks file descriptors it allocates, it can't track ones
         * allocated by external libraries. If you use an operation like
         * vips_magickload(), most of the descriptors it uses won't be included.
         *
         * See also: vips_tracked_get_files().
         */
        export function cache_get_max_files(): number;
        /**
         * Get the maximum amount of tracked memory we allow before we start dropping
         * cached operations. See vips_tracked_get_mem().
         *
         * See also: vips_tracked_get_mem().
         */
        export function cache_get_max_mem(): number;
        /**
         * Get the current number of operations in cache.
         */
        export function cache_get_size(): number;
        /**
         * Add a built operation to the cache. The cache will ref the operation.
         */
        export function cache_operation_add(operation: Operation): void;
        /**
         * A binding-friendly version of vips_cache_operation_buildp().
         *
         * After calling this, `operation `has the same ref count as when it went in,
         * and the result must be freed with vips_object_unref_outputs() and
         * g_object_unref().
         */
        export function cache_operation_build(operation: Operation): Operation;
        /**
         * Look up an unbuilt `operation `in the cache. If we get a hit, ref and
         * return the old operation. If there's no hit, return NULL.
         */
        export function cache_operation_lookup(operation: Operation): Operation;
        /**
         * Print the whole operation cache to stdout. Handy for debugging.
         */
        export function cache_print(): void;
        /**
         * Handy for debugging. Print the operation cache to stdout just before exit.
         *
         * See also: vips_cache_set_trace().
         */
        export function cache_set_dump(dump: boolean): void;
        /**
         * Set the maximum number of operations we keep in cache.
         */
        export function cache_set_max(max: number): void;
        /**
         * Set the maximum number of tracked files we allow before we start dropping
         * cached operations. See vips_tracked_get_files().
         *
         * See also: vips_tracked_get_files().
         */
        export function cache_set_max_files(max_files: number): void;
        /**
         * Set the maximum amount of tracked memory we allow before we start dropping
         * cached operations. See vips_tracked_get_mem().
         *
         * libvips only tracks memory it allocates, it can't track memory allocated by
         * external libraries. If you use an operation like vips_magickload(), most of
         * the memory it uses won't be included.
         *
         * See also: vips_tracked_get_mem().
         */
        export function cache_set_max_mem(max_mem: number): void;
        /**
         * Handy for debugging. Print operation cache actions to stdout as we run.
         *
         * You can set the environment variable `VIPS_TRACE` to turn this option on, or
         * use the command-line flag `--vips-cache-trace`.
         *
         * See also: vips_cache_set_dump().
         */
        export function cache_set_trace(trace: boolean): void;
        export function call_argv(operation: Operation, argc: number, argv: string): number;
        export function call_options(group: GLib.OptionGroup, operation: Operation): void;
        /**
         * Check that the image is 8 or 16-bit integer, signed or unsigned.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_8or16(domain: string, im: Image): number;
        /**
         * `bandno `should be a valid band number (ie. 0 to im-&gt;Bands - 1), or can be
         * -1, meaning all bands.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_bandno(domain: string, im: Image, bandno: number): number;
        /**
         * Check that the image has `bands `bands.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_bands(domain: string, im: Image, bands: number): number;
        /**
         * Check that the image has either one or three bands.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_bands_1or3(domain: string, im: Image): number;
        /**
         * Check that the images have the same number of bands, or that one of the
         * images has just 1 band.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_bands_1orn(domain: string, im1: Image, im2: Image): number;
        /**
         * Check that an image has 1 or `n `bands. Handy for unary operations, cf.
         * vips_check_bands_1orn().
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_check_bands_1orn().
         */
        export function check_bands_1orn_unary(domain: string, im: Image, n: number): number;
        /**
         * Check that the image has at least `bands `bands.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_bands_atleast(domain: string, im: Image, bands: number): number;
        /**
         * Check that the images have the same number of bands.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_bands_same(domain: string, im1: Image, im2: Image): number;
        /**
         * Check that the image has the required `coding.`
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_coding(domain: string, im: Image, coding: Coding): number;
        /**
         * Check that the image is uncoded, LABQ coded or RAD coded.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_coding_known(domain: string, im: Image): number;
        /**
         * Check that the image is uncoded or LABQ coded.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_coding_noneorlabq(domain: string, im: Image): number;
        /**
         * Check that the images have the same coding.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_coding_same(domain: string, im1: Image, im2: Image): number;
        /**
         * Check that the image is complex.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_complex(domain: string, im: Image): number;
        /**
         * Check that the image has the specified format.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_format(domain: string, im: Image, fmt: BandFormat): number;
        /**
         * Check that the images have the same format.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_format_same(domain: string, im1: Image, im2: Image): number;
        /**
         * Histogram images must have width or height 1, and must not have more than
         * 65536 elements. Return 0 if the image will pass as a histogram, or -1 and
         * set an error message otherwise.
         *
         * See also: vips_error().
         */
        export function check_hist(domain: string, im: Image): number;
        /**
         * Check that the image is in one of the integer formats.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_int(domain: string, im: Image): number;
        /**
         * Matrix images must have width and height less than 100000 and have 1 band.
         *
         * Return 0 if the image will pass as a matrix, or -1 and set an error
         * message otherwise.
         *
         * `out `is set to be `im `cast to double and stored in memory. Use
         * VIPS_MATRIX() to address values in `out.`
         *
         * You must unref `out `when you are done with it.
         *
         * See also: VIPS_MATRIX(), vips_object_local()
         */
        export function check_matrix(domain: string, im: Image): [number, Image];
        /**
         * Check that the image has exactly one band.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_mono(domain: string, im: Image): number;
        /**
         * Check that the image is not complex.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_noncomplex(domain: string, im: Image): number;
        /**
         * Check that the image is square and that the sides are odd.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_oddsquare(domain: string, im: Image): number;
        /**
         * Check that `prec `image is either float or int.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_precision_intfloat(domain: string, precision: Precision): number;
        /**
         * Separable matrix images must have width or height 1.
         * Return 0 if the image will pass, or -1 and
         * set an error message otherwise.
         *
         * See also: vips_error().
         */
        export function check_separable(domain: string, im: Image): number;
        /**
         * Check that the images have the same size.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_size_same(domain: string, im1: Image, im2: Image): number;
        /**
         * Check that the image is has two "components", ie. is a one-band complex or
         * a two-band non-complex.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_twocomponents(domain: string, im: Image): number;
        /**
         * Check that the image is 8 or 16-bit unsigned integer.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_u8or16(domain: string, im: Image): number;
        /**
         * Check that the image is 8 or 16-bit unsigned integer, or float.
         * Otherwise set an error message and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_u8or16orf(domain: string, im: Image): number;
        /**
         * Check that the image is in one of the unsigned integer formats.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_uint(domain: string, im: Image): number;
        /**
         * Check that the image is unsigned int or float.
         * Otherwise set an error message and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_uintorf(domain: string, im: Image): number;
        /**
         * Check that the image is not coded.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         */
        export function check_uncoded(domain: string, im: Image): number;
        /**
         * Operations with a vector constant need a 1-element vector, or a vector with
         * the same number of elements as there are bands in the image, or a 1-band
         * image and a many-element vector.
         *
         * See also: vips_error().
         */
        export function check_vector(domain: string, n: number, im: Image): number;
        /**
         * Check that `n `== `len.`
         *
         * See also: vips_error().
         */
        export function check_vector_length(domain: string, n: number, len: number): number;
        /**
         * Search below basename, return the first class whose name or nickname
         * matches.
         *
         * See also: vips_type_find()
         */
        export function class_find(basename: string, nickname: string): Object;
        /**
         * Calculate Ccmc from C.
         */
        export function col_C2Ccmc(C: number): number;
        /**
         * Calculate C from Ccmc using a table.
         * Call vips_col_make_tables_CMC() at
         * least once before using this function.
         */
        export function col_Ccmc2C(Ccmc: number): number;
        /**
         * Calculate ab from Ch, h in degrees.
         */
        export function col_Ch2ab(C: number, h: number, a: number, b: number): void;
        /**
         * Calculate hcmc from C and h.
         */
        export function col_Ch2hcmc(C: number, h: number): number;
        /**
         * Calculate h from C and hcmc, using a table.
         * Call vips_col_make_tables_CMC() at
         * least once before using this function.
         */
        export function col_Chcmc2h(C: number, hcmc: number): number;
        /**
         * Calculate Lcmc from L.
         */
        export function col_L2Lcmc(L: number): number;
        /**
         * Calculate XYZ from Lab, D65.
         *
         * See also: vips_Lab2XYZ().
         */
        export function col_Lab2XYZ(L: number, a: number, b: number): [number, number, number];
        /**
         * Calculate L from Lcmc using a table. Call vips_col_make_tables_CMC() at
         * least once before using this function.
         */
        export function col_Lcmc2L(Lcmc: number): number;
        /**
         * Calculate XYZ from Lab, D65.
         *
         * See also: vips_XYZ2Lab().
         */
        export function col_XYZ2Lab(X: number, Y: number, Z: number): [number, number, number];
        /**
         * Turn XYZ into scRGB.
         *
         * See also: vips_XYZ2scRGB().
         */
        export function col_XYZ2scRGB(X: number, Y: number, Z: number): [number, number, number, number];
        export function col_ab2Ch(a: number, b: number, C: number, h: number): void;
        export function col_ab2h(a: number, b: number): number;
        /**
         * CIEDE2000, from:
         *
         * Luo, Cui, Rigg, "The Development of the CIE 2000 Colour-Difference
         * Formula: CIEDE2000", COLOR research and application, pp 340
         */
        export function col_dE00(L1: number, a1: number, b1: number, L2: number, a2: number, b2: number): number;
        /**
         * Make the lookup tables for cmc.
         */
        export function col_make_tables_CMC(): void;
        export function col_sRGB2scRGB_16(r: number, g: number, b: number, R: number, G: number, B: number): number;
        export function col_sRGB2scRGB_16_noclip(
            r: number,
            g: number,
            b: number,
            R: number,
            G: number,
            B: number
        ): number;
        export function col_sRGB2scRGB_8(r: number, g: number, b: number, R: number, G: number, B: number): number;
        export function col_sRGB2scRGB_8_noclip(
            r: number,
            g: number,
            b: number,
            R: number,
            G: number,
            B: number
        ): number;
        export function col_scRGB2BW_16(R: number, G: number, B: number, g: number, og: number): number;
        export function col_scRGB2BW_8(R: number, G: number, B: number, g: number, og: number): number;
        /**
         * Turn scRGB into XYZ.
         *
         * See also: vips_scRGB2XYZ().
         */
        export function col_scRGB2XYZ(R: number, G: number, B: number): [number, number, number, number];
        export function col_scRGB2sRGB_16(
            R: number,
            G: number,
            B: number,
            r: number,
            g: number,
            b: number,
            og: number
        ): number;
        export function col_scRGB2sRGB_8(
            R: number,
            G: number,
            B: number,
            r: number,
            g: number,
            b: number,
            og: number
        ): number;
        /**
         * Returns the number of worker threads that vips should use when running a
         * #VipsThreadPool.
         *
         * vips gets this values from these sources in turn:
         *
         * If vips_concurrency_set() has been called, this value is used. The special
         * value 0 means "default". You can also use the command-line argument
         * "--vips-concurrency" to set this value.
         *
         * If vips_concurrency_set() has not been called and no command-line argument
         * was used, vips uses the value of the environment variable VIPS_CONCURRENCY,
         *
         * If VIPS_CONCURRENCY has not been set, vips finds the number of hardware
         * threads that the host machine can run in parallel and uses that value.
         *
         * The final value is clipped to the range 1 - 1024.
         *
         * See also: vips_concurrency_get().
         */
        export function concurrency_get(): number;
        /**
         * Sets the number of worker threads that vips should use when running a
         * #VipsThreadPool.
         *
         * The special value 0 means "default". In this case, the number of threads
         * is set by the environment variable VIPS_CONCURRENCY, or if that is not
         * set, the number of threads available on the host machine.
         *
         * See also: vips_concurrency_get().
         */
        export function concurrency_set(concurrency: number): void;
        /**
         * Get a pointer to the start of the error buffer as a C string.
         * The string is owned by the error system and must not be freed.
         *
         * See also: vips_error_clear().
         */
        export function error_buffer(): string;
        /**
         * Return a copy of the vips error buffer, and clear it.
         */
        export function error_buffer_copy(): string;
        /**
         * Clear and reset the error buffer. This is typically called after presenting
         * an error to the user.
         *
         * See also: vips_error_buffer().
         */
        export function error_clear(): void;
        /**
         * Stop errors being logged. Use vips_error_thaw() to unfreeze. You can
         * nest freeze/thaw pairs.
         */
        export function error_freeze(): void;
        /**
         * This function sets the glib error pointer from the vips error buffer and
         * clears it. It's handy for returning errors to glib functions from vips.
         *
         * See vips_g_error() for the inverse operation.
         *
         * See also: g_set_error(), vips_g_error().
         */
        export function error_g(): void;
        /**
         * Reenable error logging.
         */
        export function error_thaw(): void;
        /**
         * Given a vips filename like "fred.jpg[Q=90]", return a new string of
         * just the filename part, "fred.jpg" in this case.
         *
         * Useful for language bindings.
         *
         * See also: vips_filename_get_options().
         */
        export function filename_get_filename(vips_filename: string): string;
        /**
         * Given a vips filename like "fred.jpg[Q=90]", return a new string of
         * just the options part, "[Q=90]" in this case.
         *
         * Useful for language bindings.
         *
         * See also: vips_filename_get_filename().
         */
        export function filename_get_options(vips_filename: string): string;
        /**
         * Return the flags for `filename `using `loader.`
         * `loader `is something like "tiffload" or "VipsForeignLoadTiff".
         */
        export function foreign_flags(loader: string, filename: string): ForeignFlags;
        export function format_sizeof(format: BandFormat): number;
        /**
         * This function adds the %GError to the vips error buffer and clears it. It's
         * the opposite of vips_error_g().
         *
         * See also: vips_error_g().
         */
        export function g_error(): void;
        /**
         * See also: VIPS_INIT().
         */
        export function get_argv0(): string;
        /**
         * Return the number of bytes at which we flip between open via memory and
         * open via disc. This defaults to 100mb, but can be changed with the
         * VIPS_DISC_THRESHOLD environment variable or the --vips-disc-threshold
         * command-line flag. See vips_image_new_from_file().
         */
        export function get_disc_threshold(): number;
        /**
         * Return the program name. This can be useful for the user tio see,.
         *
         * See also: VIPS_INIT().
         */
        export function get_prgname(): string;
        /**
         * vips_guess_libdir() tries to guess the install directory (usually the
         * configure libdir, or $prefix/lib). You should pass
         * in the value of argv[0] (the name your program was run as) as a clue to
         * help it out, plus the name of the environment variable you let the user
         * override your package install area with (eg. "VIPSHOME").
         *
         * On success, vips_guess_libdir() returns the libdir it discovered, and as a
         * side effect, sets the prefix environment variable (if it's not set).
         *
         * Don't free the return string!
         *
         * See also: vips_guess_prefix().
         */
        export function guess_libdir(argv0: string, env_name: string): string;
        /**
         * vips_guess_prefix() tries to guess the install directory. You should pass
         * in the value of argv[0] (the name your program was run as) as a clue to
         * help it out, plus the name of the environment variable you let the user
         * override your package install area with (eg. "VIPSHOME").
         *
         * On success, vips_guess_prefix() returns the prefix it discovered, and as a
         * side effect, sets the environment variable (if it's not set).
         *
         * Don't free the return string!
         *
         * See also: vips_guess_libdir().
         */
        export function guess_prefix(argv0: string, env_name: string): string;
        export function icc_is_compatible_profile(image: Image, data: any | null, data_length: number): boolean;
        /**
         * VIPS can optionally be built without the ICC library. Use this function to
         * test for its availability.
         */
        export function icc_present(): number;
        /**
         * This function starts up libvips, see VIPS_INIT().
         *
         * This function is for bindings which need to start up vips. C programs
         * should use the VIPS_INIT() macro, which does some extra checks.
         *
         * See also: VIPS_INIT().
         */
        export function init(argv0: string): number;
        /**
         * Turn on or off vips leak checking. See also --vips-leak,
         * vips_add_option_entries() and the `VIPS_LEAK` environment variable.
         *
         * You should call this very early in your program.
         */
        export function leak_set(leak: boolean): void;
        /**
         * g_malloc() local to object, that is, the memory will be automatically
         * freed for you when the object is closed. If `object `is %NULL, you need to
         * free the memory explicitly with g_free().
         *
         * This function cannot fail. See vips_tracked_malloc() if you are
         * allocating large amounts of memory.
         *
         * See also: vips_tracked_malloc().
         */
        export function malloc(object: Object | null, size: number): any | null;
        /**
         * Return the VIPS nickname for a %GType. Handy for language bindings.
         */
        export function nickname_find(type: GObject.GType): string;
        /**
         * Return the filename part of a vips7 path. For testing only.
         */
        export function path_filename7(path: string): string;
        /**
         * Return the mode part of a vips7 path. For testing only.
         */
        export function path_mode7(path: string): string;
        /**
         * If set, vips will print messages about the progress of computation to
         * stdout. This can also be enabled with the --vips-progress option, or by
         * setting the environment variable VIPS_PROGRESS.
         */
        export function progress_set(progress: boolean): void;
        /**
         * Pythagorean distance between two points in colour space. Lab/XYZ/CMC etc.
         */
        export function pythagoras(L1: number, a1: number, b1: number, L2: number, a2: number, b2: number): number;
        /**
         * Call this to drop caches, close plugins, terminate background threads, and
         * finalize any internal library testing.
         *
         * vips_shutdown() is optional. If you don't call it, your platform will
         * clean up for you. The only negative consequences are that the leak checker
         * and the profiler will not work.
         *
         * You may call VIPS_INIT() many times and vips_shutdown() many times, but you
         * must not call VIPS_INIT() after vips_shutdown(). In other words, you cannot
         * stop and restart libvips.
         *
         * See also: vips_profile_set(), vips_leak_set().
         */
        export function shutdown(): void;
        /**
         * g_strdup() a string. When `object `is freed, the string will be freed for
         * you.  If `object `is %NULL, you need to
         * free the memory yourself with g_free().
         *
         * This function cannot fail.
         *
         * See also: vips_malloc().
         */
        export function strdup(object: Object | null, str: string): string;
        /**
         * Free any thread-private data and flush any profiling information.
         *
         * This function needs to be called when a thread that has been using vips
         * exits. It is called for you by vips_shutdown() and for any threads created
         * within the #VipsThreadPool.
         *
         * You will need to call it from threads created in
         * other ways or there will be memory leaks. If you do not call it, vips
         * will generate a warning message.
         *
         * It may be called many times, and you can continue using vips after
         * calling it. Calling it too often will reduce performance.
         */
        export function thread_shutdown(): void;
        /**
         * Exactly as close(2), but update the number of files currently open via
         * vips_tracked_get_files(). This is used
         * by the vips operation cache to drop cache when the number of files
         * available is low.
         *
         * You must only close file descriptors opened with vips_tracked_open().
         *
         * See also: vips_tracked_open(), vips_tracked_get_files().
         */
        export function tracked_close(fd: number): number;
        /**
         * Only use it to free
         * memory that was previously allocated with vips_tracked_malloc() with a
         * %NULL first argument.
         *
         * See also: vips_tracked_malloc().
         */
        export function tracked_free(s?: any | null): void;
        /**
         * Returns the number of active allocations.
         */
        export function tracked_get_allocs(): number;
        /**
         * Returns the number of open files.
         */
        export function tracked_get_files(): number;
        /**
         * Returns the number of bytes currently allocated via vips_malloc() and
         * friends. vips uses this figure to decide when to start dropping cache, see
         * #VipsOperation.
         */
        export function tracked_get_mem(): number;
        /**
         * Returns the largest number of bytes simultaneously allocated via
         * vips_tracked_malloc(). Handy for estimating max memory requirements for a
         * program.
         */
        export function tracked_get_mem_highwater(): number;
        /**
         * Allocate an area of memory that will be tracked by vips_tracked_get_mem()
         * and friends.
         *
         * If allocation fails, vips_malloc() returns %NULL and
         * sets an error message.
         *
         * You must only free the memory returned with vips_tracked_free().
         *
         * See also: vips_tracked_free(), vips_malloc().
         */
        export function tracked_malloc(size: number): any | null;
        /**
         * Exactly as open(2), but the number of files currently open via
         * vips_tracked_open() is available via vips_tracked_get_files(). This is used
         * by the vips operation cache to drop cache when the number of files
         * available is low.
         *
         * You must only close the file descriptor with vips_tracked_close().
         *
         * `pathname `should be utf8.
         *
         * See also: vips_tracked_close(), vips_tracked_get_files().
         */
        export function tracked_open(pathname: string, flags: number, mode: number): number;
        export function type_depth(type: GObject.GType): number;
        /**
         * Search below basename, return the %GType of the class whose name or
         * `nickname `matches, or 0 for not found.
         * If `basename `is NULL, the whole of #VipsObject is searched.
         *
         * This function uses a cache, so it should be quick.
         *
         * See also: vips_class_find()
         */
        export function type_find(basename: string, nickname: string): GObject.GType;
        /**
         * Get the pointer from an area. Don't touch count (area is static).
         */
        export function value_get_area(value: GObject.Value | any): [any | null, number];
        /**
         * Return the pointer to the array held by `value.`
         * Optionally return the other properties of the array in n, type,
         * `sizeof_type.`
         *
         * See also: vips_value_set_array().
         */
        export function value_get_array(value: GObject.Value | any): [any | null, number, GObject.GType | null, number];
        /**
         * Return the start of the array of doubles held by `value.`
         * optionally return the number of elements in `n.`
         *
         * See also: vips_array_double_new().
         */
        export function value_get_array_double(value: GObject.Value | any): number[];
        /**
         * Return the start of the array of images held by `value.`
         * optionally return the number of elements in `n.`
         *
         * See also: vips_value_set_array_image().
         */
        export function value_get_array_image(value: GObject.Value | any): Image[];
        /**
         * Return the start of the array of ints held by `value.`
         * optionally return the number of elements in `n.`
         *
         * See also: vips_array_int_new().
         */
        export function value_get_array_int(value: GObject.Value | any): number[];
        /**
         * Returns the data pointer from a blob. Optionally returns the length too.
         *
         * blobs are things like ICC profiles or EXIF data. They are relocatable, and
         * are saved to VIPS files for you coded as base64 inside the XML. They are
         * copied by copying reference-counted pointers.
         *
         * See also: vips_value_set_blob()
         */
        export function value_get_blob(value: GObject.Value | any): Uint8Array;
        /**
         * Get the C string held internally by the %GValue.
         */
        export function value_get_ref_string(value: GObject.Value | any): [string, number];
        /**
         * Get the C string held internally by the GValue.
         */
        export function value_get_save_string(value: GObject.Value | any): string;
        export function value_is_null(psoec: GObject.ParamSpec, value: GObject.Value | any): boolean;
        /**
         * Set value to be a ref-counted area of memory with a free function.
         */
        export function value_set_area(value: GObject.Value | any, free_fn?: CallbackFn | null): void;
        /**
         * Set `value `to be an array of things.
         *
         * This allocates memory but does not
         * initialise the contents: get the pointer and write instead.
         */
        export function value_set_array(n: number, type: GObject.GType, sizeof_type: number): unknown;
        /**
         * Set `value `to hold a copy of `array.` Pass in the array length in `n.`
         *
         * See also: vips_array_double_get().
         */
        export function value_set_array_double(value: GObject.Value | any, array?: number[] | null): void;
        /**
         * Set `value `to hold an array of images. Pass in the array length in `n.`
         *
         * See also: vips_array_image_get().
         */
        export function value_set_array_image(value: GObject.Value | any, n: number): void;
        /**
         * Set `value `to hold a copy of `array.` Pass in the array length in `n.`
         *
         * See also: vips_array_int_get().
         */
        export function value_set_array_int(value: GObject.Value | any, array?: number[] | null): void;
        /**
         * Set `value `to hold an array of %GObject. Pass in the array length in `n.`
         *
         * See also: vips_value_get_array_object().
         */
        export function value_set_array_object(n: number): unknown;
        /**
         * Sets `value `to hold a `data.` When `value `is freed, `data `will be
         * freed with `free_fn.` `value `also holds a note of the size of the memory
         * area.
         *
         * blobs are things like ICC profiles or EXIF data. They are relocatable, and
         * are saved to VIPS files for you coded as base64 inside the XML. They are
         * copied by copying reference-counted pointers.
         *
         * See also: vips_value_get_blob()
         */
        export function value_set_blob(free_fn: CallbackFn | null, data: Uint8Array | string): unknown;
        /**
         * Just like vips_value_set_blob(), but when
         * `value `is freed, `data `will be
         * freed with g_free().
         *
         * This can be easier to call for language bindings.
         *
         * See also: vips_value_set_blob()
         */
        export function value_set_blob_free(value: GObject.Value | any, data: Uint8Array | string): void;
        /**
         * Copies the C string `str `into `value.`
         *
         * vips_ref_string are immutable C strings that are copied between images by
         * copying reference-counted pointers, making them much more efficient than
         * regular %GValue strings.
         *
         * `str `should be a valid utf-8 string.
         */
        export function value_set_ref_string(str: string): unknown;
        /**
         * Copies the C string into `value.`
         *
         * `str `should be a valid utf-8 string.
         */
        export function value_set_save_string(str: string): unknown;
        /**
         * Get the major, minor or micro library version, with `flag `values 0, 1 and
         * 2.
         *
         * Get the ABI current, revision and age (as used by Meson) with flag
         * values 3, 4, 5.
         */
        export function version(flag: number): number;
        /**
         * Get the VIPS version as a static string, including a build date and time.
         * Do not free.
         */
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
        export type InterpolateMethod = (
            interpolate: Interpolate,
            out: any | null,
            _in: Region,
            x: number,
            y: number
        ) => void;
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

        export namespace ArgumentFlags {
            export const $gtype: GObject.GType<ArgumentFlags>;
        }

        /**
         * Flags we associate with each object argument.
         *
         * Have separate input &amp; output flags. Both set is an error; neither set is OK.
         *
         * Input gobjects are automatically reffed, output gobjects automatically ref
         * us. We also automatically watch for "destroy" and unlink.
         *
         * @VIPS_ARGUMENT_SET_ALWAYS is handy for arguments which are set from C. For
         * example, VipsImage::width is a property that gives access to the Xsize
         * member of struct _VipsImage. We default its 'assigned' to TRUE
         * since the field is always set directly by C.
         *
         * @VIPS_ARGUMENT_DEPRECATED arguments are not shown in help text, are not
         * looked for if required, are not checked for "have-been-set". You can
         * deprecate a required argument, but you must obviously add a new required
         * argument if you do.
         *
         * Input args with @VIPS_ARGUMENT_MODIFY will be modified by the operation.
         * This is used for things like the in-place drawing operations.
         */
        export enum ArgumentFlags {
            /**
             * no flags
             */
            NONE = 0,
            /**
             * must be set in the constructor
             */
            REQUIRED = 1,
            /**
             * can only be set in the constructor
             */
            CONSTRUCT = 2,
            /**
             * can only be set once
             */
            SET_ONCE = 4,
            /**
             * don't do use-before-set checks
             */
            SET_ALWAYS = 8,
            /**
             * is an input argument (one we depend on)
             */
            INPUT = 16,
            /**
             * is an output argument (depends on us)
             */
            OUTPUT = 32,
            /**
             * just there for back-compat, hide
             */
            DEPRECATED = 64,
            /**
             * the input argument will be modified
             */
            MODIFY = 128,
        }

        export namespace ForeignFlags {
            export const $gtype: GObject.GType<ForeignFlags>;
        }

        /**
         * Some hints about the image loader.
         *
         * #VIPS_FOREIGN_PARTIAL means that the image can be read directly from the
         * file without needing to be unpacked to a temporary image first.
         *
         * #VIPS_FOREIGN_SEQUENTIAL means that the loader supports lazy reading, but
         * only top-to-bottom (sequential) access. Formats like PNG can read sets of
         * scanlines, for example, but only in order.
         *
         * If neither PARTIAL or SEQUENTIAL is set, the loader only supports whole
         * image read. Setting both PARTIAL and SEQUENTIAL is an error.
         *
         * #VIPS_FOREIGN_BIGENDIAN means that image pixels are most-significant byte
         * first. Depending on the native byte order of the host machine, you may
         * need to swap bytes. See vips_copy().
         */
        export enum ForeignFlags {
            /**
             * no flags set
             */
            NONE = 0,
            /**
             * the image may be read lazilly
             */
            PARTIAL = 1,
            /**
             * image pixels are most-significant byte first
             */
            BIGENDIAN = 2,
            /**
             * top-to-bottom lazy reading
             */
            SEQUENTIAL = 4,
            ALL = 7,
        }

        export namespace ForeignPngFilter {
            export const $gtype: GObject.GType<ForeignPngFilter>;
        }

        /**
         * http://www.w3.org/TR/PNG-Filters.html
         * The values mirror those of png.h in libpng.
         */
        export enum ForeignPngFilter {
            /**
             * no filtering
             */
            NONE = 8,
            /**
             * difference to the left
             */
            SUB = 16,
            /**
             * difference up
             */
            UP = 32,
            /**
             * average of left and up
             */
            AVG = 64,
            /**
             * pick best neighbor predictor automatically
             */
            PAETH = 128,
            /**
             * adaptive
             */
            ALL = 248,
        }

        export namespace OperationFlags {
            export const $gtype: GObject.GType<OperationFlags>;
        }

        /**
         * Flags we associate with an operation.
         *
         * @VIPS_OPERATION_SEQUENTIAL means that the operation works like vips_conv():
         * it can process images top-to-bottom with only small non-local
         * references.
         *
         * Every scan-line must be requested, you are not allowed to skip
         * ahead, but as a special case, the very first request can be for a region
         * not at the top of the image. In this case, the first part of the image will
         * be read and discarded
         *
         * Every scan-line must be requested, you are not allowed to skip
         * ahead, but as a special case, the very first request can be for a region
         * not at the top of the image. In this case, the first part of the image will
         * be read and discarded
         *
         * @VIPS_OPERATION_NOCACHE means that the operation must not be cached by
         * vips.
         *
         * @VIPS_OPERATION_DEPRECATED means this is an old operation kept in vips for
         * compatibility only and should be hidden from users.
         *
         * @VIPS_OPERATION_UNTRUSTED means the operation depends on external libraries
         * which have not been hardened against attack. It should probably not be used
         * on untrusted input. Use vips_block_untrusted_set() to block all
         * untrusted operations.
         *
         * @VIPS_OPERATION_BLOCKED means the operation is prevented from executing. Use
         * vips_operation_block_set() to enable and disable groups of operations.
         */
        export enum OperationFlags {
            /**
             * no flags
             */
            NONE = 0,
            /**
             * can work sequentially with a small buffer
             */
            SEQUENTIAL = 1,
            SEQUENTIAL_UNBUFFERED = 2,
            /**
             * must not be cached
             */
            NOCACHE = 4,
            /**
             * a compatibility thing
             */
            DEPRECATED = 8,
            /**
             * not hardened for untrusted input
             */
            UNTRUSTED = 16,
            /**
             * prevent this operation from running
             */
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

            /**
             * Searches for an operation you could use to load `filename.` Any trailing
             * options on `filename `are stripped and ignored.
             *
             * See also: vips_foreign_find_load_buffer(), vips_image_new_from_file().
             */
            static find_load(filename: string): string;
            /**
             * Searches for an operation you could use to load a memory buffer. To see the
             * range of buffer loaders supported by your vips, try something like:
             *
             * vips -l | grep load_buffer
             *
             * See also: vips_image_new_from_buffer().
             */
            static find_load_buffer(data: Uint8Array | string): string;
            /**
             * Searches for an operation you could use to load a source. To see the
             * range of source loaders supported by your vips, try something like:
             *
             * vips -l | grep load_source
             *
             * See also: vips_image_new_from_source().
             */
            static find_load_source(source: Source): string;
            /**
             * Searches for an operation you could use to write to `filename.`
             * Any trailing options on `filename `are stripped and ignored.
             *
             * See also: vips_foreign_find_save_buffer(), vips_image_write_to_file().
             */
            static find_save(filename: string): string | null;
            /**
             * Searches for an operation you could use to write to a buffer in suffix
             * format.
             *
             * See also: vips_image_write_to_buffer().
             */
            static find_save_buffer(suffix: string): string | null;
            /**
             * Searches for an operation you could use to write to a target in suffix
             * format.
             *
             * See also: vips_image_write_to_buffer().
             */
            static find_save_target(suffix: string): string | null;
            /**
             * Get a %NULL-terminated array listing all the supported suffixes.
             *
             * This is not the same as all the supported file types, since libvips
             * detects image format for load by testing the first few bytes.
             *
             * Use vips_foreign_find_load() to detect type for a specific file.
             *
             * Free the return result with g_strfreev().
             */
            static get_suffixes(): string[];
            /**
             * Return %TRUE if `filename `can be loaded by `loader.` `loader `is something
             * like "tiffload" or "VipsForeignLoadTiff".
             */
            static is_a(loader: string, filename: string): boolean;
            /**
             * Return %TRUE if `data `can be loaded by `loader.` `loader `is something
             * like "tiffload_buffer" or "VipsForeignLoadTiffBuffer".
             */
            static is_a_buffer(loader: string, data: Uint8Array | string): boolean;
            /**
             * Return %TRUE if `source `can be loaded by `loader.` `loader `is something
             * like "tiffload_source" or "VipsForeignLoadTiffSource".
             */
            static is_a_source(loader: string, source: Source): boolean;
            /**
             * Apply a function to every #VipsForeignClass that VIPS knows about. Foreigns
             * are presented to the function in priority order.
             *
             * Like all VIPS map functions, if `fn `returns %NULL, iteration continues. If
             * it returns non-%NULL, iteration terminates and that value is returned. The
             * map function returns %NULL if all calls return %NULL.
             *
             * See also: vips_slist_map().
             */
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
            static new_from_file_raw(
                filename: string,
                xsize: number,
                ysize: number,
                bands: number,
                offset: number
            ): Image;
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

            /**
             * Remove the orientation tag on `image.` Also remove any exif orientation tags.
             * You must vips_copy() the image before calling this function since it
             * modifies metadata.
             */
            autorot_remove_angle(): void;
            /**
             * Test if `image `is in a colourspace that vips_colourspace() can process.
             */
            colourspace_issupported(): boolean;
            /**
             * This function allocates memory, renders `image `into it, builds a new
             * image around the memory area, and returns that.
             *
             * If the image is already a simple area of memory, it just refs `image `and
             * returns it.
             *
             * Call this before using the draw operations to make sure you have a
             * memory image that can be modified.
             *
             * vips_copy() adds a null "copy" node to a pipeline. Use that
             * instead if you want to change metadata and not pixels.
             *
             * This operation is thread-safe, unlike vips_image_wio_input().
             *
             * If you are sure that `image `is not shared with another thread (perhaps you
             * have made it yourself), use vips_image_wio_input() instead.
             *
             * See also: vips_image_wio_input().
             */
            copy_memory(): Image;
            /**
             * A convenience function to unpack to a format that we can compute with.
             * `out.`coding is always #VIPS_CODING_NONE.
             *
             * This unpacks LABQ to plain LAB. Use vips_LabQ2LabS() for a bit more speed
             * if you need it.
             *
             * See also: vips_image_encode(), vips_LabQ2Lab(), vips_rad2float().
             */
            decode(): [number, Image];
            /**
             * We often need to know what an image will decode to without actually
             * decoding it, for example, in arg checking.
             *
             * See also: vips_image_decode().
             */
            decode_predict(): [number, number, BandFormat];
            /**
             * A convenience function to pack to a coding. The inverse of
             * vips_image_decode().
             *
             * See also: vips_image_decode().
             */
            encode(coding: Coding): [number, Image];
            /**
             * Loaders can call this on the image they are making if they see a read error
             * from the load library. It signals "invalidate" on the load operation and
             * will cause it to be dropped from cache.
             *
             * If we know a file will cause a read error, we don't want to cache the
             * failing operation, we want to make sure the image will really be opened
             * again if our caller tries again. For example, a broken file might be
             * replaced by a working one.
             */
            foreign_load_invalidate(): void;
            /**
             * Free the externally allocated buffer found in the input image. This function
             * is intended to be used with g_signal_connect.
             */
            free_buffer(buffer?: any | null): void;
            /**
             * Fill `value_copy `with a copy of the header field. `value_copy `must be zeroed
             * but uninitialised.
             *
             * This will return -1 and add a message to the error buffer if the field
             * does not exist. Use vips_image_get_typeof() to test for the
             * existence of a field first if you are not certain it will be there.
             *
             * For example, to read a double from an image (though of course you would use
             * vips_image_get_double() in practice):
             *
             * |[
             * GValue value = { 0 };
             * double d;
             *
             * if (vips_image_get (image, name, &amp;value))
             * return -1;
             *
             * if (G_VALUE_TYPE (&amp;value) != G_TYPE_DOUBLE) {
             * vips_error( "mydomain",
             * _("field \"%s\" is of type %s, not double"),
             * name,
             * g_type_name (G_VALUE_TYPE (&amp;value)));
             * g_value_unset (&amp;value);
             * return -1;
             * }
             *
             * d = g_value_get_double (&amp;value);
             * g_value_unset (&amp;value);
             * ]|
             *
             * See also: vips_image_get_typeof(), vips_image_get_double().
             */
            get(name: string): [number, unknown];
            /**
             * Gets `data `from `image `under the name `name.` A convenience
             * function over vips_image_get(). Use vips_image_get_typeof() to test for
             * the existence of a piece of metadata.
             *
             * See also: vips_image_set_area(), vips_image_get(),
             * vips_image_get_typeof()
             */
            get_area(name: string): [number, any];
            /**
             * Gets `out `from `im `under the name `name.`
             * The field must be of type
             * #VIPS_TYPE_ARRAY_INT.
             *
             * Do not free `out.` `out `is valid as long as `image `is valid.
             *
             * Use vips_image_get_typeof() to test for the
             * existence of a piece of metadata.
             *
             * See also: vips_image_get(), vips_image_set_image()
             */
            get_array_double(name: string): [number, number[]];
            /**
             * Gets `out `from `im `under the name `name.`
             * The field must be of type
             * #VIPS_TYPE_ARRAY_INT.
             *
             * Do not free `out.` `out `is valid as long as `image `is valid.
             *
             * Use vips_image_get_typeof() to test for the
             * existence of a piece of metadata.
             *
             * See also: vips_image_get(), vips_image_set_image()
             */
            get_array_int(name: string): [number, number[]];
            /**
             * Returns `name `from `image `in `out.`
             * This function will read any field, returning it as a printable string.
             * You need to free the string with g_free() when you are done with it.
             *
             * This will base64-encode BLOBs, for example. Use vips_buf_appendgv() to
             * make a string that's for humans.
             *
             * See also: vips_image_get(), vips_image_get_typeof(), vips_buf_appendgv().
             */
            get_as_string(name: string): [number, string];
            get_bands(): number;
            /**
             * Gets `blob `from `image `under the name name, optionally returns its length in
             * `length.` A convenience
             * function over vips_image_get(). Use vips_image_get_typeof() to test for the
             * existence
             * of a piece of metadata.
             *
             * See also: vips_image_get(), vips_image_get_typeof(), vips_blob_get(),
             */
            get_blob(name: string): [number, Uint8Array];
            get_coding(): Coding;
            /**
             * Fetch and sanity-check #VIPS_CONCURRENCY. Default to 1 if not present or
             * crazy.
             */
            get_concurrency(default_concurrency: number): number;
            /**
             * Return a pointer to the image's pixel data, if possible. This can involve
             * allocating large amounts of memory and performing a long computation. Image
             * pixels are laid out in band-packed rows.
             *
             * Since this function modifies image, it is not threadsafe. Only call it on
             * images which you are sure have not been shared with another thread.
             *
             * See also: vips_image_wio_input(), vips_image_copy_memory().
             */
            get_data(): any | null;
            /**
             * Gets `out `from `im `under the name `name.`
             * The value will be transformed into
             * a double, if possible.
             *
             * See also: vips_image_get(), vips_image_get_typeof()
             */
            get_double(name: string): [number, number];
            /**
             * Get a %NULL-terminated array listing all the metadata field names on `image.`
             * Free the return result with g_strfreev().
             *
             * This is handy for language bindings. From C, it's usually more convenient to
             * use vips_image_map().
             */
            get_fields(): string[];
            get_filename(): string;
            get_format(): BandFormat;
            get_height(): number;
            /**
             * This function reads the image history as a C string. The string is owned
             * by VIPS and must not be freed.
             *
             * VIPS tracks the history of each image, that is, the sequence of operations
             * that generated that image. Applications built on VIPS need to call
             * vips_image_history_printf() for each action they perform, setting the
             * command-line equivalent for the action.
             *
             * See also: vips_image_history_printf().
             */
            get_history(): string;
            /**
             * Gets `out `from `im `under the name `name.`
             * The field must be of type
             * #VIPS_TYPE_IMAGE. You must unref `out `with g_object_unref().
             *
             * Use vips_image_get_typeof() to test for the
             * existence of a piece of metadata.
             *
             * See also: vips_image_get(), vips_image_set_image()
             */
            get_image(name: string): [number, Image];
            /**
             * Gets `out `from `im `under the name `name.`
             * The value will be transformed into
             * an int, if possible.
             *
             * See also: vips_image_get(), vips_image_get_typeof()
             */
            get_int(name: string): [number, number];
            /**
             * Return the #VipsInterpretation set in the image header.
             * Use vips_image_guess_interpretation() if you want a sanity-checked value.
             */
            get_interpretation(): Interpretation;
            /**
             * Image modes are things like `"t"`, meaning a memory buffer, and `"p"`
             * meaning a delayed computation.
             */
            get_mode(): string;
            /**
             * Fetch and sanity-check #VIPS_META_N_PAGES. Default to 1 if not present or
             * crazy.
             *
             * This is the number of pages in the image file, not the number of pages that
             * have been loaded into `image.`
             */
            get_n_pages(): number;
            /**
             * Fetch and sanity-check #VIPS_META_N_SUBIFDS. Default to 0 if not present or
             * crazy.
             */
            get_n_subifds(): number;
            /**
             * Matrix images can have an optional `offset` field for use by integer
             * convolution.
             */
            get_offset(): number;
            /**
             * Fetch and sanity-check #VIPS_META_ORIENTATION. Default to 1 (no rotate,
             * no flip) if not present or crazy.
             */
            get_orientation(): number;
            /**
             * Return %TRUE if applying the orientation would swap width and height.
             */
            get_orientation_swap(): boolean;
            /**
             * Multi-page images can have a page height. Fetch it, and sanity check it. If
             * page-height is not set, it defaults to the image height.
             */
            get_page_height(): number;
            /**
             * Matrix images can have an optional `scale` field for use by integer
             * convolution.
             */
            get_scale(): number;
            /**
             * Gets `out `from `im `under the name `name.`
             * The field must be of type
             * G_TYPE_STRING, VIPS_TYPE_REF_STRING.
             *
             * Do not free `out.`
             *
             * Use vips_image_get_as_string() to fetch any field as a string.
             *
             * See also: vips_image_get(), vips_image_get_typeof()
             */
            get_string(name: string): [number, string];
            /**
             * Read the %GType for a header field. Returns zero if there is no
             * field of that name.
             *
             * See also: vips_image_get().
             */
            get_typeof(name: string): GObject.GType;
            get_width(): number;
            get_xoffset(): number;
            get_xres(): number;
            get_yoffset(): number;
            get_yres(): number;
            /**
             * Return the #VipsBandFormat for an image, guessing a sane value if
             * the set value looks crazy.
             *
             * For example, for a float image tagged as rgb16, we'd return ushort.
             */
            guess_format(): BandFormat;
            /**
             * Return the #VipsInterpretation for an image, guessing a sane value if
             * the set value looks crazy.
             */
            guess_interpretation(): Interpretation;
            /**
             * Look at an image's interpretation and see if it has extra alpha bands. For
             * example, a 4-band #VIPS_INTERPRETATION_sRGB would, but a six-band
             * #VIPS_INTERPRETATION_MULTIBAND would not.
             *
             * Return %TRUE if `image `has an alpha channel.
             */
            hasalpha(): boolean;
            /**
             * Formats the name/argv as a single string and calls
             * vips_image_history_printf(). A
             * convenience function for command-line prorams.
             *
             * See also: vips_image_get_history().
             */
            history_args(name: string, argv: string[]): number;
            /**
             * Transform an image from absolute to relative colorimetry using the
             * MediaWhitePoint stored in the ICC profile.
             *
             * See also: vips_icc_transform(), vips_icc_import().
             */
            icc_ac2rc(profile_filename: string): [number, Image];
            /**
             * A convenience function to set the header fields after creating an image.
             * Normally you copy the fields from your input images with
             * vips_image_pipelinev() and then make
             * any adjustments you need, but if you are creating an image from scratch,
             * for example vips_black() or vips_jpegload(), you do need to set all the
             * fields yourself.
             *
             * See also: vips_image_pipelinev().
             */
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
            /**
             * Gets `image `ready for an in-place operation, such as vips_draw_circle().
             * After calling this function you can both read and write the image with
             * VIPS_IMAGE_ADDR().
             *
             * This method is called for you by the base class of the draw operations,
             * there's no need to call it yourself.
             *
             * Since this function modifies image, it is not thread-safe. Only call it on
             * images which you are sure have not been shared with another thread.
             * All in-place operations are inherently not thread-safe, so you need to take
             * great care in any case.
             *
             * See also: vips_draw_circle(), vips_image_wio_input().
             */
            inplace(): number;
            /**
             * Invalidate all pixel caches on `image `and any downstream images, that
             * is, images which depend on this image. Additionally, all operations which
             * depend upon this image are dropped from the VIPS operation cache.
             *
             * You should call this function after
             * destructively modifying an image with something like vips_draw_circle().
             *
             * The #VipsImage::invalidate signal is emitted for all invalidated images.
             *
             * See also: vips_region_invalidate().
             */
            invalidate_all(): void;
            /**
             * Return %TRUE if `image `is in most-significant-
             * byte first form. This is the byte order used on the SPARC
             * architecture and others.
             */
            isMSBfirst(): boolean;
            /**
             * TRUE if any of the images upstream from `image `were opened in sequential
             * mode. Some operations change behaviour slightly in sequential mode to
             * optimize memory behaviour.
             */
            is_sequential(): boolean;
            /**
             * Return %TRUE if `image `represents a file on disc in some way.
             */
            isfile(): boolean;
            /**
             * If `image `has been killed (see vips_image_set_kill()), set an error message,
             * clear the #VipsImage.kill flag and return %TRUE. Otherwise return %FALSE.
             *
             * Handy for loops which need to run sets of threads which can fail.
             *
             * See also: vips_image_set_kill().
             */
            iskilled(): boolean;
            /**
             * Return %TRUE if `im `represents a partial image (a delayed calculation).
             */
            ispartial(): boolean;
            /**
             * This function calls `fn `for every header field, including every item of
             * metadata.
             *
             * Like all _map functions, the user function should return %NULL to continue
             * iteration, or a non-%NULL pointer to indicate early termination.
             *
             * See also: vips_image_get_typeof(), vips_image_get().
             */
            map(a?: any | null): any | null;
            /**
             * Minimise memory use on this image and any upstream images, that is, images
             * which this image depends upon. This function is called automatically at the
             * end of a computation, but it might be useful to call at other times.
             *
             * The #VipsImage::minimise signal is emitted for all minimised images.
             */
            minimise_all(): void;
            /**
             * Check that an image is readable with vips_region_prepare() and friends.
             * If it isn't, try to transform the image so that vips_region_prepare() can
             * work.
             *
             * See also: vips_image_pio_output(), vips_region_prepare().
             */
            pio_input(): number;
            /**
             * Check that an image is writeable with vips_image_generate(). If it isn't,
             * try to transform the image so that vips_image_generate() can work.
             *
             * See also: vips_image_pio_input().
             */
            pio_output(): number;
            /**
             * Prints field `name `to stdout as ASCII. Handy for debugging.
             */
            print_field(name: string): void;
            /**
             * Find and remove an item of metadata. Return %FALSE if no metadata of that
             * name was found.
             *
             * See also: vips_image_set(), vips_image_get_typeof().
             */
            remove(name: string): boolean;
            /**
             * vips_reorder_margin_hint() sets a hint that `image `contains a margin, that
             * is, that each vips_region_prepare() on `image `will request a slightly larger
             * region from it's inputs. A good value for `margin `is (width * height) for
             * the window the operation uses.
             *
             * This information is used by vips_image_prepare_many() to attempt to reorder
             * computations to minimise recomputation.
             *
             * See also: vips_image_prepare_many().
             */
            reorder_margin_hint(margin: number): void;
            /**
             * vips_reorder_prepare_many() runs vips_region_prepare() on each region in
             * regions, requesting the pixels in `r.`
             *
             * It tries to request the regions in the order which will cause least
             * recomputation. This can give a large speedup, in some cases.
             *
             * See also: vips_region_prepare(), vips_reorder_margin_hint().
             */
            reorder_prepare_many(regions: Region[], r: Rect): number;
            /**
             * Set a piece of metadata on `image.` Any old metadata with that name is
             * destroyed. The %GValue is copied into the image, so you need to unset the
             * value when you're done with it.
             *
             * For example, to set an integer on an image (though you would use the
             * convenience function vips_image_set_int() in practice), you would do:
             *
             * |[
             * GValue value = { 0 };
             *
             * g_value_init (&amp;value, G_TYPE_INT);
             * g_value_set_int (&amp;value, 42);
             * vips_image_set (image, name, &amp;value);
             * g_value_unset (&amp;value);
             * ]|
             *
             * See also: vips_image_get().
             */
            set(name: string, value: GObject.Value | any): void;
            // Conflicted with GObject.Object.set
            set(...args: never[]): any;
            /**
             * Attaches `data `as a metadata item on `image `under the name `name.` When
             * VIPS no longer needs the metadata, it will be freed with `free_fn.`
             *
             * See also: vips_image_get_double(), vips_image_set()
             */
            set_area(name: string, free_fn?: CallbackFn | null): void;
            /**
             * Attaches `array `as a metadata item on `image `as `name.`
             * A convenience function over vips_image_set().
             *
             * See also: vips_image_get_image(), vips_image_set().
             */
            set_array_double(name: string, array?: number[] | null): void;
            /**
             * Attaches `array `as a metadata item on `image `as `name.`
             * A convenience function over vips_image_set().
             *
             * See also: vips_image_get_image(), vips_image_set().
             */
            set_array_int(name: string, array?: number[] | null): void;
            /**
             * Attaches `blob `as a metadata item on `image `under the name `name.` A
             * convenience
             * function over vips_image_set() using a vips_blob.
             *
             * See also: vips_image_get_blob(), vips_image_set().
             */
            set_blob(name: string, free_fn: CallbackFn | null, data: Uint8Array | string): void;
            /**
             * Attaches `blob `as a metadata item on `image `under the name name, taking
             * a copy of the memory area. A convenience function over
             * vips_image_set_blob().
             *
             * See also: vips_image_get_blob(), vips_image_set().
             */
            set_blob_copy(name: string, data: Uint8Array | string): void;
            /**
             * Sets the delete_on_close flag for the image. If this flag is set, when
             * `image `is finalized, the filename held in image-&gt;filename at the time of
             * this call is deleted.
             *
             * This function is clearly extremely dangerous, use with great caution.
             *
             * See also: vips_image_new_temp_file().
             */
            set_delete_on_close(delete_on_close: boolean): void;
            /**
             * Attaches `d `as a metadata item on `image `as `name.` A
             * convenience
             * function over vips_image_set().
             *
             * See also: vips_image_get_double(), vips_image_set()
             */
            set_double(name: string, d: number): void;
            /**
             * Attaches `im `as a metadata item on `image `as `name.`
             * A convenience function over vips_image_set().
             *
             * See also: vips_image_get_image(), vips_image_set().
             */
            set_image(name: string, im: Image): void;
            /**
             * Attaches `i `as a metadata item on `image `under the name `name.` A
             * convenience
             * function over vips_image_set().
             *
             * See also: vips_image_get_int(), vips_image_set()
             */
            set_int(name: string, i: number): void;
            /**
             * Set the #VipsImage.kill flag on an image. Handy for stopping sets of
             * threads.
             *
             * See also: vips_image_iskilled().
             */
            set_kill(kill: boolean): void;
            /**
             * vips signals evaluation progress via the #VipsImage::preeval,
             * #VipsImage::eval and #VipsImage::posteval
             * signals. Progress is signalled on the most-downstream image for which
             * vips_image_set_progress() was called.
             */
            set_progress(progress: boolean): void;
            /**
             * Attaches `str `as a metadata item on `image `as `name.`
             * A convenience
             * function over vips_image_set() using #VIPS_TYPE_REF_STRING.
             *
             * See also: vips_image_get_double(), vips_image_set().
             */
            set_string(name: string, str: string): void;
            /**
             * Check that an image is readable via the VIPS_IMAGE_ADDR() macro, that is,
             * that the entire image is in memory and all pixels can be read with
             * VIPS_IMAGE_ADDR().  If it
             * isn't, try to transform it so that VIPS_IMAGE_ADDR() can work.
             *
             * Since this function modifies image, it is not thread-safe. Only call it on
             * images which you are sure have not been shared with another thread. If the
             * image might have been shared, use the less efficient
             * vips_image_copy_memory() instead.
             *
             * See also: vips_image_copy_memory(), vips_image_pio_input(),
             * vips_image_inplace(), VIPS_IMAGE_ADDR().
             */
            wio_input(): number;
            /**
             * Write `image `to `out.` Use vips_image_new() and friends to create the
             * #VipsImage you want to write to.
             *
             * See also: vips_image_new(), vips_copy(), vips_image_write_to_file().
             */
            write(): [number, Image];
            /**
             * Write a line of pixels to an image. This function must be called repeatedly
             * with `ypos `increasing from 0 to #VipsImage::height .
             * `linebuffer `must be VIPS_IMAGE_SIZEOF_LINE() bytes long.
             *
             * See also: vips_image_generate().
             */
            write_line(ypos: number, linebuffer: Pel): number;
            /**
             * Call this after setting header fields (width, height, and so on) to
             * allocate resources ready for writing.
             *
             * Normally this function is called for you by vips_image_generate() or
             * vips_image_write_line(). You will need to call it yourself if you plan to
             * write directly to the -&gt;data member of a memory image.
             */
            write_prepare(): number;
            /**
             * Writes `in `to memory as a simple, unformatted C-style array.
             *
             * The caller is responsible for freeing this memory with g_free().
             *
             * See also: vips_image_write_to_buffer().
             */
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

            /**
             * Look up an interpolators desired window offset.
             */
            get_window_offset(): number;
            /**
             * Look up an interpolators desired window size.
             */
            get_window_size(): number;
            /**
             * Look up an interpolators desired window offset.
             */
            vfunc_get_window_offset(): number;
            /**
             * Look up an interpolators desired window size.
             */
            vfunc_get_window_size(): number;
            vfunc_interpolate(out: any | null, _in: Region, x: number, y: number): void;
            /**
             * A convenience function that returns a bilinear interpolator you
             * don't need to free.
             */
            static bilinear_static(): Interpolate;
            /**
             * A convenience function that returns a nearest-neighbour interpolator you
             * don't need to free.
             */
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

            /**
             * Convenience: has an argument been assigned. Useful for bindings.
             */
            argument_isset(name: string): boolean;
            argument_needsstring(name: string): boolean;
            build(): number;
            /**
             * Convenience: get the flags for an argument. Useful for bindings.
             */
            get_argument_flags(name: string): ArgumentFlags;
            /**
             * Convenience: get the priority for an argument. Useful for bindings.
             */
            get_argument_priority(name: string): number;
            get_argument_to_string(name: string, arg: string): number;
            /**
             * Fetch the object description. Useful for language bindings.
             *
             * `object.`description is only avaliable after _build(), which can be too
             * late. This function fetches from the instance, if possible, but falls back
             * to the class description if we are too early.
             */
            get_description(): string;
            local_cb(gobject: GObject.Object): void;
            preclose(): void;
            print_dump(): void;
            print_name(): void;
            print_summary(): void;
            rewind(): void;
            sanity(): boolean;
            set_argument_from_string(name: string, value: string): number;
            /**
             * Set object arguments from a string. The string can be something like
             * "a=12", or "a = 12, b = 13", or "fred". The string can optionally be
             * enclosed in brackets.
             *
             * You'd typically use this between creating the object and building it.
             *
             * See also: vips_object_set(), vips_object_build(),
             * vips_cache_operation_buildp().
             */
            set_from_string(string: string): number;
            set_required(value: string): number;
            set_static(static_object: boolean): void;
            /**
             * The inverse of vips_object_new_from_string(): turn `object `into eg.
             * "VipsInterpolateSnohalo1(blur=.333333)".
             */
            to_string(buf: Buf): void;
            /**
             * Unref all assigned output objects. Useful for language bindings.
             *
             * After an object is built, all output args are owned by the caller. If
             * something goes wrong before then, we have to unref the outputs that have
             * been made so far. This function can also be useful for callers when
             * they've finished processing outputs themselves.
             *
             * See also: vips_cache_operation_build().
             */
            unref_outputs(): void;
            vfunc_build(): number;
            vfunc_close(): void;
            vfunc_output_to_arg(string: string): number;
            vfunc_postbuild(data?: any | null): number;
            vfunc_postclose(): void;
            vfunc_preclose(): void;
            vfunc_rewind(): void;
            vfunc_sanity(buf: Buf): void;
            /**
             * The inverse of vips_object_new_from_string(): turn `object `into eg.
             * "VipsInterpolateSnohalo1(blur=.333333)".
             */
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
            static install_argument(
                pspec: GObject.ParamSpec,
                flags: ArgumentFlags,
                priority: number,
                offset: number
            ): void;
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

            /**
             * Returns the set of flags for this operation.
             */
            get_flags(): OperationFlags;
            invalidate(): void;
            /**
             * Returns the set of flags for this operation.
             */
            vfunc_get_flags(): OperationFlags;
            vfunc_invalidate(): void;
            /**
             * Set the block state on all operations in the libvips class hierarchy at
             * `name `and below.
             *
             * For example:
             *
             * |[
             * vips_operation_block_set( "VipsForeignLoad", TRUE );
             * vips_operation_block_set( "VipsForeignLoadJpeg", FALSE );
             * ]|
             *
             * Will block all load operations, except JPEG.
             *
             * Use `vips -l` at the command-line to see the class hierarchy.
             *
             * This call does nothing if the named operation is not found.
             *
             * See also: vips_block_untrusted_set().
             */
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

            /**
             * Paints 0 into the valid part of `reg.`
             *
             * See also: vips_region_paint().
             */
            black(): void;
            /**
             * The region is transformed so that at least `r `pixels are available as a
             * memory buffer that can be written to.
             */
            buffer(r: Rect): number;
            /**
             * Copy from one region to another. Copy area `r `from inside `reg `to dest,
             * positioning the area of pixels at x, `y.` The two regions must have pixels
             * which are the same size.
             *
             * See also: vips_region_paint().
             */
            copy(dest: Region, r: Rect, x: number, y: number): Region;
            /**
             * Do two regions point to the same piece of image? ie.
             *
             * |[
             * VIPS_REGION_ADDR( reg1, x, y ) == VIPS_REGION_ADDR( reg2, x, y ) &amp;&amp;
             * *VIPS_REGION_ADDR( reg1, x, y ) ==
             * *VIPS_REGION_ADDR( reg2, x, y ) for all x, y, reg1, reg2.
             * ]|
             */
            equalsregion(reg2: Region): number;
            /**
             * Generate an area of pixels and return a copy. The result must be freed
             * with g_free(). The requested area must be completely inside the image.
             *
             * This is equivalent to vips_region_prepare(), followed by a memcpy. It is
             * convenient for language bindings.
             */
            fetch(left: number, top: number, width: number, height: number, len: number): Pel;
            height(): number;
            /**
             * The region is transformed so that at least `r `pixels are available to be
             * read from the image. The image needs to be a memory buffer or represent a
             * file on disc that has been mapped or can be mapped.
             */
            image(r: Rect): number;
            /**
             * Mark a region as containing invalid pixels. Calling this function means
             * that the next time vips_region_prepare() is called, the region will be
             * recalculated.
             *
             * This is faster than calling vips_image_invalidate_all(), but obviously only
             * affects a single region.
             *
             * See also: vips_image_invalidate_all(), vips_region_prepare().
             */
            invalidate(): void;
            /**
             * Paints `value `into `reg `covering rectangle `r.`
             * `r `is clipped against
             * reg-&gt;valid.
             *
             * For int images, `value `is
             * passed to memset(), so it usually needs to be 0 or 255. For float images,
             * value is cast to a float and copied in to each band element.
             *
             * `r `is clipped against
             * reg-&gt;valid.
             *
             * See also: vips_region_black().
             */
            paint(r: Rect, value: number): void;
            /**
             * Paints `ink `into `reg `covering rectangle `r.` `r `is clipped against
             * reg-&gt;valid.
             *
             * `ink `should be a byte array of the same size as an image pixel containing
             * the binary value to write into the pixels.
             *
             * See also: vips_region_paint().
             */
            paint_pel(r: Rect, ink: Pel): void;
            /**
             * Set the position of a region. This only affects reg-&gt;valid, ie. the way
             * pixels are addressed, not reg-&gt;data, the pixels which are addressed. Clip
             * against the size of the image. Do not allow negative positions, or
             * positions outside the image.
             */
            position(x: number, y: number): number;
            /**
             * vips_region_prepare() fills `reg `with pixels. After calling,
             * you can address at least the area `r `with VIPS_REGION_ADDR() and get
             * valid pixels.
             *
             * vips_region_prepare() runs in-line, that is, computation is done by
             * the calling thread, no new threads are involved, and computation
             * blocks until the pixels are ready.
             *
             * Use vips_sink_screen() to calculate an area of pixels in the
             * background.
             *
             * See also: vips_sink_screen(), vips_region_prepare_to().
             */
            prepare(r: Rect): number;
            /**
             * Like vips_region_prepare(): fill `reg `with the pixels in area `r.`
             *
             * Unlike vips_region_prepare(), rather than writing the result to reg, the
             * pixels are written into `dest `at offset x, `y.`
             *
             * Also unlike vips_region_prepare(), `dest `is not set up for writing for
             * you with vips_region_buffer(). You can
             * point `dest `at anything, and pixels really will be written there.
             * This makes vips_region_prepare_to() useful for making the ends of
             * pipelines.
             *
             * See also: vips_region_prepare(), vips_sink_disc().
             */
            prepare_to(dest: Region, r: Rect, x: number, y: number): number;
            /**
             * Make VIPS_REGION_ADDR() on `reg `go to `dest `instead.
             *
             * `r `is the part of `reg `which you want to be able to address (this
             * effectively becomes the valid field), (x, y) is the top LH corner of the
             * corresponding area in `dest.`
             *
             * Performs all clipping necessary to ensure that reg-&gt;valid is indeed
             * valid.
             *
             * If the region we attach to is moved or destroyed, we can be left with
             * dangling pointers! If the region we attach to is on another image, the
             * two images must have the same sizeof( pel ).
             */
            region(dest: Region, r: Rect, x: number, y: number): number;
            /**
             * Write the pixels `target `in `to `from the x2 larger area in `from.`
             * Non-complex uncoded images and LABQ only. Images with alpha (see
             * vips_image_hasalpha()) shrink with pixels scaled by alpha to avoid fringing.
             *
             * `method `selects the method used to do the 2x2 shrink.
             *
             * See also: vips_region_copy().
             */
            shrink_method(to: Region, target: Rect, method: RegionShrink): [number, Region];
            width(): number;
        }

        export class Area {
            static $gtype: GObject.GType<Area>;

            constructor(
                properties?: Partial<{
                    data: any;
                    length: number;
                    n: number;
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
            /**
             * Return the data pointer plus optionally the length in bytes of an area,
             * the number of elements, the %GType of each element and the sizeof() each
             * element.
             */
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
            object: Object;
            assigned: boolean;
            close_id: number;
            invalidate_id: number;
        }

        export class ArrayDouble {
            static $gtype: GObject.GType<ArrayDouble>;

            constructor(array: number[]);
            constructor(copy: ArrayDouble);

            // Constructors
            static ["new"](array: number[]): ArrayDouble;

            // Members
            /**
             * Fetch a double array from a #VipsArrayDouble. Useful for language bindings.
             */
            get(): number[];
        }

        export class ArrayImage {
            static $gtype: GObject.GType<ArrayImage>;

            constructor(properties?: Partial<{}>);
            constructor(copy: ArrayImage);

            // Constructors
            static empty(): ArrayImage;
            static ["new"](array: Image[]): ArrayImage;
            static new_from_string(string: string, flags: Access): ArrayImage;

            // Members
            /**
             * Make a new #VipsArrayImage, one larger than array, with `image `appended
             * to the end.
             * Handy with vips_array_image_empty() for bindings
             * which can't handle object array arguments.
             *
             * See also: vips_array_image_empty().
             */
            append(image: Image): ArrayImage;
            /**
             * Fetch an image array from a #VipsArrayImage. Useful for language bindings.
             */
            get(): Image[];
        }

        export class ArrayInt {
            static $gtype: GObject.GType<ArrayInt>;

            constructor(array: number[]);
            constructor(copy: ArrayInt);

            // Constructors
            static ["new"](array: number[]): ArrayInt;

            // Members
            /**
             * Fetch an int array from a #VipsArrayInt. Useful for language bindings.
             */
            get(): number[];
        }

        export class Blob {
            static $gtype: GObject.GType<Blob>;

            constructor(free_fn: CallbackFn | null, data: Uint8Array | string);
            constructor(copy: Blob);

            // Constructors
            static ["new"](free_fn: CallbackFn | null, data: Uint8Array | string): Blob;

            // Members
            /**
             * Get the data from a #VipsBlob.
             *
             * See also: vips_blob_new().
             */
            get(): Uint8Array;
            /**
             * Any old data is freed and new data attached.
             *
             * It's sometimes useful to be able to create blobs as empty and then fill
             * them later.
             *
             * See also: vips_blob_new().
             */
            set(free_fn: CallbackFn | null, data: Uint8Array | string): void;
            /**
             * Like vips_blob_new(), but take a copy of the data. Useful for bindings
             * which struggle with callbacks.
             *
             * See also: vips_blob_new().
             */
            static copy(data: Uint8Array | string): Blob;
        }

        export class Buf {
            static $gtype: GObject.GType<Buf>;

            constructor(copy: Buf);
        }

        /**
         * A structure available to eval callbacks giving information on evaluation
         * progress. See #VipsImage::eval.
         */
        export class Progress {
            static $gtype: GObject.GType<Progress>;

            constructor(
                properties?: Partial<{
                    run: number;
                    eta: number;
                    tpels: number;
                    npels: number;
                    percent: number;
                }>
            );
            constructor(copy: Progress);

            // Fields
            run: number;
            eta: number;
            tpels: number;
            npels: number;
            percent: number;

            // Members
            /**
             * If set, vips will print messages about the progress of computation to
             * stdout. This can also be enabled with the --vips-progress option, or by
             * setting the environment variable VIPS_PROGRESS.
             */
            static set(progress: boolean): void;
        }

        /**
         * A #VipsRect is a rectangular area of pixels. This is a struct for
         * performing simple rectangle algebra.
         */
        export class Rect {
            static $gtype: GObject.GType<Rect>;

            constructor(
                properties?: Partial<{
                    left: number;
                    top: number;
                    width: number;
                    height: number;
                }>
            );
            constructor(copy: Rect);

            // Fields
            left: number;
            top: number;
            width: number;
            height: number;

            // Members
            /**
             * Is r1 equal to r2?
             */
            equalsrect(r2: Rect): boolean;
            /**
             * Does `r `contain point (x, y)?
             */
            includespoint(x: number, y: number): boolean;
            /**
             * Is r2 a subset of r1?
             */
            includesrect(r2: Rect): boolean;
            /**
             * Fill `out `with the intersection of r1 and r2. `out `can equal r1 or r2.
             */
            intersectrect(r2: Rect): Rect;
            /**
             * Is `r `empty? ie. zero width or height.
             */
            isempty(): boolean;
            /**
             * Enlarge `r `by `n.` +1 means out one pixel.
             */
            marginadjust(n: number): void;
            /**
             * Make sure width and height are &gt;0 by moving the origin and flipping the
             * rect.
             */
            normalise(): void;
            /**
             * Do r1 and r2 have a non-empty intersection?
             */
            overlapsrect(r2: Rect): boolean;
            /**
             * Fill `out `with the bounding box of r1 and r2. `out `can equal r1 or r2.
             */
            unionrect(r2: Rect): Rect;
        }

        export class RefString {
            static $gtype: GObject.GType<RefString>;

            constructor(str: string);
            constructor(copy: RefString);

            // Constructors
            static ["new"](str: string): RefString;

            // Members
            /**
             * Get a pointer to the private string inside a refstr. Handy for language
             * bindings.
             *
             * See also: vips_value_get_ref_string().
             */
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
                    i: number;
                }>
            );
            constructor(copy: Thing);

            // Fields
            i: number;

            // Constructors
            static ["new"](i: number): Thing;
        }
        export type ArgumentTable = GLib.HashTable;
        /**
         * A picture element. Cast this to whatever the associated VipsBandFormat says
         * to get the value.
         */
        export type Pel = number;

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

    export default Vips8;
}

declare module "gi://Vips" {
    export { default } from "gi://Vips?version=8.0";
}
