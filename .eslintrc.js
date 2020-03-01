var path = require('path')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'react-hooks',
    'react',
    'graphql',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        tagName: 'graphql',
        schemaJsonFilepath: path.resolve(
          __dirname,
          'src/__generated__/gatsby-introspection.json'
        ),
      },
    ],
  },
}
