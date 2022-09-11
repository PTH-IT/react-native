module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: [
    // ...
    'react-hooks',
    ,
  ],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react-hooks/rules-of-hooks': 'auto', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'auto', // Checks effect dependencies
  },
};
// , insertPragma: 'auto'
