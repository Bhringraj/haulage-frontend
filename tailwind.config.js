function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !==undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
        }
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          // 'button-muted': 'var(--color-button-muted)',
          'button-muted': withOpacity('--color-button-muted'),
          // 'button-muted': ({ opacityValue }) => {
          // `rgba(var(--color-button-muted), ${opacityValue})`
          //   if (opacityValue !== undefined) {
          //     return `rgba(var(--color-button-muted), ${opacityValue})`
          //   }
          //   return `rgb(var(--color-button-muted))`
          // },
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill')
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
