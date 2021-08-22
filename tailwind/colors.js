const colors = require('tailwindcss/colors')

module.exports = {
  ...colors,
  light: {
    100: '#fff',
    70: 'rgba(255, 255, 255, 0.7)',
    30: 'rgba(255, 255, 255, 0.3)',
    10: 'rgba(255, 255, 255, 0.12)',
  },
  dark: {
    12: 'rgba(0, 0, 0, 0.12)',
    26: 'rgba(0, 0, 0, 0.26)',
    54: 'rgba(0, 0, 0, 0.54)',
  },
}
