/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // 全局变量配置
  globals: {
    // 可以添加项目中使用的全局变量，避免ESLint报错
    globalVar: 'readonly',
  },
  // 环境配置
  env: {
    browser: true, // 浏览器环境
    node: true, // Node.js环境
    es6: true, // 启用ES6全局变量
  },
  // 文件过滤器
  ignorePatterns: ['node_modules/', 'dist/'], // 忽略指定的文件或目录
}
