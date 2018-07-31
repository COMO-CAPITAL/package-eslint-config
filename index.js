module.exports = {
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
    'prettier'
  ],
  plugins: [
    'no-use-extend-native',
    'unicorn',
    'promise',
    'node',
    'prettier'
  ],
  env: {
    'browser': true,
    'node': true
  },
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'es5'
    }],
    'valid-jsdoc': ['error', {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
    }],
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
    // allow use of functions before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],

    'promise/catch-or-return': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': ['error', {allowReject: true}],
    'promise/param-names': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/valid-params': 'error',

    'react/jsx-indent': 0,
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],

    'node/exports-style': ['error', 'module.exports'],
    'node/no-deprecated-api': 'error',
    'node/process-exit-as-throw': 'error',

    'import/default': 'error',
    'import/no-unresolved': 0,
    'import/no-mutable-exports': 0,
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],

    // Disable formatting rules conflicting with Prettier
    'unicorn/number-literal-case': 'off',
    'unicorn/filename-case': ['error', {'case': 'pascalCase'}]
  }
}
