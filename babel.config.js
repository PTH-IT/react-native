module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
        alias: {
          '~':"./src",
          '@reduxreducers': './storeredux/reducers',
          '@reduxaction': './storeredux/action',
          '@Constants': './storeredux/constants'
        },
      },
    ],
  ],
};
