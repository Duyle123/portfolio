/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    transitionProperty:{
      none: 'none',
      all: 'all',
      width: 'width',
      height: 'height',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1536px'
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'deep-gray': '#595959',
      'gray': '#959595',
      'red': '#FF3636',
      'deep-blue':'#00212F',
      'blue':'#026792'
    },
    fontSize: {
      'sm': '0.618rem',
      'reg': '1rem',
      'h5': '1.618rem',
      'h4': '2.618rem',
      'h3': '4.236rem',
      'h2': '6.854rem',
      h1: ['11.098rem', '10rem'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'lg': [
          '0px 11px 9px -39px rgba(0,0,0,0.1)',
          '0px 26px 16px -28px rgba(0,0,0,0.1)',
          '0px 20px 42px 6px rgba(0,0,0,0.1)',
          '0px 10px 15px -3px rgba(0,0,0,0.1)',
        ],
      },
      backgroundSize: {
        'size-50': '50% 50%',
        'size-200': '200% 200%',
        'size-300': '300% 300%',
      },
      backgroundPosition: {
          '-pos-100': '-100% -100%',
          'pos-0': '0% 0%',
          'pos-50': '50% 50%',
          'pos-100': '100% 100%',
      },
    },
    
  },
  variants: {},
  plugins: ["tailwindcss ,autoprefixer",

    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
          '@screen 2xl': {
            maxWidth: '1728px',
          },
        }
      })
    }
  ],
}