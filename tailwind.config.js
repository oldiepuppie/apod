module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      vp12: '1280px',
    },
    colors: {
      white: '#ffffff',
      bgGray: '#EBEBEB',
      lightGray: '#9D9D9D',
      mediumGray: '#707070',
      darkGray: '#555555',
      black: '#000000',
      transparentBlack: '#00000080',
      green: '#008867',
      red: '#de3c3c',
      tempRed: '#ff0000',
    },
    extend: {
      gridTemplateColumns: {
        colAutoFill: 'repeat(auto-fill, 17vw)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
