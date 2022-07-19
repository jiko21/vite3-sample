module.exports = {
  'env': {
    browser: true,
    es2021: true,
  },
  'extends': ['plugin:react/recommended', 'google', 'prettier', 'eslint:recommended'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  'plugins': ['react', '@typescript-eslint', 'jest'],
  'rules': {
    'require-jsdoc': 'off',
    'react/react-in-jsx-scope': 'off',
    'object-curly-spacing': 'off',
    'react/display-name': 'off'
  },
  'settings': {
    'react': {
    'version': 'detect',
    }
  }
};
