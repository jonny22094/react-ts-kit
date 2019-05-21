module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true,
    },
  },
  rules:  {
    'indent': 'off',
    '@typescript-eslint/indent': ["error", 2],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
}