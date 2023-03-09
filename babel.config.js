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
          'config': './config',
          'components': './src/components',
          'API': './src/api',
          "features": ["./src/features"],
          "app": ["./src/app"],

        },
      },
    ],
  ],
};
