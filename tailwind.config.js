const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif]
      },
      inset: {
        '3': '3rem',
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover','focus', 'active'],
    borderWidth: ['responsive', 'hover', 'focus'],
    transitionTimingFunction: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}
