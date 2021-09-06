module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    'cypress/globals': true,
  },
  plugins: [
    'prettier',
    'react',
    '@typescript-eslint',
    'unused-imports',
    'simple-import-sort',
    'react-hooks',
    'cypress',
  ],
  extends: ['prettier', 'react-app', 'plugin:react/recommended'],
  rules: {
    'prettier/prettier': ['warn'],
    'unused-imports/no-unused-imports': ['warn'],
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
