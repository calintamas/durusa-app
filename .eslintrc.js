module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react-hooks'],
  globals: {
    __DEV__: false,
    fetch: false,
    require: false,
    window: false
  },
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/sort-comp': 0,
    'prefer-const': 0,
    'no-return-assign': 0,
    'no-useless-escape': 0,
    'react/no-array-index-key': 0,
    'no-underscore-dangle': 0,
    camelcase: 0,
    'prefer-destructuring': 0,
    'no-plusplus': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-did-mount-set-state': 0
  }
};
