const colors = require('./tailwind/colors')
const fontFamily = require('./tailwind/fontFamily')
const transitionTimingFunction = require('./tailwind/transitionTimingFunction')

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/components/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
    enabled: process.env.NODE_ENV === 'production',
  },
  theme: {
    colors,
    fontFamily,
    transitionTimingFunction,
  },
  variants: {},
}
