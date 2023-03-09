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
          'reduxreducers': './storeredux/reducers',
          'action': './storeredux/action',
          'constants': './storeredux/constants',
          'config': './config',
          'components': './src/components',
          'API': './src/api'
        },
      },
    ],
  ],
};
