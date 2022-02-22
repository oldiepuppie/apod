module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      vp12: '1280px',
    },
    colors: {
      white: '#ffffff',
      skeletonGray: '#fcfcfc',
      bgGray: '#EBEBEB',
      lightGray: '#9D9D9D',
      mediumGray: '#707070',
      darkGray: '#555555',
      black: '#000000',
      transparentBlack: '#00000080',
      green: '#008867',
      hightlightYellow: '#ffff59',
      red: '#de4545',
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
