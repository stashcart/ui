const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },

  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],

  plugins: ['react', 'prettier', '@typescript-eslint'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.ts'],
      },
    },
  },

  ignorePatterns: ['.eslintrc.js', '**/*.css', '**/*.png'],

  rules: {
    'prettier/prettier': WARN,

    'no-use-before-define': OFF,
    'no-shadow': OFF,
    'prefer-destructuring': WARN,
    'no-unused-expressions': OFF,
    'lines-between-class-members': [
      WARN,
      'always',
      { exceptAfterSingleLine: true },
    ],

    '@typescript-eslint/no-use-before-define': [ERROR, { functions: false }],
    '@typescript-eslint/no-unused-expressions': ERROR,
    '@typescript-eslint/no-shadow': ['error'],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': WARN,
    'import/prefer-default-export': OFF,
    'import/no-unresolved': OFF, // Using typescript resolver instead

    'react/jsx-filename-extension': OFF,
    'react/prop-types': OFF,
    'react/jsx-props-no-spreading': [
      WARN,
      {
        custom: 'ignore',
      },
    ],
    'react/require-default-props': OFF,

    // Because of next.js `Link`
    'jsx-a11y/anchor-is-valid': OFF,
  },
};
