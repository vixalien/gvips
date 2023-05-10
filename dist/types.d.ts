// this file is generated automatically -- do not edit!

import * as Vips from "gi-types/vips8";

export class Image extends Vips.Image {
  /**
   * run an external command
   * @param cmd_format - Command to run
   * @param [options] - optional parameters
   * @param [options.in] - Array of input images
   * @param [options.out_format] - Format for output filename
   * @param [options.in_format] - Format for input filename
   */
  static system(
    cmd_format: string,
    options?: {
      in?: Vips.Image[];
      out_format?: string;
      in_format?: string;  
    }
  ): [
    optional_output?: {
      out?: Vips.Image;
      log?: string;  
    }
  ]

  /**
   * relational operation on two images
   * @param left - Left-hand image argument
   * @param right - Right-hand image argument
   * @param relational - Relational to perform
   */
  relational(
    left: Vips.Image,
    right: Vips.Image,
    relational: Vips.OperationRelational,
  ): Vips.Image

  /**
   * remainder after integer division of two images
   * @param left - Left-hand image argument
   * @param right - Right-hand image argument
   */
  remainder(
    left: Vips.Image,
    right: Vips.Image,
  ): Vips.Image

  /**
   * boolean operation on two images
   * @param left - Left-hand image argument
   * @param right - Right-hand image argument
   * @param boolean - Boolean to perform
   */
  boolean(
    left: Vips.Image,
    right: Vips.Image,
    boolean: Vips.OperationBoolean,
  ): Vips.Image

  /**
   * binary math operations
   * @param left - Left-hand image argument
   * @param right - Right-hand image argument
   * @param math2 - Math to perform
   */
  math2(
    left: Vips.Image,
    right: Vips.Image,
    math2: Vips.OperationMath2,
  ): Vips.Image

  /**
   * complex binary operations on two images
   * @param left - Left-hand image argument
   * @param right - Right-hand image argument
   * @param cmplx - Binary complex operation to perform
   */
  complex2(
    left: Vips.Image,
    right: Vips.Image,
    cmplx: Vips.OperationComplex2,
  ): Vips.Image

  /**
   * form a complex image from two real images
   * @param left - Left-hand image argument
   * @param right - Right-hand image argument
   */
  complexform(
    left: Vips.Image,
    right: Vips.Image,
  ): Vips.Image

  /**
   * insert image @sub into @main at @x, @y
   * @param main - Main input image
   * @param sub - Sub-image to insert into main image
   * @param x - Left edge of sub in main
   * @param y - Top edge of sub in main
   * @param [options] - optional parameters
   * @param [options.expand] - Expand output to hold all of both inputs
   * @param [options.background] - Color for new pixels
   */
  insert(
    main: Vips.Image,
    sub: Vips.Image,
    x: number,
    y: number,
    options?: {
      expand?: boolean;
      background?: number[];  
    }
  ): Vips.Image

  /**
   * join a pair of images
   * @param in1 - First input image
   * @param in2 - Second input image
   * @param direction - Join left-right or up-down
   * @param [options] - optional parameters
   * @param [options.expand] - Expand output to hold all of both inputs
   * @param [options.shim] - Pixels between images
   * @param [options.background] - Colour for new pixels
   * @param [options.align] - Align on the low, centre or high coordinate edge
   */
  join(
    in1: Vips.Image,
    in2: Vips.Image,
    direction: Vips.Direction,
    options?: {
      expand?: boolean;
      shim?: number;
      background?: number[];
      align?: Vips.Align;  
    }
  ): Vips.Image

  /**
   * extract an area from an image
   * @param input - Input image
   * @param left - Left edge of extract area
   * @param top - Top edge of extract area
   * @param width - Width of extract area
   * @param height - Height of extract area
   */
  extract_area(
    input: Vips.Image,
    left: number,
    top: number,
    width: number,
    height: number,
  ): Vips.Image

  /**
   * extract an area from an image
   * @param input - Input image
   * @param left - Left edge of extract area
   * @param top - Top edge of extract area
   * @param width - Width of extract area
   * @param height - Height of extract area
   */
  extract_area(
    input: Vips.Image,
    left: number,
    top: number,
    width: number,
    height: number,
  ): Vips.Image

