module.exports = {
  env: {
    commonjs: true,
    es2021: true
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'comma-dangle': 'off',
    'no-console': 'off',
    camelcase: 'off'
  }
};
