const colors = require('./tailwind/colors')
const fontFamily = require('./tailwind/fontFamily')
const transitionTimingFunction = require('./tailwind/transitionTimingFunction')

module.exports = {
  content: ['./src/components/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  theme: {
    colors,
    extends: {
      fontFamily,
      transitionTimingFunction,
    },
  },
  variants: {},
}