  /**
   * extract an area from an image
   * @param input - Input image
   * @param width - Width of extract area
   * @param height - Height of extract area
   * @param [options] - optional parameters
   * @param [options.interesting] - How to measure interestingness
   */
  smartcrop(
    input: Vips.Image,
    width: number,
    height: number,
    options?: {
      interesting?: Vips.Interesting;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      attention_x?: number;
      attention_y?: number;  
    }
  ]

  /**
   * zoom an image
   * @param input - Input image
   * @param xfac - Horizontal zoom factor
   * @param yfac - Vertical zoom factor
   */
  zoom(
    input: Vips.Image,
    xfac: number,
    yfac: number,
  ): Vips.Image

  /**
   * subsample an image
   * @param input - Input image
   * @param xfac - Horizontal subsample factor
   * @param yfac - Vertical subsample factor
   * @param [options] - optional parameters
   * @param [options.point] - Point sample
   */
  subsample(
    input: Vips.Image,
    xfac: number,
    yfac: number,
    options?: {
      point?: boolean;  
    }
  ): Vips.Image

  /**
   * blend a pair of images with a blend mode
   * @param base - Base image
   * @param overlay - Overlay image
   * @param mode - VipsBlendMode to join with
   * @param [options] - optional parameters
   * @param [options.x] - x position of overlay
   * @param [options.y] - y position of overlay
   * @param [options.compositing_space] - Composite images in this colour space
   * @param [options.premultiplied] - Images have premultiplied alpha
   */
  composite2(
    base: Vips.Image,
    overlay: Vips.Image,
    mode: Vips.BlendMode,
    options?: {
      x?: number;
      y?: number;
      compositing_space?: Vips.Interpretation;
      premultiplied?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      bands?: number;  
    }
  ): Vips.Image

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
    options?: {
      sigma?: number;
      mean?: number;
      seed?: number;  
    }
  ): Vips.Image

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
    options?: {
      csize?: number;
      dsize?: number;
      esize?: number;  
    }
  ): Vips.Image

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
    options?: {
      separable?: boolean;
      precision?: Vips.Precision;  
    }
  ): Vips.Image

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
    options?: {
      separable?: boolean;
      precision?: Vips.Precision;  
    }
  ): Vips.Image

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
   */
  static text(
    text: string,
    options?: {
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
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      autofit_dpi?: number;  
    }
  ]

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
    options?: {
      uchar?: boolean;
      factor?: number;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;
      hfreq?: number;
      vfreq?: number;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;
      nodc?: boolean;
      reject?: boolean;
      optical?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;
      nodc?: boolean;
      reject?: boolean;
      optical?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;
      nodc?: boolean;
      reject?: boolean;
      optical?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;
      nodc?: boolean;
      reject?: boolean;
      optical?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;
      nodc?: boolean;
      reject?: boolean;
      optical?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;
      nodc?: boolean;
      reject?: boolean;
      optical?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;
      nodc?: boolean;
      reject?: boolean;
      optical?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;
      nodc?: boolean;
      reject?: boolean;
      optical?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;
      nodc?: boolean;
      reject?: boolean;
      optical?: boolean;  
    }
  ): Vips.Image

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
    options?: {
      uchar?: boolean;
      nodc?: boolean;
      reject?: boolean;
      optical?: boolean;  
    }
  ): Vips.Image

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
    options?: {
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
  ): Vips.Image

  /**
   * make a 1D image where pixel values are indexes
  
   * @param [options] - optional parameters
   * @param [options.bands] - Number of bands in LUT
   * @param [options.ushort] - Create a 16-bit LUT
   * @param [options.size] - Size of 16-bit LUT
   */
  static identity(
    options?: {
      bands?: number;
      ushort?: boolean;
      size?: number;  
    }
  ): Vips.Image

  /**
   * make a fractal surface
   * @param width - Image width in pixels
   * @param height - Image height in pixels
   * @param fractal_dimension - Fractal dimension
   */
  static fractsurf(
    width: number,
    height: number,
    fractal_dimension: number,
  ): Vips.Image

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
    options?: {
      cell_size?: number;
      seed?: number;  
    }
  ): Vips.Image

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
    options?: {
      cell_size?: number;
      uchar?: boolean;
      seed?: number;  
    }
  ): Vips.Image

  /**
   * find the index of the first non-zero pixel in tests
   * @param tests - Table of images to test
   */
  static switch(
    tests: Vips.Image[],
  ): Vips.Image

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
   */
  static csvload(
    filename: string,
    options?: {
      skip?: number;
      lines?: number;
      whitespace?: string;
      separator?: string;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static csvload_source(
    source: Vips.Source,
    options?: {
      skip?: number;
      lines?: number;
      whitespace?: string;
      separator?: string;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load matrix
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static matrixload(
    filename: string,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load matrix
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static matrixload_source(
    source: Vips.Source,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static rawload(
    filename: string,
    width: number,
    height: number,
    bands: number,
    options?: {
      offset?: number;
      format?: Vips.BandFormat;
      interpretation?: Vips.Interpretation;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load vips from file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static vipsload(
    filename: string,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load vips from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static vipsload_source(
    source: Vips.Source,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load an Analyze6 image
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static analyzeload(
    filename: string,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load ppm from file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static ppmload(
    filename: string,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load ppm base class
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static ppmload_source(
    source: Vips.Source,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load a Radiance image from a file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static radload(
    filename: string,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load rad from buffer
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static radload_buffer(
    buffer: Vips.Blob,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load rad from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static radload_source(
    source: Vips.Source,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static svgload(
    filename: string,
    options?: {
      dpi?: number;
      scale?: number;
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static svgload_buffer(
    buffer: Vips.Blob,
    options?: {
      dpi?: number;
      scale?: number;
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static svgload_source(
    source: Vips.Source,
    options?: {
      dpi?: number;
      scale?: number;
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load JPEG2000 image
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.page] - Load this page from the image
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static jp2kload(
    filename: string,
    options?: {
      page?: number;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load JPEG2000 image
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.page] - Load this page from the image
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static jp2kload_buffer(
    buffer: Vips.Blob,
    options?: {
      page?: number;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load JPEG2000 image
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.page] - Load this page from the image
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static jp2kload_source(
    source: Vips.Source,
    options?: {
      page?: number;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load GIF with libnsgif
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.page] - First page to load
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static gifload(
    filename: string,
    options?: {
      n?: number;
      page?: number;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load GIF with libnsgif
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.page] - First page to load
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static gifload_buffer(
    buffer: Vips.Blob,
    options?: {
      n?: number;
      page?: number;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load gif from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.n] - Number of pages to load, -1 for all
   * @param [options.page] - First page to load
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static gifload_source(
    source: Vips.Source,
    options?: {
      n?: number;
      page?: number;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load png from file
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static pngload(
    filename: string,
    options?: {
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load png from buffer
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static pngload_buffer(
    buffer: Vips.Blob,
    options?: {
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load png from source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.unlimited] - Remove all denial of service limits
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static pngload_source(
    source: Vips.Source,
    options?: {
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static jpegload(
    filename: string,
    options?: {
      shrink?: number;
      autorotate?: boolean;
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static jpegload_buffer(
    buffer: Vips.Blob,
    options?: {
      shrink?: number;
      autorotate?: boolean;
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static jpegload_source(
    source: Vips.Source,
    options?: {
      shrink?: number;
      autorotate?: boolean;
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static webpload(
    filename: string,
    options?: {
      page?: number;
      n?: number;
      scale?: number;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static webpload_buffer(
    buffer: Vips.Blob,
    options?: {
      page?: number;
      n?: number;
      scale?: number;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static webpload_source(
    source: Vips.Source,
    options?: {
      page?: number;
      n?: number;
      scale?: number;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static tiffload(
    filename: string,
    options?: {
      page?: number;
      subifd?: number;
      n?: number;
      autorotate?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static tiffload_buffer(
    buffer: Vips.Blob,
    options?: {
      page?: number;
      subifd?: number;
      n?: number;
      autorotate?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static tiffload_source(
    source: Vips.Source,
    options?: {
      page?: number;
      subifd?: number;
      n?: number;
      autorotate?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load a FITS image
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static fitsload(
    filename: string,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load FITS from a source
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static fitsload_source(
    source: Vips.Source,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load an OpenEXR image
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static openexrload(
    filename: string,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static magickload(
    filename: string,
    options?: {
      density?: string;
      page?: number;
      n?: number;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static magickload_buffer(
    buffer: Vips.Blob,
    options?: {
      density?: string;
      page?: number;
      n?: number;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static heifload(
    filename: string,
    options?: {
      page?: number;
      n?: number;
      thumbnail?: boolean;
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static heifload_buffer(
    buffer: Vips.Blob,
    options?: {
      page?: number;
      n?: number;
      thumbnail?: boolean;
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static heifload_source(
    source: Vips.Source,
    options?: {
      page?: number;
      n?: number;
      thumbnail?: boolean;
      unlimited?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static pdfload(
    filename: string,
    options?: {
      page?: number;
      n?: number;
      dpi?: number;
      scale?: number;
      background?: number[];
      password?: string;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static pdfload_buffer(
    buffer: Vips.Blob,
    options?: {
      page?: number;
      n?: number;
      dpi?: number;
      scale?: number;
      background?: number[];
      password?: string;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static pdfload_source(
    source: Vips.Source,
    options?: {
      page?: number;
      n?: number;
      dpi?: number;
      scale?: number;
      background?: number[];
      password?: string;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load JPEG-XL image
   * @param filename - Filename to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static jxlload(
    filename: string,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load JPEG-XL image
   * @param buffer - Buffer to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static jxlload_buffer(
    buffer: Vips.Blob,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

  /**
   * load JPEG-XL image
   * @param source - Source to load from
   * @param [options] - optional parameters
   * @param [options.memory] - Force open via memory
   * @param [options.access] - Required access pattern for this file
   * @param [options.fail_on] - Error level to fail on
   */
  static jxlload_source(
    source: Vips.Source,
    options?: {
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static openslideload(
    filename: string,
    options?: {
      level?: number;
      autocrop?: boolean;
      associated?: string;
      attach_associated?: boolean;
      rgb?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
   */
  static openslideload_source(
    source: Vips.Source,
    options?: {
      level?: number;
      autocrop?: boolean;
      associated?: string;
      attach_associated?: boolean;
      rgb?: boolean;
      memory?: boolean;
      access?: Vips.Access;
      fail_on?: Vips.FailOn;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      flags?: Vips.ForeignFlags;  
    }
  ]

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
    options?: {
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
  ): Vips.Image

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
    options?: {
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
  ): Vips.Image

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
    options?: {
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
  ): Vips.Image

  /**
   * calculate dE76
   * @param left - Left-hand input image
   * @param right - Right-hand input image
   */
  dE76(
    left: Vips.Image,
    right: Vips.Image,
  ): Vips.Image

  /**
   * calculate dE00
   * @param left - Left-hand input image
   * @param right - Right-hand input image
   */
  dE00(
    left: Vips.Image,
    right: Vips.Image,
  ): Vips.Image

  /**
   * calculate dECMC
   * @param left - Left-hand input image
   * @param right - Right-hand input image
   */
  dECMC(
    left: Vips.Image,
    right: Vips.Image,
  ): Vips.Image

  /**
   * load named ICC profile
   * @param name - Profile name
   */
  static profile_load(
    name: string,
  ): Vips.Blob

  /**
   * use pixel values to pick cases from an array of images
   * @param index - Index image
   * @param cases - Array of case images
   */
  case(
    index: Vips.Image,
    cases: Vips.Image[],
  ): Vips.Image

  /**
   * paint a rectangle on an image
   * @param image - Image to draw on
   * @param ink - Color for pixels
   * @param left - Rect to fill
   * @param top - Rect to fill
   * @param width - Rect to fill
   * @param height - Rect to fill
   * @param [options] - optional parameters
   * @param [options.fill] - Draw a solid object
   */
  draw_rect(
    image: Vips.Image,
    ink: number[],
    left: number,
    top: number,
    width: number,
    height: number,
    options?: {
      fill?: boolean;  
    }
  ): Vips.Image

  /**
   * draw a mask on an image
   * @param image - Image to draw on
   * @param ink - Color for pixels
   * @param mask - Mask of pixels to draw
   * @param x - Draw mask here
   * @param y - Draw mask here
   */
  draw_mask(
    image: Vips.Image,
    ink: number[],
    mask: Vips.Image,
    x: number,
    y: number,
  ): Vips.Image

  /**
   * draw a line on an image
   * @param image - Image to draw on
   * @param ink - Color for pixels
   * @param x1 - Start of draw_line
   * @param y1 - Start of draw_line
   * @param x2 - End of draw_line
   * @param y2 - End of draw_line
   */
  draw_line(
    image: Vips.Image,
    ink: number[],
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ): Vips.Image

  /**
   * draw a circle on an image
   * @param image - Image to draw on
   * @param ink - Color for pixels
   * @param cx - Centre of draw_circle
   * @param cy - Centre of draw_circle
   * @param radius - Radius in pixels
   * @param [options] - optional parameters
   * @param [options.fill] - Draw a solid object
   */
  draw_circle(
    image: Vips.Image,
    ink: number[],
    cx: number,
    cy: number,
    radius: number,
    options?: {
      fill?: boolean;  
    }
  ): Vips.Image

  /**
   * flood-fill an area
   * @param image - Image to draw on
   * @param ink - Color for pixels
   * @param x - DrawFlood start point
   * @param y - DrawFlood start point
   * @param [options] - optional parameters
   * @param [options.test] - Test pixels in this image
   * @param [options.equal] - DrawFlood while equal to edge
   */
  draw_flood(
    image: Vips.Image,
    ink: number[],
    x: number,
    y: number,
    options?: {
      test?: Vips.Image;
      equal?: boolean;  
    }
  ): [
    image: Vips.Image,
    optional_output?: {
      left?: number;
      top?: number;
      width?: number;
      height?: number;  
    }
  ]

  /**
   * paint an image into another image
   * @param image - Image to draw on
   * @param sub - Sub-image to insert into main image
   * @param x - Draw image here
   * @param y - Draw image here
   * @param [options] - optional parameters
   * @param [options.mode] - Combining mode
   */
  draw_image(
    image: Vips.Image,
    sub: Vips.Image,
    x: number,
    y: number,
    options?: {
      mode?: Vips.CombineMode;  
    }
  ): Vips.Image

  /**
   * blur a rectangle on an image
   * @param image - Image to draw on
   * @param left - Rect to fill
   * @param top - Rect to fill
   * @param width - Rect to fill
   * @param height - Rect to fill
   */
  draw_smudge(
    image: Vips.Image,
    left: number,
    top: number,
    width: number,
    height: number,
  ): Vips.Image

  /**
   * merge two images
   * @param ref - Reference image
   * @param sec - Secondary image
   * @param direction - Horizontal or vertical merge
   * @param dx - Horizontal displacement from sec to ref
   * @param dy - Vertical displacement from sec to ref
   * @param [options] - optional parameters
   * @param [options.mblend] - Maximum blend size
   */
  merge(
    ref: Vips.Image,
    sec: Vips.Image,
    direction: Vips.Direction,
    dx: number,
    dy: number,
    options?: {
      mblend?: number;  
    }
  ): Vips.Image

  /**
   * mosaic two images
   * @param ref - Reference image
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
   */
  mosaic(
    ref: Vips.Image,
    sec: Vips.Image,
    direction: Vips.Direction,
    xref: number,
    yref: number,
    xsec: number,
    ysec: number,
    options?: {
      hwindow?: number;
      harea?: number;
      mblend?: number;
      bandno?: number;  
    }
  ): [
    out: Vips.Image,
    optional_output?: {
      dx0?: number;
      dy0?: number;
      scale1?: number;
      angle1?: number;
      dy1?: number;
      dx1?: number;  
    }
  ]

  /**
   * first-order mosaic of two images
   * @param ref - Reference image
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
    ref: Vips.Image,
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
    options?: {
      hwindow?: number;
      harea?: number;
      search?: boolean;
      interpolate?: Vips.Interpolate;
      mblend?: number;  
    }
  ): Vips.Image

  /**
   * first-order match of two images
   * @param ref - Reference image
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
    ref: Vips.Image,
    sec: Vips.Image,
    xr1: number,
    yr1: number,
    xs1: number,
    ys1: number,
    xr2: number,
    yr2: number,
    xs2: number,
    ys2: number,
    options?: {
      hwindow?: number;
      harea?: number;
      search?: boolean;
      interpolate?: Vips.Interpolate;  
    }
  ): Vips.Image
}
