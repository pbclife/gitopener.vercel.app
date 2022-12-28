const defaultTheme = require('tailwindcss/defaultTheme');
const svgToDataUri = require('mini-svg-data-uri');
// const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-fira-code)', ...defaultTheme.fontFamily.mono],
      },
      height: {
        'screen-16': '16vh',
        'screen-33': '33vh',
        'screen-50': '50vh',
        'screen-75': '75vh',
        'screen-85': '85vh',
      },
      minHeight: {
        16: '4rem',
        64: '16rem',
        'screen-50': '50vh',
        'screen-75': '75vh',
        'screen-85': '85vh',
        'screen-90': '90vh',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
        'fill-40': 'repeat(auto-fill, minmax(10rem,1fr))',
        'fill-64': 'repeat(auto-fill, minmax(16rem,1fr))',
        'fill-72': 'repeat(auto-fill, minmax(18rem,1fr))',
        'fill-76': 'repeat(auto-fill, minmax(19rem,1fr))',
        'fill-80': 'repeat(auto-fill, minmax(20rem,1fr))',
        'fill-96': 'repeat(auto-fill, minmax(24rem,1fr))',
      },
      keyframes: {
        pokeLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
      animation: {
        'poke-left': 'pokeLeft 1s ease-in-out infinite alternate',
        'bg-shift': 'gradient 15s ease infinite alternate',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss'),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
      matchUtilities(
        {
          'bg-dot': (value) => ({
            backgroundImage: `radial-gradient(${value} 2px, transparent 2px), radial-gradient(${value} 2px, transparent 2px)`,
            backgroundSize: `44px 44px`,
            backgroundPosition: `0 0, 22px 22px`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        }
      );
      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
  ],
};
