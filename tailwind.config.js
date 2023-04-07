/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "/src/**/*.{js,ts,jsx,tsx}"
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
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'gray': '#959595',
      'red': '#FF3636'
    },
    fontFamily: {
      strawford: ['strawford'],
      'strawford-bold': ['strawford-bold'],
      'strawford-bold-italic':['strawford-bold-italic'],
      'strawford-light': ['strawford-light'],
      'strawford-light-italic':['strawford-light-italic'],
    },
    fontSize: {
      'sm': '0.618rem',
      'reg': '1rem',
      'h5': '1.618rem',
      'h4': '2.618rem',
      'h3': '4.236rem',
      'h2': '6.854rem',
      'h1': '11.098rem',
    },
    
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {},
  plugins: ["tailwindcss ,autoprefixer"],
}


