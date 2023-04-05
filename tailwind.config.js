/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
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
      }
    },
  },
  plugins: [],
}


