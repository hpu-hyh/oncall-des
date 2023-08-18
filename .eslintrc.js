module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
    sourceType: 'module' // 使用模块化的文件结构
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  parser: '@typescript-eslint/parser', // 使用 '@typescript-eslint/parser' 作为解析器，用于解析 TypeScript 代码

  plugins: ['react', 'prettier'], // 启用插件
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error'] // 打开所有的prettier的rule
  }
}
