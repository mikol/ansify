import {
  default as ansify, ansify0, ansify16, ansify256, ansifyErr, ansifyRgb
} from './ansify.mjs'

const {log: put, error: report} = console
const eolRegExp = /\r\n?|\n/

function assertStrictEquality(actual, expected) {
  if (actual !== expected) {
    const actualString = ansify.red(escapeAnsi(actual))
    const expectedString = ansify.yellow(escapeAnsi(expected))
    throw new Error(`actual: >${actualString}<, expected: >${expectedString}<`)
  }
}

function assertStrictInequality(actual, expected) {
  if (actual === expected) {
    const actualString = ansify.red(escapeAnsi(actual))
    const expectedString = ansify.yellow(escapeAnsi(expected))
    throw new Error(`actual: >${actualString}<, not expected: >${expectedString}<`)
  }
}

function escapeAnsi(ansi) {
  return typeof ansi === 'string' ? ansi.replaceAll('\x1b', '\\x1b') : ansi
}

function test(intention, fn) {
  try {
    fn()
    put(ansify.green(' + PASS '), intention)
  } catch (error) {
    const match = eolRegExp.exec(error.stack)
    const eol = match != null ? `${match[0]} ${ansify.red('·')} ` : ''

    let message = ` ${ansify.red('·')} ${error.stack}`

    if (match != null) {
      message = message.split(eolRegExp).join(eol)
    }

    report(ansify.red(' - FAIL '), intention)
    return message
  }
}

