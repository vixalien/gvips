// this file is generated automatically -- do not edit!

import * as Vips from "gi-types/vips8";

type Options<
  Options extends Record<string, any>,
  Output extends (string | number | symbol)[] | void = void,
> = Options & (Output extends void ? {} : { output?: Output });

type PartialUnion<T> = T extends infer U ? Partial<U> : never;

type FilteredOptional<
  Options extends Record<string, any>,
  Given extends string | number | symbol,
> = Given extends void ? never : Extract<keyof Options, Given>;

export class Image extends Vips.Image {
  /**
   * absolute value of an image
   * @param __input - this - Input image
   */
  abs(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * affine transform of an image
   * @param __input - this - Input image argument
   * @param matrix - Transformation matrix
   * @param [options] - optional parameters
   * @param [options.interpolate] - Interpolate pixels with this
   * @param [options.oarea] - Area of output to generate
   * @param [options.odx] - Horizontal output displacement
   * @param [options.ody] - Vertical output displacement
   * @param [options.idx] - Horizontal input displacement
   * @param [options.idy] - Vertical input displacement
   * @param [options.background] - Background value
   * @param [options.premultiplied] - Images have premultiplied alpha
   * @param [options.extend] - How to generate the extra pixels
   */
  affine(
    matrix: number[],
    options?: Options<
      {
        string_options?: string;
        interpolate?: Vips.Interpolate;
        oarea?: number[];
        odx?: number;
        ody?: number;
        idx?: number;
        idy?: number;
        background?: number[];
        premultiplied?: boolean;
        extend?: Vips.Extend;
      }  
    >,
  ): Vips.Image;

  /**
   * load an Analyze6 image
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static analyzeload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * join an array of images
  
   * @param [options] - optional parameters
   * @param [options.across] - Number of images across grid
   * @param [options.shim] - Pixels between images
   * @param [options.background] - Colour for new pixels
   * @param [options.halign] - Align on the left, centre or right
   * @param [options.valign] - Align on the top, centre or bottom
   * @param [options.hspacing] - Horizontal spacing between images
   * @param [options.vspacing] - Vertical spacing between images
   */
  static arrayjoin(
    options?: Options<
      {
        string_options?: string;
        across?: number;
        shim?: number;
        background?: number[];
        halign?: Vips.Align;
        valign?: Vips.Align;
        hspacing?: number;
        vspacing?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * autorotate image by exif tag
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.angle] - Output - Angle image was rotated by
   * @param [options.flip] - Output - Whether the image was flipped or not
   */
  autorot<
    Output extends {
      angle: Vips.Angle;
      flip: boolean;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    options?: Options<
      {
        string_options?: string;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * find image average
   * @param __input - this - Input image
   */
  avg(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): number;

  /**
   * boolean operation across image bands
   * @param __input - this - Input image argument
   * @param boolean - Boolean to perform */
  bandbool(
    boolean: Vips.OperationBoolean,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * fold up x axis into bands
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.factor] - Fold by this factor
   */
  bandfold(
    options?: Options<
      {
        string_options?: string;
        factor?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * append a constant band to an image
   * @param __input - this - Input image
   * @param c - Array of constants to add */
  bandjoin_const(
    c: number[],
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * band-wise average
   * @param __input - this - Input image argument
   */
  bandmean(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * unfold image bands into x axis
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.factor] - Unfold by this factor
   */
  bandunfold(
    options?: Options<
      {
        string_options?: string;
        factor?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * make a black image
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param [options] - optional parameters
   * @param [options.bands] - Number of bands in image
   */
  static black(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        bands?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * boolean operation on two images
   * @param left - this - Left-hand image argument
   * @param right - Right-hand image argument
   * @param boolean - Boolean to perform */
  boolean(
    right: Vips.Image,
    boolean: Vips.OperationBoolean,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * boolean operations against a constant
   * @param __input - this - Input image
   * @param boolean - Boolean to perform
   * @param c - Array of constants */
  boolean_const(
    boolean: Vips.OperationBoolean,
    c: number[],
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * build a look-up table
   * @param __input - this - Matrix of XY coordinates
   */
  buildlut(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * byteswap an image
   * @param __input - this - Input image
   */
  byteswap(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * cache an image
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.max_tiles] - Maximum number of tiles to cache
   * @param [options.tile_height] - Tile height in pixels
   * @param [options.tile_width] - Tile width in pixels
   */
  cache(
    options?: Options<
      {
        string_options?: string;
        max_tiles?: number;
        tile_height?: number;
        tile_width?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * Canny edge detector
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.sigma] - Sigma of Gaussian
   * @param [options.precision] - Convolve with this precision
   */
  canny(
    options?: Options<
      {
        string_options?: string;
        sigma?: number;
        precision?: Vips.Precision;
      }  
    >,
  ): Vips.Image;

  /**
   * use pixel values to pick cases from an array of images
   * @param index - this - Index image
   * @param cases - Array of case images */
  case(
    cases: Vips.Image[],
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * cast an image
   * @param __input - this - Input image
   * @param format - Format to cast to
   * @param [options] - optional parameters
   * @param [options.shift] - Shift integer values up and down
   */
  cast(
    format: Vips.BandFormat,
    options?: Options<
      {
        string_options?: string;
        shift?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * transform LCh to CMC
   * @param __input - this - Input image
   */
  CMC2LCh(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform CMYK to XYZ
   * @param __input - this - Input image
   */
  CMYK2XYZ(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * convert to a new colorspace
   * @param __input - this - Input image
   * @param space - Destination color space
   * @param [options] - optional parameters
   * @param [options.source_space] - Source color space
   */
  colourspace(
    space: Vips.Interpretation,
    options?: Options<
      {
        string_options?: string;
        source_space?: Vips.Interpretation;
      }  
    >,
  ): Vips.Image;

  /**
   * convolve with rotating mask
   * @param __input - this - Input image argument
   * @param mask - Input matrix image
   * @param [options] - optional parameters
   * @param [options.times] - Rotate and convolve this many times
   * @param [options.angle] - Rotate mask by this much between convolutions
   * @param [options.combine] - Combine convolution results like this
   * @param [options.precision] - Convolve with this precision
   * @param [options.layers] - Use this many layers in approximation
   * @param [options.cluster] - Cluster lines closer than this in approximation
   */
  compass(
    mask: Vips.Image,
    options?: Options<
      {
        string_options?: string;
        times?: number;
        angle?: Vips.Angle45;
        combine?: Vips.Combine;
        precision?: Vips.Precision;
        layers?: number;
        cluster?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * perform a complex operation on an image
   * @param __input - this - Input image
   * @param cmplx - Complex to perform */
  complex(
    cmplx: Vips.OperationComplex,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * complex binary operations on two images
   * @param left - this - Left-hand image argument
   * @param right - Right-hand image argument
   * @param cmplx - Binary complex operation to perform */
  complex2(
    right: Vips.Image,
    cmplx: Vips.OperationComplex2,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * form a complex image from two real images
   * @param left - this - Left-hand image argument
   * @param right - Right-hand image argument */
  complexform(
    right: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * get a component from a complex image
   * @param __input - this - Input image
   * @param get - Complex to perform */
  complexget(
    get: Vips.OperationComplexget,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * blend an array of images with an array of blend modes
   * @param mode - Array of VipsBlendMode to join with
   * @param [options] - optional parameters
   * @param [options.x] - Array of x coordinates to join at
   * @param [options.y] - Array of y coordinates to join at
   * @param [options.compositing_space] - Composite images in this colour space
   * @param [options.premultiplied] - Images have premultiplied alpha
   */
  static composite(
    mode: number[],
    options?: Options<
      {
        string_options?: string;
        x?: number[];
        y?: number[];
        compositing_space?: Vips.Interpretation;
        premultiplied?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * blend a pair of images with a blend mode
   * @param base - this - Base image
   * @param overlay - Overlay image
   * @param mode - VipsBlendMode to join with
   * @param [options] - optional parameters
   * @param [options.x] - x position of overlay
   * @param [options.y] - y position of overlay
   * @param [options.compositing_space] - Composite images in this colour space
   * @param [options.premultiplied] - Images have premultiplied alpha
   */
  composite2(
    overlay: Vips.Image,
    mode: Vips.BlendMode,
    options?: Options<
      {
        string_options?: string;
        x?: number;
        y?: number;
        compositing_space?: Vips.Interpretation;
        premultiplied?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * convolution operation
   * @param __input - this - Input image argument
   * @param mask - Input matrix image
   * @param [options] - optional parameters
   * @param [options.precision] - Convolve with this precision
   * @param [options.layers] - Use this many layers in approximation
   * @param [options.cluster] - Cluster lines closer than this in approximation
   */
  conv(
    mask: Vips.Image,
    options?: Options<
      {
        string_options?: string;
        precision?: Vips.Precision;
        layers?: number;
        cluster?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * approximate integer convolution
   * @param __input - this - Input image argument
   * @param mask - Input matrix image
   * @param [options] - optional parameters
   * @param [options.layers] - Use this many layers in approximation
   * @param [options.cluster] - Cluster lines closer than this in approximation
   */
  conva(
    mask: Vips.Image,
    options?: Options<
      {
        string_options?: string;
        layers?: number;
        cluster?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * approximate separable integer convolution
   * @param __input - this - Input image argument
   * @param mask - Input matrix image
   * @param [options] - optional parameters
   * @param [options.layers] - Use this many layers in approximation
   */
  convasep(
    mask: Vips.Image,
    options?: Options<
      {
        string_options?: string;
        layers?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * float convolution operation
   * @param __input - this - Input image argument
   * @param mask - Input matrix image */
  convf(
    mask: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * int convolution operation
   * @param __input - this - Input image argument
   * @param mask - Input matrix image */
  convi(
    mask: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * seperable convolution operation
   * @param __input - this - Input image argument
   * @param mask - Input matrix image
   * @param [options] - optional parameters
   * @param [options.precision] - Convolve with this precision
   * @param [options.layers] - Use this many layers in approximation
   * @param [options.cluster] - Cluster lines closer than this in approximation
   */
  convsep(
    mask: Vips.Image,
    options?: Options<
      {
        string_options?: string;
        precision?: Vips.Precision;
        layers?: number;
        cluster?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * copy an image
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.width] - Image width in pixels
   * @param [options.height] - Image height in pixels
   * @param [options.bands] - Number of bands in image
   * @param [options.format] - Pixel format in image
   * @param [options.coding] - Pixel coding
   * @param [options.interpretation] - Pixel interpretation
   * @param [options.xres] - Horizontal resolution in pixels/mm
   * @param [options.yres] - Vertical resolution in pixels/mm
   * @param [options.xoffset] - Horizontal offset of origin
   * @param [options.yoffset] - Vertical offset of origin
   */
  copy(
    options?: Options<
      {
        string_options?: string;
        width?: number;
        height?: number;
        bands?: number;
        format?: Vips.BandFormat;
        coding?: Vips.Coding;
        interpretation?: Vips.Interpretation;
        xres?: number;
        yres?: number;
        xoffset?: number;
        yoffset?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * count lines in an image
   * @param __input - this - Input image argument
   * @param direction - Countlines left-right or up-down */
  countlines(
    direction: Vips.Direction,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): number;

  /**
   * load csv
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.skip] - Skip this many lines at the start of the file
   * @param [options.lines] - Read this many lines from the file
   * @param [options.whitespace] - Set of whitespace characters
   * @param [options.separator] - Set of separator characters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static csvload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        skip?: number;
        lines?: number;
        whitespace?: string;
        separator?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load csv
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.skip] - Skip this many lines at the start of the file
   * @param [options.lines] - Read this many lines from the file
   * @param [options.whitespace] - Set of whitespace characters
   * @param [options.separator] - Set of separator characters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static csvload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        skip?: number;
        lines?: number;
        whitespace?: string;
        separator?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image to csv
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.separator] - Separator characters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  csvsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        separator?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image to csv
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.separator] - Separator characters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  csvsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        separator?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * calculate dE00
   * @param left - this - Left-hand input image
   * @param right - Right-hand input image */
  dE00(
    right: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * calculate dE76
   * @param left - this - Left-hand input image
   * @param right - Right-hand input image */
  dE76(
    right: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * calculate dECMC
   * @param left - this - Left-hand input image
   * @param right - Right-hand input image */
  dECMC(
    right: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * find image standard deviation
   * @param __input - this - Input image
   */
  deviate(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): number;

  /**
   * draw a circle on an image
   * @param image - this - Image to draw on
   * @param ink - Color for pixels
   * @param cx - Centre of draw_circle
   * @param cy - Centre of draw_circle
   * @param radius - Radius in pixels
   * @param [options] - optional parameters
   * @param [options.fill] - Draw a solid object
   */
  draw_circle(
    ink: number[],
    cx: number,
    cy: number,
    radius: number,
    options?: Options<
      {
        string_options?: string;
        fill?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * flood-fill an area
   * @param image - this - Image to draw on
   * @param ink - Color for pixels
   * @param x - DrawFlood start point
   * @param y - DrawFlood start point
   * @param [options] - optional parameters
   * @param [options.test] - Test pixels in this image
   * @param [options.equal] - DrawFlood while equal to edge
   * @param [options.left] - Output - Left edge of modified area
   * @param [options.top] - Output - Top edge of modified area
   * @param [options.width] - Output - Width of modified area
   * @param [options.height] - Output - Height of modified area
   */
  draw_flood<
    Output extends {
      left: number;
      top: number;
      width: number;
      height: number;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    ink: number[],
    x: number,
    y: number,
    options?: Options<
      {
        string_options?: string;
        test?: Vips.Image;
        equal?: boolean;
      },
      NeededOutput[]  
    >,
  ): [
    image: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * paint an image into another image
   * @param image - this - Image to draw on
   * @param sub - Sub-image to insert into main image
   * @param x - Draw image here
   * @param y - Draw image here
   * @param [options] - optional parameters
   * @param [options.mode] - Combining mode
   */
  draw_image(
    sub: Vips.Image,
    x: number,
    y: number,
    options?: Options<
      {
        string_options?: string;
        mode?: Vips.CombineMode;
      }  
    >,
  ): Vips.Image;

  /**
   * draw a line on an image
   * @param image - this - Image to draw on
   * @param ink - Color for pixels
   * @param x1 - Start of draw_line
   * @param y1 - Start of draw_line
   * @param x2 - End of draw_line
   * @param y2 - End of draw_line */
  draw_line(
    ink: number[],
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * draw a mask on an image
   * @param image - this - Image to draw on
   * @param ink - Color for pixels
   * @param mask - Mask of pixels to draw
   * @param x - Draw mask here
   * @param y - Draw mask here */
  draw_mask(
    ink: number[],
    mask: Vips.Image,
    x: number,
    y: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * paint a rectangle on an image
   * @param image - this - Image to draw on
   * @param ink - Color for pixels
   * @param left - Rect to fill
   * @param top - Rect to fill
   * @param width - Rect to fill
   * @param height - Rect to fill
   * @param [options] - optional parameters
   * @param [options.fill] - Draw a solid object
   */
  draw_rect(
    ink: number[],
    left: number,
    top: number,
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        fill?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * blur a rectangle on an image
   * @param image - this - Image to draw on
   * @param left - Rect to fill
   * @param top - Rect to fill
   * @param width - Rect to fill
   * @param height - Rect to fill */
  draw_smudge(
    left: number,
    top: number,
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * save image to deepzoom file
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.basename] - Base name to save to
   * @param [options.layout] - Directory layout
   * @param [options.suffix] - Filename suffix for tiles
   * @param [options.overlap] - Tile overlap in pixels
   * @param [options.tile_size] - Tile size in pixels
   * @param [options.centre] - Center image in tile
   * @param [options.depth] - Pyramid depth
   * @param [options.angle] - Rotate image during save
   * @param [options.container] - Pyramid container type
   * @param [options.compression] - ZIP deflate compression level
   * @param [options.region_shrink] - Method to shrink regions
   * @param [options.skip_blanks] - Skip tiles which are nearly equal to the background
   * @param [options.no_strip] - Don't strip tile metadata
   * @param [options.id] - Resource ID
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  dzsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        basename?: string;
        layout?: Vips.ForeignDzLayout;
        suffix?: string;
        overlap?: number;
        tile_size?: number;
        centre?: boolean;
        depth?: Vips.ForeignDzDepth;
        angle?: Vips.Angle;
        container?: Vips.ForeignDzContainer;
        compression?: number;
        region_shrink?: Vips.RegionShrink;
        skip_blanks?: number;
        no_strip?: boolean;
        id?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image to dz buffer
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.basename] - Base name to save to
   * @param [options.layout] - Directory layout
   * @param [options.suffix] - Filename suffix for tiles
   * @param [options.overlap] - Tile overlap in pixels
   * @param [options.tile_size] - Tile size in pixels
   * @param [options.centre] - Center image in tile
   * @param [options.depth] - Pyramid depth
   * @param [options.angle] - Rotate image during save
   * @param [options.container] - Pyramid container type
   * @param [options.compression] - ZIP deflate compression level
   * @param [options.region_shrink] - Method to shrink regions
   * @param [options.skip_blanks] - Skip tiles which are nearly equal to the background
   * @param [options.no_strip] - Don't strip tile metadata
   * @param [options.id] - Resource ID
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  dzsave_buffer(
    options?: Options<
      {
        string_options?: string;
        basename?: string;
        layout?: Vips.ForeignDzLayout;
        suffix?: string;
        overlap?: number;
        tile_size?: number;
        centre?: boolean;
        depth?: Vips.ForeignDzDepth;
        angle?: Vips.Angle;
        container?: Vips.ForeignDzContainer;
        compression?: number;
        region_shrink?: Vips.RegionShrink;
        skip_blanks?: number;
        no_strip?: boolean;
        id?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): Vips.Blob;

  /**
   * save image to deepzoom target
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.basename] - Base name to save to
   * @param [options.layout] - Directory layout
   * @param [options.suffix] - Filename suffix for tiles
   * @param [options.overlap] - Tile overlap in pixels
   * @param [options.tile_size] - Tile size in pixels
   * @param [options.centre] - Center image in tile
   * @param [options.depth] - Pyramid depth
   * @param [options.angle] - Rotate image during save
   * @param [options.container] - Pyramid container type
   * @param [options.compression] - ZIP deflate compression level
   * @param [options.region_shrink] - Method to shrink regions
   * @param [options.skip_blanks] - Skip tiles which are nearly equal to the background
   * @param [options.no_strip] - Don't strip tile metadata
   * @param [options.id] - Resource ID
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  dzsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        basename?: string;
        layout?: Vips.ForeignDzLayout;
        suffix?: string;
        overlap?: number;
        tile_size?: number;
        centre?: boolean;
        depth?: Vips.ForeignDzDepth;
        angle?: Vips.Angle;
        container?: Vips.ForeignDzContainer;
        compression?: number;
        region_shrink?: Vips.RegionShrink;
        skip_blanks?: number;
        no_strip?: boolean;
        id?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * embed an image in a larger image
   * @param __input - this - Input image
   * @param x - Left edge of input in output
   * @param y - Top edge of input in output
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param [options] - optional parameters
   * @param [options.extend] - How to generate the extra pixels
   * @param [options.background] - Color for background pixels
   */
  embed(
    x: number,
    y: number,
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        extend?: Vips.Extend;
        background?: number[];
      }  
    >,
  ): Vips.Image;

  /**
   * extract an area from an image
   * @param input - this - Input image
   * @param left - Left edge of extract area
   * @param top - Top edge of extract area
   * @param width - Width of extract area
   * @param height - Height of extract area */
  extract_area(
    left: number,
    top: number,
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * extract an area from an image
   * @param input - this - Input image
   * @param left - Left edge of extract area
   * @param top - Top edge of extract area
   * @param width - Width of extract area
   * @param height - Height of extract area */
  extract_area(
    left: number,
    top: number,
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * extract band from an image
   * @param __input - this - Input image
   * @param band - Band to extract
   * @param [options] - optional parameters
   * @param [options.n] - Number of bands to extract
   */
  extract_band(
    band: number,
    options?: Options<
      {
        string_options?: string;
        n?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * make an image showing the eye's spatial response
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.factor] - Maximum spatial frequency
   */
  static eye(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        factor?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * false-color an image
   * @param __input - this - Input image
   */
  falsecolour(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * fast correlation
   * @param __input - this - Input image argument
   * @param ref - Input reference image */
  fastcor(
    ref: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * fill image zeros with nearest non-zero pixel
   * @param __input - this - Input image argument
  
   * @param [options] - optional parameters
   * @param [options.distance] - Output - Distance to nearest non-zero pixel
   */
  fill_nearest<
    Output extends {
      distance: Vips.Image;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    options?: Options<
      {
        string_options?: string;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * search an image for non-edge areas
   * @param __input - this - Image to find_trim
  
   * @param [options] - optional parameters
   * @param [options.threshold] - Object threshold
   * @param [options.background] - Color for background pixels
   */
  find_trim(
    options?: Options<
      {
        string_options?: string;
        threshold?: number;
        background?: number[];
      }  
    >,
  ): [
    left: number,
    top: number,
    width: number,
    height: number,];

  /**
   * load a FITS image
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static fitsload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load FITS from a source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static fitsload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image to fits file
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  fitssave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * flatten alpha out of an image
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.background] - Background value
   * @param [options.max_alpha] - Maximum value of alpha channel
   */
  flatten(
    options?: Options<
      {
        string_options?: string;
        background?: number[];
        max_alpha?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * flip an image
   * @param __input - this - Input image
   * @param direction - Direction to flip image */
  flip(
    direction: Vips.Direction,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform float RGB to Radiance coding
   * @param __input - this - Input image
   */
  float2rad(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * make a fractal surface
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param fractal_dimension - Fractal dimension */
  static fractsurf(
    width: number,
    height: number,
    fractal_dimension: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * frequency-domain filtering
   * @param __input - this - Input image
   * @param mask - Input mask image */
  freqmult(
    mask: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * forward FFT
   * @param __input - this - Input image
   */
  fwfft(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * gamma an image
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.exponent] - Gamma factor
   */
  gamma(
    options?: Options<
      {
        string_options?: string;
        exponent?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * gaussian blur
   * @param __input - this - Input image
   * @param sigma - Sigma of Gaussian
   * @param [options] - optional parameters
   * @param [options.min_ampl] - Minimum amplitude of Gaussian
   * @param [options.precision] - Convolve with this precision
   */
  gaussblur(
    sigma: number,
    options?: Options<
      {
        string_options?: string;
        min_ampl?: number;
        precision?: Vips.Precision;
      }  
    >,
  ): Vips.Image;

  /**
   * make a gaussian image
   * @param sigma - Sigma of Gaussian
   * @param min_ampl - Minimum amplitude of Gaussian
   * @param [options] - optional parameters
   * @param [options.separable] - Generate separable Gaussian
   * @param [options.precision] - Generate with this precision
   */
  static gaussmat(
    sigma: number,
    min_ampl: number,
    options?: Options<
      {
        string_options?: string;
        separable?: boolean;
        precision?: Vips.Precision;
      }  
    >,
  ): Vips.Image;

  /**
   * make a gaussnoise image
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param [options] - optional parameters
   * @param [options.sigma] - Standard deviation of pixels in generated image
   * @param [options.mean] - Mean of pixels in generated image
   * @param [options.seed] - Random number seed
   */
  static gaussnoise(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        sigma?: number;
        mean?: number;
        seed?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * read a point from an image
   * @param __input - this - Input image
   * @param x - Point to read
   * @param y - Point to read */
  getpoint(
    x: number,
    y: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): number[];

  /**
   * load GIF with libnsgif
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.page] - First page to load
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static gifload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        n?: number;
        page?: number;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load GIF with libnsgif
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.page] - First page to load
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static gifload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        n?: number;
        page?: number;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load gif from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.page] - First page to load
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static gifload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        n?: number;
        page?: number;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save as gif
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.dither] - Amount of dithering
   * @param [options.effort] - Quantisation effort
   * @param [options.bitdepth] - Number of bits per pixel
   * @param [options.interframe_maxerror] - Maximum inter-frame error for transparency
   * @param [options.reuse] - Reuse palette from input
   * @param [options.interpalette_maxerror] - Maximum inter-palette error for palette reusage
   * @param [options.interlace] - Generate an interlaced (progressive) GIF
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  gifsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        dither?: number;
        effort?: number;
        bitdepth?: number;
        interframe_maxerror?: number;
        reuse?: boolean;
        interpalette_maxerror?: number;
        interlace?: boolean;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save as gif
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.dither] - Amount of dithering
   * @param [options.effort] - Quantisation effort
   * @param [options.bitdepth] - Number of bits per pixel
   * @param [options.interframe_maxerror] - Maximum inter-frame error for transparency
   * @param [options.reuse] - Reuse palette from input
   * @param [options.interpalette_maxerror] - Maximum inter-palette error for palette reusage
   * @param [options.interlace] - Generate an interlaced (progressive) GIF
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  gifsave_buffer(
    options?: Options<
      {
        string_options?: string;
        dither?: number;
        effort?: number;
        bitdepth?: number;
        interframe_maxerror?: number;
        reuse?: boolean;
        interpalette_maxerror?: number;
        interlace?: boolean;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): Vips.Blob;

  /**
   * save as gif
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.dither] - Amount of dithering
   * @param [options.effort] - Quantisation effort
   * @param [options.bitdepth] - Number of bits per pixel
   * @param [options.interframe_maxerror] - Maximum inter-frame error for transparency
   * @param [options.reuse] - Reuse palette from input
   * @param [options.interpalette_maxerror] - Maximum inter-palette error for palette reusage
   * @param [options.interlace] - Generate an interlaced (progressive) GIF
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  gifsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        dither?: number;
        effort?: number;
        bitdepth?: number;
        interframe_maxerror?: number;
        reuse?: boolean;
        interpalette_maxerror?: number;
        interlace?: boolean;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * global balance an image mosaic
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.gamma] - Image gamma
   * @param [options.int_output] - Integer output
   */
  globalbalance(
    options?: Options<
      {
        string_options?: string;
        gamma?: number;
        int_output?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * place an image within a larger image with a certain gravity
   * @param __input - this - Input image
   * @param direction - Direction to place image within width/height
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param [options] - optional parameters
   * @param [options.extend] - How to generate the extra pixels
   * @param [options.background] - Color for background pixels
   */
  gravity(
    direction: Vips.CompassDirection,
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        extend?: Vips.Extend;
        background?: number[];
      }  
    >,
  ): Vips.Image;

  /**
   * make a grey ramp image
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   */
  static grey(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * grid an image
   * @param __input - this - Input image
   * @param tile_height - Chop into tiles this high
   * @param across - Number of tiles across
   * @param down - Number of tiles down */
  grid(
    tile_height: number,
    across: number,
    down: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * load a HEIF image
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.thumbnail] - Fetch thumbnail image
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static heifload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        n?: number;
        thumbnail?: boolean;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load a HEIF image
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.thumbnail] - Fetch thumbnail image
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static heifload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        n?: number;
        thumbnail?: boolean;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load a HEIF image
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.thumbnail] - Fetch thumbnail image
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static heifload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        n?: number;
        thumbnail?: boolean;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image in HEIF format
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.Q] - Q factor
   * @param [options.bitdepth] - Number of bits per pixel
   * @param [options.lossless] - Enable lossless compression
   * @param [options.compression] - Compression format
   * @param [options.effort] - CPU effort
   * @param [options.subsample_mode] - Select chroma subsample operation mode
   * @param [options.encoder] - Select encoder to use
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  heifsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        Q?: number;
        bitdepth?: number;
        lossless?: boolean;
        compression?: Vips.ForeignHeifCompression;
        effort?: number;
        subsample_mode?: Vips.ForeignSubsample;
        encoder?: Vips.ForeignHeifEncoder;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image in HEIF format
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.Q] - Q factor
   * @param [options.bitdepth] - Number of bits per pixel
   * @param [options.lossless] - Enable lossless compression
   * @param [options.compression] - Compression format
   * @param [options.effort] - CPU effort
   * @param [options.subsample_mode] - Select chroma subsample operation mode
   * @param [options.encoder] - Select encoder to use
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  heifsave_buffer(
    options?: Options<
      {
        string_options?: string;
        Q?: number;
        bitdepth?: number;
        lossless?: boolean;
        compression?: Vips.ForeignHeifCompression;
        effort?: number;
        subsample_mode?: Vips.ForeignSubsample;
        encoder?: Vips.ForeignHeifEncoder;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): Vips.Blob;

  /**
   * save image in HEIF format
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.Q] - Q factor
   * @param [options.bitdepth] - Number of bits per pixel
   * @param [options.lossless] - Enable lossless compression
   * @param [options.compression] - Compression format
   * @param [options.effort] - CPU effort
   * @param [options.subsample_mode] - Select chroma subsample operation mode
   * @param [options.encoder] - Select encoder to use
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  heifsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        Q?: number;
        bitdepth?: number;
        lossless?: boolean;
        compression?: Vips.ForeignHeifCompression;
        effort?: number;
        subsample_mode?: Vips.ForeignSubsample;
        encoder?: Vips.ForeignHeifEncoder;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * form cumulative histogram
   * @param __input - this - Input image
   */
  hist_cum(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * estimate image entropy
   * @param __input - this - Input histogram image
   */
  hist_entropy(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): number;

  /**
   * histogram equalisation
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.band] - Equalise with this band
   */
  hist_equal(
    options?: Options<
      {
        string_options?: string;
        band?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * find image histogram
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.band] - Find histogram of band
   */
  hist_find(
    options?: Options<
      {
        string_options?: string;
        band?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * find indexed image histogram
   * @param __input - this - Input image
   * @param index - Index image
   * @param [options] - optional parameters
   * @param [options.combine] - Combine bins like this
   */
  hist_find_indexed(
    index: Vips.Image,
    options?: Options<
      {
        string_options?: string;
        combine?: Vips.Combine;
      }  
    >,
  ): Vips.Image;

  /**
   * find n-dimensional image histogram
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.bins] - Number of bins in each dimension
   */
  hist_find_ndim(
    options?: Options<
      {
        string_options?: string;
        bins?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * test for monotonicity
   * @param __input - this - Input histogram image
   */
  hist_ismonotonic(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): boolean;

  /**
   * local histogram equalisation
   * @param __input - this - Input image
   * @param width - Window width in pixels
   * @param height - Window height in pixels
   * @param [options] - optional parameters
   * @param [options.max_slope] - Maximum slope (CLAHE)
   */
  hist_local(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        max_slope?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * match two histograms
   * @param __input - this - Input histogram
   * @param ref - Reference histogram */
  hist_match(
    ref: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * normalise histogram
   * @param __input - this - Input image
   */
  hist_norm(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * plot histogram
   * @param __input - this - Input image
   */
  hist_plot(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * find hough circle transform
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.scale] - Scale down dimensions by this factor
   * @param [options.min_radius] - Smallest radius to search for
   * @param [options.max_radius] - Largest radius to search for
   */
  hough_circle(
    options?: Options<
      {
        string_options?: string;
        scale?: number;
        min_radius?: number;
        max_radius?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * find hough line transform
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.width] - Horizontal size of parameter space
   * @param [options.height] - Vertical size of parameter space
   */
  hough_line(
    options?: Options<
      {
        string_options?: string;
        width?: number;
        height?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * transform HSV to sRGB
   * @param __input - this - Input image
   */
  HSV2sRGB(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * output to device with ICC profile
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.pcs] - Set Profile Connection Space
   * @param [options.intent] - Rendering intent
   * @param [options.black_point_compensation] - Enable black point compensation
   * @param [options.output_profile] - Filename to load output profile from
   * @param [options.depth] - Output device space depth in bits
   */
  icc_export(
    options?: Options<
      {
        string_options?: string;
        pcs?: Vips.PCS;
        intent?: Vips.Intent;
        black_point_compensation?: boolean;
        output_profile?: string;
        depth?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * import from device with ICC profile
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.pcs] - Set Profile Connection Space
   * @param [options.intent] - Rendering intent
   * @param [options.black_point_compensation] - Enable black point compensation
   * @param [options.embedded] - Use embedded input profile, if available
   * @param [options.input_profile] - Filename to load input profile from
   */
  icc_import(
    options?: Options<
      {
        string_options?: string;
        pcs?: Vips.PCS;
        intent?: Vips.Intent;
        black_point_compensation?: boolean;
        embedded?: boolean;
        input_profile?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform between devices with ICC profiles
   * @param __input - this - Input image
   * @param output_profile - Filename to load output profile from
   * @param [options] - optional parameters
   * @param [options.pcs] - Set Profile Connection Space
   * @param [options.intent] - Rendering intent
   * @param [options.black_point_compensation] - Enable black point compensation
   * @param [options.embedded] - Use embedded input profile, if available
   * @param [options.input_profile] - Filename to load input profile from
   * @param [options.depth] - Output device space depth in bits
   */
  icc_transform(
    output_profile: string,
    options?: Options<
      {
        string_options?: string;
        pcs?: Vips.PCS;
        intent?: Vips.Intent;
        black_point_compensation?: boolean;
        embedded?: boolean;
        input_profile?: string;
        depth?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * make a 1D image where pixel values are indexes
  
   * @param [options] - optional parameters
   * @param [options.bands] - Number of bands in LUT
   * @param [options.ushort] - Create a 16-bit LUT
   * @param [options.size] - Size of 16-bit LUT
   */
  static identity(
    options?: Options<
      {
        string_options?: string;
        bands?: number;
        ushort?: boolean;
        size?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * insert image @sub into @main at @x, @y
   * @param main - this - Main input image
   * @param sub - Sub-image to insert into main image
   * @param x - Left edge of sub in main
   * @param y - Top edge of sub in main
   * @param [options] - optional parameters
   * @param [options.expand] - Expand output to hold all of both inputs
   * @param [options.background] - Color for new pixels
   */
  insert(
    sub: Vips.Image,
    x: number,
    y: number,
    options?: Options<
      {
        string_options?: string;
        expand?: boolean;
        background?: number[];
      }  
    >,
  ): Vips.Image;

  /**
   * invert an image
   * @param __input - this - Input image
   */
  invert(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * build an inverted look-up table
   * @param __input - this - Matrix of XY coordinates
  
   * @param [options] - optional parameters
   * @param [options.size] - LUT size to generate
   */
  invertlut(
    options?: Options<
      {
        string_options?: string;
        size?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * inverse FFT
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.real] - Output only the real part of the transform
   */
  invfft(
    options?: Options<
      {
        string_options?: string;
        real?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * join a pair of images
   * @param in1 - this - First input image
   * @param in2 - Second input image
   * @param direction - Join left-right or up-down
   * @param [options] - optional parameters
   * @param [options.expand] - Expand output to hold all of both inputs
   * @param [options.shim] - Pixels between images
   * @param [options.background] - Colour for new pixels
   * @param [options.align] - Align on the low, centre or high coordinate edge
   */
  join(
    in2: Vips.Image,
    direction: Vips.Direction,
    options?: Options<
      {
        string_options?: string;
        expand?: boolean;
        shim?: number;
        background?: number[];
        align?: Vips.Align;
      }  
    >,
  ): Vips.Image;

  /**
   * load JPEG2000 image
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.page] - Load this page from the image
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static jp2kload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load JPEG2000 image
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.page] - Load this page from the image
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static jp2kload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load JPEG2000 image
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.page] - Load this page from the image
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static jp2kload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image in JPEG2000 format
   * @param __input - this - Image to save
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.tile_width] - Tile width in pixels
   * @param [options.tile_height] - Tile height in pixels
   * @param [options.lossless] - Enable lossless compression
   * @param [options.Q] - Q factor
   * @param [options.subsample_mode] - Select chroma subsample operation mode
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  jp2ksave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        tile_width?: number;
        tile_height?: number;
        lossless?: boolean;
        Q?: number;
        subsample_mode?: Vips.ForeignSubsample;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image in JPEG2000 format
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.tile_width] - Tile width in pixels
   * @param [options.tile_height] - Tile height in pixels
   * @param [options.lossless] - Enable lossless compression
   * @param [options.Q] - Q factor
   * @param [options.subsample_mode] - Select chroma subsample operation mode
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  jp2ksave_buffer(
    options?: Options<
      {
        string_options?: string;
        tile_width?: number;
        tile_height?: number;
        lossless?: boolean;
        Q?: number;
        subsample_mode?: Vips.ForeignSubsample;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): Vips.Blob;

  /**
   * save image in JPEG2000 format
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.tile_width] - Tile width in pixels
   * @param [options.tile_height] - Tile height in pixels
   * @param [options.lossless] - Enable lossless compression
   * @param [options.Q] - Q factor
   * @param [options.subsample_mode] - Select chroma subsample operation mode
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  jp2ksave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        tile_width?: number;
        tile_height?: number;
        lossless?: boolean;
        Q?: number;
        subsample_mode?: Vips.ForeignSubsample;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * load jpeg from file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.shrink] - Shrink factor on load
   * @param [options.autorotate] - Rotate image using exif orientation
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static jpegload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        shrink?: number;
        autorotate?: boolean;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load jpeg from buffer
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.shrink] - Shrink factor on load
   * @param [options.autorotate] - Rotate image using exif orientation
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static jpegload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        shrink?: number;
        autorotate?: boolean;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load image from jpeg source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.shrink] - Shrink factor on load
   * @param [options.autorotate] - Rotate image using exif orientation
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static jpegload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        shrink?: number;
        autorotate?: boolean;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image to jpeg file
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.Q] - Q factor
   * @param [options.profile] - ICC profile to embed
   * @param [options.optimize_coding] - Compute optimal Huffman coding tables
   * @param [options.interlace] - Generate an interlaced (progressive) jpeg
   * @param [options.trellis_quant] - Apply trellis quantisation to each 8x8 block
   * @param [options.overshoot_deringing] - Apply overshooting to samples with extreme values
   * @param [options.optimize_scans] - Split spectrum of DCT coefficients into separate scans
   * @param [options.quant_table] - Use predefined quantization table with given index
   * @param [options.subsample_mode] - Select chroma subsample operation mode
   * @param [options.restart_interval] - Add restart markers every specified number of mcu
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  jpegsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        Q?: number;
        profile?: string;
        optimize_coding?: boolean;
        interlace?: boolean;
        trellis_quant?: boolean;
        overshoot_deringing?: boolean;
        optimize_scans?: boolean;
        quant_table?: number;
        subsample_mode?: Vips.ForeignSubsample;
        restart_interval?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image to jpeg buffer
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.Q] - Q factor
   * @param [options.profile] - ICC profile to embed
   * @param [options.optimize_coding] - Compute optimal Huffman coding tables
   * @param [options.interlace] - Generate an interlaced (progressive) jpeg
   * @param [options.trellis_quant] - Apply trellis quantisation to each 8x8 block
   * @param [options.overshoot_deringing] - Apply overshooting to samples with extreme values
   * @param [options.optimize_scans] - Split spectrum of DCT coefficients into separate scans
   * @param [options.quant_table] - Use predefined quantization table with given index
   * @param [options.subsample_mode] - Select chroma subsample operation mode
   * @param [options.restart_interval] - Add restart markers every specified number of mcu
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  jpegsave_buffer(
    options?: Options<
      {
        string_options?: string;
        Q?: number;
        profile?: string;
        optimize_coding?: boolean;
        interlace?: boolean;
        trellis_quant?: boolean;
        overshoot_deringing?: boolean;
        optimize_scans?: boolean;
        quant_table?: number;
        subsample_mode?: Vips.ForeignSubsample;
        restart_interval?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): Vips.Blob;

  /**
   * save image to jpeg mime
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.Q] - Q factor
   * @param [options.profile] - ICC profile to embed
   * @param [options.optimize_coding] - Compute optimal Huffman coding tables
   * @param [options.interlace] - Generate an interlaced (progressive) jpeg
   * @param [options.trellis_quant] - Apply trellis quantisation to each 8x8 block
   * @param [options.overshoot_deringing] - Apply overshooting to samples with extreme values
   * @param [options.optimize_scans] - Split spectrum of DCT coefficients into separate scans
   * @param [options.quant_table] - Use predefined quantization table with given index
   * @param [options.subsample_mode] - Select chroma subsample operation mode
   * @param [options.restart_interval] - Add restart markers every specified number of mcu
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  jpegsave_mime(
    options?: Options<
      {
        string_options?: string;
        Q?: number;
        profile?: string;
        optimize_coding?: boolean;
        interlace?: boolean;
        trellis_quant?: boolean;
        overshoot_deringing?: boolean;
        optimize_scans?: boolean;
        quant_table?: number;
        subsample_mode?: Vips.ForeignSubsample;
        restart_interval?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image to jpeg target
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.Q] - Q factor
   * @param [options.profile] - ICC profile to embed
   * @param [options.optimize_coding] - Compute optimal Huffman coding tables
   * @param [options.interlace] - Generate an interlaced (progressive) jpeg
   * @param [options.trellis_quant] - Apply trellis quantisation to each 8x8 block
   * @param [options.overshoot_deringing] - Apply overshooting to samples with extreme values
   * @param [options.optimize_scans] - Split spectrum of DCT coefficients into separate scans
   * @param [options.quant_table] - Use predefined quantization table with given index
   * @param [options.subsample_mode] - Select chroma subsample operation mode
   * @param [options.restart_interval] - Add restart markers every specified number of mcu
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  jpegsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        Q?: number;
        profile?: string;
        optimize_coding?: boolean;
        interlace?: boolean;
        trellis_quant?: boolean;
        overshoot_deringing?: boolean;
        optimize_scans?: boolean;
        quant_table?: number;
        subsample_mode?: Vips.ForeignSubsample;
        restart_interval?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * load JPEG-XL image
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static jxlload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load JPEG-XL image
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static jxlload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load JPEG-XL image
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static jxlload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image in JPEG-XL format
   * @param __input - this - Image to save
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.tier] - Decode speed tier
   * @param [options.distance] - Target butteraugli distance
   * @param [options.effort] - Encoding effort
   * @param [options.lossless] - Enable lossless compression
   * @param [options.Q] - Quality factor
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  jxlsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        tier?: number;
        distance?: number;
        effort?: number;
        lossless?: boolean;
        Q?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image in JPEG-XL format
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.tier] - Decode speed tier
   * @param [options.distance] - Target butteraugli distance
   * @param [options.effort] - Encoding effort
   * @param [options.lossless] - Enable lossless compression
   * @param [options.Q] - Quality factor
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  jxlsave_buffer(
    options?: Options<
      {
        string_options?: string;
        tier?: number;
        distance?: number;
        effort?: number;
        lossless?: boolean;
        Q?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): Vips.Blob;

  /**
   * save image in JPEG-XL format
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.tier] - Decode speed tier
   * @param [options.distance] - Target butteraugli distance
   * @param [options.effort] - Encoding effort
   * @param [options.lossless] - Enable lossless compression
   * @param [options.Q] - Quality factor
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  jxlsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        tier?: number;
        distance?: number;
        effort?: number;
        lossless?: boolean;
        Q?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * transform float Lab to LabQ coding
   * @param __input - this - Input image
   */
  Lab2LabQ(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform float Lab to signed short
   * @param __input - this - Input image
   */
  Lab2LabS(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform Lab to LCh
   * @param __input - this - Input image
   */
  Lab2LCh(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform CIELAB to XYZ
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.temp] - Color temperature
   */
  Lab2XYZ(
    options?: Options<
      {
        string_options?: string;
        temp?: number[];
      }  
    >,
  ): Vips.Image;

  /**
   * label regions in an image
   * @param __input - this - Input image argument
  
   * @param [options] - optional parameters
   * @param [options.segments] - Output - Number of discrete contiguous regions
   */
  labelregions<
    Output extends {
      segments: number;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    options?: Options<
      {
        string_options?: string;
      },
      NeededOutput[]  
    >,
  ): [
    mask: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * unpack a LabQ image to float Lab
   * @param __input - this - Input image
   */
  LabQ2Lab(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * unpack a LabQ image to short Lab
   * @param __input - this - Input image
   */
  LabQ2LabS(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * convert a LabQ image to sRGB
   * @param __input - this - Input image
   */
  LabQ2sRGB(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform signed short Lab to float
   * @param __input - this - Input image
   */
  LabS2Lab(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform short Lab to LabQ coding
   * @param __input - this - Input image
   */
  LabS2LabQ(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform LCh to CMC
   * @param __input - this - Input image
   */
  LCh2CMC(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform LCh to Lab
   * @param __input - this - Input image
   */
  LCh2Lab(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * calculate (a * in + b)
   * @param __input - this - Input image
   * @param a - Multiply by this
   * @param b - Add this
   * @param [options] - optional parameters
   * @param [options.uchar] - Output should be uchar
   */
  linear(
    a: number[],
    b: number[],
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * cache an image as a set of lines
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.tile_height] - Tile height in pixels
   * @param [options.access] - Expected access pattern
   * @param [options.threaded] - Allow threaded access
   * @param [options.persistent] - Keep cache between evaluations
   */
  linecache(
    options?: Options<
      {
        string_options?: string;
        tile_height?: number;
        access?: Vips.Access;
        threaded?: boolean;
        persistent?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * make a Laplacian of Gaussian image
   * @param sigma - Radius of Gaussian
   * @param min_ampl - Minimum amplitude of Gaussian
   * @param [options] - optional parameters
   * @param [options.separable] - Generate separable Gaussian
   * @param [options.precision] - Generate with this precision
   */
  static logmat(
    sigma: number,
    min_ampl: number,
    options?: Options<
      {
        string_options?: string;
        separable?: boolean;
        precision?: Vips.Precision;
      }  
    >,
  ): Vips.Image;

  /**
   * load file with ImageMagick7
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.density] - Canvas resolution for rendering vector formats like SVG
   * @param [options.page] - First page to load
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static magickload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        density?: string;
        page?: number;
        n?: number;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load buffer with ImageMagick7
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.density] - Canvas resolution for rendering vector formats like SVG
   * @param [options.page] - First page to load
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static magickload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        density?: string;
        page?: number;
        n?: number;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save file with ImageMagick
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.format] - Format to save in
   * @param [options.quality] - Quality to use
   * @param [options.optimize_gif_frames] - Apply GIF frames optimization
   * @param [options.optimize_gif_transparency] - Apply GIF transparency optimization
   * @param [options.bitdepth] - Number of bits per pixel
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  magicksave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        format?: string;
        quality?: number;
        optimize_gif_frames?: boolean;
        optimize_gif_transparency?: boolean;
        bitdepth?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image to magick buffer
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.format] - Format to save in
   * @param [options.quality] - Quality to use
   * @param [options.optimize_gif_frames] - Apply GIF frames optimization
   * @param [options.optimize_gif_transparency] - Apply GIF transparency optimization
   * @param [options.bitdepth] - Number of bits per pixel
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  magicksave_buffer(
    options?: Options<
      {
        string_options?: string;
        format?: string;
        quality?: number;
        optimize_gif_frames?: boolean;
        optimize_gif_transparency?: boolean;
        bitdepth?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): Vips.Blob;

  /**
   * resample with a map image
   * @param __input - this - Input image argument
   * @param index - Index pixels with this
   * @param [options] - optional parameters
   * @param [options.interpolate] - Interpolate pixels with this
   * @param [options.background] - Background value
   * @param [options.premultiplied] - Images have premultiplied alpha
   * @param [options.extend] - How to generate the extra pixels
   */
  mapim(
    index: Vips.Image,
    options?: Options<
      {
        string_options?: string;
        interpolate?: Vips.Interpolate;
        background?: number[];
        premultiplied?: boolean;
        extend?: Vips.Extend;
      }  
    >,
  ): Vips.Image;

  /**
   * map an image though a lut
   * @param __input - this - Input image
   * @param lut - Look-up table image
   * @param [options] - optional parameters
   * @param [options.band] - Apply one-band lut to this band of in
   */
  maplut(
    lut: Vips.Image,
    options?: Options<
      {
        string_options?: string;
        band?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * make a butterworth filter
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param order - Filter order
   * @param frequency_cutoff - Frequency cutoff
   * @param amplitude_cutoff - Amplitude cutoff
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.nodc] - Remove DC component
   * @param [options.reject] - Invert the sense of the filter
   * @param [options.optical] - Rotate quadrants to optical space
   */
  static mask_butterworth(
    width: number,
    height: number,
    order: number,
    frequency_cutoff: number,
    amplitude_cutoff: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        nodc?: boolean;
        reject?: boolean;
        optical?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * make a butterworth_band filter
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param order - Filter order
   * @param frequency_cutoff_x - Frequency cutoff x
   * @param frequency_cutoff_y - Frequency cutoff y
   * @param radius - Radius of circle
   * @param amplitude_cutoff - Amplitude cutoff
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.nodc] - Remove DC component
   * @param [options.reject] - Invert the sense of the filter
   * @param [options.optical] - Rotate quadrants to optical space
   */
  static mask_butterworth_band(
    width: number,
    height: number,
    order: number,
    frequency_cutoff_x: number,
    frequency_cutoff_y: number,
    radius: number,
    amplitude_cutoff: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        nodc?: boolean;
        reject?: boolean;
        optical?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * make a butterworth ring filter
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param order - Filter order
   * @param frequency_cutoff - Frequency cutoff
   * @param amplitude_cutoff - Amplitude cutoff
   * @param ringwidth - Ringwidth
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.nodc] - Remove DC component
   * @param [options.reject] - Invert the sense of the filter
   * @param [options.optical] - Rotate quadrants to optical space
   */
  static mask_butterworth_ring(
    width: number,
    height: number,
    order: number,
    frequency_cutoff: number,
    amplitude_cutoff: number,
    ringwidth: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        nodc?: boolean;
        reject?: boolean;
        optical?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * make fractal filter
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param fractal_dimension - Fractal dimension
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.nodc] - Remove DC component
   * @param [options.reject] - Invert the sense of the filter
   * @param [options.optical] - Rotate quadrants to optical space
   */
  static mask_fractal(
    width: number,
    height: number,
    fractal_dimension: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        nodc?: boolean;
        reject?: boolean;
        optical?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * make a gaussian filter
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param frequency_cutoff - Frequency cutoff
   * @param amplitude_cutoff - Amplitude cutoff
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.nodc] - Remove DC component
   * @param [options.reject] - Invert the sense of the filter
   * @param [options.optical] - Rotate quadrants to optical space
   */
  static mask_gaussian(
    width: number,
    height: number,
    frequency_cutoff: number,
    amplitude_cutoff: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        nodc?: boolean;
        reject?: boolean;
        optical?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * make a gaussian filter
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param frequency_cutoff_x - Frequency cutoff x
   * @param frequency_cutoff_y - Frequency cutoff y
   * @param radius - Radius of circle
   * @param amplitude_cutoff - Amplitude cutoff
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.nodc] - Remove DC component
   * @param [options.reject] - Invert the sense of the filter
   * @param [options.optical] - Rotate quadrants to optical space
   */
  static mask_gaussian_band(
    width: number,
    height: number,
    frequency_cutoff_x: number,
    frequency_cutoff_y: number,
    radius: number,
    amplitude_cutoff: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        nodc?: boolean;
        reject?: boolean;
        optical?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * make a gaussian ring filter
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param frequency_cutoff - Frequency cutoff
   * @param amplitude_cutoff - Amplitude cutoff
   * @param ringwidth - Ringwidth
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.nodc] - Remove DC component
   * @param [options.reject] - Invert the sense of the filter
   * @param [options.optical] - Rotate quadrants to optical space
   */
  static mask_gaussian_ring(
    width: number,
    height: number,
    frequency_cutoff: number,
    amplitude_cutoff: number,
    ringwidth: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        nodc?: boolean;
        reject?: boolean;
        optical?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * make an ideal filter
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param frequency_cutoff - Frequency cutoff
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.nodc] - Remove DC component
   * @param [options.reject] - Invert the sense of the filter
   * @param [options.optical] - Rotate quadrants to optical space
   */
  static mask_ideal(
    width: number,
    height: number,
    frequency_cutoff: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        nodc?: boolean;
        reject?: boolean;
        optical?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * make an ideal band filter
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param frequency_cutoff_x - Frequency cutoff x
   * @param frequency_cutoff_y - Frequency cutoff y
   * @param radius - Radius of circle
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.nodc] - Remove DC component
   * @param [options.reject] - Invert the sense of the filter
   * @param [options.optical] - Rotate quadrants to optical space
   */
  static mask_ideal_band(
    width: number,
    height: number,
    frequency_cutoff_x: number,
    frequency_cutoff_y: number,
    radius: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        nodc?: boolean;
        reject?: boolean;
        optical?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * make an ideal ring filter
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param frequency_cutoff - Frequency cutoff
   * @param ringwidth - Ringwidth
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.nodc] - Remove DC component
   * @param [options.reject] - Invert the sense of the filter
   * @param [options.optical] - Rotate quadrants to optical space
   */
  static mask_ideal_ring(
    width: number,
    height: number,
    frequency_cutoff: number,
    ringwidth: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        nodc?: boolean;
        reject?: boolean;
        optical?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * first-order match of two images
   * @param ref - this - Reference image
   * @param sec - Secondary image
   * @param xr1 - Position of first reference tie-point
   * @param yr1 - Position of first reference tie-point
   * @param xs1 - Position of first secondary tie-point
   * @param ys1 - Position of first secondary tie-point
   * @param xr2 - Position of second reference tie-point
   * @param yr2 - Position of second reference tie-point
   * @param xs2 - Position of second secondary tie-point
   * @param ys2 - Position of second secondary tie-point
   * @param [options] - optional parameters
   * @param [options.hwindow] - Half window size
   * @param [options.harea] - Half area size
   * @param [options.search] - Search to improve tie-points
   * @param [options.interpolate] - Interpolate pixels with this
   */
  match(
    sec: Vips.Image,
    xr1: number,
    yr1: number,
    xs1: number,
    ys1: number,
    xr2: number,
    yr2: number,
    xs2: number,
    ys2: number,
    options?: Options<
      {
        string_options?: string;
        hwindow?: number;
        harea?: number;
        search?: boolean;
        interpolate?: Vips.Interpolate;
      }  
    >,
  ): Vips.Image;

  /**
   * apply a math operation to an image
   * @param __input - this - Input image
   * @param math - Math to perform */
  math(
    math: Vips.OperationMath,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * binary math operations
   * @param left - this - Left-hand image argument
   * @param right - Right-hand image argument
   * @param math2 - Math to perform */
  math2(
    right: Vips.Image,
    math2: Vips.OperationMath2,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * binary math operations with a constant
   * @param __input - this - Input image
   * @param math2 - Math to perform
   * @param c - Array of constants */
  math2_const(
    math2: Vips.OperationMath2,
    c: number[],
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * invert an matrix
   * @param __input - this - An square matrix
   */
  matrixinvert(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * load matrix
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static matrixload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load matrix
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static matrixload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * print matrix
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  matrixprint(
    options?: Options<
      {
        string_options?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image to matrix
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  matrixsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image to matrix
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  matrixsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * find image maximum
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.size] - Number of maximum values to find
   * @param [options.x] - Output - Horizontal position of maximum
   * @param [options.y] - Output - Vertical position of maximum
   * @param [options.out_array] - Output - Array of output values
   * @param [options.x_array] - Output - Array of horizontal positions
   * @param [options.y_array] - Output - Array of vertical positions
   */
  max<
    Output extends {
      x: number;
      y: number;
      out_array: number[];
      x_array: number[];
      y_array: number[];  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    options?: Options<
      {
        string_options?: string;
        size?: number;
      },
      NeededOutput[]  
    >,
  ): [
    out: number,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * measure a set of patches on a color chart
   * @param __input - this - Image to measure
   * @param h - Number of patches across chart
   * @param v - Number of patches down chart
   * @param [options] - optional parameters
   * @param [options.left] - Left edge of extract area
   * @param [options.top] - Top edge of extract area
   * @param [options.width] - Width of extract area
   * @param [options.height] - Height of extract area
   */
  measure(
    h: number,
    v: number,
    options?: Options<
      {
        string_options?: string;
        left?: number;
        top?: number;
        width?: number;
        height?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * merge two images
   * @param ref - this - Reference image
   * @param sec - Secondary image
   * @param direction - Horizontal or vertical merge
   * @param dx - Horizontal displacement from sec to ref
   * @param dy - Vertical displacement from sec to ref
   * @param [options] - optional parameters
   * @param [options.mblend] - Maximum blend size
   */
  merge(
    sec: Vips.Image,
    direction: Vips.Direction,
    dx: number,
    dy: number,
    options?: Options<
      {
        string_options?: string;
        mblend?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * find image minimum
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.size] - Number of minimum values to find
   * @param [options.x] - Output - Horizontal position of minimum
   * @param [options.y] - Output - Vertical position of minimum
   * @param [options.out_array] - Output - Array of output values
   * @param [options.x_array] - Output - Array of horizontal positions
   * @param [options.y_array] - Output - Array of vertical positions
   */
  min<
    Output extends {
      x: number;
      y: number;
      out_array: number[];
      x_array: number[];
      y_array: number[];  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    options?: Options<
      {
        string_options?: string;
        size?: number;
      },
      NeededOutput[]  
    >,
  ): [
    out: number,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * morphology operation
   * @param __input - this - Input image argument
   * @param mask - Input matrix image
   * @param morph - Morphological operation to perform */
  morph(
    mask: Vips.Image,
    morph: Vips.OperationMorphology,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * mosaic two images
   * @param ref - this - Reference image
   * @param sec - Secondary image
   * @param direction - Horizontal or vertical mosaic
   * @param xref - Position of reference tie-point
   * @param yref - Position of reference tie-point
   * @param xsec - Position of secondary tie-point
   * @param ysec - Position of secondary tie-point
   * @param [options] - optional parameters
   * @param [options.hwindow] - Half window size
   * @param [options.harea] - Half area size
   * @param [options.mblend] - Maximum blend size
   * @param [options.bandno] - Band to search for features on
   * @param [options.dx0] - Output - Detected integer offset
   * @param [options.dy0] - Output - Detected integer offset
   * @param [options.scale1] - Output - Detected scale
   * @param [options.angle1] - Output - Detected rotation
   * @param [options.dy1] - Output - Detected first-order displacement
   * @param [options.dx1] - Output - Detected first-order displacement
   */
  mosaic<
    Output extends {
      dx0: number;
      dy0: number;
      scale1: number;
      angle1: number;
      dy1: number;
      dx1: number;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    sec: Vips.Image,
    direction: Vips.Direction,
    xref: number,
    yref: number,
    xsec: number,
    ysec: number,
    options?: Options<
      {
        string_options?: string;
        hwindow?: number;
        harea?: number;
        mblend?: number;
        bandno?: number;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * first-order mosaic of two images
   * @param ref - this - Reference image
   * @param sec - Secondary image
   * @param direction - Horizontal or vertical mosaic
   * @param xr1 - Position of first reference tie-point
   * @param yr1 - Position of first reference tie-point
   * @param xs1 - Position of first secondary tie-point
   * @param ys1 - Position of first secondary tie-point
   * @param xr2 - Position of second reference tie-point
   * @param yr2 - Position of second reference tie-point
   * @param xs2 - Position of second secondary tie-point
   * @param ys2 - Position of second secondary tie-point
   * @param [options] - optional parameters
   * @param [options.hwindow] - Half window size
   * @param [options.harea] - Half area size
   * @param [options.search] - Search to improve tie-points
   * @param [options.interpolate] - Interpolate pixels with this
   * @param [options.mblend] - Maximum blend size
   */
  mosaic1(
    sec: Vips.Image,
    direction: Vips.Direction,
    xr1: number,
    yr1: number,
    xs1: number,
    ys1: number,
    xr2: number,
    yr2: number,
    xs2: number,
    ys2: number,
    options?: Options<
      {
        string_options?: string;
        hwindow?: number;
        harea?: number;
        search?: boolean;
        interpolate?: Vips.Interpolate;
        mblend?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * pick most-significant byte from an image
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.band] - Band to msb
   */
  msb(
    options?: Options<
      {
        string_options?: string;
        band?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * load an OpenEXR image
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static openexrload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load file with OpenSlide
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.level] - Load this level from the file
   * @param [options.autocrop] - Crop to image bounds
   * @param [options.associated] - Load this associated image
   * @param [options.attach_associated] - Attach all associated images
   * @param [options.rgb] - Output RGB (not RGBA)
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static openslideload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        level?: number;
        autocrop?: boolean;
        associated?: string;
        attach_associated?: boolean;
        rgb?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load source with OpenSlide
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.level] - Load this level from the file
   * @param [options.autocrop] - Crop to image bounds
   * @param [options.associated] - Load this associated image
   * @param [options.attach_associated] - Attach all associated images
   * @param [options.rgb] - Output RGB (not RGBA)
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static openslideload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        level?: number;
        autocrop?: boolean;
        associated?: string;
        attach_associated?: boolean;
        rgb?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load PDF from file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.dpi] - DPI to render at
   * @param [options.scale] - Factor to scale by
   * @param [options.background] - Background colour
   * @param [options.password] - Password to decrypt with
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static pdfload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        n?: number;
        dpi?: number;
        scale?: number;
        background?: number[];
        password?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load PDF from buffer
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.dpi] - DPI to render at
   * @param [options.scale] - Factor to scale by
   * @param [options.background] - Background colour
   * @param [options.password] - Password to decrypt with
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static pdfload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        n?: number;
        dpi?: number;
        scale?: number;
        background?: number[];
        password?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load PDF from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.dpi] - DPI to render at
   * @param [options.scale] - Factor to scale by
   * @param [options.background] - Background colour
   * @param [options.password] - Password to decrypt with
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static pdfload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        n?: number;
        dpi?: number;
        scale?: number;
        background?: number[];
        password?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * find threshold for percent of pixels
   * @param __input - this - Input image
   * @param percent - Percent of pixels */
  percent(
    percent: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): number;

  /**
   * make a perlin noise image
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param [options] - optional parameters
   * @param [options.cell_size] - Size of Perlin cells
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.seed] - Random number seed
   */
  static perlin(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        cell_size?: number;
        uchar?: boolean;
        seed?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * calculate phase correlation
   * @param __input - this - Input image
   * @param in2 - Second input image */
  phasecor(
    in2: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * load png from file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static pngload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load png from buffer
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static pngload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load png from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static pngload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image to png file
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.compression] - Compression factor
   * @param [options.interlace] - Interlace image
   * @param [options.profile] - ICC profile to embed
   * @param [options.filter] - libpng row filter flag(s)
   * @param [options.palette] - Quantise to 8bpp palette
   * @param [options.Q] - Quantisation quality
   * @param [options.dither] - Amount of dithering
   * @param [options.bitdepth] - Write as a 1, 2, 4, 8 or 16 bit image
   * @param [options.effort] - Quantisation CPU effort
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  pngsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        compression?: number;
        interlace?: boolean;
        profile?: string;
        filter?: Vips.ForeignPngFilter;
        palette?: boolean;
        Q?: number;
        dither?: number;
        bitdepth?: number;
        effort?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image to png buffer
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.compression] - Compression factor
   * @param [options.interlace] - Interlace image
   * @param [options.profile] - ICC profile to embed
   * @param [options.filter] - libpng row filter flag(s)
   * @param [options.palette] - Quantise to 8bpp palette
   * @param [options.Q] - Quantisation quality
   * @param [options.dither] - Amount of dithering
   * @param [options.bitdepth] - Write as a 1, 2, 4, 8 or 16 bit image
   * @param [options.effort] - Quantisation CPU effort
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  pngsave_buffer(
    options?: Options<
      {
        string_options?: string;
        compression?: number;
        interlace?: boolean;
        profile?: string;
        filter?: Vips.ForeignPngFilter;
        palette?: boolean;
        Q?: number;
        dither?: number;
        bitdepth?: number;
        effort?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): Vips.Blob;

  /**
   * save image to target as PNG
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.compression] - Compression factor
   * @param [options.interlace] - Interlace image
   * @param [options.profile] - ICC profile to embed
   * @param [options.filter] - libpng row filter flag(s)
   * @param [options.palette] - Quantise to 8bpp palette
   * @param [options.Q] - Quantisation quality
   * @param [options.dither] - Amount of dithering
   * @param [options.bitdepth] - Write as a 1, 2, 4, 8 or 16 bit image
   * @param [options.effort] - Quantisation CPU effort
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  pngsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        compression?: number;
        interlace?: boolean;
        profile?: string;
        filter?: Vips.ForeignPngFilter;
        palette?: boolean;
        Q?: number;
        dither?: number;
        bitdepth?: number;
        effort?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * load ppm from file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static ppmload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load ppm base class
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static ppmload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image to ppm file
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.format] - Format to save in
   * @param [options.ascii] - Save as ascii
   * @param [options.bitdepth] - Set to 1 to write as a 1 bit image
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  ppmsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        format?: Vips.ForeignPpmFormat;
        ascii?: boolean;
        bitdepth?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save to ppm
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.format] - Format to save in
   * @param [options.ascii] - Save as ascii
   * @param [options.bitdepth] - Set to 1 to write as a 1 bit image
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  ppmsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        format?: Vips.ForeignPpmFormat;
        ascii?: boolean;
        bitdepth?: number;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * premultiply image alpha
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.max_alpha] - Maximum value of alpha channel
   */
  premultiply(
    options?: Options<
      {
        string_options?: string;
        max_alpha?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * find image profiles
   * @param __input - this - Input image
   */
  profile(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): [
    columns: Vips.Image,
    rows: Vips.Image,];

  /**
   * load named ICC profile
   * @param name - Profile name */
  static profile_load(
    name: string,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Blob;

  /**
   * find image projections
   * @param __input - this - Input image
   */
  project(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): [
    columns: Vips.Image,
    rows: Vips.Image,];

  /**
   * resample an image with a quadratic transform
   * @param __input - this - Input image argument
   * @param coeff - Coefficient matrix
   * @param [options] - optional parameters
   * @param [options.interpolate] - Interpolate values with this
   */
  quadratic(
    coeff: Vips.Image,
    options?: Options<
      {
        string_options?: string;
        interpolate?: Vips.Interpolate;
      }  
    >,
  ): Vips.Image;

  /**
   * unpack Radiance coding to float RGB
   * @param __input - this - Input image
   */
  rad2float(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * load a Radiance image from a file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static radload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load rad from buffer
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static radload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load rad from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static radload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image to Radiance file
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  radsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image to Radiance buffer
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  radsave_buffer(
    options?: Options<
      {
        string_options?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): Vips.Blob;

  /**
   * save image to Radiance target
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  radsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * rank filter
   * @param __input - this - Input image argument
   * @param width - Window width in pixels
   * @param height - Window height in pixels
   * @param index - Select pixel at index */
  rank(
    width: number,
    height: number,
    index: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * load raw data from a file
   * @param filename - Filename to load from
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param bands - Number of bands in image
   * @param [options] - optional parameters
   * @param [options.offset] - Offset in bytes from start of file
   * @param [options.format] - Pixel format in image
   * @param [options.interpretation] - Pixel interpretation
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static rawload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    width: number,
    height: number,
    bands: number,
    options?: Options<
      {
        string_options?: string;
        offset?: number;
        format?: Vips.BandFormat;
        interpretation?: Vips.Interpretation;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image to raw file
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  rawsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * write raw image to file descriptor
   * @param __input - this - Image to save
   * @param fd - File descriptor to write to
   * @param [options] - optional parameters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  rawsave_fd(
    fd: number,
    options?: Options<
      {
        string_options?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * linear recombination with matrix
   * @param __input - this - Input image argument
   * @param m - Matrix of coefficients */
  recomb(
    m: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * reduce an image
   * @param __input - this - Input image argument
   * @param hshrink - Horizontal shrink factor
   * @param vshrink - Vertical shrink factor
   * @param [options] - optional parameters
   * @param [options.kernel] - Resampling kernel
   * @param [options.gap] - Reducing gap
   */
  reduce(
    hshrink: number,
    vshrink: number,
    options?: Options<
      {
        string_options?: string;
        kernel?: Vips.Kernel;
        gap?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * shrink an image horizontally
   * @param __input - this - Input image argument
   * @param hshrink - Horizontal shrink factor
   * @param [options] - optional parameters
   * @param [options.kernel] - Resampling kernel
   * @param [options.gap] - Reducing gap
   */
  reduceh(
    hshrink: number,
    options?: Options<
      {
        string_options?: string;
        kernel?: Vips.Kernel;
        gap?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * shrink an image vertically
   * @param __input - this - Input image argument
   * @param vshrink - Vertical shrink factor
   * @param [options] - optional parameters
   * @param [options.kernel] - Resampling kernel
   * @param [options.gap] - Reducing gap
   */
  reducev(
    vshrink: number,
    options?: Options<
      {
        string_options?: string;
        kernel?: Vips.Kernel;
        gap?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * relational operation on two images
   * @param left - this - Left-hand image argument
   * @param right - Right-hand image argument
   * @param relational - Relational to perform */
  relational(
    right: Vips.Image,
    relational: Vips.OperationRelational,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * relational operations against a constant
   * @param __input - this - Input image
   * @param relational - Relational to perform
   * @param c - Array of constants */
  relational_const(
    relational: Vips.OperationRelational,
    c: number[],
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * remainder after integer division of an image and a constant
   * @param __input - this - Input image
   * @param c - Array of constants */
  remainder_const(
    c: number[],
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * replicate an image
   * @param __input - this - Input image
   * @param across - Repeat this many times horizontally
   * @param down - Repeat this many times vertically */
  replicate(
    across: number,
    down: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * resize an image
   * @param __input - this - Input image argument
   * @param scale - Scale image by this factor
   * @param [options] - optional parameters
   * @param [options.kernel] - Resampling kernel
   * @param [options.gap] - Reducing gap
   * @param [options.vscale] - Vertical scale image by this factor
   */
  resize(
    scale: number,
    options?: Options<
      {
        string_options?: string;
        kernel?: Vips.Kernel;
        gap?: number;
        vscale?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * rotate an image
   * @param __input - this - Input image
   * @param angle - Angle to rotate image */
  rot(
    angle: Vips.Angle,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * rotate an image
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.angle] - Angle to rotate image
   */
  rot45(
    options?: Options<
      {
        string_options?: string;
        angle?: Vips.Angle45;
      }  
    >,
  ): Vips.Image;

  /**
   * rotate an image by a number of degrees
   * @param __input - this - Input image argument
   * @param angle - Rotate anticlockwise by this many degrees
   * @param [options] - optional parameters
   * @param [options.interpolate] - Interpolate pixels with this
   * @param [options.background] - Background value
   * @param [options.odx] - Horizontal output displacement
   * @param [options.ody] - Vertical output displacement
   * @param [options.idx] - Horizontal input displacement
   * @param [options.idy] - Vertical input displacement
   */
  rotate(
    angle: number,
    options?: Options<
      {
        string_options?: string;
        interpolate?: Vips.Interpolate;
        background?: number[];
        odx?: number;
        ody?: number;
        idx?: number;
        idy?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * perform a round function on an image
   * @param __input - this - Input image
   * @param round - Rounding operation to perform */
  round(
    round: Vips.OperationRound,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * scale an image to uchar
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.exp] - Exponent for log scale
   * @param [options.log] - Log scale
   */
  scale(
    options?: Options<
      {
        string_options?: string;
        exp?: number;
        log?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * convert scRGB to BW
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.depth] - Output device space depth in bits
   */
  scRGB2BW(
    options?: Options<
      {
        string_options?: string;
        depth?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * convert an scRGB image to sRGB
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.depth] - Output device space depth in bits
   */
  scRGB2sRGB(
    options?: Options<
      {
        string_options?: string;
        depth?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * transform scRGB to XYZ
   * @param __input - this - Input image
   */
  scRGB2XYZ(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * check sequential access
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.tile_height] - Tile height in pixels
   */
  sequential(
    options?: Options<
      {
        string_options?: string;
        tile_height?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * unsharp masking for print
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.sigma] - Sigma of Gaussian
   * @param [options.x1] - Flat/jaggy threshold
   * @param [options.y2] - Maximum brightening
   * @param [options.y3] - Maximum darkening
   * @param [options.m1] - Slope for flat areas
   * @param [options.m2] - Slope for jaggy areas
   */
  sharpen(
    options?: Options<
      {
        string_options?: string;
        sigma?: number;
        x1?: number;
        y2?: number;
        y3?: number;
        m1?: number;
        m2?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * shrink an image
   * @param __input - this - Input image argument
   * @param hshrink - Horizontal shrink factor
   * @param vshrink - Vertical shrink factor
   * @param [options] - optional parameters
   * @param [options.ceil] - Round-up output dimensions
   */
  shrink(
    hshrink: number,
    vshrink: number,
    options?: Options<
      {
        string_options?: string;
        ceil?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * shrink an image horizontally
   * @param __input - this - Input image argument
   * @param hshrink - Horizontal shrink factor
   * @param [options] - optional parameters
   * @param [options.ceil] - Round-up output dimensions
   */
  shrinkh(
    hshrink: number,
    options?: Options<
      {
        string_options?: string;
        ceil?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * shrink an image vertically
   * @param __input - this - Input image argument
   * @param vshrink - Vertical shrink factor
   * @param [options] - optional parameters
   * @param [options.ceil] - Round-up output dimensions
   */
  shrinkv(
    vshrink: number,
    options?: Options<
      {
        string_options?: string;
        ceil?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * unit vector of pixel
   * @param __input - this - Input image
   */
  sign(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * similarity transform of an image
   * @param __input - this - Input image argument
  
   * @param [options] - optional parameters
   * @param [options.scale] - Scale by this factor
   * @param [options.angle] - Rotate anticlockwise by this many degrees
   * @param [options.interpolate] - Interpolate pixels with this
   * @param [options.background] - Background value
   * @param [options.odx] - Horizontal output displacement
   * @param [options.ody] - Vertical output displacement
   * @param [options.idx] - Horizontal input displacement
   * @param [options.idy] - Vertical input displacement
   */
  similarity(
    options?: Options<
      {
        string_options?: string;
        scale?: number;
        angle?: number;
        interpolate?: Vips.Interpolate;
        background?: number[];
        odx?: number;
        ody?: number;
        idx?: number;
        idy?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * make a 2D sine wave
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   * @param [options.hfreq] - Horizontal spatial frequency
   * @param [options.vfreq] - Vertical spatial frequency
   */
  static sines(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
        hfreq?: number;
        vfreq?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * extract an area from an image
   * @param input - this - Input image
   * @param width - Width of extract area
   * @param height - Height of extract area
   * @param [options] - optional parameters
   * @param [options.interesting] - How to measure interestingness
   * @param [options.attention_x] - Output - Horizontal position of attention centre
   * @param [options.attention_y] - Output - Vertical position of attention centre
   */
  smartcrop<
    Output extends {
      attention_x: number;
      attention_y: number;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        interesting?: Vips.Interesting;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * Sobel edge detector
   * @param __input - this - Input image
   */
  sobel(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * spatial correlation
   * @param __input - this - Input image argument
   * @param ref - Input reference image */
  spcor(
    ref: Vips.Image,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * make displayable power spectrum
   * @param __input - this - Input image
   */
  spectrum(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform sRGB to HSV
   * @param __input - this - Input image
   */
  sRGB2HSV(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * convert an sRGB image to scRGB
   * @param __input - this - Input image
   */
  sRGB2scRGB(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * find many image stats
   * @param __input - this - Input image
   */
  stats(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * statistical difference
   * @param __input - this - Input image
   * @param width - Window width in pixels
   * @param height - Window height in pixels
   * @param [options] - optional parameters
   * @param [options.s0] - New deviation
   * @param [options.b] - Weight of new deviation
   * @param [options.m0] - New mean
   * @param [options.a] - Weight of new mean
   */
  stdif(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        s0?: number;
        b?: number;
        m0?: number;
        a?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * subsample an image
   * @param input - this - Input image
   * @param xfac - Horizontal subsample factor
   * @param yfac - Vertical subsample factor
   * @param [options] - optional parameters
   * @param [options.point] - Point sample
   */
  subsample(
    xfac: number,
    yfac: number,
    options?: Options<
      {
        string_options?: string;
        point?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * sum an array of images
   */
  static sum(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * load SVG with rsvg
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.dpi] - Render at this DPI
   * @param [options.scale] - Scale output by this factor
   * @param [options.unlimited] - Allow SVG of any size
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static svgload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        dpi?: number;
        scale?: number;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load SVG with rsvg
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.dpi] - Render at this DPI
   * @param [options.scale] - Scale output by this factor
   * @param [options.unlimited] - Allow SVG of any size
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static svgload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        dpi?: number;
        scale?: number;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load svg from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.dpi] - Render at this DPI
   * @param [options.scale] - Scale output by this factor
   * @param [options.unlimited] - Allow SVG of any size
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static svgload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        dpi?: number;
        scale?: number;
        unlimited?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * find the index of the first non-zero pixel in tests
   * @param tests - Table of images to test */
  static switch(
    tests: Vips.Image[],
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * run an external command
   * @param cmd_format - Command to run
   * @param [options] - optional parameters
   * @param [options.__input] - Array of input images
   * @param [options.out_format] - Format for output filename
   * @param [options.in_format] - Format for input filename
   * @param [options.out] - Output - Output image
   * @param [options.log] - Output - Command log
   */
  static system<
    Output extends {
      out: Vips.Image;
      log: string;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    cmd_format: string,
    options?: Options<
      {
        string_options?: string;
        __input?: Vips.Image[];
        out_format?: string;
        in_format?: string;
      },
      NeededOutput[]  
    >,
  ): [
    optional_output: Pick<Output, FilteredKeys>,
  ] | null;

  /**
   * make a text image
   * @param text - Text to render
   * @param [options] - optional parameters
   * @param [options.font] - Font to render with
   * @param [options.width] - Maximum image width in pixels
   * @param [options.height] - Maximum image height in pixels
   * @param [options.align] - Align on the low, centre or high edge
   * @param [options.justify] - Justify lines
   * @param [options.dpi] - DPI to render at
   * @param [options.spacing] - Line spacing
   * @param [options.fontfile] - Load this font file
   * @param [options.rgba] - Enable RGBA output
   * @param [options.wrap] - Wrap lines on word or character boundaries
   * @param [options.autofit_dpi] - Output - DPI selected by autofit
   */
  static text<
    Output extends {
      autofit_dpi: number;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    text: string,
    options?: Options<
      {
        string_options?: string;
        font?: string;
        width?: number;
        height?: number;
        align?: Vips.Align;
        justify?: boolean;
        dpi?: number;
        spacing?: number;
        fontfile?: string;
        rgba?: boolean;
        wrap?: Vips.TextWrap;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * generate thumbnail from file
   * @param filename - Filename to read from
   * @param width - Size to this width
   * @param [options] - optional parameters
   * @param [options.height] - Size to this height
   * @param [options.size] - Only upsize, only downsize, or both
   * @param [options.no_rotate] - Don't use orientation tags to rotate image upright
   * @param [options.crop] - Reduce to fill target rectangle, then crop
   * @param [options.linear] - Reduce in linear light
   * @param [options.import_profile] - Fallback import profile
   * @param [options.export_profile] - Fallback export profile
   * @param [options.intent] - Rendering intent
   * @param [options.fail_on] - Error level to fail on
   */
  static thumbnail(
    filename: string,
    width: number,
    options?: Options<
      {
        string_options?: string;
        height?: number;
        size?: Vips.Size;
        no_rotate?: boolean;
        crop?: Vips.Interesting;
        linear?: boolean;
        import_profile?: string;
        export_profile?: string;
        intent?: Vips.Intent;
        fail_on?: Vips.FailOn;
      }  
    >,
  ): Vips.Image;

  /**
   * generate thumbnail from buffer
   * @param buffer - Buffer to load from
   * @param width - Size to this width
   * @param [options] - optional parameters
   * @param [options.option_string] - Options that are passed on to the underlying loader
   * @param [options.height] - Size to this height
   * @param [options.size] - Only upsize, only downsize, or both
   * @param [options.no_rotate] - Don't use orientation tags to rotate image upright
   * @param [options.crop] - Reduce to fill target rectangle, then crop
   * @param [options.linear] - Reduce in linear light
   * @param [options.import_profile] - Fallback import profile
   * @param [options.export_profile] - Fallback export profile
   * @param [options.intent] - Rendering intent
   * @param [options.fail_on] - Error level to fail on
   */
  static thumbnail_buffer(
    buffer: Vips.Blob,
    width: number,
    options?: Options<
      {
        string_options?: string;
        option_string?: string;
        height?: number;
        size?: Vips.Size;
        no_rotate?: boolean;
        crop?: Vips.Interesting;
        linear?: boolean;
        import_profile?: string;
        export_profile?: string;
        intent?: Vips.Intent;
        fail_on?: Vips.FailOn;
      }  
    >,
  ): Vips.Image;

  /**
   * generate thumbnail from image
   * @param __input - this - Input image argument
   * @param width - Size to this width
   * @param [options] - optional parameters
   * @param [options.height] - Size to this height
   * @param [options.size] - Only upsize, only downsize, or both
   * @param [options.no_rotate] - Don't use orientation tags to rotate image upright
   * @param [options.crop] - Reduce to fill target rectangle, then crop
   * @param [options.linear] - Reduce in linear light
   * @param [options.import_profile] - Fallback import profile
   * @param [options.export_profile] - Fallback export profile
   * @param [options.intent] - Rendering intent
   * @param [options.fail_on] - Error level to fail on
   */
  thumbnail_image(
    width: number,
    options?: Options<
      {
        string_options?: string;
        height?: number;
        size?: Vips.Size;
        no_rotate?: boolean;
        crop?: Vips.Interesting;
        linear?: boolean;
        import_profile?: string;
        export_profile?: string;
        intent?: Vips.Intent;
        fail_on?: Vips.FailOn;
      }  
    >,
  ): Vips.Image;

  /**
   * generate thumbnail from source
   * @param source - Source to load from
   * @param width - Size to this width
   * @param [options] - optional parameters
   * @param [options.option_string] - Options that are passed on to the underlying loader
   * @param [options.height] - Size to this height
   * @param [options.size] - Only upsize, only downsize, or both
   * @param [options.no_rotate] - Don't use orientation tags to rotate image upright
   * @param [options.crop] - Reduce to fill target rectangle, then crop
   * @param [options.linear] - Reduce in linear light
   * @param [options.import_profile] - Fallback import profile
   * @param [options.export_profile] - Fallback export profile
   * @param [options.intent] - Rendering intent
   * @param [options.fail_on] - Error level to fail on
   */
  static thumbnail_source(
    source: Vips.Source,
    width: number,
    options?: Options<
      {
        string_options?: string;
        option_string?: string;
        height?: number;
        size?: Vips.Size;
        no_rotate?: boolean;
        crop?: Vips.Interesting;
        linear?: boolean;
        import_profile?: string;
        export_profile?: string;
        intent?: Vips.Intent;
        fail_on?: Vips.FailOn;
      }  
    >,
  ): Vips.Image;

  /**
   * load tiff from file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.subifd] - Subifd index
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.autorotate] - Rotate image using orientation tag
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static tiffload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        subifd?: number;
        n?: number;
        autorotate?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load tiff from buffer
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.subifd] - Subifd index
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.autorotate] - Rotate image using orientation tag
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static tiffload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        subifd?: number;
        n?: number;
        autorotate?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load tiff from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.subifd] - Subifd index
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.autorotate] - Rotate image using orientation tag
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static tiffload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        subifd?: number;
        n?: number;
        autorotate?: boolean;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image to tiff file
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.compression] - Compression for this file
   * @param [options.Q] - Q factor
   * @param [options.predictor] - Compression prediction
   * @param [options.profile] - ICC profile to embed
   * @param [options.tile] - Write a tiled tiff
   * @param [options.tile_width] - Tile width in pixels
   * @param [options.tile_height] - Tile height in pixels
   * @param [options.pyramid] - Write a pyramidal tiff
   * @param [options.miniswhite] - Use 0 for white in 1-bit images
   * @param [options.bitdepth] - Write as a 1, 2, 4 or 8 bit image
   * @param [options.resunit] - Resolution unit
   * @param [options.xres] - Horizontal resolution in pixels/mm
   * @param [options.yres] - Vertical resolution in pixels/mm
   * @param [options.bigtiff] - Write a bigtiff image
   * @param [options.properties] - Write a properties document to IMAGEDESCRIPTION
   * @param [options.region_shrink] - Method to shrink regions
   * @param [options.level] - ZSTD compression level
   * @param [options.lossless] - Enable WEBP lossless mode
   * @param [options.depth] - Pyramid depth
   * @param [options.subifd] - Save pyr layers as sub-IFDs
   * @param [options.premultiply] - Save with premultiplied alpha
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  tiffsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        compression?: Vips.ForeignTiffCompression;
        Q?: number;
        predictor?: Vips.ForeignTiffPredictor;
        profile?: string;
        tile?: boolean;
        tile_width?: number;
        tile_height?: number;
        pyramid?: boolean;
        miniswhite?: boolean;
        bitdepth?: number;
        resunit?: Vips.ForeignTiffResunit;
        xres?: number;
        yres?: number;
        bigtiff?: boolean;
        properties?: boolean;
        region_shrink?: Vips.RegionShrink;
        level?: number;
        lossless?: boolean;
        depth?: Vips.ForeignDzDepth;
        subifd?: boolean;
        premultiply?: boolean;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image to tiff buffer
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.compression] - Compression for this file
   * @param [options.Q] - Q factor
   * @param [options.predictor] - Compression prediction
   * @param [options.profile] - ICC profile to embed
   * @param [options.tile] - Write a tiled tiff
   * @param [options.tile_width] - Tile width in pixels
   * @param [options.tile_height] - Tile height in pixels
   * @param [options.pyramid] - Write a pyramidal tiff
   * @param [options.miniswhite] - Use 0 for white in 1-bit images
   * @param [options.bitdepth] - Write as a 1, 2, 4 or 8 bit image
   * @param [options.resunit] - Resolution unit
   * @param [options.xres] - Horizontal resolution in pixels/mm
   * @param [options.yres] - Vertical resolution in pixels/mm
   * @param [options.bigtiff] - Write a bigtiff image
   * @param [options.properties] - Write a properties document to IMAGEDESCRIPTION
   * @param [options.region_shrink] - Method to shrink regions
   * @param [options.level] - ZSTD compression level
   * @param [options.lossless] - Enable WEBP lossless mode
   * @param [options.depth] - Pyramid depth
   * @param [options.subifd] - Save pyr layers as sub-IFDs
   * @param [options.premultiply] - Save with premultiplied alpha
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  tiffsave_buffer(
    options?: Options<
      {
        string_options?: string;
        compression?: Vips.ForeignTiffCompression;
        Q?: number;
        predictor?: Vips.ForeignTiffPredictor;
        profile?: string;
        tile?: boolean;
        tile_width?: number;
        tile_height?: number;
        pyramid?: boolean;
        miniswhite?: boolean;
        bitdepth?: number;
        resunit?: Vips.ForeignTiffResunit;
        xres?: number;
        yres?: number;
        bigtiff?: boolean;
        properties?: boolean;
        region_shrink?: Vips.RegionShrink;
        level?: number;
        lossless?: boolean;
        depth?: Vips.ForeignDzDepth;
        subifd?: boolean;
        premultiply?: boolean;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): Vips.Blob;

  /**
   * save image to tiff target
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.compression] - Compression for this file
   * @param [options.Q] - Q factor
   * @param [options.predictor] - Compression prediction
   * @param [options.profile] - ICC profile to embed
   * @param [options.tile] - Write a tiled tiff
   * @param [options.tile_width] - Tile width in pixels
   * @param [options.tile_height] - Tile height in pixels
   * @param [options.pyramid] - Write a pyramidal tiff
   * @param [options.miniswhite] - Use 0 for white in 1-bit images
   * @param [options.bitdepth] - Write as a 1, 2, 4 or 8 bit image
   * @param [options.resunit] - Resolution unit
   * @param [options.xres] - Horizontal resolution in pixels/mm
   * @param [options.yres] - Vertical resolution in pixels/mm
   * @param [options.bigtiff] - Write a bigtiff image
   * @param [options.properties] - Write a properties document to IMAGEDESCRIPTION
   * @param [options.region_shrink] - Method to shrink regions
   * @param [options.level] - ZSTD compression level
   * @param [options.lossless] - Enable WEBP lossless mode
   * @param [options.depth] - Pyramid depth
   * @param [options.subifd] - Save pyr layers as sub-IFDs
   * @param [options.premultiply] - Save with premultiplied alpha
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  tiffsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        compression?: Vips.ForeignTiffCompression;
        Q?: number;
        predictor?: Vips.ForeignTiffPredictor;
        profile?: string;
        tile?: boolean;
        tile_width?: number;
        tile_height?: number;
        pyramid?: boolean;
        miniswhite?: boolean;
        bitdepth?: number;
        resunit?: Vips.ForeignTiffResunit;
        xres?: number;
        yres?: number;
        bigtiff?: boolean;
        properties?: boolean;
        region_shrink?: Vips.RegionShrink;
        level?: number;
        lossless?: boolean;
        depth?: Vips.ForeignDzDepth;
        subifd?: boolean;
        premultiply?: boolean;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * cache an image as a set of tiles
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.tile_width] - Tile width in pixels
   * @param [options.tile_height] - Tile height in pixels
   * @param [options.max_tiles] - Maximum number of tiles to cache
   * @param [options.access] - Expected access pattern
   * @param [options.threaded] - Allow threaded access
   * @param [options.persistent] - Keep cache between evaluations
   */
  tilecache(
    options?: Options<
      {
        string_options?: string;
        tile_width?: number;
        tile_height?: number;
        max_tiles?: number;
        access?: Vips.Access;
        threaded?: boolean;
        persistent?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * build a look-up table
  
   * @param [options] - optional parameters
   * @param [options.in_max] - Size of LUT to build
   * @param [options.out_max] - Maximum value in output LUT
   * @param [options.Lb] - Lowest value in output
   * @param [options.Lw] - Highest value in output
   * @param [options.Ps] - Position of shadow
   * @param [options.Pm] - Position of mid-tones
   * @param [options.Ph] - Position of highlights
   * @param [options.S] - Adjust shadows by this much
   * @param [options.M] - Adjust mid-tones by this much
   * @param [options.H] - Adjust highlights by this much
   */
  static tonelut(
    options?: Options<
      {
        string_options?: string;
        in_max?: number;
        out_max?: number;
        Lb?: number;
        Lw?: number;
        Ps?: number;
        Pm?: number;
        Ph?: number;
        S?: number;
        M?: number;
        H?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * transpose3d an image
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.page_height] - Height of each input page
   */
  transpose3d(
    options?: Options<
      {
        string_options?: string;
        page_height?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * unpremultiply image alpha
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.max_alpha] - Maximum value of alpha channel
   * @param [options.alpha_band] - Unpremultiply with this alpha
   */
  unpremultiply(
    options?: Options<
      {
        string_options?: string;
        max_alpha?: number;
        alpha_band?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * load vips from file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static vipsload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load vips from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static vipsload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save image to file in vips format
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  vipssave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save image to target in vips format
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  vipssave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * load webp from file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.scale] - Factor to scale by
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static webpload<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        n?: number;
        scale?: number;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load webp from buffer
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.scale] - Factor to scale by
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static webpload_buffer<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    buffer: Vips.Blob,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        n?: number;
        scale?: number;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * load webp from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.page] - First page to load
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.scale] - Factor to scale by
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   * @param [options.flags] - Output - Flags for this file
   */
  static webpload_source<
    Output extends {
      flags: Vips.ForeignFlags;  
    },
    NeededOutput extends PartialUnion<keyof Output>,
    FilteredKeys extends FilteredOptional<Output, NeededOutput>,
  >(
    source: Vips.Source,
    options?: Options<
      {
        string_options?: string;
        page?: number;
        n?: number;
        scale?: number;
        memory?: boolean;
        access?: Vips.Access;
        fail_on?: Vips.FailOn;
      },
      NeededOutput[]  
    >,
  ): [
    out: Vips.Image,
    optional_output: Pick<Output, FilteredKeys>,
  ];

  /**
   * save as WebP
   * @param __input - this - Image to save
   * @param filename - Filename to save to
   * @param [options] - optional parameters
   * @param [options.Q] - Q factor
   * @param [options.lossless] - Enable lossless compression
   * @param [options.preset] - Preset for lossy compression
   * @param [options.smart_subsample] - Enable high quality chroma subsampling
   * @param [options.near_lossless] - Enable preprocessing in lossless mode (uses Q)
   * @param [options.alpha_q] - Change alpha plane fidelity for lossy compression
   * @param [options.min_size] - Optimise for minimum size
   * @param [options.kmin] - Minimum number of frames between key frames
   * @param [options.kmax] - Maximum number of frames between key frames
   * @param [options.effort] - Level of CPU effort to reduce file size
   * @param [options.profile] - ICC profile to embed
   * @param [options.mixed] - Allow mixed encoding (might reduce file size)
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  webpsave(
    filename: string,
    options?: Options<
      {
        string_options?: string;
        Q?: number;
        lossless?: boolean;
        preset?: Vips.ForeignWebpPreset;
        smart_subsample?: boolean;
        near_lossless?: boolean;
        alpha_q?: number;
        min_size?: boolean;
        kmin?: number;
        kmax?: number;
        effort?: number;
        profile?: string;
        mixed?: boolean;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save as WebP
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.Q] - Q factor
   * @param [options.lossless] - Enable lossless compression
   * @param [options.preset] - Preset for lossy compression
   * @param [options.smart_subsample] - Enable high quality chroma subsampling
   * @param [options.near_lossless] - Enable preprocessing in lossless mode (uses Q)
   * @param [options.alpha_q] - Change alpha plane fidelity for lossy compression
   * @param [options.min_size] - Optimise for minimum size
   * @param [options.kmin] - Minimum number of frames between key frames
   * @param [options.kmax] - Maximum number of frames between key frames
   * @param [options.effort] - Level of CPU effort to reduce file size
   * @param [options.profile] - ICC profile to embed
   * @param [options.mixed] - Allow mixed encoding (might reduce file size)
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  webpsave_buffer(
    options?: Options<
      {
        string_options?: string;
        Q?: number;
        lossless?: boolean;
        preset?: Vips.ForeignWebpPreset;
        smart_subsample?: boolean;
        near_lossless?: boolean;
        alpha_q?: number;
        min_size?: boolean;
        kmin?: number;
        kmax?: number;
        effort?: number;
        profile?: string;
        mixed?: boolean;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): Vips.Blob;

  /**
   * save image to webp mime
   * @param __input - this - Image to save
  
   * @param [options] - optional parameters
   * @param [options.Q] - Q factor
   * @param [options.lossless] - Enable lossless compression
   * @param [options.preset] - Preset for lossy compression
   * @param [options.smart_subsample] - Enable high quality chroma subsampling
   * @param [options.near_lossless] - Enable preprocessing in lossless mode (uses Q)
   * @param [options.alpha_q] - Change alpha plane fidelity for lossy compression
   * @param [options.min_size] - Optimise for minimum size
   * @param [options.kmin] - Minimum number of frames between key frames
   * @param [options.kmax] - Maximum number of frames between key frames
   * @param [options.effort] - Level of CPU effort to reduce file size
   * @param [options.profile] - ICC profile to embed
   * @param [options.mixed] - Allow mixed encoding (might reduce file size)
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  webpsave_mime(
    options?: Options<
      {
        string_options?: string;
        Q?: number;
        lossless?: boolean;
        preset?: Vips.ForeignWebpPreset;
        smart_subsample?: boolean;
        near_lossless?: boolean;
        alpha_q?: number;
        min_size?: boolean;
        kmin?: number;
        kmax?: number;
        effort?: number;
        profile?: string;
        mixed?: boolean;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * save as WebP
   * @param __input - this - Image to save
   * @param target - Target to save to
   * @param [options] - optional parameters
   * @param [options.Q] - Q factor
   * @param [options.lossless] - Enable lossless compression
   * @param [options.preset] - Preset for lossy compression
   * @param [options.smart_subsample] - Enable high quality chroma subsampling
   * @param [options.near_lossless] - Enable preprocessing in lossless mode (uses Q)
   * @param [options.alpha_q] - Change alpha plane fidelity for lossy compression
   * @param [options.min_size] - Optimise for minimum size
   * @param [options.kmin] - Minimum number of frames between key frames
   * @param [options.kmax] - Maximum number of frames between key frames
   * @param [options.effort] - Level of CPU effort to reduce file size
   * @param [options.profile] - ICC profile to embed
   * @param [options.mixed] - Allow mixed encoding (might reduce file size)
   * @param [options.strip] - Strip all metadata from image
   * @param [options.background] - Background value
   * @param [options.page_height] - Set page height for multipage save
   */
  webpsave_target(
    target: Vips.Target,
    options?: Options<
      {
        string_options?: string;
        Q?: number;
        lossless?: boolean;
        preset?: Vips.ForeignWebpPreset;
        smart_subsample?: boolean;
        near_lossless?: boolean;
        alpha_q?: number;
        min_size?: boolean;
        kmin?: number;
        kmax?: number;
        effort?: number;
        profile?: string;
        mixed?: boolean;
        strip?: boolean;
        background?: number[];
        page_height?: number;
      }  
    >,
  ): void

  /**
   * make a worley noise image
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param [options] - optional parameters
   * @param [options.cell_size] - Size of Worley cells
   * @param [options.seed] - Random number seed
   */
  static worley(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        cell_size?: number;
        seed?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * wrap image origin
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.x] - Left edge of input in output
   * @param [options.y] - Top edge of input in output
   */
  wrap(
    options?: Options<
      {
        string_options?: string;
        x?: number;
        y?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * make an image where pixel values are coordinates
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param [options] - optional parameters
   * @param [options.csize] - Size of third dimension
   * @param [options.dsize] - Size of fourth dimension
   * @param [options.esize] - Size of fifth dimension
   */
  static xyz(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        csize?: number;
        dsize?: number;
        esize?: number;
      }  
    >,
  ): Vips.Image;

  /**
   * transform XYZ to CMYK
   * @param __input - this - Input image
   */
  XYZ2CMYK(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform XYZ to Lab
   * @param __input - this - Input image
  
   * @param [options] - optional parameters
   * @param [options.temp] - Colour temperature
   */
  XYZ2Lab(
    options?: Options<
      {
        string_options?: string;
        temp?: number[];
      }  
    >,
  ): Vips.Image;

  /**
   * transform XYZ to scRGB
   * @param __input - this - Input image
   */
  XYZ2scRGB(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform XYZ to Yxy
   * @param __input - this - Input image
   */
  XYZ2Yxy(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * transform Yxy to XYZ
   * @param __input - this - Input image
   */
  Yxy2XYZ(
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;

  /**
   * make a zone plate
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param [options] - optional parameters
   * @param [options.uchar] - Output an unsigned char image
   */
  static zone(
    width: number,
    height: number,
    options?: Options<
      {
        string_options?: string;
        uchar?: boolean;
      }  
    >,
  ): Vips.Image;

  /**
   * zoom an image
   * @param input - this - Input image
   * @param xfac - Horizontal zoom factor
   * @param yfac - Vertical zoom factor */
  zoom(
    xfac: number,
    yfac: number,
    options?: Options<
      {
        string_options?: string;
      }  
    >,
  ): Vips.Image;
}
