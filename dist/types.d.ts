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
   * run an external command
   * @param cmd_format - Command to run
   * @param [options] - optional parameters
   * @param [options.in] - Array of input images
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
        in?: Vips.Image[];
        out_format?: string;
        in_format?: string;
      },
      NeededOutput[]  
    >,
  ): [
    optional_output: Pick<Output, FilteredKeys>,
  ] | null;

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
   * remainder after integer division of two images
   * @param left - this - Left-hand image argument
   * @param right - Right-hand image argument */
  remainder(
    right: Vips.Image,
    options?: Options<
      {
        string_options?: string;
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
}
