# ansify
A chainable API (like [Chalk][1]) for styling ANSI terminal strings

## Installation
`npm install ansify-styles`

## Usage

```javascript
import {
  default as ansify, ansify0, ansify16, ansify256, ansifyErr, ansifyRgb
} from 'ansify-styles'

// The root of a chain of ANSI escape code formatters with support for colors
// automatically detected from stdout.
ansify

// Modifiers

console.log(ansify.bold('Hello!'))
console.log(ansify.dim('Hello!'))
console.log(ansify.hidden('Hello!'))
console.log(ansify.inverse('Hello!'))
console.log(ansify.italic('Hello!'))
console.log(ansify.overline('Hello!'))
console.log(ansify.reset('Hello!'))
console.log(ansify.strikethrough('Hello!'))
console.log(ansify.underline('Hello!'))

// Colors

console.log(ansify.black('Hello!'))
console.log(ansify.blue('Hello!'))
console.log(ansify.cyan('Hello!'))
console.log(ansify.gray('Hello!'))
console.log(ansify.green('Hello!'))
console.log(ansify.grey('Hello!'))
console.log(ansify.magenta('Hello!'))
console.log(ansify.red('Hello!'))
console.log(ansify.white('Hello!'))
console.log(ansify.yellow('Hello!'))

// Bright Colors

console.log(ansify.brightBlack('Hello!'))
console.log(ansify.blackBright('Hello!'))
console.log(ansify.brightBlue('Hello!'))
console.log(ansify.blueBright('Hello!'))
console.log(ansify.brightCyan('Hello!'))
console.log(ansify.cyanBright('Hello!'))
console.log(ansify.brightGreen('Hello!'))
console.log(ansify.greenBright('Hello!'))
console.log(ansify.brightMagenta('Hello!'))
console.log(ansify.magentaBright('Hello!'))
console.log(ansify.brightRed('Hello!'))
console.log(ansify.redBright('Hello!'))
console.log(ansify.brightWhite('Hello!'))
console.log(ansify.whiteBright('Hello!'))
console.log(ansify.brightYellow('Hello!'))
console.log(ansify.yellowBright('Hello!'))

// Background Colors

console.log(ansify.blackBg('Hello!'))
console.log(ansify.bgBlack('Hello!'))
console.log(ansify.blueBg('Hello!'))
console.log(ansify.bgBlue('Hello!'))
console.log(ansify.cyanBg('Hello!'))
console.log(ansify.bgCyan('Hello!'))
console.log(ansify.grayBg('Hello!'))
console.log(ansify.bgGray('Hello!'))
console.log(ansify.greenBg('Hello!'))
console.log(ansify.bgGreen('Hello!'))
console.log(ansify.greyBg('Hello!'))
console.log(ansify.bgGrey('Hello!'))
console.log(ansify.magentaBg('Hello!'))
console.log(ansify.bgMagenta('Hello!'))
console.log(ansify.redBg('Hello!'))
console.log(ansify.bgRed('Hello!'))
console.log(ansify.whiteBg('Hello!'))
console.log(ansify.bgWhite('Hello!'))
console.log(ansify.yellowBg('Hello!'))
console.log(ansify.bgYellow('Hello!'))

// Bright background colors

console.log(ansify.brightBlackBg('Hello!'))
console.log(ansify.bgBlackBright('Hello!'))
console.log(ansify.brightBlueBg('Hello!'))
console.log(ansify.bgBlueBright('Hello!'))
console.log(ansify.brightCyanBg('Hello!'))
console.log(ansify.bgCyanBright('Hello!'))
console.log(ansify.brightGreenBg('Hello!'))
console.log(ansify.bgGreenBright('Hello!'))
console.log(ansify.brightMagentaBg('Hello!'))
console.log(ansify.bgMagentaBright('Hello!'))
console.log(ansify.brightRedBg('Hello!'))
console.log(ansify.bgRedBright('Hello!'))
console.log(ansify.brightWhiteBg('Hello!'))
console.log(ansify.bgWhiteBright('Hello!'))
console.log(ansify.brightYellowBg('Hello!'))
console.log(ansify.bgYellowBright('Hello!'))

// Decorative

console.log(ansify.decorative.inverse('······'))
console.log(ansify.visible.inverse('······'))

// ANSI 256

console.log(ansify.ansi256(215)('Hello!'))
console.log(ansify.ansi256Bg(215)('Hello!'))
console.log(ansify.bgAnsi256(215)('Hello!'))

// True Color (Hex)

console.log(ansify.hex('#FC0')('Hello!'))
console.log(ansify.hexBg('#FC0')('Hello!'))
console.log(ansify.bgHex('#FC0')('Hello!'))

// True Color (RGB)

console.log(ansify.rgb(255, 153, 0)('Hello!'))
console.log(ansify.rgbBg(255, 153, 0)('Hello!'))
console.log(ansify.bgRgb(255, 153, 0)('Hello!'))

// The root of a chain of 0-color ANSI escape code formatters.
ansify0

// The root of a chain of 16-color ANSI escape code formatters.
ansify16

// The root of a chain of 256-color ANSI escape code formatters.
ansify256

// The root of a chain of ANSI escape code formatters with support for colors
// automatically detected from stderr.
ansifyErr

// The root of a chain of true-color ANSI escape code formatters.
ansifyRgb
```

[1]: https://github.com/chalk/chalk