const Test = {
  'Root function shouldn’t add style': () => {
    assertStrictEquality(ansify16('Hello!'), 'Hello!')
  },
  'Root function should concatenate multiple arguments': () => {
    assertStrictEquality(ansify16('Hello,', 'World!'), 'Hello, World!')
  },
  'API should coerce input into strings': () => {
    assertStrictEquality(ansify16(['Hello', 'World!']), 'Hello,World!')
    assertStrictEquality(ansify16(235), '235')

    assertStrictEquality(ansify16.dim(['Hello', ' World!']), '\x1b[2mHello, World!\x1b[22m')
    assertStrictEquality(ansify16.yellow(4032), '\x1b[33m4032\x1b[39m')
  },

  // Styles

  'API should bold input': () => {
    assertStrictEquality(ansify16.bold('xyz'), '\x1b[1mxyz\x1b[22m')
  },
  'API should dim input': () => {
    assertStrictEquality(ansify16.dim('xyz'), '\x1b[2mxyz\x1b[22m')
  },
  'API should hide input': () => {
    assertStrictEquality(ansify16.hidden('xyz'), '\x1b[8mxyz\x1b[28m')
  },
  'API should invert input color': () => {
    assertStrictEquality(ansify16.inverse('xyz'), '\x1b[7mxyz\x1b[27m')
  },
  'API should italicize input': () => {
    assertStrictEquality(ansify16.italic('xyz'), '\x1b[3mxyz\x1b[23m')
  },
  'API should draw a line over input': () => {
    assertStrictEquality(ansify16.overline('xyz'), '\x1b[53mxyz\x1b[55m')
  },
  'API should reset styles': () => {
    assertStrictEquality(ansify16.reset('xyz'), '\x1b[0mxyz\x1b[0m')
  },
  'API should strike through input': () => {
    assertStrictEquality(ansify16.strikethrough('xyz'), '\x1b[9mxyz\x1b[29m')
  },
  'API should draw a line under input': () => {
    assertStrictEquality(ansify16.underline('xyz'), '\x1b[4mxyz\x1b[24m')
  },

  // Colors

  'API should color input black': () => {
    assertStrictEquality(ansify16.black('xyz'), '\x1b[30mxyz\x1b[39m')
  },
  'API should color input blue': () => {
    assertStrictEquality(ansify16.blue('xyz'), '\x1b[34mxyz\x1b[39m')
  },
  'API should color input cyan': () => {
    assertStrictEquality(ansify16.cyan('xyz'), '\x1b[36mxyz\x1b[39m')
  },
  'API should color input gray': () => {
    assertStrictEquality(ansify16.gray('xyz'), '\x1b[90mxyz\x1b[39m')
  },
  'API should color input green': () => {
    assertStrictEquality(ansify16.green('xyz'), '\x1b[32mxyz\x1b[39m')
  },
  'API should color input grey': () => {
    assertStrictEquality(ansify16.grey('xyz'), '\x1b[90mxyz\x1b[39m')
    assertStrictEquality(ansify16.grey('xyz'), ansify16.gray('xyz'))
    assertStrictEquality(ansify16.grey('xyz'), ansify16.brightBlack('xyz'))
  },
  'API should color input magenta': () => {
    assertStrictEquality(ansify16.magenta('xyz'), '\x1b[35mxyz\x1b[39m')
  },
  'API should color input red': () => {
    assertStrictEquality(ansify16.red('xyz'), '\x1b[31mxyz\x1b[39m')
  },
  'API should color input white': () => {
    assertStrictEquality(ansify16.white('xyz'), '\x1b[37mxyz\x1b[39m')
  },
  'API should color input yellow': () => {
    assertStrictEquality(ansify16.yellow('xyz'), '\x1b[33mxyz\x1b[39m')
  },

  // Bright Colors

  'API should color input bright black': () => {
    assertStrictEquality(ansify16.brightBlack('xyz'), '\x1b[90mxyz\x1b[39m')
  },
  'API should color input black bright': () => {
    assertStrictEquality(ansify16.blackBright('xyz'), '\x1b[90mxyz\x1b[39m')
  },
  'API should color input bright blue': () => {
    assertStrictEquality(ansify16.brightBlue('xyz'), '\x1b[94mxyz\x1b[39m')
  },
  'API should color input blue bright': () => {
    assertStrictEquality(ansify16.blueBright('xyz'), '\x1b[94mxyz\x1b[39m')
  },
  'API should color input bright cyan': () => {
    assertStrictEquality(ansify16.brightCyan('xyz'), '\x1b[96mxyz\x1b[39m')
  },
  'API should color input cyan bright': () => {
    assertStrictEquality(ansify16.cyanBright('xyz'), '\x1b[96mxyz\x1b[39m')
  },
  'API should color input bright green': () => {
    assertStrictEquality(ansify16.brightGreen('xyz'), '\x1b[92mxyz\x1b[39m')
  },
  'API should color input green bright': () => {
    assertStrictEquality(ansify16.greenBright('xyz'), '\x1b[92mxyz\x1b[39m')
  },
  'API should color input bright magenta': () => {
    assertStrictEquality(ansify16.brightMagenta('xyz'), '\x1b[95mxyz\x1b[39m')
  },
  'API should color input magenta bright': () => {
    assertStrictEquality(ansify16.magentaBright('xyz'), '\x1b[95mxyz\x1b[39m')
  },
  'API should color input bright red': () => {
    assertStrictEquality(ansify16.brightRed('xyz'), '\x1b[91mxyz\x1b[39m')
  },
  'API should color input red bright': () => {
    assertStrictEquality(ansify16.redBright('xyz'), '\x1b[91mxyz\x1b[39m')
  },
  'API should color input bright white': () => {
    assertStrictEquality(ansify16.brightWhite('xyz'), '\x1b[97mxyz\x1b[39m')
  },
  'API should color input white bright': () => {
    assertStrictEquality(ansify16.whiteBright('xyz'), '\x1b[97mxyz\x1b[39m')
  },
  'API should color input bright yellow': () => {
    assertStrictEquality(ansify16.brightYellow('xyz'), '\x1b[93mxyz\x1b[39m')
  },
  'API should color input yellow bright': () => {
    assertStrictEquality(ansify16.yellowBright('xyz'), '\x1b[93mxyz\x1b[39m')
  },

  // Background Colors

  'API should color input background black': () => {
    assertStrictEquality(ansify16.blackBg('xyz'), '\x1b[40mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgBlack('xyz'), '\x1b[40mxyz\x1b[49m')
  },
  'API should color input background blue': () => {
    assertStrictEquality(ansify16.blueBg('xyz'), '\x1b[44mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgBlue('xyz'), '\x1b[44mxyz\x1b[49m')
  },
  'API should color input background cyan': () => {
    assertStrictEquality(ansify16.cyanBg('xyz'), '\x1b[46mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgCyan('xyz'), '\x1b[46mxyz\x1b[49m')
  },
  'API should color input background gray': () => {
    assertStrictEquality(ansify16.grayBg('xyz'), '\x1b[100mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgGray('xyz'), '\x1b[100mxyz\x1b[49m')
  },
  'API should color input background green': () => {
    assertStrictEquality(ansify16.greenBg('xyz'), '\x1b[42mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgGreen('xyz'), '\x1b[42mxyz\x1b[49m')
  },
  'API should color input background grey': () => {
    assertStrictEquality(ansify16.greyBg('xyz'), '\x1b[100mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgGrey('xyz'), '\x1b[100mxyz\x1b[49m')
  },
  'API should color input background magenta': () => {
    assertStrictEquality(ansify16.magentaBg('xyz'), '\x1b[45mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgMagenta('xyz'), '\x1b[45mxyz\x1b[49m')
  },
  'API should color input background red': () => {
    assertStrictEquality(ansify16.redBg('xyz'), '\x1b[41mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgRed('xyz'), '\x1b[41mxyz\x1b[49m')
  },
  'API should color input background white': () => {
    assertStrictEquality(ansify16.whiteBg('xyz'), '\x1b[47mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgWhite('xyz'), '\x1b[47mxyz\x1b[49m')
  },
  'API should color input background yellow': () => {
    assertStrictEquality(ansify16.yellowBg('xyz'), '\x1b[43mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgYellow('xyz'), '\x1b[43mxyz\x1b[49m')
  },

  // Bright Background Colors

  'API should color input background bright black': () => {
    assertStrictEquality(ansify16.brightBlackBg('xyz'), '\x1b[100mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgBlackBright('xyz'), '\x1b[100mxyz\x1b[49m')
  },
  'API should color input background bright blue': () => {
    assertStrictEquality(ansify16.brightBlueBg('xyz'), '\x1b[104mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgBlueBright('xyz'), '\x1b[104mxyz\x1b[49m')
  },
  'API should color input background bright cyan': () => {
    assertStrictEquality(ansify16.brightCyanBg('xyz'), '\x1b[106mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgCyanBright('xyz'), '\x1b[106mxyz\x1b[49m')
  },
  'API should color input background bright green': () => {
    assertStrictEquality(ansify16.brightGreenBg('xyz'), '\x1b[102mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgGreenBright('xyz'), '\x1b[102mxyz\x1b[49m')
  },
  'API should color input background bright magenta': () => {
    assertStrictEquality(ansify16.brightMagentaBg('xyz'), '\x1b[105mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgMagentaBright('xyz'), '\x1b[105mxyz\x1b[49m')
  },
  'API should color input background bright red': () => {
    assertStrictEquality(ansify16.brightRedBg('xyz'), '\x1b[101mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgRedBright('xyz'), '\x1b[101mxyz\x1b[49m')
  },
  'API should color input background bright white': () => {
    assertStrictEquality(ansify16.brightWhiteBg('xyz'), '\x1b[107mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgWhiteBright('xyz'), '\x1b[107mxyz\x1b[49m')
  },
  'API should color input background bright yellow': () => {
    assertStrictEquality(ansify16.brightYellowBg('xyz'), '\x1b[103mxyz\x1b[49m')
    assertStrictEquality(ansify16.bgYellowBright('xyz'), '\x1b[103mxyz\x1b[49m')
  },

  // Chained Styles

  'API should apply chained styles': function () {
    assertStrictEquality(ansify16.blue.redBg.bold('xyz'), '\x1b[34m\x1b[41m\x1b[1mxyz\x1b[22m\x1b[49m\x1b[39m')
    assertStrictEquality(ansify16.bold.redBg.blue('xyz'), '\x1b[1m\x1b[41m\x1b[34mxyz\x1b[39m\x1b[49m\x1b[22m')
  },

  // Nested Styles

  'API should apply nested styles': function () {
    assertStrictEquality('>' + ansify16.red('abc' + ansify16.overline.blackBg('xyz') + '<'), '>\x1b[31mabc\x1b[53m\x1b[40mxyz\x1b[49m\x1b[55m<\x1b[39m')
  },

  'API should apply nested conflicting styles': function () {
    assertStrictEquality(ansify16.red('x' + ansify16.white('y' + ansify16.blue('z') + 'y') + 'x'), '\x1b[31mx\x1b[37my\x1b[34mz\x1b[39m\x1b[31m\x1b[37my\x1b[39m\x1b[31mx\x1b[39m')
  },

  // Theme Definitions

  'API should support theme definitions': function () {
    const {red, white} = ansify16.blue
    const boldRed = red.bold
    const boldWhite = white.bold

    assertStrictInequality(red('xyz'), white('xyz'))
    assertStrictInequality(boldRed('xyz'), boldWhite('xyz'))
    assertStrictInequality(white('xyz'), boldWhite('xyz'))
  },

  // Empty Input

  'API should omit styles when input is empty': function () {
    assertStrictEquality(ansify16.bold.red(''), '')
  },

  // Prototype Integrity

  'API should preserve Function.prototype methods': function () {
    assertStrictEquality(ansify16.apply(ansify16, ['xyz']), 'xyz')
    assertStrictEquality(ansify16.bind(ansify16, 'xyz')(), 'xyz')
    assertStrictEquality(ansify16.call(ansify16, 'xyz'), 'xyz')
    assertStrictEquality(Reflect.apply(ansify16.cyan, null, ['xyz']), '\x1b[36mxyz\x1b[39m')
    assertStrictEquality(ansify16.reset(ansify16.cyan.bind(null)('xyz'), 'xyz'), '\x1b[0m\x1b[36mxyz\x1b[39m xyz\x1b[0m')
    assertStrictEquality(ansify16.red.white.blue.call(null), '')
  },

  // Line Breaks

  'API should close and reopen escape sequences around LF line breaks': function () {
    assertStrictEquality(ansify16.cyan('abc\nxyz'), '\x1b[36mabc\x1b[39m\n\x1b[36mxyz\x1b[39m')
  },

  'API should close and reopen escape sequences around CRLF line breaks': function () {
    assertStrictEquality(ansify16.cyan('abc\r\nxyz'), '\x1b[36mabc\x1b[39m\r\n\x1b[36mxyz\x1b[39m')
  },

  // Graceful Degredation

  'API should omit styles when colors aren’t supported': function () {
    assertStrictEquality(ansify0.hex('#FF0000')('xyz'), 'xyz')
    assertStrictEquality(ansify0.hexBg('#FF0000')('xyz'), 'xyz')
  },

  'API should convert RGB color to ANSI 16': function () {
    assertStrictEquality(ansify16.hex('#FF0000')('xyz'), '\x1b[91mxyz\x1b[39m')
    assertStrictEquality(ansify16.hexBg('#FF0000')('xyz'), '\x1b[101mxyz\x1b[49m')
  },

  'API should convert RGB color to ANSI 256': function () {
    assertStrictEquality(ansify256.hex('#FF0000')('xyz'), '\x1b[38;5;196mxyz\x1b[39m')
    assertStrictEquality(ansify256.hexBg('#FF0000')('xyz'), '\x1b[48;5;196mxyz\x1b[49m')
  },

  'API should apply RGB colors': function () {
    assertStrictEquality(ansifyRgb.hex('#FF0000')('xyz'), '\x1b[38;2;255;0;0mxyz\x1b[39m')
    assertStrictEquality(ansifyRgb.hexBg('#FF0000')('xyz'), '\x1b[48;2;255;0;0mxyz\x1b[49m')
  },

  // Decorations

  'API should apply decorative styles when colors are supported': function () {
    assertStrictEquality(ansify16.decorative.cyan('xyz'), '\x1b[36mxyz\x1b[39m')
  },
  'API shouldn’t apply decorative styles when colors aren’t supported': function () {
    assertStrictEquality(ansify0.decorative.cyan('xyz'), '')
  },

  // Stderr

  'API should provide a functional stderr-specific interface': function () {
    assertStrictEquality(ansifyErr.cyan('xyz'), '\x1b[36mxyz\x1b[39m')
  }
}

function run(tests) {
  const {failed, messages, passed, total} =
    Object.entries(tests).reduce((o, [intention, fn]) => {
      const message = test(intention, fn)
      if (message != null) {
        o.messages[intention] = message
        ++o.failed
      } else {
        ++o.passed
      }

      ++o.total

      return o
    }, {failed: 0, messages: {}, passed: 0, total: 0})

  const passedStyle = passed > 0 ? ansify.green : ansify.dim
  const failedStyle = failed > 0 ? ansify.red : ansify.dim
  const width = `${total}`.length + 1
  const divider = ansify.dim(''.padStart(width + 8, '·'))

  if (failed > 0) {
    console.log(divider)
    Object.entries(messages).forEach(([intention, message]) => {
      console.error(ansify.red(` - ${intention}:`))
      console.error(message)
    })
  }

  console.log(divider)
  console.log(`${total}`.padStart(width), 'Total')
  console.log(divider)
  console.log(passedStyle(`${passed}`.padStart(width), 'Passed'))
  console.log(failedStyle(`${failed}`.padStart(width), 'Failed'))
  console.log(divider)
}

run(Test)
