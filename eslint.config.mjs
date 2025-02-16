// eslint.config.js
// 导入 ESLint 官方推荐的核心规则
import js from '@eslint/js'
// 导入预定义的全局变量，比如浏览器环境中的 window 和 document
import globals from 'globals'
// 用于检查 React Hooks 的使用是否符合规范。
import reactHooks from 'eslint-plugin-react-hooks'
// 用于检查 React 刷新的使用是否符合规范。
import reactRefresh from 'eslint-plugin-react-refresh'
// 导入 TypeScript ESLint 的规则
import tseslint from 'typescript-eslint'
// 导入 React ESLint 的规则
import react from 'eslint-plugin-react'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    settings: { react: { version: '19.0' } },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      // Add the react plugin
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      // 因为 TypeScript 已经有了类型检查，所以可以关闭 prop-types 规则
      'react/prop-types': 'off',
    },
  },
)
