export interface Ansify {
  (...input: unknown[]): string

  // Modifiers

  /** Renders `input` in bold. */
  readonly bold: this

  /** Renders `input` dim. */
  readonly dim: this

  /** Makes `input` invisible when rendered. */
  readonly hidden: this

  /** Inverts background and foreground colors when rendering `input`. */
  readonly inverse: this

  /** Renders `input` in italics. */
  readonly italic: this

  /** Draws line over `input` (not widely supported). */
  readonly overline: this

  /** Resets the current styles affecting `input`. */
  readonly reset: this

  /** Draws a line through `input`. */
  readonly strikethrough: this

  /** Draws a line under `input` */
  readonly underline: this

  // Colors

  /** Renders `input` in black. */
  readonly black: this

  /** Renders `input` in blue. */
  readonly blue: this

  /** Renders `input` in cyan. */
  readonly cyan: this

  /** Renders `input` in gray. */
  readonly gray: this

  /** Renders `input` in green. */
  readonly green: this

  /** Renders `input` in grey. */
  readonly grey: this

  /** Renders `input` in magenta. */
  readonly magenta: this

  /** Renders `input` in red. */
  readonly red: this

  /** Renders `input` in white. */
  readonly white: this

  /** Renders `input` in yellow. */
  readonly yellow: this

  // Bright Colors

  /** Renders `input` in bright black (i.e., gray or grey). */
  readonly brightBlack: this

  /** Renders `input` in bright black (i.e., gray or grey). */
  readonly blackBright: this

  /** Renders `input` in bright blue. */
  readonly brightBlue: this

  /** Renders `input` in bright blue. */
  readonly blueBright: this

  /** Renders `input` in bright cyan. */
  readonly brightCyan: this

  /** Renders `input` in bright cyan. */
  readonly cyanBright: this

  /** Renders `input` in bright green. */
  readonly brightGreen: this

  /** Renders `input` in bright green. */
  readonly greenBright: this


  /** Renders `input` in bright magenta. */
  readonly brightMagenta: this

  /** Renders `input` in bright magenta. */
  readonly magentaBright: this

  /** Renders `input` in bright red. */
  readonly brightRed: this

  /** Renders `input` in bright red. */
  readonly redBright: this

  /** Renders `input` in bright white. */
  readonly brightWhite: this

  /** Renders `input` in bright white. */
  readonly whiteBright: this

  /** Renders `input` in bright yellow. */
  readonly brightYellow: this

  /** Renders `input` in bright yellow. */
  readonly yellowBright: this

  // Background Colors

  /** Renders `input` with a black background. */
  readonly blackBg: this

  /** Renders `input` with a black background. */
  readonly bgBlack: this

  /** Renders `input` with a blue background. */
  readonly blueBg: this

  /** Renders `input` with a blue background. */
  readonly bgBlue: this

  /** Renders `input` with a cyan background. */
  readonly cyanBg: this

  /** Renders `input` with a cyan background. */
  readonly bgCyan: this

  /** Renders `input` with a gray background. */
  readonly grayBg: this

  /** Renders `input` with a gray background. */
  readonly bgGray: this

  /** Renders `input` with a green background. */
  readonly greenBg: this

  /** Renders `input` with a green background. */
  readonly bgGreen: this

  /** Renders `input` with a grey background. */
  readonly greyBg: this

  /** Renders `input` with a grey background. */
  readonly bgGrey: this

  /** Renders `input` with a magenta background. */
  readonly magentaBg: this

  /** Renders `input` with a magenta background. */
  readonly bgMagenta: this

  /** Renders `input` with a red background. */
  readonly redBg: this

  /** Renders `input` with a red background. */
  readonly bgRed: this

  /** Renders `input` with a white background. */
  readonly whiteBg: this

  /** Renders `input` with a white background. */
  readonly bgWhite: this

  /** Renders `input` with a yellow background. */
  readonly yellowBg: this

  /** Renders `input` with a yellow background. */
  readonly bgYellow: this

  // Bright Background Colors

  /** Renders `input` with a bright black (i.e., gray or grey) background. */
  readonly brightBlackBg: this

  /** Renders `input` with a bright black (i.e., gray or grey) background. */
  readonly bgBlackBright: this

  /** Renders `input` with a bright blue background. */
  readonly brightBlueBg: this

  /** Renders `input` with a bright blue background. */
  readonly bgBlueBright: this

  /** Renders `input` with a bright cyan background. */
  readonly brightCyanBg: this

  /** Renders `input` with a bright cyan background. */
  readonly bgCyanBright: this

  /** Renders `input` with a bright green background. */
  readonly brightGreenBg: this

  /** Renders `input` with a bright green background. */
  readonly bgGreenBright: this

  /** Renders `input` with a bright magenta background. */
  readonly brightMagentaBg: this

  /** Renders `input` with a bright magenta background. */
  readonly bgMagentaBright: this

  /** Renders `input` with a bright red background. */
  readonly brightRedBg: this

