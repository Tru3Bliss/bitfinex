module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          primary: {
            DEFAULT: '#102331',
            light: '#172D3E',
            200: '#112330b3'
          },
          blue:{
            DEFAULT: '#82BAF6'
          },
          green:{
            DEFAULT: '#03CA9B',
            100: '#01A781'
          },
          red:{
            DEFAULT: '#f05359'
          }
        }
      },
      spacing: {
        1.5: '7px',
        7.3: '29px',
        7.5: '30px',
        12.5: '50px',
        37: '150px',
        525: '525px',
        176: '176px'
      },
      boxShadow: {
        '50': "0px 0px 30px rgb(0 0 0 / 25%)",
      }
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontSize: {
      'xs': '.8rem',
      'sm': '.875rem',
      '0.9': '.9rem',
      '14.5': '14.5px;',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '22px',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}