  /** Renders `input` with a bright red background. */
  readonly bgRedBright: this

  /** Renders `input` with a bright white background. */
  readonly brightWhiteBg: this

  /** Renders `input` with a bright white background. */
  readonly bgWhiteBright: this

  /** Renders `input` with a bright yellow background. */
  readonly brightYellowBg: this

  /** Renders `input` with a bright yellow background. */
  readonly bgYellowBright: this

  // Decorative

  /**
   * Renders `input` only when the output stream supports colors. Useful for
   * styling purely ornamental, enitrely punonfunctional elements.
   */
  readonly decorative: this

  /**
   * Renders `input` only when the output stream supports colors. Useful for
   * styling purely ornamental, enitrely punonfunctional elements.
   */
  readonly visible: this

  // Ansi 256

  /**
   * Renders `input` using one of 256 predeifned ANSI colors.
   *
   * @param {number} color - An ANSI color code between 1 and 256, inclusive.
   *
   * @example
   * ```
   * import ansify from 'ansify'
   * ansify.ansi256(215)
   * ```
   *
   * @see https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797#256-colors
   */
  ansi256: (color: number) => this

  /**
   * Renders `input` background using one of 256 predeifned ANSI colors.
   *
   * @param {number} color - An ANSI color code between 1 and 256, inclusive.
   *
   * @example
   * ```
   * import ansify from 'ansify'
   * ansify.ansi256Bg(215)
   * ```
   *
   * @see https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797#256-colors
   */
  ansi256Bg: (color: number) => this

  /**
   * Renders `input` background using one of 256 predeifned ANSI colors.
   *
   * @param {number} color - An ANSI color code between 1 and 256, inclusive.
   *
   * @example
   * ```
   * import ansify from 'ansify'
   * ansify.bgAnsi256(215)
   * ```
   *
   * @see https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797#256-colors
   */
  bgAnsi256: (color: number) => this

  // Hex

  /**
   * Renders `input` using the 24-bit color specified by the `color` hex string.
   *
   * @param {string} color - A hexadecimal value for the desired color.
   *
   * @example
   * ```
   * import ansify from 'ansify'
   * ansify.hex('#F90')
   * ```
   */
  hex: (color: string) => this

  /**
   * Renders `input` using the 24-bit color background specified by the `color`
   * hex string.
   *
   * @param {string} color - A hexadecimal value for the desired color.
   *
   * @example
   * ```
   * import ansify from 'ansify'
   * ansify.hexBg('#F90')
   * ```
   */
  hexBg: (color: string) => this

  /**
   * Renders `input` using the 24-bit color background specified by the `color`
   * hex string.
   *
   * @param {string} color - A hexadecimal value for the desired color.
   *
   * @example
   * ```
   * import ansify from 'ansify'
   * ansify.bgHex('#F90')
   * ```
   */
  bgHex: (color: string) => this

  // Rgb

  /**
   * Renders `input` using the 24-bit color specified by `red`, `green`, and
   * `blue` values.
   * @param {number} red - A red value between 0 and 255, inclusive.
   * @param {number} green - A green value between 0 and 255, inclusive.
   * @param {number} blue - A blue value between 0 and 255, inclusive.
   *
   * @example
   * ```
   * import ansify from 'ansify'
   * ansify.rgb(255, 153, 0)
   * ```
   */
  rgb: (red: number, green: number, blue: number) => this

  /**
   * Renders `input` using the 24-bit color background specified by `red`,
   * `green`, and `blue` values.
   *
   * @param {number} red - A red value between 0 and 255, inclusive.
   * @param {number} green - A green value between 0 and 255, inclusive.
   * @param {number} blue - A blue value between 0 and 255, inclusive.
   *
   * @example
   * ```
   * import ansify from 'ansify'
   * ansify.rgbBg(255, 153, 0)
   * ```
   */
  rgbBg: (red: number, green: number, blue: number) => this

  /**
   * Renders `input` using the 24-bit color background specified by `red`,
   * `green`, and `blue` values.
   *
   * @param {number} red - A red value between 0 and 255, inclusive.
   * @param {number} green - A green value between 0 and 255, inclusive.
   * @param {number} blue - A blue value between 0 and 255, inclusive.
   *
   * @example
   * ```
   * import ansify from 'ansify'
   * ansify.bgRgb(255, 153, 0)
   * ```
   */
  bgRgb: (red: number, green: number, blue: number) => this
}

/**
 * Provides a chainable API for styling ANSI terminal strings. Call the last
 * property in the chain as a method with a string argument. Order doesn’t
 * matter, later styles take precedence.
 *
 * @example
 * ```
 * import ansify from 'ansify'
 * console.log(ansify.bold.red('Hello!')) // Prints "Hello!" in bold red.
 * ```
 */
declare const ansify: Ansify

export const ansify0: Ansify
export const ansify16: Ansify
export const ansify256: Ansify
export const ansifyErr: Ansify
export const ansifyRgb: Ansify

export default ansify
